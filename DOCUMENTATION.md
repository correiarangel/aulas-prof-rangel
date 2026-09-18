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

### 📝 Registro Cronológico #17 — Correção do ROADMAP e INDEX: Alinhamento ao Estado Real dos Módulos
- **Data:** 02/09/2026
- **Problema:** O `ROADMAP.md` marcava os módulos Word (2) e PowerPoint (4) como "completos" e o módulo Windows (1) como parcialmente avançado, quando na realidade: (a) Word e PowerPoint possuem APENAS um simulado/prova de 10 questões, sem material didático interativo por aulas; (b) Windows possui apenas a Aula 08 implementada (11 aulas restantes pendentes); (c) Excel possui apenas a Aula 01. Apenas o módulo Internet está completo. As senhas `b002` (Word) e `d004` (PowerPoint) citadas eram, na verdade, senhas do módulo Internet — os simulados Word/PowerPoint desbloqueiam por checkbox de leitura do PDF, sem senha própria.
- **Solução Implementada:**
  1. Reescrita das seções dos Módulos 2 (Word) e 4 (PowerPoint) no `ROADMAP.md` para refletir o estado "Não iniciado (apenas simulado/prova)" e adição explícita das tarefas pendentes (material didático interativo conforme o Master Lesson Blueprint).
  2. Reescrita da seção do Módulo 1 (Windows) adicionando a pendência das 11 aulas restantes.
  3. Adição da tarefa explícita da Aula 02 como PRÓXIMA TAREFA no Módulo 3 (Excel).
  4. Inserção da tabela "GRÁFICO REAL DO PROGRESSO DOS MÓDULOS" no `INDEX.md` com o estado verdadeiro de cada módulo.
