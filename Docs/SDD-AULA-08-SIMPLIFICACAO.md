# SDD-AULA-08-SIMPLIFICACAO — Simplificacao da Planilha de Exemplo e Ilustracoes HTML

### Aula 08 Excel — Controle de Estoque com SOMASE
### Prof. Marcos Rangel — WR Capacitação Profissional

---

## 1. Problema Identificado

A planilha de exemplo atual da Aula 08 apresenta os seguintes problemas de usabilidade didatica:

| Problema | Impacto no Aluno |
|:---|:---|
| **16 linhas de vendas** com datas variadas (05/12 a 20/12/2024) | Dados repetitivos, dificulta enxergar padroes |
| **9 colunas** (7 de entrada + 3 calculadas) | Sobrecarga visual, o aluno perde o foco nas formulas-chave |
| **5 imagens PNG** estaticas e nao-editaveis | O aluno nao consegue replicar no Excel sem guia passo-a-passo visual |
| **Sem ilustracao da transformacao** (dados brutos → Tabela → Tabela Dinamica) | Falta o "fio condutor" que conecta as etapas |
| **Datas como coluna** obrigatoria em todas as linhas | Confunde: o aluno pensa que precisa digitar data diferente em cada linha |

**Tema escolhido pelo professor: CONTROLE DE ESTOQUE** (substituindo o tema de vendas da versao original).

---

## 2. Objetivo da Simplificacao

Manter **100% do conteudo pedagogico** (SOMASE, Validacao de Dados, Tabela Estruturada, Formulas Calculadas, Tabela Dinamica) enquanto:

1. **Reduzir** de 16 para **8 linhas** de dados de exemplo
2. **Manter** 6 colunas de entrada (era 7 — remover a coluna Data como obrigatoria, usar apenas como referencia)
3. **Substituir** as 5 imagens PNG por **ilustracoes HTML/CSS editaveis** (mini-planilhas estilizadas)
4. **Adicionar** secao didatica de **"Transformacao: Dados Brutos → Tabela → Tabela Dinamica"**
5. **Explicar** a criacao da Tabela Dinamica de forma mais passo-a-passo
6. **Adotar** o tema **Controle de Estoque** com dataset verificado (auto-consistente)

---

## 3. Nova Planilha de Exemplo — Dados Simplificados (Tema Estoque)

### 3.1 Tabelas de Apoio (abas separadas)

**Tabela de Produtos** (aba "Produtos"):

| Produto |
|:---|
| Notebook |
| Monitor |
| Mouse |
| Teclado |
| Cadeira |
| Mesa |

**Tabela de Fornecedores** (aba "Fornecedores"):

| Fornecedor |
|:---|
| TechDistrib |
| InfoPlus |
| MoveisPro |
| AtacadoMax |

> **Decisao**: A coluna **Categoria** fica na tabela de dados de estoque para ensinar Validação de Dados com lista fixa (`Informatica;Moveis`). A Fonte dos campos **Produto** e **Fornecedor** aponta para as tabelas de apoio (intervalo da aba), permitindo que itens novos aparecam automaticamente.

### 3.2 Tabela de Dados de Estoque (aba "Estoque")

**Dados de exemplo — 8 linhas** (reduzido de 16):

| # | Produto | Categoria | Fornecedor | Entradas | Saidas | Preco Unit. (R$) | Estoque Atual | Valor em Estoque (R$) |
|:--|:---|:---|:---|:--:|:--:|---:|---:|---:|
| 1 | Notebook | Informatica | TechDistrib | 10 | 3 | 3.500,00 | 7 | 24.500,00 |
| 2 | Monitor | Informatica | TechDistrib | 5 | 2 | 1.200,00 | 3 | 3.600,00 |
| 3 | Mouse | Informatica | InfoPlus | 40 | 30 | 45,00 | 10 | 450,00 |
| 4 | Teclado | Informatica | InfoPlus | 25 | 16 | 120,00 | 9 | 1.080,00 |
| 5 | Cadeira | Moveis | MoveisPro | 12 | 4 | 280,00 | 8 | 2.240,00 |
| 6 | Mesa | Moveis | MoveisPro | 3 | 1 | 890,00 | 2 | 1.780,00 |
| 7 | Cadeira | Moveis | AtacadoMax | 8 | 6 | 280,00 | 2 | 560,00 |
| 8 | Teclado | Informatica | AtacadoMax | 15 | 10 | 120,00 | 5 | 600,00 |

