# 🏛️ SPEC-EXCEL-AULA-07 — Especificação Técnica e Pedagógica da Aula 07 (Excel)
### Módulo 3: Microsoft Excel | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai**: Herda regras de [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) e [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md).

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 07 do Módulo Excel** apresenta as **Contas Pessoais & Tabela Dinâmica** — a construção de um controle de finanças pessoais completo e a criação de uma **Tabela Dinâmica (Pivot Table)** a partir dele, para analisar receitas e despesas por tipo, grupo, conta e mês. O conteúdo foi extraído e consolidado do acervo original em `AulaOrigem/excel/` ([Aula - 7- Excel Contas Pessoais com tabela dinâmica/](file:///home/rangel/git-dev/aulas/AulaOrigem/excel/Aula%20-%207-%20Excel%20Contas%20Pessoais%20com%20tabela%20dinâmica/) / `ExcelContasPessoaiscomtabeladinmica.html`).

> **📌 Nota de Curadoria**: O objeto da Aula 07 está alinhado ao título do catálogo master (*Contas Pessoais & Tabela Dinâmica*). O material fonte é um passo a passo prático de 9 etapas: montar a planilha base de lançamentos (com funções de data e validação de dados), criar a Tabela Dinâmica, configurar os campos (Linhas, Filtros), ordenar, arrumar a tabela, ocultar linhas/grades e utilizar estrutura de tópicos para expandir/recolher detalhes. As **16 imagens ilustrativas** do passo a passo estão disponíveis em `assets/img/excel/a7/image1..16.png`.

### Objetivos de Aprendizagem:
1. Construir uma **planilha base de Contas Pessoais** com os campos: `Data | Ano | Tipo de Lançamento | Grupo | Conta | Valor | Forma de Pagamento | Descrição | Dia | Mês | Ano Lançamento`.
2. Renomear abas de planilha: `Plan1 → Lançamento` e `Plan2 → Análise`.
3. Usar **funções de data** (`=HOJE()`, `=DIA()`, `=MÊS()`, `=ANO()`) para extrair automaticamente dia, mês e ano de cada lançamento.
4. Aplicar **Validação de Dados** (lista) para padronizar os tipos de lançamento: `BOLETO; DÉBITO; PIX; TRANSFERÊNCIA`.
5. Criar uma **Tabela Dinâmica** a partir da tabela Lançamento (`Inserir → Tabela Dinâmica`), selecionando o intervalo correto.
6. Configurar **Linhas** da Tabela Dinâmica com `TIPO DE LANÇAMENTO`.
7. **Classificar** os dados em ordem decrescente (`Dados → Classificar`).
8. **Organizar os campos** da Tabela Dinâmica: `Tipo`, `Grupo`, `Conta`, `Valor`, `Mês`.
9. **Ocultar/Exibir** Linhas e Grades da Tabela Dinâmica (aba `Exibir`).
10. Usar **Filtros de Tabela Dinâmica** — arrastar o campo `Ano` para a área de FILTROS e filtrar por ano.
11. Utilizar a **Estrutura de Tópicos** (`Dados → Estrutura de tópicos`) com os botões **+** / **−** para expandir e ocultar linhas de detalhes.
12. Interpretar o **Resultado final** da Tabela Dinâmica consolidando receitas/despesas.

### Core Topics (9 Etapas Didáticas — Passo a Passo Prático):
1. **Preparação da Planilha de Lançamentos**: criação dos 11 campos, preenchimento com dados, renomeação da aba `Plan1 → Lançamento`.
2. **Funções de Data na Base**: uso de `=HOJE()`, `=DIA()`, `=MÊS()` e `=ANO()` para gerar as colunas Dia/Mês/Ano Lançamento automaticamente.
3. **Validação de Dados (Lista)**: `Dados → Validação de Dados → Permitir: Lista`, com fonte `BOLETO;DÉBITO;PIX;TRANSFERÊNCIA` para o campo `Tipo de Lançamento`.
4. **Renomeação da Aba de Análise e Criação da Tabela Dinâmica**: `Plan2 → Análise`, `Inserir → Tabela Dinâmica`.
5. **Seleção do Intervalo (Tabela/Intervalo)**: apontar para a tabela `Lançamento`.
6. **Configuração dos Campos da Tabela Dinâmica**: `TIPO DE LANÇAMENTO` em **Linhas**; em seguida `Tipo`, `Grupo`, `Conta`, `Valor`, `Mês`.
7. **Ordenação dos Dados**: `Dados → Classificar` em **ordem decrescente** (selecionando "Receitas").
8. **Visualização e Filtros**: ocultar Linhas/Grades (aba Exibir), mostrar lista de campos se sumir (botão direito → Mostrar Lista de Campos), arrastar `Ano` para **Filtros** e filtrar por ano.
9. **Estrutura de Tópicos (Agrupamento)**: selecionar a linha "Receita", usar `Dados → Estrutura de tópicos` com botões **+ / −** para expandir/recolher as linhas de detalhes.

> **📌 Regra de Design (compatível com as Aulas 01 a 06)**: A Aula 07 segue o mesmo esqueleto visual (Cor Verde Excel, cartões de leitura, abas de tópicos, trilha de progresso, simulador interativo e quiz de 5 questões), garantindo coerência pedagógica e técnica em todo o módulo.

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 3 / Aula 07** | Contas Pessoais & Tabela Dinâmica: tabela base, Tabela Dinâmica, campos, filtros, estrutura de tópicos | `xg007` | 🔒 Oculta (Acesso Restrito) |

---

## 🖥️ 3. Simulador Interativo da Aula 07 (Pivot Lab)

> **🛠️ Novo componente dedicado**: Diferente do *Grid Inspector* (Aula 01), do *Fórmula Builder* (Aula 02), do *Function Lab* (Aula 03), do *Logic Lab* (Aula 04), do *Lookup Lab* (Aula 05) e do *Date & Time Lab* (Aula 06), a Aula 07 apresenta o **Laboratório de Tabela Dinâmica — "Pivot Lab"**, que permite ao aluno vivenciar, no navegador, a lógica de arrastar campos e ver a tabela se reorganizar em tempo real, sem depender do Excel real.

### 3.1 Requisitos Funcionais do Simulador

1. **Grade de Entrada — Tabela de Lançamentos**:
   - Tabela demonstrativa com os dados do exercício (Data | Tipo | Grupo | Conta | Valor | Mês | Ano).
   - Células/registros representando lançamentos de **Receitas** e **Despesas** (ex.: salário, alimentação, transporte, moradia) com valores em R$.
   - Permitir ao aluno alternar o ano (FILTRO de Ano) e os campos exibidos.

2. **Painel de Configuração de Campos (Drag de Campos)**:
   - Áreas conceituais: **Linhas**, **Colunas**, **Valores**, **Filtros**.
   - Checkboxes/selects para o aluno escolher quais campos entram nas Linhas (`Tipo`, `Grupo`, `Conta`, `Mês`) e qual campo usa como **Filtro** (`Ano`).
   - Botão para alternar o campo de **Valores** (`Valor` com soma).

3. **Tabela Dinâmica ao Vivo (Resultado Consolidado)**:
   - Exibição em tempo real da consolidação: linhas agrupadas por `Tipo` (Receitas/Despesas), subgrupos (`Grupo`, `Conta`), colunas por `Mês` e **total geral** em R$.
   - Cálculo automático das somas conforme o aluno marca/desmarca campos — simulando a reorganização de uma pivô real.

4. **Controles de Ordenação e Filtro**:
   - Botão **Classificar** (ordem decrescente) aplicado sobre a coluna de valores.
   - **Filtro de Ano** (seletor) que recorta a demonstração, mostrando o efeito de arrastar o campo `Ano` para FILTROS.

5. **Estrutura de Tópicos (Expandir/Recolher)**:
   - Linhas agrupadas com botões **+ / −** que mostram/ocultam as linhas de detalhe, reproduzindo o recurso `Dados → Estrutura de tópicos`.

6. **Controles de Acessibilidade**:
   - Botões e campos com área de toque ≥ 56px.
   - Contraste WCAG AA (texto `#1F2937` sobre fundo `#FFFFFF`).
   - Fonte `JetBrains Mono` para funções e `Inter` para textos.

### 3.2 Mockup Lógico (Estrutura HTML/CSS/JS)
```text
[Simulador Pivot Lab — Aula 07]
┌────────────────────────────────────────────────────────────┐
│ 🖥️ Lab de Tabela Dinâmica — Contas Pessoais               │
│  Grade de Lançamentos (base):                              │
│  Data       | Tipo    | Grupo      | Conta   | Valor | Mês │
│  05/01/2025 | Receita | Salário    | Empresa | 3.500 | 1   │
│  08/01/2025 | Despesa | Alimentação| Mercado |  450  | 1   │
│  ...        (editável / exemplo)                           │
├────────────────────────────────────────────────────────────┤
│ ⚙️ Campos (áreas drag):                                    │
│  Linhas: [✓Tipo] [✓Grupo] [✓Conta] [ ]Mês                 │
│  Filtros: [✓ Ano = 2025 ]                                  │
│  Valores: [✓ Valor (Soma) ]                                │
├────────────────────────────────────────────────────────────┤
│ 📊 Tabela Dinâmica ao Vivo:                                │
│         |      Mês1       |   Total                        │
│  Receita|  Salário  3.500 |   3.500                        │
│  Despesa| Mercado     450 |  ...                           │
│  Total Geral ...   (recalcula em tempo real)               │
├────────────────────────────────────────────────────────────┤
│ 🔻 Estrutura de Tópicos: [−] Receita  [+ Despesa]          │
└────────────────────────────────────────────────────────────┘
```

---

## 📚 4. Especificação dos Conteúdos Didáticos e Exercícios (material fonte real)

> Os tópicos (etapas) e passos abaixo reproduzem fielmente o conteúdo do `ExcelContasPessoaiscomtabeladinmica.html`. As imagens referenciadas são as de `assets/img/excel/a7/`.

### 🟢 Etapa 1 — Preparação da Planilha de Lançamentos
- Criar uma planilha com os seguintes campos: `Data | Ano | Tipo de Lançamento | Grupo | Conta | Valor | Forma de Pagamento | Descrição | Dia | Mês | Ano Lançamento`.
- **Renomear** a aba `Plan1` para `Lançamento`.
- **Preencher com dados** reais do aluno (ex.: lançamentos do mês).
- *Sem captura no material-fonte para esta etapa; o conteúdo é ilustrado pela réplica HTML da planilha base no módulo.*

### 🟢 Etapa 2 — Funções de Data na Base (Dia, Mês, Ano)
- Usar as funções de data para preencher automaticamente as colunas derivadas:
  - **Coluna Dia**: `=DIA(A2)` → extrai o dia da data do lançamento.
  - **Coluna Mês**: `=MÊS(A2)` → extrai o mês.
  - **Coluna Ano Lançamento**: `=ANO(A2)` → extrai o ano.
  - **Coluna Ano**: `=ANO(A2)` (ano para filtro).
  - **Célula de referência/Data de hoje**: `=HOJE()` também pode ser usada no cabeçalho.
- *Sem captura no material-fonte para esta etapa; o conteúdo é ilustrado pela réplica HTML das fórmulas no módulo.*

### 🟢 Etapa 3 — Validação de Dados (Lista) para Tipo de Lançamento
- Caminho: `Dados → Validação de Dados`.
- Em **Permitir**, selecionar **Lista**.
- Em **Fonte**, digitar os tipos separados por ponto e vírgula: `BOLETO;DÉBITO;PIX;TRANSFERÊNCIA`.
- Efeito: aparece uma seta dropdown em cada célula do campo Tipo de Lançamento, padronizando a digitação.
- *Sem captura no material-fonte para esta etapa.*

### 🟢 Etapa 4 — Renomear a Aba de Análise e Criar a Tabela Dinâmica
- Em `Plan2`, **renomear** para `Análise`.
- Clicar na aba `Análise` e acessar `Inserir → Tabela Dinâmica`.
- **Imagem de referência**: `assets/img/excel/a7/image1.png`.

### 🟢 Etapa 5 — Selecionar o Intervalo (Tabela/Intervalo)
- Na janela de criação da Tabela Dinâmica, em **Tabela/Intervalo**, selecionar a tabela `Lançamento` (intervalo completo com os dados).
- **Imagem de referência**: `assets/img/excel/a7/image3.png`.

### 🟢 Etapa 6 — Configuração dos Campos da Tabela Dinâmica
- Inserir `TIPO DE LANÇAMENTO` em **Linhas**.
- Então, ainda com `Tipo` selecionado, selecionar também os demais campos: `Grupo`, `Conta`, `Valor`, `Mês` — conforme a imagem de referência.
- **Imagens de referência**: `assets/img/excel/a7/image12.png`, `image9.png`, `image4.png`, `image6.png`, `image11.png`.

### 🟢 Etapa 7 — Ordenação dos Dados (Decrescente)
- Selecionar a linha **"Receitas"** como indicado na imagem.
- Clicar em `Dados → Classificar` e escolher **ordem decrescente**.
- **Imagens de referência**: `assets/img/excel/a7/image2.png`, `image16.png`, `image7.png`.

### 🟢 Etapa 8 — Visualização, Filtros e Campo Ano
- Clicar na aba `Exibir` e **desmarcar** `Linhas` e `Grades` para ocultar cabeçalhos de linha/coluna e as linhas de grade.
- **Caso a lista de campos suma**: clicar em uma única célula da tabela com o botão direito e escolher o último item da janela → **Mostrar Lista de Campos**.
- **Arrastar a coluna `Ano` para a área FILTROS**.
- Agora é possível **filtrar por Ano** (ex.: 2025, 2026).
- **Imagens de referência**: `assets/img/excel/a7/image8.png`, `image5.png`, `image13.png`.

### 🟢 Etapa 9 — Estrutura de Tópicos (Expandir/Recolher)
- Selecionar a linha **"Receita"** como na imagem.
- Clicar em `Dados → Estrutura de tópicos` — reparar que existem botões **+** e **−** para exibir ou ocultar as linhas de detalhes.
- Clicar no **−** para ocultar as linhas de detalhes (e **+** para expandir novamente).
- **Resultado final**: tabela consolidada, limpa e organizada.
- **Imagens de referência**: `assets/img/excel/a7/image10.png`, `image15.png`, `image14.png`.

### ✏️ Exercícios para Praticar (encerramento da aula)
1. Monte a planilha de Contas Pessoais com seus próprios lançamentos do mês (preencha os 11 campos).
2. Use as funções `=DIA()`, `=MÊS()` e `=ANO()` para preencher as colunas derivadas de data.
3. Aplique Validação de Dados (Lista) nos tipos: BOLETO; DÉBITO; PIX; TRANSFERÊNCIA.
4. Crie a Tabela Dinâmica na aba `Análise`, colocando `TIPO DE LANÇAMENTO` e depois `Grupo`, `Conta`, `Valor` e `Mês` em Linhas.
5. Classifique em ordem decrescente, filtre por um ano e use os botões `+`/`−` da Estrutura de Tópicos para ocultar os detalhes.

---

## 🧩 5. Especificação do Quiz de Fixação (5 Questões)

> **Regras**: 5 questões de múltipla escolha (4 alternativas), nota mínima de aprovação **7,0 / 10,0** (≥ 4 acertos), validação SHA-256 (`WR-XXXX-XXXX`) e exportação TXT/PDF/WhatsApp/E-mail. Segue o padrão das Aulas 01 a 06.

1. **Questão 1 (Tabela Dinâmica — criação)**:
   - *Pergunta*: Após preencher a planilha de lançamentos, onde se encontra o comando para criar uma Tabela Dinâmica?
   - *Alternativas*:
     - a) Página Inicial → Tabela Dinâmica
     - b) Inserir → Tabela Dinâmica [Correta]
     - c) Dados → Tabela Dinâmica
     - d) Fórmulas → Tabela Dinâmica
   - *Dica*: O comando de criação de Tabela Dinâmica fica na aba Inserir, junto a outros componentes de tabela.

