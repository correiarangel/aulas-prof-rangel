# 🏛️ SPEC-EXCEL-AULA-08 — Especificação Técnica e Pedagógica da Aula 08 (Excel)
### Módulo 3: Microsoft Excel | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai**: Herda regras de [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) e [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md).

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 08 do Módulo Excel** apresenta o **Controle de Vendas com a função SOMASE** — a construção de um pequeno sistema de controle de vendas completo e funcional: tabelas de apoio (Produtos e Vendedores), tabela de dados de vendas com **Validação de Dados** (listas suspensas), **Estilos de Tabela**, **fórmulas de colunas calculadas** (Total, Comissão, Status), um **campo de consulta rápida por vendedor com SOMASE**, **classificação e filtragem**, **Linha de Totais** e uma **Tabela Dinâmica** de análise — integrando os principais conceitos práticos de Tabelas do Excel vistos no módulo. O conteúdo foi extraído e consolidado do acervo original em `AulaOrigem/excel/` ([Aula-8-Controle de Vendas com a função somase/](file:///home/rangel/git-dev/aulas/AulaOrigem/excel/Aula-8-Controle%20de%20Vendas%20com%20a%20função%20somase) / `Aula8ControledeVendascomafunosomase.html`).

> **📌 Nota de Curadoria**: O objeto da Aula 08 está alinhado ao título do catálogo master (*Controle de Vendas (SOMASE / SOMASES)*). **⚠️ Discrepância auditada**: o material-fonte ensina exclusivamente a função **SOMASE** (soma com um único critério). As funções `SOMASES`, `CONT.SE`, `CONT.SES` e `MÉDIASE`, citadas no catálogo master, **não constam do material-fonte** — ficam registradas como **extensão futura** (fora do escopo desta aula). O material fonte é um passo a passo prático de 9 etapas: criar as tabelas de apoio, montar a tabela de vendas com validação de dados, aplicar estilos e nomear a tabela, adicionar fórmulas calculadas, criar a consulta com SOMASE, classificar/filtrar, ativar a Linha de Totais e criar a Tabela Dinâmica. As **5 imagens ilustrativas** serão disponibilizadas em `assets/img/excel/a8/image1..5.png` (mapeamento posicional — ver Anexo A).

### Objetivos de Aprendizagem:
1. Criar uma **tabela de apoio de Produtos** (`Produtos`: Cadeira, Mesa, Monitor, Mouse, Teclado, Notebook) em aba separada.
2. Criar uma **tabela de apoio de Vendedores** (`Vendedores`: Ana Lima, João Silva, Maria Santos, Pedro Costa).
3. Aplicar **Validação de Dados** (lista suspensa) usando **tabelas de apoio como Fonte** (`Dados → Ferramentas de Dados → Validação de Dados → Permitir: Lista`) para as colunas `Vendedor` e `Produto`.
4. Aplicar **Validação de Dados fixa** na coluna `Categoria`, digitando a fonte diretamente: `Informática;Móveis`.
5. Montar a **tabela de dados de vendas** com os cabeçalhos `Data | Vendedor | Produto | Categoria | Quantidade | Valor Unitário (R$) | Total (R$)` e dados de exemplo (linhas 2 a 21).
6. **Converter o intervalo em Tabela** (`Inserir → Tabela` ou `Ctrl+T`, marcando "Minha tabela tem cabeçalhos").
7. **Aplicar Estilos e nomear** a tabela: `Design de Tabela` → Estilo Médio 6/15, **Linhas em Tiras**, **Primeira Coluna**, **Linha de Totais**, e nome `TabelaVendas`.
8. Usar **fórmulas de colunas calculadas**: `=[@Quantidade]*[@[Vlr. Unit. (R$)]]` (Total), `=[@Total]*0,05` (Comissão (5%)) e `=SE([@Total]>=1000;"Alta";"Média")` (Status).
9. Criar um **campo de consulta por vendedor** com `=SOMASE(TabelaVendas[Vendedor];B2;TabelaVendas[Total])`, recalculando ao trocar o nome em `B2`.
10. **Classificar** (simples e multi-nível: Vendedor A→Z, Data crescente, Total decrescente) e **filtrar** por Categoria, por valor (Maior que 500) e combinações.
11. Ativar a **Linha de Totais** com totalizações: `Soma` (Quantidade, Total, Comissão) e `Contagem` (Vendedor).
12. Criar e **formatar duas Tabelas Dinâmicas** (Vendas por Vendedor; Vendas por Categoria e Produto com `COLUNAS: Vendedor`), formatando em moeda `R$ 0,00` e adicionando **Segmentação de Dados** (Vendedor e Categoria).

### Core Topics (9 Etapas Didáticas — Passo a Passo Prático):
1. **Criar a Tabela de Produtos**: tabela de apoio com a lista de produtos (fonte da lista suspensa).
2. **Criar a Tabela de Vendedores**: tabela de apoio com os nomes dos vendedores.
3. **Criar a Tabela de Dados de Vendas**: validação de dados (listas suspensas via tabelas de apoio e lista fixa de Categoria), cabeçalhos da planilha, dados de exemplo e conversão em Tabela (`Inserir → Tabela` / `Ctrl+T`).
4. **Aplicar Estilos de Tabela**: estilo Médio 6/15, Linhas em Tiras, Primeira Coluna, Linha de Totais e nome `TabelaVendas`.
5. **Adicionar Fórmulas na Tabela**: Total, Comissão (5%) e Status (SE) como colunas calculadas.
6. **Consulta Rápida por Vendedor (SOMASE)**: campo de consulta com célula de critério e fórmula `SOMASE` referenciando `TabelaVendas`.
7. **Classificação e Filtragem Avançadas**: classificar maior→menor, classificação personalizada (3 níveis), filtro por Categoria e por valor.
8. **Linha de Totais com Funções**: ativar e configurar Soma/Contagem por coluna.
9. **Criar Tabela Dinâmica**: duas análises (por Vendedor; por Categoria/Produto com colunas), formatação monetária e **Segmentação de Dados**.

> **📌 Regra de Design (compatível com as Aulas 01 a 06)**: A Aula 08 segue o mesmo esqueleto visual (Cor Verde Excel, cartões de leitura, abas de tópicos, trilha de progresso, simulador interativo e quiz de 5 questões), garantindo coerência pedagógica e técnica em todo o módulo.

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 3 / Aula 08** | Controle de Vendas com SOMASE: tabelas de apoio, validação de dados, fórmulas calculadas, campo de consulta SOMASE, classificação/filtros, linha de totais e tabela dinâmica | `xh008` | 🔒 Oculta (Acesso Restrito) |

> **📌 Nota de Auditoria**: A senha `xh008` segue o padrão da matriz master (`xa001`–`xm013`, letra = posição da aula no alfabeto).

---

## 🖥️ 3. Simulador Interativo da Aula 08 (Sales Lab)

> **🛠️ Novo componente dedicado**: Diferente do *Pivot Lab* (Aula 07) e demais labs, a Aula 08 apresenta o **Laboratório de Controle de Vendas — "Sales Lab"**, que permite ao aluno vivenciar, no navegador, o fluxo completo da aula: listas suspensas alimentadas por tabelas de apoio, colunas calculadas, consulta SOMASE ao vivo, classificação/filtros, Linha de Totais e Tabela Dinâmica — sem depender do Excel real.

### 3.1 Requisitos Funcionais do Simulador

1. **Grade de Entrada — TabelaVendas (dados do exercício)**:
   - Tabela demonstrativa com os cabeçalhos `Data | Vendedor | Produto | Categoria | Qtd. | Vlr. Unit. (R$) | Total (R$) | Comissão (5%) | Status`.
   - Conjunto de lançamentos (16 linhas, 05/12/2024 → 20/12/2024) com os valores reais do material-fonte.
   - Tabelas de apoio exibidas à parte: **Produtos** e **Vendedores**.

2. **Painel de Validação de Dados (Listas Suspensas)**:
   - Seletor de `Vendedor` alimentado pela **tabela de apoio Vendedores** e de `Produto` pela **tabela de apoio Produtos** — reproduzindo a Fonte apontada para o intervalo da tabela de apoio.
   - Indicador de que a lista de `Categoria` é fixa (`Informática;Móveis`).

3. **Colunas Calculadas (Cálculo ao Vivo)**:
   - `Total = [@Quantidade] * [@[Vlr. Unit. (R$)]]` recalculado automaticamente ao editar quantidade/valor unitário.
   - `Comissão (5%) = [@Total] * 0,05`.
   - `Status = SE([@Total]>=1000; "Alta"; "Média")`.

4. **Campo de Consulta por Vendedor (SOMASE)**:
   - Campo `B2` (seletor de vendedor com lista suspensa) e célula `C2` de resultado.
   - Fórmula executada ao vivo: `=SOMASE(TabelaVendas[Vendedor]; B2; TabelaVendas[Total])`.
   - Trocar o vendedor atualiza `C2` **sem alterar a fórmula** — reforçando o conceito de painel de consulta reutilizável.

5. **Classificação e Filtragem**:
   - Botão **Classificar Total (maior → menor)**.
   - Filtro por **Categoria** (`Informática`/`Móveis`) e filtro numérico (**Total > 500**).

6. **Linha de Totais**:
   - Alternância com totalizações por coluna: `Soma` (Qtd., Total, Comissão) e `Contagem` (Vendedor).

7. **Tabela Dinâmica Consolidada**:
   - Vista **Vendas por Vendedor** (Linhas: Vendedor; Valores: Soma do Total).
   - Vista **Vendas por Categoria e Produto** (Linhas: Categoria → Produto; Valores: Soma do Total; Colunas: Vendedor), com formatação `R$ 0,00`.

8. **Controles de Acessibilidade**:
   - Botões e campos com área de toque ≥ 56px.
   - Contraste WCAG AA (texto `#1F2937` sobre fundo `#FFFFFF`).
   - Fonte `JetBrains Mono` para fórmulas e `Inter` para textos.

### 3.2 Mockup Lógico (Estrutura HTML/CSS/JS)
```text
[Simulador Sales Lab — Aula 08]
┌────────────────────────────────────────────────────────────┐
│ 💼 Lab de Controle de Vendas                               │
│  TabelaVendas (grade editável):                            │
│  Data | Vendedor  | Produto | Categoria  | Qtd | Vlr Unit |│
│  05/12 | João Silva| Notebook| Informática|   2 |   3.500 |│
│  ...   (16 lançamentos de exemplo)                        │
├────────────────────────────────────────────────────────────┤
│ ⚙️ Tabelas de apoio:      Listas suspensas:                │
│  Produtos: [Cadeira...]   Vendedor ▼ [João Silva]          │
│  Vendedores: [Ana Lima...] Produto  ▼ [Notebook]           │
│  Categoria ▼ [Informática] (fonte fixa)                    │
├────────────────────────────────────────────────────────────┤
│ 🧮 Colunas calculadas: Total | Comissão (5%) | Status     │
│ 🔍 Consulta SOMASE: Vendedor [B2: ▼] → Total [C2: R$ ...]  │
├────────────────────────────────────────────────────────────┤
│ 📊 Classificar Total ↓ | Filtro Categoria ▼ | Total > 500  │
│ 📋 Linha de Totais: [✓] Soma Qtd/Total/Comissão, Contar Vend│
├────────────────────────────────────────────────────────────┤
│ 📈 Tabela Dinâmica:                                        │
│  Vendas por Vendedor | Vendas por Categoria e Produto      │
│  (segmentação de dados: Vendedor e Categoria)              │
└────────────────────────────────────────────────────────────┘
```

---

## 📚 4. Especificação dos Conteúdos Didáticos e Exercícios (material fonte real)

> Os tópicos (etapas) e passos abaixo reproduzem fielmente o conteúdo do `Aula8ControledeVendascomafunosomase.html`. As imagens referenciadas são (após a implementação) as de `assets/img/excel/a8/`.

### 🟢 Etapa 1 — Criar a Tabela de Produtos
- Crie, em uma aba separada, uma coluna chamada **Produtos** com: `Cadeira | Mesa | Monitor | Mouse | Teclado | Notebook`.
- Esta é uma **tabela de apoio**: não recebe vendas diretamente, mas serve como **fonte da lista suspensa** de produtos usada na Tabela de Dados de Vendas (Etapa 3).
- *Sem captura dedicada no material-fonte para esta etapa.*

### 🟢 Etapa 2 — Criar a Tabela de Vendedores
- Crie uma tabela de apoio com os nomes: `Ana Lima | João Silva | Maria Santos | Pedro Costa`.
- Ela alimenta a **lista suspensa da coluna Vendedor** por validação de dados.
- As tabelas de apoio (Produtos e Vendedores) alimentam as listas suspensas da Tabela de Vendas.
- **Imagem de referência**: `assets/img/excel/a8/image3.png` *(mapeamento posicional — Tabela de Vendedores)*.

### 🟢 Etapa 3 — Criar a Tabela de Dados de Vendas
- **3.1 — O que é Validação de Dados**: cria uma lista suspensa na célula, evitando erros de digitação e nomes/categorias inventados. Caminho: `Dados → Ferramentas de Dados → Validação de Dados → Permitir: Lista`.
- **3.2 — Como acessar a Validação de Dados**: selecione a célula/intervalo → guia `Dados` → "Validação de Dados" → aba "Configurações" → `Permitir: Lista` → no campo "Fonte" selecione a coluna da tabela de apoio correspondente → OK. **Por que usar tabelas de apoio como Fonte?** qualquer produto/vendedor novo passa a aparecer automaticamente na lista, sem editar a validação.
- **3.3 — Criar a lista de Categoria**: a Categoria tem apenas dois valores fixos — na Fonte digite diretamente `Informática;Móveis`. Caminho: `Dados → Ferramentas de Dados → Validação de Dados → Permitir: Lista`.
- **3.4 — Preparar os dados iniciais**: cabeçalhos na linha 1: `Data, Vendedor, Produto, Categoria, Quantidade, Valor Unitário (R$) e Total (R$)`. Nas colunas Vendedor, Produto e Categoria, usar a Validação de Dados em vez de digitar manualmente.
- **3.5 — Inserir dados de exemplo (linhas 2 a 21)**: 16 lançamentos (05/12/2024 → 20/12/2024) combinando João Silva/Maria Santos/Pedro Costa/Ana Lima com Notebook/Mouse/Teclado/Monitor/Cadeira/Mesa em Informática ou Móveis (ex.: `2 × Notebook 3.500 = 7.000`; `5 × Mouse 45 = 225`; ...; `1 × Monitor 890 = 890`).
- **Registro de Vendas**: preencher Vendedor, Produto e Categoria escolhendo os valores nas listas suspensas.
- **3.6 — Converter em Tabela**: selecione `A1:G21` → `Inserir → Tabela` (ou `Ctrl+T`) → marque "Minha tabela tem cabeçalhos" → OK.
- **Imagem de referência**: `assets/img/excel/a8/image2.png` *(mapeamento posicional — Validação de Dados / lista de Categoria)*.

### 🟢 Etapa 4 — Aplicar Estilos de Tabela
- **4.1 — Escolher um estilo**: com a tabela selecionada, em `Design de Tabela`, escolha um estilo (sugestão: Médio 6 ou Médio 15).
- **4.2 — Personalizar opções de estilo**: marque **Linhas em Tiras**, **Primeira Coluna** e **Linha de Totais**.
- **4.3 — Nomear a tabela**: em `Design de Tabela`, no campo "Nome da Tabela", digite **`TabelaVendas`**.

### 🟢 Etapa 5 — Adicionar Fórmulas na Tabela
- **5.1 — Calcular o Total de Venda**: clique em `G2` e digite `=[@Quantidade]*[@[Vlr. Unit. (R$)]]`; Enter — a fórmula é aplicada automaticamente a toda a coluna.
- **5.2 — Adicionar coluna de Comissão**: nova coluna H "Comissão (5%)" com `=[@Total]*0,05`.
- **5.3 — Adicionar coluna de Status**: nova coluna I "Status" com `=SE([@Total]>=1000;"Alta";"Média")`.

### 🟢 Etapa 6 — Consulta Rápida por Vendedor (SOMASE)
- **6.1 — Entendendo a função SOMASE**: `=SOMASE( intervalo_critério ; critério ; intervalo_soma )` — `intervalo_critério`: coluna Vendedor da `TabelaVendas`; `critério`: o valor procurado (nome digitado/escolhido); `intervalo_soma`: coluna Total da `TabelaVendas`.
- **6.2 — Montar o campo de consulta**: escolha duas células livres (ex.: `B2` entrada, `C2` resultado). Em `B2`, aplique Validação de Dados (Lista) com a **Tabela Vendedores** da Etapa 2 como Fonte. Em `C2`, digite `=SOMASE( TabelaVendas[Vendedor] ; B2 ; TabelaVendas[Total] )`; Enter. O valor de `C2` mostra o total vendido pelo vendedor em `B2` — troque o nome e observe o recálculo automático.
- **Por que referenciar `B2` e não digitar o nome direto?** `=SOMASE(TabelaVendas[Vendedor];B2;TabelaVendas[Total])` não muda quando você troca o vendedor — só o conteúdo de `B2` muda. Isso transforma a fórmula em um painel de consulta reutilizável.
- **Imagem de referência**: `assets/img/excel/a8/image5.png` *(mapeamento posicional — campo de consulta SOMASE)*.

### 🟢 Etapa 7 — Classificação e Filtragem Avançadas
- **7.1 — Classificação simples**: clique na seta ao lado de "Total" → Classificar do Maior para o Menor.
- **7.2 — Classificação personalizada (múltiplos níveis)**: `Dados → Classificar`: 1º nível Vendedor (A a Z), 2º nível Data (mais antiga → mais recente), 3º nível Total (maior → menor).
- **7.3 — Filtragem por Categoria**: na seta de "Categoria", desmarque "Móveis" (mostrará somente Informática).
- **7.4 — Filtragem por valor**: na seta de "Total", vá em `Filtros de Número → Maior que...` e digite `500`.
- **7.5 — Filtros múltiplos (pratique combinando)**: Filtro A: Categoria = "Informática"; Filtro B: Vendedor = "João Silva" ou "Maria Santos"; Filtro C: Total > 300.

### 🟢 Etapa 8 — Linha de Totais com Funções
- **8.1 — Ativar Linha de Totais**: em `Design de Tabela`, marque **Linha de Totais**.
- **8.2 — Configurar totalizações**: coluna Quantidade → **Soma**; coluna Total → **Soma**; coluna Comissão → **Soma**; coluna Vendedor → **Contagem**.

### 🟢 Etapa 9 — Criar Tabela Dinâmica
- **9.1 — Inserir Tabela Dinâmica**: clique em qualquer célula da tabela → `Inserir → Tabela Dinâmica` → `Nova Planilha` → OK.
- **9.2 — Primeira análise: Vendas por Vendedor**: arraste **Vendedor → LINHAS**, **Total → VALORES** (configurar como **Soma**), **Data → LINHAS** (logo abaixo de Vendedor).
- **9.3 — Segunda análise: Vendas por Categoria e Produto**: em nova planilha — **LINHAS: Categoria**, depois **Produto**; **VALORES: Soma de Total**; **COLUNAS: Vendedor**.
- **Estrutura de uma Tabela Dinâmica**: os campos são arrastados para as áreas Linhas, Colunas e Valores.
- **9.4 — Formatar as Tabelas Dinâmicas**: aplique um estilo de tabela dinâmica, formate os valores como moeda `R$ 0,00` e adicione **Segmentação de Dados** (Vendedor e Categoria) para filtrar visualmente.
- **Imagem de referência**: `assets/img/excel/a8/image4.png` *(mapeamento posicional — Tabela Dinâmica Vendas por Categoria e Produto)*.

> **🖼️ Imagem de intro/projeto**: `assets/img/excel/a8/image1.png` *(mapeamento posicional — capa/intro do projeto de controle de vendas, posicionada junto ao objetivo do projeto)*.

### ✏️ Exercícios para Praticar (encerramento da aula)
1. Monte a tabela de apoio de **Produtos** e a de **Vendedores** em abas separadas.
2. Aplique **Validação de Dados** (Lista) usando as tabelas de apoio como Fonte nas colunas Vendedor e Produto, e a lista fixa `Informática;Móveis` na Categoria.
3. Preencha a planilha principal com cabeçalhos e dados de exemplo e **converta em Tabela** (`Inserir → Tabela`, `Ctrl+T`), nomeando-a **`TabelaVendas`**.
4. Adicione as **fórmulas calculadas**: Total (`=[@Quantidade]*[@[Vlr. Unit. (R$)]]`), Comissão (`=[@Total]*0,05`) e Status (`=SE([@Total]>=1000;"Alta";"Média")`).
5. Crie o **campo de consulta com SOMASE** (`=SOMASE(TabelaVendas[Vendedor];B2;TabelaVendas[Total])`) e confira o recálculo ao trocar o vendedor.
6. **Classifique**, aplique **filtros** (categoria, total > 500), ative a **Linha de Totais** (Soma/Contagem) e crie/formate as **duas Tabelas Dinâmicas** com **Segmentação de Dados**.

### ✅ Checklist Final (material-fonte)
Confira: (1) as listas suspensas de Vendedor e Produto usam as tabelas de apoio como Fonte; (2) a coluna Categoria valida apenas Informática ou Móveis; (3) as fórmulas de Total, Comissão e Status estão corretas; (4) o campo de consulta com SOMASE atualiza o total ao trocar o vendedor; (5) a Linha de Totais está ativa; (6) as duas tabelas dinâmicas mostram os resultados esperados.

---

## 🧩 5. Especificação do Quiz de Fixação (5 Questões)

> **Regras**: 5 questões de múltipla escolha (4 alternativas), nota mínima de aprovação **7,0 / 10,0** (≥ 4 acertos), validação SHA-256 (`WR-XXXX-XXXX`) e exportação TXT/PDF/WhatsApp/E-mail. Segue o padrão das Aulas 01 a 06.

1. **Questão 1 (SOMASE — consulta reutilizável)**:
   - *Pergunta*: Qual fórmula soma o total vendido pelo vendedor escolhido em `B2`, sem alterar a fórmula quando o nome muda?
   - *Alternativas*:
     - a) `=SOMASE(TabelaVendas[Vendedor];B2;TabelaVendas[Total])` [Correta]
     - b) `=SOMASE("João Silva";TabelaVendas[Total];TabelaVendas[Vendedor])`
     - c) `=SOMA(TabelaVendas[Vendedor];B2;TabelaVendas[Total])`
     - d) `=CONT.SE(TabelaVendas[Vendedor];B2)`
   - *Dica*: Referenciando a célula `B2` no critério, a fórmula vira um painel de consulta — só o conteúdo de `B2` muda, a fórmula não.

