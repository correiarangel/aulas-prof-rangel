### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 🟡 **SDD PRONTO — AGUARDANDO IMPLEMENTAÇÃO** (07/10/2026) — Aula 04: Painel de Controle e Configurações no Windows
### ⚠️ Aprovação visual manual humana (telas + PDF): **PENDENTE** para toda a série — ver `Docs/CONTINUACAO.md` §7

---

## 🎯 1. Análise da Base de Informação (material de origem)

### 1.1 Arquivos analisados

| Arquivo | Papel |
|:---|:---|
| `AulaOrigem/windows/Aula 4 - Windows-Painel de Controle/Aula4WindowsPaineldeControle.html` | apostila de origem (HTML de linha única, 38 KB, estilos Google Docs) |
| `AulaOrigem/windows/Aula 4 - Windows-Painel de Controle/images/` (17 PNG, ~1,7 MB) | screenshots do Painel de Controle / Configurações (Win 7, 10 e 11) |

A aula de origem ensina **o que é o Painel de Controle, como abri-lo em cada versão do Windows, a diferença dele para o app Configurações e os 4 usos práticos**: data/hora/idioma, rede, remoção de aplicativos e contas de usuário — fechando com a evolução do Painel de Controle no Windows 10/11.

### 1.2 Título e subtítulo

- **Título no portal:** `Aula 04: Painel de Controle e Configurações no Windows`
- **Entrada do hub:** `Painel de Controle e Configurações` (o `promptLessonPassword` recebe exatamente essa string)
- **Título do PDF:** `Aula 04: Painel de Controle e Configurações no Windows — Ajustes do Sistema` (`moduleLessonTitles.windows[4]`)

### 1.3 Estrutura do conteúdo de origem (8 blocos + abertura)

`4.0` FASE 0 · `4.1` O que é o Painel de Controle e como acessá-lo (Win 7 / 10 / 11) · `4.2` Configurações × Painel de Controle · `4.3` Data, Hora e Idioma · `4.4` Configurações de Rede (Central de Redes e Compartilhamento) · `4.5` Remover Aplicativos e Recursos · `4.6` Criar e gerenciar Usuários · `4.7` Evolução do Painel de Controle no Windows 10 e 11 · `4.8` Exercício Prático de Campo (criado por esta spec — a origem não traz exercício).

### 1.4 Inventário das 17 imagens e o que elas mostram

> **Legenda:** a numeração "Imagem 01…18" da origem é **inconsistente** (17 arquivos, começa em 01 e pula o 09). As legendas do portal serão **descritivas em português**, sem repetir o número quebrado da origem. Os textos abaixo derivam do contexto em que a imagem aparece na apostila (o agente não tem visão — **conferência visual humana pendente**, `CONTINUACAO.md` §7).

| Arquivo | Dimensão | Onde entra (fase) | Sentido da legenda |
|:---|:---|:---|:---|
| `image15.png` | 258×222 | 4.1 | Ícone do Painel de Controle no menu Iniciar (Windows 7) |
| `image17.png` | 132×130 | 4.1 | Ícone do app **Configurações** (Windows 10/11) |
| `image1.png` | 1290×663 | 4.2 | App **Configurações** do Windows 11 (interface atual) |
| `image8.png` | 423×270 | 4.2 | **Painel de Controle** clássico (Windows 7/10/11) |
| `image2.png` | 327×251 | 4.3 | Painel de Controle (Win 7): Relógio, Idioma e Região → Data e Hora |
| `image13.png` | 608×380 | 4.3 | Configurações (Win 10/11) → **Hora e Idioma** |
| `image10.png` | 311×371 | 4.4 | Central de Redes e Compartilhamento — visão geral da conexão |
| `image5.png` | 552×237 | 4.4 | Compartilhamento de rede / configurações da conexão |
| `image16.png` | 637×367 | 4.4 | Adaptadores de rede (Wi-Fi / Ethernet) |
| `image4.png` | 412×260 | 4.4 | Estado/configurações das conexões de rede |
| `image11.png` | 267×119 | 4.5 | Programas e Recursos (Win 7) — desinstalar programa |
| `image3.png` | 477×370 | 4.5 | Configurações → Aplicativos (Win 10/11) |
| `image12.png` | 607×483 | 4.5 | Lista de aplicativos instalados com botão **Desinstalar** |
| `image9.png` | 800×414 | 4.6 | Contas de Usuário (Win 7) — criar nova conta |
| `image14.png` | 681×366 | 4.6 | Contas de Usuário — **alterar senha** |
| `image7.png` | 500×321 | 4.6 | Configurações → Contas → Família e outros usuários |
| `image6.png` | 308×194 | 4.6 | Adicionar outra pessoa a este PC (Win 10/11) |