2. **Questão 2 (Validação de Dados)**:
   - *Pergunta*: Para criar uma lista suspensa (dropdown) que limita os valores a BOLETO; DÉBITO; PIX; TRANSFERÊNCIA, qual recurso usar?
   - *Alternativas*:
     - a) Formatação Condicional
     - b) Quebrar texto
     - c) Validação de Dados com "Permitir: Lista" [Correta]
     - d) Filtro Avançado
   - *Dica*: O recurso que cria lista suspensa de valores permitidos está em Dados → Validação de Dados → Permitir: Lista.

3. **Questão 3 (Campos da Tabela Dinâmica)**:
   - *Pergunta*: Na construção da Tabela Dinâmica, onde o campo `TIPO DE LANÇAMENTO` é inserido para agrupar os dados por linhas?
   - *Alternativas*:
     - a) FILTROS
     - b) VALORES
     - c) COLUNAS
     - d) LINHAS [Correta]
   - *Dica*: Campos arrastados para a área de LINHAS viram os grupos impressos nas linhas da pivô.

4. **Questão 4 (Filtro por Ano)**:
   - *Pergunta*: Para permitir filtrar a Tabela Dinâmica por ano, para qual área o campo `Ano` deve ser arrastado?
   - *Alternativas*:
     - a) Filtros [Correta]
     - b) Valores
     - c) Linhas
     - d) Colunas
   - *Dica*: A área de FILTROS transforma o campo em um seletor de filtro na parte superior da pivô.

