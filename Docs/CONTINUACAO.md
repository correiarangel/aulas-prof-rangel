# CONTINUAÇÃO — Anexo de Continuidade do Repositório

> Proposito: registrar fielmente onde paramos para que qualquer sessão futura continue sem perder contexto.
> Este arquivo deve ser **atualizado ao fim de cada sessão** com: concluído, pendente, localizadores e validações.

## ✅ SESSÃO ATUAL — COMEÇAR AQUI (resumo de hoje, 19/09/2026)

Escopo de hoje: **transferir o Complemento 7B (Tutorial de Mídia de Instalação) da Aula 7 para a Aula 8, como Complemento 8A (lesson id `81`)**, corrigindo o estado meio-migrado que deixava o gating de leitura/quiz quebrado e o card do hub como "Em Construção".

**Concluído e validado hoje (não refazer):**
1. **`modules/windows/index.html` — migração 7B→8A** (id `81`, tela `screen-lesson-81`):
   - Hub: card do complemento reorganizado logo após a Aula 8, com `promptLessonPassword(81, 'Complemento 8A — Tutorial: Criar Mídia de Instalação do Windows')` e `badge-lesson-81`.
   - Aula 7: removido o atalho "Complemento 7B" da caixa de atividades complementares (ficou só o 7A).
   - Aula 8: adicionada a caixa "📌 Atividade Complementar desta Aula" com atalho para `81` (entre o parágrafo do Guia Prático e a `<nav>` de tópicos).
   - Complemento: `screen-lesson-81`, botão voltar → `showScreen('screen-lesson-8')` "← Voltar para a Aula 8", 6 fases `l81-phase-1..6`, 6 checks `check-read-81-1..6` distribuídos no fim de cada fase, 7 tabs `tab-btn-81-1..6` + fixação, `openFixationPanel(81)`, `markTopicRead(81, N)`, `switchTopicPhase(81, ...)`, quiz `quiz-trail-81`, painel de resultado/fixação `-81`, `downloadLessonPDF("windows", 81)`.
   - JS (inline): `OPEN_LESSONS = [7, 8, 71, 81]`, rota `81: "screen-lesson-81"`, `TOTAL_TOPICS = {7:7, 8:5, 71:4, 81:6}`, `SEQUENTIAL_LESSONS = {7:true, 71:true, 81:true}`, loops de gating/eventos `[7, 71, 81]`, `QUESTIONS_LESSON_81`, chave `81` no `QUIZ_CFG` (`moduleId: "windows-aula-81"`, sig "Módulo 1 - Complemento 8A (Windows)"). **Senha do complemento = `wr0926`** (compartilha com a Aula 8, corrigido o comentário; `wr0726` continua só para 7/7A).
   - Comentários de tela/quizzes renomeados (COMPLEMENTO 8A).
2. **`assets/img/windows/`: pasta `Aula7TutorialMidia/` → `Aula8TutorialMidia/`** (`git mv`, image1..18) e todas as refs em `index.html`, `pdf-lessons.js` e specs atualizadas.
3. **`assets/js/pdf-lessons.js`**: seções do complemento `lessonNum: 72 → 81` (6 tópicos, capítulo "COMPLEMENTO 8A: TUTORIAL DE CRIAÇÃO DE MÍDIA DE INSTALAÇÃO", headings `8A.1..6`, imagens `Aula8TutorialMidia/`); `moduleLessonTitles.windows` com `{7, 8, 71, 81}`.
4. **`Docs/`**: `SPEC-COMPLEMENTO-7B-WINDOWS.md` → `SPEC-COMPLEMENTO-8A-WINDOWS.md` (`git mv`) com título/ SPEC-008A, senha `wr0926`, `check-read-81`, `SEQUENTIAL/TOTAL_TOPICS[81]`, `downloadLessonPDF('windows', 81)`, pasta `Aula8TutorialMidia/`. `SPEC-AULA-07-WINDOWS.md` sem a linha do 7B ("7A e 7B" → "7A"). `SPEC-AULA-08-WINDOWS.md` ganhou linha do Complemento 8A (`wr0926`).
5. **Validações (todas OK)**: script inline extraído de `modules/windows/index.html` passa em `node --check`; `node --check assets/js/pdf-lessons.js` OK; grep confirma zero refs remanescentes a 7B/72/82/screen-lesson-82 (`wr0726` é senha legítima da 7/7A); sem IDs duplicados (`uniq -d` vazio); `check-read-81`×6, `l81-phase`×6, `tab-btn-81`×7, `switchTopicPhase(81,`×16, `markTopicRead(81,`×6, `openFixationPanel(81)`×2 conferidos.

