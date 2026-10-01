# SDD-AULA-11-12-13-PROJETO-VENDAS — Projeto Integrado "Sistema de Controle de Vendas"

### Aulas 11, 12 e 13 do Módulo Excel (Módulo 3)
### Prof. Marcos Rangel — WR Capacitação Profissional

---

## 1. Problema Identificado

O Módulo Excel (13 aulas) estava completo até a **Aula 09**. Os cards das Aulas 10, 11, 12 e 13 ainda exibiam "Em Construção" (`alertLockedLesson`). As Aulas 11, 12 e 13 compõem o **Projeto Prático Integrado — Sistema de Controle de Vendas**, baseado na apostila de referência `AulaOrigem/excel/Aula_12_a_13_Sistema_Controle_Vendas.html`, e precisavam ser implementadas sem o quiz tradicional (decisão do requisitante).

**Decisões de escopo tomadas com o requisitante:**
1. O projeto final será dividido em **3 aulas completas** (11, 12 e 13), cada uma com **FASE 0 + checks distribuídos** e **gating sequencial** (só avança do passo N para N+1 marcando o check no fim da fase) — mesmo modelo aprovado da Aula 09.
2. **Sem quiz de fixação em nenhuma das 3 aulas** — a avaliação é o próprio projeto (entregável).
3. A **Aula 13** termina com uma fase de **ENTREGA AO PROFESSOR**: o aluno anexa o arquivo `.xlsm` para auditoria e recebe uma **mensagem de parabéns pela conclusão do módulo e de toda a jornada** (recapitulação das 13 aulas).
4. As senhas seguem o padrão oficial do `PASSWORDS`: **11 → `xk011`**, **12 → `xl012`**, **13 → `xm013`** (já presentes no `index.html`).

---

## 2. Objetivo

Transformar o cadastro dos 3 cards finais do hub Excel em aulas funcionais e completas do **Projeto Integrado de Vendas**, seguindo o modelo canônico da Aula 09 (FASE 0, roteiro numerado, checks distribuídos, gating sequencial, gamificação) adaptado para **aulas sem quiz** (progresso de leitura até 100 %, em vez dos 60 % + 40 % de exercício).

---

## 3. Referência Pedagógica (fonte do conteúdo)

**Arquivo:** `AulaOrigem/excel/Aula_12_a_13_Sistema_Controle_Vendas.html` ("Aula 11 a 13 – Projeto Final · Sistema de Controle de Vendas").

- Empresa fictícia: **Tech Solutions**.
- Estrutura do arquivo (4 planilhas da Pasta de Trabalho):
  1. `Dados_Vendas` — base de lançamentos de vendas.
  2. `Dashboard` — painel com indicadores e gráfico.
  3. `Analise_Vendedor` — relatório por vendedor via Tabela Dinâmica.
  4. `Configuracoes` — listas de apoio (vendedores, produtos, regiões) que alimentam a validação de dados.
- Etapas da apostila (usadas na divisão das fases): 1) preparação inicial/renomeação das planilhas; 2) Configurações; 3) Dados de Vendas (cabeçalhos, validação, fórmulas automáticas, dados de exemplo, converter em tabela); 4) Dashboard; 5) Tabela Dinâmica; 6) configuração de impressão; 7) macros (AtualizarDados, VerImprimir, botões); 8) salvar como `.xlsm`.

---

## 4. Divisão do Conteúdo entre as 3 Aulas

| Aula | Título (hub) | Conteúdo (fases) | Total de fases / checks / tabs |
| :--- | :--- | :--- | :--- |
| **11** | Projeto Vendas: Estruturação | Preparação inicial, Configuracoes, Dados_Vendas (cabeçalhos, validação, fórmulas, dados, tabela) | 7 fases |
| **12** | Projeto Vendas: Automação & Regras | Dashboard (título, indicadores, resumo SOMASE, gráfico, formatação) + Tabela Dinâmica | 6 fases |
| **13** | Projeto Vendas: Dashboard & Conclusão | Impressão, Macros (AtualizarDados e VerImprimir), botões no Dashboard, salvar `.xlsm`, **Entrega ao Professor + Parabéns** | 6 fases |

### 4.1 Fases da Aula 11 (Estruturação)
1. **Preparação Inicial** — criar a pasta de trabalho e renomear/inserir as planilhas: `Configuracoes`, `Dados_Vendas`, `Dashboard`, `Analise_Vendedor`.
2. **Planilha "Configuracoes"** — digitar as listas de apoio (Vendedores, Produtos, Regiões) e formatar como tabela (`Formatar como Tabela`).

3. **Dados_Vendas — Cabeçalhos e Formatação** — digitar os cabeçalhos (Nº da Venda, Data, Vendedor, Produto, Região, Qtd, Preço Unit, Total) e formatar.
4. **Dados_Vendas — Validação de Dados** — listas suspensas para Vendedor, Produto e Região apontando para a `Configuracoes`.
5. **Dados_Vendas — Fórmulas automáticas** — `=LIN()-1` (numeração automática) e `=F2*G2` (Total da venda), arrastadas com alça de preenchimento.
6. **Dados_Vendas — Dados de exemplo** — lançar ~10 vendas da Tech Solutions.
7. **Dados_Vendas — Converter em Tabela** — `Inserir → Tabela` (Ctrl+T) com "Minha tabela tem cabeçalhos".

