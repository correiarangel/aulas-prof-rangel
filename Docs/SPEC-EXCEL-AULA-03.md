# 🏛️ SPEC-EXCEL-AULA-03 — Especificação Técnica e Pedagógica da Aula 03 (Excel)
### Módulo 3: Microsoft Excel | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai**: Herda regras de [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) e [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md).

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 03 do Módulo Excel** apresenta as **Funções de Cálculo Essenciais** — `SOMA`, `MÉDIA`, `MÁXIMO`, `MÍNIMO`, `CONT.VALORES` e `CONT.NÚM` — aplicadas em exercícios práticos reais. O conteúdo foi extraído e consolidado do acervo original em `AulaOrigem/excel/` ([Aula-3-Excel_Exercicios_Praticos.html](file:///home/rangel/git-dev/aulas/AulaOrigem/excel/Aula-3-Excel_Exercicios_Praticos.html)).

> **📌 Nota de Curadoria**: O título original do catálogo ("Exercícios Práticos & Formatação") foi realinhado ao conteúdo real do material fonte, que foca em funções de cálculo (não em formatação). Ver atualização na [Seção 6](#-6-atualizacao-do-catalogo-master).

### Objetivos de Aprendizagem:
1. Utilizar a função **`SOMA()`** para somar intervalos de células e colunas (`=SOMA(B2:B7)`, `=SOMA(B2:D7)`).
2. Aplicar a função **`MÉDIA()`** para calcular médias mensais e por vendedor (`=MÉDIA(B3:D3)`).
3. Encontrar o maior e o menor valor de um intervalo com **`MÁXIMO()`** e **`MÍNIMO()`** (`=MÁXIMO(B2:D7)`, `=MÍNIMO(B2:D7)`).
4. Contar células preenchidas com **`CONT.VALORES()`** e apenas células numéricas com **`CONT.NÚM()`**.
5. Compreender e diferenciar os objetivos de cada função contadora (`CONT.NÚM` vs `CONT.VALORES`).
6. **Combinar funções** em planilhas reais (custos, estoque e vendas) arrastando a Alça de Preenchimento.

### Core Topics (4 Exercícios Didáticos):
1. **Planilha de Custos**: `SOMA()`, `MÉDIA()`, `MÁXIMO()` e `MÍNIMO()` para analisar custos mensais de uma empresa (trimestre).
2. **Controle de Estoque**: Cálculo do Estoque Final (`=B2+C2-D2`), totais, maiores/menores estoques e `CONT.VALORES()` para contar produtos.
3. **Relatório de Vendas**: Relatório semestral com `SOMA()`, `MÉDIA()`, `MÁXIMO()` e `MÍNIMO()` por mês/vendedor.
4. **CONT.VALORES() vs CONT.NÚM()**: Distinção entre contar células preenchidas (texto+número+data) e contar apenas valores numéricos.

> **📌 Regra de Design (compatível com as Aulas 01 e 02)**: A Aula 03 segue o mesmo esqueleto visual (Cor Verde Excel, cartões de leitura, abas de tópicos, trilha de progresso, simulador interativo e quiz de 5 questões), garantindo coerência pedagógica e técnica em todo o módulo.

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 3 / Aula 03** | Funções de Cálculo: SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM | `xc003` | 🔒 Oculta (Acesso Restrito) |

---

## 🖥️ 3. Simulador Interativo da Aula 03 (Function Lab)

> **🛠️ Novo componente dedicado**: Diferente do *Grid Inspector* (Aula 01) e do *Fórmula Builder* (Aula 02), a Aula 03 apresenta o **Lab de Funções — "Function Lab"**, que demonstra ao vivo as principais funções de cálculo e contagem.

### 3.1 Requisitos Funcionais do Simulador
1. **Paleta de Valores (Grade de Entrada)**:
   - Grade demonstrativa com os dados do **Exercício 1 (Planilha de Custos)**: categorias (Aluguel, Energia, Água, Internet, Salários, Material) × meses (Jan/Fev/Mar).
   - Células editáveis para que o aluno altere valores e veja os resultados recalcularem em tempo real.

2. **Barra de Função Interativa**:
   - Campo de digitação para montar uma função completo (ex: `=SOMA(B2:B7)`, `=MÉDIA(B3:D3)`, `=MÁXIMO(B2:D7)`).
   - Botão **Calcular** que resolve e exibe o resultado.
   - Validação de erro amigável para expressões inválidas (alerta em caixa amarela, sem quebrar a UI).

3. **Painel de Resultados ao Vivo**:
   - Exibição simultânea das 6 funções sobre os mesmos dados:
     - Soma de Janeiro: `=SOMA(B2:B7)`
     - Média de Energia: `=MÉDIA(B3:D3)`
     - Maior Custo: `=MÁXIMO(B2:D7)`
     - Menor Custo: `=MÍNIMO(B2:D7)`
   - Destaque visual do resultado (fonte verde Excel, negrito).

4. **Modo Contadoras (CONT.NÚM vs CONT.VALORES)**:
   - Demonstração didática da tabela do Exercício 4 (Funcionários/Código/Meta).
   - Botões/abas alternando entre `CONT.NÚM(B2:B8)` (conta números) e `CONT.VALORES(A2:A8)` (conta preenchidos).
   - Label explicativo da diferença conceitual.

5. **Controles de Acessibilidade**:
   - Botões e campos com área de toque ≥ 56px.
   - Contraste WCAG AA (texto `#1F2937` sobre fundo `#FFFFFF`).
   - Fonte `JetBrains Mono` para funções e `Inter` para textos.

### 3.2 Mockup Lógico (Estrutura HTML/CSS/JS)
```text
[Simulador Function Lab]
┌────────────────────────────────────────────────┐
│ 🖥️ Lab de Funções — Aula 03                    │
│  Categoria  | Jan | Fev | Mar                   │
│  Aluguel    | 2500| 2500| 2500   (editáveis)    │
│  Energia    | 380 | 410 | 395                   │
│  ...                                            │
│ Barra de Função: [ =SOMA(B2:B7) ] [Calcular ↵]  │
├────────────────────────────────────────────────┤
│ SOMA Jan     =SOMA(B2:B7)      → R$ 11.550      │
│ MÉDIA Energia=MÉDIA(B3:D3)     → R$ 395,00      │
│ MÁXIMO       =MÁXIMO(B2:D7)    → R$ 8.500       │
│ MÍNIMO       =MÍNIMO(B2:D7)    → R$ 110,00      │
├────────────────────────────────────────────────┤
│ 📌 Contadoras:                                  │
│  CONT.NÚM(B2:B8)  → conta só números (cód. 6)  │
│  CONT.VALORES(A2:A8) → conta preenchidos (7)   │
└────────────────────────────────────────────────┘
```

---

## 📚 4. Especificação dos Exercícios Práticos (material fonte real)

> Os 4 exercícios abaixo reproduzem fielmente o conteúdo do `Aula-3-Excel_Exercicios_Praticos.html`.

### 🟢 Exercício 1 — Planilha de Custos
- **Objetivo**: Usar `SOMA()`, `MÉDIA()`, `MÁXIMO()` e `MÍNIMO()` para analisar os custos mensais de uma empresa (trimestre).
- **Cenário**: A empresa ABC precisa controlar seus custos fixos e variáveis durante o primeiro trimestre.
- **Estrutura da Tabela** (Colunas: Categoria | Jan | Fev | Mar | TOTAL):
  - Aluguel (B2:D2), Energia Elétrica (B3:D3), Água (B4:D4), Internet (B5:D5), Salários (B6:D6), Material Escrit. (B7:D7).
  - **TOTAL por linha**: `=SOMA(B2:D2)` ... `=SOMA(B7:D7)`.
  - **TOTAL MENSAL por coluna**: `=SOMA(B2:B7)`, `=SOMA(C2:C7)`, `=SOMA(D2:D7)`, `=SOMA(E2:E7)`.
  - **Maior Custo Mensal**: `=MÁXIMO(B2:D7)` — **Menor Custo**: `=MÍNIMO(B2:D7)` — **Média Geral**: `MÉDIA`.
- **Questões guiadas**:
  1. Total de custos de Janeiro → `=SOMA(B2:B7)`
  2. Total geral dos 3 meses → `=SOMA(E2:E7)` ou `=SOMA(B2:D7)`
  3. Maior valor de custo → `=MÁXIMO(B2:D7)`
  4. Menor valor de custo → `=MÍNIMO(B2:D7)`
  5. Média mensal de Energia → `=MÉDIA(B3:D3)`

### 🟢 Exercício 2 — Controle de Estoque
- **Objetivo**: Calcular entradas, saídas e estoque final com `SOMA()`, `MÁXIMO()`, `MÍNIMO()` e `CONT.VALORES()`.
- **Cenário**: Uma papelaria controla o estoque mensal. **Estoque Final = Estoque Inicial + Entradas − Saídas**.
- **Estrutura da Tabela** (Colunas: Produto | Estoque Inicial | Entradas | Saídas | Estoque Final | Preço Unit.):
  - Caneta Azul, Caderno 100f, Borracha, Lápis HB, Grampeador, Papel A4 (resma).
  - **Estoque Final por linha**: `=B2+C2-D2`, `=B3+C3-D3`, ... `=B7+C7-D7`.
  - **TOTAIS**: `=SOMA(B2:B7)`, `=SOMA(C2:C7)`, `=SOMA(D2:D7)`, `=SOMA(E2:E7)`.
  - **Maior Estoque Final**: `=MÁXIMO(E2:E7)` — **Menor**: `=MÍNIMO(E2:E7)` — **Itens Cadastrados**: `=CONT.VALORES(A2:A7)`.
- **💡 Dica**: Arraste a fórmula `=B2+C2-D2` até `E7` — o Excel ajusta as referências automaticamente.
- **Questões guiadas**:
  1. Estoque Final do 1º produto → `=B2+C2-D2`
  2. Maior estoque final → `=MÁXIMO(E2:E7)`
  3. Menor estoque final → `=MÍNIMO(E2:E7)`
  4. Total de produtos cadastrados → `=CONT.VALORES(A2:A7)`
  5. Total de unidades que saíram → `=SOMA(D2:D7)`

### 🟢 Exercício 3 — Relatório de Vendas
- **Objetivo**: Analisar o desempenho de vendedores com `SOMA()`, `MÉDIA()`, `MÁXIMO()` e `MÍNIMO()` por período semestral.
- **Cenário**: A equipe da loja TechShop precisa de um relatório semestral (Jan–Jun).
- **Estrutura da Tabela** (Colunas: Vendedor | Jan..Jun | TOTAL/MÊS | MÉDIA/MÊS):
  - Ana Lima, Bruno Souza, Carla Mendes, Diego Ferr., Eliane Costa (linhas 2–6).
  - **TOTAL/MÊS** (coluna por coluna): `=SOMA(B2:B6)` ... `=SOMA(G2:G6)`.
  - **MÉDIA/MÊS**: `=MÉDIA(B2:B6)` ... `=MÉDIA(G2:G6)`.
  - **Maior Venda**: `=MÁXIMO(B2:G6)` — **Menor Venda**: `=MÍNIMO(B2:G6)` — **Total Geral**: `=SOMA(B2:G6)`.
- **💡 Dica**: Crie as fórmulas na primeira coluna e arraste horizontalmente até a coluna G.
- **Questões guiadas**:
  1. Total de vendas de Janeiro → `=SOMA(B2:B6)`
  2. Média por vendedor em Março → `=MÉDIA(D2:D6)`
  3. Maior valor de venda no semestre → `=MÁXIMO(B2:G6)`
  4. Menor valor de venda no semestre → `=MÍNIMO(B2:G6)`
  5. Total geral de todas as vendas → `=SOMA(B2:G6)`

### 🟢 Exercício 4 — CONT.VALORES() e CONT.NÚM()
- **Objetivo**: Entender a diferença entre `CONT.VALORES()` e `CONT.NÚM()` e aplicá-las corretamente.
- **Conceito-chave**:
  - **`CONT.VALORES()`** — conta todas as células com algum valor (texto, número, data).
  - **`CONT.NÚM()`** — conta apenas células com valores numéricos.
- **Estrutura da Tabela** (Colunas: Funcionário | Código | Meta Atingida): Ana Lima, Bruno Souza, Carla Mendes, Diego Ferreira, Eliane Costa (código vazio), Fábio Ramos, Gisele Torres.
- **Fórmulas de análise**:
  - Códigos cadastrados → `CONT.NÚM(B2:B8)` (somente células com número).
  - Funcionários que atingiram a meta → `CONT.VALORES(C2:C8)` (células preenchidas — texto "Sim"/"Não").
  - Funcionários na lista → `CONT.VALORES(A2:A8)` (todos os nomes preenchidos).
- **💡 Dica**: Use `CONT.NÚM()` para contar apenas valores numéricos (datas, preços, códigos). Use `CONT.VALORES()` para contar qualquer célula preenchida, incluindo texto como "Sim" e "Não".
- **Questões para Reflexão**:
  1. Por que `CONT.VALORES(A2:A8)` retorna 7, mas `CONT.NÚM(A2:A8)` retorna 0?
  2. Se o código da funcionária Eliane fosse preenchido, `CONT.NÚM(B2:B8)` mudaria? Para quanto?
  3. Qual função usar para contar vendedores que atingiram a meta (coluna C)? Por quê?

---

## 🧩 5. Especificação do Quiz de Fixação (5 Questões)

> **Regras**: 5 questões de múltipla escolha (4 alternativas), nota mínima de aprovação **7,0 / 10,0** (≥ 4 acertos), validação SHA-256 (`WR-XXXX-XXXX`) e exportação TXT/PDF/WhatsApp/E-mail. Segue o padrão das Aulas 01 e 02.

1. **Questão 1 (Função SOMA)**:
   - *Pergunta*: Uma empresa gasta R$ 1.000, R$ 500 e R$ 700 em três meses. Qual fórmula soma corretamente esses três valores na linha?
   - *Alternativas*:
     - a) `=MÁXIMO(B2:D2)`
     - b) `=SOMA(B2:D2)` [Correta]
     - c) `=MÍNIMO(B2:D2)`
     - d) `=MÉDIA(B2:D2)`
   - *Dica*: `SOMA()` adiciona todos os valores do intervalo indicado.

