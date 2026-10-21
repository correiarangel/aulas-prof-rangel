### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 🟢 **IMPLEMENTADA E VALIDADA TECNICAMENTE** (15/10/2026) — Aula 05: Área de Trabalho, Pastas e Arquivos
### ⚠️ Aprovação visual manual humana (telas + PDF): **PENDENTE** para toda a série — ver `Docs/CONTINUACAO.md` §7
### ✅ Revisão 15/10/2026: inventário de imagens, estrutura-fonte e localizadores de código **reconferidos** contra `AulaOrigem/windows/Aula 5 Área de trabalho pasta e arquivos/` — ver **§12 Avaliação**.

---

## 🎯 1. Análise da Base de Informação (material de origem)

### 1.1 Arquivos analisados

| Arquivo | Papel |
|:---|:---|
| `AulaOrigem/windows/Aula 5 Área de trabalho pasta e arquivos/Aula5readetrabalhopastaearquivos.html` | apostila de origem (HTML de linha única, ~17 KB, estilos Google Docs) |
| `AulaOrigem/windows/Aula 5 Área de trabalho pasta e arquivos/images/` (14 PNG, ~988 KB) | screenshots de pastas/arquivos, ícones e telas do Windows Explorer |

A aula de origem ensina **o que são pastas, arquivos e bibliotecas** (com a analogia "pasta = gaveta, arquivo = roupa"), como reconhecer **extensões e nomes de arquivo**, **o que é o Windows Explorer** (renomeado "Explorador de Arquivos" no Windows 8/10/11), seus **8 painéis** e as operações do dia a dia: **criar, renomear, excluir, copiar e mover** arquivos e pastas — fechando com dois exercícios práticos.

### 1.2 Título e subtítulo

- **Título no portal:** `Aula 05: Área de Trabalho, Pastas e Arquivos` (string já usada no card do hub, L345).
- **Entrada do hub:** `Área de Trabalho, Pastas e Arquivos` (o `promptLessonPassword` recebe exatamente essa string).
- **Título do PDF:** `Aula 05: Área de Trabalho, Pastas e Arquivos — Do Ícone ao Explorador` (`moduleLessonTitles.windows[5]`).

### 1.3 Estrutura do conteúdo de origem

A origem traz os blocos: `Introdução` (gavetas/roupas) · `Conceituação de pasta, arquivo e biblioteca` (com extensões e nomenclatura) · `Apresentação do Windows Explorer` (ícone, telas e os **8 painéis**) · `Como criar` pasta e arquivo · `Como renomear` · `Como excluir` · `Como copiar` · `Como mover (arrastar)` · `Exercício 2` (estrutura de pastas do curso) · `Exercício 3` (arquivo "Notas" com IP e capacidade de armazenamento). A spec reorganiza esses blocos em **8 fases** e acrescenta a `5.0` FASE 0 → **9 seções** no portal e no PDF.

> **Conferência 15/10/2026**: os blocos de origem foram lidos integralmente (`Aula5readetrabalhopastaearquivos.html`, 17 KB, 14 `<img>`). A origem **não** detalha texto para "excluir/copiar/mover" — só os títulos das perguntas; essa fase é **completada pela spec** com o conteúdo didático padrão do Windows (ver §9).

### 1.4 Inventário das 14 imagens e o que elas mostram

> **Legenda:** a numeração "Imagem 1…11" da origem é **inconsistente** (14 arquivos, repete "Imagem 10" duas vezes: criar pasta e criar arquivo). As legendas do portal serão **descritivas em português**, sem repetir a numeração quebrada.

