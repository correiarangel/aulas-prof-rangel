# 🏛️ SPEC-EXCEL-AULA-06 — Especificação Técnica e Pedagógica da Aula 06 (Excel)
### Módulo 3: Microsoft Excel | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai**: Herda regras de [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) e [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md).

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 06 do Módulo Excel** apresenta as **Datas e Horas no Excel** — funções `HOJE()`, `AGORA()`, `DATA()`, `DIA()`, `MÊS()`, `ANO()`, `DIAS360()` e `DIAS.ÚTEIS()` — aplicadas em cálculos de prazos, idades, agendas e calendários do mundo real. O conteúdo foi extraído e consolidado do acervo original em `AulaOrigem/excel/` ([Aula6_Datas_e_Horas_no_ExcelRevisada.html](file:///home/rangel/git-dev/aulas/AulaOrigem/excel/Aula6_Datas_e_Horas_no_ExcelRevisada.html)).

> **📌 Nota de Curadoria**: O objeto da Aula 06 está alinhado ao título do catálogo (*Datas e Horas no Excel*). O material fonte combina funções de data com exercícios práticos de agenda de contatos, alertas automáticos e cálculo de prazos de projeto.

### Objetivos de Aprendizagem:
1. Usar a função **`HOJE()`** para obter a data atual, atualizando-se automaticamente a cada abertura de planilha.
2. Usar a função **`AGORA()`** para obter a data e hora exata do momento.
3. Montar datas customizadas com a função **`DATA(ano; mês; dia)`** — incluindo uso de referências de células.
4. Extrair partes de uma data com **`DIA()`**, **`MÊS()`** e **`ANO()`** para análises segmentadas.
5. Calcular a **idade** de uma pessoa a partir da data de nascimento (`=ANO(HOJE())-ANO(D2)`).
6. Calcular **dias entre duas datas** usando subtração direta (`=B-A`) e o calendário comercial com **`DIAS360()`** (método americano e europeu).
7. Contar **dias úteis** entre duas datas com **`DIAS.ÚTEIS()`** para prazos de trabalho.
8. Construir uma **Planilha de Agenda de Contatos** completa com idade automática, dias sem contato, painel de estatísticas e alertas automáticos (aniversário do mês e contato urgente).
9. Calcular **prazos de projeto** incluindo total de dias, dias úteis e dias comerciais (30 dias/mês).

### Core Topics (7 Tópicos Didáticos):
1. **Função HOJE() — A Data de Hoje**: sintaxe `=HOJE()`, atualização automática, aplicações práticas (prazos, validade, idade).
2. **Função AGORA() — Data e Hora**: sintaxe `=AGORA()`, diferença entre HOJE e AGORA, tabela comparativa.
3. **Função DATA() — Montar uma Data Customizada**: sintaxe `=DATA(ano; mês; dia)`, exemplo Natal `=DATA(2025;12;25)`, uso com referências de células.
4. **Funções DIA(), MÊS() e ANO() — Extrair Partes da Data**: sintaxe de cada função, exemplos com data 15/06/2025, aplicação prática — aniversariante do mês com `=SE(MÊS(A1)=MÊS(HOJE()); "Aniversariante do mês"; "")`.
5. **Função DIAS360() — Dias no Calendário Comercial**: sintaxe `=DIAS360(data_inicial; data_final; método)`, método americano (FALSO/vazio) vs europeu (VERDADEIRO), comparação com subtração direta (`=B1-A1`).
6. **Função DIAS.ÚTEIS() — Dias Úteis para Prazos**: sintaxe `=DIAS.ÚTEIS(data_inicial; data_final)`, contagem de segunda a sexta, aplicação em prazos de projeto.
7. **Exercício Prático — Agenda de Contatos e Alertas**: planilha completa com ID/Nome/Telefone/Data Nasc./Idade/Última Ligação/Dias sem Contato, painel de estatísticas (CONT.NÚM, MÉDIA, MÁXIMO, MÍNIMO) e alertas automáticos (aniversário do mês e contato urgente >15 dias).

> **📌 Regra de Design (compatível com as Aulas 01 a 05)**: A Aula 06 segue o mesmo esqueleto visual (Cor Verde Excel, cartões de leitura, abas de tópicos, trilha de progresso, simulador interativo e quiz de 5 questões), garantindo coerência pedagógica e técnica em todo o módulo.

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 3 / Aula 06** | Datas e Horas no Excel: HOJE, AGORA, DATA, DIA, MÊS, ANO, DIAS360, DIAS.ÚTEIS | `xf006` | 🔒 Oculta (Acesso Restrito) |

---

## 🖥️ 3. Simulador Interativo da Aula 06 (Date & Time Lab)

> **🛠️ Novo componente dedicado**: Diferente do *Grid Inspector* (Aula 01), do *Fórmula Builder* (Aula 02), do *Function Lab* (Aula 03), do *Logic Lab* (Aula 04) e do *Lookup Lab* (Aula 05), a Aula 06 apresenta o **Laboratório de Datas e Horas — "Date & Time Lab"**, que demonstra ao vivo o comportamento das funções de data sobre dados de uma agenda de contatos.

### 3.1 Requisitos Funcionais do Simulador

1. **Grade de Entrada — Agenda de Contatos**:
   - Tabela demonstrativa com dados do **Exercício Prático** (ID | Nome | Telefone | Data Nasc. | Idade | Última Ligação | Dias sem Contato).
   - Células editáveis para o aluno alterar datas de nascimento e últimas ligações e ver os resultados recalcularem em tempo real.
   - Dados iniciais: João Silva (15/03/1985, última ligação 10/10/2025), Maria Santos (22/07/1990, última ligação 20/10/2025).

2. **Painel de Demonstração de Funções ao Vivo**:
   - Exibição simultânea dos resultados usando os mesmos dados de entrada:
     - **HOJE()**: `=HOJE()` → data de hoje atualizada.
     - **AGORA()**: `=AGORA()` → data e hora exata.
     - **DATA()**: `=DATA(2025;12;25)` → 25/12/2025 (Natal).
     - **DIA()**: `=DIA(A2)` → número do dia da data de nascimento.
     - **MÊS()**: `=MÊS(A2)` → número do mês da data de nascimento.
     - **ANO()**: `=ANO(A2)` → número do ano da data de nascimento.
     - **Cálculo de Idade**: `=ANO(HOJE())-ANO(D2)` → idade simplificada.
     - **Dias sem Contato**: `=HOJE()-F2` → dias desde a última ligação.
   - Destaque visual dos resultados (fonte verde Excel, negrito; cores de status por tipo de função).

3. **Painel de Comparação de Métodos de Contagem de Dias**:
   - Para um par de datas de projeto (Início: 01/11/2025, Fim: 30/11/2025):
     - **Subtração direta**: `=B12-B11` → 29 dias (contagem real).
     - **DIAS360 (americano)**: `=DIAS360(B11;B12)` → 29 dias (método comercial).
     - **DIAS360 (europeu)**: `=DIAS360(B11;B12;VERDADEIRO)` → 29 dias.
     - **DIAS.ÚTEIS()**: `=DIAS.ÚTEIS(B11;B12)` → 21 dias (seg a sex).
   - Destaque visual comparando os resultados (diferença entre dias corridos, comerciais e úteis).

4. **Mini-Demonstração de Alertas Automáticos**:
   - Tabela de resultados com células coloridas automaticamente:
     - Verde para aniversariante do mês (`=SE(MÊS(D2)=MÊS(HOJE()); ...)`).
     - Laranja para contato urgente (`=SE(G2>15; "Ligar urgente!"; "")`).
   - Ilustrando o efeito visual de alertas condicionais sem o Excel real.

5. **Controles de Acessibilidade**:
   - Botões e campos com área de toque ≥ 56px.
   - Contraste WCAG AA (texto `#1F2937` sobre fundo `#FFFFFF`).
   - Fonte `JetBrains Mono` para funções e `Inter` para textos.

### 3.2 Mockup Lógico (Estrutura HTML/CSS/JS)
```text
[Simulador Date & Time Lab]
┌────────────────────────────────────────────────────────────┐
│ 🖥️ Laboratório de Datas e Horas — Aula 06                 │
│  ID | Nome       | Tel.          | Data Nasc. | Idade      │
│  1  | João Silva | (11) 9876...  | 15/03/1985 | 41         │
│  2  | Maria San. | (11) 9765...  | 22/07/1990 | 36         │
│  Última Ligação | Dias sem Contato                       │
│  10/10/2025     | 328              (editáveis)             │
├────────────────────────────────────────────────────────────┤
│ 📊 Funções Demonstradas ao Vivo:                           │
│ HOJE()     → 03/09/2026                                   │
│ AGORA()    → 03/09/2026 14:30                             │
│ DATA()     → 25/12/2025 (Natal)                           │
│ DIA(A2)    → 15                                            │
│ MÊS(A2)    → 3                                             │
│ ANO(A2)    → 1985                                          │
│ Idade      → ANO(HOJE())-ANO(D2) = 41                     │
│ Dias s/CTO → HOJE()-F2 = 328                              │
├────────────────────────────────────────────────────────────┤
│ 📅 Comparação de Métodos de Contagem de Dias:              │
│ Início: 01/11/2025 | Fim: 30/11/2025                      │
│ Subtração direta  =B12-B11         → 29 dias              │
│ DIAS360 (amer.)   =DIAS360(B11;B12) → 29 dias            │
│ DIAS360 (euro.)   =DIAS360(B11;B12;V) → 29 dias          │
│ DIAS.ÚTEIS()      =DIAS.ÚTEIS(B11;B12) → 21 dias         │
├────────────────────────────────────────────────────────────┤
│ 🔔 Alertas Automáticos:                                    │
│ João: MÊS(D2)=MÊS(HOJE())? → [verde] Aniversariante!     │
│ João: G2>15? → [laranja] Ligar urgente!                   │
│ Maria: MÊS(D3)=MÊS(HOJE())? → [] (fora do mês)           │
│ Maria: G3>15? → [laranja] Ligar urgente!                  │
└────────────────────────────────────────────────────────────┘
```

---

## 📚 4. Especificação dos Conteúdos Didáticos e Exercícios (material fonte real)

> Os tópicos e exercícios abaixo reproduzem fielmente o conteúdo do `Aula6_Datas_e_Horas_no_ExcelRevisada.html`.

### 🟢 Tópico 1 — Função HOJE() — A Data de Hoje
- **Conceito**: Mostra a data de hoje. Todos os dias, quando você abrir a planilha, essa data se atualiza sozinha.
- **Sintaxe**: `=HOJE()`
- **Exemplo**: Célula A1 → `=HOJE()` → resultado ex.: 24/10/2025.
- **Aplicações práticas**:
  - Saber se um documento ainda está dentro do prazo de validade.
  - Calcular a idade de uma pessoa.
  - Verificar quantos dias faltam para um prazo terminar.
- **Passo a passo**:
  1. Clique em uma célula vazia (ex.: A1).
  2. Digite exatamente: `=HOJE()`.
  3. Pressione Enter.
  4. A célula vai mostrar a data de hoje.

### 🟢 Tópico 2 — Função AGORA() — Data e Hora
- **Conceito**: Mostra a data e também a hora exata em que você abriu ou atualizou a planilha.
- **Sintaxe**: `=AGORA()`
- **Exemplo**: Célula → `=AGORA()` → resultado ex.: 24/10/2025 14:30.
- **Tabela comparativa HOJE × AGORA**:

| Função | O que mostra |
| :--- | :--- |
| `=HOJE()` | Somente a data (dia/mês/ano) |
| `=AGORA()` | A data e também a hora |

### 🟢 Tópico 3 — Função DATA() — Montar uma Data Customizada
- **Conceito**: Monta uma data escolhida por você, informando o ano, o mês e o dia.
- **Sintaxe**: `=DATA(ano; mês; dia)`
- **Exemplo**: `=DATA(2025;12;25)` → 25/12/2025 (Natal).
- **Passo a passo**:
  1. Em uma célula, digite: `=DATA(2025;12;25)`.
  2. Pressione Enter.
  3. O Excel vai montar a data 25/12/2025 automaticamente.
- **💡 Dica**: Você também pode usar números de outras células no lugar de digitar direto. Se A1 tem o ano, B1 o mês e C1 o dia, a fórmula fica `=DATA(A1;B1;C1)`.

### 🟢 Tópico 4 — Funções DIA(), MÊS() e ANO() — Extrair Partes da Data
- **Conceito**: Pegam uma data que já existe e retiram dela só o dia, só o mês ou só o ano.
- **Tabela de sintaxe**:

| Fórmula | O que retorna |
| :--- | :--- |
| `=DIA(data)` | O número do dia |
| `=MÊS(data)` | O número do mês |
| `=ANO(data)` | O número do ano |

- **Exemplo**: Se A1 tem 15/06/2025:
  - `=DIA(A1)` → 15
  - `=MÊS(A1)` → 6
  - `=ANO(A1)` → 2025
- **Aplicação prática — aniversariante do mês**:
  - `=SE(MÊS(A1)=MÊS(HOJE()); "Aniversariante do mês"; "")`
  - Compara o mês da data de nascimento (A1) com o mês de hoje. Se forem iguais, escreve o aviso; senão, deixa em branco.

### 🟢 Tópico 5 — Função DIAS360() — Dias no Calendário Comercial
- **Conceito**: Calcula quantos dias existem entre duas datas usando um calendário comercial (todo mês tem 30 dias, ano = 360 dias). Muito usada em cálculos financeiros e contratos.
- **Sintaxe**: `=DIAS360(data_inicial; data_final; método)`
- **Método (terceiro argumento, opcional)**:
  - `FALSO` ou vazio → método americano (o mais comum).
  - `VERDADEIRO` → método europeu.
- **Exemplo**: A1 = 01/01/2025, B1 = 31/12/2025:

| Fórmula | Resultado |
| :--- | :--- |
| `=DIAS360(A1;B1)` | 360 dias (método americano) |
| `=DIAS360(A1;B1;VERDADEIRO)` | 359 dias (método europeu) |
| `=B1-A1` | 364 dias (contagem real do calendário) |

- **💡 Dica**: Use `=B1-A1` quando quiser saber a diferença real de dias no calendário normal. Use `=DIAS360()` apenas quando o cálculo exigir o padrão comercial de 30 dias por mês.

### 🟢 Tópico 6 — Função DIAS.ÚTEIS() — Dias Úteis para Prazos
- **Conceito**: Conta apenas os dias de segunda a sexta-feira entre duas datas — ideal para prazos de trabalho.
- **Sintaxe**: `=DIAS.ÚTEIS(data_inicial; data_final)`
- **Exemplo**: Início = 01/11/2025, Fim = 30/11/2025:

| Descrição | Fórmula | Resultado |
| :--- | :--- | :--- |
| Total de dias | `=B12-B11` | 29 dias |
| Dias úteis | `=DIAS.ÚTEIS(B11;B12)` | 21 dias |
| Dias comerciais (30 dias/mês) | `=DIAS360(B11;B12)` | 29 dias |

- **💡 Dica**: A função `=DIAS.ÚTEIS()` funciona normalmente no Excel 2010 e versões posteriores.

### 🟢 Exercício Prático — Agenda de Contatos e Alertas
- **Cenário**: Montar uma planilha simples que guarda o nome, telefone e data de nascimento de algumas pessoas, calculando automaticamente a idade e há quantos dias você não fala com elas.
- **Estrutura da planilha**:

| ID | Nome | Telefone | Data Nasc. | Idade | Última Ligação | Dias sem Contato |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | João Silva | (11) 98765-4321 | 15/03/1985 | `=ANO(HOJE())-ANO(D2)` | 10/10/2025 | `=HOJE()-F2` |
| 2 | Maria Santos | (11) 97654-3210 | 22/07/1990 | `=ANO(HOJE())-ANO(D3)` | 20/10/2025 | `=HOJE()-F3` |

- **Fórmulas explicadas**:
  - **Coluna Idade** (ex.: E2): `=ANO(HOJE())-ANO(D2)` → pega o ano de hoje e subtrai o ano de nascimento.
  - **Coluna Dias sem Contato** (ex.: G2): `=HOJE()-F2` → calcula quantos dias se passaram desde a última ligação.
- **💡 Dica**: A fórmula de idade é simplificada e pode errar por até 1 ano em alguns casos (quando o aniversário da pessoa ainda não chegou no ano atual). Para uma turma iniciante isso é suficiente, mas se quiser mais precisão, essa correção pode ser vista em uma aula futura.

### 📊 Painel de Controle — Estatísticas da Agenda
- Depois de preencher a tabela com vários contatos, criar um resumo automático:

| Estatística | Fórmula |
| :--- | :--- |
| Data de hoje | `=HOJE()` |
| Total de contatos | `=CONT.NÚM(A2:A6)` |
| Idade média | `=MÉDIA(E2:E6)` |
| Idade mais alta | `=MÁXIMO(E2:E6)` |
| Idade mais baixa | `=MÍNIMO(E2:E6)` |
| Média de dias sem contato | `=MÉDIA(G2:G6)` |

- **O que cada função faz**:
  - `CONT.NÚM` — conta quantas células têm números preenchidos.
  - `MÉDIA` — calcula a média dos valores.
  - `MÁXIMO` e `MÍNIMO` — encontram o maior e o menor valor da lista.

### 🔔 Alertas Automáticos
- **Aviso de aniversário do mês** (coluna H):
  - `=SE(MÊS(D2)=MÊS(HOJE()); "Aniversariante!"; "")`
- **Aviso de contato urgente** (coluna I) — quando já se passaram mais de 15 dias sem ligar:
  - `=SE(G2>15; "Ligar urgente!"; "")`

### 📅 Cálculo de Prazo de Projeto
- Calcular quantos dias um projeto vai durar, incluindo apenas os dias úteis (sem contar sábados e domingos):

| Descrição | Data | Fórmula |
| :--- | :--- | :--- |
| Início do Projeto | 01/11/2025 | (digite direto na célula) |
| Fim do Projeto | 30/11/2025 | (digite direto na célula) |
| Total de dias | — | `=B12-B11` |
| Dias úteis | — | `=DIAS.ÚTEIS(B11;B12)` |
| Dias comerciais (30 dias/mês) | — | `=DIAS360(B11;B12)` |

### ✏️ Exercícios para Praticar (encerramento da aula)
1. Crie uma planilha com a sua data de nascimento e calcule quantos dias você já viveu (use `=HOJE()-sua_data`).
2. Liste 5 amigos com as datas de nascimento deles e descubra quem faz aniversário este mês.
3. Calcule quantos dias úteis ainda faltam até o final deste ano.
4. Crie um alerta para contatos que você não liga há mais de 30 dias.
5. Monte um contador de dias para uma data importante para você (casamento, formatura, viagem, etc.).

---

## 🧩 5. Especificação do Quiz de Fixação (5 Questões)

> **Regras**: 5 questões de múltipla escolha (4 alternativas), nota mínima de aprovação **7,0 / 10,0** (≥ 4 acertos), validação SHA-256 (`WR-XXXX-XXXX`) e exportação TXT/PDF/WhatsApp/E-mail. Segue o padrão das Aulas 01 a 05.

1. **Questão 1 (Função HOJE)**:
   - *Pergunta*: Qual é o comportamento da função `=HOJE()` ao reabrir a planilha no dia seguinte?
   - *Alternativas*:
     - a) Mantém a data original em que foi digitada
     - b) Atualiza automaticamente para a nova data [Correta]
     - c) Retorna um erro de referência
     - d) Mostra a hora atual somente
   - *Dica*: A função HOJE() é volátil — recalcula sempre que a planilha é aberta ou atualizada.