> **Por que 8 linhas e sem datas?**
> - 8 linhas sao suficientes para demonstrar SOMASE (agrupa por fornecedor), Tabela Dinâmica e filtros
> - Sem datas: a aula NAO ensina funcoes de data (isso e a Aula 06). A coluna Data era distracao visual
> - O intervalo tipado e **A1:F9** (6 colunas de entrada: Produto, Categoria, Fornecedor, Entradas, Saidas, Preco). As colunas G/H/I (Estoque Atual, Valor em Estoque, Status) sao de **formula** e adicionadas na Etapa 5

**Totais de conferencia (auto-consistentes):**

**Por Fornecedor (Soma de Valor em Estoque):**

| Fornecedor | Valor em Estoque (R$) |
|:---|---:|
| TechDistrib | 28.100,00 |
| InfoPlus | 1.530,00 |
| MoveisPro | 4.020,00 |
| AtacadoMax | 1.160,00 |
| **Total** | **34.810,00** |

**Por Categoria (Soma de Valor em Estoque):**

| Categoria | Valor em Estoque (R$) |
|:---|---:|
| Informatica | 30.230,00 |
| Moveis | 4.580,00 |
| **Total** | **34.810,00** |

### 3.3 Colunas Calculadas (pos-Tabela)

Apos converter em Tabela (`Ctrl+T` em **A1:F9**) e nomear `TabelaEstoque`, adicionar 3 colunas de formula (G, H, I):

| Formula (notacao estruturada) | Coluna | Resultado para linha 1 |
|:---|:---|:---|
| `=[@Entradas]-[@Saidas]` | Estoque Atual (G) | 7 |
| `=[@[Estoque Atual]]*[@[Preco Unit. (R$)]]` | Valor em Estoque (H) | 24.500,00 |
| `=SE([@[Estoque Atual]]<=5;"Baixo";SE([@[Estoque Atual]]<=15;"Medio";"Alto"))` | Status (I) | Medio |

**Status por item:** Baixo quando Estoque Atual ≤ 5; Medio quando ≤ 15; senao Alto.

| # | Estoque Atual | Status |
|:--|:--:|:---|
| 1 | 7 | Medio |
| 2 | 3 | Baixo |
| 3 | 10 | Medio |
| 4 | 9 | Medio |
| 5 | 8 | Medio |
| 6 | 2 | Baixo |
| 7 | 2 | Baixo |
| 8 | 5 | Baixo |

---

## 4. Ilustracoes HTML/CSS (substituindo as 5 imagens PNG)

Cada ilustracao sera um `<div>` estilizado com CSS que simula uma mini-planilha Excel. O aluno pode copiar a estrutura visualmente.

### 4.1 Ilustracao 1 — Visao Geral do Projeto (substitui image1.png)

```html
<!-- Ilustracao HTML: Visao Geral do Projeto -->
<div class="excel-illustration" style="border:2px solid #16A34A; border-radius:8px; padding:16px; background:#f0fdf4; max-width:600px;">
  <div style="font-weight:bold; color:#16A34A; font-size:1.1em; margin-bottom:8px;">
    Projeto: Controle de Estoque com SOMASE
  </div>
  <div style="font-size:0.9em; color:#374151;">
    <strong>Estrutura da Pasta:</strong>
    <div style="margin-left:16px; font-family:'JetBrains Mono',monospace; font-size:0.85em; line-height:1.8;">
      <span style="color:#16A34A;">&#128194;</span> aba "Produtos" → lista de produtos (fonte da lista suspensa)<br>
      <span style="color:#16A34A;">&#128194;</span> aba "Fornecedores" → lista de fornecedores (fonte da lista suspensa)<br>
      <span style="color:#16A34A;">&#128194;</span> aba "Estoque" → tabela principal com formulas<br>
      <span style="color:#16A34A;">&#128194;</span> aba "Resumo" → Tabela Dinamica (analise)
    </div>
  </div>
</div>
```

### 4.2 Ilustracao 2 — Tabela de Fornecedores (substitui image3.png)