2. **Questão 2 (Validação de Dados com tabela de apoio)**:
   - *Pergunta*: Para que a lista suspensa de Produtos incorpore automaticamente novos itens adicionados depois, o campo "Fonte" da Validação de Dados deve apontar para:
   - *Alternativas*:
     - a) A lista digitada manualmente na própria célula
     - b) A tabela de apoio de Produtos [Correta]
     - c) A coluna do Total de vendas
     - d) O intervalo da Linha de Totais
   - *Dica*: Apontar a Fonte para a tabela de apoio faz qualquer item novo aparecer na lista sem editar a validação.

3. **Questão 3 (Converter em Tabela)**:
   - *Pergunta*: Para transformar o intervalo de vendas (A1:G21) em uma Tabela formatável do Excel, o caminho é:
   - *Alternativas*:
     - a) Página Inicial → Formatar como Tabela
     - b) Dados → Tabela de Dados
     - c) Inserir → Tabela (ou Ctrl+T), marcando "Minha tabela tem cabeçalhos" [Correta]
     - d) Exibir → Congelar Painéis
   - *Dica*: O comando de criação de Tabela fica na aba Inserir; o atalho é `Ctrl+T`.

4. **Questão 4 (Coluna calculada do Total)**:
   - *Pergunta*: Qual fórmula deve ficar na coluna Total (G) de uma Tabela estruturada para multiplicar quantidade pelo valor unitário?
   - *Alternativas*:
     - a) `=[@Total]*0,05`
     - b) `=SE([@Total]>=1000;"Alta";"Média")`
     - c) `=[@Quantidade]/[@[Vlr. Unit. (R$)]]`
     - d) `=[@Quantidade]*[@[Vlr. Unit. (R$)]]` [Correta]
   - *Dica*: Usando a notação estruturada `[@Coluna]`, o Excel replica a fórmula para toda a coluna automaticamente.