| Arquivo | Dimensão | Onde entra (fase) | Sentido da legenda |
|:---|:---|:---|:---|
| `image13.png` | 552×327 | 5.1 | Analogia "pasta = gaveta, arquivo = roupa" (gavetas com roupas) |
| `image5.png` | 593×364 | 5.1 | O que é uma pasta? (definição em lista) |
| `image10.png` | 542×330 | 5.1 | O que é um arquivo? (exemplos com ícones) |
| `image11.png` | 557×370 | 5.2 | Extensões de arquivo (.txt, .docx, .jpg, .mp3…) |
| `image7.png` | 602×355 | 5.2 | Nomenclatura de arquivos e pastas (nome + extensão) |
| `image2.png` | 560×319 | 5.3 | Janela do Windows Explorer |
| `image12.png` | 254×256 | 5.3 | Ícone do Windows Explorer na barra de tarefas |
| `image8.png` | 623×421 | 5.3 | Windows Explorer aberto em "Este Computador" |
| `image6.png` | 623×346 | 5.4 | Windows Explorer em "Documentos" — com os painéis apontados |
| `image9.png` | 633×419 | 5.5 | Como criar uma pasta |
| `image4.png` | 611×405 | 5.5 | Como criar/salvar um arquivo (Salvar > nome > Salvar) |
| `image14.png` | 579×440 | 5.6 | Como renomear pastas e arquivos (menu do botão direito) |
| `image1.png` | 582×445 | 5.8 | Modelo de estrutura de pastas do curso (Exercício 2) |
| `image3.png` | 234×213 | 5.8 | Ícone/pasta de trabalho do Exercício 3 |

Copiadas para `assets/img/windows/Aula5/` (14 PNG, ~988 KB) — mesmo nome (`image1.png`…`image14.png`) para manter o padrão das Aulas 1–4.

> **Tamanho das imagens (decisão 15/10/2026)**: a regra global `.lesson-reading-card img { max-width:92% !important }` governa o tamanho na tela; os `style="max-width:…"` inline são inertes. Ficam em **largura total** (`style="width:100%;"`) as telas largas do Explorer: `image8` (5.3), `image6` (5.4), `image9` (5.5), `image14` (5.6) e `image1` (5.8). As demais ficam em tamanho natural / 2 colunas. No PDF o equivalente é `wide: true` **por imagem** (classe `.pdf-img-wide`), como na Aula 4.

### 1.5 Diagnóstico: o que já existe no portal

A Aula 5 **já tem card no hub, mas está inativo**: `modules/windows/index.html:344` tem `promptLessonPassword(5, 'Área de Trabalho, Pastas e Arquivos')` **sem** a classe `active-lesson`, com rótulo "🔒 Em Construção" (span final `🚧`). **Não existe** `screen-lesson-5`, `QUESTIONS_LESSON_5`, `QUIZ_CFG[5]`, `PASSWORD_A5`, seções no PDF nem `moduleLessonTitles.windows[5]` — hoje, pedir `downloadLessonPDF('windows', 5)` cai na guarda L-04 e avisa "A apostila da Aula 5 ainda não foi produzida". Tudo nesta aula é **novo**; as estruturas compartilhadas de leitura/quiz serão mexidas apenas de forma **aditiva**.

> **Localizadores atuais (15/10/2026)** — hub L344–352 · senhas L5008–5013 · gate L5589 · rotas L5591–5601 · `OPEN_LESSONS` L5565 · `TOTAL_TOPICS`/`SEQUENTIAL_LESSONS` L5637–5638 · `openFixationPanel` L5754 · `QUESTIONS_LESSON_4` L5252 · `QUIZ_CFG` L6067–6075 · eventos L6235 · `moduleLessonTitles.windows` L4376. A seção nova `screen-lesson-5` entra **antes de** `screen-lesson-7` (L3554), depois de `screen-lesson-4` (L3124–3553).

---

## 📐 2. Definição da Aula (decisões de projeto)

| Item | Valor |
|:---|:---|
| Origem | `Aula 5 Área de trabalho pasta e arquivos` |
| Seções de leitura | **9** (`TOTAL_TOPICS[5] = 9` = FASE 0 + 8 fases) |
| Checks | **9** (`check-read-5-1..9`, padrão `l5-fase-0` + `l5-phase-1..8`) |
| Sequencial | **sim** (`SEQUENTIAL_LESSONS` inclui `5`) |
| Componente interativo novo | **nenhum** — só o quiz de fixação (a origem não tem brinquedo; FASE 8 são os Exercícios 2 e 3 no PC do aluno) |
| Senha | `wr0526` — ⚠️ **candidata, ainda não confirmada pelo professor** |
| Persistência da leitura | `wrWindowsReadTopics` (compartilhada com as outras aulas do módulo) |
| Persistência do quiz | `windows-aula-5:aluno(a)` (`QuizEngine`) |
| Imagens | 14 PNG em `assets/img/windows/Aula5/` |
| PDF | 9 seções `lessonNum: 5` (5.0 → 5.8) |
| Rota | `5: "screen-lesson-5"` |
| Arquivo novo | **nenhum** |