### 4.2 Fases da Aula 12 (Automação & Regras)
1. **Dashboard — Título** — reunir/mesclar células e titular o painel.
2. **Dashboard — Indicadores** — cartões com `=SOMA()` (Total de Vendas), `=MÉDIA()` (Ticket médio), contagem e formatação de moeda.
3. **Dashboard — Tabela de Resumo por Vendedor** — `=SOMASE()` com o nome do vendedor na célula de critério.
4. **Dashboard — Gráfico de Colunas** — inserir gráfico a partir da tabela de resumo e ajustar título/cores.
5. **Dashboard — Formatação e aparência** — cores da Tech Solutions, alinhamento, bordas.
6. **Tabela Dinâmica (Analise_Vendedor)** — `Inserir → Tabela Dinâmica` sobre `Dados_Vendas`; LINHAS = Vendedor/Produto, COLUNAS = Região, VALORES = Soma de Total.

### 4.3 Fases da Aula 13 (Dashboard & Conclusão)
1. **Configuração de Impressão** — `Ctrl+P`, orientação, ajustar para 1 página, margens.
2. **Macro AtualizarDados** — gravar macro que atualiza a Tabela Dinâmica (`ThisWorkbook.RefreshAll()` no VBA) e executar via Desenvolvedor.
3. **Macro VerImprimir** — criar módulo no VBA com `ActiveWindow.SelectedSheets.PrintPreview`.
4. **Botões no Dashboard** — inserir formas/botões "Imprimir Dashboard" e "Imprimir Análise" ligados às macros.
5. **Salvando o Projeto** — salvar como **Pasta de Trabalho Habilitada para Macros (.xlsm)**.
6. **Entrega ao Professor & Parabéns** — anexar o `.xlsm` (WhatsApp/E-mail do professor para auditoria) + botão de conclusão que mostra a **mensagem de parabéns pela jornada completa do módulo** (recap das 13 aulas).

---

## 5. Requisitos Obrigatórios de Tela (padrão Aula 09, sem quiz)

1. **FASE 0** sempre presente no topo de cada aula: caixa verde com
   - 🎯 O QUE VAMOS FAZER (objetivo);
   - 🗺️ COMO VAMOS FAZER — **roteiro numerado em chips** (sem checkbox);
   - contador `▢ X / N passos concluídos` (`#l11-checklist-status`, `#l12-checklist-status`, `#l13-checklist-status`);
   - hint de conclusão (`#l11-complete-hint`, etc.);
   - 🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL (mini-sheet);
   - botão "▶ ENTENDI! QUERO COMEÇAR A AULA ↓".
2. **Checks distribuídos**: um `.phase-step-check` com checkbox `.l11-check`/`.l12-check`/`.l13-check` **no fim de cada fase**, exatamente onde o passo é executado. **Gating sequencial** via IIFE por aula (checkbox i libera i+1; os seguintes ficam com "🔒 Marque o passo anterior para liberar este check."). **Proibido agrupar checks num único lugar.**
3. **Gamificação**: barra `gamify-label-N`/`gamify-fill-N`/`gamify-badge-box-N` por aula. Por serem aulas **sem quiz**, o progresso de leitura vai **até 100 %** e o badge final vira "🏆 Projeto Concluído" (função `updateProjectGamification`).
4. **Botões "◯ Marcar Tópico N como Lido"** no fim de cada fase (`btn-read-l11-N`, etc.), chamando `markTopicRead(11|12|13, N)`.
5. **Abas de navegação** (`tab-l11-1..7`, `tab-l12-1..6`, `tab-l13-1..6`) usando `switchTopicPhase(11|12|13, N)` + navegação inferior `← Tópico anterior` / `Próximo tópico →`.
6. **Topo da aula**: `← Voltar ao Menu do Módulo`, `🖨️ Imprimir Aula Completa`, `📑 Baixar Apostila PDF` (`window.PDFLessons.downloadLessonPDF('excel', 11|12|13)`).
7. **Ilustrações**: ilustrações HTML reais (mini-sheets `.es-sheet-box`/`.mini-sheet`/`.fun-highlight` inline) em cada fase — sem "🖼️ Referência de imagem". Nenhum PNG novo será criado (o projeto é reproduzido em células); complementos opcionais de imagem seguiriam `../../assets/img/excel/a11|a12|a13/...`.
8. **Aula 13 — Entrega**: fase 6 com instruções de anexo + botão `🎉 CONCLUIR PROJETO E VER O PARABÉNS` (`concludeProject(13)`), que popula o último slot de leitura, leva a gamificação a 100 % e exibe `#l13-congrats` (mensagem de parabéns + jornada das 13 aulas).

