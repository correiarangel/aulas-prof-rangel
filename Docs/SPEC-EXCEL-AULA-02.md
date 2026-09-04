# 🏛️ SPEC-EXCEL-AULA-02 — Especificação Técnica e Pedagógica da Aula 02 (Excel)
### Módulo 3: Microsoft Excel | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai**: Herda regras de [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) e [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md).

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 02 do Módulo Excel** ensina as **Operações Básicas e Fórmulas Simples**. É o primeiro passo prático do aluno na criação de cálculos automáticos. O conteúdo foi extraído e consolidado do acervo original em `AulaOrigem/excel/` ([Aula 2 - Excel 2010_13_ Operações Básicas e Fórmulas Simples.md](file:///home/rangel/git-dev/aulas/AulaOrigem/excel/Aula%202%20-%20Excel%202010_13_%20Operações%20Básicas%20e%20Fórmulas%20Simples.md)).

### Objetivos de Aprendizagem:
1. Reconhecer e usar os **operadores matemáticos** de soma (`+`), subtração (`-`), multiplicação (`*`) e divisão (`/`).
2. Compreender que **toda fórmula inicia com o sinal de igual** (`=`).
3. Diferenciar **Referência Relativa** (`A1`, `B2`) de **Referência Absoluta** (`$A$1`, `$B$2`) e usar a tecla **F4** para alternar.
4. Utilizar a **Alça de Preenchimento** para arrastar números, datas e repetir fórmulas.
5. **Copiar fórmulas entre células** (Ctrl+C / Ctrl+V) e pela alça de preenchimento.
6. Aplicar fórmulas em **exercícios práticos** reais (loja, folha de pagamento, combustível, impostos, comissões, estoque e parcelas).

### Core Topics (6 Tópicos Didáticos):
1. **Operações Matemáticas Básicas**: Os 4 operadores (`+`, `-`, `*`, `/`), início de fórmula com `=`, e exemplo prático (A1=10, B1=5 → C1=`=A1+B1`=15).
2. **Fórmulas Simples & Controle de Gastos**: Criação de fórmula por digitação ou clique nas células (`=B2+B3+B4`), exemplo de controle de supermercado.
3. **Referência Relativa e Absoluta**: Diferença entre `A1` e `$A$1`, uso da tecla `F4`, e exemplo de cálculo de desconto fixo (`=B2*(1-$C$2)`).
4. **Alça de Preenchimento Automático**: Como arrastar a alça (quadradinho do canto) para sequências de números, datas e dias da semana.
5. **Copiar Fórmulas Entre Células**: Método Ctrl+C/Ctrl+V e método por alça de preenchimento em tabela de vendas.
6. **Exercícios Práticos com Fórmulas**: 7 exercícios guiados (Loja de Roupas, Folha de Pagamento INSS, Controle de Combustível, Calculadora de Impostos, Comissões de Vendas, Controle de Estoque com Alerta e Calculadora de Parcelas).

> **📌 Regra de Design (compatível com a Aula 01)**: A Aula 02 segue o mesmo esqueleto visual da Aula 01 (Cor Verde Excel, cartões de leitura, abas de tópicos, trilha de progresso, simulador interativo e quiz de 5 questões), garantindo coerência pedagógica e técnica em todo o módulo.

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 3 / Aula 02** | Operações Básicas & Fórmulas Simples | `xb002` | 🔒 Oculta (Acesso Restrito) |

---

## 🖥️ 3. Simulador Interativo da Aula 02 (Fórmula Builder)

> **🛠️ Novo componente dedicado**: Diferente do *Grid Inspector* da Aula 01 (foco em tipos de dados), a Aula 02 apresenta o **Simulador de Fórmulas — "Fórmula Builder"**, que calcula em tempo real para ensinar os operadores e as referências.

### 3.1 Requisitos Funcionais do Simulador
1. **Paleta de Valores (Grade de Entrada)**:
   - Grade demonstrativa com células `A1 = 10`, `B1 = 5` (valores fixos).
   - Caixas de entrada editáveis para que o aluno altere os valores e veja os resultados mudarem em tempo real.

2. **Barra de Fórmula Interativa**:
   - Campo de digitação onde o aluno monta uma fórmula (ex: `=A1+B1`, `=A1*B1`, `=A1&"-"&B1`).
   - Botão **Calcular** que resolve a expressão e exibe o resultado.
   - Validação de erro amigável para expressões inválidas (mensagem em caixa amarela de alerta, sem quebrar a UI).

3. **Painel de Resultados ao Vivo**:
   - Exibição simultânea dos 4 operadores: Soma (`=A1+B1`), Subtração (`=A1-B1`), Multiplicação (`=A1*B1`) e Divisão (`=A1/B1`).
   - Destaque visual do resultado calculado (fonte verde Excel, negrito).

4. **Modo Referência Absoluta (Demonstrativo)**:
   - Tabela demonstrativa do exemplo de desconto: `=B2*(1-$C$2)` replicada nas linhas 3, 4 e 5, mostrando que `$C$2` permanece fixo enquanto `B2`, `B3`, `B4` mudam.
   - Label explicativo "Referência Absoluta ($ fixa)".

5. **Controles de Acessibilidade**:
   - Botões e campos com área de toque ≥ 56px.
   - Contraste WCAG AA (texto `#1F2937` sobre fundo `#FFFFFF`).
   - Fonte `JetBrains Mono` para fórmulas e `Inter` para textos.

### 3.2 Mockup Lógico (Estrutura HTML/CSS/JS)
```text
[Simulador Fórmula Builder]
┌─────────────────────────────────────────────┐
│ 🖥️ Simulador Interativo — Fórmula Builder   │
│  A1: [10]   B1: [5]   (valores editáveis)   │
├─────────────────────────────────────────────┤
│ Barra de Fórmula: [ =A1+B1 ] [Calcular ↵]   │
│ Resultado: 15                               │
├─────────────────────────────────────────────┤
│ Soma   =A1+B1  →  15   │  Multiplic.  =A1*B1 → 50 │
│ Subtr. =A1-B1  →  5    │  Divisão     =A1/B1 → 2  │
├─────────────────────────────────────────────┤
│ 📌 Referência Absoluta: =B2*(1-$C$2)        │
│ (replicada nas linhas 3,4,5 — $C$2 fixa)    │
└─────────────────────────────────────────────┘
```

---

## 📝 4. Especificação do Quiz de Fixação (5 Questões)

> **Regras**: 5 questões de múltipla escolha (4 alternativas), nota mínima de aprovação **7,0 / 10,0** (≥ 4 acertos), validação SHA-256 (`WR-XXXX-XXXX`) e exportação TXT/PDF/WhatsApp/E-mail. Segue o padrão da Aula 01.

1. **Questão 1 (Início de Fórmula)**:
   - *Pergunta*: Com qual sinal OBRIGATÓRIO toda fórmula ou função deve começar no Microsoft Excel?
   - *Alternativas*:
     - a) Símbolo de mais (+)
     - b) Símbolo de igual (=) [Correta]
     - c) Símbolo de asterisco (*)
     - d) Símbolo de hashtag (#)
   - *Dica*: Sem ele, o Excel trata o conteúdo como texto simples e não faz o cálculo.

2. **Questão 2 (Operadores Matemáticos)**:
   - *Pergunta*: Qual símbolo representa a operação de MULTIPLICAÇÃO em uma fórmula do Excel?
   - *Alternativas*:
     - a) O sinal de vezes (x)
     - b) O ponto final (.)
     - c) O asterisco (*) [Correta]
     - d) O sinal de elevado (^)
   - *Dica*: No Excel não usamos o "x" da calculadora comum; usamos o asterisco do teclado.