5. **Questão 5 (Linha de Totais)**:
   - *Pergunta*: Onde se ativa a Linha de Totais de uma Tabela e como se configura a totalização da coluna Vendedor?
   - *Alternativas*:
     - a) Em `Design de Tabela`, marcar Linha de Totais; coluna Vendedor → Contagem [Correta]
     - b) Em `Página Inicial`, clicar em Soma > Total de Linha
     - c) Em `Fórmulas → AutoSoma`, coluna Vendedor → Soma
     - d) Em `Dados → Classificar`, coluna Vendedor → Média
   - *Dica*: A aba de configuração da Tabela é `Design de Tabela`; para textos usuais usa-se Contagem, para valores monetários Soma.

### 5.1 Gabarito Oficial (Índices 0-based e 1-based)
| Questão | Resposta Correta | Índice (0-based) | Descrição |
| :--- | :--- | :--- | :--- |
| 1 | A — SOMASE com referência à célula B2 | `0` | Consulta reutilizável por vendedor |
| 2 | B — Tabela de apoio como Fonte | `1` | Lista suspensa alimentada pela tabela de apoio |
| 3 | C — Inserir → Tabela / Ctrl+T | `2` | Conversão do intervalo em Tabela |
| 4 | D — `[@Quantidade]*[@[Vlr. Unit. (R$)]]` | `3` | Coluna calculada do Total |
| 5 | A — Design de Tabela → Linha de Totais / Contagem | `0` | Linha de Totais e totalização |

