# 🏛️ SPEC-EXCEL-AULA-04 — Especificação Técnica e Pedagógica da Aula 04 (Excel)
### Módulo 3: Microsoft Excel | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai**: Herda regras de [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) e [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md).

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 04 do Módulo Excel** apresenta as **Funções Lógicas Avançadas** — `SE`, `E`, `OU`, `NÃO`, `SE aninhado` e a **Formatação Condicional** — aplicadas em análises inteligentes do mundo real. O conteúdo foi extraído e consolidado do acervo original em `AulaOrigem/excel/` ([Aula-4-Excel Funções Lógicas Avançadas-Atual .md](file:///home/rangel/git-dev/aulas/AulaOrigem/excel/Aula-4-Excel%20Funções%20Lógicas%20Avançadas-Atual%20.md) e [Aula-4-ExcelFunesLgicasAvanadasAtual.html](file:///home/rangel/git-dev/aulas/AulaOrigem/excel/Aula-4-ExcelFunesLgicasAvanadasAtual.html)).

> **📌 Nota de Curadoria**: O objeto da Aula 04 está alinhado ao título do catálogo master (*Funções Lógicas Avançadas*). O material fonte combina o uso das funções lógicas com a **Formatação Condicional por fórmulas**, recurso visual de destaque automático de cores.

### Objetivos de Aprendizagem:
1. Revisar e consolidar a função **`SE()`** (teste lógico, valor se verdadeiro, valor se falso) — base de todas as lógicas desta aula.
2. Combinar **`SE()` com `E()`** para exigir que **TODAS** as condições sejam verdadeiras (`=SE(E(B2>=7; C2>=75); "Aprovado"; "Reprovado")`).
3. Combinar **`SE()` com `OU()`** para que **PELO MENOS UMA** condição verdadeira satisfaça a regra (`=SE(OU(B2>=9; C2="Sim"); "Tem bônus"; "Sem bônus")`).
4. Construir **`SE aninhado`** (SE dentro de SE) para produzir **múltiplos resultados** em fluxo de funil (`=SE(B2>=9;"Excelente";SE(B2>=7;"Bom";...))`).
5. Usar a função **`NÃO()`** para **inverter** um teste lógico (`=SE(NÃO(B2>=7); "Precisa de reforço"; "OK")`).
6. Aplicar **Formatação Condicional com fórmulas** para colorir células automaticamente (verde/vermelho/azul/laranja), usando referência de coluna absoluta (ex: `$B2`).
7. Resolver um **exercício prático financeiro real** (classificação de clientes por pagamento) combinando `SE` aninhado + Formatação Condicional multicor.

### Core Topics (7 Tópicos Didáticos):
1. **Revisão Rápida da Função SE**: sintaxe `=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)`, exemplo de aprovação (Ana/Carlos/Maria).
2. **SE + E — Todas as condições verdadeiras**: função `E(cond1; cond2; ...)`, regra de ouro, exemplo nota + frequência (`=SE(E(B2>=7; C2>=75); "Aprovado"; "Reprovado")`).
3. **SE + OU — Pelo menos uma condição verdadeira**: função `OU(cond1; cond2; ...)`, regra de ouro, exemplo bônus por nota OU participação, tabela comparativa `E × OU`.
4. **SE Aninhado — Múltiplos resultados**: estrutura de funil, classificação em 4 níveis (Excelente/Bom/Regular/Reprovado), recomendação de não aninhar mais de 3 `SE`s.
5. **Função NÃO — Inverte uma condição**: sintaxe `NÃO(teste_lógico)`, exemplo de reforço, equivalências úteis (`NÃO(A>=7) = A<7`, `NÃO(C="Sim") = C<>"Sim"`).
6. **Formatação Condicional com Fórmulas Lógicas**: passo a passo (selecionar intervalo, abrir regra, inserir fórmula, escolher cor), uso do `$` (cifrão) para coluna fixa, múltiplas regras e Gerenciar Regras.
7. **Exercício Prático — Classificação Financeira de Clientes**: planilha com cliente/valor/pago/data → coluna Situação com `SE` aninhado (Cliente Premium/Regular/Em aberto) + Formatação Condicional com 3 cores.

> **📌 Regra de Design (compatível com as Aulas 01, 02 e 03)**: A Aula 04 segue o mesmo esqueleto visual (Cor Verde Excel, cartões de leitura, abas de tópicos, trilha de progresso, simulador interativo e quiz de 5 questões), garantindo coerência pedagógica e técnica em todo o módulo.

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 3 / Aula 04** | Funções Lógicas Avançadas: SE, E, OU, NÃO, SE aninhado e Formatação Condicional | `xd004` | 🔒 Oculta (Acesso Restrito) |

---

## 🖥️ 3. Simulador Interativo da Aula 04 (Logic Lab)

> **🛠️ Novo componente dedicado**: Diferente do *Grid Inspector* (Aula 01), do *Fórmula Builder* (Aula 02) e do *Function Lab* (Aula 03), a Aula 04 apresenta o **Lab de Lógica — "Logic Lab"**, que demonstra ao vivo o comportamento combinado de `SE`, `E`, `OU`, `NÃO` e `SE aninhado` sobre os mesmos dados de alunos/clientes.

### 3.1 Requisitos Funcionais do Simulador
1. **Paleta de Valores (Grade de Entrada)**:
   - Grade demonstrativa com os dados do **Exemplo de Aprovação** (Aluno | Nota | Frequência %).
   - Células editáveis para o aluno alterar nota/frequência e ver os resultados recalcularem em tempo real (Ana, Bruno, Carla, Diego).

2. **Painel de Comparação de Lógica ao Vivo**:
   - Exibição simultânea dos resultados usando os mesmos dados de entrada:
     - **SE simples**: `=SE(B2>=7; "Aprovado"; "Reprovado")`
     - **SE + E**: `=SE(E(B2>=7; C2>=75); "Aprovado"; "Reprovado")`
     - **SE + OU**: `=SE(OU(B2>=9; C2="Sim"); "Tem bônus"; "Sem bônus")`
     - **SE aninhado**: `=SE(B2>=9; "Excelente"; SE(B2>=7; "Bom"; SE(B2>=5; "Regular"; "Reprovado")))`
   - Destaque visual dos resultados (fonte verde Excel, negrito; cores de status por classificação).

3. **Modo NÃO (Inversão Lógica)**:
   - Campo de teste para demonstrar a inversão: `NÃO(B2>=7)` é o mesmo que `B2<7`.
   - Alternador/checkbox para alternar entre a condição original e sua equivalente invertida, exibindo o resultado em tempo real.

4. **Mini-Demonstração de Formatação Condicional**:
   - Tabela de resultados com células coloridas automaticamente conforme a lógica (verde para aprovado, vermelho para reprovado), ilustrando o efeito visual da Formatação Condicional sem o Excel real.

5. **Controles de Acessibilidade**:
   - Botões e campos com área de toque ≥ 56px.
   - Contraste WCAG AA (texto `#1F2937` sobre fundo `#FFFFFF`).
   - Fonte `JetBrains Mono` para funções e `Inter` para textos.

### 3.2 Mockup Lógico (Estrutura HTML/CSS/JS)
```text
[Simulador Logic Lab]
┌────────────────────────────────────────────────┐
│ 🖥️ Lab de Lógica — Aula 04                     │
│  Aluno  | Nota | Freq%    (editáveis)           │
│  Ana    | 8,0  | 80        → Aprovado          │
│  Bruno  | 7,5  | 60        → Reprovado (freq.) │
│  Carla  | 5,0  | 90        → Reprovado (nota)  │
│  Diego  | 9,0  | 95        → Aprovado          │
├────────────────────────────────────────────────┤
│ SE simples   =SE(B2>=7;...)    → Aprovado       │
│ SE + E       =SE(E(B2>=7;...)) → Aprovado       │
│ SE + OU      =SE(OU(B2>=9;...))→ Tem bônus      │
│ SE aninhado  =SE(B2>=9;...)    → Excelente      │
├────────────────────────────────────────────────┤
│ 📌 NÃO: NÃO(B2>=7) ⇔ B2<7  →  FALSO             │
│ 🎨 Formatação Condicional: [verde|vermelho]     │
└────────────────────────────────────────────────┘
```

---

## 📚 4. Especificação dos Conteúdos Didáticos e Exercícios (material fonte real)

> Os tópicos e exercícios abaixo reproduzem fielmente o conteúdo do `Aula-4-Excel Funções Lógicas Avançadas`.

### 🟢 Tópico 1 — Revisão da Função SE
- **Sintaxe**: `=SE( teste_lógico ; valor_se_verdadeiro ; valor_se_falso )` (3 partes separadas por ponto e vírgula).
- **Lógica**: "Se isso for verdade, faça X; caso contrário, faça Y."
- **Exemplo**: `=SE(B2>=7; "Aprovado"; "Reprovado")`.
- **Tabela didática** (Aluno | Nota | Resultado): Ana 8,5 → Aprovado; Carlos 5,0 → Reprovado; Maria 7,0 → Aprovado.

### 🟢 Tópico 2 — SE + E (Todas as condições verdadeiras)
- **Regra de ouro**: Todas as condições precisam ser VERDADEIRAS. Uma só falsa → resultado FALSO.
- **Sintaxe**: `=E( condição1 ; condição2 ; condição3 ... )`.
- **Exemplo**: `=SE(E(B2>=7; C2>=75); "Aprovado"; "Reprovado")` (B2 = nota, C2 = frequência %).
- **Tabela didática** (Aluno | Nota | Frequência | Resultado): Ana (8,0; 80%) → Aprovado; Bruno (7,5; 60%) → Reprovado (freq. baixa); Carla (5,0; 90%) → Reprovado (nota baixa); Diego (9,0; 95%) → Aprovado.
- **Dica**: Quantas condições quiser dentro do `E`, ex.: `=SE(E(B2>=7; C2>=75; D2="Entregou TCC"); "Formado"; "Pendente")`.

### 🟢 Tópico 3 — SE + OU (Pelo menos uma condição verdadeira)
- **Regra de ouro**: Basta UMA condição ser VERDADEIRA. Só é FALSO quando todas são falsas.
- **Sintaxe**: `=OU( condição1 ; condição2 ; condição3 ... )`.
- **Exemplo**: `=SE(OU(B2>=9; C2="Sim"); "Tem bônus"; "Sem bônus")` (B2 = nota, C2 = Participação Extra Sim/Não).
- **Tabela comparativa E × OU** (Aluno | Nota≥9? | Participação? | Com E | Com OU): Ana (Sim; Não) → Sem bônus | Tem bônus; Bruno (Não; Sim) → Sem bônus | Tem bônus; Carla (Sim; Sim) → Tem bônus | Tem bônus; Diego (Não; Não) → Sem bônus | Sem bônus.

### 🟢 Tópico 4 — SE Aninhado (Múltiplos resultados)
- **Conceito**: Colocar um `SE` dentro de outro `SE` — lógica de funil: testa a 1ª condição; se falsa, cai no 2º `SE`; e assim por diante.
- **Uso**: Quando precisa de mais de 2 resultados — ex.: classificar notas em Excelente, Bom, Regular ou Reprovado.
- **Exemplo (4 níveis)**: `=SE(B2>=9; "Excelente"; SE(B2>=7; "Bom"; SE(B2>=5; "Regular"; "Reprovado")))`.
- **Como o Excel lê**: 1º teste Nota≥9? Sim→"Excelente" e para; 2º Nota≥7? Sim→"Bom"; 3º Nota≥5? Sim→"Regular"; senão→"Reprovado".
- **Tabela didática** (Aluno | Nota | Classificação): Ana 9,5 → Excelente; Bruno 7,8 → Bom; Carla 5,2 → Regular; Diego 3,0 → Reprovado.
- **💡 Dica**: Evite aninhar mais de 3 `SE`s. Para muitos casos, considere `PROCV` ou `CHOOSE`.

### 🟢 Tópico 5 — Função NÃO (Inverte uma condição)
- **Conceito**: Inverte o resultado lógico — VERDADEIRO vira FALSO e vice-versa.
- **Sintaxe**: `=NÃO( teste_lógico )`.
- **Exemplo**: `=SE(NÃO(B2>=7); "Precisa de reforço"; "OK")` — `NÃO(B2>=7)` é o mesmo que `B2<7`.
- **Equivalências úteis**:
  - `NÃO(A>=7)` ⇔ `A<7`
  - `NÃO(C="Sim")` ⇔ `C<>"Sim"` (diferente de Sim)
  - `NÃO(E(...))` inverte o resultado de um `E` — muito usado em Formatação Condicional.

### 🟢 Tópico 6 — Formatação Condicional com Fórmulas Lógicas
- **Conceito**: Mudar a cor de uma célula automaticamente com base em condição ou fórmula.
- **Passo a passo completo (4 passos)**:
  1. **Selecionar o intervalo**: clique da 1ª célula (ex.: D2) até a última (ex.: D20).
  2. **Abrir o menu**: Página Inicial → Formatação Condicional → Nova Regra... → escolher *"Usar uma fórmula para determinar quais células devem ser formatadas"*.
  3. **Inserir a fórmula e escolher a cor**: box "Formatar valores onde esta fórmula for verdadeira" → Formatar... → aba Preenchimento → cor.
  4. **Criar múltiplas regras**: uma regra por cor; gerenciar em Formatação Condicional → Gerenciar Regras.
- **Exemplos de fórmulas**:
  - Verde para Aprovado (SE + E): `=$B2>=7` ou `=E($B2>=7; $C2>=75)`.
  - Vermelho para Reprovado (NÃO + E): `=NÃO(E($B2>=7; $C2>=75))`.
- **Por que usar `$` (cifrão)?** `$B2` trava a coluna B mas deixa a linha livre — cada linha é avaliada com seus próprios dados. Regra prática: sempre use `$` antes da letra da coluna em fórmulas de Formatação Condicional.
- **Resumo de fórmulas e cores**:

| Situação | Fórmula | Cor sugerida |
| :--- | :--- | :--- |
| Aprovado (nota e freq.) | `=E($B2>=7; $C2>=75)` | Verde |
| Reprovado (alguma falha) | `=NÃO(E($B2>=7; $C2>=75))` | Vermelho |
| Nota muito alta (destaque) | `=$B2>=9` | Azul / Amarelo |
| Frequência baixa | `=$C2<75` | Laranja |

### 🟢 Exercício Prático — Classificação Financeira de Clientes (mundo real)
- **Cenário**: Você trabalha no setor financeiro de uma empresa e precisa classificar clientes automaticamente com base nos pagamentos. A planilha tem: nome do cliente, valor pago, status do pagamento e data. Criar a coluna **Situação (E)** que classifica cada cliente automaticamente.
- **Estrutura da planilha** (A — Cliente | B — Valor (R$) | C — Pago? | D — Data Pgto. | E — Situação):
  - Empresa ABC (R$ 1.200; Sim; 10/03/2025)
  - Loja XYZ (R$ 350; Sim; 15/03/2025)
  - Mercado Sol (R$ 800; Não; —)
  - Padaria Luz (R$ 200; Não; —)
- **Regras de classificação**:
  - Pagou **e** valor ≥ R$ 500 → "Cliente Premium".
  - Pagou **e** valor < R$ 500 → "Cliente Regular".
  - Não pagou → "Em aberto".
- **Construção da fórmula passo a passo**:
  - *Passo 1* — verificar pagamento com SE simples: `=SE(C2="Sim"; "Pagou"; "Não pagou")`.
  - *Passo 2* — SE aninhado para o valor: `=SE(C2="Sim"; SE(B2>=500; "Cliente Premium"; "Cliente Regular"); "Em aberto")` — **fórmula completa (célula E2)**.
- **Resultado esperado**:
  - Empresa ABC → Cliente Premium; Loja XYZ → Cliente Regular; Mercado Sol → Em aberto; Padaria Luz → Em aberto.
- **Formatação Condicional para o exercício** (coluna Situação E2:E20, 3 cores):

| Regra | Fórmula para usar | Cor | Significado |
| :--- | :--- | :--- | :--- |
| Regra 1 | `=$E2="Cliente Premium"` | Verde escuro | Pagou e é grande cliente |
| Regra 2 | `=$E2="Cliente Regular"` | Azul claro | Pagou e é cliente normal |
| Regra 3 | `=$E2="Em aberto"` | Vermelho | Pagamento pendente |

- **Como criar as 3 regras**: selecione E2:E20 → Página Inicial → Formatação Condicional → Nova Regra... → "Usar uma fórmula..." → insira a fórmula da Regra 1 → Formatar... → Preenchimento → Verde escuro → OK. Repita para Regra 2 (azul) e Regra 3 (vermelho). Confira em Gerenciar Regras.
- **Testando a formatação**: altere C2 de "Sim" para "Não" e veja a cor mudar para vermelho; altere B2 de 1200 para 200 e veja "Cliente Premium" virar "Cliente Regular" — a cor muda sozinha conforme os dados mudam (magia da Formatação Condicional).

---

## 🧩 5. Especificação do Quiz de Fixação (5 Questões)

> **Regras**: 5 questões de múltipla escolha (4 alternativas), nota mínima de aprovação **7,0 / 10,0** (≥ 4 acertos), validação SHA-256 (`WR-XXXX-XXXX`) e exportação TXT/PDF/WhatsApp/E-mail. Segue o padrão das Aulas 01, 02 e 03.

1. **Questão 1 (Função SE — sintaxe)**:
   - *Pergunta*: Qual é a ordem correta dos 3 argumentos da função SE?
   - *Alternativas*:
     - a) valor_se_verdadeiro; teste_lógico; valor_se_falso
     - b) teste_lógico; valor_se_verdadeiro; valor_se_falso [Correta]
     - c) valor_se_falso; valor_se_verdadeiro; teste_lógico
     - d) teste_lógico; valor_se_falso; valor_se_verdadeiro
   - *Dica*: Primeiro a pergunta (teste), depois o "sim" e por último o "não".