2. **Questão 2 (Função MÉDIA)**:
   - *Pergunta*: Qual função calcula a média aritmética dos valores de um intervalo de células?
   - *Alternativas*:
     - a) `SOMA`
     - b) `MÍNIMO`
     - c) `MÉDIA` [Correta]
     - d) `CONT.NÚM`
   - *Dica*: É a que divide a soma pela quantidade de valores.

3. **Questão 3 (MÁXIMO / MÍNIMO)**:
   - *Pergunta*: Com qual função encontramos o MENOR valor dentro de um intervalo de células?
   - *Alternativas*:
     - a) `=MÁXIMO(B2:D7)`
     - b) `=MÍNIMO(B2:D7)` [Correta]
     - c) `=SOMA(B2:D7)`
     - d) `=MÉDIA(B2:D7)`
   - *Dica*: "MIN" vem de mínimo — o menor valor do intervalo.

4. **Questão 4 (CONT.NÚM vs CONT.VALORES)**:
   - *Pergunta*: Qual a diferença entre `CONT.NÚM()` e `CONT.VALORES()`?
   - *Alternativas*:
     - a) Não existe diferença, são a mesma função.
     - b) `CONT.NÚM()` conta só números; `CONT.VALORES()` conta qualquer valor preenchido (texto, número, data). [Correta]
     - c) `CONT.VALORES()` conta só números; `CONT.NÚM()` conta textos.
     - d) Ambas contam apenas células vazias.
   - *Dica*: Observe que "números" é a palavra-chave do `CONT.NÚM`.