5. **Questão 5 (Estrutura de Tópicos)**:
   - *Pergunta*: Para ocultar ou exibir as linhas de detalhe de um grupo (usando os botões + e −), qual aba/menu acessar?
   - *Alternativas*:
     - a) Inserir → Formas
     - b) Dados → Estrutura de tópicos [Correta]
     - c) Página Inicial → Classificar
     - d) Exibir → Congelar Painéis
   - *Dica*: O recurso que mostra os botões **+** / **−** para expandir/recolher grupos fica em Dados → Estrutura de tópicos.

### 5.1 Gabarito Oficial (Índices 0-based e 1-based)
| Questão | Resposta Correta | Índice (0-based) | Descrição |
| :--- | :--- | :--- | :--- |
| 1 | B — Inserir → Tabela Dinâmica | `1` | Criação da Tabela Dinâmica |
| 2 | C — Validação de Dados (Lista) | `2` | Lista suspensa de tipos |
| 3 | D — LINHAS | `3` | Campo Tipo em Linhas |
| 4 | A — FILTROS | `0` | Filtro por Ano |
| 5 | B — Dados → Estrutura de tópicos | `1` | Expandir/recolher detalhes |

> **Gabarito mapeado em array JS**: `const GABARITO_L7 = [1, 2, 3, 0, 1];`