Copiados para `assets/img/windows/Aula4/` (17 PNG, ~1,7 MB) — mesmo nome (`image1.png`…`image17.png`) para manter o padrão das Aulas 1–3.

### 1.5 Diagnóstico: o que já existe no portal

A Aula 4 **já tem card no hub, mas está inativo**: `modules/windows/index.html:345` tem `promptLessonPassword(4, 'Configurações de Sistema e Painel de Controle')` **sem** a classe `active-lesson`, com rótulo "🔒 Em Construção" e `lesson-name` "Configurações & Dispositivos" (fora do título real da origem). **Não existe** `screen-lesson-4`, `QUESTIONS_LESSON_4`, `QUIZ_CFG[4]`, `PASSWORD_A4`, seções no PDF nem `moduleLessonTitles.windows[4]` — hoje, pedir `downloadLessonPDF('windows', 4)` cai na guarda L-04 e avisa "A apostila da Aula 4 ainda não foi produzida". Tudo nesta aula é **novo**; as estruturas compartilhadas de leitura/quiz serão mexidas apenas de forma **aditiva**.

---

## 📐 2. Definição da Aula (decisões de projeto)

| Item | Valor |
|:---|:---|
| Origem | `Aula 4 - Windows-Painel de Controle` |
| Seções de leitura | **9** (`TOTAL_TOPICS[4] = 9` = FASE 0 + 8 fases) |
| Checks | **9** (`check-read-4-1..9`, padrão `l4-fase-0` + `l4-phase-1..8`) |
| Sequencial | **sim** (`SEQUENTIAL_LESSONS` inclui `4`) |
| Componente interativo novo | **nenhum** — só o quiz de fixação (a origem não tem exercício/brinquedo; FASE 8 é exercício de campo no PC do aluno) |
| Senha | `wr0426` — ⚠️ **candidata, ainda não confirmada pelo professor** |
| Persistência da leitura | `wrWindowsReadTopics` (compartilhada com as outras aulas do módulo) |
| Persistência do quiz | `windows-aula-4:aluno(a)` (`QuizEngine`) |
| Imagens | 17 PNG em `assets/img/windows/Aula4/` |
| PDF | 9 seções `lessonNum: 4` (4.0 → 4.8) |
| Rota | `4: "screen-lesson-4"` |
| Arquivo novo | **nenhum** (diferente da Aula 3, que criou `simulador-binario.html`) |

---

## 🎓 3. Estrutura Pedagógica da Aula (FASE 0 + 8 fases)

### 3.1 FASE 0 — Antes de Começar

`#l4-fase-0` traz objetivo + **roteiro numerado em 8 passos** e é um `div` com a classe `tab-panel` (não `.topic-phase-section`) — as fases 1–8 usam `.topic-phase-section`. Roteiro (cada passo é a fase correspondente):

1. Abrir o Painel de Controle com `Win + R` → `control` e reconhecer o ícone.
2. Diferenciar o app **Configurações** do **Painel de Controle**.
3. Ajustar data, hora, fuso e idioma.
4. Percorrer a **Central de Redes e Compartilhamento**.
5. Localizar onde **desinstalar aplicativos**.
6. Conhecer as **contas de usuário** e como criar uma.
7. Entender a **evolução** do Painel de Controle no Windows 10/11.
8. Executar o **exercício prático de campo** e marcar o último check.