5. **Questão 5 (Soma de coluna)**:
   - *Pergunta*: Como somar o total de vendas de todos os vendedores de Janeiro (linhas 2 a 6 da coluna B)?
   - *Alternativas*:
     - a) `=SOMA(B2:B6)` [Correta]
     - b) `=SOMA(B2:G6)`
     - c) `=MÁXIMO(B2:B6)`
     - d) `=MÉDIA(B2:B6)`
   - *Dica*: Considere apenas a coluna B, das linhas 2 a 6.

### 5.1 Gabarito Oficial (Índices 0-based e 1-based)
| Questão | Resposta Correta | Índice (0-based) | Descrição |
| :--- | :--- | :--- | :--- |
| 1 | B — SOMA | `1` | `=SOMA(B2:D2)` soma o intervalo |
| 2 | C — MÉDIA | `2` | Média aritmética do intervalo |
| 3 | B — MÍNIMO | `1` | Menor valor do intervalo |
| 4 | B — CONT.NÚM vs CONT.VALORES | `1` | Números vs preenchidos |
| 5 | A — SOMA de coluna | `0` | `=SOMA(B2:B6)` soma a coluna B |

> **Gabarito mapeado em array JS**: `const GABARITO_L3 = [1, 2, 1, 1, 0];`

---

