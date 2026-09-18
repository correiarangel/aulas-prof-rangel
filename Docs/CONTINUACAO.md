# CONTINUAÇÃO — Anexo de Continuidade do Repositório

> Proposito: registrar fielmente onde paramos para que qualquer sessão futura continue sem perder contexto.
> Este arquivo deve ser **atualizado ao fim de cada sessão** com: concluído, pendente, localizadores e validações.

## 📌 PRÓXIMA SESSÃO — COMEÇAR AQUI (resumo de hoje, 17/09/2026)

Escopo trabalhado hoje: **somente o módulo Internet** (`modules/internet/`). Nada foi feito nos outros módulos.

**Concluído e validado hoje (não refazer):**
1. Certificado: termo "DIPLOMA" → "CERTIFICADO" (selo + texto JS da aprovação).
2. Miniatura do certificado no mobile (≤767px) com botão "🔍 Ampliar Certificado" (`#btn-cert-toggle`, alterna `.expanded` em `#cert-thumb-wrap`); `@page` A4 landscape restaurado no print após edição ter removido por engano.
3. Certificado no mobile em **modo escuro** (decisão do usuário): `@media screen and (max-width:767px)` — fundo `var(--bg-brown)`, textos `var(--ink-light)`, acentos `var(--amber)`, boxes `var(--card-brown)`, fade da miniatura escuro. Desktop ≥768px e impressão seguem claros.
4. Flatten "card dentro de card" no mobile (index + prova).
5. Correção de contraste: pergunta da prova no mobile ficava **preta sobre marrom** — agora `question-card-item` mantém fundo `var(--paper-beige)` + borda `var(--line-light)` sem sombra (aplicado em `modules/internet/prova-internet.html` ~linha 76-86).
6. Resposta da questão de prova sobre Google Docs: **B — "Salva automaticamente na nuvem a cada caractere ou palavra digitada"** (`correct:1` em `prova-internet.html:421-428`; fixação Aula 3 `index.html:1536-1542`).

**Pendências do módulo Internet para a próxima sessão (ordem sugerida):**
- [ ] **Teste manual em navegador (mobile + desktop)** de tudo acima: abrir a prova no mobile → responder questões (texto legível), ver miniatura do certificado → "Ampliar" → cancelar → imprimir (A4 claro); conferir fixações das aulas no mobile (listas sem "card dentro de card") e as caixas de código com rolagem (`#home-code-output` 240px, `#ai-prompt-text` 260px). Ambiente não tem playwright/puppeteer — instalar caso queira automatizar.
- [ ] Avaliar se o flatten mobile do Internet deve virar bloco genérico em `assets/css/style.css` para os demais módulos (ver Pendência 8).
- [ ] Nenhuma alteração pendente de código no Internet — tudo validado (`node --check` inline OK, CSS 45/45, `pdf-lessons.js` OK).

## Contexto / Objetivo de Longo Prazo

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
8. **DEFEITO TÉCNICO REGISTRADO — "cards encadeados" nos demais módulos:** o padrão de `card dentro de card dentro de card` (ex.: `.menu-hub-card` > `.question-card-item` > `.option-btn-card`; `.lesson-reading-card` > `.browser-card`/`.subcard-item`/`.question-card-item`; certificado inteiro dentro de `.menu-hub-card`) foi **corrigido hoje apenas no módulo Internet** via CSS mobile em `modules/internet/index.html` e `modules/internet/prova-internet.html`. **Pendente de aplicar o mesmo flatten (CSS mobile ≤767px) aos módulos Windows/Word/PowerPoint/Excel** em sessões futuras: auditar quais classes/inline styles repetem o padrão (`.fixation-panel`, `.question-card-item`, `.option-btn-card`, `.browser-card`, `.subcard-item`) e avaliar portar o bloco para `assets/css/style.css` de forma genérica (com teste visual por módulo antes).
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