> **Gabarito mapeado em array JS**: `const GABARITO_L8 = [0, 1, 2, 3, 0];`

---

## 🎨 6. Ergonomia e Regras de Interface

- **Botão de PDF na Barra Superior / Início da Aula**: Botão `📑 Baixar Apostila Didática em PDF` no topo, chamando `window.PDFLessons.downloadLessonPDF('excel', 8)`.
- **Imagens do Passo a Passo**: As **5 imagens** em `assets/img/excel/a8/image1..5.png` são exibidas nas respectivas etapas, com `loading="lazy"` e `width/height` definidos para evitar layout shift; aplicar `border-radius` e sombra leve para integração com o cartão de leitura.
- **Formatação de Atalhos/Caminhos de Menu**: Menus (`Inserir → Tabela`, `Dados → Ferramentas de Dados → Validação de Dados`, `Design de Tabela`, `Inserir → Tabela Dinâmica`) destacados em negrito/monoespaçado, como nas aulas anteriores.
- **Tabelas de Dados**: Tabela de vendas, tabelas de apoio e Tabela Dinâmica exibidas no formato estilo Excel (cabeçalho verde Excel, células com bordas, valores monetários à direita).
- **Nota Mínima do Quiz**: **7,0 / 10,0** (acerto de ao menos 4 de 5 questões) para aprovação e liberação do comprovante.
- **Validação Anti-Fraude**: Geração de Hash SHA-256 e botões de envio via WhatsApp (`19 99130-6907`) e E-mail (`okcomputer.use.linux@gmail.com`).
- **Otimização de Impressão**: Regras `@media print` com `page-break-inside: avoid; break-inside: avoid;` para que a grade de vendas, o simulador Sales Lab, as tabelas e as imagens não fiquem cortadas entre páginas.