2. **Questão 2 (Função E)**:
   - *Pergunta*: A escola exige que o aluno tenha nota ≥ 7 E frequência ≥ 75% para ser aprovado. Qual fórmula representa essa regra?
   - *Alternativas*:
     - a) `=SE(OU(B2>=7; C2>=75); "Aprovado"; "Reprovado")`
     - b) `=SE(B2>=7; "Aprovado"; "Reprovado")`
     - c) `=SE(E(B2>=7; C2>=75); "Aprovado"; "Reprovado")` [Correta]
     - d) `=E(B2>=7; "Aprovado"; "Reprovado")`
   - *Dica*: E (E) exige que TODAS as condições sejam verdadeiras ao mesmo tempo.

3. **Questão 3 (Função OU)**:
   - *Pergunta*: Com a função OU, quando o resultado é FALSO?
   - *Alternativas*:
     - a) Quando pelo menos uma condição é verdadeira
     - b) Quando TODAS as condições são falsas [Correta]
     - c) Quando a primeira condição é verdadeira
     - d) Nunca, OU sempre retorna verdadeiro
   - *Dica*: Basta uma verdadeira para ser VERDADEIRO; só é falso se todas falharem.

4. **Questão 4 (SE Aninhado)**:
   - *Pergunta*: Para classificar uma nota em quatro níveis (Excelente, Bom, Regular, Reprovado), qual é a abordagem correta?
   - *Alternativas*:
     - a) Usar a função NÃO
     - b) Usar apenas um SE simples
     - c) Aninhar vários SE dentro de SE [Correta]
     - d) Usar a função MÉDIA
   - *Dica*: Mais de 2 resultados possíveis exigem colocar um SE dentro de outro (funil).