---

## 🎓 3. Estrutura Pedagógica da Aula (FASE 0 + 8 fases)

### 3.1 FASE 0 — Antes de Começar

`#l5-fase-0` traz objetivo + **roteiro numerado em 8 passos** e é um `div` com a classe `tab-panel` (não `.topic-phase-section`) — as fases 1–8 usam `.topic-phase-section`. Roteiro (cada passo é a fase correspondente):

1. Entender o que são pastas, arquivos e bibliotecas (a analogia da gaveta).
2. Reconhecer extensões e como se formam os nomes de arquivo.
3. Conhecer o **Explorador de Arquivos** (antigo Windows Explorer) e como abri-lo.
4. Identificar os **8 painéis** da janela do Explorador.
5. **Criar** pastas e arquivos.
6. **Renomear** pastas e arquivos.
7. **Excluir, copiar e mover** arquivos e pastas.
8. Executar os **Exercícios 2 e 3** e marcar o último check.

Sem glossário extenso e sem lista de materiais (Regra 1).

### 3.2 Mapa de checks distribuídos (regra de ouro — proibido agrupar)

| Check | Fase | Libera |
|:---|:---|:---|
| `check-read-5-1` | `l5-fase-0` | 2 |
| `check-read-5-2` | `l5-phase-1` | 3 |
| `check-read-5-3` | `l5-phase-2` | 4 |
| `check-read-5-4` | `l5-phase-3` | 5 |
| `check-read-5-5` | `l5-phase-4` | 6 |
| `check-read-5-6` | `l5-phase-5` | 7 |
| `check-read-5-7` | `l5-phase-6` | 8 |
| `check-read-5-8` | `l5-phase-7` | 9 |
| `check-read-5-9` | `l5-phase-8` (exercícios) | barra em 100% |

Cada check fica **no fim da fase correspondente**, exatamente onde está a instrução de executar o passo; nada agrupado (Regra 1). Abas: `tab-btn-5-1..8` + `tab-btn-5-fix` (Exercício de 5 Perguntas 📝).

Rótulos sugeridos das abas:
`1. Pastas, Arquivos e Bibliotecas` · `2. Extensões e Nomes` · `3. Explorador de Arquivos` · `4. Os 8 Painéis` · `5. Criar` · `6. Renomear` · `7. Excluir, Copiar e Mover` · `8. Exercícios`.

### 3.3 Reinício e barra gamificada

- `initReading` injeta "↺ Recomeçar a leitura" em **todas** as barras do módulo (itera `Object.keys(TOTAL_TOPICS)` — basta incluir `5`).
- Cabeçalho: `gamify-bar-5`, `gamify-percent-5`, `gamify-badge-box-5`; badge do hub `badge-lesson-5`.
- Progresso em **9** passos (11% · 22% · … · 100%). Badge final `🎉 LEITURA COMPLETA!` (padrão do módulo).

### 3.4 FASE 8 — Exercícios Práticos (Exercício 2 e Exercício 3 da origem)

Checklist **no PC do aluno**, sem exigir mudanças irreversíveis na máquina da escola:

1. **Exercício 2** — criar uma estrutura de pastas das disciplinas do curso (modelo `image1`).
2. Abrir a pasta criada, clicar com o **botão direito** → **Novo → Pasta de Texto** e salvar como **"Notas"**.
3. **Exercício 3** — dentro do arquivo "Notas", registrar o **IP do seu PC** e a **capacidade total de armazenamento** (HD / SSD / NVMe).
4. Onde achar: IP em `Painel de Controle → Rede` (ou `ipconfig`); capacidade em `Este Computador` (propriedades do disco).
5. Voltar ao menu da aula e marcar o check.

A fase termina com aviso explícito: **"Nenhum arquivo pessoal precisa ser apagado; crie tudo dentro de uma pasta de teste"** (evita que o aluno mexa em pastas do sistema).