**Pendências para a próxima sessão (ordem sugerida):**
- [ ] **Teste visual manual em navegador (mobile/desktop)** da Aula 8 + Complemento 8A: abrir o card do hub, conferir gating sequencial (marcar `check-read-81-1..6` → liberar fixação/quiz), responder o quiz de 5 questões e gerar o PDF de `downloadLessonPDF('windows', 81)` conferindo as 6 seções com imagens reais de `Aula8TutorialMidia/`.
- [ ] Conferir fluxo da Aula 7 (sem o atalho 7B) e o PDF de `windows`, 7` para garantir que nada dependia das seções antigas.
- [ ] Registrar na próxima sessão o resultado do teste manual antes de iniciar qualquer nova tarefa.

---

## 📜 SESSÃO ANTERIOR — RESUMO 18/09/2026 (regras mobile globais)

Escopo de hoje: **regra mobile global de largura máxima** aplicada a TODOS os módulos (Excel, Windows, Word, PowerPoint, Internet) e registrada como norma para telas futuras.

**Concluído e validado hoje (não refazer):**
1. **`assets/css/style.css` ganhou o bloco `/* REGRAS MOBILE GLOBAIS */`** (antes de `@media print`, ~linha 1346): `@media (max-width:767px)` com `!important` que força em todas as telas `.container` (padding lat. 4px), `.menu-hub-card` (16px 4px), `.lesson-reading-card` (20px 6px), `.card-quiz` (20px 8px), `.question-card-item` (18px 8px), `.option-btn-card` (14px 10px), `.quiz-app`/`.quiz-container`/`.quiz-app-container` (max-width 100%, margin 0 4px, padding 0) e os internos do Excel (`.grid-inspector-container`, `.formula-builder-container`, `.function-lab-container` → 12px 10px). Colocado AO FINAL (antes do print) para vencer media queries antigas (900px/640px) e o padding inline dos módulos — fim do "efeito linguiça" no mobile.
2. **Removido overrides móveis inline que contradiziam a regra** (fonte única = bloco global): `modules/internet/index.html` (removido `padding` de `.menu-hub-card`/`.lesson-reading-card`/`.option-btn-card` no `@media 767px`; mantida só a "des-nesting" de fundo/borda), `modules/windows/index.html`, `modules/word/index.html`, `modules/powerpoint/index.html` (removido `@media 560px .card-quiz` e comentado delegando ao bloco global). `modules/internet/prova-internet.html` mantém seus valores (já alinhados à regra).
3. **`AGENTS.md` regra 6** gravada: "Mobile aproveita 100% da largura (regra global obrigatória)" — proíbe criar `@media` por aula com padding lateral maior e obriga editar somente o bloco global de `style.css`.

**Pendências para a próxima sessão (ordem sugerida):**
- [ ] **Teste visual manual (ou playwright/puppeteer, se instalado) em mobile (375/414px) e desktop** de cada módulo (Excel hub/9 aulas, Windows Aula 8, Word, PowerPoint, Internet hub/prova): confirmar largura máxima (~4px) nos cards sem perda de leitura (espaçamento de alternativas `.option-btn-card` 14px 10px, etc.).
- [ ] Confirmar que o flatten "card dentro de card" de fundos/bordas (que segue sendo inline no módulo Internet) continua bom; avaliar se vale portar também a des-nesting de VISUAL (não só padding) para o bloco global.
- [ ] Nada pendente de código conhecido — `node --check` dos scripts inline OK e CSS balanceado (ver "Validações").

## Escopo das sessões anteriores

### Sessão 17/09/2026 — módulo Internet

Regra obrigatória gravada (AGENTS.md regra 1, SPEC-EXCEL-MASTER.md §6.1, SDD-AULA-08):
- Toda aula tem FASE 0 com objetivo + **roteiro numerado**.
- **Checks distribuídos** — um check no fim de cada fase, exatamente onde o passo é executado; cada passo libera o próximo.
- **Proibido agrupar todos os checks num único lugar** (checklist ☐ consolidado).
- PDF gerado por `assets/js/pdf-lessons.js` deve conter **ilustração real** (imagem ou HTML `mini-sheet`/`es-sheet-box`), nunca "🖼️ Referência de imagem: ...".

## Concluído (checar antes de retrabalhar)

### 1. Aulas 02, 03 e 08 — refatoradas para o padrão novo
- `l2-check-1..8`: C1/C2 na strip da FASE 0; C3@P1, C4@P2, C5@P3, C6@P4, C7@P5, C8@P6.
- `l3-check-1..7`: C1 na strip da FASE 0; C2@P1 … C7@P6.
- `l8-check-1..9`: C1/C2 na strip da FASE 0; demais nas fases 1–6 e 9.
- Padrão de F0: 🎯 objetivo + 🗺️ roteiro (chips SEM checkbox) + 🏁 resultado final + ⚙️ strip de preparação com `.phase-step-check` + contador `#lX-checklist-status` + `#lX-complete-hint` + botão "Começar a Aula" sempre habilitado (rola para `#lX-phase-1`).
- IIFE por aula, article-scoped (`l2-check`, `l3-check`, `l8-check`).