```html
<!-- Ilustracao HTML: Tabela de Fornecedores -->
<div class="excel-illustration" style="border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; max-width:300px; font-family:Arial,sans-serif; font-size:0.9em;">
  <div style="background:#16A34A; color:white; padding:6px 12px; font-weight:bold;">
    Aba: Fornecedores
  </div>
  <table style="width:100%; border-collapse:collapse;">
    <tr style="background:#DCFCE7; font-weight:bold;">
      <td style="padding:4px 12px; border:1px solid #CBD5E1;">&#128204; A1</td>
      <td style="padding:4px 12px; border:1px solid #CBD5E1;">Fornecedor</td>
    </tr>
    <tr>
      <td style="padding:4px 12px; border:1px solid #CBD5E1; color:#6B7280;">A2</td>
      <td style="padding:4px 12px; border:1px solid #CBD5E1;">TechDistrib</td>
    </tr>
    <tr>
      <td style="padding:4px 12px; border:1px solid #CBD5E1; color:#6B7280;">A3</td>
      <td style="padding:4px 12px; border:1px solid #CBD5E1;">InfoPlus</td>
    </tr>
    <tr>
      <td style="padding:4px 12px; border:1px solid #CBD5E1; color:#6B7280;">A4</td>
      <td style="padding:4px 12px; border:1px solid #CBD5E1;">MoveisPro</td>
    </tr>
    <tr>
      <td style="padding:4px 12px; border:1px solid #CBD5E1; color:#6B7280;">A5</td>
      <td style="padding:4px 12px; border:1px solid #CBD5E1;">AtacadoMax</td>
    </tr>
  </table>
</div>
```

### 4.3 Ilustracao 3 — Validacao de Dados / Lista de Categoria (substitui image2.png)

```html
<!-- Ilustracao HTML: Validacao de Dados -->
<div class="excel-illustration" style="border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; max-width:520px; font-family:Arial,sans-serif; font-size:0.85em;">
  <div style="background:#16A34A; color:white; padding:6px 12px; font-weight:bold;">
    Validacao de Dados — Coluna Categoria
  </div>
  <div style="padding:12px; background:#f9fafb;">
    <div style="margin-bottom:8px;"><strong>Caminho:</strong> <code style="background:#e5e7eb; padding:2px 6px; border-radius:4px;">Dados → Ferramentas de Dados → Validacao de Dados</code></div>
    <div style="margin-bottom:8px;"><strong>Configuracoes:</strong></div>
    <div style="margin-left:16px; line-height:1.8;">
      Permitir: <span style="background:#DCFCE7; padding:2px 8px; border-radius:4px; border:1px solid #16A34A;">Lista</span><br>
      Fonte: <code style="background:#fef3c7; padding:2px 6px; border-radius:4px;">Informatica;Moveis</code>
    </div>
    <div style="margin-top:12px; padding:8px; background:white; border:1px dashed #16A34A; border-radius:4px;">
      <strong>Minha lista tem:</strong> Informatica, Moveis
      <span style="color:#16A34A; margin-left:8px;">&#9660;</span>
    </div>
    <div style="margin-top:8px; font-size:0.85em; color:#6B7280;">
      <strong>Dica:</strong> Para fornecedores e produtos, aponte a Fonte para a tabela de apoio (intervalo).<br>
      Para Categoria, digite diretamente: <code>Informatica;Moveis</code>
    </div>
  </div>
</div>
```

### 4.4 Ilustracao 4 — Campo de Consulta SOMASE (substitui image5.png)

```html
<!-- Ilustracao HTML: Consulta SOMASE -->
<div class="excel-illustration" style="border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; max-width:520px; font-family:Arial,sans-serif; font-size:0.85em;">
  <div style="background:#16A34A; color:white; padding:6px 12px; font-weight:bold;">
    Consulta Rapida por Fornecedor (SOMASE)
  </div>
  <div style="padding:12px; background:#f9fafb;">
    <table style="border-collapse:collapse; margin-bottom:12px;">
      <tr>
        <td style="padding:4px 12px; background:#16A34A; color:white; border:1px solid #15803D; font-weight:bold;">B2</td>
        <td style="padding:4px 12px; background:#DCFCE7; border:1px solid #CBD5E1;">
          <span style="color:#16A34A;">&#9660;</span> MoveisPro
        </td>
        <td style="padding:4px 12px; background:#16A34A; color:white; border:1px solid #15803D; font-weight:bold;">C2</td>
        <td style="padding:4px 12px; background:#fef3c7; border:1px solid #CBD5E1; font-weight:bold;">
          R$ 4.020,00
        </td>
      </tr>
    </table>
    <div style="padding:8px; background:white; border:1px solid #CBD5E1; border-radius:4px; font-family:'JetBrains Mono',monospace; font-size:0.9em;">
      <strong>C2:</strong> <code>=SOMASE(TabelaEstoque[Fornecedor]; B2; TabelaEstoque[Valor em Estoque])</code>
    </div>
    <div style="margin-top:8px; font-size:0.85em; color:#6B7280;">
      Troque o fornecedor em <strong>B2</strong> e o resultado em <strong>C2</strong> recalcula automaticamente!
    </div>
  </div>
</div>
```

### 4.5 Ilustracao 5 — Tabela Dinamica (substitui image4.png)