2. **Questão 2 (Diferença HOJE × AGORA)**:
   - *Pergunta*: Qual é a diferença principal entre `=HOJE()` e `=AGORA()`?
   - *Alternativas*:
     - a) HOJE() retorna data e hora; AGORA() retorna somente data
     - b) HOJE() retorna somente a data; AGORA() retorna data e hora [Correta]
     - c) Ambas retornam apenas a data
     - d) AGORA() retorna a hora de sistema do computador
   - *Dica*: AGORA() inclui a hora do momento; HOJE() trabalha apenas com a data.

3. **Questão 3 (Função DATA)**:
   - *Pergunta*: Qual fórmula monta corretamente a data 25 de dezembro de 2025?
   - *Alternativas*:
     - a) `=DATA(12;25;2025)`
     - b) `=DATA(2025;25;12)`
     - c) `=DATA(2025;12;25)` [Correta]
     - d) `=DATA("25/12/2025")`
   - *Dica*: A ordem dos argumentos é ANO, MÊS, DIA — não confunda com o formato brasileiro.

4. **Questão 4 (DIAS360 vs DIAS.ÚTEIS)**:
   - *Pergunta*: Para calcular quantos dias de segunda a sexta existem entre 01/11/2025 e 30/11/2025, qual função usar?
   - *Alternativas*:
     - a) `=DIAS360(B11;B12)`
     - b) `=B12-B11`
     - c) `=DIAS.ÚTEIS(B11;B12)` [Correta]
     - d) `=HOJE()-B11`
   - *Dica*: DIAS.ÚTEIS() conta apenas dias de segunda a sexta — ideal para prazos de trabalho.

