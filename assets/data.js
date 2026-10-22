// Base de dados enriquecida com detalhes arquitetônicos de alto padrão
const defaultProperties = [
    {
        id: 'villa-imperial',
        title: 'Mansão Villa Imperial',
        tagline: 'Obra-prima brutalista com pé-direito duplo e raia de borda infinita',
        price: 'R$ 2.450.000',
        priceNum: 2450000,
        condo: 'R$ 850 / mês',
        iptu: 'R$ 3.200 / ano',
        bairro: 'Condomínio Jardins',
        bairroKey: 'jardins',
        address: 'Avenida Roberto Santos, Condomínio Fechado Jardins, Santo Antônio de Jesus - BA',
        tipo: 'mansao',
        tipoLabel: 'Mansão Brutalista Contemporânea',
        area: '520 m²',
        terreno: '850 m²',
        suites: 4,
        banheiros: 6,
        vagas: 4,
        hasVR: true,
        destaque: true,
        ano: 2024,
        posicaoSolar: 'Nascente Total',
        lat: -12.9694,
        lng: -39.2619,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
        gallery: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85'
        ],
        desc: 'Projetada para valorizar a ventilação cruzada e a iluminação natural típica do Recôncavo Baiano. Estruturada em concreto aparente ripado e blocos de travertino romano bruto. O living imponente de 120m² possui pé-direito duplo de 6,20m e se integra totalmente à varanda gourmet através de esquadrias minimalistas embutidas no piso.',
        architecturalHighlights: [
            { icon: '🏛️', title: 'Pé-Direito Duplo', desc: '6,20m de vão livre com fachada envidraçada estrutural structural glazing.' },
            { icon: '🏊', title: 'Piscina & Raia de 18m', desc: 'Revestimento hijau vulcânico importado com borda infinita e prainha aquecida.' },
            { icon: '⚡', title: 'Sustentabilidade Plena', desc: 'Usina solar fotovoltaica 1.200 kWh/mês com microinversores e poço artesiano.' },
            { icon: '🛋️', title: 'Living & Espaço Gourmet', desc: 'Ilha em mármore Calacatta Michelangelo de 4,20m com churrasqueira a gás oculta.' },
            { icon: '🛏️', title: 'Master Suíte SPA', desc: '82m² privativos, banheira freestanding de imersão e closet duplo com iluminação LED.' },
            { icon: '🛡️', title: 'Segurança & Privacidade', desc: 'Portaria blindada 24h com controle de acesso biométrico e ronda motorizada armada.' }
        ],
        broker: {
            name: 'Carlos Eduardo Mendes',
            creci: 'CRECI-BA 24.890',
            phone: '5575998124500',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80',
            email: 'carlos.mendes@reconcavoprime.com.br',
            experience: '12 anos especializado no mercado de altíssimo padrão em SAJ'
        },
        panoramas: {
            living: {
                title: 'Living Principal & Pé-Direito',
                url: 'assets/panoramas/living_360.jpg',
                hotspots: [
                    { pitch: -5, yaw: 35, text: 'Ir para Varanda Gourmet & Piscina', target: 'gourmet' },
                    { pitch: 12, yaw: -45, text: 'Pé-Direito Duplo (6.20m)' },
                    { pitch: -8, yaw: 160, text: 'Subir para Suíte Master', target: 'suite' }
                ]
            },
            gourmet: {
                title: 'Área Gourmet & Piscina',
                url: 'assets/panoramas/gourmet_360.jpg',
                hotspots: [
                    { pitch: 0, yaw: -140, text: 'Retornar ao Living Principal', target: 'living' }
                ]
            },
            suite: {
                title: 'Suíte Master & Hidromassagem',
                url: 'assets/panoramas/suite_360.jpg',
                hotspots: [
                    { pitch: -10, yaw: 10, text: 'Descer para Living', target: 'living' }
                ]
            }
        }
    },
    {
        id: 'reserva-busca-vida',
        title: 'Residência Busca Vida Master',
        tagline: 'Refúgio de luxo privativo com adega climatizada e quadra de beach tennis',
        price: 'R$ 3.850.000',
        priceNum: 3850000,
        condo: 'R$ 980 / mês',
        iptu: 'R$ 4.100 / ano',
        bairro: 'Condomínio Busca Vida',
        bairroKey: 'busca-vida',
        address: 'Alameda das Palmeiras, Condomínio Busca Vida, Santo Antônio de Jesus - BA',
        tipo: 'mansao',
        tipoLabel: 'Mansão em Condomínio Fechado',
        area: '680 m²',
        terreno: '1.100 m²',
        suites: 5,
        banheiros: 7,
        vagas: 6,
        hasVR: true,
        destaque: true,
        ano: 2023,
        posicaoSolar: 'Nascente / Norte',
        lat: -12.9730,
        lng: -39.2680,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
        gallery: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85'
        ],
        desc: 'Localizada no condomínio fechado mais reservado de Santo Antônio de Jesus. Residência pensada para grandes recepções e convívio familiar, com living imerso em espelho dágua, home cinema acústico com projetor 4K e adega climatizada em vidro piso-teto para 800 garrafas.',
        architecturalHighlights: [
            { icon: '🎾', title: 'Beach Tennis & SPA', desc: 'Quadra esportiva privativa em areia tratada e deck com sauna seca e úmida.' },
            { icon: '🍷', title: 'Adega Climatizada 800 Rótulos', desc: 'Controle de umidade constante e iluminação UV-free em marcenaria nobre de nogueira.' },
            { icon: '🚁', title: 'Acesso VIP & Heliponto', desc: 'Proximidade imediata ao ponto de pouso executivo homologado da região.' },
            { icon: '🔋', title: 'Gerador Total 100%', desc: 'Autonomia completa sem interrupção de energia para climatização e elevador.' }
        ],
        broker: {
            name: 'Carlos Eduardo Mendes',
            creci: 'CRECI-BA 24.890',
            phone: '5575998124500',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80',
            email: 'carlos.mendes@reconcavoprime.com.br',
            experience: '12 anos especializado no mercado de altíssimo padrão em SAJ'
        },
        panoramas: {
            living: {
                title: 'Living Hall & Espelho d’Água',
                url: 'assets/panoramas/gourmet_360.jpg',
                hotspots: [
                    { pitch: 0, yaw: 45, text: 'Área de Lazer Externa', target: 'gourmet' }
                ]
            },
            gourmet: {
                title: 'Deck Gourmet & Piscina',
                url: 'assets/panoramas/living_360.jpg',
                hotspots: [
                    { pitch: 0, yaw: -90, text: 'Voltar ao Hall', target: 'living' }
                ]
            },
            suite: {
                title: 'Suíte Presidencial com Terraço',
                url: 'assets/panoramas/suite_360.jpg',
                hotspots: []
            }
        }
    },
    {
        id: 'penthouse-horizon',
        title: 'Penthouse Horizon Centro',
        tagline: 'Vista 360º para as serras e skyline de Santo Antônio de Jesus',
        price: 'R$ 1.890.000',
        priceNum: 1890000,
        condo: 'R$ 1.250 / mês',
        iptu: 'R$ 2.900 / ano',
        bairro: 'Centro Nobre',
        bairroKey: 'centro',
        address: 'Rua Gorgônio José de Araújo, Centro Nobre, Santo Antônio de Jesus - BA',
        tipo: 'cobertura',
        tipoLabel: 'Cobertura Duplex Exclusiva',
        area: '340 m²',
        terreno: '340 m²',
        suites: 3,
        banheiros: 5,
        vagas: 3,
        hasVR: true,
        destaque: false,
        ano: 2024,
        posicaoSolar: 'Poente Panorâmico',
        lat: -12.9660,
        lng: -39.2590,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
        gallery: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85'
        ],
        desc: 'Cobertura duplex única que ocupa o último pavimento do edifício mais alto e sofisticado do Centro Nobre de SAJ. Conta com elevador privativo com chave biométrica e terraço superior aberto com deck e jacuzzi para 8 pessoas com vista para o pôr do sol.',
        architecturalHighlights: [
            { icon: '🌇', title: 'Skyline Panorâmico 360º', desc: 'Visão desimpedida para toda a cidade e a serra do Jiquiriçá.' },
            { icon: '🛁', title: 'Jacuzzi & Rooftop Lounge', desc: 'Espaço gourmet a céu aberto com hidro aquecida e som ambiente embutido.' },
            { icon: '🛗', title: 'Elevador com Acesso Biométrico', desc: 'O elevador se abre diretamente no hall social do apartamento.' }
        ],
        broker: {
            name: 'Carlos Eduardo Mendes',
            creci: 'CRECI-BA 24.890',
            phone: '5575998124500',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80',
            email: 'carlos.mendes@reconcavoprime.com.br',
            experience: '12 anos especializado no mercado de altíssimo padrão em SAJ'
        },
        panoramas: {
            living: {
                title: 'Living Superior & Terraço',
                url: 'assets/panoramas/suite_360.jpg',
                hotspots: []
            },
            gourmet: {
                title: 'Lounge Jacuzzi',
                url: 'assets/panoramas/living_360.jpg',
                hotspots: []
            },
            suite: {
                title: 'Suíte Master Panorâmica',
                url: 'assets/panoramas/gourmet_360.jpg',
                hotspots: []
            }
        }
    },
    {
        id: 'casa-terrea-maria-preta',
        title: 'Residência Serena Maria Preta',
        tagline: 'Linhas horizontais contemporâneas com jardim de inverno e privacidade total',
        price: 'R$ 1.650.000',
        priceNum: 1650000,
        condo: 'Isento',
        iptu: 'R$ 2.100 / ano',
        bairro: 'Maria Preta',
        bairroKey: 'maria-preta',
        address: 'Bairro Maria Preta, Santo Antônio de Jesus - BA',
        tipo: 'casa',
        tipoLabel: 'Casa Térrea Contemporânea',
        area: '290 m²',
        terreno: '500 m²',
        suites: 3,
        banheiros: 4,
        vagas: 3,
        hasVR: false,
        destaque: false,
        ano: 2023,
        posicaoSolar: 'Nascente',
        lat: -12.9640,
        lng: -39.2640,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85'
        ],
        desc: 'Construída sem desníveis ou escadas, perfeita para quem busca conforto, acessibilidade e elegância. O jardim interno de inverno separa a ala social da ala íntima com esquadrias acústicas pretas do chão ao teto.',
        architecturalHighlights: [
            { icon: '🌿', title: 'Jardim de Inverno Zen', desc: 'Pátio central com vegetação tropical nativa e iluminação zenital.' },
            { icon: '🏊', title: 'Piscina com Cascata', desc: 'Área externa ajardinada com deck e chuveirão em pedra natural.' }
        ],
        broker: {
            name: 'Carlos Eduardo Mendes',
            creci: 'CRECI-BA 24.890',
            phone: '5575998124500',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80',
            email: 'carlos.mendes@reconcavoprime.com.br',
            experience: '12 anos especializado no mercado de altíssimo padrão em SAJ'
        },
        panoramas: {
            living: {
                title: 'Living Integrado',
                url: 'assets/panoramas/living_360.jpg',
                hotspots: []
            }
        }
    }
];