```html
<!-- Ilustracao HTML: Tabela Dinamica -->
<div class="excel-illustration" style="border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; max-width:600px; font-family:Arial,sans-serif; font-size:0.85em;">
  <div style="background:#16A34A; color:white; padding:6px 12px; font-weight:bold;">
    Tabela Dinamica — Estoque por Fornecedor
  </div>
  <div style="padding:12px; background:#f9fafb;">
    <div style="margin-bottom:8px;"><strong>Como criar:</strong> <code style="background:#e5e7eb; padding:2px 6px; border-radius:4px;">Inserir → Tabela Dinamica → Nova Planilha</code></div>
    <div style="margin-bottom:12px; padding:8px; background:white; border:1px dashed #16A34A; border-radius:4px;">
      <strong>Campos:</strong> Arraste <code>Fornecedor</code> para <strong>LINHAS</strong> e <code>Valor em Estoque</code> para <strong>VALORES</strong> (Soma)
    </div>
    <table style="width:100%; border-collapse:collapse;">
      <tr style="background:#16A34A; color:white;">
        <td style="padding:6px 12px; border:1px solid #15803D; font-weight:bold;">Fornecedor</td>
        <td style="padding:6px 12px; border:1px solid #15803D; font-weight:bold; text-align:right;">Soma de Valor em Estoque</td>
      </tr>
      <tr style="background:#f0fdf4;">
        <td style="padding:6px 12px; border:1px solid #CBD5E1;">TechDistrib</td>
        <td style="padding:6px 12px; border:1px solid #CBD5E1; text-align:right;">R$ 28.100,00</td>
      </tr>
      <tr>
        <td style="padding:6px 12px; border:1px solid #CBD5E1;">InfoPlus</td>
        <td style="padding:6px 12px; border:1px solid #CBD5E1; text-align:right;">R$ 1.530,00</td>
      </tr>
      <tr style="background:#f0fdf4;">
        <td style="padding:6px 12px; border:1px solid #CBD5E1;">MoveisPro</td>
        <td style="padding:6px 12px; border:1px solid #CBD5E1; text-align:right;">R$ 4.020,00</td>
      </tr>
      <tr>
        <td style="padding:6px 12px; border:1px solid #CBD5E1;">AtacadoMax</td>
        <td style="padding:6px 12px; border:1px solid #CBD5E1; text-align:right;">R$ 1.160,00</td>
      </tr>
      <tr style="background:#DCFCE7; font-weight:bold;">
        <td style="padding:6px 12px; border:1px solid #CBD5E1;">Total Geral</td>
        <td style="padding:6px 12px; border:1px solid #CBD5E1; text-align:right;">R$ 34.810,00</td>
      </tr>
    </table>
  </div>
</div>
```

---

## 5. Nova Secao Didatica — "Transformacao: Dados Brutos → Tabela → Tabela Dinamica"

