# 📘 Documentação Global de Arquitetura & Padrões do Portal
### Portal de Informática Básica — Prof. Marcos Rangel | WR Capacitação Profissional

Esta documentação define o padrão arquitetural, diretrizes de design, fluxo pedagógico e convenções de código implementadas no portal de aulas de Informática Básica.

---

## 🎯 1. Visão Geral do Sistema

O portal foi desenvolvido em **HTML5, CSS3 Vanilla e JavaScript ES6+ (100% estático)** para hospedagem nativa e de alta performance no **GitHub Pages**.

### 🌟 Pilares Pedagógicos & de Design:
1. **Design Senior-Friendly & Alta Legibilidade**:
   - Tipografia limpa (`Inter`, `Fraunces`, `JetBrains Mono`).
   - Tamanhos confortáveis de fonte (18px a 24px para leitura, 22px para botões).
   - Cartões de seleção de opção tátil grandes (mínimo 56px de área de toque).
2. **Arquitetura Modular em 4 Aulas (Módulo 5: Internet)**:
   - **Aula 01**: Introdução à Internet, Navegação Segura e Evolução dos Navegadores 1992-2025 (`a001`). Inclui vídeo complementar interativo no YouTube.
   - **Aula 02**: História do HTML e sua Ligação com a Internet (`b002`).
   - **Aula 03**: Dominando o Google (`c003`).
   - **Aula 04**: Prova Final de Avaliação (`d004`).
3. **Segurança de Acesso por Senhas Secretas**:
   - Todas as aulas e a avaliação possuem senhas de acesso individuais.
   - **IMPORTANTE**: Nenhuma senha ou dica é exibida visualmente na tela/UI para garantir o controle presencial em sala de aula pelo professor.
4. **Separação de Fases e Exercícios de Fixação**:
   - As aulas teóricas são divididas em **tópicos interativos por fases** (sem rolagem excessiva).
   - O **Exercício de Fixação** é isolado em um painel próprio (`Ir para Exercício de Fixação 📝`), sem atalhos diretos para a prova final durante a leitura.
5. **Sistema Anti-Fraude com Assinatura Digital**:
   - Geração de Hash de validação criptográfica para todos os comprovantes emitidos.
   - Integração com WhatsApp (`19 99130-6907`) e Gmail.

---

## 📁 2. Estrutura de Arquivos e Diretórios

```text
provas/internet/
├── index.html                    # Home principal (Hub dos 5 Módulos e perfil do Professor)
├── README.md                     # Visão geral do repositório
├── DOCUMENTATION.md              # Documentação técnica e padrões globais
├── assets/
│   ├── css/
│   │   └── style.css             # Design Tokens, Paleta WR Capacitação, Tipografia e Layout
│   └── img/
│       ├── professor-rangel.png  # Avatar oficial do Professor Rangel
│       ├── internet-security.png # Ilustração de Segurança na Internet (Aula 1)
│       ├── network-types.png     # Diagrama de Redes LAN / MAN / WAN (Aula 1)
│       ├── html-history.png      # Ilustração de Código e História do HTML (Aula 2)
│       └── google-search.png     # Ilustração de Operadores de Busca do Google (Aula 3)
└── modules/
    ├── windows/                  # Módulo 1: Windows
    ├── word/                     # Módulo 2: Microsoft Word
    ├── excel/                    # Módulo 3: Microsoft Excel
    ├── powerpoint/               # Módulo 4: Microsoft PowerPoint
    └── internet/                 # Módulo 5: Internet & Nuvem
        ├── index.html            # Hub do Módulo 5 + Aulas 1, 2 e 3 Didáticas
        └── prova-internet.html   # Aula 04: Avaliação Final do Módulo Internet
```

---

## 🔑 3. Padrão do Sistema de Senhas

| Componente | Acesso Requerido | Senha de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Aula 01** | Introdução à Internet | `a001` | 🔒 Oculta (Acesso Restrito) |
| **Aula 02** | História do HTML | `b002` | 🔒 Oculta (Acesso Restrito) |
| **Aula 03** | Dominando o Google | `c003` | 🔒 Oculta (Acesso Restrito) |
| **Aula 04** | Prova Final de Avaliação | `d004` | 🔒 Oculta (Acesso Restrito) |

---

## 🎨 4. Padrão Visual e Cores (WR Capacitação)

- **Fundo Escuro Principal (`--bg-brown`)**: `#120B06`
- **Cartões de Leitura (`--card-brown`)**: `#1E130B`
- **Papel de Leitura Didática (`--paper-beige`)**: `#FFFDF9`
- **Destaque Principal Laranja (`--amber`)**: `#EA580C`
- **Acentos em Verde/Teal (`--teal`)**: `#14B8A6`
- **Texto Alto Contraste (`--ink-dark`)**: `#1F160F`

---

## 📄 5. Regras de Impressão (PDF/Papel)

Todas as páginas contam com media query `@media print` que:
- Oculta botões de navegação, cabeçalhos, rodapés e acordeões.
- Converte fundos para branco e textos para preto de alta definição.
- Garante que a aula ou prova seja impressa limpa e legível.

---

## 👨‍🏫 Perfil do Professor nas Aulas
Todos os módulos contam com o painel retrátil expansível com as credenciais do **Prof. Marcos Rangel**:
- **Experiência**: Desenvolvedor .NET | C# | Blazor | Mobile e Instrutor.
- **Formação**: Pós-Graduado em Mobile e Graduado em Gestão de TI.
- **Instituição**: WR Capacitação Profissional.