- **Arquivos Modificados:**
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
  - [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados & Resultados:**
  - Auditoria manual do conteúdo real de cada `modules/*/index.html` (Word/PowerPoint = apenas simulado de 10 questões; Windows = 1 aula; Excel = 1 aula).

### 📝 Registro Cronológico #18 — Especificação SDD da Aula 02 (Operações Básicas & Fórmulas Simples)
- **Data:** 02/09/2026
- **Escopo:** Elaboração da especificação técnica e pedagógica (SDD) da Aula 02 do Módulo Excel, seguindo as Fases 0-2 do pipeline obrigatório do `global-start-skill` (planejar → validar → especificar ANTES de implementar).
- **Conteúdo Especificado:**
  1. **6 Tópicos Didáticos**: (1) Operações matemáticas básicas (`+`, `-`, `*`, `/`); (2) Fórmulas simples & controle de gastos; (3) Referência relativa × absoluta (`$A$1` / tecla `F4`); (4) Alça de preenchimento automático; (5) Copiar fórmulas entre células; (6) 7 Exercícios práticos com fórmulas (loja, folha de pagamento/INSS, combustível, impostos, comissões, estoque com alerta, parcelas).
  2. **Novo Simulador Interativo "Fórmula Builder"**: cálculo em tempo real dos 4 operadores + modo demonstração de referência absoluta (`=B2*(1-$C$2)` replicado nas linhas).
  3. **Quiz de Fixação (5 questões)**: gabarito oficial mapeado em `GABARITO_L2 = [1, 2, 1, 1, 1]`, nota mínima 7,0/10,0, validação SHA-256 e exportação TXT/PDF/WhatsApp/E-mail.
  4. **Senha de Liberação**: `xb002` (oculta na interface).
  5. **Plano de Implementação (Fase 3)**: blocos de mudança em `modules/excel/index.html` (hub + tela da aula + simulador + quiz), `assets/js/pdf-lessons.js` e tríade de documentação.
- **Arquivos Modificados:**
  - **Criado**: [Docs/SPEC-EXCEL-AULA-02.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-02.md)
  - **Atualizado**: [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) (status da Aula 02 → "Especificada (Fase 2)")
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** A implementação HTML/JS da Aula 02 (Fase 3) não foi iniciada, conforme escopo acordado ("apenas a SPEC"). Aguarda validação formal do professor antes da codificação.

### 📝 Registro Cronológico #19 — Implementação da Aula 02 (Operações Básicas & Fórmulas Simples) — Simulador Fórmula Builder + PDF
- **Data:** 02/09/2026
- **Escopo:** Execução da Fase 3 (Implementar) da Aula 02 do Módulo Excel, seguindo o Master Lesson Blueprint e a SPEC [SPEC-EXCEL-AULA-02.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-02.md), autorizada pelo professor.
- **Implementado em [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html):**
  1. **Hub**: card da Aula 02 alterado de "🚧 Em Construção" para "🔓 Aula Liberada (Senha xb002)" com `promptLessonPassword(2, 'Operações Básicas & Fórmulas Simples')`.
  2. **Seção `screen-lesson-2`** (após a Aula 01): barra de progresso gamificada (`gamify-*`), abas `tab-l2-1..6`, 6 tópicos (`l2-phase-1..6`), painel de fixação `l2-fixation` com 5 questões e botão "Finalizar Exercício & Assinar Comprovante".
  3. **Simulador Interativo "Fórmula Builder"**: valores editáveis A1/B1, painel dos 4 operadores (`+ - * /`) com resultado em tempo real, barra de fórmulas personalizada com parser seguro (referências relativas e absolutas `$C$2`, função `SOMA`, percentuais `%`, operadores, tratamento de divisão por zero e expressões inválidas), modo demonstração de referência absoluta `=B2*(1-$C$2)`.
  4. **Quiz de 5 Questões**: com `GABARITO_L2 = [1, 2, 1, 1, 1]`, `QUESTOES_L2`, estado `readStatus[2]`/`userAnswers[2]` e nota mínima 7,0/10,0 — herda a infraestrutura SHA-256 e exportação TXT/PDF/WhatsApp/E-mail do `quiz-engine.js`.
  5. **Refatorações**: `openFixationPanel` generalizado com `lessonTitleMap`; `calcFixation` reescrito com lookup por `lessonNum` (`lessonData` com `reportKey` `l1ReportData`/`l2ReportData`), eliminando lógica hardcoded da Aula 01.
- **Implementado em [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js):** 6 seções didáticas da Aula 02 adicionadas ao bloco `excel` (operadores, fórmulas simples, referências relativa/absoluta, alça de preenchimento, copiar fórmulas, 7 exercícios práticos) e correção do mapeamento de títulos para ser **module-aware** (`moduleLessonTitles`), evitando que os títulos da Internet sobrescrevessem os títulos do Excel.
- **Verificação Automatizada:** `node --check` (sintaxe JS válida), parser HTML balanceado, render headless em Chrome sem erros de runtime com Fórmula Builder inicializado corretamente (soma=15, sub=5, mult=50, div=2, custom=15), e 10/10 casos de teste do parser de fórmulas passando (incluindo `SOMA`, `$` absoluto e `%`).
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) · [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** Validação visual/interativa final pelo professor e continuação das Aulas 03 a 13.

### 📝 Registro Cronológico #20 — Reforço Didático das Aulas 01 e 02 (Operadores na Aula 1, Função SOMA e 7 Planilhas Desenhadas na Aula 2)
- **Data:** 02/09/2026
- **Escopo:** Reforço da base pedagógica das Aulas 01 e 02 do Módulo Excel para que cada tópico fixe melhor os conceitos (tipos de dados, operadores e funções), com planilhas resolvidas desenhadas em PNG + tabela HTML + passo a passo.
- **Solução Implementada:**
  1. **Aula 01 §1.2**: imagem da anatomia da janela ampliada via classe CSS `.img-anatomia` (`max-width: 96% !important`) para melhor visualização.
  2. **Aula 01 §1.4**: expandido com base sólida sobre tipos de dados — Texto, Número/Moeda, Data/Hora, Porcentagem, Lógico e Fórmula, com coluna "Usado para", alerta sobre "número que não soma" (alinhamento à esquerda = texto) e menção à Caixa de Nome/Barra de Fórmulas.
  3. **Aula 01 Tópico 7 (NOVO)**: seção `l1-phase-7` — tabela de operadores (`+ - * / %`), regra de ordem e parênteses, imagem `aula1_07_operadores_basicos.png`, tabela `.mini-sheet` de compras e bloco teaser de funções; botão de navegação do Tópico 6 atualizado.
  4. **Refatoração dinâmica da gamificação/guarda**: `readStatus = { 1: [7 falses], 2: [6 falses] }`; `openFixationPanel` usa `readStatus[lessonNum].length` para a guarda e `totalTopics + 1` para a aba de exercício de fixação (`tab-l1-8`, `tab-l2-7`); `updateGamification` usa `totalTopics = readStatus[lessonNum].length`.
  5. **Aula 02 §2.2**: bloco "🧩 O que é uma FUNÇÃO?" (sintaxe `=NOME(argumentos)`, intervalo `:`, exemplo `SOMA()`) + planilha "Lista de Gatos" com `=SOMA(C2:C6)` → 20, imagem `aula2_gatos_soma.png`.
  6. **Aula 02 §2.6**: reescrito com os 7 exercícios, cada um com **PNG da planilha resolvida, tabela HTML `.mini-sheet` preenchida (5 linhas) e passo a passo `<ol>`**. Exercício 5 corrigido para consistência pedagógica (percentual fixo em `$C$1` usado em todas as linhas; comissões 750/425/600/300/525; totais 52000/2600).
  7. **Imagens PNG geradas** (`assets/img/excel/a2/`, via `/tmp/gen_sheets2.py` com PIL e fontes DejaVu): `aula1_07_operadores_basicos.png`, `aula2_gatos_soma.png`, `aula2_ex1_loja_roupas.png`, `aula2_ex2_folha_pagamento.png`, `aula2_ex3_combustivel.png`, `aula2_ex4_impostos.png`, `aula2_ex5_comissoes.png`, `aula2_ex6_estoque.png`, `aula2_ex7_parcelas.png` (todas verificadas com conteúdo/cores).
  8. **Motor de PDF** (`assets/js/pdf-lessons.js`): seção 1.7 (operadores), §1.4 (tipos de dados expandidos, com "número que não soma"), §2.2 (Lista de Gatos + SOMA) e §2.6 (array `images` com os 7 PNGs).
- **Verificação Automatizada:** `node --check` (sintaxe JS válida); parser HTML balanceado (0 erros, pilha vazia); render headless em Chrome sem erros de runtime — Aula 01 com 7 tópicos + aba `tab-l1-8`, progresso "7 de 7" e painel de fixação abrindo pela guarda dinâmica; Aula 02 com "6 de 6", guarda bloqueando antes da leitura e `tab-l2-7` abrindo o painel; imagens confirmadas carregando (anatomia 639px, operadores 600x318, gatos 550x382, 7 exercícios carregados); PDF end-to-end validado (seções 1.7/1.4 presentes na Aula 1; gatos + 7 imagens `aula2_ex*` na Aula 2).
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [assets/img/excel/a2/](file:///home/rangel/git-dev/aulas/assets/img/excel/a2/) (9 PNGs novos/regenerados)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** Validação visual/interativa final pelo professor; continuação das Aulas 03 a 13.

### 📝 Registro Cronológico #21 — Substituição do PNG de Operadores por Tabela Estilo Excel + Atividade de Controle de Gastos Pessoais (Aula 01, Tópico 7)
- **Data:** 02/09/2026
- **Escopo:** Corrigir a baixa qualidade pedagógica/visual do PNG de operadores da Aula 01 e cumprir o pedido do professor de *"criar uma tabela em html e desenhá-la parecida ao excel"*, além de *"fazer o aluno criar a planilha para controlar gasto pessoal"* usando os operadores básicos e a função `=SOMA()`.
- **Solução Implementada:**
  1. **Tela (Aula 01, Tópico 7)**: removido o `<img aula1_07_operadores_basicos.png>`. Substituído por um **worksheet HTML estilo Excel** (`.excel-sheet-preview`): barra de título verde "Sheet1 — Planilha de Compras", linha de letras de coluna (A–E), linha de cabeçalho, 5 linhas de dados com fórmulas de referência relativa (`=B2*C2*(1-D2)`) e linha **TOTAL GERAL** com `=SOMA(E2:E6) → R$ 72,80`.
  2. **Nova ATIVIDADE PRÁTICA — "Controle de Gastos Pessoais"** no Tópico 7: passo a passo guiado para o aluno criar no Excel real sua planilha pessoal cobrindo todos os operadores básicos (`*` no subtotal `=C3*D3`, `-` no saldo `=C10-E8`, `/` no rateio `=C7/2`, `%` na poupança `=C11*10%`, `+` embutido em `=SOMA()`) + função `=SOMA(E3:E7)`. Inclui tabela "Como deve ficar a sua planilha" (`.mini-sheet`) com exemplo resolvido (total R$ 2.560,00; saldo R$ 940,00).
  3. **PDF** (`assets/js/pdf-lessons.js`, seção 1.7): removidos `image`/`caption` (PNG ruim). `content` reescrito descrevendo a planilha estilo Excel (`=SOMA(E2:E6) → R$ 72,80`) e `steps[]` adicionados com o roteiro completo da Atividade de Controle de Gastos Pessoais.
  4. **Arquivo órfão**: excluído `assets/img/excel/a2/aula1_07_operadores_basicos.png` (não é mais referenciado em tela nem em PDF).
- **Verificação Automatizada:**
  - `node --check assets/js/pdf-lessons.js` → sintaxe válida.
  - Parser HTML balanceado → 0 erros, pilha vazia.
  - Render headless em Chrome (Tópico 7): `img` de operadores = **0**, `.excel-sheet-preview` = **1**, tabela = **8 linhas** (letras A–E + cabeçalho + 5 dados + TOTAL), `=SOMA(E2:E6)` presente, "CONTROLE DE GASTOS PESSOAIS" e `=SOMA(E3:E7)` presentes, **0 erros de JS**, fase visível.
  - PDF Aula 01 gerado: `hasBadImage: false` (PNG removido do PDF), `hasActivity: true`, `hasSomaE3E7: true`, `hasSomaE2E6: true`.
  - PNG órfão: 0 referências restantes na tela e no motor de PDF, arquivo deletado.
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - `assets/img/excel/a2/aula1_07_operadores_basicos.png` (excluído)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)

### 📝 Registro Cronológico #22 — Implementação da Aula 03 (Funções de Cálculo: SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT) — Simulador Function Lab + PDF
- **Data:** 02/09/2026
- **Escopo:** Execução da Fase 3 (Implementar) da Aula 03 do Módulo Excel, seguindo a SPEC [SPEC-EXCEL-AULA-03.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-03.md) (aprovada pelo professor com base no material real `Aula-3-Excel_Exercicios_Praticos.html`) e o padrão estrutural da Aula 02.
- **Ajuste do SDD Mestre:** linha do catálogo Excel da Aula 03 realinhada de "Exercícios Práticos & Formatação" para **"Funções de Cálculo Essenciais"** (resolvida divergência com o catálogo, priorizando o conteúdo real da fonte).
- **Implementado em [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html):**
  1. **Hub**: card da Aula 03 alterado de "🚧 Em Construção (Senha xc003)" para "🔓 Aula Liberada (Senha xc003)" com `promptLessonPassword(3, 'Funções de Cálculo: SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM')` e badge `badge-lesson-3`.
  2. **Seção `screen-lesson-3`** (após a Aula 02): barra de progresso gamificada (`gamify-*` ids `gamify-label-3/fill-3/badge-box-3`), abas `tab-l3-1..7`, **6 tópicos** (`l3-phase-1..6`), painel de fixação `l3-fixation`.
  3. **6 Tópicos Didáticos**: (1) Função SOMA; (2) Função MÉDIA; (3) MÁXIMO & MÍNIMO; (4) CONT.VALORES & CONT.NÚM (tabela `.mini-sheet` da equipe de vendas); (5) **Lab de Funções** (simulador interativo); (6) 4 Exercícios Guiados (Custos, Estoque, Vendas, Contagem).
  4. **Novo Simulador Interativo "Function Lab"**: nova classe `.function-lab-container` (CSS inline no arquivo) — planilha de custos da empresa ABC com 6 categorias × 3 meses de **valores editáveis** que recalculam em tempo real `SOMA` (linha/coluna), `MÉDIA` (energia), `MÁXIMO` e `MÍNIMO`; **Modo Contadoras** alternável (`flSetCounter`) demonstrando `CONT.NÚM(B2:B8)` = 6 vs `CONT.VALORES(A2:A8)` = 7.
  5. **Quiz de 5 Questões**: `GABARITO_L3 = [1, 2, 1, 1, 0]`, `QUESTOES_L3`, estado `readStatus[3]` (6 tópicos)/`userAnswers[3]`, nota mínima 7,0/10,0, `lessonData[3]` com `reportKey: "l3ReportData"` — herda a infraestrutura SHA-256 e exportação TXT/PDF/WhatsApp/E-mail.
- **Implementado em [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js):** bloco `excel` ganhou 6 seções didáticas da Aula 03 (`lessonNum: 3`), registro `3` em `moduleLessonTitles.excel` ("Aula 03: Funções de Cálculo — SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM") para geração da apostila por `downloadLessonPDF('excel', 3)`.
- **Verificação Automatizada:** `node --check` (sintaxe JS válida no `index.html` e `pdf-lessons.js`), parser HTML balanceado e confirmação de que todos os IDs referenciados pelo JS (`gamify-*`, `tab-l3-*`, `l3-phase-*`, `btn-read-l3-*`, `flb*`, `fl-*`) existem no DOM da Aula 03.
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** Validação visual/interativa final pelo professor; continuação das Aulas 04 a 13.

### 📝 Registro Cronológico #23 — Refinamentos Visuais da Aula 03 (Contraste e Planilhas Desenhadas no Site e na Apostila PDF)
- **Data:** 02/09/2026
- **Escopo:** Correções de legibilidade e enriquecimento visual da Aula 03 Excel após revisão do professor — garantindo que os "desenhos" das planilhas apareçam tanto na tela quanto no PDF didático, incluindo também os **exercícios**.
- **Correção de contraste** ([modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)): texto do intro da Aula 03 usava `color:var(--ink-light)` (tom claro `#F4E8DC`) sobre o fundo claro do `.lesson-reading-card` (`--paper-beige` `#FFF9F2`), ficando quase invisível. Corrigido para `color:var(--ink-dark)` (verificado via DOM dump headless).
- **Planilhas desenhadas no site** (`.excel-sheet-preview`/`.mini-sheet`): desenho estilo Excel (título, letras de coluna A–E, cabeçalho, 3+ linhas, linha de total) adicionado aos Tópicos 1 (SOMA — `=SOMA(B2:D4) → R$ 9.050,00`), 2 (MÉDIA — `=MÉDIA(B2:B4) → 395,00`) e 3 (MÁXIMO/MÍNIMO — `=MÁXIMO(B2:D6) → 8.500,00` e `=MÍNIMO(B2:D6) → 110,00`), além do bloco azul "📌 Observação" com a dica: **se `MÍNIMO()` não funcionar, usar `=MINIMOA(intervalo)`** (função antiga, Excel de versões anteriores).
- **Planilhas desenhadas no PDF** ([assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)): tabelas HTML com **estilos inline** (barras de título coloridas, linhas de coluna, células com borda, linha de total destacada) adicionadas às seções 3.1 (SOMA), 3.2 (MÉDIA), 3.3 (MÁXIMO/MÍNIMO + nota MINIMOA) e, em seguida, aos **4 Exercícios Guiados (3.6)** — Custos (6 categorias/3 meses), Estoque (Est. Final = inicial+entradas−saídas), Vendas (5 vendedores × 6 meses com TOTAL/MÉDIA) e Contagem (7 funcionários com `CONT.NÚM`/`CONT.VALORES`). Strings convertidas para template literals (backticks) por conterem HTML multi-linha; tabelas/`<div>` dentro de `<p>` fazem o browser auto-fechar o `<p>` e renderizam corretamente na janela de impressão.
- **Verificação Automatizada:** `node --check assets/js/pdf-lessons.js` (SYNTAX OK); geração do HTML de impressão da Aula 03 capturado via harness Node e renderizado em Chrome headless confirmou as 7 tabelas de planilha (3 tópicos + 4 exercícios) com todos os títulos e fórmulas-chave (`=SOMA(B2:D7)`, `=MÁXIMO(B2:G6)`, `=CONT.NÚM(B2:B8)`, `=MINIMOA(intervalo)`, etc.) e **0 erros de JS**.
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência / Próximo Passo:** Prosseguir à **Aula 04 do Excel** (Exercícios de Fixação e Quizzes, seguindo o pipeline SDD). Aula 03 Excel concluída e documentada.

### 📝 Registro Cronológico #24 — Especificação SDD da Aula 04 (Funções Lógicas Avançadas: SE, E, OU, NÃO, SE aninhado e Formatação Condicional)
- **Data:** 03/09/2026
- **Escopo:** Elaboração da especificação técnica e pedagógica (SDD) da Aula 04 do Módulo Excel, seguindo as Fases 0-2 do pipeline obrigatório do `global-start-skill` (planejar → validar → especificar ANTES de implementar), com base no material real `Aula-4-Excel Funções Lógicas Avançadas` (`Aula-4-Excel Funções Lógicas Avançadas-Atual .md` e `Aula-4-ExcelFunesLgicasAvanadasAtual.html`).
- **Conteúdo Especificado:**
  1. **7 Tópicos Didáticos**: (1) Revisão Rápida da Função SE (`=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)`); (2) SE + E — todas as condições verdadeiras (`=SE(E(B2>=7; C2>=75); "Aprovado"; "Reprovado")`); (3) SE + OU — pelo menos uma condição (`=SE(OU(B2>=9; C2="Sim"); "Tem bônus"; "Sem bônus")` + tabela comparativa E × OU); (4) SE aninhado — múltiplos resultados (classificação Excelente/Bom/Regular/Reprovado); (5) Função NÃO — inverte condição (`=SE(NÃO(B2>=7); "Precisa de reforço"; "OK")` + equivalências); (6) Formatação Condicional com Fórmulas (passo a passo de 4 etapas, uso do `$` na coluna, múltiplas regras, Gerenciar Regras); (7) Exercício Prático Financeiro — Classificação de Clientes (SE aninhado em `E2` + Formatação Condicional com 3 cores Verde escuro/Azul claro/Vermelho).
  2. **Novo Simulador Interativo "Logic Lab"**: paleta editável de alunos (nota/frequência) recalculando em tempo real; painel de comparação SE simples / SE+E / SE+OU / SE aninhado sobre os mesmos dados; **Modo NÃO** (inversão lógica com alternador); mini-demonstração de Formatação Condicional com células coloridas.
  3. **Quiz de Fixação (5 questões)**: gabarito oficial mapeado em `GABARITO_L4 = [1, 2, 1, 2, 3]`, nota mínima 7,0/10,0, validação SHA-256 e exportação TXT/PDF/WhatsApp/E-mail.
  4. **Senha de Liberação**: `xd004` (oculta na interface).
  5. **Plano de Implementação (Fase 3)**: blocos de mudança em `modules/excel/index.html` (hub + tela da aula + simulador + quiz), `assets/js/pdf-lessons.js` e tríade de documentação.
- **Arquivos Modificados:**
  - **Criado**: [Docs/SPEC-EXCEL-AULA-04.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-04.md)
  - **Atualizado**: [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) (status da Aula 04 → "Especificada (Fase 2)")
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Testes Executados:** Auditoria do material fonte (`.md` + `.html`) confirmando os 7 tópicos e o exercício financeiro; verificação de consistência com o padrão das Aulas 02 e 03 (senha `xd004`, 5 questões, nota 7.0).
- **Pendência:** A implementação HTML/JS da Aula 04 (Fase 3) **não foi iniciada** conforme escopo acordado ("apenas a SPEC"). Aguarda validação formal do professor antes da codificação. → **Resolvida** em Registro #25.

### 📝 Registro Cronológico #25 — Implementação (Fase 3) da Aula 04 (Funções Lógicas Avançadas: SE, E, OU, NÃO, SE aninhado e Formatação Condicional) — Simulador Logic Lab + PDF
- **Data:** 03/09/2026
- **Escopo:** Execução da Fase 3 (Implementar) da Aula 04 do Módulo Excel, seguindo a SPEC [SPEC-EXCEL-AULA-04.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-04.md) (aprovada pelo professor com base no material real `Aula-4-Excel Funções Lógicas Avançadas-Atual .md`) e o padrão estrutural da Aula 03.
- **Implementado em [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html):**
  1. **Hub**: card da Aula 04 alterado de bloqueado para "🔓 Aula Liberada (Senha `xd004`)" com `promptLessonPassword(4, 'Funções Lógicas Avançadas: SE, E, OU, NÃO, SE aninhado e Formatação Condicional')`, badge `badge-lesson-4` e número verde.
  2. **Seção `screen-lesson-4`** (após a Aula 03): barra de progresso gamificada (`gamify-label-4/fill-4/badge-box-4`), abas `tab-l4-1..8`, **7 tópicos** (`l4-phase-1..7`), painel de fixação `l4-fixation`.
  3. **7 Tópicos Didáticos**: (1) Revisão Rápida da Função SE; (2) SE + E — todas verdadeiras; (3) SE + OU — pelo menos uma (tabela comparativa E × OU); (4) SE aninhado — múltiplos resultados (Excelente/Bom/Regular/Reprovado); (5) Função NÃO — inverte condição + equivalências; (6) **Logic Lab** (simulador interativo); (7) Exercício Financeiro — Classificação de Clientes (SE aninhado em `E2` + Formatação Condicional com 3 cores).
  4. **Novo Simulador Interativo "Logic Lab"**: classe `.function-lab-container` reutilizada + novas classes `.lc-ok/.lc-bad/.lc-mid/.fc-cell/.fc-green/.fc-red`. Paleta editável de 3 alunos (nota 0-10 / frequência 0-100) com recalculo **em tempo real** (`runLogicLab`) de `SE` (aprovado), `SE+E` (nota e freq), `SE+OU` (bônus), `SE aninhado` (4 níveis); **Modo NÃO** (`lcSetNegation`) que inverte todos os resultados lógicos (Verdadeiro ↔ Falso), demonstrando a função `NÃO()`; **mini-demo de Formatação Condicional** (`lcToggleCfDemo`) alternando células da coluna Situação entre regra verde (`=SE(nota>=7)`) e vermelha — as cores mudam sozinhas conforme os dados.
  5. **Quiz de 5 Questões**: `GABARITO_L4 = [0, 1, 1, 2, 0]`, `QUESTOES_L4`, estado `readStatus[4]` (7 tópicos)/`userAnswers[4]`, nota mínima 7,0/10,0, `lessonData[4]` com `reportKey: "l4ReportData"` — herda a infraestrutura SHA-256 e exportação TXT/PDF/WhatsApp/E-mail.
  > 📌 **Nota sobre o gabarito**: o item 3 do Registro #24 citava `GABARITO_L4 = [1, 2, 1, 2, 3]` (planejado na SPEC). Durante a implementação, seguindo o padrão das Aulas 01-03 (quiz renderizado estaticamente no HTML, com opções indexadas por `selectFixOption(4, q, optIdx, this)`), o gabarito **efetivamente implementado** é `GABARITO_L4 = [0, 1, 1, 2, 0]`, validado via Chrome headless (5/5 acertos → nota 10,0).
- **Implementado em [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js):** bloco `excel` ganhou **7 seções** da Aula 04 (`lessonNum: 4`) com planilhas desenhadas em HTML estilo Excel (Aprovação de Alunos, Nota+Frequência, Comparativo E×OU, Classificação de Notas, Reforço Escolar, Classificação de Clientes) e a fórmula `=$E2=` das 3 regras de Formatação Condicional; registro `4` em `moduleLessonTitles.excel` ("Aula 04: Funções Lógicas Avançadas — SE, E, OU, NÃO, SE Aninhado e Formatação Condicional") para `downloadLessonPDF('excel', 4)`.
- **Verificação Automatizada:** `node --check` (sintaxe JS válida no `index.html` e `pdf-lessons.js`); **Chrome headless** (via Chrome DevTools Protocol): desbloqueio com senha `xd004`, aba Aula 04 visível, Logic Lab recalculando SE/E/OU/SE aninhado corretamente, Modo NÃO invertendo resultados, gamificação 60%→100%, `openFixationPanel` abrindo sem alert (7/7 tópicos), e quiz 5/5 → **nota 10,0 aprovado com SHA-256** (`WR-999A-...`) — **0 erros JS**.
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** Validação visual/interativa final pelo professor; continuação das Aulas 06 a 13 do Excel.

### 📝 Registro Cronológico #26 — Implementação (Fase 3) da Aula 05 (Funções de Pesquisa & Referência: PROCV, PROCH, ÍNDICE, CORRESP e ÍNDICE+CORRESP) — Simulador Lookup Lab + PDF
- **Data:** 03/09/2026
- **Escopo:** Execução da Fase 3 (Implementar) da Aula 05 do Módulo Excel, seguindo o material real `Aula-5-Funcoes_Pesquisa_Referencia.html` (36 KB: PROCV, PROCH, CORRESP, ÍNDICE, dupla ÍNDICE+CORRESP e 5 tarefas práticas respondidas) e o padrão estrutural das Aulas 03/04.
- **Implementado em [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html):**
  1. **Hub**: card da Aula 05 alterado para "🔓 Aula Liberada (Senha `xe005`)" com `promptLessonPassword(5, 'Funções de Pesquisa & Referência: PROCV, PROCH, ÍNDICE e CORRESP')`.
  2. **Seção `screen-lesson-5`**: barra de progresso gamificada (`gamify-label-5/fill-5/badge-box-5`), abas `tab-l5-1..8`, **7 tópicos** (`l5-phase-1..7`), painel de fixação `l5-fixation`.
  3. **7 Tópicos Didáticos**: (1) PROCV — busca vertical; (2) PROCH — busca horizontal; (3) ÍNDICE — retorna valor por coordenadas; (4) CORRESP — encontra a posição; (5) ÍNDICE + CORRESP — a combinação poderosa (busca em qualquer direção); (6) **Lookup Lab** (simulador interativo); (7) Exercício Prático — Loja de Produtos Eletrônicos (5 tarefas + gabarito).
  4. **Regra de Design**: todas as tabelas de planilha seguiram a diretriz do usuário — **linha separada de letras de coluna acima do cabeçalho** (sem o estilo inline "A — Cliente").
  5. **Novo Simulador Interativo "Lookup Lab"**: tabela de 4 produtos editáveis (Código/Produto/Preço, ids `ll-code-*`/`ll-prod-*`/`ll-price-*`), campo de busca `ll-search` e resultado `ll-result`; `runLookupLab()` procura o código na primeira coluna e retorna produto e preço da mesma linha, exibindo a fórmula `=PROCV("102"; A:B; 2; FALSO)` — demonstra ao vivo o comportamento do PROCV.
  6. **Quiz de 5 Questões**: `GABARITO_L5 = [1, 0, 2, 0, 2]`, `QUESTOES_L5`, estado `readStatus[5]` (7 tópicos)/`userAnswers[5]`, nota mínima 7,0/10,0, `lessonData[5]` com `reportKey: "l5ReportData"` — herda a infraestrutura SHA-256 e exportação TXT/PDF/WhatsApp/E-mail. `lessonTitleMap` do `openFixationPanel` ganhou a chave `5` (aba do quiz `tab-l5-8` = `totalTopics(7)+1`).
- **Implementado em [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js):** bloco `excel` ganhou **7 seções** da Aula 05 (`lessonNum: 5`) com planilhas desenhadas em HTML estilo Excel (Tabela de Produtos, Metas Mensais, Frutas, Funcionários, Loja de Eletrônicos — todas com linha de letras de coluna + cabeçalho limpo), gabarito das 5 tarefas e resumo de quando usar cada função; registro `5` em `moduleLessonTitles.excel` ("Aula 05: Funções de Pesquisa e Referência — PROCV, PROCH, ÍNDICE, CORRESP") para `downloadLessonPDF('excel', 5)`.
- **Verificação Automatizada:** `node --check` (sintaxe JS válida no `index.html` e `pdf-lessons.js`); validação de equilíbrio de tags HTML (0 erros, 0 tags não fechadas); conferência de todos os IDs de referência JS presentes no HTML.
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) (status Aula 05 → "✅ Implementada (Fase 3)")
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** Validação visual/interativa final pelo professor; continuação das Aulas 06 a 13 do Excel.

