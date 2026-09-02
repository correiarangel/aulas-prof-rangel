# 🏛️ SPEC-001 — Especificação Arquitetural e Regras Globais do Portal
### Portal de Informática Básica | Prof. Marcos Rangel — WR Capacitação Profissional

---

## 🎯 1. Visão Geral e Pilares da Aplicação

O **Portal Didático de Informática Básica** é uma solução educacional desenvolvida em **HTML5 Semântico, CSS3 Vanilla e JavaScript ES6+ (100% Estático)**, projetada para execução direta no **GitHub Pages** com alta velocidade, compatibilidade cross-browser e zero dependência de frameworks compilados ou servidores backend.

### 🌟 Pilares Pedagógicos & Ergonômicos:
1. **Design Senior-Friendly & Alta Legibilidade**:
   - Tipografia limpa (`Inter`, `Fraunces`, `JetBrains Mono`).
   - Leitura confortável (tamanhos de fonte entre 18px e 24px para texto corrido e 28px+ para títulos).
   - Alvos de toque táteis grandes (mínimo de **56px** de altura/largura em cartões e botões).
2. **Navegação por Tópicos Interativos (Sem Rolagem Infinita)**:
   - As lições são divididas em tópicos dinâmicos com navegação passo a passo (`Anterior` / `Próximo`).
3. **Segurança Presencial de Sala de Aula**:
   - Controle de acesso por senhas secretas individuais por aula/módulo.
   - **Regra de Ouro**: Nenhuma senha ou dica é exposta visualmente na interface (modal customizado `#password-modal`).
4. **Motor de Exercícios e Assinatura Criptográfica**:
   - `quiz-engine.js` calcula resultados e emite hash criptográfico **SHA-256** para combate à fraude.
   - Suporte a exportação de comprovantes (TXT, PDF, WhatsApp e E-mail).

---

## 🗺️ 2. Arquitetura dos 5 Módulos Didáticos

| Módulo | Nome do Módulo | Estrutura de Arquivos | Documento SDD Mestre | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Módulo 1** | Sistema Operacional Windows | `modules/windows/index.html` | `Docs/SPEC-AULA-08-WINDOWS.md` | Catálogo de 12 Aulas (Aula 8 Liberada) |
| **Módulo 2** | Microsoft Word | `modules/word/index.html` | `Docs/SPEC-WORD-MASTER.md` *(Futuro)* | Planejado |
| **Módulo 3** | Microsoft Excel | `modules/excel/index.html` | [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) | Catálogo de 13 Aulas (Aula 01 Especificada) |
| **Módulo 4** | Microsoft PowerPoint | `modules/powerpoint/index.html` | `Docs/SPEC-POWERPOINT-MASTER.md` *(Futuro)* | Planejado |
| **Módulo 5** | Internet & Segurança | `modules/internet/index.html` & `prova-internet.html` | `Docs/SPEC-PROJECT-ARCHITECTURE.md` | 4 Aulas Operacionais (100% Concluído) |

---

## 🎨 3. Design System & Design Tokens Globais (WR Capacitação)

| Variável CSS | Hex / Valor | Função Pedagógica e Contraste |
| :--- | :--- | :--- |
| `--bg-brown` | `#120B06` | Fundo principal da aplicação (Dark Mode relaxante) |
| `--card-brown` | `#1E130B` | Containers de módulos e cartões laterais |
| `--paper-beige` | `#FFFDF9` | Cartão de leitura principal (Papel Didático) |
| `--amber` | `#EA580C` | Destaques primários, botões de ação e títulos |
| `--teal` | `#14B8A6` | Acentos secundários, acertos e caixas de dicas |
| `--excel-green` | `#16A34A` | Destaque verde temático do Módulo Excel |
| `--ink-dark` | `#1F160F` | Cor do texto de leitura (Contraste superior a 7:1) |
| `--ink-soft` | `#D9C3B0` | Cor de texto secundário e subtítulos de alto contraste |

---

## 🔒 4. Convenção Global de Autenticação e Senhas Secretas

| Módulo / Aula | Conteúdo Temático | Senha Secreta | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 1 / Aula 08** | Diagnóstico, Restauração e Mídia USB (Windows) | `wr0926` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 5 / Aula 01** | Introdução à Internet e Navegação Segura | `a001` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 5 / Aula 02** | Navegando na Internet & História do HTML | `b002` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 5 / Aula 03** | Dominando o Google & Produtividade na Nuvem | `c003` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 5 / Aula 04** | Avaliação Final do Módulo Internet | `d004` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 3 / Aulas 01 a 13** | Trilha Completa do Microsoft Excel | `xa001` a `xm013` | 🔒 Oculta (Acesso Restrito) |

---

## 📄 5. Regras de Interface e Exportação de PDF