---

## 🔒 4. Autenticação e Senha

`PASSWORD_A5 = "wr0526"` — **candidata**, inserida na mesma lista de comparação do gate único:

```js
const PASSWORD_A1 = "wr0126"; … const PASSWORD_A5 = "wr0526"; …
// linha ~5589: if(typed === PASSWORD_WR || … || typed === PASSWORD_A5 || typed === "a001" || …)
```

- `promptLessonPassword(5, 'Área de Trabalho, Pastas e Arquivos')` → modal `Aula 5: Área de Trabalho, Pastas e Arquivos`; senha errada mostra alerta e **não** navega.
- `OPEN_LESSONS = [1, 2, 3, 4, 5, 7, 8, 71, 81]` e o alerta de aulas em construção passa a listar `as Aulas 01, 02, 03, 04, 05, 07 e 08 estão disponíveis no portal`.
- Rota: `5: "screen-lesson-5"` (mapa de rotas, linha ~5591).

---

## 📝 5. Quiz de Fixação (5 questões × 4 alternativas)

`QUESTIONS_LESSON_5` — 4 alternativas por questão (padrão real do módulo Windows), `PASS_SCORE = 7.0` (2,0 por questão, máxima 10,0), `correct` 0-based:

| # | Pergunta | Alternativas (correct) | Dica |
|:--|:---|:---|:---|
| 1 | Qual comparação usada na aula explica bem o que é uma pasta e o que é um arquivo? | **Pasta é como uma gaveta e arquivo é como a roupa guardada dentro dela (1)** · Pasta é um programa e arquivo é um atalho · Pasta é hardware e arquivo é software · Pasta só existe na internet | A pasta serve para organizar; o arquivo é o conteúdo guardado. |
| 2 | Em "relatorio.docx", o que é ".docx"? | O nome do arquivo · **A extensão, que indica o tipo/programa do arquivo (1)** · O tamanho do arquivo · A pasta onde ele está salvo | A extensão vem depois do ponto final e diz de que tipo é o arquivo. |
| 3 | No Windows 8, 10 e 11, o antigo "Windows Explorer" passou a se chamar: | Gerenciador de Tarefas · **Explorador de Arquivos (ou Explorador do Windows) (1)** · Painel de Controle · Prompt de Comando | Só o nome mudou; o ícone da pastinha continua o mesmo. |
| 4 | Qual painel do Explorador de Arquivos mostra uma prévia do arquivo sem precisar abri-lo? | Painel de Navegação · Barra de Endereço · **Painel de Detalhes (1)** · Caixa de Pesquisa | Ele fica no rodapé da janela e descreve o item selecionado. |
| 5 | Para **renomear** uma pasta ou arquivo no Explorador, o caminho mais direto é: | Apagá-lo e criar outro com o nome novo · **Clicar com o botão direito → Renomear (ou tecla F2) e digitar o novo nome (1)** · Arrastá-lo para outra pasta · Desligar e ligar o PC | O botão direito abre o menu onde ficam Renomear, Copiar, Excluir etc. |

`QUIZ_CFG[5]`:

```js
5:  { questions: QUESTIONS_LESSON_5,  name: "Aluno(a)", answers: new Array(5).fill(null), current: 0, signature: null,
      moduleId: "windows-aula-5",  title: "Módulo 1 — Aula 5: Área de Trabalho, Pastas e Arquivos", sig: "Módulo 1 - Aula 5 (Windows)" },
```

Regra 7: o rodapé "✓ Salvo automaticamente" só aparece **depois da 1ª resposta**; grava via `QuizEngine.saveState('windows-aula-5', …)` ao responder, ao navegar e ao assinar; restaura com `loadState`; "↺ Recomeçar o exercício" apaga a chave.

**DOM necessário** (copiar o bloco da Aula 4 e trocar `4`→`5`): `fixation-panel-5`, `quiz-trail-5`, `q-count-5`, `q-points-5`, `q-text-5`, `btn-hint-5`, `hint-box-5`, `options-5`, `btn-prev-5`, `btn-next-5`, `btn-restart-5`, `result-panel-5`, `result-badge-5`, `result-title-5`, `result-sub-5`, `result-score-5`, `signature-box-5`, `signature-code-5`, `breakdown-5`, `btn-download-txt-5`, `btn-download-pdf-5`, `btn-whatsapp-5`, `btn-email-5`, `email-panel-5`, `input-email-5`, `btn-open-gmail-5`.