Sem glossário extenso e sem lista de materiais (Regra 1).

### 3.2 Mapa de checks distribuídos (regra de ouro — proibido agrupar)

| Check | Fase | Libera |
|:---|:---|:---|
| `check-read-4-1` | `l4-fase-0` | 2 |
| `check-read-4-2` | `l4-phase-1` | 3 |
| `check-read-4-3` | `l4-phase-2` | 4 |
| `check-read-4-4` | `l4-phase-3` | 5 |
| `check-read-4-5` | `l4-phase-4` | 6 |
| `check-read-4-6` | `l4-phase-5` | 7 |
| `check-read-4-7` | `l4-phase-6` | 8 |
| `check-read-4-8` | `l4-phase-7` | 9 |
| `check-read-4-9` | `l4-phase-8` (exercício) | barra em 100% |

Cada check fica **no fim da fase correspondente**, exatamente onde está a instrução de executar o passo; nada agrupado (Regra 1). Abas: `tab-btn-4-1..8` + `tab-btn-4-fix` (Exercício de 5 Perguntas 📝).

Rótulos sugeridos das abas:
`1. O que é e como acessar` · `2. Configurações × Painel` · `3. Data, Hora e Idioma` · `4. Rede` · `5. Remover Aplicativos` · `6. Contas de Usuário` · `7. Evolução no Win 10/11` · `8. Exercício Prático`.

### 3.3 Reinício e barra gamificada

- `initReading` injeta "↺ Recomeçar a leitura" em **todas** as barras do módulo (itera `Object.keys(TOTAL_TOPICS)` — basta incluir `4`).
- Cabeçalho: `gamify-bar-4`, `gamify-percent-4`, `gamify-badge-box-4`; badge do hub `badge-lesson-4`.
- Progresso em **9** passos (11% · 22% · … · 100%). Badge final `🎉 LEITURA COMPLETA!` (padrão do módulo).

### 3.4 FASE 8 — Exercício Prático de Campo (criado por esta spec)

Checklist de observação **no PC do aluno**, sem exigir mudanças irreversíveis na máquina da escola:

1. `Win + R` → `control` → Enter; confirmar que o Painel de Controle abriu.
2. `Win + I`; confirmar que o Configurações abriu e **é outra tela**.
3. No Configurações: Hora e Idioma → anotar o fuso horário atual.
4. Painel de Controle → Rede e Internet → Central de Redes e Compartilhamento → anotar o tipo de conexão (Wi-Fi ou Ethernet).
5. Configurações → Aplicativos → Aplicativos instalados: localizar um app que o aluno conheça (**não desinstalar nada**).
6. Voltar ao menu da aula e marcar o check.

A fase termina com aviso explícito: **"Nenhuma configuração precisa ser alterada; este exercício é de observação"** (evita que aluno troque idioma/fuso da máquina da escola).

---

## 🔒 4. Autenticação e Senha

`PASSWORD_A4 = "wr0426"` — **candidata**, inserida na mesma lista de comparação do gate único:

```js
const PASSWORD_A1 = "wr0126"; … const PASSWORD_A4 = "wr0426"; …
// linha ~5100: if(typed === PASSWORD_WR || … || typed === PASSWORD_A4 || typed === "a001" || …)
```

- `promptLessonPassword(4, 'Painel de Controle e Configurações')` → modal `Aula 4: Painel de Controle e Configurações`; senha errada mostra alerta e **não** navega.
- `OPEN_LESSONS = [1, 2, 3, 4, 7, 8, 71, 81]` e o alerta de aulas em construção passa a listar `as Aulas 01, 02, 03, 04, 07 e 08 estão disponíveis no portal`.
- Rota: `4: "screen-lesson-4"` (mapa de rotas, linha ~5105).

---

## 📝 5. Quiz de Fixação (5 questões × 4 alternativas)