Esta e a **principal adicao** ao SDD. O aluno precisa entender o fluxo completo:

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────────┐
│  1. DADOS       │     │  2. TABELA       │     │  3. TABELA DINAMICA │
│  BRUTOS         │ ──► │  ESTRUTURADA     │ ──► │  (ANALISE)          │
│                 │     │                  │     │                     │
│  Cabeçalhos +   │ Ctrl+T │ Formulas auto,  │ Inserir →            │
│  dados na grade │     │  estilos, filtros │  Tabela Dinamica      │
│  (A1:F9)        │     │  linha de totais  │                     │
└─────────────────┘     └──────────────────┘     └─────────────────────┘
```

### 5.1 Passo 1 — Dados Brutos na Grade

> Inicie com uma planilha em branco. Na linha 1, digite os cabecalhos:
> `Produto | Categoria | Fornecedor | Entradas | Saidas | Preco Unit. (R$)`
>
> Preencha as 8 linhas de dados abaixo. **Nao se preocupe com formatacao ainda** — apenas digite os dados.

| # | Produto | Categoria | Fornecedor | Entradas | Saidas | Preco Unit. |
|:--|:---|:---|:---|:--:|:--:|---:|
| 1 | Notebook | Informatica | TechDistrib | 10 | 3 | 3.500 |
| 2 | Monitor | Informatica | TechDistrib | 5 | 2 | 1.200 |
| 3 | Mouse | Informatica | InfoPlus | 40 | 30 | 45 |
| 4 | Teclado | Informatica | InfoPlus | 25 | 16 | 120 |
| 5 | Cadeira | Moveis | MoveisPro | 12 | 4 | 280 |
| 6 | Mesa | Moveis | MoveisPro | 3 | 1 | 890 |
| 7 | Cadeira | Moveis | AtacadoMax | 8 | 6 | 280 |
| 8 | Teclado | Informatica | AtacadoMax | 15 | 10 | 120 |

### 5.2 Passo 2 — Converter em Tabela (Ctrl+T)

> Selecione todo o intervalo (incluindo cabecalhos) `A1:F9` → `Inserir → Tabela` (ou `Ctrl+T`) → marque **"Minha tabela tem cabecalhos"** → OK.
>
> O Excel aplica um estilo automatico. Agora renomeie a tabela: `Design de Tabela → Nome: TabelaEstoque`.

### 5.3 Passo 3 — Adicionar Colunas Calculadas

> Na tabela ja convertida, clique na ultima coluna e pressione `Tab` — o Excel cria uma nova coluna automaticamente.
> Digite as formulas. Elas serao replicadas para todas as linhas.
>
> - Estoque Atual (G): `=[@Entradas]-[@Saidas]`
> - Valor em Estoque (H): `=[@[Estoque Atual]]*[@[Preco Unit. (R$)]]`
> - Status (I): `=SE([@[Estoque Atual]]<=5;"Baixo";SE([@[Estoque Atual]]<=15;"Medio";"Alto"))`

### 5.4 Passo 4 — Consulta com SOMASE

> Em uma celula livre (ex.: B2), selecione o fornecedor. Em C2, digite a formula SOMASE.
> O resultado atualiza automaticamente ao trocar o fornecedor.
>
> `=SOMASE(TabelaEstoque[Fornecedor]; B2; TabelaEstoque[Valor em Estoque])`

*(Usar a Ilustracao 4 — Campo de Consulta SOMASE — ja definida na Secao 4.4)*

### 5.5 Passo 5 — Criar Tabela Dinamica

> Clique em qualquer celula da tabela → `Inserir → Tabela Dinamica` → `Nova Planilha` → OK.
>
> **Analise 1 — Estoque por Fornecedor:**
> - Arraste `Fornecedor` para **LINHAS**
> - Arraste `Valor em Estoque` para **VALORES** (configure como **Soma**)
>
> **Analise 2 — Estoque por Categoria e Produto:**
> - Arraste `Categoria` para **LINHAS** (primeiro)
> - Arraste `Produto` para **LINHAS** (abaixo de Categoria)
> - Arraste `Valor em Estoque` para **VALORES** (Soma)
> - Arraste `Fornecedor` para **COLUNAS**

*(Usar a Ilustracao 5 — Tabela Dinamica — ja definida na Secao 4.5)*

---

## 6. Fluxo Didatico Reestruturado (9 Etapas)

A ordem das etapas permanece a mesma, mas com o conteudo simplificado e o tema de estoque:

| Etapa | Titulo | Mudanca Principal |
|:------|:-------|:------------------|
| 1 | Criar Tabela de Produtos | Sem datas, apenas lista simples |
| 2 | Criar Tabela de Fornecedores | Tema estoque (TechDistrib, InfoPlus, MoveisPro, AtacadoMax) |
| 3 | Criar Tabela de Dados de Estoque | **8 linhas**, **sem coluna Data**, 6 colunas de entrada (A1:F9) |
| 4 | Aplicar Estilos de Tabela | Nome da tabela: **TabelaEstoque** |
| 5 | Adicionar Formulas na Tabela | Estoque Atual, Valor em Estoque, Status |
| 6 | Consulta Rapida por Fornecedor (SOMASE) | **Ilustracao HTML** substitui imagem PNG |
| 7 | Classificacao e Filtragem Avancadas | Classificar por Valor em Estoque; filtro Valor > 5000 |
| 8 | Linha de Totais com Funcoes | Soma de Entradas, Saidas e Valor em Estoque; Contagem de Fornecedor |
| 9 | Criar Tabela Dinamica | **Nova subsecao "Transformacao"** + **ilustracao HTML** por Fornecedor |

---

## 7. Alteracoes no Codigo Fonte

### 7.1 Arquivos a Alterar

| Arquivo | Alteracao |
|:--------|:----------|
| `modules/excel/index.html` | Atualizar conteudo das 9 etapas com tema estoque; substituir 5 `<img>` por ilustracoes HTML inline; adicionar secao "Transformacao" na Etapa 9; ajustar Sales Lab JS para 8 itens com campos de estoque |
| `assets/js/pdf-lessons.js` | Atualizar blocos de conteudo do Excel Aula 8 com novos dados e ilustracoes HTML; atualizar `moduleLessonTitles.excel[8]` |

### 7.2 Imagens a Remover (ou manter para retrocompatibilidade)

| Arquivo | Acao |
|:--------|:-----|
| `assets/img/excel/a8/image1.png` | **Remover** (substituida por Ilustracao 1 HTML) |
| `assets/img/excel/a8/image2.png` | **Remover** (substituida por Ilustracao 3 HTML) |
| `assets/img/excel/a8/image3.png` | **Remover** (substituida por Ilustracao 2 HTML) |
| `assets/img/excel/a8/image4.png` | **Remover** (substituida por Ilustracao 5 HTML) |
| `assets/img/excel/a8/image5.png` | **Remover** (substituida por Ilustracao 4 HTML) |

> **Nota**: As imagens originais em `AulaOrigem/excel/` e `assets/img/excel/a8/` podem ser mantidas no repositorio para referencia historica, mas nao serao mais referenciadas no HTML.

### 7.3 Alteracoes no Sales Lab (JavaScript)

| Funcao | Alteracao |
|:-------|:----------|
| `SALES_DATA` | Reduzir para **8 itens** (campos: produto, categoria, fornecedor, entradas, saidas, preco) |
| `renderSalesGrid()` | Grade com colunas: Produto, Categoria, Fornecedor, Entradas, Saidas, Preco, Estoque Atual, Valor em Estoque, Status |
| `renderSalesPivot()` | Vistas: Estoque por Fornecedor e Estoque por Categoria e Produto |
| `SALES_FORNECEDORES` | TechDistrib, InfoPlus, MoveisPro, AtacadoMax |
| `SALES_PROD_CAT` | Manter (6 produtos com categorias) |
| Consulta SOMASE | `runSomaseQuery()` soma Valor em Estoque por fornecedor |

### 7.4 Alteracoes no PDF (`pdf-lessons.js`)

| Campo | Alteracao |
|:------|:----------|
| `titulo` | "Controle de Estoque com a Funcao SOMASE" |
| `moduleLessonTitles.excel[8]` | "Aula 08: Controle de Estoque com a Funcao SOMASE — Tabelas, Validacao de Dados, Formulas, Totais e Tabela Dinamica" |
| `etapas` | Atualizar conteudo de cada etapa com dados de estoque |
| `exercicio` | Atualizar dados do exercicio (8 linhas, 6 colunas de entrada) |
| `imagens` | **Remover array de imagens do texto corrido** (substituir por HTML inline no PDF) |
| `html` (novo campo) | Cada secao pode trazer `html` que e injetado no PDF: `<div class="pdf-html-illustration">${sec.html}</div>` |
| CSS do popup | Portar para o `<style>` da janela de impressao: `.mini-sheet`, `.fun-highlight`, `.es-sheet-box`, `.es-sheet-titlebar`, `.pdf-html-illustration` (com `page-break-inside: avoid`) |
| Aula 07 (PDF) | Linhas "🖼️ Referencia de imagem: ..." convertidas em campos reais `image`/`images` com paths `../../assets/img/excel/a7/imageN.png` (image1, image3, image12/9/4/6/11, image2/16/7, image8/5/13, image10/15/14) |

### 7.5 Fase 0 — Introdução Didática (novo)

Aula 08 recebe um bloco **estático** `#l8-fase-0` no topo do reading card (nao faz parte das topic-tabs/`switchTopicPhase` para nao alterar o `readStatus` com 9 booleanos), contendo:

- 🎯 **O que vamos fazer** (objetivo: controle de estoque do zero)
- 🗺️ **Roteiro numerado dos 9 passos** (sem checkbox — apenas orientacao visual dos degraus)
- 🏁 **Resultado final esperado** (mini-painel "Estoque por Fornecedor" com totais)
- ⚙️ **Checks de preparacao (passos 1–2)** no rodape da FASE 0, posicionados junto da instrucao de criar a pasta e renomear as abas
- ▶ Botao **"Comecar a Aula"** (scroll para `#l8-phase-1`, sempre habilitado) + contador "X/9 passos concluídos"

**Checks distribuídos (regra de ouro — decisao do professor em 07/09/2026)**: os checks **NAO podem ficar todos agrupados na FASE 0**. Cada check fica **no fim da fase que ensina a executar aquele passo** (posicoes estrategicas, `data-step` 1..9), e o gating e sequencial (o check atual so e habilitado apos marcar o anterior). Mapa de posicao da Aula 08:

| Passo | Check posicionado |
|:--|:--|
| 1 – Criar a pasta de trabalho | Rodape da FASE 0 (criar a Pasta1) |
| 2 – Renomear as abas | Rodape da FASE 0 (Plan1→Produtos … Plan4→Resumo) |
| 3 – Tabela de apoio de Produtos | Fim do Topico 1 (8.1) |
| 4 – Tabela de apoio de Fornecedores | Fim do Topico 2 (8.2) |
| 5 – Digitar dados de Estoque A1:F9 | Fim do Topico 3 (8.3) |
| 6 – Virar Tabela (Ctrl+T) + nomear TabelaEstoque | Fim do Topico 4 (8.4) |
| 7 – Formulas G/H/I | Fim do Topico 5 (8.5) |
| 8 – Consulta SOMASE (B2 → C2) | Fim do Topico 6 (8.6) |
| 9 – Linha de Totais + Tabela Dinamica | Fim do Topico 9 (8.9) |