---

## 🗂️ 7. Plano de Implementação (Fase 3)

> **Nota**: A Fase 3 (Implementar) da Aula 08 **foi concluída e validada** em 06/09/2026. A lista abaixo registra o escopo executado em `modules/excel/index.html` e `assets/js/pdf-lessons.js`, com validação em Chrome headless (28/28 checks verdes).

1. **Hub (`modules/excel/index.html`)**:
   - Alterar a AULA 08 de `🔒 Em Construção` para `🔓 Aula Liberada (Senha xh008)`.
   - Vincular o card ao `promptLessonPassword(8, 'Controle de Vendas com SOMASE')`.
2. **Tela da Aula 08** (`#screen-lesson-8`):
   - Clonar a estrutura do `#screen-lesson-7` (header, gamify progress, cartão de leitura, abas `topic-tabs-bar`, painel de fixação).
   - Implementar as 9 etapas didáticas conforme a Seção 1 e os conteúdos da Seção 4, exibindo as 5 imagens de `assets/img/excel/a8/`.
   - Renomear IDs: `l8-phase-X`, `tab-l8-X`, `btn-read-l8-X`, `gamify-label-8`, `gamify-fill-8`, `gamify-badge-box-8`.
3. **Simulador Sales Lab**: Implementar conforme a Seção 3 com funções `renderSalesGrid()`, `updateCalculatedColumns()`, `applyVendedorFilter()`, `runSomaseQuery()`, `sortSalesDesc()`, `toggleTotalsRow()`, `renderSalesPivot()`.
4. **Quiz**: Adicionar `GABARITO_L8 = [0, 1, 2, 3, 0]`, `QUESTOES_L8`, funções `selectFixOption(8, ...)` e `calcFixation(8)` reutilizando o motor `quiz-engine.js`.
5. **Gerador de PDF (`assets/js/pdf-lessons.js`)**:
   - Adicionar o bloco do Excel Aula 08 (`lessonNum: 8`) com o conteúdo das 9 etapas e o exercício completo (tabelas de apoio + TabelaVendas + campo SOMASE + Tabela Dinâmica), incluindo as imagens ilustrativas em `assets/img/excel/a8/`.
   - Registrar `8` em `moduleLessonTitles.excel`.