`QUESTIONS_LESSON_4` — 4 alternativas por questão (padrão real do módulo Windows), `PASS_SCORE = 7.0` (2,0 por questão, máxima 10,0), `correct` 0-based:

| # | Pergunta | Alternativas (correct) | Dica |
|:--|:---|:---|:---|
| 1 | No Windows 10/11, qual atalho de teclado abre o aplicativo **Configurações**? | `Win + R` · **`Win + I` (1)** · `Win + E` · `Ctrl + Shift + Esc` | Win + R abre o Executar e Win + E o Explorador de Arquivos. |
| 2 | Para abrir o **Painel de Controle** clássico por teclado, o que se digita na caixa do Executar (`Win + R`)? | `cmd` · `msconfig` · **`control` (2)** · `config` | `control` é o nome do programa do Painel de Controle desde o Windows 95. |
| 3 | Sobre o Painel de Controle no **Windows 11**, qual alternativa está correta? | Foi totalmente removido em 2021 · **Continua existindo, mas o Configurações é a interface principal e várias páginas do Painel só redirecionam para o Configurações (1)** · É ainda a interface principal · Só existe no Windows 7 | O Painel de Controle não sumiu: a Microsoft é que mudou o protagonismo para o Configurações. |
| 4 | Na **Central de Redes e Compartilhamento** (Painel de Controle → Rede e Internet) o aluno pode: | Instalar aplicativos da Loja · **Configurar Wi-Fi/Ethernet, gerenciar adaptadores e o compartilhamento de arquivos (1)** · Criar contas de usuário · Desfragmentar o disco | É ali que ficam as conexões e o compartilhamento de rede. |
| 5 | Para criar um usuário **LOCAL** no Windows 10/11 (Configurações → Contas → Família e outros usuários → Adicionar outra pessoa a este PC), o caminho é: | Digitar um e-mail Microsoft e concluir · **Clicar em "Não tenho as informações de login desta pessoa" e depois em "Adicionar um usuário sem conta Microsoft" (1)** · O Windows cria sozinho · Só dá pelo Prompt de Comando | Sem esse caminho o Windows insiste em pedir uma conta Microsoft. |

`QUIZ_CFG[4]`:

```js
4: { questions: QUESTIONS_LESSON_4, name: "Aluno(a)", answers: new Array(5).fill(null), current: 0, signature: null,
     moduleId: "windows-aula-4", title: "Módulo 1 — Aula 4: Painel de Controle e Configurações", sig: "Módulo 1 - Aula 4 (Windows)" },
```

Regra 7: o rodapé "✓ Salvo automaticamente" só aparece **depois da 1ª resposta**; grava via `QuizEngine.saveState('windows-aula-4', …)` ao responder, ao navegar e ao assinar; restaura com `loadState`; "↺ Recomeçar o exercício" apaga a chave.

**DOM necessário** (copiar o bloco da Aula 3 e trocar `3`→`4`): `fixation-panel-4`, `quiz-trail-4`, `q-count-4`, `q-points-4`, `q-text-4`, `btn-hint-4`, `hint-box-4`, `options-4`, `btn-prev-4`, `btn-next-4`, `btn-restart-4`, `result-panel-4`, `result-badge-4`, `result-title-4`, `result-sub-4`, `result-score-4`, `signature-box-4`, `signature-code-4`, `breakdown-4`, `btn-download-txt-4`, `btn-download-pdf-4`, `btn-whatsapp-4`, `btn-email-4`, `email-panel-4`, `input-email-4`, `btn-open-gmail-4`.

---

## 📄 6. Apostila em PDF (`assets/js/pdf-lessons.js`)

### 6.1 Seções criadas (9 — `lessonNum: 4`)