---

## 🎨 6. Ergonomia e Regras de Interface

- **Botão de PDF na Barra Superior / Início da Aula**: Botão `📑 Baixar Apostila Didática em PDF` no topo, chamando `window.PDFLessons.downloadLessonPDF('excel', 7)`.
- **Imagens do Passo a Passo**: As **16 imagens** em `assets/img/excel/a7/image1..16.png` são exibidas nas respectivas etapas, com `loading="lazy"` e `width/height` definidos para evitar layout shift; aplicar `border-radius` e sombra leve para integração com o cartão de leitura.
- **Formatação de Atalhos/Caminhos de Menu**: Menus (`Inserir → Tabela Dinâmica`, `Dados → Validação de Dados`, `Dados → Estrutura de tópicos`) destacados em negrito/monoespaçado, como nas aulas anteriores.
- **Tabelas de Dados**: Tabela de lançamentos e a Tabela Dinâmica exibidas no formato estilo Excel (cabeçalho verde Excel, células com bordas, valores monetários à direita).
- **Nota Mínima do Quiz**: **7,0 / 10,0** (acerto de ao menos 4 de 5 questões) para aprovação e liberação do comprovante.
- **Validação Anti-Fraude**: Geração de Hash SHA-256 e botões de envio via WhatsApp (`19 99130-6907`) e E-mail (`okcomputer.use.linux@gmail.com`).
- **Otimização de Impressão**: Regras `@media print` com `page-break-inside: avoid; break-inside: avoid;` para que a grade de lançamentos, o simulador Pivot Lab, as tabelas e as imagens não fiquem cortadas entre páginas.

