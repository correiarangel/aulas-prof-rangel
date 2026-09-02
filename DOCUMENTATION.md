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
    └── internet/                 # Módulo 5: Internet & Segurança
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

---

## 📜 6. Histórico Cronológico de Alterações & Registro SDD (Chronology)

### 🗓️ Registro #001 — 30/08/2026 (Módulo 5: Aula 1 — Assinatura Digital & Exportação)
- **Problema Identificado:**
  A Aula 1 do Módulo de Internet (`modules/internet/index.html`) não estava integrada ao motor criptográfico `quiz-engine.js`. O término do exercício gerava apenas uma string mock sem SHA-256 e sem os botões de exportação (Comprovante TXT, WhatsApp e E-mail). Adicionalmente, havia um botão redundante de PDF no cabeçalho superior do Hub.
- **Solução Implementada:**
  1. Importação do `quiz-engine.js` no `<head>` de `modules/internet/index.html`.
  2. Atualização da função `calcFixation(1)` para assinar digitalmente o comprovante com o algoritmo SHA-256 (`QuizEngine.generateDigitalSignature`).
  3. Agrupamento e alinhamento dos **4 botões de ação** no painel final de resultado:
     - 📄 **Baixar Comprovante TXT**
     - 📑 **Baixar Aula em PDF**
     - 📱 **Enviar WhatsApp (19 99130-6907)**
     - ✉️ **Enviar E-mail ao Professor (okcomputer.use.linux@gmail.com)**
  4. Remoção do botão redundante de PDF no topo do Hub Card.
  5. Encerramento rigoroso dos servidores HTTP locais (`python3 -m http.server`) ao término da validação de testes.