| Seção | heading | Imagens (`sec.images`) | `imagesWide` | Ilustração HTML |
|:---|:---|:---|:---|:---|
| 4.0 | `4.0 FASE 0 — Antes de Começar` | — | — | `es-sheet-box` **ROTEIRO DA AULA (8 PASSOS)** |
| 4.1 | `4.1 O que é o Painel de Controle e como acessá-lo` | `image15`, `image17` | não | `mini-sheet` com as 3 formas de abrir (Win 7 / 10 / 11) |
| 4.2 | `4.2 Configurações × Painel de Controle` | `image1`, `image8` | **sim** | `es-sheet-box` comparativo + `fun-highlight` |
| 4.3 | `4.3 Data, Hora e Idioma` | `image2`, `image13` | não | `mini-sheet` com os caminhos Win 7 × Win 10/11 |
| 4.4 | `4.4 Configurações de Rede` | `image10`, `image5`, `image16`, `image4` | não | `mini-sheet` com as 3 funções da Central de Redes |
| 4.5 | `4.5 Remover Aplicativos e Recursos` | `image11`, `image3`, `image12` | não | `es-sheet-box` com o caminho de cada versão |
| 4.6 | `4.6 Criar e gerenciar Usuários` | `image9`, `image14`, `image7`, `image6` | **sim** | `mini-sheet` de contas (padrão × administrador) |
| 4.7 | `4.7 Evolução do Painel de Controle no Win 10/11` | — | — | `es-sheet-box` linha do tempo/`fun-highlight` |
| 4.8 | `4.8 Exercício Prático de Campo` | — | — | `es-sheet-box` **CHECKLIST DO EXERCÍCIO (6 ITENS)** + `boxType: "tip"` |

- Paths relativos `../../assets/img/windows/Aula4/imageN.png` (Regra 4).
- Toda imagem em `sec.images` **com `caption` descritiva** (nunca `"🖼️ Referência de imagem"` — Regra 2).
- Nenhuma seção só-texto (Regra 2): as três seções sem foto carregam `es-sheet-box`/`mini-sheet` real.
- Título: `moduleLessonTitles.windows[4] = "Aula 04: Painel de Controle e Configurações no Windows — Ajustes do Sistema"`.
- Auditoria esperada ao final: Windows passa de **49 → 58 seções** e de 93 → **110 referências de imagem**.

### 6.2 Regras do PDF (obrigatórias)

Imagens em `sec.images` com `caption`; ilustração HTML em `sec.html`; zero placeholder; fatos conferidos antes de publicar (Regra 9) — em especial: **não** escrever "1 MB = 1.024 bytes" nem datas de suporte já vencidas como se fossem futuras.

---

## ⚙️ 7. Alterações no Código Fonte

### 7.1 `modules/windows/index.html`

| Local | O que fazer |
|:---|:---|
| Hub (linha ~345) | Adicionar `active-lesson`; `lesson-name` → `Painel de Controle e Configurações`; span "🔒 Em Construção" → `🔓 Aula Liberada (Senha em Aula)` (12px, `var(--teal)`); span final → `<span style="font-size:24px;" id="badge-lesson-4">🔒</span>`; `onclick="promptLessonPassword(4, 'Painel de Controle e Configurações')"` |
| Nova seção | `section#screen-lesson-4` **antes de** `screen-lesson-7` (linha ~3119), clonando a estrutura da Aula 3: botões Imprimir/Baixar PDF (`downloadLessonPDF('windows', 4)`), `gamify-bar-4`/`gamify-percent-4`/`gamify-badge-box-4`, `lesson-reading-card`, `l4-fase-0`, `l4-phase-1..8`, `check-read-4-1..9`, `tab-btn-4-1..8` + `tab-btn-4-fix`, `fixation-panel-4` e `result-panel-4` |
| Senhas (~4812) | `const PASSWORD_A4 = "wr0426";` e incluir `typed === PASSWORD_A4` no gate (~5100) |
| Rota (~5105) | `4: "screen-lesson-4"` |
| `OPEN_LESSONS` (~5076) | `[1, 2, 3, 4, 7, 8, 71, 81]` + atualizar o comentário (~5075) e o texto do alerta (~5078) |
| Gamificação (~5147) | `TOTAL_TOPICS = { 1: 7, 2: 10, 3: 10, 4: 9, 7: 7, 8: 5, 71: 4, 81: 6 }` e `SEQUENTIAL_LESSONS = { …, 4: true }` + comentário (~5146) |
| Fixação (~5263) | comentário `ABRIR EXERCÍCIO DE FIXAÇÃO (AULAS 1, 2, 3, 4, 7, 8 E COMPLEMENTOS 71 e 81)` |
| Questões (~4695+) | `const QUESTIONS_LESSON_4 = [ … ]` com as 5 questões da §5 |
| `QUIZ_CFG` (~5577) | entrada `4:` conforme §5 |
| Eventos do quiz (~5744) | `[1, 2, 3, 4, 7, 71, 81].forEach(...)` + comentário (~5743) |