3. **Questão 3 (Referência Absoluta)**:
   - *Pergunta*: Qual das opções abaixo é uma referência ABSOLUTA (fixa) no Excel?
   - *Alternativas*:
     - a) A1
     - b) $A$1 [Correta]
     - c) B2
     - d) C3
   - *Dica*: O cifrão ($) antes da letra e antes do número trava a referência para que não mude ao copiar.

4. **Questão 4 (Alça de Preenchimento)**:
   - *Pergunta*: Qual é o pequeno quadradinho no canto inferior direito de uma célula selecionada que permite arrastar e preencher sequências ou repetir fórmulas?
   - *Alternativas*:
     - a) O botão Salvar
     - b) A Alça de Preenchimento [Correta]
     - c) A Barra de Fórmulas
     - d) O Menu Iniciar
   - *Dica*: Ao posicionar o mouse sobre ele, o cursor vira uma cruz preta (+) e você pode arrastar.

5. **Questão 5 (Tecla F4)**:
   - *Pergunta*: Qual tecla de atalho do teclado transforma uma referência relativa (ex: A1) em uma referência absoluta (ex: $A$1) dentro da fórmula?
   - *Alternativas*:
     - a) F2
     - b) F4 [Correta]
     - c) F5
     - d) F7
   - *Dica*: Pressione uma vez para `$A$1` e novamente para variar entre `$A1` e `A$1`.