---

## 🗂️ 7. Plano de Implementação (Fase 3)

> **Nota**: A Fase 3 foi **iniciada** (ver Anexo A abaixo). A presente seção referencia o escopo de codificação; a execução está **em andamento e retornará em outra sessão**.

1. **Hub (`modules/excel/index.html`)**:
   - Alterar a AULA 07 de `🔒 Em Construção` para `🔓 Aula Liberada (Senha xg007)`.
   - Vincular o card ao `promptLessonPassword(7, 'Contas Pessoais & Tabela Dinâmica')`.
2. **Tela da Aula 07** (`#screen-lesson-7`):
   - Clonar a estrutura do `#screen-lesson-6` (header, gamify progress, cartão de leitura, abas `topic-tabs-bar`, painel de fixação).
   - Implementar as 9 etapas didáticas conforme a Seção 1 e os conteúdos da Seção 4, exibindo as 16 imagens de `assets/img/excel/a7/`.
   - Renomear IDs: `l7-phase-X`, `tab-l7-X`, `btn-read-l7-X`, `gamify-label-7`, `gamify-fill-7`, `gamify-badge-box-7`.
3. **Simulador Pivot Lab**: Implementar conforme a Seção 3 com funções `renderPivotTable()`, `updatePivotFields()`, `applyPivotFilter()`, `sortPivotDesc()`, `togglePivotOutline()`.
4. **Quiz**: Adicionar `GABARITO_L7 = [1, 2, 3, 0, 1]`, `QUESTOES_L7`, funções `selectFixOption(7, ...)` e `calcFixation(7)` reutilizando o motor `quiz-engine.js`.
5. **Gerador de PDF (`assets/js/pdf-lessons.js`)**:
   - Adicionar o bloco do Excel Aula 07 (`lessonNum: 7`) com o conteúdo das 9 etapas e o exercício completo (planilha de lançamentos + Tabela Dinâmica), incluindo as imagens ilustrativas em `assets/img/excel/a7/`.
   - Registrar `7` em `moduleLessonTitles.excel`.