---

## 📄 6. Apostila em PDF (`assets/js/pdf-lessons.js`)

### 6.1 Seções criadas (9 — `lessonNum: 5`)

| Seção | heading | Imagens (`sec.images`) | `wide` | Ilustração HTML |
|:---|:---|:---|:---|:---|
| 5.0 | `5.0 FASE 0 — Antes de Começar` | — | — | `es-sheet-box` **ROTEIRO DA AULA (8 PASSOS)** |
| 5.1 | `5.1 O que são pastas, arquivos e bibliotecas` | `image13`, `image5`, `image10` | não | `es-sheet-box` comparativo (gaveta × roupa) |
| 5.2 | `5.2 Extensões e nomes de arquivo` | `image11`, `image7` | não | `mini-sheet` com extensões comuns |
| 5.3 | `5.3 O Explorador de Arquivos (Windows Explorer)` | `image2`, `image12`, `image8` | `image8` | `mini-sheet` (nome antigo × novo) |
| 5.4 | `5.4 Os 8 painéis do Explorador` | `image6` | `image6` | `mini-sheet` numerado com os 8 painéis |
| 5.5 | `5.5 Como criar pastas e arquivos` | `image9`, `image4` | `image9` | `fun-highlight` "novo → pasta / texto → nome → salvar" |
| 5.6 | `5.6 Como renomear pastas e arquivos` | `image14` | `image14` | `es-sheet-box` (botão direito → Renomear / F2) |
| 5.7 | `5.7 Como excluir, copiar e mover` | — | — | `es-sheet-box` com os 3 fluxos + **ilustração SVG** de recortar/copiar/colar |
| 5.8 | `5.8 Exercícios práticos (2 e 3)` | `image1`, `image3` | `image1` | `es-sheet-box` **CHECKLIST DOS EXERCÍCIOS** + `boxType: "tip"` |

- Paths relativos `../../assets/img/windows/Aula5/imageN.png` (Regra 4).
- Toda imagem em `sec.images` **com `caption` descritiva** (nunca `"🖼️ Referência de imagem"` — Regra 2).
- Nenhuma seção só-texto (Regra 2): a seção 5.7 sem foto carrega `es-sheet-box` + ilustração SVG no `sec.html`.
- Título: `moduleLessonTitles.windows[5] = "Aula 05: Área de Trabalho, Pastas e Arquivos — Do Ícone ao Explorador"`.
- Auditoria esperada ao final: Windows passa de **58 → 67 seções** e de **110 → 122 referências de imagem** (12 imagens novas em `sec.images`).

### 6.2 Regras do PDF (obrigatórias)

Imagens em `sec.images` com `caption`; ilustração HTML em `sec.html`; zero placeholder; fatos conferidos antes de publicar (Regra 9) — em especial: **não** escrever "1 MB = 1.024 bytes" nem confundir "memória RAM" com "armazenamento".

---

## ⚙️ 7. Alterações no Código Fonte

### 7.1 `modules/windows/index.html`