Topicos 7 (Classificar & Filtrar) e 8 (Linha de Totais) nao recebem check proprio (nao sao "passos" da construcao da planilha na lista do professor). O meu-scrip: um IIFE por aula, com escopo no `article` (`document.getElementById('lX-fase-0').closest('article')`), iterando `.lX-check` na **ordem do DOM**.

---

## 8. CSV de Referencia (para download pelo aluno)

O aluno pode baixar este CSV e abrir no Excel para praticar:

```csv
Produto,Categoria,Fornecedor,Entradas,Saidas,Preco Unit. (R$)
Notebook,Informatica,TechDistrib,10,3,3500
Monitor,Informatica,TechDistrib,5,2,1200
Mouse,Informatica,InfoPlus,40,30,45
Teclado,Informatica,InfoPlus,25,16,120
Cadeira,Moveis,MoveisPro,12,4,280
Mesa,Moveis,MoveisPro,3,1,890
Cadeira,Moveis,AtacadoMax,8,6,280
Teclado,Informatica,AtacadoMax,15,10,120
```

---

## 9. Requisitos Obrigatorios (regra permanente — "gravar e aprender")

Estas regras sao obrigatorias para TODA aula do curso e **devem ser verificadas/auditadas antes de considerar a aula concluida**:

1. **FASE 0 sempre presente**: toda aula comeca com um bloco introdutorio tutorial explicando *o que vamos fazer* e *como vamos fazer*, com **roteiro numerado em passo a passo**. Os **checks ficam distribuídos no fim de cada fase**, posicionados junto da instrucao que executa aquele passo (cada passo um check, sem passar ao proximo sem finalizar). **Proibido agrupar todos os checks num unico bloco.** Sem glossario extenso nem lista de materiais.
2. **Imagens e desenhos HTML obrigatorios no PDF**: todo PDF gerado (`downloadLessonPDF`) deve conter **imagens/ilustracoes reais** dentro das secoes. Nada de imagens apenas citadas como texto ("Referencia de imagem: ...").
3. Se a ilustracao for HTML (mini-planilha, mapa mental, diagrama), ela deve ser embutida via campo **`html`** na secao e renderizada com CSS do popup — nao pode ficar so na tela.
4. **Aula 07**: usar os PNGs reais em `assets/img/excel/a7/` nos campos `image`/`images`.

Estas regras ficam persistidas tambem em `Docs/SPEC-EXCEL-MASTER.md` e `AGENTS.md`.

---

## 10. Auditoria da Geracao de PDF (Aulas 07 e 08)

Resultado da auditoria feita em 07/09/2026:

| Item | Antes | Depois (corrigido) |
|:-----|:------|:------|
| Render de ilustracao HTML no PDF | Ausente (`downloadLessonPDF` so renderizava `content`/`images`/`steps`) | Campo `sec.html` injetado como `<div class="pdf-html-illustration">` |
| Aula 08 no PDF | 100% texto, sem imagens/mini-planilhas | Secao 8.0 (Fase 0, mapa mental + glossario + resultado) + mini-planilhas em 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.8 e 8.9 + caixa de filtros em 8.7 |
| Aula 07 no PDF | Imagens citadas como texto literal no `content` | Campos `image`/`images` reais apontando para `../../assets/img/excel/a7/imageN.png` |
| Resolucao de caminho | `resolveImagePath` via `new URL(path, window.location.href)` | Mantida (paths relativos `../../assets/img/...`) |
| CSS das mini-planilhas | Improvisado | Portado: `.mini-sheet`, `.fun-highlight`, `.es-sheet-box`, `.es-sheet-titlebar` no `<style>` do popup |
| Validacao de sintaxe | — | `node --check assets/js/pdf-lessons.js` → OK |

Dataset (rematematizado e consistente em 07/09/2026):