### 4.1 Gabarito Oficial (Índices 0-based e 1-based)
| Questão | Resposta Correta | Índice (0-based) | Descrição |
| :--- | :--- | :--- | :--- |
| 1 | B — Símbolo de igual (=) | `1` | Toda fórmula inicia com `=` |
| 2 | C — O asterisco (*) | `2` | Multiplicação em fórmulas |
| 3 | B — $A$1 | `1` | Referência absoluta fixa |
| 4 | B — A Alça de Preenchimento | `1` | Arrastar para preencher |
| 5 | B — F4 | `1` | Alterna relativa/absoluta |

> **Gabarito mapeado em array JS**: `const GABARITO_L2 = [1, 2, 1, 1, 1];`

---

## 🎨 5. Ergonomia e Regras de Interface

- **Botão de PDF na Barra Superior / Início da Aula**: Botão `📑 Baixar Apostila Didática em PDF` no topo, chamando `window.PDFLessons.downloadLessonPDF('excel', 2)`.
- **Formatação de Atalhos de Teclado**: Uso da tag `<kbd>` para `F4`, `Ctrl+C`, `Ctrl+V`, `Enter`, etc.
- **Tabelas de Fórmulas em Código**: Fórmulas exibidas em fonte monoespaçada (`JetBrains Mono`) com fundo claro, exatamente como no material-fonte (`=B2*C2`, `=B2*(1-$C$2)`).
- **Nota Mínima do Quiz**: **7,0 / 10,0** (acerto de ao menos 4 de 5 questões) para aprovação e liberação do comprovante.
- **Validação Anti-Fraude**: Geração de Hash SHA-256 e botões de envio via WhatsApp (`19 99130-6907`) e E-mail (`okcomputer.use.linux@gmail.com`).
- **Otimização de Impressão**: Regras `@media print` com `page-break-inside: avoid; break-inside: avoid;` para que as tabelas de fórmulas e o simulador não fiquem cortados entre páginas.

---

## 🗂️ 6. Plano de Implementação (Fase 3 — Futura)

> **Nota**: Esta seção é referência para a etapa de codificação (Fase 3). A validação da presente especificação é pré-requisito antes de qualquer alteração em `modules/excel/index.html`.

1. **Hub (`modules/excel/index.html`)**:
   - Alterar a AULA 02 de `🔒 Em Construção` para `🔓 Aula Liberada (Senha xb002)`.
   - Vincular o card ao `promptLessonPassword(2, 'Operações Básicas & Fórmulas Simples')`.
2. **Tela da Aula 02** (`#screen-lesson-2`):
   - Clonar a estrutura do `#screen-lesson-1` (header, gamify progress, cartão de leitura, abas `topic-tabs-bar`, painel de fixação).
   - Implementar os 6 tópicos didáticos conforme a Seção 1.
   - Renomear IDs: `l2-phase-X`, `tab-l2-X`, `btn-read-l2-X`, `gamify-label-2`, `gamify-fill-2`, `gamify-badge-box-2`.
3. **Simulador Fórmula Builder**: Implementar conforme a Seção 3 com funções `calcFormula()`, `updateFormulaResults()`.
4. **Quiz**: Adicionar `GABARITO_L2`, `QUESTOES_L2`, funções `selectFixOption(2, ...)` e `calcFixation(2)` reutilizando o motor `quiz-engine.js`.
5. **Gerador de PDF (`assets/js/pdf-lessons.js`)**:
   - Adicionar o bloco do Excel Aula 02 (`lessonNum: 2`) com o conteúdo das 6 seções e mapas dos exercícios práticos.
6. **Tríade de Documentação**: Atualizar `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` (Registro Cronológico) após a implementação.

---

## 📚 7. Referências Didáticas e Acadêmicas

1. **Walkenbach, J. (2015)**. *Excel 2016 Bible*. John Wiley & Sons.
2. **Alexander, M., & Kusleika, R. (2018)**. *Access 2019 Bible / Excel Analysis*. Wiley.
3. **Microsoft Learn (2024)**. *Documentação Oficial de Fórmulas e Funções do Microsoft Excel*. Microsoft Press.
4. **W3C (2023)**. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.