6. **Tríade de Documentação**: Atualizar `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` (Registro Cronológico) após a implementação.

---

## 📚 8. Referências Didáticas e Acadêmicas

1. **Walkenbach, J. (2015)**. *Excel 2016 Bible*. John Wiley & Sons.
2. **Alexander, M., & Kusleika, R. (2019)**. *Excel 2019 Bible / Excel Analysis*. Wiley.
3. **Microsoft Learn (2024)**. *Documentação Oficial de Tabelas Dinâmicas, Validação de Dados e Função SOMASE do Microsoft Excel*. Microsoft Press.
4. **W3C (2023)**. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.

---

## 📌 ANEXO A — STATUS DA AUDITORIA E ESPECIFICAÇÃO (Fases 0-2 concluídas)
- **Data do registro:** 06/09/2026
- **Estado geral:** ✅ **Implementada e validada (Fases 0-3 concluídas)** — Hub `xh008`, tela `#screen-lesson-8` (9 etapas), Sales Lab (16 vendas), Quiz 5 questões com SHA-256 e apostila PDF (10 seções) ativos; validação em Chrome headless 28/28 checks verdes.

### Auditoria da realidade (Fase 0)
- ✅ Material-fonte localizado em `AulaOrigem/excel/Aula-8-Controle de Vendas com a função somase/` (`Aula8ControledeVendascomafunosomase.html`, 46 KB, + `images/image1..5.png`).
- ✅ Conteúdo real extraído: 9 etapas didáticas; sem "telas fantasmas" — todas as fórmulas, caminhos e dados reproduzem o material-fonte.
- ✅ Discrepância master registrada: catálogo cita `SOMASES/CONT.SE/CONT.SES/MÉDIASE`; o fonte cobre **somente SOMASE** — SDD espelha o fonte (decisão confirmada pelo professor).