### 2. Navegação de fases melhorada (TODAS as aulas)
Reclamação do usuário: "mudança de fase muito tosca e confusa ao clicar; quero ver só a fase clicada na tela; ajuste em todas as aulas; também mobile."

- `modules/excel/index.html` → `window.switchTopicPhase` (~linha 6631):
  - Removido `window.scrollTo({top:200})` (o que causava confusão).
  - Agora: aba ativa centraliza na faixa via `scrollIntoView({inline:'center', block:'nearest'})` e a **fase clicada entra em cena rolando direto até o topo dela** via `scrollIntoView({behavior:'smooth', block:'start'})`.
  - Fixação escondida de forma null-safe (`if(fixation) ...`).
- `assets/css/style.css`:
  - `.topic-phase-section { scroll-margin-top: 92px; scroll-margin-bottom: 24px; }` (~linha 362) — evita esconder a fase sob o `.header-nav` sticky.
  - Mobile `@media (max-width: 767px)` (~linha 1027): `.topic-tabs-bar` **sticky no topo** (`top:70px`) e fases com `scroll-margin-top: 150px`.
- Observação: como `switchTopicPhase` e o CSS são globais, a melhoria vale automaticamente para as aulas 1–8 (`l1-phase-1..7`, `l2/l3-phase-1..6`, `l8-phase-1..9`). A troca de fase já escondia as outras via CSS (`display:none` / `.active{display:block}`).

### 3. PDF (`assets/js/pdf-lessons.js`) — FASE 0 alinhada ao padrão novo
- Seções **2.0** (~linha 429), **3.0** (~linha 497) e **8.0** (~linha 917).
- Substituído o bloco "✅ PASSO A PASSO — monte a planilha degrau por degrau" + itens **☐** agrupados por **roteiro numerado em chips** (sem checkbox) + nota "cada passo tem um check no fim da fase".
- Mantido o bloco real "🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL" com tabelas `mini-sheet` / `es-sheet-box`.
- Sem resíduo de `☐` ou "✅ PASSO A PASSO" no arquivo (grep confirmou).

## Validações realizadas (e como rodar de novo)

```
node --check assets/js/pdf-lessons.js
node /tmp/opencode/check-inline.js   # 4 scripts inline OK (o maior ~75k chars)
# CSS balanceado: node -e "ler style.css; contar { }" -> 174/174

# Aula 09 — validação do gating (padrão canônico, sessão atual):
#   python3: extrair todos os <script> de modules/excel/index.html -> node --check em cada (7 blocos OK)
#   grep -c 'tab-l9-7' modules/excel/index.html            -> 0  (quiz agora é tab-l9-6)
#   grep -c 'btn-read-l9-' modules/excel/index.html        -> 5  (btn-read-l9-1..5)
#   readStatus[9] -> 5 slots ([false x5]) e quiz em tab-l9-6 (totalTopics+1 = 6)
```