| Local (linha real 15/10/2026) | O que fazer |
|:---|:---|
| Hub **L344–352** | Adicionar `active-lesson`; span "🔒 Em Construção" → `🔓 Aula Liberada (Senha em Aula)` (12px, `var(--teal)`, como nas Aulas 1–4 L309/319/329/339); span final `🚧` → `<span style="font-size:24px;" id="badge-lesson-5">🔒</span>`; manter `onclick="promptLessonPassword(5, 'Área de Trabalho, Pastas e Arquivos')"` |
| Nova seção | `section#screen-lesson-5` **antes de** `screen-lesson-7` (**L3554**), depois de `screen-lesson-4` (L3124–3553), clonando a estrutura da Aula 4: botões Imprimir/Baixar PDF (`downloadLessonPDF('windows', 5)`), `gamify-bar-5`/`gamify-percent-5`/`gamify-badge-box-5`, `lesson-reading-card`, `l5-fase-0`, `l5-phase-1..8`, `check-read-5-1..9`, `tab-btn-5-1..8` + `tab-btn-5-fix`, `fixation-panel-5` e `result-panel-5` |
| Senhas **L5008–5013** | `const PASSWORD_A5 = "wr0526";` logo após `PASSWORD_A4` (L5011) e incluir `typed === PASSWORD_A5` no gate (**L5589**) |
| Rota **L5591–5601** | `5: "screen-lesson-5"` no mapa de rotas |
| `OPEN_LESSONS` **L5565** | `[1, 2, 3, 4, 5, 7, 8, 71, 81]` + atualizar o comentário (L5564) e o texto do alerta (L5567) |
| Gamificação **L5637–5638** | `TOTAL_TOPICS = { 1: 7, 2: 10, 3: 10, 4: 9, 5: 9, 7: 7, 8: 5, 71: 4, 81: 6 }` e `SEQUENTIAL_LESSONS = { …, 5: true }` |
| Fixação **L5754** | comentário `(AULAS 1, 2, 3, 4, 5, 7, 8 E COMPLEMENTOS 71 e 81)` |
| Questões **L5252+** | `const QUESTIONS_LESSON_5 = [ … ]` após `QUESTIONS_LESSON_4`, com as 5 questões da §5 |
| `QUIZ_CFG` **L6067–6075** | entrada `5:` conforme §5 (após a chave `4`) |
| Eventos do quiz **L6235** | `[1, 2, 3, 4, 5, 7, 71, 81].forEach(...)` + comentário (L6234) |

### 7.2 `assets/js/pdf-lessons.js`

- `moduleLessonTitles.windows[5]` logo após a chave `4` (bloco `moduleLessonTitles.windows` em L4376).
- 9 seções da Aula 5 (`lessonNum: 5`) conforme §6.1, **após a 9ª seção da Aula 4** (termina em L1321) e **antes do bloco da Aula 8** (começa em L1322).

### 7.3 `assets/img/windows/Aula5/`

```bash
mkdir -p assets/img/windows/Aula5
cp "AulaOrigem/windows/Aula 5 Área de trabalho pasta e arquivos/images/"*.png assets/img/windows/Aula5/
# 14 arquivos, ~988 KB
```

### 7.4 `Docs/`

- Esta spec (status → IMPLEMENTADA ao concluir).
- `Docs/CONTINUACAO.md` — nova seção "SESSÃO ATUAL" no topo; rebaixar a anterior (Aula 4) para "SESSÃO ANTERIOR"; **manter o §7 de aprovação visual humana** e acrescentar a Aula 5 na tabela.

---

## ✅ 8. Checklist de Validação (pós-implementação — marcar ao concluir)

- [x] Card da Aula 05 no hub está ativo (sem 🔒 "Em Construção") e abre o modal.
- [x] `wr0526` destrava `screen-lesson-5`; senha errada **não** navega; as outras aulas continuam abrindo com as senhas antigas.
- [x] FASE 0 com objetivo + **roteiro numerado em 8 passos** (sem glossário, sem lista de materiais).
- [x] **9 checks distribuídos**, 1 por fase, nenhum bloco agrupado; trava sequencial coerente (só libera o próximo).
- [x] Barra gamificada 0 → 100% (11% em 11%) e badge `🎉 LEITURA COMPLETA!`.
- [x] Clicar nas 9 abas mostra **só** a fase escolhida.
- [x] **14 imagens** na tela com `alt` e `naturalWidth > 0`.
- [x] Quiz: 5 questões × 4 alternativas, aprovação em 7,0, 5/5 → **10,0**, assinatura SHA-256 `WR-XXXX-XXXX-XXXX-XXXX`.
- [x] Quiz persiste (`windows-aula-5:aluno(a)`), restaura após reload e "↺ Recomeçar" limpa a chave.
- [x] Leitura persiste em `wrWindowsReadTopics` e sobrevive ao reload com a trava preservada; "↺ Recomeçar a leitura" aparece na barra da Aula 5.
- [x] PDF: **9 seções 5.0–5.8**, **14 imagens** de `Aula5/` (image1..image14), todas carregando, 0 "🖼️ Referência de imagem", título correto, `imagesWide` em 5.3, 5.4, 5.5, 5.6 e 5.8.
- [x] `downloadLessonPDF('windows', 5)` sem erro de console e sem alerta de popup.
- [x] Guarda L-04 continua funcionando para a Aula 6 (ainda não escrita).
- [x] **Mobile 375px e 414px**: sem overflow horizontal (Regra 6 — só mexer no bloco global de `style.css`).
- [x] `node --check assets/js/pdf-lessons.js` OK; script inline do `index.html` OK; **sem ids duplicados**; tags balanceadas.
- [x] Regressão: Aulas 1, 2, 3, 4, 7, 8, 71, 81 continuam passando (senha, leitura, quiz, PDF).
- [x] **Fatos conferidos** (§9) — ler o texto renderizado da tela **e** do PDF (Regra 12).
- [x] Copiar `assets/img/windows/Aula5/` com os **14 PNG** (image1..image14) — conferidos com origem.
- [ ] 🔴 **Aprovação visual humana** registrada em `Docs/CONTINUACAO.md` §7.