### Mapeamento posicional das imagens (a validar visualmente na implementação)
| Arquivo de origem (fonte) | Arquivo alvo (módulo) | Etapa (por posição no HTML) | Observação |
| :--- | :--- | :--- | :--- |
| `images/image1.png` | `assets/img/excel/a8/image1.png` | Intro/Objetivo do Projeto | Logo após o objetivo do projeto |
| `images/image3.png` | `assets/img/excel/a8/image3.png` | Etapa 2 — Tabela de Vendedores | Logo após a lista de vendedores |
| `images/image2.png` | `assets/img/excel/a8/image2.png` | Etapa 3 — Validação de Dados (lista Categoria) | Logo após a subseção 3.3 |
| `images/image5.png` | `assets/img/excel/a8/image5.png` | Etapa 6 — Campo de Consulta (SOMASE) | Logo após a subseção 6.2 |
| `images/image4.png` | `assets/img/excel/a8/image4.png` | Etapa 9 — Tabela Dinâmica (por Categoria e Produto) | Logo após a subseção 9.3 |

> **⚠️ Nota**: As imagens do material-fonte **não possuem texto alternativo (`alt`)**; o mapeamento acima foi inferido pela **posição no HTML-fonte** (contexto anterior/posterior a cada `<img>`). Antes de publicar, validar visualmente cada captura na implementação (Fase 3) e ajustar legendas/`alt` se necessário.

### Pendências (resolvidas na Fase 3 — 06/09/2026)
1. **Extensão futura (não faz parte da Aula 08, conforme material-fonte)**: `SOMASES`, `CONT.SE`, `CONT.SES` e `MÉDIASE` citadas no catálogo master.
2. **Aula 08 do catálogo master**: ✅ status atualizado para "✅ Implementada e validada (Fase 3 concluída)" após a validação.
3. **Imagens**: ✅ 5 PNGs copiados para `assets/img/excel/a8/image1..5.png` (MD5 idêntico ao fonte) e mapeamento posicional validado (image1→Etapa 1, image3→Etapa 2, image2→Etapa 3, image5→Etapa 6, image4→Etapa 9).
4. ✅ Aula 08 marcada na tríade (`ROADMAP.md`, `INDEX.md`, `DOCUMENTATION.md`) após implementação e validação.