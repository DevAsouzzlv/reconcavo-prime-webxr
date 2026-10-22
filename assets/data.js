// Base de dados central compartilhada com suporte a APIs em tempo real e LocalStorage
const defaultProperties = [
    {
        id: 'villa-imperial',
        title: 'Mansão Villa Imperial',
        price: 'R$ 2.450.000',
        priceNum: 2450000,
        condo: 'R$ 850 / mês',
        iptu: 'R$ 3.200 / ano',
        bairro: 'Condomínio Jardins',
        bairroKey: 'jardins',
        address: 'Av. Roberto Santos, Condomínio Jardins, Santo Antônio de Jesus - BA',
        tipo: 'mansao',
        tipoLabel: 'Mansão Contemporânea',
        area: '520 m²',
        terreno: '850 m²',
        suites: 4,
        banheiros: 6,
        vagas: 4,
        hasVR: true,
        destaque: true,
        lat: -12.9694,
        lng: -39.2619,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
        ],
        desc: 'Residência brutalista contemporânea em concreto aparente e travertino romano. Living com pé-direito duplo de 6,20m integrado à varanda gourmet climatizada e piscina com borda infinita aquecida por energia solar fotovoltaica.',
        features: ['Pé-direito duplo (6,20m)', 'Piscina borda infinita', 'Automação residencial Lutron', 'Energia solar instalada', 'Portaria armada 24h', 'Poço artesiano privativo'],
        broker: {
            name: 'Carlos Eduardo Mendes',
            creci: 'CRECI-BA 24.890',
            phone: '5575998124500',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
            email: 'carlos.mendes@reconcavoprime.com.br'
        },
        panoramas: {
            living: {
                title: 'Living & Pé-Direito Duplo',
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
        lat: -12.9730,
        lng: -39.2680,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
        ],
        desc: 'Espetacular propriedade em condomínio fechado com heliponto nas proximidades, acabamentos nobres em mármore calacatta ouro e projeto luminotécnico assinado.',
        features: ['Heliponto próximo', 'Quadra de Beach Tennis privativa', '5 Suítes com closet', 'Adega climatizada para 800 rótulos', 'Gerador de energia 100%'],
        broker: {
            name: 'Carlos Eduardo Mendes',
            creci: 'CRECI-BA 24.890',
            phone: '5575998124500',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
            email: 'carlos.mendes@reconcavoprime.com.br'
        },
        panoramas: {
            living: {
                title: 'Living Hall Principal',
                url: 'assets/panoramas/gourmet_360.jpg',
                hotspots: [
                    { pitch: 0, yaw: 45, text: 'Área de Lazer Externa', target: 'gourmet' }
                ]
            },
            gourmet: {
                title: 'Deck Panorâmico & Raia',
                url: 'assets/panoramas/living_360.jpg',
                hotspots: [
                    { pitch: 0, yaw: -90, text: 'Voltar ao Hall', target: 'living' }
                ]
            },
            suite: {
                title: 'Suíte Presidencial',
                url: 'assets/panoramas/suite_360.jpg',
                hotspots: []
            }
        }
    },
    {
        id: 'penthouse-horizon',
        title: 'Penthouse Horizon Centro',
        price: 'R$ 1.890.000',
        priceNum: 1890000,
        condo: 'R$ 1.250 / mês',
        iptu: 'R$ 2.900 / ano',
        bairro: 'Centro Nobre',
        bairroKey: 'centro',
        address: 'Rua Gorgônio José de Araújo, Centro, Santo Antônio de Jesus - BA',
        tipo: 'cobertura',
        tipoLabel: 'Cobertura Duplex',
        area: '340 m²',
        terreno: '340 m²',
        suites: 3,
        banheiros: 5,
        vagas: 3,
        hasVR: true,
        destaque: false,
        lat: -12.9660,
        lng: -39.2590,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
        ],
        desc: 'Cobertura duplex no ponto mais alto de Santo Antônio de Jesus. Jacuzzi aquecida no terraço panorâmico com vista 360º para toda a cidade e montanhas.',
        features: ['Vista 360º para SAJ', 'Jacuzzi no terraço', 'Elevador com acesso biométrico direto', '3 Vagas livres de garagem'],
        broker: {
            name: 'Carlos Eduardo Mendes',
            creci: 'CRECI-BA 24.890',
            phone: '5575998124500',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
            email: 'carlos.mendes@reconcavoprime.com.br'
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
        lat: -12.9640,
        lng: -39.2640,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
        ],
        desc: 'Projeto térreo em linhas minimalistas no bairro nobre Maria Preta. Jardim interno de inverno, esquadrias pretas do chão ao teto e espaço gourmet integrado.',
        features: ['Projeto 100% térreo', 'Jardim de inverno', 'Piscina com cascata', 'Acabamento em porcelanato 120x120'],
        broker: {
            name: 'Carlos Eduardo Mendes',
            creci: 'CRECI-BA 24.890',
            phone: '5575998124500',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
            email: 'carlos.mendes@reconcavoprime.com.br'
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

// Gerenciamento LocalStorage
function getProperties() {
    const saved = localStorage.getItem('reconcavo_properties');
    if (saved) {
        try { return JSON.parse(saved); } catch(e) {}
    }
    return defaultProperties;
}

function saveProperties(props) {
    localStorage.setItem('reconcavo_properties', JSON.stringify(props));
}

function getPropertyById(id) {
    const props = getProperties();
    return props.find(p => p.id === id) || props[0];
}

// INTEGRAÇÃO 1: API OFICIAL DO WHATSAPP (com link inteligente e mensagem pré-formatada)
function generateWhatsAppUrl(property, customMsg) {
    const phone = property?.broker?.phone || '5575998124500';
    const text = customMsg || `Olá ${property.broker.name}! Vi a *${property.title}* (${property.price}) em Santo Antônio de Jesus no portal Recôncavo Prime e gostaria de agendar uma visita presencial!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// INTEGRAÇÃO 2: API OPEN-METEO (Clima ao vivo em Santo Antônio de Jesus)
async function fetchSAJWeather() {
    try {
        const resp = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-12.9694&longitude=-39.2619&current_weather=true');
        const data = await resp.json();
        return data.current_weather; // { temperature: 28.8, windspeed: 19.7, weathercode: 1 }
    } catch (e) {
        console.warn('Erro ao carregar Open-Meteo:', e);
        return { temperature: 28, windspeed: 15 };
    }
}

// INTEGRAÇÃO 3: API AWESOMEAPI (Cotação de Moedas em Tempo Real para Investidores Internacionais)
async function fetchCurrencies() {
    try {
        const resp = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL');
        const data = await resp.json();
        return {
            usd: parseFloat(data.USDBRL.bid),
            eur: parseFloat(data.EURBRL.bid)
        };
    } catch (e) {
        console.warn('Erro ao carregar cotações:', e);
        return { usd: 5.05, eur: 5.65 };
    }
}

// INTEGRAÇÃO 4: API NOMINATIM OPENSTREETMAP (Geocodificação Automática de Endereço em SAJ)
async function geocodeSAJAddress(address) {
    try {
        const query = encodeURIComponent(`${address}, Santo Antônio de Jesus, Bahia, Brasil`);
        const resp = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`);
        const data = await resp.json();
        if (data && data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon),
                displayName: data[0].display_name
            };
        }
    } catch (e) {
        console.warn('Erro no geocoding Nominatim:', e);
    }
    return null;
}

// INTEGRAÇÃO 5: API VIACEP (Busca Automática de Endereço via CEP em SAJ)
async function fetchViaCEP(cep) {
    const cleanCEP = cep.replace(/\D/g, '');
    if (cleanCEP.length !== 8) return null;
    try {
        const resp = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`);
        const data = await resp.json();
        if (!data.erro) return data;
    } catch (e) {
        console.warn('Erro na consulta ViaCEP:', e);
    }
    return null;
}