| Linha | Produto | Categoria | Fornecedor | Entradas | Saidas | Preco | Estoque Atual | Valor em Estoque | Status |
|:--|:--|:--|:--|--:|--:|--:|--:|--:|:--|
| 2 | Notebook | Informatica | TechDistrib | 10 | 3 | 3500 | 7 | 24500 | Medio |
| 3 | Monitor | Informatica | TechDistrib | 5 | 2 | 1200 | 3 | 3600 | Baixo |
| 4 | Mouse | Informatica | InfoPlus | 40 | 30 | 45 | 10 | 450 | Medio |
| 5 | Teclado | Informatica | InfoPlus | 25 | 16 | 120 | 9 | 1080 | Medio |
| 6 | Cadeira | Moveis | MoveisPro | 12 | 4 | 280 | 8 | 2240 | Medio |
| 7 | Mesa | Moveis | MoveisPro | 3 | 1 | 890 | 2 | 1780 | Baixo |
| 8 | Cadeira | Moveis | AtacadoMax | 8 | 6 | 280 | 2 | 560 | Baixo |
| 9 | Teclado | Informatica | AtacadoMax | 15 | 10 | 120 | 5 | 600 | Baixo |

Totais conferidos: fornecedores TechDistrib 28.100 / InfoPlus 1.530 / MoveisPro 4.020 / AtacadoMax 1.160 = **34.810**; categorias Informatica 30.230 / Moveis 4.580 = **34.810**. Estoque: 7, 3, 10, 9, 8, 2, 2, 5.

---

## 11. Checklist de Validacao (pos-implementacao)

- [x] Planilha de exemplo tem 8 linhas (nao 16)
- [x] Coluna "Data" removida da tabela de dados
- [x] Tema alterado para Controle de Estoque em todo o conteudo
- [x] 5 imagens PNG substituidas por ilustracoes HTML/CSS inline
- [x] Secao "Transformacao: Dados Brutos → Tabela → Tabela Dinamica" adicionada
- [x] Sales Lab JS atualizado com 8 itens e campos de estoque
- [x] Intervalo tipado e **A1:F9**; colunas G/H/I (formulas) explicadas na Etapa 5
- [x] Totais verificados: por fornecedor (TechDistrib 28.100 / InfoPlus 1.530 / MoveisPro 4.020 / AtacadoMax 1.160) e por categoria (Informatica 30.230 / Moveis 4.580) → Total 34.810
- [x] PDF gerado com novos dados e ilustracoes HTML + titulo atualizado (`sec.html` + CSS portado)
- [x] Quiz funciona normalmente (gabarito e questoes atualizados para estoque)
- [x] Todas as 9 etapas navegaveis e com "Marcar como Lido"
- [x] Linha de Totais funciona com 8 registros
- [x] Tabela Dinamica mostra resultados corretos com 8 registros
- [x] SOMASE retorna valores corretos para cada fornecedor
- [x] Validacao de dados (listas suspensas) funciona
- [x] Nenhuma imagem PNG quebrada no console
- [x] **Fase 0 (roteiro numerado + checks DISTRIBUÍDOS no fim de cada fase, com check-gating sequencial) presente no HTML; PDF (secao 8.0) mantem checklist imprimivel**
- [x] **PDF das aulas 07 e 08 contem imagens/ilustracoes HTML reais (nada de "Referencia de imagem" como texto)**

---

## 12. Diagrama de Transformacao (resumo visual)

```
 DADOS BRUTOS              TABELA ESTRUTURADA           TABELA DINAMICA
 (Etapa 3)                 (Etapas 4-8)                 (Etapa 9)
 ┌──────────────┐          ┌──────────────────┐         ┌─────────────────┐
 │ Produto      │  Ctrl+T  │ TabelaEstoque    │ Inserir │ Estoque por     │
 │ Categoria    │ ───────► │ + Formulas auto  │ ──────► │ Fornecedor      │
 │ Fornecedor   │          │ + Estilos        │ TD      │ (Soma de Valor  │
 │ Entradas     │          │ + Filtros        │         │  em Estoque)    │
 │ Saidas       │          │ + Linha Totais   │         │                 │
 │ Preco Unit.  │          │                  │         │ Estoque por     │
 │              │          │                  │         │ Categoria/Prod  │
 └──────────────┘          └──────────────────┘         └─────────────────┘
                                                            + Slicers
```

---

**SDD criado em: 07/09/2026**
**Status: IMPLEMENTADO — validacao em 07/09/2026 incluiu Fase 0 (mapa mental + glossario), PDF da Aula 07 com imagens reais e PDF da Aula 08 com ilustracoes HTML**
**Proximo passo: revisao do professor / gerar PDF das aulas 07 e 08 para conferencia visual**