### 📝 Registro Cronológico #27 — Ajuste Interativo do PROCV (Tópico 1) e Reestruturação do Lookup Lab para Tabela de Funcionários (Aula 05)
- **Data:** 03/09/2026
- **Escopo:** Ajuste solicitado pelo professor após a implementação da Aula 05: (a) tornar o exemplo de PROCV do Tópico 1 interativo "como no Lab" (busca ao vivo, sem botão); (b) reestruturar o simulador Lookup Lab (Tópico 6) de uma tabela de produtos para uma **tabela de funcionários** com colunas Código/Funcionário/Salário/Cargo/Qt. Filhos/Data Admissão, mantendo o campo de busca com botão e exibindo o resultado **empilhado** (Funcionário, Salário, Cargo, Qt. Filhos, Data Admissão).
- **Implementado em [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html):**
  1. **Exemplo PROCV (Tópico 5.1):** novo bloco interativo "🖥️ Teste você mesmo — PROCV em ação" com `Buscar Código:` + campo `provq-code` (evento `oninput="runProvExample()"`, **sem botão**) e resultado `provq-result`. Nova função `window.runProvExample()`: procura o código na mini-tabela (101–104) e mostra **Produto + Preço**, empilhados, exibindo `=PROCV("102"; A2:C5; 2; FALSO)`; com mensagem de "não encontrou" + sugestão de códigos válidos. Inicializada automaticamente ao abrir a aula.
  2. **Lookup Lab (Tópico 5.6):** tabela de 4 linhas editáveis reestruturada para as colunas **Linha | Código | Funcionário | Salário | Cargo | Qt. Filhos | Data Admissão** com novos ids `ll-code-*`, `ll-func-*`, `ll-salary-*`, `ll-role-*`, `ll-kids-*`, `ll-hire-*` (dados de exemplo: Ana Souza, Bruno Lima, Carla Dias, Diego Melo). Mantido `Buscar Código: ll-search` **+ botão Procurar** e resultado `ll-result`. `runLookupLab()` reescrito para ler os novos campos e exibir o resultado **empilhado** (Funcionário, Salário, Cargo, Qt. Filhos, Data Admissão), mostrando `=PROCV("102"; A:G; 2; FALSO)`.
  3. **Limpeza:** IDs antigos `ll-prod-*`/`ll-price-*` totalmente removidos do HTML e do JS (0 referências remanescentes).
