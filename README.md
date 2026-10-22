<div align="center">

# 🏛️ Recôncavo Prime — Portal Imobiliário Imersivo (WebXR)
### Experiência Imobiliária de Alto Padrão com Tour Virtual 360º, Giroscópio Mobile, Óculos VR e Busca por Geolocalização

[![WebXR Ready](https://img.shields.io/badge/WebXR-360%C2%BA_Ready-B89C74?style=for-the-badge&logo=virtualreality)](site/tour360.html)
[![Leaflet.js](https://img.shields.io/badge/Maps-Leaflet.js-199900?style=for-the-badge&logo=leaflet&logoColor=white)](site/mapa.html)
[![Pannellum](https://img.shields.io/badge/360_Engine-Pannellum-blue?style=for-the-badge)](https://pannellum.org/)
[![TailwindCSS](https://img.shields.io/badge/CSS-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

**Localidade de Aplicação:** Santo Antônio de Jesus — Bahia, Brasil  
**Público-Alvo:** Mercado Imobiliário de Luxo, Investidores e Famílias de Alto Padrão  
**Desenvolvedor:** Arthur Souza  
**Contexto Acadêmico:** Trabalho Profissional / Portfólio — *Desafio 2: O Cliente do Mercado Imobiliário*

---

</div>

## 📌 Visão Geral do Projeto

A **Imobiliária Recôncavo Prime** atende ao segmento de alto padrão em Santo Antônio de Jesus - BA. Diante de um mercado competitivo em que anúncios estáticos não mais encantam os clientes e corretores gastavam tempo excessivo em visitas presenciais infrutíferas, foi desenvolvida esta plataforma digital imersiva.

O cliente pode explorar propriedades por **geolocalização em mapa interativo (estilo Airbnb)** e realizar visitas virtuais completas em **360º com giroscópio no smartphone ou óculos VR simples (VR Box / Google Cardboard)**, sem sair do sofá.

---

## ✨ Funcionalidades Principais

### 1. 🗺️ Busca por Mapa Interativo de Santo Antônio de Jesus (Estilo Airbnb)
- Mapa cartográfico interativo em tema escuro operado por **Leaflet.js**, centrado nas coordenadas de SAJ (`-12.9700, -39.2620`).
- **Pins de Preço em Tempo Real:** Etiquetas estilizadas (`R$ 2.450.000 🥽`) que dão zoom suave (*flyTo*) e exibem pré-visualizações flutuantes ao serem clicadas.
- **Filtros por Condomínios Nobres:** Condomínio Busca Vida, Condomínio Jardins, Centro Nobre e Maria Preta, além de filtro exclusivo *"Apenas com Tour 360º VR"*.

### 2. 🥽 Tour Virtual 360º & Experiência WebXR (O Diferencial Tecnológico)
- Motor de renderização panorâmica equiretangulares em tempo real via **Pannellum Engine**.
- **Navegação entre Ambientes:** Transição rápida entre cômodos (*Living & Pé-Direito*, *Gourmet & Piscina*, *Suíte Master & SPA*).
- **Hotspots 3D Interativos:** Pontos clicáveis dentro da cena com informações arquitetônicas que teletransportam o usuário de um ambiente para outro.
- **📱 Sensor de Giroscópio Mobile:** Utiliza a API `DeviceOrientationEvent` do dispositivo para sincronizar o olhar do visitante ao movimento físico do smartphone.
- **🥽 Modo Óculos VR Box (Estereoscópico):** Divisão de tela em lente dupla (*Olho Esquerdo / Olho Direito*) com retículo central de mira para navegação hands-free em headsets simples.

### 3. 🏢 Ficha Técnica & Dossier Arquitetônico Editorial
- Páginas individuais dinâmicas para cada residência com fotos em alta resolução.
- Métricas detalhadas (Área construída, terreno, suítes, vagas, taxa de condomínio e IPTU).
- Estética inspirada em *Architectural Digest* e *Sotheby's International Realty* (Quiet Luxury, paleta Obsidian, Travertine e Bronze Muted).

### 4. 🔑 Painel Administrativo do Corretor (Broker Studio)
- Área restrita com login corporativo protegido por credencial CRECI-BA.
- **Cadastro Completo de Imóveis:** Título, valor, tipologia, metragem e descrição.
- **Mini-Mapa com Pino Arrastável:** O corretor clica ou arrasta o pino no mapa de SAJ para capturar as coordenadas exatas de Latitude e Longitude.
- **Persistência Local (LocalStorage):** O imóvel cadastrado pelo corretor entra imediatamente no mapa público e na lista de tours 360º de todo o portal.

### 5. 💬 Atendimento Inteligente & WhatsApp Dinâmico
- Botão oficial de contato dinâmico vinculado ao corretor sênior responsável (*Carlos Eduardo Mendes - CRECI-BA 24.890*).
- Mensagem pré-formatada inteligente que já inclui o nome do imóvel e valor que o cliente acabou de visitar em 360º.

---

## 🔌 APIs Reais Integradas

O projeto consome serviços e APIs REST em tempo real:

1. **Open-Meteo Weather API:** Consulta a temperatura e vento atuais em Santo Antônio de Jesus e exibe na barra de utilidades do portal.
2. **AwesomeAPI Economia:** Fornece a cotação de câmbio ao vivo (USD/BRL e EUR/BRL) para investidores internacionais.
3. **ViaCEP API:** Preenche automaticamente rua e bairro em SAJ a partir do CEP informado no painel administrativo.
4. **Nominatim OpenStreetMap API:** Converte o endereço digitado pelo corretor em coordenadas de Latitude e Longitude (Geocodificação).
5. **WhatsApp Click-to-Chat API:** Integração direta com mensagens rastreadas.
6. **DeviceOrientation API:** Leitura dos sensores giroscópicos para visualização em realidade virtual móvel.

---

## 📂 Estrutura de Arquivos

```bash
├── site/
│   ├── index.html          # Portal Principal (Hero, vitrine editorial, filtros rápidos)
│   ├── mapa.html           # Busca em tela cheia no mapa de SAJ estilo Airbnb
│   ├── detalhes.html       # Dossier Arquitetônico completo e ficha técnica
│   ├── tour360.html        # Player 360º WebXR (Giroscópio + Modo VR Box estéreo)
│   ├── login.html          # Tela de login do corretor (CRECI-BA)
│   ├── admin.html          # Painel Administrativo de cadastro e pino no mapa
│   └── assets/
│       ├── data.js         # Base de dados central, LocalStorage e conexões com APIs
│       └── panoramas/      # Imagens equiretangulares 360º em alta resolução
├── prototipo_stitch/       # Versão inicial gerada no Google Stitch
├── prototipo_v2_editorial/ # Protótipo visual V2 de alta costura arquitetônica
├── referencias/            # Imagens e referências visuais do projeto
├── README.md               # Documentação técnica e institucional
└── .gitignore              # Regras de exclusão do repositório
```

---

## 🚀 Como Executar o Projeto Localmente

Este projeto foi construído utilizando tecnologias web puras e leves (HTML5, Tailwind CSS via CDN, Vanilla JavaScript, Leaflet.js e Pannellum.js), sem necessidade de instalação de dependências pesadas.

### Opção 1: Abrir Diretamente no Navegador
Basta dar um duplo clique ou abrir o arquivo `site/index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Opção 2: Servidor Local (Recomendado para testes de Giroscópio e APIs)
Com Python instalado, execute no terminal da pasta do projeto:

```bash
# Iniciar servidor local na porta 8000
python -m http.server 8000 --directory site
```

Abra em seu navegador:
```
http://localhost:8000
```

> **Dica para teste Mobile/VR:** Acesse pelo seu celular conectado à mesma rede Wi-Fi usando o IP da sua máquina local (ex: `http://192.168.x.x:8000`) para experimentar o sensor de giroscópio em tempo real e o modo VR Box!

---

## 🛠️ Tecnologias Utilizadas

- **Interface & Estilo:** HTML5 Semântico, Tailwind CSS, Google Fonts (*Cormorant Garamond* & *Plus Jakarta Sans*)
- **Cartografia & Geolocalização:** Leaflet.js, CartoDB Dark Matter Tiles, OpenStreetMap Nominatim
- **Realidade Virtual / WebXR:** Pannellum 360 Panoramic Engine, HTML5 DeviceOrientation API
- **Arquitetura de Dados:** JavaScript ES6 Modules, LocalStorage API, Fetch API assíncrona
- **Prototipagem:** Google Stitch (Agente de Design de Interfaces)

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