- **Arquivos Modificados:**
  - [modules/internet/index.html](file:///home/rangel/git-dev/aulas/modules/internet/index.html)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Validação E2E com `browser_subagent` registrando screenshot e animação WebP.
  - Confirmação visual da geração da hash SHA-256 real (`WR-7C8E-F463-A25D-12C2`) e dos 4 botões finais.
  - Verificação de ausência de processos pendentes em background.

### 🗓️ Registro #002 — 30/08/2026 (Módulo 5: Elaboração das Especificações SDD para Arquitetura, Aula 2 e Aula 3)
- **Problema Identificado:**
  Havia necessidade de estruturar o projeto sob as especificações formais do Spec-Driven Development (SDD) conforme o Global Start Skill, definindo a arquitetura geral do portal, o mapeamento detalhado dos ativos visuais em `assets/img/interrnet/`, os tópicos interativos e a fundamentação teórica acadêmica para as Aulas 02 (Navegando na Internet & História do HTML) e 03 (Dominando o Google & Produtividade na Nuvem).
- **Solução Implementada:**
  1. Carregamento e auditoria das regras do `global-start-skill` (v6.0).
  2. Criação dos documentos formais de especificação em `Docs/`:
     - [Docs/SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md): Arquitetura, Design System WR Capacitação, A11Y Senior-Friendly e Senhas Secretas.
     - [Docs/SPEC-AULA-02.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-AULA-02.md): Tópicos da Aula 02, mapeamento completo de imagens do diretório `assets/img/interrnet/` e projeto prático do Bloco de Notas.
     - [Docs/SPEC-AULA-03.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-AULA-03.md): Tópicos da Aula 03, ecossistema Google, Waffle dos 9 Pontinhos, Docs, Sheets, Slides, Drive e Operadores de Busca.
  3. Inclusão de bibliografia reconhecida (Berners-Lee 1992, Brin & Page 1998, Tanenbaum 2011, Stallings 2018, W3C WCAG 2.2).
  4. Manutenção estrita da pausa de implementação de código aguardando validação prévia pelo usuário.
- **Arquivos Criados/Modificados:**
  - [Docs/SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md)
  - [Docs/SPEC-AULA-02.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-AULA-02.md)
  - [Docs/SPEC-AULA-03.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-AULA-03.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)

### 🗓️ Registro #003 — 30/08/2026 (Refinamento SDD: Regra Estrita do Botão de PDF & Gerador de Apostila Completa)
- **Problema Identificado:**
  1. O gerador de PDF (`assets/js/pdf-lessons.js`) produzia um resumo curto de 5 marcadores por módulo, enquanto a diretiva exigia uma apostila didática completa, estruturada e abrangente com todo o conteúdo das lições.
  2. Haviam sido adicionados botões de PDF no Hub Inicial e barras superiores de telas, violando a regra de UI/UX segundo a qual o botão `📑 Baixar Aula em PDF` deve ser exibido **EXCLUSIVAMENTE** no painel de finalização/conclusão do exercício de fixação.
- **Solução Implementada:**
  1. Reversão e remoção imediata de todos os botões de PDF no Hub Inicial e barras de topo de `modules/internet/index.html`.
  2. Reescrita completa do motor `pdf-lessons.js` expandindo as seções para formar uma apostila didática completa de A4, com capa formal, unidades, callouts visuais de dicas e alertas, blocos de código HTML, atividade prática do Bloco de Notas, guia de buscas e referências acadêmicas.
  3. Atualização das especificações SDD (`Docs/SPEC-PROJECT-ARCHITECTURE.md`, `Docs/SPEC-AULA-02.md`, `Docs/SPEC-AULA-03.md`) formalizando a Regra Estrita dos Botões de Exportação.
  4. Finalização do protocolo Stop & Resume para encerramento de sessão.
- **Arquivos Modificados:**
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [modules/internet/index.html](file:///home/rangel/git-dev/aulas/modules/internet/index.html)
  - [Docs/SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)

### 🗓️ Registro #004 — 30/08/2026 (Módulo 5: Implementação Completa HTML/JS das Aulas 02 e 03)
- **Problema Identificado:**
  As especificações SDD das Aulas 02 e 03 estavam concluídas e validadas em `Docs/SPEC-AULA-02.md` e `Docs/SPEC-AULA-03.md`, mas a interface de leitura interativa por tópicos, o controle gamificado de progresso e os painéis de exercícios de fixação com cálculo de nota e geração de assinatura digital SHA-256 ainda não haviam sido codificados em `modules/internet/index.html`.
- **Solução Implementada:**
  1. **Aula 02 (Navegando na Internet & História do HTML)**:
     - Implementação da leitura em 6 tópicos interativos: 1. O Navegador, 2. Ferramentas da Janela Web, 3. Histórico e Limpeza, 4. Senhas e Anti-Phishing, 5. História do HTML e 6. Prática Bloco de Notas (`minha-pagina.html`).
     - Ativação do controle gamificado por checkbox de leitura (`markTopicRead(2, x)`).
     - Criação da avaliação didática com 5 questões de fixação, desbloqueada com senha `b002`, cálculo de nota (mínimo 8,0) e geração de comprovante assinado por SHA-256 (`QuizEngine.generateDigitalSignature`).
     - Integração dos 4 botões de exportação (TXT, PDF, WhatsApp e E-mail).
  2. **Aula 03 (Dominando o Google & Produtividade na Nuvem)**:
     - Implementação da leitura em 7 tópicos interativos: 1. Ecossistema & Gmail, 2. Caixa de Entrada, 3. Menu 9 Pontinhos (Waffle), 4. Google Docs, 5. Google Planilhas, 6. Compartilhamento & Drive e 7. Operadores de Busca Avançados (`""`, `site:`, `filetype:`, `-`).
     - Ativação do controle gamificado por checkbox de leitura (`markTopicRead(3, x)`).
     - Criação da avaliação didática com 5 questões de fixação, desbloqueada com senha `c003`, cálculo de nota (mínimo 8,0) e geração de comprovante assinado por SHA-256.
     - Integração dos 4 botões de exportação.
  3. **Atualização da Tríade de Documentação SDD**: `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` sincronizados.
- **Arquivos Modificados:**
  - [modules/internet/index.html](file:///home/rangel/git-dev/aulas/modules/internet/index.html)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
### 🗓️ Registro #005 — 30/08/2026 (Módulo 5: Formulário Interativo Gerador de HTML e Atividade Prática de IA & Prompts na Aula 2)
- **Problema Identificado:**
  O Tópico 6 da Aula 2 continha apenas um bloco estático de instruções para digitação no Bloco de Notas. Para enriquecer a experiência pedagógica e acelerar a construção prática para alunos seniores e iniciantes, era necessário disponibilizar um formulário interativo de dados pessoais (Nome, Profissão, Escolaridade, Hobbies, Cidade, 3 Sites Favoritos) que gerasse o código HTML em tempo real com botões de copiar e baixar, além de introduzir uma atividade prática sobre Inteligência Artificial (IA) e Prompts com fontes acadêmicas e governamentais reconhecidas.
- **Solução Implementada:**
  1. **Seção 6.1 (Gerador Interativo de Home Page)**:
     - Adição do formulário de campos de identificação e sites favoritos em `modules/internet/index.html`.
     - Implementação das funções JavaScript `generateHomePageCode()`, `copyHomePageCode()` (Clipboard API) e `downloadHomePageFile()` (`minha-pagina.html` via Blob URL).
  2. **Seção 6.2 (Atividade Prática de IA & Prompts)**:
     - Explicação didática sobre o que é IA Generativa, o conceito de *Prompt* (comando/instrução) e seu funcionamento em linguagem acessível.
     - Caixa com prompt pré-formatado pronto para cópia com o botão `copyAIPrompt()`, orientando a personalização de estilos, cores e acessibilidade no Google Gemini, ChatGPT ou Microsoft Copilot.
     - Citação de leituras recomendadas de órgãos oficiais e acadêmicos: UNESCO (2023/2024), MEC/Gov.br (2024) e W3C.
  3. **Atualização da Apostila PDF (`assets/js/pdf-lessons.js`)**: Atualização do capítulo 2.4 com as etapas do gerador interativo e da atividade de IA.
  4. **Atualização da Tríade de Documentação SDD**: `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` sincronizados.
- **Arquivos Criados/Modificados:**
  - [modules/internet/index.html](file:///home/rangel/git-dev/aulas/modules/internet/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [Docs/SPEC-AULA-02.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-AULA-02.md)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Teste interativo do gerador de código HTML, cópia para a área de transferência e download do arquivo `.html`.
  - Teste de cópia do prompt de IA.
  - Confirmação de ausência de erros de sintaxe JS/HTML e encerramento de qualquer servidor local.

### 🗓️ Registro #006 — 30/08/2026 (Refinamento PDF: Geração de Apostila PDF Individual Exclusiva por Aula)
- **Problema Identificado:**
  Ao finalizar qualquer uma das aulas (Aula 1, Aula 2 ou Aula 3) e clicar em `📑 Baixar Aula em PDF`, o sistema gerava um único arquivo PDF contendo todas as aulas do módulo agrupadas. Havia a necessidade de modularizar a geração para que cada aula emitisse uma apostila exclusiva contendo apenas o seu respectivo conteúdo e ilustrações.
- **Solução Implementada:**
  1. **Atribuição de `lessonNum` nas Seções do PDF**:
     - Cada bloco do objeto `LESSONS.internet.sections` em `assets/js/pdf-lessons.js` recebeu a propriedade `lessonNum` correspondente (`1`, `2` ou `3`). As referências acadêmicas permaneceram com `lessonNum: null` para acompanhar todas as emissões.
  2. **Filtragem Dinâmica no Motor PDF (`downloadLessonPDF`)**:
     - Atualização do método `downloadLessonPDF(moduleId, subLessonId)` para receber o número da aula finalizada.
     - Aplicação do filtro `data.sections.filter(...)` exibindo estritamente as seções pertinentes à aula selecionada.
     - Ajuste dinâmico do cabeçalho da apostila: `Módulo 5 • Aula 01...`, `Módulo 5 • Aula 02...` ou `Módulo 5 • Aula 03...`.
  3. **Atualização em `modules/internet/index.html`**:
     - Ajuste nos botões de resultado do `calcFixation(lessonNum)` para chamar `window.PDFLessons.downloadLessonPDF('internet', ${lessonNum})`.
  4. **Atualização da Tríade de Documentação SDD**: `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` sincronizados.
- **Arquivos Modificados:**
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [modules/internet/index.html](file:///home/rangel/git-dev/aulas/modules/internet/index.html)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Validação de sintaxe com Node.js (`pdf-lessons.js: SYNTAX OK!`, `index.html: SYNTAX OK!`).
  - Verificação do isolamento do conteúdo ao emitir a Aula 1, Aula 2 e Aula 3 separadamente.

### 🗓️ Registro #007 — 30/08/2026 (Módulo 5: Enriquecimento Visual da Aula 3 com 12 Imagens Dedicadas em `a3/`)
- **Problema Identificado:**
  A Aula 3 ("Dominando o Google & Produtividade na Nuvem") possuía apenas um diagrama ilustrativo de busca. Havia 12 novas imagens explicativas salvas em `assets/img/interrnet/a3/` abrangendo o ecossistema Gmail, o botão "Escrever", o Menu dos 9 Pontinhos (Waffle), os logotipos e barras de ferramentas do Google Docs, Sheets, Slides e Drive, e as janelas de compartilhamento (Leitor vs Editor).
- **Solução Implementada:**
  1. **Enriquecimento em `modules/internet/index.html`**:
     - **Fase 1 (Ecossistema & Gmail)**: Inserção de `gmail-imagem-foto-user-menu-google-fechado.png`.
     - **Fase 2 (Caixa de Entrada)**: Inserção de `botao-escreve-email-gmail.png`.
     - **Fase 3 (Menu 9 Pontinhos)**: Inserção em grid de `grade-menu-apps--google.png` e `dual-linha-grade-menu-apps--google.png`.
     - **Fase 4 (Google Docs)**: Inserção do logotipo `google-docs.png` e da barra de ferramentas `barra-ferramentas-googlr-docs.png`.
     - **Fase 5 (Google Planilhas)**: Inserção do logotipo `google-planilhas.png` e da barra de ferramentas `barra-ferramentas-planolha.png`.
     - **Fase 6 (Compartilhamento & Drive)**: Inserção dos ícones de `google-driver.png` e `google-apesentacoes.png`, além de `botao-compartilhar-docs-google.png` e `configuracao-compartilhameto-documeto.png`.
  2. **Atualização da Apostila PDF (`assets/js/pdf-lessons.js`)**:
     - Mapeamento das 12 imagens no objeto `LESSONS.internet.sections` para a Aula 3.
  3. **Atualização da Tríade de Documentação SDD**: `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` sincronizados.
- **Arquivos Modificados:**
  - [modules/internet/index.html](file:///home/rangel/git-dev/aulas/modules/internet/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Validação de sintaxe com Node.js (`pdf-lessons.js: SYNTAX OK!`, `index.html: SYNTAX OK!`).
  - Verificação de exibição responsiva das imagens nas 7 fases da Aula 3 e na geração do PDF exclusivo da Aula 3.

### 🗓️ Registro #008 — 30/08/2026 (Módulo 5: Inclusão do Passo a Passo Guiado de Criação e Upload no Google Drive)
- **Problema Identificado:**
  A Aula 3 carecia de um passo a passo explícito ensinando a criar pastas e documentos diretamente no Google Drive (`drive.google.com`) e como realizar o upload (subir) de arquivos e pastas inteiras do computador para a nuvem.
- **Solução Implementada:**
  1. **Tópico 3.6 (`modules/internet/index.html`)**:
     - Adição do tutorial de **Criação Direta**: como utilizar o botão `+ Novo` para criar novas pastas organizadas e novos Documentos/Planilhas Google em branco.
     - Adição do tutorial de **Upload (Subir do PC para a Nuvem)** detalhando 2 métodos práticos:
       - *Método 1*: Pelo menu `+ Novo` -> `Fazer upload de arquivo` ou `Fazer upload de pasta`.
       - *Método 2*: Por **Arrastar e Soltar** (Drag & Drop) de arquivos ou pastas diretamente da janela do computador para o navegador.
  2. **Apostila PDF (`assets/js/pdf-lessons.js`)**:
     - Atualização da Seção 3.4 com as instruções resumidas de criação e upload via menu `+ Novo` e arrastar e soltar.
  3. **Atualização da Tríade de Documentação SDD**: `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` sincronizados.
- **Arquivos Modificados:**
  - [modules/internet/index.html](file:///home/rangel/git-dev/aulas/modules/internet/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Validação de sintaxe com Node.js (`pdf-lessons.js: SYNTAX OK!`, `index.html: SYNTAX OK!`).
  - Verificação da formatação limpa e legível dos passos em caixas destacadas em verde e amarelo.

### 🗓️ Registro #009 — 01/09/2026 (Módulo 1 Windows: Catálogo de 12 Aulas, Implementação Interativa da Aula 8 com 28 Imagens, Quiz de 5 Questões e Botões de PDF no Topo)
- **Problema Identificado:**
  O Módulo 1 (Windows) possuía apenas uma tela de prova única de 10 questões sem suporte ao catálogo de aulas interativas nem ao formato quiz adotado no Módulo de Internet. Havia a necessidade de estruturar o catálogo com as 12 aulas do módulo (marcando as aulas sem conteúdo como `🔒 Em Construção`), disponibilizar a Aula 8 (Diagnóstico de Memória, Restauração do Sistema e Mídia USB) 100% didática por tópicos com as 28 imagens da pasta `assets/img/windows/Aula8/`, criar um quiz de fixação de 5 questões com nota e assinatura SHA-256 (liberado pela senha `wr0926`), e posicionar o botão `📑 Baixar Apostila Didática em PDF` no início/topo das aulas em todos os módulos (Windows e Internet).
- **Solução Implementada:**
  1. **Especificação SDD (`Docs/SPEC-AULA-08-WINDOWS.md`)**:
     - Documentação formal do plano pedagógico, imagens mapeadas (image1 a image28), senhas de acesso e gabarito do quiz.
  2. **Hub do Módulo Windows & Aula 8 (`modules/windows/index.html`)**:
     - Criação do catálogo visual das **12 Aulas**: Aulas 1 a 7 e 9 a 12 com aviso `🔒 Em Construção`; **exclusivamente a Aula 08 está `🔓 Liberada`**.
     - **Desabilitação da Aula 12**: A Aula 12 (Prova Final do Módulo) foi desabilitada e marcada como `🔒 Em Construção`, permitindo acesso liberado apenas para a Aula 8.
     - **Ajuste de Contraste e Legibilidade (WCAG)**: Correção da variável `--ink-soft` em `assets/css/style.css` para `#D9C3B0` e inclusão da classe `.img-caption` (`#4A3528`), garantindo leitura nítida e sem esforço visual em todos os cartões e legendas.
     - Implementação da Aula 08 didática por 5 tópicos interativos ("Diagnóstico de RAM", "Restauração Win 11/10", "Ponto de Restauração", "Criar Pendrive USB", "Formatar Pendrive") com seções "🖐️ Passo a Passo Prático no Seu Computador", atalhos `<kbd>`, caixas de alerta e **todas as 28 imagens** ilustrativas mapeadas.
     - **Reorganização dos Tópicos 2 e 3**: Transferência da imagem `image19.jpg` ("Menu de recuperação do Windows 10") para o Tópico 2 com a explicação explícita de que a restauração padrão é equivalente no Windows 10 e no Windows 11 (mudando apenas a interface visual dos menus), concentrando o Tópico 3 exclusivamente no recurso de Pontos de Restauração (Painel de Controle e comando `rstrui`).
     - **Modal Customizado de Senha (UI/UX)**: Substituição do `prompt()` nativo pelo modal HTML/CSS customizado `#password-modal` (idêntico ao padrão do Módulo Internet). A exibição visível da senha no subtítulo, nos cards e nos alertas foi 100% removida, garantindo que o aluno solicite a senha presencialmente ao professor em sala de aula.
     - Exercício de Fixação em Quiz de 5 Questões com dicas do professor, nota de 0 a 10.0, Assinatura Digital SHA-256 e botões de exportação (TXT, PDF, WhatsApp, E-mail).
  3. **Posicionamento do Botão de PDF no Topo de Todas as Aulas**:
     - Inclusão do botão `📑 Baixar Apostila Didática em PDF` no topo/cabeçalho de leitura da Aula 8 do Módulo Windows e retroativamente nas Aulas 1, 2 e 3 do **Módulo Internet** (`modules/internet/index.html`).
   4. **Aprimoramento Visual da Apostila PDF & Impressão Direta (HTML Origem)**:
      - **Encadeamento Passo a Passo no PDF (`assets/js/pdf-lessons.js`)**: Eliminação de imagens acumuladas no final das seções. Cada passo explicativo possui agora sua própria imagem acoplada com legenda em itálico ("📷 Legenda..."), garantindo a sequência didática ideal ("Explica -> Mostra Imagem com Legenda").
      - **Aumento do Dimensionamento de Imagens**: Imagens configuradas com dimensão ampla e nítida (`max-height: 480px`, `max-width: 96%`), com estilos visuais para teclas `<kbd>`, avisos em caixas e formatação idêntica ao portal.
      - **Botão `🖨️ Imprimir Aula Completa (HTML Origem)`**: Adicionada a opção de impressão direta da aula completa no formato HTML original da tela (com a folha de estilos `@media print` abrindo todos os tópicos da aula em sequência, ocultando apenas menus e botões).
   5. **Certificado Didático Solene WR em Formato Horizontal (A4 Landscape) (`modules/internet/prova-internet.html`)**:
      - **Certificado Solene A4 Landscape**: Reformulação visual completa no formato horizontal (297mm x 210mm) com moldura solene diplomática em borda dupla dourada/terracota (`#D4AF37` / `#8E2C07`), ocupando 100% da folha A4 deitada na impressão ou PDF (`@media print { @page { size: A4 landscape; margin: 0; } }`).
      - **Informações Institucionais Oficiais da Escola**: Inclusão destacada da **WR Capacitação Profissional** com o website oficial [www.wrcapacitacaoprofissional.net](https://www.wrcapacitacaoprofissional.net/), carga horária total de **18 Horas Aulas** (12 Aulas de 1h30min), nota do aluno, SHA-256 e dupla de assinaturas alinhadas (Prof. Marcos Rangel e Direção da Escola).
      - **Simplificação dos Botões de Ação**: Remoção do botão de postagem em redes sociais para evitar ambiguidades, mantendo os 4 botões nativos diretos e 100% funcionais (`📄 Baixar Comprovante TXT`, `📑 Baixar Certificado PDF`, `📱 Enviar WhatsApp`, `✉️ Enviar E-mail`).
   6. **Atualização da Tríade de Documentação SDD**: `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` sincronizados.
- **Arquivos Modificados:**
  - [Docs/SPEC-AULA-08-WINDOWS.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-AULA-08-WINDOWS.md)
  - [modules/windows/index.html](file:///home/rangel/git-dev/aulas/modules/windows/index.html)
  - [modules/internet/index.html](file:///home/rangel/git-dev/aulas/modules/internet/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Validação de sintaxe Node.js em `pdf-lessons.js` e `quiz-engine.js` (`SYNTAX OK`).
  - Script Python de auditoria física de imagens confirmando 32 referências válidas em `modules/windows/index.html`.

### 🗓️ Registro #010 — 01/09/2026 (Módulo 3 Microsoft Excel: Especificação SDD Mestre e SDD Aula 01)
- **Problema Identificado:**
  O Módulo 3 (Excel) necessitava do planejamento mestre da arquitetura pedagógica em 13 aulas a partir dos materiais da pasta `AulaOrigem/excel/`, bem como da especificação detalhada da Aula 01 (Introdução ao Excel, Interface, Tipos de Dados e Navegação), simulador interativo de dados e matriz de senhas.
- **Solução Implementada:**
  1. **Centralização da Arquitetura Global ([SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md))**:
     - Consolidação da especificação-pai do portal, estruturando a matriz dos **5 Módulos Didáticos** (Windows, Word, Excel, PowerPoint, Internet), os tokens visuais globais, a convenção unificada de senhas presenciais e as regras de geração de PDF e impressão.
  2. **Especificação SDD Mestre do Excel ([SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md))**:
     - Mapeamento completo das 13 aulas do catálogo do Excel a partir da especificação-pai.
     - Tokens de design em verde Excel (`#16A34A`), regras do Simulador Interativo de Planilha (Grid Inspector) e motor criptográfico SHA-256.
  3. **Especificação SDD Aula 01 (`Docs/SPEC-EXCEL-AULA-01.md`)**:
     - Detalhamento didático dos 6 tópicos da Aula 1 (Conceito de Planilha Eletrônica, Anatomia da Interface, Pastas vs Planilhas, Tipos de Dados e Alinhamento Automático, Navegação e Atalhos `<kbd>`, Salvamento `.xlsx`).
     - Requisitos do Simulador Interativo Grid Inspector e Quiz de 5 Questões com Gabarito e Dicas.
  4. **Atualização da Tríade de Documentação SDD**: Sincronização em `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md`.
- **Arquivos Criados/Modificados:**
  - [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md)
  - [Docs/SPEC-EXCEL-AULA-01.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-01.md)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Verificação de consistência de links de especificação `file://`.

### 🗓️ Registro #011 — 01/09/2026 (Módulo 3 Microsoft Excel: Auditoria SDD Pré-Implementação e Correção de 12 Achados)
- **Problema Identificado:**
  Antes de iniciar a implementação do código do Módulo Excel, foi necessário auditar os 3 documentos SDD (`SPEC-PROJECT-ARCHITECTURE.md`, `SPEC-EXCEL-MASTER.md`, `SPEC-EXCEL-AULA-01.md`) para garantir consistência visual, didática e técnica com os módulos já operacionais (Internet e Windows).
- **Solução Implementada:**
  1. **Auditoria Completa**: Identificação de 12 achados organizados em 3 categorias (Desalinhamentos Críticos, Lacunas Didáticas, Melhorias Estruturais).
  2. **Correção de Senhas**: Padrão de senhas atualizado de `e001`-`e013` para `xa001`-`xm013` (letra `x` + letra incremental + número incremental de 3 dígitos), aprovado pelo professor.
  3. **Padronização de Quizzes**: Todas as 13 aulas passam a ter **5 questões** no Quiz de Fixação (inclusive Aulas 11, 12 e 13 do Projeto Prático, que anteriormente tinham 3 questões).
  4. **Nota Mínima**: Confirmada como **7.0** para todos os quizzes de fixação (≥ 4 acertos de 5 questões).
  5. **Questões Legadas**: As 10 questões da prova legada antiga (`modules/excel/index.html` original) foram aprovadas para reutilização nas aulas relevantes.
  6. **Hierarquia Documental**: Adicionado link pai (`🔗 Especificação Pai`) no SDD Aula 01 apontando para o SDD Master.
  7. **Seção 5.1 de Quizzes**: Nova seção adicionada ao SDD Master padronizando as regras obrigatórias de todos os quizzes.
- **Arquivos Modificados:**
  - [Docs/SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md) — Senhas atualizadas
  - [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) — Senhas, quizzes de 5 questões, seção 5.1
  - [Docs/SPEC-EXCEL-AULA-01.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-01.md) — Link pai, senha, nota mínima
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) — Auditoria registrada
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) — Status atualizado
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md) — Registro #011
- **Testes Executados & Resultados:**
  - Verificação cruzada de todas as senhas entre os 3 documentos SDD.
  - Confirmação de alinhamento visual e didático com o padrão dos módulos Internet e Windows.

### 🗓️ Registro #012 — 02/09/2026 (Módulo 3 Microsoft Excel: Implementação do Hub de 13 Aulas, Aula 01 Didática Interativa, Simulador Grid Inspector e Quiz com SHA-256)
- **Problema Identificado:**
  O arquivo `modules/excel/index.html` continha uma prova legada no formato antigo de 10 questões e necessitava ser reconstruído para integrar o Hub de 13 Aulas do Módulo Excel, o material didático da Aula 01 dividida em 6 tópicos interativos, o simulador de grade e o quiz de fixação com assinatura digital criptográfica SHA-256.
- **Solução Implementada:**
  1. **Reconstrução Completa de [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)**:
     - **Tela 1 (Hub Principal)**: Catálogo com as 13 Aulas do Módulo Excel. Aula 01 liberada (senha `xa001`), Aulas 02 a 13 com o selo `🔒 Em Construção`.
     - **Modal de Senha Presencial (`#password-modal`)**: Validação de senha presencial (`xa001` a `xm013` ou `wr2026`) com feedback visual.
     - **Painel do Professor Marcos Rangel**: Sanfona expansível com biografia, formação e contatos.
     - **Tela 2 (Aula 01 Didática Interativa)**:
       - Header com navegação (`Voltar ao Menu`, `Imprimir Aula`, `Baixar Apostila PDF`).
       - Trilha de progresso gamificada (0% a 100%).
       - 6 Tópicos Didáticos em abas interativas (O que é Excel & Aplicações, Anatomia da Interface, Planilhas vs Pastas, Tipos de Dados, Edição/Atalhos e Salvamento `.xlsx`).
       - **Simulador Interativo Grid Inspector**: Componente de planilha HTML/CSS/JS (grade 6x4) com **Caixa de Nome** ativa, **Barra de Fórmulas** e campo de teste que classifica e alinha automaticamente os tipos de dados (Texto à esquerda, Números/Moeda e Datas à direita).
       - Trava pedagógica de leitura obrigatória (`markTopicRead`).
     - **Quiz de Fixação (5 Questões)**: Pergunta com 4 alternativas e nota mínima de aprovação **7,0 / 10,0**.
     - **Motor Criptográfico SHA-256**: Emissão de código hash de autenticidade no formato `WR-XXXX-XXXX` e botões de exportação em TXT, PDF, WhatsApp e E-mail.
  2. **Atualização do Gerador de PDF ([assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js))**: Adicionada a propriedade `lessonNum: 1` em todas as seções do Excel para viabilizar a geração da apostila PDF individual por aula (`window.PDFLessons.downloadLessonPDF('excel', 1)`).
  3. **Validação Técnica**: Execução de validação de balanço de tags HTML via script Python (0 tags não fechadas).
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)

---

### 📝 Registro Cronológico #15 — Integração de Imagens Didáticas na Aula 01 do Excel
- **Data:** 02/09/2026
- **Responsável:** Agente Full Stack (Antigravity AI)
- **Problema:** A Aula 01 do Módulo Excel apresentava apenas texto e o simulador interativo, carecendo de ilustrações visuais capturadas da interface real do programa para proporcionar um estudo mais suave e fluido.
- **Solução Implementada:**
  1. Mapeamento das necessidades visuais da Aula 01 em 6 telas e ferramentas essenciais do Excel.
  2. Recebimento e verificação das 6 imagens capturadas e salvas em [assets/img/excel/a1/](file:///home/rangel/git-dev/aulas/assets/img/excel/a1/):
     - `excel_aula1_01_visao_geral.png`: Visão geral de uma planilha financeira no Excel.
     - `excel_aula1_02_anatomia_interface.png`: Captura de tela inteira destacando a anatomia da interface.
     - `excel_aula1_03_abas_planilhas.png`: Close nas abas de planilhas e no botão `+` (nova planilha).
     - `excel_aula1_04_tipos_dados.png`: Exemplo de alinhamento automático de texto, número e data.
     - `excel_aula1_05_edicao_f2.png`: Célula no modo de edição com o cursor ativado pela tecla F2.
     - `excel_aula1_06_salvar_como.png`: Janela de Salvar Como e lista de formatos de arquivo (`.xlsx`, `.csv`, `.pdf`).
  3. Inserção das imagens no HTML [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html) nos tópicos 1 a 6 utilizando a classe CSS `.img-reduced` para garantir visual fluido, bordas arredondadas, sombra suave e responsividade em todos os tamanhos de tela.
  4. **Otimização do Layout de Impressão (`@media print` em [assets/css/style.css](file:///home/rangel/git-dev/aulas/assets/css/style.css))**: Adicionadas regras de quebra de página limpa (`page-break-inside: avoid; break-inside: avoid;`), alinhamento centralizado com margens controladas e limite de altura (`max-height: 420px`), evitando que imagens fiquem cortadas ou desorganizadas entre páginas na impressão direta.
  5. **Mapeamento no Gerador de PDF ([assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js))**: Mapeadas as 6 imagens com suas respectivas legendas didáticas no motor de geração de apostilas PDF da Aula 01 do Excel.
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/css/style.css](file:///home/rangel/git-dev/aulas/assets/css/style.css)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Validação de caminhos das imagens (`../../assets/img/excel/a1/...`): Todos os 6 arquivos validados e acessíveis.
  - Verificação do layout de impressão `@media print` e motor de PDF `pdf-lessons.js`: Renderização fluida, sequencial e sem cortes acidentais de imagem.

---

### 📝 Registro Cronológico #16 — Formalização do Modelo-Base Padronizado de Aula (Master Lesson Blueprint)
- **Data:** 02/09/2026
- **Responsável:** Agente Full Stack (Antigravity AI)
- **Problema:** Com a conclusão bem-sucedida das aulas dos módulos Windows, Internet e Excel (Aula 01), fazia-se necessário registrar e formalizar a estrutura padrão adotada como modelo arquitetural mestre para guiar o desenvolvimento das aulas restantes (Excel Aulas 02 a 13, Word, PowerPoint, etc.).
- **Solução Implementada:**
  1. Formalização da Seção 7 ("Modelo-Base Padronizado de Aula — Master Lesson Blueprint") em [Docs/SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md).
  2. Definição dos 7 componentes mandatórios de toda aula:
     - Header com botões de navegação, impressão HTML contínua e download de Apostila PDF.
     - Barra de progresso gamificada de leitura (0% a 100%).
     - Menu de abas de tópicos pedagógicos (`topic-tabs-bar`) com destaque no exercício de fixação.
     - Tópicos didáticos com estilo senior-friendly, caixas pedagógicas (dicas/alertas/atalhos `<kbd>`), imagens capturadas `.img-reduced` e trava de leitura.
     - Simulador interativo dedicado (ex: *Grid Inspector* no Excel).
     - Quiz de Fixação de 5 perguntas com nota mínima 7.0, validação SHA-256 e exportação em TXT/PDF/WhatsApp/E-mail.
     - Otimização de impressão `@media print` sem cortes de imagens e acoplamento no motor `pdf-lessons.js`.
- **Arquivos Modificados:**
  - [Docs/SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Auditoria SDD de especificação arquitetural: 100% de conformidade com os pilares pedagógicos e técnicos do portal.