5. **Questão 5 (Cálculo de Idade e Alertas)**:
   - *Pergunta*: Na planilha de Agenda de Contatos, a fórmula `=SE(MÊS(D2)=MÊS(HOJE()); "Aniversariante!"; "")` verifica:
   - *Alternativas*:
     - a) Se a pessoa fez aniversário no dia exato de hoje
     - b) Se o mês de nascimento da pessoa é igual ao mês atual [Correta]
     - c) Se a pessoa tem mais de 18 anos
     - d) Se a pessoa foi contatada este mês
   - *Dica*: MÊS() compara apenas o número do mês — se forem iguais, a pessoa faz aniversário neste mês.

### 5.1 Gabarito Oficial (Índices 0-based e 1-based)
| Questão | Resposta Correta | Índice (0-based) | Descrição |
| :--- | :--- | :--- | :--- |
| 1 | B — Atualiza automaticamente | `1` | HOJE() é volátil |
| 2 | B — HOJE() data; AGORA() data+hora | `1` | Diferença entre funções |
| 3 | C — DATA(2025;12;25) | `2` | Ordem correta ANO;MÊS;DIA |
| 4 | C — DIAS.ÚTEIS() | `2` | Dias de segunda a sexta |
| 5 | B — Mês atual = mês nascimento | `1` | Aniversariante do mês |