### 8.1 Harness sugerido

Estender o da Aula 4 em Python/CDP em `/tmp/opencode/pdftest/`. Cobertura mínima:

1. Hub → card Aula 5 → senha errada retém → `wr0526` abre; aulas 1/2/3/4/7/8 continuam OK.
2. 9 checks distribuídos, gating, barra/badge, persistência após reload.
3. 9 abas, 14 imagens `naturalWidth > 0`, 0 ids duplicados, tags balanceadas.
4. Quiz 5/5 → 10,0, SHA, localStorage, restauração, restart.
5. PDF: 9 seções, 12 `<img>` de `Aula5/`, 5 `wide`, sem placeholder, guarda L-04 da Aula 6.
6. Mobile 375 sem overflow; console limpo.

Ambiente (ver `CONTINUACAO.md` topo): servidor `python3 -m http.server 8077` + Chrome headless `--remote-debugging-port=9333 --disable-popup-blocking`.

---

## 🔎 9. Fatos e correções do material de origem

| Item da origem | Tratamento |
|:---|:---|
| Legendas "Imagem 1…11" para 14 arquivos (repete "Imagem 10") | Não repetir a numeração; usar legendas descritivas. |
| "Windows 7/8/10/11" misturados sem contexto de idade | Marcar o **Windows 7 como legado** (fim de suporte em 14/01/2020) e o **Windows 8/8.1 como legado** (fim de suporte em 10/01/2023): servem só para reconhecer máquinas antigas. |
| "OBS Windows 8/10/11 o nome mudou para explorador de arquivos" | Confirmar: o **Windows Explorer** virou **Explorador de Arquivos** a partir do Windows 8; **só o nome mudou**. |
| "Use o [ícone] na barra de tarefas" (texto solto) | Explicar onde está o ícone (barra de tarefas) e o atalho <kbd>Win + E</kbd>. |
| "Como excluir / copiar / mover" só com títulos | Completar com o conteúdo didático padrão do Windows (menu do botão direito, Ctrl+C/Ctrl+V, Ctrl+X, arrastar). |
| "ip de seu pc" / "capacidade total de Armazenamento HD/SSD ou NVme2" | Escrever corretamente **NVMe** e enquadrar como **observação** no próprio PC, sem alterar pastas do sistema. |
| Risco de mandar apagar arquivos reais | Enquadrar como **exercício em pasta de teste** (FASE 8): criar tudo em uma pasta nova. |

---

## 🔗 10. Dependências & Riscos

| Risco | Mitigação |
|:---|:---|
| Senha `wr0526` não confirmada | Marca candidata na §2/§4 e no `CONTINUACAO.md` §7. |
| Mexer nas estruturas compartilhadas e quebrar as Aulas 1/2/3/4/7/8/71/81 | Toda alteração é **aditiva** (uma chave a mais em cada mapa/lista); rodar a regressão das 8 aulas. |
| Guarda L-04 (apostila vazia) | Continua protegendo a Aula 6 — **não** criar `moduleLessonTitles` nem seções para ela. |
| 14 imagens novas ≈ 988 KB | Copiar como estão (mesmo peso da origem); nenhuma otimização por enquanto. |
| Aprovação visual humana pendente para toda a série | Itens 🔴 do `CONTINUACAO.md` §7 valem também para a Aula 5. |