### 4. Aula 09 — correção do gating do quiz (bloqueio eterno) + padrão canônico de marcadores CONCLUÍDA
- **Bug provado por auditoria estática:** o quiz da Aula 09 ficava bloqueado para sempre. `openFixationPanel(9)` exige `readStatus[9]` com todos os slots lidos, mas **nenhum código populava esse array** — a Aula 09 não tinha botões "Marcar Tópico como Lido".
- **Padrão errado que existia antes:** 6 slots no `readStatus[9]`, 6 checks `.l9-check` (sendo 1 prep redundante na FASE 0) e o IIFE marcando `markTopicRead(9, idx+1)` nos checks — tudo fora do canônico da Aula 08.
- **Correção aplicada em `modules/excel/index.html` (alinhada ao canônico Aula 08: 1 botão "◯ Marcar Tópico N como Lido" por fase, que popula `readStatus`):**
  1. `readStatus[9]` → **5 slots** (um por tópico).
  2. Botão do quiz renomeado: `id="tab-l9-7"` → **`id="tab-l9-6"`** (`totalTopics + 1 = 6`), `onclick="openFixationPanel(9)"`. Zero refs remanescentes a `tab-l9-7` no repo.
  3. **Adicionados os 5 botões `btn-read-l9-1..5`** ("◯ Marcar Tópico N como Lido"), um no fim de cada fase, chamando `markTopicRead(9, N)` — mesma estrutura `read-check-box`/`read-check-btn` da Aula 08.
  4. **Removido `markTopicRead` do wiring do IIFE FASE 0** — os checks `.l9-check` voltaram a fazer apenas gating sequencial (`addEventListener('change', refresh)`), como a Aula 08.
  5. **Checks reduzidos de 6 → 5** (removido o prep check redundante "PASSO 1 — ENTENDER A HISTÓRIA" da FASE 0; renumerados `l9-check-1..5` e passos 1–5 no fim de cada tópico). Roteiro, contador e hint atualizados para "5 passos".
  6. Label gamificado: "Tópico 1 de 7" → **"Tópico 1 de 5"**.
- `markTopicRead` é null-safe no botão (`if (btn)`) e `updateGamification` é null-safe no fill/label.
- **Validação:** `node --check assets/js/pdf-lessons.js` OK; script inline do IIFE OK (`new Function`); greps confirmam `btn-read-l9-1..5` presentes e USADO=0 para `tab-l9-7`/`l9-check-6`.
- **Confirmado pelo usuário:** "marcadores corrigido ✅" — o aluno aprovou o padrão novo de marcadores da Aula 09.

### 5. Aula 09 — chave 9 em `moduleLessonTitles.excel` (PDF)
- `assets/js/pdf-lessons.js` → `moduleLessonTitles.excel` ganhou `9: "Aula 09: Macros & Introdução ao VBA — Aventura Capiberica: Aprendendo Lógica de Programação no Excel"` (antes só 1–8), evitando fallback/título genérico no PDF da Aula 09.

