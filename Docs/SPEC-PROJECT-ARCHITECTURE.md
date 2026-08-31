# 🏛️ SPEC-001 — Especificação Arquitetural e Regras do Portal
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
   - Controle de acesso por senhas secretas (`a001`, `b002`, `c003`, `d004`).
   - **Regra de Ouro**: Nenhuma senha ou dica é exposta visualmente na interface.
4. **Motor de Exercícios e Assinatura Criptográfica**:
   - `quiz-engine.js` calcula resultados e emite hash criptográfico **SHA-256** para combate à fraude.
   - Suporte a exportação de comprovantes (TXT, PDF, WhatsApp e E-mail).

---

## 🎨 2. Design System & Design Tokens (WR Capacitação)

| Variável CSS | Hex / Valor | Função Pedagógica e Contraste |
| :--- | :--- | :--- |
| `--bg-brown` | `#120B06` | Fundo principal da aplicação (Dark Mode relaxante) |
| `--card-brown` | `#1E130B` | Containers de módulos e cartões laterais |
| `--paper-beige` | `#FFFDF9` | Cartão de leitura principal (Papel Didático) |
| `--amber` | `#EA580C` | Destaques primários, botões de ação e títulos |
| `--teal` | `#14B8A6` | Acentos secundários, acertos e caixas de dicas |
| `--ink-dark` | `#1F160F` | Cor do texto de leitura (Contraste superior a 7:1) |

---

## 🔒 3. Matriz de Autenticação e Senhas Secretas

| Módulo / Aula | Conteúdo Temático | Senha Secreta | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 5 / Aula 01** | Introdução à Internet e Navegação Segura | `a001` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 5 / Aula 02** | Navegando na Internet & História do HTML | `b002` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 5 / Aula 03** | Dominando o Google & Produtividade na Nuvem | `c003` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 5 / Aula 04** | Avaliação Final do Módulo Internet | `d004` | 🔒 Oculta (Acesso Restrito) |

---

## 📄 4. Regra Estrita dos Botões de Exportação (PDF / Comprovante)

> **🚨 REGRA INEGOCIÁVEL DE UI/UX**:
> 1. **Proibição no Hub Inicial e Cabeçalhos**: O botão `📑 Baixar Aula em PDF` (ou qualquer variação de download de apostila) **NUNCA** deve ser exibido no Hub Inicial de Aulas, no Menu de Módulos ou na barra superior de leitura.
> 2. **Exibição Exclusiva na Conclusão/Finalização**: O botão de download em PDF DEVE figurar **EXCLUSIVAMENTE** no painel final de resultado de conclusão do exercício de fixação/avaliação, ao lado dos botões de Comprovante TXT, WhatsApp e E-mail com a validação criptográfica SHA-256.
> 3. **Conteúdo do PDF**: O PDF gerado pelo `PDFLessons.downloadLessonPDF()` DEVE conter a apostila didática completa, estruturada e abrangente de todo o módulo/aula, incluindo fundamentação teórica, atividades práticas, dicas de segurança, tabelas de atalhos e referências acadêmicas.

---

## 📚 5. Fundamentação Acadêmica e Bibliografia Reconhecida

A fundamentação teórica e técnica deste portal baseia-se em literatura científica de valor acadêmico reconhecido:

1. **Berners-Lee, T., Cailliau, R., Groff, J. F., & Pollermann, B. (1992)**. *World-Wide Web: The Information Universe*. Electronic Networking: Research, Applications and Policy, 2(1), 52-58.
2. **Brin, S., & Page, L. (1998)**. *The Anatomy of a Large-Scale Hypertextual Web Search Engine*. Computer Networks and ISDN Systems, 30(1-7), 107-117.
3. **Tanenbaum, A. S., & Wetherall, D. J. (2011)**. *Computer Networks* (5th ed.). Prentice Hall.
4. **Stallings, W. (2018)**. *Data and Computer Communications* (10th ed.). Pearson.
5. **W3C (World Wide Web Consortium)**. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.