### 7.2 `assets/js/pdf-lessons.js`

- `moduleLessonTitles.windows[4]` (logo após a chave `3`, linha ~4116).
- 9 seções da Aula 4 (`lessonNum: 4`) conforme §6.1, após as seções da Aula 3 (~linha 1068).

### 7.3 `assets/img/windows/Aula4/`

```bash
mkdir -p assets/img/windows/Aula4
cp "AulaOrigem/windows/Aula 4 - Windows-Painel de Controle/images/"*.png assets/img/windows/Aula4/
# 17 arquivos, ~1,7 MB
```

### 7.4 `Docs/`

- Esta spec (status → IMPLEMENTADA ao concluir).
- `Docs/CONTINUACAO.md` — nova seção "SESSÃO ATUAL" no topo; rebaixar a de 07/10/2026 (Aula 3) para "SESSÃO ANTERIOR"; **manter o §7 de aprovação visual humana** e acrescentar a Aula 4 na tabela.

---

## ✅ 8. Checklist de Validação (pós-implementação — marcar ao concluir)

- [ ] Card da Aula 04 no hub está ativo (sem 🔒 "Em Construção") e abre o modal.
- [ ] `wr0426` destrava `screen-lesson-4`; senha errada **não** navega; as outras aulas continuam abrindo com as senhas antigas.
- [ ] FASE 0 com objetivo + **roteiro numerado em 8 passos** (sem glossário, sem lista de materiais).
- [ ] **9 checks distribuídos**, 1 por fase, nenhum bloco agrupado; trava sequencial coerente (só libera o próximo).
- [ ] Barra gamificada 0 → 100% (11% em 11%) e badge `🎉 LEITURA COMPLETA!`.
- [ ] Clicar nas 9 abas mostra **só** a fase escolhida.
- [ ] **17 imagens** na tela com `alt` e `naturalWidth > 0`.
- [ ] Quiz: 5 questões × 4 alternativas, aprovação em 7,0, 5/5 → **10,0**, assinatura SHA-256 `WR-XXXX-XXXX-XXXX-XXXX`.
- [ ] Quiz persiste (`windows-aula-4:aluno(a)`), restaura após reload e "↺ Recomeçar" limpa a chave.
- [ ] Leitura persiste em `wrWindowsReadTopics` e sobrevive ao reload com a trava preservada; "↺ Recomeçar a leitura" aparece na barra da Aula 4.
- [ ] PDF: **9 seções 4.0–4.8**, **17 imagens** de `Aula4/` + 2 do professor (19 `<img>`), todas carregando, 0 "🖼️ Referência de imagem", título correto, `imagesWide` em 4.2 e 4.6.
- [ ] `downloadLessonPDF('windows', 4)` sem erro de console e sem alerta de popup.
- [ ] Guarda L-04 continua funcionando para as Aulas 5 e 6 (ainda não escritas).
- [ ] **Mobile 375px e 414px**: sem overflow horizontal (Regra 6 — só mexer no bloco global de `style.css`).
- [ ] `node --check assets/js/pdf-lessons.js` OK; script inline do `index.html` OK; **sem ids duplicados**; tags balanceadas.
- [ ] Regressão: Aulas 1, 2, 3, 7, 8, 71, 81 continuam passando (senha, leitura, quiz, PDF).
- [ ] **Fatos conferidos** (§9) — ler o texto renderizado da tela **e** do PDF (Regra 12).
- [ ] 🔴 **Aprovação visual humana** registrada em `Docs/CONTINUACAO.md` §7.