- **Verificação Automatizada (Chrome headless):** PROCV exemplo → código `103` retorna "Borracha" e código `999` exibe "não encontrou"; Lookup Lab → código `102` retorna Bruno Lima, R$ 5.200,00, Supervisor, 1 filho e 15/07/2020; 0 erros de página. `node --check` (sintaxe JS OK); HTML balanceado (0 erros de tags); todos os novos IDs (`provq-code`, `provq-result`, `ll-code/func/salary/role/kids/hire-1..4`, `ll-search`, `ll-result`) únicos.
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** Validação visual/interativa final pelo professor; continuação das Aulas 06 a 13 do Excel.

### 📝 Registro Cronológico #28 — Implementação (Fase 3) da Aula 06 (Datas e Horas no Excel: HOJE, AGORA, DATA, DIA, MÊS, ANO, DIAS360, DIAS.ÚTEIS) — Simulador Date & Time Lab + PDF
- **Data:** 03/09/2026
- **Escopo:** Execução da Fase 3 (Implementar) da Aula 06 do Módulo Excel, seguindo o material real `AulaOrigem/excel/Aula6_Datas_e_Horas_no_ExcelRevisada.html` e o SDD validado `Docs/SPEC-EXCEL-AULA-06.md` (senha `xf006`). Segue o padrão estrutural das Aulas 03/04/05.
- **Implementado em [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html):**
  1. **Hub**: card da Aula 06 alterado para "🔓 Aula Liberada (Senha `xf006`)" com `promptLessonPassword(6, 'Datas e Horas no Excel: HOJE, AGORA, DATA, DIA, MÊS, ANO, DIAS360, DIAS.ÚTEIS')` e badge `id="badge-lesson-6"`.
  2. **Seção `screen-lesson-6`**: barra de progresso gamificada (`gamify-label-6/fill-6/badge-box-6`), abas `tab-l6-1..8`, **7 tópicos** (`l6-phase-1..7`), painel de fixação `l6-fixation`, datas editáveis `dt-birth-1/2` e `dt-lastcall-1/2`, saídas `dt-age-1/2` e `dt-days-1/2`, painel `dt-function-panel`.
  3. **7 Tópicos Didáticos**: (1) HOJE(); (2) AGORA(); (3) DATA(); (4) DIA/MÊS/ANO(); (5) DIAS360(); (6) **Date & Time Lab** (simulador interativo); (7) Exercício Prático — Agenda de Contatos + Painel de Estatísticas + Alertas Automáticos + Prazo de Projeto.
  4. **Novo Simulador Interativo "Date & Time Lab"**: grade editável de 2 contatos (João Silva 15/03/1985 e Maria Santos 22/07/1990) que **recalcula Idade (`=ANO(HOJE())-ANO(D2)`) e Dias sem Contato (`=HOJE()-F2`) ao vivo** via `oninput="updateDateResults()"`; painel `#dt-function-panel` demonstra HOJE, AGORA, DATA(2025;12;25), DIA/MÊS/ANO, comparativo Subtração×DIAS360×(americano/europeu)×DIAS.ÚTEIS do projeto 01/11/2025→30/11/2025, e chips de alerta "Aniversariante!"/ "Ligar urgente!" (>15 dias) baseados na data do João. Funções `calcDateAge()`, `updateDateResults()` e `countBusinessDays()` expostas globalmente.
  5. **Quiz de 5 Questões**: `GABARITO_L6 = [1, 1, 2, 2, 1]`, `QUESTOES_L6`, estado `readStatus[6]` (7 tópicos)/`userAnswers[6]`, nota mínima 7,0/10,0, `lessonData[6]` com `moduleId: "excel-aula-06"`, `reportKey: "l6ReportData"` e `shortTitle: "Aula 06"` — herda a infraestrutura SHA-256 e exportação TXT/PDF/WhatsApp/E-mail. `lessonTitleMap` do `openFixationPanel` ganhou a chave `6` (aba do quiz `tab-l6-8` = `totalTopics(7)+1`).
