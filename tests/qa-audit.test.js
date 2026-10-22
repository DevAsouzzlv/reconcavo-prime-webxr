import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

// Importa helpers para teste unitário
function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
}

function cleanPriceNum(rawPrice) {
    if (!rawPrice) return 0;
    return parseInt(String(rawPrice).replace(/\D/g, ''), 10) || 0;
}

function generateWhatsAppUrl(property, customMsg) {
    const phone = property?.broker?.phone || '5575998124500';
    const text = customMsg || `Olá ${property?.broker?.name || 'Corretor'}! Gostaria de agendar uma visita presencial exclusiva na *${property?.title || 'Propriedade'}* (${property?.price || ''}) em Santo Antônio de Jesus, que conheci através do Tour Virtual 360º.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function validateCEP(cep) {
    if (!cep) return false;
    const clean = cep.replace(/\D/g, '');
    return clean.length === 8;
}

function checkAdminAuth(sessionStorageMock) {
    return sessionStorageMock.getItem('broker_logged') === 'true';
}

describe('Suíte de Testes de Qualidade & Correções de Segurança (QA Audit)', () => {

    describe('BUG-001: Controle de Acesso (Broken Access Control - OWASP A01)', () => {
        test('deve bloquear acesso ao admin quando broker_logged não estiver definido', () => {
            const mockStorage = { getItem: () => null };
            assert.strictEqual(checkAdminAuth(mockStorage), false, 'Visitante anônimo deve ser barrado');
        });

        test('deve autorizar acesso ao admin quando corretor estiver autenticado', () => {
            const mockStorage = { getItem: (key) => key === 'broker_logged' ? 'true' : null };
            assert.strictEqual(checkAdminAuth(mockStorage), true, 'Corretor credenciado deve ser autorizado');
        });
    });

    describe('BUG-002: Prevenção de Injeção de Código via DOM (XSS - OWASP A03)', () => {
        test('deve sanitizar tags de script maliciosas', () => {
            const payload = '<script>alert("hack")</script>';
            const clean = escapeHTML(payload);
            assert.strictEqual(clean, '&lt;script&gt;alert(&quot;hack&quot;)&lt;/script&gt;');
            assert.ok(!clean.includes('<script>'), 'Não deve conter tags HTML puras');
        });

        test('deve sanitizar vetores de eventos onerror e quebras de atributos', () => {
            const payload = '<img src=x onerror="alert(document.domain)">';
            const clean = escapeHTML(payload);
            assert.ok(!clean.includes('<img'));
            assert.ok(!clean.includes('"'));
        });

        test('deve tratar valores nulos ou indefinidos de forma segura', () => {
            assert.strictEqual(escapeHTML(null), '');
            assert.strictEqual(escapeHTML(undefined), '');
            assert.strictEqual(escapeHTML(''), '');
        });
    });

    describe('BUG-003: Validação de Tipos e Cálculo de Preço Numérico', () => {
        test('deve extrair o valor numérico correto do preço formatado em Real (R$)', () => {
            assert.strictEqual(cleanPriceNum('R$ 2.450.000'), 2450000);
            assert.strictEqual(cleanPriceNum('R$ 3.850.000'), 3850000);
            assert.strictEqual(cleanPriceNum('R$ 890.000'), 890000);
        });

        test('deve lidar com entradas sem prefixo ou com espaços', () => {
            assert.strictEqual(cleanPriceNum(' 1500000 '), 1500000);
            assert.strictEqual(cleanPriceNum(''), 0);
            assert.strictEqual(cleanPriceNum(null), 0);
        });
    });

    describe('Integrações: Validação de CEP (ViaCEP) e WhatsApp Leads', () => {
        test('deve validar CEPs no formato correto de 8 dígitos', () => {
            assert.strictEqual(validateCEP('44572-000'), true);
            assert.strictEqual(validateCEP('44572000'), true);
            assert.strictEqual(validateCEP('123'), false);
            assert.strictEqual(validateCEP(''), false);
            assert.strictEqual(validateCEP(null), false);
        });

        test('deve gerar link do WhatsApp com mensagem devidamente codificada em URI', () => {
            const mockProp = {
                title: 'Mansão Villa Imperial',
                price: 'R$ 2.450.000',
                broker: {
                    name: 'Carlos Eduardo Mendes',
                    phone: '5575998124500'
                }
            };
            const waUrl = generateWhatsAppUrl(mockProp);
            assert.ok(waUrl.startsWith('https://wa.me/5575998124500?text='));
            assert.ok(waUrl.includes(encodeURIComponent('Mansão Villa Imperial')));
            assert.ok(waUrl.includes(encodeURIComponent('R$ 2.450.000')));
        });
    });
});