1. **Posicionamento do Botão de Apostila PDF**: O botão `📑 Baixar Apostila Didática em PDF` fica visível no **início/topo do cartão da aula**, permitindo que o aluno faça o download do material didático estruturado antes de iniciar a leitura.
2. **Motor de PDF Dedicado (`assets/js/pdf-lessons.js`)**: Geração dinâmica de PDF por aula (`lessonNum`), encadeando texto e imagens acopladas com legenda em itálico.
3. **Impressão HTML Nativamente Limpa**: Suporte a `@media print` para impressão direta da página sem menus, botões ou componentes interativos.
4. **Certificados Solenes em Formato Horizontal (A4 Landscape)**: Para avaliações finais (como a Aula 04 do Módulo Internet), emissão de certificado em orientação paisagem com moldura diplomática dourada/terracota (`#D4AF37` / `#8E2C07`), carga horária (18h) e assinatura SHA-256.

---

## 📚 6. Fundamentação Acadêmica e Bibliografia Reconhecida

1. **Berners-Lee, T., Cailliau, R., Groff, J. F., & Pollermann, B. (1992)**. *World-Wide Web: The Information Universe*. Electronic Networking: Research, Applications and Policy, 2(1), 52-58.
2. **Brin, S., & Page, L. (1998)**. *The Anatomy of a Large-Scale Hypertextual Web Search Engine*. Computer Networks and ISDN Systems, 30(1-7), 107-117.
3. **Tanenbaum, A. S., & Wetherall, D. J. (2011)**. *Computer Networks* (5th ed.). Prentice Hall.
4. **Walkenbach, J. (2015)**. *Excel 2016 Bible*. John Wiley & Sons.
5. **W3C (World Wide Web Consortium)**. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.

---

## 📐 7. Modelo-Base Padronizado de Aula (Master Lesson Blueprint)

> **🏛️ REGRA DE OURO DA ARQUITETURA DE AULAS:** A estrutura desenvolvida e validada nos Módulos Windows, Internet e Excel (Aula 01) constitui o **MODELO-BASE PADRONIZADO (MASTER BLUEPRINT)** obrigatório para a construção de todas as aulas restantes do portal (Excel Aulas 02 a 13, Word, PowerPoint, etc.).

### 🧱 Componentes Mandatórios de Toda Aula:
1. **Topo de Navegação & Ações no Header**:
   - Botão `← Voltar ao Menu do Módulo`.
   - Botão `🖨️ Imprimir Aula Completa` (impressão HTML contínua via `@media print`).
   - Botão `📑 Baixar Apostila PDF` (download imediato via `pdf-lessons.js`).
2. **Trilha de Progresso Gamificada**:
   - Barra visual de leitura de 0% a 100% com indicador de status (`Em Andamento` / `Concluído`).
3. **Menu de Abas de Tópicos Didáticos (`topic-tabs-bar`)**:
   - Navegação rápida por tópicos (4 a 6 tópicos pedagógicos por aula) + Botão final destacado em tom âmbar para o `Exercício de 5 Perguntas 📝`.
4. **Estrutura Interna de Cada Tópico Didático**:
   - Título semântico `<h2>` com numeração clara (ex: `1.1`, `1.2`, `1.3`).
   - Texto corrido senior-friendly de alta legibilidade.
   - Caixas de destaques didáticos (Dicas em verde, Alertas em amarelo, Atalhos em `<kbd>`).
   - **Imagens Ilustrativas Capturadas da Interface Real**: Utilização obrigatória da classe CSS `.img-reduced` com bordas arredondadas, sombra suave, alt text e ajuste responsivo.
   - Trava pedagógica `◯ Marcar Tópico X como Lido` com cálculo automático do progresso.
   - Linha de navegação inferior (`← Voltar ao Tópico` / `Ir para Próximo Tópico →`).
5. **Simulador Interativo Dedicado / Prática Guiada**:
   - Componente interativo em HTML/CSS/JS (ex: *Grid Inspector* no Excel, *Caixas de Teste de Digitação*, *Simulador de Barra de Endereços*).
6. **Quiz de Fixação de 5 Questões & Motor Criptográfico**:
   - 5 questões de múltipla escolha (4 alternativas cada), com dica explicativa.
   - Campo para digitação do nome completo do aluno.
   - Nota mínima de aprovação **7,0 / 10,0** (4 acertos).
   - Validação e emissão de Hash SHA-256 no formato `WR-XXXX-XXXX`.
   - Botões de exportação do comprovante (TXT, PDF, WhatsApp e E-mail).
7. **Otimização de Impressão e Exportação**:
   - Regras `@media print` no CSS garantindo que as imagens não fiquem cortadas entre páginas (`page-break-inside: avoid; break-inside: avoid;`).
   - Registro das imagens no motor `pdf-lessons.js` para geração perfeita da Apostila em PDF.