## 🎨 6. Atualização do Catálogo Master (SPEC-EXCEL-MASTER)

O conteúdo real do material fonte (`Aula-3-Excel_Exercicios_Praticos.html`) trata de **Funções de Cálculo** e **não** de Formatação. Portanto, a **Aula 03** do catálogo deve ser realinhada de *"Exercícios Práticos & Formatação"* para:

> **Aula 03** | **Funções de Cálculo Essenciais** | `SOMA`, `MÉDIA`, `MÁXIMO`, `MÍNIMO`, `CONT.VALORES`, `CONT.NÚM` aplicadas em Exercícios Práticos (Custos, Estoque, Vendas e Contagem) | Senha `xc003` | ✅ Especificada (Fase 2)

---

## 🖥️ 7. Ergonomia e Regras de Interface

- **Botão de PDF na Barra Superior / Início da Aula**: Botão `📑 Baixar Apostila Didática em PDF` no topo, chamando `window.PDFLessons.downloadLessonPDF('excel', 3)`.
- **Formatação de Atalhos de Teclado**: Uso da tag `<kbd>` para `Enter`, `Ctrl+C`, `Ctrl+V` e a **Alça de Preenchimento** (arrastar fórmula).
- **Tabelas de Fórmulas em Código**: Fórmulas exibidas em fonte monoespaçada (`JetBrains Mono`) com fundo claro, exatamente como no material-fonte (`=SOMA(B2:D2)`, `=MÁXIMO(B2:D7)`, `=B2+C2-D2`).
- **Nota Mínima do Quiz**: **7,0 / 10,0** (acerto de ao menos 4 de 5 questões) para aprovação e liberação do comprovante.
- **Validação Anti-Fraude**: Geração de Hash SHA-256 e botões de envio via WhatsApp (`19 99130-6907`) e E-mail (`okcomputer.use.linux@gmail.com`).
- **Otimização de Impressão**: Regras `@media print` com `page-break-inside: avoid; break-inside: avoid;` para que as tabelas de fórmulas e o simulador não fiquem cortados entre páginas.