6. **Tríade de Documentação**: Atualizar `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` (Registro Cronológico) após a implementação.

---

## 📚 8. Referências Didáticas e Acadêmicas

1. **Walkenbach, J. (2015)**. *Excel 2016 Bible*. John Wiley & Sons.
2. **Alexander, M., & Kusleika, R. (2019)**. *Excel 2019 Bible / Excel Analysis*. Wiley.
3. **Microsoft Learn (2024)**. *Documentação Oficial de Tabelas Dinâmicas e Validação de Dados do Microsoft Excel*. Microsoft Press.
4. **W3C (2023)**. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.

---

## 📌 ANEXO A — STATUS ATUAL DA IMPLEMENTAÇÃO (Fase 3, em andamento)
- **Data do registro:** 03/09/2026
- **Estado geral:** 🔄 **Em implementação (Fase 3) — NÃO concluída.** Retomada prevista em outra sessão.

### Já implementado em `modules/excel/index.html`
- ✅ Card do Hub da Aula 07 liberado (`🔓 Aula Liberada (Senha xg007)`, `promptLessonPassword(7, ...)`, `id="badge-lesson-7"`).
- ✅ Tela `#screen-lesson-7` com 9 tópicos didáticos e as **16 imagens** de `assets/img/excel/a7/image1..16.png`.
- ✅ Quiz de 5 questões (`GABARITO_L7 = [1, 2, 3, 0, 1]`, `QUESTOES_L7`, `selectFixOption(7,...)`, `calcFixation(7)`, nota mínima 7,0, SHA-256, exportação TXT/PDF/WhatsApp/E-mail).
- ✅ Registros de script: `readStatus[7]` (9 itens), `userAnswers[7]`, `lessonData[7]`, chave `7` em `lessonTitleMap`, `PASSWORDS[7] = "xg007"`.
- ✅ Bloco PDF `lessonNum: 7` (9 seções) + `moduleLessonTitles.excel[7]` em `assets/js/pdf-lessons.js`.

### ⚠️ PENDÊNCIAS / AJUSTES (a fazer na próxima sessão)
1. **Corrigir alinhamento de colunas do "Total Geral" no Pivot Lab** — em `renderPivotTable()`: com `showValor` ativo a linha "Total Geral" gera **6 células vs 5 colunas** do cabeçalho. O `colspan` deve somar também a coluna "Lançamentos": `colspan = (showTipo+showGrupo+showConta+showMes) + (showValor?1:0)` seguido de 1 célula de total + 1 célula de contagem.
2. **Revisar a semântica da linha de resumo** "Receitas vs Despesas" (posiciona 2 valores nas colunas "Total"/"Lançamentos" quando `showValor` está ligado).
3. **Validar em navegador (Chrome headless)** o fluxo do quiz/SHA-256 da Aula 07, conforme padrão das Aulas 01-06.
4. **Marcar a Aula 07 como concluída** na tríade (`ROADMAP.md`, `INDEX.md`, `DOCUMENTATION.md`) e em `Docs/SPEC-EXCEL-MASTER.md` **somente após** os ajustes e a validação — atualmente registrada como "🟡 Em implementação (Fase 3)".