### 8.1 Harness sugerido

Estender o da Aula 3 em Python/CDP: copiar `/tmp/opencode/a3_harness.py` → `/tmp/opencode/a4_harness.py` (reusa `/tmp/opencode/cdplib.py`, que já auto-dismissa dialogs). Cobertura mínima:

1. Hub → card Aula 4 → senha errada retém → `wr0426` abre; aulas 1/2/3/7/8 continuam OK.
2. 9 checks distribuídos, gating, barra/badge, persistência após reload.
3. 9 abas, 17 imagens `naturalWidth > 0`, 0 ids duplicados, tags balanceadas.
4. Quiz 5/5 → 10,0, SHA, localStorage, restauração, restart.
5. PDF: 9 seções, 19 `<img>` (17 de `Aula4/`), 2 `imagesWide`, sem placeholder/JSTOR, guarda L-04 das Aulas 5/6.
6. Mobile 375 sem overflow; console limpo.

Ambiente (ver `CONTINUACAO.md` topo): servidor `python3 -m http.server 8077` + Chrome headless `--remote-debugging-port=9333 --disable-popup-blocking`.

---

## 🔎 9. Fatos e correções do material de origem

| Item da origem | Tratamento |
|:---|:---|
| "No Windows **!0/11** temos Configurações" (erro de digitação/OCR) | Corrigir para "No Windows 10 e 11". |
| Legendas "Imagem 01…18" para 17 arquivos (o 09 some) | Não repetir a numeração; usar legendas descritivas. |
| Aulas de Windows 7 sem contexto de idade do sistema | Marcar como **legado**: "fim de suporte em 14/01/2020" — serve só para reconhecer máquinas antigas. |
| Qualquer menção a Windows 10 como se o suporte continuasse | Suporte oficial **terminou em 14/10/2025** (fato já ocorrido; nunca escrever "será anunciado"). |
| Risco de sugerir que o Painel de Controle "sumiu" | Ele **ainda existe** no Windows 11 (o Configurações é que virou a interface principal). |
| Instruções que pedem trocar idioma/fuso/conta | Enquadrar como **observação** (FASE 8): nada precisa ser alterado na máquina da escola. |
| Desinstalar aplicativos | Mostrar o caminho certo nas duas interfaces; **não** mandar desinstalar na prática. |

---

## 🔗 10. Dependências & Riscos

| Risco | Mitigação |
|:---|:---|
| Senha `wr0426` não confirmada | Marca candidata na §2/§4 e no `CONTINUACAO.md` §7. |
| Mexer nas estruturas compartilhadas e quebrar as Aulas 1/2/3/7/8/71/81 | Toda alteração é **aditiva** (uma chave a mais em cada mapa/lista); rodar a regressão das 7 aulas. |
| Guarda L-04 (apostila vazia) | Continua protegendo Aulas 5 e 6 — **não** criar `moduleLessonTitles` nem seções para elas. |
| 17 imagens novas ≈ 1,7 MB | Copiar como estão (mesmo peso da origem); nenhuma otimização por enquanto. |
| Aprovação visual humana pendente para toda a série | Itens 🔴 do `CONTINUACAO.md` §7 valem também para a Aula 4. |

---

## 📌 11. Status

- **07/10/2026**: SDD escrito a partir da apostila de origem; **nenhum código alterado nesta sessão**.
- **Próxima sessão**: implementar (prompt pronto em `/tmp/opencode/prompt_aula04.txt`).
- **Pendências humanas (globais, ver `Docs/CONTINUACAO.md` §7)**: aprovação visual das telas/PDF das Aulas 2 e 3, confirmação das senhas candidatas, regressão visual dos demais módulos.
- **Pendências de repositório**: commit do working tree (P-10) aguardando o professor.