---

## 6. Cards do Hub (alterações)

Substituir nos 3 cards finais (`modules/excel/index.html`, ~linhas 644–672):
- `onclick="alertLockedLesson(...)"` → `onclick="promptLessonPassword(11|12|13, '<título>')"`.
- Ícones `🚧` → `🔒` com `id="badge-lesson-11|12|13"`.
- Textos: "Em Construção (Senha ...)" → "🔓 Aula Liberada (Senha `xk011`/`xl012`/`xm013`)" no estilo das Aulas 1–9 (sem expor dica extra; a senha continua presencial — esse texto é o mesmo padrão já usado nas Aulas 1–9 do hub).
- Manter os destaques visuais (verde para 11/12, âmbar/verde para 13).
- **Aula 10 permanece "Em Construção"** (`alertLockedLesson`), senha `xj010`.

> ⚠️ O texto "Senha `xk011`" nos cards segue o padrão já existente do hub (Aulas 1–9 exibem "Aula Liberada (Senha `xa001`)"); a **Regra de Ouro** (nenhuma senha/dica exposta em modal) permanece atendida — o modal de senha não exibe dicas.

---

## 7. Alterações no Código Fonte

### 7.1 `modules/excel/index.html`
- 3 novos screens: `<section id="screen-lesson-11" class="screen-view">`, `screen-lesson-12`, `screen-lesson-13` (inseridos antes do `password-modal`, ~linha 6986). Cada um: topo de ações, barra gamificada, card de leitura com FASE 0, `<nav class="topic-tabs-bar">`, fases `l11-phase-1..7` / `l12-phase-1..6` / `l13-phase-1..6`, checks, `btn-read`, IIFE de gating por aula.
- JS de configuração:
  - `readStatus` ganha as chaves `11: [false×7]`, `12: [false×6]`, `13: [false×6]`.
  - `markTopicRead` passa a desviar para `updateProjectGamification(lessonNum)` quando `lessonNum >= 11`.
  - Nova função `updateProjectGamification(lessonNum)` (100 % por leitura; badge "🏆 Projeto Concluído" ao atingir 100 %).
  - Nova função `window.concludeProject = function()` específica da Aula 13: marca o último tópico, atualiza badge/label (ex.: "🎓 Projeto Entregue — Parabéns!"), exibe `#l13-congrats` e rola até ele.
  - `openFixationPanel`/quiz: **não aplicado** às aulas 11–13.

### 7.2 `assets/js/pdf-lessons.js`
- Seções novas de `LESSONS.excel` com `lessonNum: 11`, `12`, `13` (FASE 0 + tópicos, todas com ilustrações `html`: `mini-sheet`, `es-sheet-box`, `fun-highlight`).
- `moduleLessonTitles.excel` ganha chaves `11`, `12`, `13`:
  - 11: "Aula 11: Projeto Vendas — Estruturação"
  - 12: "Aula 12: Projeto Vendas — Automação & Regras"
  - 13: "Aula 13: Projeto Vendas — Dashboard & Conclusão"

### 7.3 Docs
- `Docs/SPEC-EXCEL-MASTER.md`: atualizar o status das Aulas 11–13 (Aula 14 planejada), seção "Aulas Liberadas".
- `Docs/CONTINUACAO.md`: registrar a sessão (concluído/pendente/validações).

---

## 8. Auditoria da Geração de PDF (regra permanente)

- `node --check assets/js/pdf-lessons.js`.
- Cada seção 11.x/12.x/13.x deve conter ilustração `html` real; nenhum "🖼️ Referência de imagem".
- Extrair os `<script>` inline de `modules/excel/index.html` e rodar `node --check` em cada bloco.
- Conferir: `uniq -d` vazio (sem IDs duplicados) e contagens esperadas (ex.: `btn-read-l13-` × 6, `l13-phase-` × 6, `tab-l13-` × 6, `l13-check` × 6).

---

## 9. Checklist de Validação (pós-implementação)

- [ ] Card Aula 11 → senha `xk011` abre `screen-lesson-11` (7 fases).
- [ ] Card Aula 12 → senha `xl012` abre `screen-lesson-12` (6 fases).
- [ ] Card Aula 13 → senha `xm013` abre `screen-lesson-13` (6 fases + entrega).
- [ ] Gating sequencial: marcar `l11-check-N` libera `l11-check-N+1`; idem 12/13.
- [ ] `markTopicRead(11..13, N)` avança gamificação até 100 % (sem quiz).
- [ ] Aula 13: `concludeProject()` → 100 %, badge "🏆", painel `#l13-congrats` com recap das 13 aulas visível.
- [ ] PDF `('excel', 11/12/13)` com seções e ilustrações HTML; `node --check` OK; scripts inline OK; sem IDs duplicados.
- [ ] Mobile (≤767px): largura 100 % e gating legível (regra global do `style.css`; nenhum `@media` por aula adicionado).
- [ ] Aula 10 permanece "Em Construção".