### Validações já realizadas
- ✅ `node --check` em `assets/js/pdf-lessons.js` e no bloco script inline de `modules/excel/index.html` (sintaxe OK).
- ✅ Unicidade dos IDs `pl-*`, `l7-*`, `tab-l7-*` confirmada.
- ✅ 16/16 imagens de `assets/img/excel/a7/` presentes e referenciadas.
- ✅ Estrutura balanceada: 9 fases + 9 botões de leitura + 10 abas (9 tópicos + quiz); seções `<section>` balanceadas.

---

## 📌 ANEXO B — CORREÇÃO DO ALINHAMENTO DE IMAGENS DA AULA 07 (06/09/2026)

### Contexto
- As imagens da Aula 07 estavam **quebradas/invertidas**: `modules/excel/index.html` e `assets/js/pdf-lessons.js` referenciam `assets/img/excel/a7/image1..16.png`, mas a pasta só continha arquivos com nomes descritivos (`Imagem 01 Inserir Tabela Dinâmica .png`, etc.), e os tópicos 1–3 exibiam screenshots da Tabela Dinâmica sem relação com o conteúdo (base, funções de data e validação não possuem captura no material-fonte).

### Correção realizada
1. **Renomeação canônica**: os 16 arquivos descritivos de `assets/img/excel/a7/` foram renomeados para `image1..16.png` conforme o remapeamento verificado por MD5 contra `AulaOrigem/.../images/` (mesmo conteúdo) — o nome `imageN` agora corresponde sempre à mesmas captura.
2. **`modules/excel/index.html`**: removidas as imagens dos tópicos 1–3 (sem captura no material-fonte — ilustradas por réplicas HTML); tópicos 4–9 agora exibem as 16 imagens na ordem correta do passo a passo, com `alt` descritivos coerentes (mapeamento canônico abaixo).
3. **`assets/js/pdf-lessons.js`**: referências da lição 7 alinhadas ao mesmo mapeamento (removidas das seções 7.1–7.3; imagem `image16` movida de 7.6 para 7.7).

### Mapeamento canônico `imageN` → legenda do material-fonte
| Arquivo | Legenda |
| :--- | :--- |
| image1 | Imagem 01 — Inserir Tabela Dinâmica (Etapa 4) |
| image2 | Imagem 05 — Selecionando Tipo de lançamento "Receita" (Etapa 7) |
| image3 | Imagem 02 — Janela de seleção Tabela/Intervalo (Etapa 5) |
| image4 | Imagem 07 — Campos da Tabela Dinâmica (Etapa 6) |
| image5 | Imagem 10 — Campo Ano arrastado para FILTROS (Etapa 8) |
| image6 | Imagem 08 — Arraste o campo entre as áreas (Etapa 6) |
| image7 | Imagem 06 — Clique em classificação alfabética (Etapa 7) |
| image8 | Imagem 09 — Mostrar Lista de Campos (Etapa 8) |
| image9 | Imagem 04 — Tipo de lançamento puxado para Linha (Etapa 6) |
| image10 | Imagem 12 — Rótulos de Linha (Etapa 9) |
| image11 | Imagem 08 — Resultado da Tabela Dinâmica criada (Etapa 6) |
| image12 | Imagem 03 — Parâmetro Tipo de lançamento (Etapa 6) |
| image13 | Imagem 11 — Filtro por Ano habilitado (Etapa 8) |
| image14 | Imagem 14 — Tabela com resultados aplicados (Etapa 9) |
| image15 | Imagem 13 — Estrutura de Tópicos (Etapa 9) |
| image16 | Imagem 6.1 — Células Receita e Despesa selecionadas (Etapa 7) |

### Pendências remanescentes (fora do escopo desta correção)
- Ajuste do "Total Geral" no Pivot Lab (`colspan`) e revisão da linha "Receitas vs Despesas" (itens 1–2 do Anexo A).
- Validação final em navegador headless e marcação da Aula 07 como concluída na tríade (itens 3–4 do Anexo A).