> **Gabarito mapeado em array JS**: `const GABARITO_L6 = [1, 1, 2, 2, 1];`

---

## 🎨 6. Ergonomia e Regras de Interface

- **Botão de PDF na Barra Superior / Início da Aula**: Botão `📑 Baixar Apostila Didática em PDF` no topo, chamando `window.PDFLessons.downloadLessonPDF('excel', 6)`.
- **Formatação de Fórmulas em Código**: Fórmulas exibidas em fonte monoespaçada (`JetBrains Mono`) com fundo claro, exatamente como no material-fonte (`=HOJE()`, `=AGORA()`, `=DATA(2025;12;25)`, `=DIAS360(A1;B1)`).
- **Tabelas de Comparação**: Tabelas comparativas (HOJE × AGORA, métodos de contagem de dias) com bordas leves e alternating row color para facilitar a leitura.
- **Nota Mínima do Quiz**: **7,0 / 10,0** (acerto de ao menos 4 de 5 questões) para aprovação e liberação do comprovante.
- **Validação Anti-Fraude**: Geração de Hash SHA-256 e botões de envio via WhatsApp (`19 99130-6907`) e E-mail (`okcomputer.use.linux@gmail.com`).
- **Otimização de Impressão**: Regras `@media print` com `page-break-inside: avoid; break-inside: avoid;` para que as tabelas de dados, o simulador Date & Time Lab e as comparações de métodos não fiquem cortados entre páginas.