// Gerenciamento LocalStorage com Resiliência de Cota
function getProperties() {
    const saved = localStorage.getItem('reconcavo_properties');
    if (saved) {
        try { return JSON.parse(saved); } catch(e) { console.error('Erro ao ler propriedades:', e); }
    }
    return defaultProperties;
}

function saveProperties(props) {
    try {
        localStorage.setItem('reconcavo_properties', JSON.stringify(props));
        return true;
    } catch (e) {
        console.error('Erro de persistência no LocalStorage:', e);
        if (typeof showToast === 'function') {
            showToast('⚠️ Limite de armazenamento local excedido. Não foi possível persistir.', 'warning');
        }
        return false;
    }
}

function getPropertyById(id) {
    const props = getProperties();
    return props.find(p => p.id === id) || props[0];
}

function generateWhatsAppUrl(property, customMsg) {
    const phone = property?.broker?.phone || '5575998124500';
    const text = customMsg || `Olá ${property?.broker?.name || 'Corretor'}! Gostaria de agendar uma visita presencial exclusiva na *${property?.title || 'Propriedade'}* (${property?.price || ''}) em Santo Antônio de Jesus, que conheci através do Tour Virtual 360º.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// Resiliência de Rede: Geocodificação OpenStreetMap Nominatim com Timeout & AbortController
async function geocodeSAJAddress(address) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    try {
        const query = encodeURIComponent(`${address}, Santo Antônio de Jesus, Bahia, Brasil`);
        const resp = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`, {
            signal: controller.signal,
            headers: {
                'Accept': 'application/json'
            }
        });
        clearTimeout(timeoutId);

        if (!resp.ok) throw new Error(`HTTP error ${resp.status}`);
        const data = await resp.json();
        if (data && data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon),
                displayName: data[0].display_name
            };
        }
    } catch (e) {
        clearTimeout(timeoutId);
        console.warn('Geocodificação Nominatim falhou ou sofreu timeout:', e);
    }
    // Fallback gracioso: Centro de Santo Antônio de Jesus
    return {
        lat: -12.9700,
        lng: -39.2620,
        isFallback: true
    };
}

// Resiliência de Rede: ViaCEP com Validação e Timeout
async function fetchViaCEP(cep) {
    if (!cep) return null;
    const cleanCEP = cep.replace(/\D/g, '');
    if (cleanCEP.length !== 8) return null;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
        const resp = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`, { signal: controller.signal });
        clearTimeout(timeoutId);
        const data = await resp.json();
        if (!data.erro) return data;
    } catch (e) {
        clearTimeout(timeoutId);
        console.warn('Consulta ViaCEP falhou ou sofreu timeout:', e);
    }
    return null;
}