- **Implementado em [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js):** bloco `excel` ganhou **7 seções** da Aula 06 (`lessonNum: 6`): HOJE, AGORA, DATA, DIA/MÊS/ANO, DIAS360, DIAS.ÚTEIS e Exercício Prático — Agenda de Contatos (fórmulas de idade, dias sem contato, alertas, painel de estatísticas e prazo de projeto); registro `6` em `moduleLessonTitles.excel` ("Aula 06: Datas e Horas no Excel — HOJE, AGORA, DATA, DIA, MÊS, ANO, DIAS360, DIAS.ÚTEIS") para `downloadLessonPDF('excel', 6)`.
- **Verificação Automatizada:** `node --check` (sintaxe JS válida no `index.html` e `pdf-lessons.js`); validação de equilíbrio de tags HTML (0 erros, 0 tags não fechadas); conferência de todos os IDs de referência JS presentes no HTML (`dt-birth-*`, `dt-lastcall-*`, `dt-age-*`, `dt-days-*`, `dt-function-panel`, `l6-*`, `tab-l6-*`).
- **Arquivos Modificados:**
  - [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)
  - [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
  - [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) (status Aula 06 → "✅ Especificada (Fase 0-2 concluída)"; título `DIAS.ÚTEIS` corrigido)
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** Validação visual/interativa final pelo professor; continuação das Aulas 07 a 13 do Excel.

### 📝 Registro Cronológico #29 — Especificação SDD (Fase 0-2) da Aula 07 (Contas Pessoais & Tabela Dinâmica)
- **Data:** 03/09/2026
- **Escopo:** Execução das Fases 0-2 (Planejar → Validar → Especificar) da Aula 07 do Módulo Excel, seguindo o material real `AulaOrigem/excel/Aula - 7- Excel Contas Pessoais com tabela dinâmica/ExcelContasPessoaiscomtabeladinmica.html` e as **16 imagens** já disponíveis em `assets/img/excel/a7/image1..16.png`. Segue o padrão estrutural dos SDDs das Aulas 01 a 06.
- **Especificado em [Docs/SPEC-EXCEL-AULA-07.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-07.md):**
  1. **Visão Geral e 12 Objetivos de Aprendizagem** — construção da planilha base de Contas Pessoais (11 campos), funções de data `=HOJE()/DIA()/MÊS()/ANO()`, Validação de Dados (Lista `BOLETO;DÉBITO;PIX;TRANSFERÊNCIA`), criação da Tabela Dinâmica, ordenação decrescente, reorganização de campos, filtro por Ano e Estrutura de Tópicos.
  2. **Core Topics — 9 Etapas Didáticas** (passo a passo do material fonte), cada uma mapeando as imagens ilustrativas de `assets/img/excel/a7/`.
  3. **Senha Secreta**: `xg007` (oculta).
  4. **Novo Simulador "Pivot Lab"** — grade de lançamentos editável, painel de configuração de campos (Linhas/Valores/Filtros), tabela dinâmica consolidada ao vivo, controles de ordenação/filtro por ano e botões +/− de estrutura de tópicos; funções `renderPivotTable()`, `updatePivotFields()`, `applyPivotFilter()`, `sortPivotDesc()`, `togglePivotOutline()`.
  5. **Quiz de 5 Questões** com gabarito oficial `GABARITO_L7 = [1, 2, 3, 0, 1]` (Inserir→Tabela Dinâmica; Validação de Dados Lista; LINHAS; FILTROS; Dados→Estrutura de tópicos), nota mínima 7,0/10,0 e validação SHA-256.
  6. **Plano de Implementação (Fase 3 Futura)** — Hub `xg007`, tela `#screen-lesson-7`, Pivot Lab, quiz e bloco PDF `lessonNum: 7` em `assets/js/pdf-lessons.js`.
- **Documentação Atualizada:**
  - [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) (status Aula 07 → "📝 Especificada (Fase 0-2 concluída)")
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** Validação da presente especificação pelo professor; execução da Fase 3 (Implementar) da Aula 07; continuação das Aulas 08 a 13 do Excel.

---

### 📝 Registro Cronológico #30 — Implementação (Fase 3) da Aula 07 (Contas Pessoais & Tabela Dinâmica) — Simulador Pivot Lab + PDF
- **Data:** 03/09/2026
- **Escopo:** Execução da Fase 3 (Implementar) da Aula 07 do Módulo Excel, seguindo o SDD validado `Docs/SPEC-EXCEL-AULA-07.md` (senha `xg007`, gabarito `GABARITO_L7 = [1, 2, 3, 0, 1]`) e o padrão estrutural da Aula 06.
- **Implementado em [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html):**
  1. **Card do Hub** da Aula 07 liberado (`🔓 Aula Liberada (Senha xg007)`, `promptLessonPassword(7, ...)`, `badge-lesson-7`).
  2. **Tela `#screen-lesson-7`** com 9 tópicos didáticos (Planilha Base de 11 campos; Funções de Data DIA/MÊS/ANO; Validação de Dados Lista `BOLETO;DÉBITO;PIX;TRANSFERÊNCIA`; Criar Tabela Dinâmica; Selecionar Intervalo; Campos da Pivô; Ordenar Dados; Pivot Lab; Exercício Prático), 16 imagens de `assets/img/excel/a7/image1..16.png`, botões Voltar/Imprimir/`downloadLessonPDF('excel', 7)`.
  3. **Simulador "Pivot Lab"** (Tópico 8): checkboxes de campos Tipo/Grupo/Conta/Mês/Valor, select de Filtro por Ano, botões Classificar decrescente e Estrutura de Tópicos +/−; funções `renderPivotTable()`, `applyPivotFilter()`, `sortPivotDesc()`, `togglePivotOutline()` com base de dados demonstrativa de lançamentos 2025/2026.
  4. **Registros de script**: `readStatus[7]` (9 tópicos), `userAnswers[7]` (5 questões), chave `7` em `lessonTitleMap`, `lessonData[7]` (`moduleId: "excel-aula-07"`, `reportKey: "l7ReportData"`, `shortTitle: "Aula 07"`), `GABARITO_L7`, `QUESTOES_L7` e senha `PASSWORDS[7] = "xg007"`.
  5. **Quiz de 5 Questões** com nota mínima 7,0, validação SHA-256 e exportação TXT/PDF/WhatsApp/E-mail (fluxo genérico `selectFixOption`/`calcFixation`).
- **Atualizado em [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js):** bloco excel `lessonNum: 7` com 9 seções de apostila + `moduleLessonTitles.excel[7]` adicionado.
- **Validação realizada:** `node --check` em `assets/js/pdf-lessons.js` e no bloco script inline extraído de `modules/excel/index.html` (sem erros de sintaxe); unicidade dos IDs `pl-*`/`l7-*`/`tab-l7-*` confirmada; 16/16 imagens de `assets/img/excel/a7/` referenciadas e presentes; 9 fases + 9 botões de leitura + 10 abas (9 tópicos + quiz).
- **⚠️ AJUSTES PENDENTES (Fase 3 ainda não concluída — retomar em outro momento):**
  1. **Bug de alinhamento de colunas no "Total Geral" do Pivot Lab** — em `renderPivotTable()` (bloco inline de `modules/excel/index.html`, seção Pivot Lab), a linha "Total Geral" usa `colspan = (showTipo+showGrupo+showConta+showMes)+1` e depois emite 2 células de valor; com `showValor` ativo isso gera **6 células vs 5 colunas** do cabeçalho (a coluna "Lançamentos" não é somada no `colspan`). Precisa ser `colspan = N + (showValor?1:0)` + 1 célula de total + 1 célula de contagem.
  2. **Semântica da linha de resumo** "Receitas vs Despesas" — com `showValor` ligado, posiciona os totais de Receitas/Despesas nas colunas "Total"/"Lançamentos" do cabeçalho, o que desalinha o significado das colunas.
  3. **Validação funcional em navegador (Chrome headless)** do fluxo do quiz/A SHA-256 da Aula 07 (gabarito `GABARITO_L7 = [1, 2, 3, 0, 1]`, nota mínima 7,0), conforme padrão das Aulas 01-06.
- **Documentação Atualizada:** [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md) · [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) (status Aula 07 → "🟡 Em implementação (Fase 3)").
- **Pendência / Próxima sessão:** aplicar os ajustes acima (Pivot Lab), validar o quiz/SHA-256 em Chrome headless e só então marcar a Aula 07 como concluída; depois seguir para as Aulas 08 a 13 do Excel.

---

### 📝 Registro Cronológico #31 — Correção do Alinhamento de Imagens da Aula 07 (Imagens Quebradas/Invertidas)
- **Data:** 06/09/2026
- **Problema:** As imagens da Aula 07 estavam **quebradas/invertidas**. A pasta `assets/img/excel/a7/` continha apenas arquivos com nomes descritivos (`Imagem 01 Inserir Tabela Dinâmica .png`, etc.), enquanto `modules/excel/index.html` e `assets/js/pdf-lessons.js` referenciam `image1..16.png`. Além disso, os tópicos 1–3 (planilha base, funções de data e validação) exibiam screenshots da Tabela Dinâmica sem relação com o conteúdo — o material-fonte (`AulaOrigem/.../ExcelContasPessoaiscomtabeladinmica.html`) não possui capturas para essas etapas (o módulo já os ilustra com réplicas HTML estilo Excel).
- **Solução aplicada:**
  1. **Renomeação canônica por MD5**: os 16 arquivos descritivos de `assets/img/excel/a7/` foram renomeados para `image1..16.png`, mapeando cada `imageN` à mesma captura do remap canônico verificado em `AulaOrigem/.../images/` (conteúdo idêntico).
  2. **`modules/excel/index.html`**: removidas as imagens dos tópicos 1–3; tópicos 4–9 recompostos com as 16 imagens na ordem correta do passo a passo e `alt` descritivos coerentes (Etapa 6: `image12`, `image9`, `image4`, `image6`, `image11`; Etapa 7: `image2`, `image16`, `image7` — `image16` movida da Etapa 6; Etapa 8: `image8`, `image5`, `image13`; Etapa 9: `image10`, `image15`, `image14`).
  3. **`assets/js/pdf-lessons.js`**: seções 7.1–7.3 sem referência de imagem; refs da lição 7 alinhadas ao mesmo mapeamento (16 nomes canônicos, 1× cada).
  4. **`Docs/SPEC-EXCEL-AULA-07.md`**: seção 4 corrigida (Etapas 1–3 sem imagem; Etapas 6–7 com o novo mapeamento) + Anexo B documentando o remap canônico `imageN → legenda`.
- **Arquivos modificados:** `assets/img/excel/a7/*` (16 renames) · `modules/excel/index.html` · `assets/js/pdf-lessons.js` · `Docs/SPEC-EXCEL-AULA-07.md` · `tests/validate_aula07_imagens.py` (novo, teste de regressão).
- **Testes executados:** `python3 tests/validate_aula07_imagens.py` (regressão verde: módulo e PDF referenciam `image1..16` 1× cada, todas presentes, fases 1–3 sem imagens); `node --check assets/js/pdf-lessons.js` e check do bloco script inline de `modules/excel/index.html` (sintaxe OK).
- **Pendências inalteradas:** ajuste do "Total Geral" no Pivot Lab e da linha "Receitas vs Despesas"; validação do quiz/SHA-256 em navegador headless (Anexo A, itens 1–3).

---

### 📝 Registro Cronológico #32 — Especificação SDD (Fase 0-2) da Aula 08 (Controle de Vendas com a Função SOMASE)
- **Data:** 06/09/2026
- **Escopo:** Execução das Fases 0-2 (Planejar → Validar → Especificar) da Aula 08 do Módulo Excel, seguindo o material real `AulaOrigem/excel/Aula-8-Controle de Vendas com a função somase/Aula8ControledeVendascomafunosomase.html` (46 KB) e as **5 imagens** `images/image1..5.png` (mapeadas por **posição no HTML** — o material-fonte não possui `alt`). Segue o padrão estrutural dos SDDs das Aulas 01 a 07.
- **Especificado em [Docs/SPEC-EXCEL-AULA-08.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-08.md):**
  1. **Visão Geral e 12 Objetivos de Aprendizagem** — sistema de Controle de Vendas com tabelas de apoio (Produtos/Vendedores), **Validação de Dados** (lista suspensa via tabelas de apoio e lista fixa `Informática;Móveis`), **Estilos de Tabela** + nome `TabelaVendas`, **colunas calculadas** (Total `=[@Quantidade]*[@[Vlr. Unit. (R$)]]`, Comissão 5% `=[@Total]*0,05`, Status `=SE([@Total]>=1000;"Alta";"Média")`), **campo de consulta** `=SOMASE(TabelaVendas[Vendedor];B2;TabelaVendas[Total])`, classificação/filtragem, **Linha de Totais** (Soma/Contagem) e **Tabela Dinâmica** (por Vendedor; por Categoria e Produto com COLUNAS: Vendedor) + Segmentação de Dados.
  2. **Core Topics — 9 Etapas Didáticas** (passo a passo do material fonte), mapeando as 5 imagens de `assets/img/excel/a8/` (mapeamento posicional).
  3. **Senha Secreta**: `xh008` (oculta).
  4. **Novo Simulador "Sales Lab"** — grade `TabelaVendas` editável, listas suspensas alimentadas pelas tabelas de apoio, colunas calculadas ao vivo, campo de consulta SOMASE (`B2 → C2`), classificação/filtros, Linha de Totais e Tabela Dinâmica consolidada; funções `renderSalesGrid()`, `updateCalculatedColumns()`, `applyVendedorFilter()`, `runSomaseQuery()`, `sortSalesDesc()`, `toggleTotalsRow()`, `renderSalesPivot()`.
  5. **Quiz de 5 Questões** com gabarito oficial `GABARITO_L8 = [0, 1, 2, 3, 0]` (SOMASE com referência à célula `B2`; Validação de Dados com tabela de apoio; Inserir → Tabela / `Ctrl+T`; `[@Quantidade]*[@[Vlr. Unit. (R$)]]`; Linha de Totais → Contagem), nota mínima 7,0/10,0 e validação SHA-256.
  6. **Plano de Implementação (Fase 3 Futura)** — Hub `xh008`, tela `#screen-lesson-8`, Sales Lab, quiz e bloco PDF `lessonNum: 8` em `assets/js/pdf-lessons.js`.
  7. **⚠️ Discrepância auditada**: o catálogo master cita `SOMASES/CONT.SE/CONT.SES/MÉDIASE`, mas o material-fonte cobre **somente SOMASE** — o SDD espelha o fonte (decisão confirmada pelo professor); as demais funções ficam registradas como **extensão futura**.
- **Documentação Atualizada:**
  - [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) (status Aula 08 → "📝 Especificada (Fase 0-2 concluída)")
  - [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
- **Pendência:** Validação da presente especificação pelo professor (inclui conferência visual do mapeamento posicional das 5 imagens na Fase 3 — fonte sem `alt`); execução da Fase 3 (Implementar) da Aula 08; continuação das Aulas 09 a 13 do Excel.

### 📝 Registro Cronológico #33 — Implementação (Fase 3) e Validação da Aula 08 (Controle de Vendas com a Função SOMASE — Sales Lab + PDF)
- **Data:** 06/09/2026
- **Escopo:** Execução da Fase 3 (Implementar) da Aula 08 do Módulo Excel, seguindo o SDD validado `Docs/SPEC-EXCEL-AULA-08.md` (senha `xh008`, gabarito `GABARITO_L8 = [0, 1, 2, 3, 0]`) e o padrão estrutural das Aulas 01 a 07, **concluída e validada em navegador**.
- **Implementado em `modules/excel/index.html`:**
  1. **Card do Hub** da Aula 08 liberado (`🔓 Aula Liberada (Senha xh008)`, `promptLessonPassword(8, 'Controle de Vendas com SOMASE')`, `badge-lesson-8`).
  2. **Tela `#screen-lesson-8`**: cabeçalho de ações (Voltar, Imprimir, `downloadLessonPDF('excel', 8)`), trilha gamificada (`gamify-label-8/`fill-8/`badge-box-8`), 10 abas de tópicos (`tab-l8-1..10`), 9 fases (`l8-phase-1..9`), **5 imagens de `assets/img/excel/a8/`** (image1→Etapa 1, image3→Etapa 2, image2→Etapa 3, image5→Etapa 6, image4→Etapa 9 — mapeamento posicional do fonte), **Sales Lab** embutido na Etapa 6 e painel de Exercício (`l8-fixation`).
  3. **Simulador "Sales Lab"** (Etapa 6): 16 linhas de vendas (05/12→20/12/2024) em `SALES_DATA`, listas suspensas alimentadas pelas tabelas de apoio `SALES_PROD_CAT`/`SALES_VENDEDORES`, colunas calculadas Total/Comissão 5%/Status; campo de consulta `=SOMASE(TabelaVendas[Vendedor];B2;TabelaVendas[Total])` ao vivo (`#sl-b2-select`→`#sl-c2-result`); classificação decrescente (6 maiores), filtros `#sl-filter-cat` (todas/Informática/Móveis) e Total>500 (`#sl-min-total`), Linha de Totais Soma/Contagem (`#sl-totals`), Tabela Dinâmica com seleção de linha (Vendedor/Categoria) e Segmentações `#sl-slicer-vendedor`/`#sl-slicer-categoria` — funções `renderSalesGrid()`, `updateSalesField()`, `applyVendedorFilter()`, `runSomaseQuery()`, `sortSalesDesc()`, `toggleTotalsRow()`, `renderSalesPivot()`, `initSalesLab()`. Totais conferidos: Geral **25.285,00** / Qtd **51** / Comissão **1.264,25**; por vendedor João Silva **12.140**, Ana Lima **3.820**, Maria Santos **3.725**, Pedro Costa **5.600**.
  4. **Registros de script**: `readStatus[8]` (9 tópicos), `userAnswers[8]` (5 questões), chave `8` em `lessonTitleMap`, `lessonData[8]` (`moduleId: "excel-aula-08"`, `reportKey: "l8ReportData"`, `shortTitle: "Aula 08"`), `GABARITO_L8`, `QUESTOES_L8` e senha `PASSWORDS[8] = "xh008"`.
  5. **Apostila PDF** (`assets/js/pdf-lessons.js`): 10 seções `lessonNum: 8` (8.1 Tabela de Produtos; 8.2 Tabela de Vendedores; 8.3 Dados de Vendas + Validação; 8.4 Estilos de Tabela + nome `TabelaVendas`; 8.5 Fórmulas Calculadas; 8.6 SOMASE; 8.7 Classificar & Filtrar; 8.8 Linha de Totais; 8.9 Tabela Dinâmica; 8.10 Exercício) + `moduleLessonTitles.excel[8]`; corrigida vírgula faltante após o bloco 7.9.
- **Validação (Chrome headless + playwright-core):** **28/28 checks verdes** — desbloqueio por senha; navegação de tópicos 1–9; gamificação 60% (9/9 lidos) → 100% (quiz aprovado); `SOMASE` (12.140 / 3.820 / 3.725 / 5.600); grade 16 linhas; Linha de Totais (25.285,00 / Contagem 16 / 1.264,25); classificação decrescente (7.000 → 3.500); filtro Móveis (4 linhas / soma 5.190); Tabela Dinâmica (Total Geral 25.285,00; vista Categoria; Segmentação Ana → 1.800,00); quiz nota 10,0 com assinatura SHA-256 e badge "🏆 Aprovado(a)". `node --check` do script inline (introduzido e fechado com `<script type="text/plain">` try/catch) e de `assets/js/pdf-lessons.js` OK; único erro de console = favicon 404 (pré-existente).
- **Documentação Atualizada:** [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md) · [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md) · [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md) · [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) (status Aula 08 → "✅ Implementada e validada (Fase 3 concluída)").
- **Pendência / Próxima sessão:** aplicar os ajustes pendentes da Aula 07 (Pivot Lab) e validá-la em Chrome headless; depois seguir para as Aulas 09 a 13 do Excel.