---

## 🗂️ 8. Plano de Implementação (Fase 3 — Futura)

> **Nota**: Esta seção é referência para a etapa de codificação (Fase 3). A validação da presente especificação é pré-requisito antes de qualquer alteração em `modules/excel/index.html`.

1. **Hub (`modules/excel/index.html`)**:
   - Alterar a AULA 03 de `🔒 Em Construção` para `🔓 Aula Liberada (Senha xc003)`.
   - Vincular o card ao `promptLessonPassword(3, 'Funções de Cálculo: SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM')`.
2. **Tela da Aula 03** (`#screen-lesson-3`):
   - Clonar a estrutura do `#screen-lesson-2` (header, gamify progress, cartão de leitura, abas `topic-tabs-bar`, painel de fixação).
   - Implementar os 4 exercícios práticos conforme a Seção 4.
   - Renomear IDs: `l3-phase-X`, `tab-l3-X`, `btn-read-l3-X`, `gamify-label-3`, `gamify-fill-3`, `gamify-badge-box-3`.
3. **Simulador Function Lab**: Implementar conforme a Seção 3 com funções `calcFunction()`, `updateResults()`, `toggleCounter()`.
4. **Quiz**: Adicionar `GABARITO_L3`, `QUESTOES_L3`, funções `selectFixOption(3, ...)` e `calcFixation(3)` reutilizando o motor `quiz-engine.js`.
5. **Gerador de PDF (`assets/js/pdf-lessons.js`)**:
   - Adicionar o bloco do Excel Aula 03 (`lessonNum: 3`) com o conteúdo das 4 seções e mapas dos exercícios práticos.
6. **Tríade de Documentação**: Atualizar `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` (Registro Cronológico) após a implementação.

---

## 📚 9. Referências Didáticas e Acadêmicas

1. **Walkenbach, J. (2015)**. *Excel 2016 Bible*. John Wiley & Sons.
2. **Alexander, M., & Kusleika, R. (2018)**. *Excel 2019 Bible / Excel Analysis*. Wiley.
3. **Microsoft Learn (2024)**. *Documentação Oficial de Fórmulas e Funções do Microsoft Excel* (SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM). Microsoft Press.
4. **W3C (2023)**. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.