5. **Questão 5 (Formatação Condicional + NÃO)**:
   - *Pergunta*: Na Formatação Condicional, para pintar de vermelho as células REPROVADAS (qualquer condição de aprovação falhar), qual fórmula usar?
   - *Alternativas*:
     - a) `=E($B2>=7; $C2>=75)`
     - b) `=$B2>=9`
     - c) `=$C2<75`
     - d) `=NÃO(E($B2>=7; $C2>=75))` [Correta]
   - *Dica*: NÃO inverte o resultado — verde vira vermelho quando qualquer condição falhar.

### 5.1 Gabarito Oficial (Índices 0-based e 1-based)
| Questão | Resposta Correta | Índice (0-based) | Descrição |
| :--- | :--- | :--- | :--- |
| 1 | B — teste_lógico; valor_verdadeiro; valor_falso | `1` | Ordem correta do SE |
| 2 | C — SE(E(...)) | `2` | E exige todas verdadeiras |
| 3 | B — Todas falsas | `1` | Regra de ouro do OU |
| 4 | C — SE aninhado | `2` | Múltiplos resultados |
| 5 | D — NÃO(E(...)) | `3` | Inverte para reprovado |

> **Gabarito mapeado em array JS**: `const GABARITO_L4 = [1, 2, 1, 2, 3];`