---

## 🗂️ 7. Plano de Implementação (Fase 3 — Futura)

> **Nota**: Esta seção é referência para a etapa de codificação (Fase 3). A validação da presente especificação é pré-requisito antes de qualquer alteração em `modules/excel/index.html`.

1. **Hub (`modules/excel/index.html`)**:
   - Alterar a AULA 06 de `🔒 Em Construção` para `🔓 Aula Liberada (Senha xf006)`.
   - Vincular o card ao `promptLessonPassword(6, 'Datas e Horas no Excel: HOJE, AGORA, DATA, DIA, MÊS, ANO, DIAS360, DIAS.ÚTEIS')`.
2. **Tela da Aula 06** (`#screen-lesson-6`):
   - Clonar a estrutura do `#screen-lesson-5` (header, gamify progress, cartão de leitura, abas `topic-tabs-bar`, painel de fixação).
   - Implementar os 7 tópicos didáticos conforme a Seção 1 e os conteúdos da Seção 4.
   - Renomear IDs: `l6-phase-X`, `tab-l6-X`, `btn-read-l6-X`, `gamify-label-6`, `gamify-fill-6`, `gamify-badge-box-6`.
3. **Simulador Date & Time Lab**: Implementar conforme a Seção 3 com funções `calcDateAge()`, `updateDateResults()`, `compareDayCountingMethods()`, `updateAlertStatus()`.
4. **Quiz**: Adicionar `GABARITO_L6 = [1, 1, 2, 2, 1]`, `QUESTOES_L6`, funções `selectFixOption(6, ...)` e `calcFixation(6)` reutilizando o motor `quiz-engine.js`.
5. **Gerador de PDF (`assets/js/pdf-lessons.js`)**:
   - Adicionar o bloco do Excel Aula 06 (`lessonNum: 6`) com o conteúdo das 7 seções e o exercício completo (agenda de contatos + estatísticas + alertas + prazo de projeto).
6. **Tríade de Documentação**: Atualizar `ROADMAP.md`, `INDEX.md` e `DOCUMENTATION.md` (Registro Cronológico) após a implementação.

---

## 📚 8. Referências Didáticas e Acadêmicas

1. **Walkenbach, J. (2015)**. *Excel 2016 Bible*. John Wiley & Sons.
2. **Alexander, M., & Kusleika, R. (2019)**. *Excel 2019 Bible / Excel Analysis*. Wiley.
3. **Microsoft Learn (2024)**. *Documentação Oficial de Fórmulas e Funções do Microsoft Excel* (HOJE, AGORA, DATA, DIA, MÊS, ANO, DIAS360, DIAS.ÚTEIS). Microsoft Press.
4. **W3C (2023)**. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.