---

## 📌 11. Status

- **15/10/2026**: SDD escrito a partir da apostila de origem; **nenhum código alterado nesta sessão** (até aqui).
- **15/10/2026 (rodada de implementação)**: ✅ **IMPLEMENTADA**. Entregues: 14 PNG em `assets/img/windows/Aula5/`; `screen-lesson-5` (FASE 0 + 8 fases, 9 checks `check-read-5-1..9`, tabs, `fixation-panel-5`/`result-panel-5`) inserida antes de `screen-lesson-7`; `PASSWORD_A5="wr0526"` + gate (`e005`) + rota `5` + `OPEN_LESSONS` + `TOTAL_TOPICS[5]=9`/`SEQUENTIAL_LESSONS[5]`; card do hub L344 como `active-lesson`; `QUESTIONS_LESSON_5` + `QUIZ_CFG[5]`; 9 seções `lessonNum: 5` (5.0–5.8) no PDF + `moduleLessonTitles.windows[5]`. Validações técnicas: `node --check` (js + script inline), estrutura/DOM, quiz UI + persistência (`windows-aula-5:aluno(a)`), leitura (`wrWindowsReadTopics`), PDF (9 seções, 14 imagens HTTP 200, 0 placeholders), mobile 375px sem overflow, console limpo. **Aprovação visual humana ainda PENDENTE.**
- **Pendências humanas (globais, ver `Docs/CONTINUACAO.md` §7)**: aprovação visual das telas/PDF das Aulas 2 a 5, confirmação das senhas candidatas, regressão visual dos demais módulos.
- **Débito técnico registrado pelo professor**: ajustes de acabamento da Aula 5 serão feitos quando o módulo Word for trabalhado (não bloquear a publicação).

---

## 12. Avaliação da Revisão (15/10/2026) — SDD vs Material de Origem

| Critério | Status | Evidência |
|:---|:---|:---|
| Arquivos de origem existentes | ✅ OK | `AulaOrigem/windows/Aula 5 Área de trabalho pasta e arquivos/Aula5readetrabalhopastaearquivos.html` (~17 KB), `images/` (14 PNG, ~988 KB) |
| Imagens na origem vs SDD | ✅ OK | 14 `<img src="images/imageN.png">` na origem → ordem mapeada exatamente na tabela §1.4. Dimensões conferidas. |
| Estrutura de blocos | ✅ OK | Introdução + conceituação + Explorer (8 painéis) + criar/renomear/excluir/copiar/mover + Exercícios 2 e 3 → 9 seções (5.0–5.8). |
| Fatos-chave | ✅ OK | Pasta=gaveta/arquivo=roupa, extensões, "Explorador de Arquivos" (Win 8/10/11), 8 painéis, criar/renomear/excluir/copiar/mover — todos presentes. Datas de suporte escritas como "fato já ocorrido" (§9). |
| Localizadores de código | ✅ OK | Reconferidos contra o estado atual: hub L344, senhas L5008–5013, gate L5589, `OPEN_LESSONS` L5565, rotas L5591–5601, `TOTAL_TOPICS`/`SEQUENTIAL_LESSONS` L5637–5638, `moduleLessonTitles.windows` L4376, inserção da seção antes de `screen-lesson-7` (L3554). |
| PDF `lessonNum: 5` | ✅ OK | 9 seções inseridas após a última seção `lessonNum: 4` e antes da seção `lessonNum: 8`. Windows 58→67 seções. |
| Senha candidata | 🟡 Pendente confirmação | `wr0526` implementada como `PASSWORD_A5` (aliases `e005` para teste) — ainda depende da confirmação do professor (lista em CONTINUACAO.md §7). |
| Imagens no repo | ✅ OK | `assets/img/windows/Aula5/` criado com 14 PNG (~984 KB); 14/14 referenciadas na tela e no PDF (HTTP 200). |