---

## 🎨 6. Ergonomia e Regras de Interface

- **Botão de PDF na Barra Superior / Início da Aula**: Botão `📑 Baixar Apostila Didática em PDF` no topo, chamando `window.PDFLessons.downloadLessonPDF('excel', 4)`.
- **Formatação de Atalhos de Teclado**: Uso da tag `<kbd>` para teclas já exploradas (`F4`) e destaques de fórmulas em fonte monoespaçada.
- **Tabelas de Fórmulas em Código**: Fórmulas exibidas em fonte monoespaçada (`JetBrains Mono`) com fundo claro, exatamente como no material-fonte (`=SE(E(B2>=7; C2>=75); "Aprovado"; "Reprovado")`, `=NÃO(E($B2>=7; $C2>=75))`).
- **Nota Mínima do Quiz**: **7,0 / 10,0** (acerto de ao menos 4 de 5 questões) para aprovação e liberação do comprovante.
- **Validação Anti-Fraude**: Geração de Hash SHA-256 e botões de envio via WhatsApp (`19 99130-6907`) e E-mail (`okcomputer.use.linux@gmail.com`).
- **Otimização de Impressão**: Regras `@media print` com `page-break-inside: avoid; break-inside: avoid;` para que as tabelas de fórmulas, o simulador Logic Lab e as comparações de lógica não fiquem cortados entre páginas.