### 6. Módulo Internet — mobile: miniatura do certificado + flatten de cards encadeados (sessão de hoje)
- `prova-internet.html`: termo **"DIPLOMA" → "CERTIFICADO"** nas 2 ocorrências do repo (selo `.certificate-seal-badge` e texto JS da aprovação).
- Certificado envelopado em `#cert-thumb-wrap`: no mobile (<767px) vira **miniatura** (preview com `max-height:340px`, moldura arredondada, fade inferior) + botão **"🔍 Ampliar Certificado"** (`#btn-cert-toggle`, `.no-print`) que alterna `.expanded` (remove o cap e mostra o A4 inteiro). `@media print` zera o cap do wrapper e preserva o A4 landscape (`#wr-certificate-card` intacto).
- Certificado compactado em ≤640px (h2 17px, h3 20px, p 13px; grid de 3 colunas → 1; padding 18/14).
- **Certificado no mobile em modo escuro (decisão do usuário — "texto claro sobre fundo escuro")**: `@media screen and (max-width:767px)` inverte o certificado — fundo `var(--bg-brown)` (#1E130B), textos `var(--ink-light)` (#F4E8DC), títulos #FFFDF7, acentos/links/código e labels `var(--amber)` (#FB923C), boxes de especificações `var(--card-brown)` (#2A1B10). Fade da miniatura também escurecido. **Tela grande (≥768px) e impressão continuam claros** (`@page` A4 landscape restaurado/verificado) — o bloco escuro é `screen`-only.
- **Correção de contraste da pergunta da prova no mobile (bug relatado pelo usuário — "texto preto fundo marrom")**: o flatten `.menu-hub-card .question-card-item` usava `background: transparent` e, na tela de exame (card marrom escuro atrás), deixava o texto preto sobre marrom. Agora mantém fundo `var(--paper-beige)` com borda `var(--line-light)`, sem sombra (leitura garantida). Regra: `question-card-item` que estiver sobre fundo escuro DEVE manter fundo claro.
- `index.html` + `prova-internet.html` ganharam CSS mobile (`@media max-width:767px`) que **desfaz o efeito "card dentro de card dentro de card"**: `.browser-card`, `.subcard-item`, `.fixation-panel`, `.question-card-item` perdem caixa/sombra (viram listas/botões); caixas de destaque perdem `box-shadow`; `.menu-hub-card`/`.lesson-reading-card` com padding reduzido.
- Caixas de código grandes viraram **miniatura com rolagem** no mobile: `#home-code-output` (240px) e `#ai-prompt-text` (260px).
- **Validação:** `node --check assets/js/pdf-lessons.js` OK; scripts inline de `index.html` e `prova-internet.html` extraídos e validados com `node --check` OK; variáveis CSS usadas (`--amber-soft`, `--teal`, `--line-light`, `--paper-white`, `--shadow-sm`) confirmadas nos arquivos.

## Pendências / próximos passos

0. **Aula 09**: falta **teste manual em navegador** do fluxo completo do quiz (marcar os 5 `check` sequenciais → clicar nos 5 botões "Marcar Tópico como Lido" → `openFixationPanel(9)` → responder 5 perguntas → `calcFixation(9)`/senha `xi009`). O gating agora é tecnicamente correto (proof por grep/estático + `node --check`). Confirmar também `status` de gamificação pós-teste.
1. **Teste manual em navegador** da navegação de fases (desktop + mobile): abrir Aula 2/3/8, clicar nas fases e nos "Voltar/Ir para Tópico". Ambiente não tem playwright/puppeteer instalado; instalar se quiser teste automatizado do toggle.
2. **Conferir visual do PDF popup** nas 3 seções (chips + tabelas reais) via `downloadLessonPDF`.
3. **Conferir aulas 4–7 e 1**: a melhoria de navegação já se aplica (função/CSS globais), mas vale um passe visual (`l1` tem 7 fases).
4. Se forem refatoradas novas aulas (ex.: 04–07) para o padrão F0 + checks distribuídos, **espelhar também no PDF** e seguir a regra de checks distribuídos.
5. Não esquecer: senha mestre que libera qualquer aula está no próprio `index.html` (usada apenas para teste manual).
6. **Aula 10 (VBA Avançado)**: SDD preliminar existe (`Docs/SDD-AULA-10-VBA-AVANCADO.md`). Fica para sessão futura seguindo o padrão da Aula 09 (FASE 0 + checks distribuídos + quiz com `GABARITO`, senha `xj010`).
7. **AUMENTAR O TAMANHO DAS IMAGENS (reporte do usuário — próxima atividade):** as imagens das Aulas **1, 3, 4, 5, 6, 7, 9, 10** ficaram **muito pequenas** na visualização. O usuário pediu explicitamente: *"aumente o tamanho / aumente size img"*. Causa raiz identificada:
   - `assets/css/style.css` ~1001–1003: `.img-reduced` fixa `max-width: 70% !important` (95% só no mobile ≤640px). Atinge Aulas 1 (=a1, 6 imgs), 2 (=a2, 8 imgs) e 7 (=a7, 16 imgs `image1..16`).
   - Aula 7 ainda tem cap **inline** menor: `max-width:520px` (2 imgs) e `max-width:420px` (14 imgs) em `modules/excel/index.html` ~5075–5355.
   - Aula 9 (a9, 11 imgs) usa `width:100%` inline (não é o `.img-reduced`) — revisar no PDF, pois o renderer `pdf-lessons.js` ~1675 já impõe `max-width:96%; max-height:480px`.
   - Obs.: no módulo Excel, **imagens existem hoje apenas em a1/a2/a7/a8/a9** (a8 = 5 imgs `image1..5`, ainda não usadas na tela). As aulas 3, 4, 5, 6 e 10 não têm imagens neste `index.html` — confirmar com o usuário onde ele viu as imagens pequenas (se na tela do navegador ou no preview PDF) antes de mexer, para não alterar o escopo.
   - **Ação da próxima sessão:** subir o cap do `.img-reduced` (ex.: 70% → ~90–100%) e/ou trocar os `max-width` inline da Aula 7 (420px → ~640–720px), validar tela + PDF (ver regra 2 do AGENTS.md).
8. **DEFEITO TÉCNICO — "cards encadeados" nos demais módulos:** a parte de **padding/largura** foi resolvida globalmente em 18/09/2026 com o bloco `REGRAS MOBILE GLOBAIS` em `assets/css/style.css` (vale para Excel/Windows/Word/PowerPoint/Internet e telas futuras — ver regra 6 do AGENTS.md). Continua **pendente** (sessões futuras): aplicar/examinar a des-nesting de **visual** (fundos/bordas/sombras) nos módulos Windows/Word/PowerPoint/Excel no mobile, como já foi feito no Internet (`.browser-card`, `.subcard-item`, `.fixation-panel`, `.question-card-item` perdem caixa no mobile) — avaliar portar essa des-nesting para o bloco global de `style.css` de forma genérica (com teste visual por módulo antes).
9. **Teste em navegador do módulo Internet (mobile + desktop)** das mudanças de hoje: pergunta da prova legível (fundo claro), miniatura + "Ampliar Certificado", certificado em modo escuro no mobile (impressão continua clara), flatten das fixações, caixas de código com rolagem. Sem playwright/puppeteer instalado no ambiente.

## Arquivos relevantes (localizadores aproximados — podem deslocar após edições)

- `modules/excel/index.html` (7817+ linhas): `switchTopicPhase` ~6631; F0s `#l2-fase-0` ~1427, `#l3-fase-0` ~2234, `#l8-fase-0` ~5505, `#l9-fase-0` ~6480 (IIFE puro gating, sem wiring de `markTopicRead`); `btn-read-l9-1..5` fim de cada fase ~6618–6892; quiz Aula 09 `tab-l9-6`/`openFixationPanel(9)` ~6577; `readStatus` (Aula 09 com 5 slots) ~7129.
- `assets/css/style.css` (1367+ linhas): tabs ~310, `::after` ~322, `.topic-phase-section` ~359, scroll-margin ~362, mobile sticky ~1027, **`.img-reduced` (max-width:70%) ~1001–1011** e mobile 95% ~1018, print 82% ~1354.
- `assets/js/pdf-lessons.js` (1686+ linhas): seções FASE 0 em ~429/497/917; `moduleLessonTitles.excel` (1–9) ~1301–1313; render de imagens do PDF (`max-width:96%; max-height:480px`) ~1675–1690.
- `Docs/SPEC-EXCEL-MASTER.md` §6.1 e `Docs/SDD-AULA-08-SIMPLIFICACAO.md`: normas obrigatórias de aula.
- `AGENTS.md`: regras persistentes.

## Regras de ouro (não esquecer em nenhuma sessão)

- FASE 0 SEMPRE presente; roteiro numerado; checks distribuídos no fim de cada fase (nunca agrupados).
- PDF com ilustração real obrigatória.
- Após editar: rodar `node --check assets/js/pdf-lessons.js` + checar scripts inline + conferir balanceamento do CSS.
- Atualizar ESTE arquivo no fim de cada sessão.