---

## 🗂️ 7. Plano de Implementação (Fase 3 — Futura)

> **Nota**: Esta seção é referência para a etapa de codificação (Fase 3). A validação da presente especificação é pré-requisito antes de qualquer alteração em `modules/excel/index.html`.

1. **Hub (`modules/excel/index.html`)**:
   - Alterar a AULA 04 de `🔒 Em Construção` para `🔓 Aula Liberada (Senha xd004)`.
   - Vincular o card ao `promptLessonPassword(4, 'Funções Lógicas Avançadas: SE, E, OU, NÃO, SE aninhado e Formatação Condicional')`.
2. **Tela da Aula 04** (`#screen-lesson-4`):
   - Clonar a estrutura do `#screen-lesson-3` (header, gamify progress, cartão de leitura, abas `topic-tabs-bar`, painel de fixação).
   - Implementar os 7 tópicos didáticos conforme a Seção 1 e os conteúdos da Seção 4.
   - Renomear IDs: `l4-phase-X`, `tab-l4-X`, `btn-read-l4-X`, `gamify-label-4`, `gamify-fill-4`, `gamify-badge-box-4`.
3. **Simulador Logic Lab**: Implementar conforme a Seção 3 com funções `calcLogic()`, `updateLogicResults()`, `toggleNegation()`, `updateConditionalColor()`.
4. **Quiz**: Adicionar `GABARITO_L4 = [1, 2, 1, 2, 3]`, `QUESTOES_L4`, funções `selectFixOption(4, ...)` e `calcFixation(4)` reutilizando o motor `quiz-engine.js`.
5. **Gerador de PDF (`assets/js/pdf-lessons.js`)**:
   - Adicionar o bloco do Excel Aula 04 (`lessonNum: 4`) com o conteúdo das 7 seções e o exercício financeiro completo (complanilha de clientes + Formatação Condicional).
6. **Tríade de Documentação**: Atualizar `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` (Registro Cronológico) após a implementação.

---

## 📚 8. Referências Didáticas e Acadêmicas

1. **Walkenbach, J. (2015)**. *Excel 2016 Bible*. John Wiley & Sons.
2. **Alexander, M., & Kusleika, R. (2019)**. *Excel 2019 Bible / Excel Analysis*. Wiley.
3. **Microsoft Learn (2024)**. *Documentação Oficial de Fórmulas e Funções do Microsoft Excel* (SE, E, OU, NÃO, SEERRO e Formatação Condicional). Microsoft Press.
4. **W3C (2023)**. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.
