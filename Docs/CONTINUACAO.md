# CONTINUAÇÃO — Anexo de Continuidade do Repositório

> Proposito: registrar fielmente onde paramos para que qualquer sessão futura continue sem perder contexto.
> Este arquivo deve ser **atualizado ao fim de cada sessão** com: concluído, pendente, localizadores e validações.

---

## 🚀 INSTRUÇÕES PARA O PRÓXIMO AGENTE — COMO REINICIAR O AMBIENTE (ler PRIMEIRO)

Antes de qualquer outra coisa, reiniciar o ambiente de teste exatamente assim (nada disso está rodando ao abrir uma sessão nova):

1. **Servidor HTTP na raiz do repo** (`/home/rangel/git-dev/aulas`):
   ```bash
   python3 -m http.server 8077 > /tmp/opencode/pdftest/server.log 2>&1 &
   ```
2. **Chrome headless com CDP na porta 9333** — o flag `--disable-popup-blocking` é **OBRIGATÓRIO** (sem ele o `window.open` do popup do PDF é bloqueado, o alerta "permita pop-ups" dispara e o PDF gerado vira a própria app, não a apostila):
   ```bash
   /usr/bin/google-chrome --headless=new --remote-debugging-port=9333 \
     --user-data-dir=/tmp/opencode/pdftest/chrome-profile \
     --disable-popup-blocking --disable-gpu --no-sandbox --no-first-run --disable-extensions \
     about:blank > /tmp/opencode/pdftest/chrome.log 2>&1 &
   ```
3. **Conferir que subiu** (deve imprimir um `ws://127.0.0.1:9333/devtools/browser/...` e `HTTP 200`):
   ```bash
   sleep 2
   curl -s http://127.0.0.1:9333/json/version | head -c 120; echo
   curl -s -o /dev/null -w "Aula Excel: HTTP %{http_code}\n" http://127.0.0.1:8077/modules/excel/index.html
   ```
4. **Harness de teste** (em `/tmp/opencode/pdftest/`): `cdp2.js` (conexão CDP — **tem auto-descarte de `alert()`**, sem ele o harness trava quando `calcFixation` roda com questões em branco) · `persist.js` · `partial.js` · `final.js` · `quiz6.js` · `proj2.js` · `pass.js` · `casc.js` · `main.js` (gera `report.json` + PDFs via popup). Bateria validada em 01/10/2026: **173 asserções, 0 falhas** — `for t in persist partial final quiz6 proj2 pass; do node /tmp/opencode/pdftest/$t.js; done`. A Aula 10 já está implementada, com senha `xj010`, FASE 0 "▢ 0 / 6", cadeia de checks até 100%, quiz 5/5 e PDF 10 com as 5 imagens na ordem do SDD §4.
5. **Harness da Aula 01 do Windows** (usado em 30/09/2026, em `/tmp/opencode/`): servidor em `http://127.0.0.1:8123` e `cdp.js` + `test-aula1.js`, `test-nota10.js`, `test-persistencia.js`, `test-pdf-regressao.js`, `test-pdf.js`, `layout-audit.js`, `test-responsive2.js`, `test-linux.js`, `test-linux-mobile.js`, `check-pdf-linux.js`.
   - **Regra para overlay/fixed dentro de aula**: um `position: fixed` aninhado num ancestral com `transform` (ex.: `.lesson-reading-card`) renderiza com **largura 0** e continua com `display: block` — teste por `classList` dá falso verde. Sempre (a) deixar o overlay como filho direto de `<body>` e (b) medir `getBoundingClientRect().width`, não só a classe.

> ⚠️ **Armadilha do cache (custou uma hora de teste falso)**: se o `window.open`/aba for criada **já com a URL**, o Chrome carrega `index.html` e `style.css` do cache **antes** de `Network.setCacheDisabled` ter efeito — o harness passa a medir o arquivo velho e dá verde com o bug ainda presente. O padrão correto (já em `cdp.js`) é: abrir `about:blank` → conectar na sessão → `Network.enable` + `setCacheDisabled` → **aí** `Page.navigate(url)`.

Fim desta instrução. Continuar na **SESSÃO ATUAL — COMEÇAR AQUI** abaixo.

---

## ✅ SESSÃO ATUAL — COMEÇAR AQUI (08/10/2026) — Aula 12: Prova Final do módulo Windows + correção do hub

Criada a **Prova Final do módulo Windows** (`modules/windows/prova-windows.html`) no padrão da prova do módulo Internet, e corrigido o hub `modules/windows/index.html` (card AULA 02 duplicado + rótulos desalinhados + link da Aula 12).

> 🔄 **REVISÃO DA MESMA SESSÃO (08/10/2026, pedido do professor) — FORMATO FINAL:** a prova **não tem mais atividades práticas**. Foram removidos a tela `screen-practical`, o checklist `pr-*`, `POINTS_PER_PRACTICAL`, `TOTAL_PRACTICALS`, `practicalChecks` e todo o fluxo/listeners de prática. As questões **8, 10, 11 e 14 foram substituídas por versões mais fáceis** (Q8 = atalho Windows + E; Q10 = Delete → Lixeira; Q11 = para que serve uma pasta; Q14 = antivírus que já vem no Windows) — **sem `.bat`/xcopy, sem Media Creation Tool, sem a prática da Aula 9 e sem conta Administrador × Padrão**. Pontuação final: **15 questões × (10/15) ≈ 0,67 ponto cada = 10,0**; `PASS_SCORE=7.0` → aprovação com **11 acertos (7,33)**. Gabarito novo: `[1,2,3,0,3,2,1,2,2,2,1,1,1,3,0]`. **As descrições abaixo que citam práticas / 0,5 ponto / 2,5 pontos estão SUPERADAS.**

### 1. O que foi entregue

| Peça | Onde |
|:---|:---|
| `modules/windows/prova-windows.html` (novo, ~960 linhas) — telas `screen-lock` → `screen-start` → `screen-exam` → `screen-result` (formato final, sem prática) | arquivo novo |
| 15 questões de múltipla escolha (4 alternativas), **1 por tela**, baseadas no conteúdo real das aulas | `QUESTIONS` |
| Pontuação final: **15 × (10/15) ≈ 0,67 = 10,0**; aprovação **7,0** | `POINTS_PER_Q = EXAM_MAX/TOTAL`, `PASS_SCORE=7.0` |
| Gate de leitura: botão "Iniciar Prova" só libera com **nome + checkbox do PDF** | `checkStartUnlock()` (L822) |
| Persistência real (Regra 7): `QuizEngine.saveState/loadState` em responder, navegar, marcar prática e assinar; caixa **"Continuar de onde parei"** e **"↺ Recomeçar do zero"** que apaga a chave | `STORAGE_KEY="prova-windows-prof-rangel"` (chave final `${STORAGE_KEY}:${nome}`) |
| Certificado A4 landscape (nome, nota, carga "11 Aulas + 2 Complementos"), assinatura SHA `WR-XXXX-…`, botões TXT / PDF (print) / WhatsApp / E-mail | `screen-result` |
| Hub: **removido o card AULA 02 duplicado** ("Área de Trabalho e Atalhos") | `modules/windows/index.html` (~L324) |
| Hub: rótulos das Aulas **05/06/09/10/11** alinhados aos títulos-fonte (`Área de Trabalho, Pastas e Arquivos` · `WordPad — Editor de Texto do Windows` · `Prática: Organização e Configuração do Windows` · `Ferramentas Básicas do Windows (7, 10 e 11)` · `Revisão Geral do Windows`) | idem |
| Hub: card **AULA 12** agora é `onclick="window.location.href='./prova-windows.html'"` com badge 📝 (antes 🚧/Em Construção) | idem |
| `assets/js/quiz-engine.js`: suporte **aditivo/backward-compatible** a `extraNotes: string[]` no TXT, no WhatsApp e no e-mail (nenhum outro módulo passa `extraNotes`) | L86, L158, L185 |

### 2. Decisões gravadas

1. **Senha da prova**: `PROVA_PASS = "wr0926"` + aliases `["wr1226", "wr2026"]`; desbloqueio persistido em `sessionStorage["prova_unlocked_m12"]`.
2. **Card 12 do hub usa `location.href`** (não `promptLessonPassword`) — abre a prova em página própria. A rota órfã `12: "screen-quiz"` (L5112) ficou intacta e é inofensiva.
3. ~~**Questão 11 (Aula 9)**~~ — **REVISTA**: a questão sobre a prática da Aula 9 foi removida (Q11 agora pergunta "para que serve uma pasta"). Complementos 7A/8A não são mais cobrados diretamente na prova.
4. Sem carga horária inventada no certificado: "📚 CONTEÚDO CONCLUÍDO: 11 Aulas + 2 Complementos".

### 3. Validações executadas (08/10/2026)

```bash
node --check assets/js/quiz-engine.js   # OK
node --check assets/js/pdf-lessons.js   # OK
# scripts inline extraídos por python e checados: index.html e prova-windows.html → node --check OK
node /tmp/opencode/provatest/prova.js   # PASSOU 30 · FALHOU 0  (CDP/Chrome headless)
node /tmp/opencode/provatest/hub.js     # PASSOU 11 · FALHOU 0  (CDP/Chrome headless)
```

Cobertos automaticamente: senha errada/certa, gate PDF+nome, 15 questões → resultado, nota 10,0/10,0 + "Parabéns", certificado/SHA, persistência (15 respostas + assinatura, **sem** práticas), WhatsApp com 15/15, retomar no reload (questão 15 preservada), "Recomeçar do zero" apaga o `localStorage`, e o hub (AULA 02 única, 5 rótulos, clicar no card 12 abre a prova).

### 4. Pendente

1. **Aprovação visual humana** da prova renderizada e do PDF da apostila do módulo (o harness prova estrutura/comportamento, não o texto renderizado — Regra 12).
2. **P-10** — commit (aguardando o professor).

---

## ✅ SESSÃO ANTERIOR (07/10/2026) — Aula 03 do Windows (medidas de armazenamento) + simulador binário integrados e validados

A 3ª aula do módulo Windows foi **criada do zero** e validada de ponta a ponta: hub, senha, tela com checks distribuídos, quiz com persistência, PDF de 10 seções com as 7 imagens e o **simulador binário/ASCII** novo (arquivo `modules/windows/simulador-binario.html`). Spec em **`Docs/SPEC-AULA-03-WINDOWS.md`** (§12 lista as deviações).

### 1. O que foi entregue

| Peça | Onde |
|:---|:---|
| `screen-lesson-3` — FASE 0 + 9 fases, **10 checks** (`check-read-3-1..10`), 10 abas (`tab-btn-3-1..9` + `tab-btn-3-fix`), 7 imagens legendadas | `modules/windows/index.html` (seção iniciada na linha ~2494, antes da Aula 7) |
| Card "Aula 03" no hub → `promptLessonPassword(3, 'Medidas de Armazenamento no Computador')` | idem |
| `PASSWORD_A3 = "wr0326"` **⚠️ candidata, aguarda confirmação** (já somada ao gate único de senha) | idem |
| `TOTAL_TOPICS[3]=10`, `SEQUENTIAL_LESSONS` += `3`, `OPEN_LESSONS=[1,2,3,7,8,71,81]`, rota `3:"screen-lesson-3"`, bindings `[1,2,3,7,71,81]` | idem |
| `QUESTIONS_LESSON_3` (5 questões × **4 alternativas**) + `QUIZ_CFG[3]` (`moduleId:"windows-aula-3"`) | idem |
| FASE 9 com botão que faz `window.open('simulador-binario.html','_blank','noopener,noreferrer')` | idem |
| `moduleLessonTitles.windows[3] = "Aula 03: Medidas de Armazenamento no Computador — Do Bit ao Disco Rígido"` | `assets/js/pdf-lessons.js` (~linha 139) |
| **10 seções `lessonNum: 3` (3.0→3.9)** com mini-sheets, `imagesWide` em 3.3 (Rangel) e 3.4 (Medidas), boxType tip/warning | `assets/js/pdf-lessons.js` (linhas ~720–1068) |
| **`modules/windows/simulador-binario.html`** (268 linhas, standalone) — 4 conversores com passo-a-passo, histórico e `localStorage` | arquivo novo |
| 7 PNG (140 KB) copiados da `AulaOrigem` | `assets/img/windows/Aula3/` |

### 2. Decisões/desvios que FICARAM GRAVADOS na spec (§12)

1. **`TOTAL_TOPICS[3] = 10`** — FASE 0 = check 1; fases 1–9 = checks 2–10 (a spec original dizia 8, depois 9). Progresso em passos de 10%.
2. **PDF com 10 seções** (a §5 pedia 9; a §10.6 acrescentou a 3.9 do simulador — prevaleceu a mais recente).
3. **4 alternativas por questão** (padrão do módulo Windows, não 5).
4. **Questão 2 do quiz corrigida**: o enunciado da spec ("quantos bytes formam 1 MB → 1024") era falso (1 MB = 1.048.576 bytes). Virou "Quantos **Kilobytes (KB)** formam 1 **Megabyte (MB)**?" → 1024.
5. Badge de leitura = `🎉 LEITURA COMPLETA!` (padrão do módulo).
6. **Reordenação dos tópicos 2–4** (pedido do professor, mesmo dia): "Medidas de Armazenamento" saiu de 2 → 4. Nova ordem **binário → Tabela ASCII → "Rangel" em Binário → Medidas → 5–9**. Check ids posicionais renumerados em tela e PDF; `imagesWide` preservado por conteúdo. Detalhes no **Anexo 12**.
7. **Explicação do binário reescrita** (mesmo dia): a caixa `1×2² + 0×2¹ + 1×2⁰ = 4 + 0 + 1 = 5` foi substituída (tela e PDF 3.1) por uma **tabela de posições** + frase em prosa ("dígito × 2^posição, da direita para a esquerda a partir de 0") — sem mudança factual.

### 3. Fatos conferidos no conteúdo (Regra 12)

1 Byte = 8 bits · KB/MB/GB/TB com fator 1024 · ASCII A=65=01000001, espaço=32 · "Rangel" = 6 bytes/48 bits · 13→1101 e 5→101 · **SSD não desfragmenta** (só "Otimizar") · Win+E → Este Computador → Disco (C:) · Win+R → `wordpad`. Nada de "1 MB = 1.024 bytes" em tela ou PDF (assert do harness).

### 4. Validação (Chrome/CDP, `http://127.0.0.1:8077`)

| Bateria | Resultado |
|:---|:---|
| **`/tmp/opencode/a3_harness.py`** (Python + `cdplib.py`) | **66/66** — relatório `/tmp/opencode/a3_report.json` |
| — senha | modal abre, senha errada mantém, `wr0326` libera e vira badge 🟢; Aula 01 ainda abre com `wr0926`; aula fechada só alerta |
| — estrutura | 10 checks (só o 1 libera), 10 abas, 9 fases, gating, barra/badge 100%, persistência da leitura após reload, 7 imagens carregando, **0 ids duplicados**, tags balanceadas |
| — quiz | 5 questões × 4 alternativas → 5/5, nota **10,0**, assinatura SHA, breakdown, chave `windows-aula-3:aluno(a)` no `localStorage`, restaura na questão 5 após reload, "↺ Recomeçar" zera tudo |
| — PDF | `downloadLessonPDF('windows',3)`: título correto, **10 seções 3.0–3.9**, 7 imagens de `Aula3/` + logo (9 `<img>`, todas carregando), 12 mini-sheets, 5 fun-highlights, **2 grids wide**, sem `JSTOR`, sem "🖼️ Referência de imagem", sem Conversion Bug |
| — simulador | abre em nova aba, 4 conversores testados (13→1101 com passo-a-passo, 01010010→82, R→82→01010010, 01010010→R), histórico, `localStorage` `wrWindowsBinConvState` restaura, mobile 375 OK, console limpo |
| — mobile | 375px: `scrollWidth == 375`, **zero** elementos estourando na tela da aula e no simulador |
| — sintaxe | `node --check assets/js/pdf-lessons.js` OK · script inline do `index.html` OK |

### 5. Ambiente de teste usado (já está rodando)

```bash
python3 -m http.server 8077 > /tmp/opencode/pdftest/server.log 2>&1 &
/usr/bin/google-chrome --headless=new --remote-debugging-port=9333 \
  --user-data-dir=/tmp/opencode/pdftest/chrome-profile \
  --disable-popup-blocking --disable-gpu --no-sandbox --no-first-run --disable-extensions \
  about:blank > /tmp/opencode/pdftest/chrome.log 2>&1 &
python3 /tmp/opencode/a3_harness.py     # 66/66 em ~1 min
```
`cdplib.py` auto-dismissa `alert/confirm` (senão o harness trava no "aula em construção").

### 6. Estado do working tree (nada commitado — P-10 segue aguardando o professor)

```
 M assets/js/pdf-lessons.js      (+1585/-… inclui Aula 2 e 3)
 M modules/windows/index.html    (+1951/-… inclui Aulas 1, 2 e 3)
 M Docs/CONTINUACAO.md · Docs/SPEC-AULA-01-WINDOWS.md · Docs/PENDENCIAS-EXCEL.md · assets/css/style.css · modules/excel/index.html · AGENTS.md
 ?? Docs/SPEC-AULA-02-WINDOWS.md · Docs/SPEC-AULA-03-WINDOWS.md · modules/windows/simulador-binario.html
 ?? assets/img/windows/Aula2/ (16 arquivos) · assets/img/windows/Aula3/ (7 arquivos, 140 KB)
```

### 7. Aprovação manual humana — 🔴 PENDENTE (bloqueia a publicação)

Os harnesses validam **estrutura e comportamento**; **ninguém com visão ainda conferiu o resultado renderizado**. Até esta lista ser concluída pelo professor, as Aulas 01, 02 e 03 (e o simulador) ficam **"validadas tecnicamente, aguardando aprovação visual"**:

| # | O que falta conferir (tela e/ou PDF) | Status |
|:--|:---|:---|
| 1 | Leitura da Aula 01 renderizada (layout, termômetro, painel "Saiba mais", mobile) | 🔴 pendente |
| 2 | Leitura da Aula 02 renderizada (layout, 16 imagens, roteiro, mobile) | 🔴 pendente |
| 3 | Leitura da Aula 03 renderizada (layout, 7 imagens, passo a passo, mobile) | 🔴 pendente |
| 4 | PDF das Aulas 01, 02 e 03 gerados — legibilidade, legendas, quebras de página, título | 🔴 pendente |
| 5 | Simulador binário/ASCII — visual, passo-a-passo e histórico | 🔴 pendente |
| 6 | Regressão visual dos demais módulos após as mudanças globais de CSS (Regra 6, `.fixation-panel`) | 🔴 pendente |
| 7 | Senhas candidatas confirmadas: `wr0126`, `wr0226`, `wr0326` (e `wr0426` quando a Aula 04 existir) | 🔴 pendente |
| 8 | Inspeção do PDF do Excel (P-06) | 🔴 pendente |
| 9 | **Aula 04** (SDD em `Docs/SPEC-AULA-04-WINDOWS.md`) — só após implementada: tela + PDF | 🔴 pendente |

> Este bloco é **obrigatório a cada sessão**: enquanto houver 🔴 aqui, o trabalho **não** pode ser dado como aprovado — o item deve ser conferido visualmente por humano e virar 🟢 nesta mesma tabela.

### 8. Próximos passos

1. **Aprovação manual humana (§7 acima)** — conferência visual das telas/PDFs das Aulas 2 e 3 e do simulador.
2. **Confirmar as senhas candidatas** (`wr0126`, `wr0226`, `wr0326` — e a `wr0426` da Aula 4 quando existir).
3. **P-10** — commitar tudo (Aulas 1/2/3 do Windows + simulador + imagens).
4. **Aula 04** — SDD em `Docs/SPEC-AULA-04-WINDOWS.md`, prompt em `/tmp/opencode/prompt_aula04.txt`.
5. **L-07** — Word e PowerPoint com PDF 100% texto puro (maior pendência de conteúdo).
6. **L-03** — escopo da FASE 0 nas Aulas 7, 8, 71 e 81 do Windows.

---

## 📎 ANEXO 12 — Reordenação dos tópicos 2–4 e explicação do binário (07/10/2026, rodada 2)

Pedido do professor na 2ª rodada do dia: (1) a explicação `1×2² + 0×2¹ + 1×2⁰ = 4 + 0 + 1 = 5` estava confusa e deveria ser **melhorada ou removida**; (2) **"Medidas de Armazenamento"** (era o tópico 2) deveria vir **depois do "Rangel em Binário"**.

### Nova ordem dos tópicos (tela e PDF idênticas)

1. Sistema Binário → 2. **Tabela ASCII** → 3. **"Rangel" em Binário** → 4. **Medidas de Armazenamento** → 5. Disco C: → 6. HD/SSD → 7. Data/Hora → 8. WordPad → 9. Simulador.

### O que foi alterado

**`modules/windows/index.html`**
- Blocos físicos trocados: ASCII (`l3-phase-2`), Rangel (`l3-phase-3`), Medidas (`l3-phase-4`).
- Check ids posicionais renumerados: `check-read-3-3` (ASCII), `3-4` (Rangel), `3-5` (Medidas) — FASE 0 = `3-1`, fases = `3-(N+1)`.
- Navegação: Voltar/Ir para de todas as fases 2–5 renumeradas e relabeladas (ex.: fase 1 → "Ir para 2. Tabela ASCII →"; fase 4 → "Ir para 5. Disco C: →"); tabs `tab-btn-3-2..4` relabeladas; h2 renumerados; captions "Imagem 02/07" (ASCII), "03/07" (Rangel), "04/07" (Medidas).
- FASE 0: objetivo e roteiro reordenados (ASCII antes de Medidas). Lista do exercício da fase 8 reordenada idem. Desafio da fase 9 agora cita "Tópico 3" (não mais "Fase 4").
- Caixa "Exemplo de conversão: 5 → 101" substituída por **tabela de posições "Como ler um binário: 101 = 5"** (posição 2/1/0 → 2²=4/2¹=2/2⁰=1 → dígitos 101 → multiplicações 4,0,1 → soma). 

**`assets/js/pdf-lessons.js`**
- Seções reordenadas: **3.2 O que é a Tabela ASCII?**, **3.3 Exemplo Prático: "Rangel" em Binário**, **3.4 Medidas de Armazenamento**. `imagesWide: true` viaja com o conteúdo (Rangel 3.3, Medidas 3.4 — continua 2 grids wide).
- 3.0: tabela ROTEIRO e conteúdo do objetivo reordenados. 3.1: explicação de "ler de volta para decimal (dígito × 2^posição)" + tabela de posições no lugar do box antigo. 3.8: lista do resumo reordenada.

### Validação

- `node --check assets/js/pdf-lessons.js` OK · script inline do `index.html` OK.
- `/tmp/opencode/a3_harness.py` reexecutado → **66/66 OK**. PDF renderizado confere a nova ordem (heads `3.2 Tabela ASCII → 3.3 Rangel → 3.4 Medidas`) e **2 grids wide** intactos.

---

## ✅ SESSÃO ANTERIOR — 04/10/2026, 2ª rodada — Aula 02 do Windows integrada e validada

A 1ª rodada do dia (Excel + L-01/L-02, seção anterior) continua válida. Esta rodada **criou do zero a Aula 02 do Windows** — tela, hub, senha, PDF, quiz, persistência e mobile — e fechou **L-04, L-05, L-06 e L-08** no caminho. Spec completa em **`Docs/SPEC-AULA-02-WINDOWS.md`**.

### 1. O que foi entregue

| Peça | Onde |
|:---|:---|
| `screen-lesson-2` — FASE 0 + 9 fases, 10 checks, 16 imagens, caixa "primeiro comando" | `modules/windows/index.html` (bloco de 811 linhas, inserido antes da Aula 7) |
| Card "Aula 02" no hub → `promptLessonPassword(2, 'Introdução ao Windows')` | idem |
| `PASSWORD_A2 = "wr0226"` ⚠️ **candidata, não confirmada** | idem |
| `TOTAL_TOPICS[2]=10`, `SEQUENTIAL_LESSONS` += `2`, `OPEN_LESSONS=[1,2,7,8,71,81]`, rota `2:"screen-lesson-2"` | idem |
| `QUESTIONS_LESSON_2` (5 questões) + `QUIZ_CFG[2]` (`moduleId:"windows-aula-2"`) | idem |
| 10 seções `lessonNum: 2` (2.0→2.9) + título + 16 imagens legendadas | `assets/js/pdf-lessons.js` |
| `.fixation-panel` sem borda/sombra e com 4px laterais no mobile | `assets/css/style.css` (bloco `REGRAS MOBILE GLOBAIS`) |
| 16 PNG (~1,9 MB) | `assets/img/windows/Aula2/` |

### 2. Lacunas que esta rodada fechou

| # | Antes | Agora |
|:---|:---|:---|
| **L-04** | `moduleLessonTitles.windows[2]` era o título de uma Aula inexistente (PDF vazio) | A Aula 2 existe e o título é o dela; o guarda de apostila vazia segue protegendo 3–6 |
| **L-05** | Seção "Leituras Recomendadas" sem `lessonNum` entrava em todas as apostilas do Internet | Marcada `lessonNum: null` + `moduleAppendix: true` com comentário explicito |
| **L-06** | Internet: 19 imagens sem legenda | Internet **19/19** legendadas |
| **L-08** | Windows: `7.3` e `7.5` em texto puro | Windows **39/39** seções ilustradas, **0** texto puro, **86/86** legendas |

### 3. Três fatos corrigidos (achados na auditoria de conteúdo, não nos testes)

1. **CMD case-sensitive (falso)** — o texto dizia que "o Windows diferencia maiúscula de minúscula nos nomes" e que `cd documentos` não funciona quando a pasta é `Documents`. **Não é verdade**: o NTFS é case-insensitive. Reescrito para o encaixe real, que é o **idioma** (em português a pasta é `Meus Documentos`). Tela **e** PDF.
2. **Windows 10** — "com fim de suporte anunciado" → o evento já aconteceu (14/10/2025).
3. **`JSTOR`** — artefato de geração em "agenda, e-mail e **JSTOR**, Zoom e Meet", na seção de data/hora do módulo **Internet**. Removido.

> Nenhum harness detecta erro de conteúdo — eles checam estrutura. Estas três correções vieram de ler o texto, e é por isso que a §9 da spec lista "fatos conferidos" como item obrigatório.

### 4. Validação (Chrome/CDP, `http://127.0.0.1:8077`)

| Bateria | Resultado |
|:---|:---|
| `/tmp/opencode/a2-harness.js` | **49/49** — senha errada não navega, senha certa libera, badge 🟢, 10 fases, gating sequencial, barra 0→100%, persistência da leitura, reinício, quiz, nota 10,0, hash, 16 imagens, hub, console limpo |
| `/tmp/opencode/a2-pdfgen.js` | **11/11** — apostila real via `downloadLessonPDF('windows',2)`: 43.720 caracteres, título, 10 numerações de seção, 18 imagens (16 de `Aula2/`), FASE 0, seção 2.9 presente, correções aplicadas, zero `JSTOR` |
| `/tmp/opencode/a2-mobile.js` | **MOBILE OK** em 375 e 414 px — sem overflow; leitura 367/375 e 406/414; quiz 345/375 e 384/414 |
| `recheck.js windows` | **24/0** |
| `recheck.js windows-read` | **19/0** (era 18; a assertion foi atualizada de 5 para **6** botões de reinício e ficou data-driven) |
| `recheck.js excel` · `excel-quiz` | **37/0** · **18/0** |
| `pdf-audit.js` · `caption-audit.js` · `check-inline.js` | Windows 39/39 · 86/86 · `index.html` OK (1328 linhas) |

### 5. Estado do working tree (nada commitado)

```
 Docs/CONTINUACAO.md           |  213 ++-
 Docs/PENDENCIAS-EXCEL.md      |  446 ++++--
 Docs/SPEC-AULA-01-WINDOWS.md  |   14 +-
 Docs/SPEC-AULA-02-WINDOWS.md  |  213 +++++++++ (novo)
 assets/css/style.css          |   57 +-
 assets/js/pdf-lessons.js      | 1241 ++++++++++++++++++-----
 assets/img/windows/Aula2/     |   16 arquivos novos, ~1,9 MB
 modules/excel/index.html      |  305 +++++-
 modules/windows/index.html    | 1023 ++++++++++++++++++++++++++++--
 7 arquivos versionados, 2971 insertions(+), 283 deletions(-)
```

**Continua pendente o commit (P-10), aguardando o professor.**

### 6. Próximos passos

1. **L-07** — a maior pendência de conteúdo do portal: Word e PowerPoint com PDF **100% texto puro** e todas as seções sem `lessonNum` (violam as regras 2 e 8). Decidir escopo e atacar.
2. **L-03** — decisão de escopo a registrar: a Aula 2 já tem FASE 0; restam as Aulas 7, 8 e os complementos 71 e 81.
3. **P-06** — inspeção humana do PDF do Excel (104 ilustrações, 46 legendas).
4. **Revisão visual dos módulos afetados** pela regra global de `.fixation-panel` (Internet e Excel).
5. **P-10** — commitar (7 arquivos + as imagens novas de `assets/img/windows/Aula2/`).
6. **Confirmar a senha `wr0226`** com o professor.

---

## ✅ SESSÃO ANTERIOR — 1ª rodada de 04/10/2026 — Excel revalidado de forma independente + L-01 e L-02 corrigidas

A sessão teve **duas fases**. Primeiro uma auditoria **sem alterar código** (os harnesses de `/tmp/opencode/pdftest/` e `/tmp/opencode/p14/` tinham sido apagados, então foram reconstruídos do zero em `/tmp/opencode/` para reexecutar as medições sem depender da palavra dos docs). Depois, já com o aval do professor, a **implementação das lacunas L-01 e L-02** que a auditoria havia encontrado (leitura do Windows e quiz do Excel agora persistem) — detalhada na §4.

### 1. O que foi reconfirmado (verde, com medição própria)

| Verificação | Resultado |
|:---|:---|
| `node --check` em `pdf-lessons.js`, `quiz-engine.js`, 14 blocos inline do Excel e 1 do Windows | OK |
| Cobertura do PDF (`/tmp/opencode/pdf-audit.js`) | **Excel 104/104 (100%)** · Internet 15/15 · Windows 27/29 · Word 0/5 · PowerPoint 0/5 |
| HTML/visual dentro do campo `content` (`/tmp/opencode/find-inline.js`) | **0** seções (era 13 + 2 caixas) |
| Legendas das imagens (`/tmp/opencode/caption-audit.js`) | Excel **46/46** · Windows **70/70** · Internet **0/19** |
| `style.css` balanceado | 202 `{` / 202 `}` (1621 linhas), bloco mobile global presente |
| Bateria funcional do Excel (`/tmp/opencode/recheck.js excel`) | **PASSOU 37 · FALHOU 0** (era 35 antes do L-02) |
| Bateria funcional do Windows (`/tmp/opencode/recheck.js windows`) | **PASSOU 24 · FALHOU 0** (era 22 antes do L-01) |
| Baterias novas do L-01/L-02 (`excel-quiz` e `windows-read`) | **PASSOU 18 · FALHOU 0** e **PASSOU 16 · FALHOU 0** |

O que a bateria do Excel prova, item a item (não é só "não quebrou"):

- **P-13 confirmado no browser**: A2 abre em `▢ 0 / 8`; com `0/8` só o primeiro quadradinho de roteiro está liberado; marcando o roteiro vai a `▢ 2 / 8`, grava `{"2":[true,true]}` em `wrExcelPrepChecks`, libera o Tópico 1 e mantém o banner oculto; marcando o Tópico 1 fecha `▢ 3 / 8`; **após reload continua `3/8`**, com os 3 quadradinhos marcados, T2 liberado, T3 travado, `aria-pressed="true"` no botão e `readStatus[2] === [true,false,…]` (só tópicos, nunca o roteiro); a cascata fecha `✅ 8 / 8` e o banner aparece; storage limpo volta a `0/8`.
- **A3 e A10**: `l3-check-1` e `l10-check-1` estão fora de `.topic-phase-section` (ou seja, são da FASE 0) e persistem em `wrExcelPrepChecks`.
- **Quiz da A10**: com tópicos incompletos o painel **não** abre (gate de `readCount < totalTopics`); com `5/5` abre com largura > 0; `GABARITO_L10 = [2,1,2,1,0]` dá `score 10 / correct 5`, APROVADO(A) e assinatura SHA-256 no `#l10-result-box`.
- **Estrutura**: FASE 0 nas 13 aulas; 91 checks com o padrão `lN-check-M` (`1:7 · 2:8 · 3:7 · 4:7 · 5:7 · 6:7 · 7:9 · 8:9 · 9:5 · 10:6 · 11:7 · 12:6 · 13:6`), mais 5 do Pivot Lab e 1 do projeto.
- **Regra 3 (P-03)**: zero `<input disabled>` estático no HTML — os `disabled` do DOM são o gating de runtime.
- **Regra 6**: sem overflow horizontal a 360px e `.container` com ~100% da largura.
- **Console limpo**: zero exceções e zero `console.error` em todo o percurso.

O que a bateria do Windows prova: **regra 7 cumprida na Aula 1** — `QuizEngine.saveState` grava a chave `windows-aula-1:aluno(a)` com `answers[0]=1`, o reload mantém a opção marcada, navegar grava e a trilha mostra os 5 nós, "↺ Recomeçar o exercício" volta para `QUESTÃO 1 / 5` sem seleção **e apaga a chave**; trava sequencial (7 checks, só o 1º liberado), gamificação 2/7 = `29%`, e **regra 10** — `#linux-panel` é filho direto de `<body>` e mede largura > 0 com `display:block`.

### 2. Lacunas encontradas (novas, não são P-01…P-14)

> **Estado em 04/10/2026, 2ª rodada:** L-01, L-02, **L-04, L-05, L-06 e L-08 foram corrigidas** (ver a seção da 2ª rodada, mais acima). **Só L-03 e L-07 continuam abertos.** A tabela abaixo preserva o achado original de cada uma.

| # | Achado | Onde | Gravidade |
|:--|:---|:---|:---|
| ~~**L-01**~~ | ✅ **CORRIGIDO em 04/10/2026.** A leitura do Windows agora persiste em `wrWindowsReadTopics` (ver §4). Antes: `readTopics[lessonNum]` era só um `Set` em memória e recarregar a página voltava para `0%`. | `modules/windows/index.html` | — |
| ~~**L-02**~~ | ✅ **CORRIGIDO em 04/10/2026** (= P-15 fechada). O quiz agora grava/restaura com `QuizEngine`, tem "↺ Recomeçar o exercício" e assinatura determinística entre reloads (ver §4). Antes: o módulo carregava `quiz-engine.js` mas nunca chamava `saveState`/`loadState`. | `modules/excel/index.html` | — |
| **L-03** | **Só a Aula 1 do Windows tem FASE 0.** Aulas 7, 8 e complementos 71 e 81 não têm bloco de objetivo/roteiro. Se forem tratadas como aulas pela regra 1 do AGENTS.md, estão em falta. **↳ Atualizado:** a Aula 2 também tem FASE 0 (2ª rodada); o escopo restante são 7, 8, 71 e 81. | `modules/windows/index.html` | baixa — decisão de escopo a registrar |
| ~~**L-04**~~ | ✅ **CORRIGIDO em 04/10/2026 (2ª rodada).** A Aula 2 passou a existir com título e seções próprias, então `downloadLessonPDF('windows', 2)` gera a apostila real; o guarda de apostila vazia ficou protegendo só os números que realmente não existem (3–6). | `assets/js/pdf-lessons.js` | — |
| ~~**L-05**~~ | ✅ **CORRIGIDO em 04/10/2026.** A seção "Leituras Recomendadas" ficou `lessonNum: null` + `moduleAppendix: true`, com comentário dizendo que é apêndice genérico do módulo. | `assets/js/pdf-lessons.js` | — |
| ~~**L-06**~~ | ✅ **CORRIGIDO em 04/10/2026.** Internet agora em **19/19** legendas, junto com Windows (86/86) e Excel (46/46). | `assets/js/pdf-lessons.js` | — |
| **L-07** | **Word (0/5) e PowerPoint (0/5) continuam com PDF 100% texto puro** e todas as seções sem `lessonNum`. Violam a regra 2 e a regra 8, mas estão fora do escopo das sessões do Excel. | `assets/js/pdf-lessons.js` | alta — se a meta for "todos os módulos" |
| ~~**L-08**~~ | ✅ **CORRIGIDO em 04/10/2026.** `7.3` e `7.5` ganharam ilustração; Windows está em **39/39** seções ilustradas, **0** texto puro. | `assets/js/pdf-lessons.js` | — |

### 3. Estado do working tree (nada commitado)

```
 Docs/CONTINUACAO.md      |  38 +-
 Docs/PENDENCIAS-EXCEL.md | 407 ++++++++++++++++++----
 assets/css/style.css     |  42 ++-
 assets/js/pdf-lessons.js | 877 ++++++++++++++++++++++++++++++++++++++++++-----
 modules/excel/index.html | 206 +++++++----
 5 files changed, 1346 insertions(+), 224 deletions(-)
```

É o diff das sessões de **01/10 e 02/10** (P-03, P-04, P-05, P-07, P-08, P-13, P-14). Nesta sessão só foram acrescentados os textos de `Docs/CONTINUACAO.md` e `Docs/SPEC-AULA-01-WINDOWS.md`. **Continua pendente o commit (P-10), aguardando o professor.**

### 4. Como reexecutar

```bash
cd /home/rangel/git-dev/aulas
python3 -m http.server 8077 > /tmp/opencode/server.log 2>&1 &
/usr/bin/google-chrome --headless=new --remote-debugging-port=9333 \
  --user-data-dir=/tmp/opencode/chrome-profile --disable-popup-blocking --disable-gpu \
  --no-sandbox --no-first-run --disable-extensions about:blank > /tmp/opencode/chrome.log 2>&1 &
node /tmp/opencode/recheck.js excel     # -> PASSOU 35 · FALHOU 0
node /tmp/opencode/recheck.js windows   # -> PASSOU 22 · FALHOU 0
node /tmp/opencode/pdf-audit.js         # -> cobertura por módulo
node /tmp/opencode/caption-audit.js     # -> legendas por módulo
node /tmp/opencode/find-inline.js       # -> HTML dentro de content

# as 4 baterias funcionais (todas verdes em 04/10/2026)
node /tmp/opencode/recheck.js excel         # 37/37
node /tmp/opencode/recheck.js excel-quiz    # 18/18  (L-02)
node /tmp/opencode/recheck.js windows       # 24/24
node /tmp/opencode/recheck.js windows-read  # 18/18  (L-01)
```

> ⚠️ `cdp2.js` usa `Runtime.evaluate` com **dois modos**: expressão pura (empacotada em `return (…)`) ou corpo de função (prefixo `\x01`, que permite `return` e `await`). **Não escreva `return` numa expressão pura** — o `\r`/`\d` de regex dentro do template literal também é engolido, então extraia o parse para o Node. Foi o que gerou os falsos vermelhos da primeira rodada.


### 4. L-01 e L-02 implementadas (04/10/2026, depois da auditoria)

O passo 1 da §5 foi executado no mesmo dia. As duas lacunas eram o mesmo defeito em espelho: um estado que vive só em memória.

**L-01 — leitura do Windows** (`modules/windows/index.html`)

| Peça | Onde | O que faz |
|:--|:--|:--|
| `READ_STORAGE_KEY = "wrWindowsReadTopics"` | bloco de leitura | uma chave só para as 5 aulas, no formato `{"1":[1,2,…],"7":[],"8":[],"71":[],"81":[]}` |
| `loadReadTopics()` / `saveReadTopics()` | idem | leem com guarda de faixa (`1 ≤ i ≤ TOTAL_TOPICS[aula]`), então uma chave adulterada no navegador não quebra a trava sequencial |
| `paintReadLesson(aula)` | idem | **fonte única** do estado: botão `.checked`, trava sequencial, `%`, barra e badge — o `markTopicRead` e a restauração usam o mesmo caminho |
| `restartReading(aula)` + botão **"↺ Recomeçar a leitura"** | `initReading` injeta 1 botão por barra | sem isto o estado gravado era **irreversível**, porque o check marcado fica `disabled` e nunca mais voltava a "◯" |

**L-02 — quiz de fixação do Excel** (`modules/excel/index.html`) — fechou a P-15

| Peça | Onde | O que faz |
|:--|:--|:--|
| `persistFixQuiz(aula)` | `selectFixOption` + `calcFixation` | `saveState('excel-aula-N', {name, lessonNum, answers, current, signature})` → chave `excel-aula-N:aluno(a)` |
| `restoreFixQuiz(aula)` | `openFixationPanel`, depois do gate de leitura | valida `lessonNum` e `answers.length`, repinta o `.selected` de todas as questões |
| `restartFixQuiz(aula)` | botão "↺ Recomeçar o exercício" | apaga a chave, zera `userAnswers`, limpa o `#lN-result-box`, apaga `window.lNReportData` e devolve a gamificação ao valor da leitura |
| `initFixFooters()` | 1 vez | injeta o rodapé nos **10** painéis em vez de repetir marcação em cada aula |
| assinatura determinística | `calcFixation` | reusa o `timestamp` salvo: refazer o mesmo gabarito depois de um F5 **render o mesmo código** WR-XXXX-… (antes cada clique gerava um hash novo, o que permitia "trocar" o código à vontade) |
| `syncFixSavedHint(aula)` | `selectFixOption` + `paintFixOptions` | "✓ Salvo automaticamente" só aparece **depois da 1ª resposta** — nunca decorativo (regra 7) |

O Excel não tem navegação entre questões (as 5 ficam na mesma tela), então "gravar ao navegar" colapsa em "gravar ao responder".

**Validação** — 2 modos novos no harness, `node /tmp/opencode/recheck.js {excel-quiz|windows-read}`:

| Bateria | Resultado | Cobre |
|:--|:--|:--|
| `excel-quiz` | **18/18** | 10 rodapés; rótulo oculto→visível; grava ao responder; restaura 2 marcações após reload; A2 `[1,2,1,1,1]` = 10,0 com **mesmo `authCode` antes/depois**; recomeçar apaga chave, seleção, resultado e o "🏆" |
| `windows-read` | **18/18** | 5 botões de recomeçar; 7/7 = 100% + badge; recarrega os 7 checks travados; trava sequencial coerente com leitura parcial (71: 1,2 → 3 liberado, 4 travado); aula 8 não-sequencial intacta; recomeçar zera só a aula 1, rearma a trava e **devolve o rótulo original** de cada botão (a primeira versão da implementação deixava o `☑` preso no botão — o teste acusou, ver nota abaixo) |
| `excel` (regressão) | **37/37** | era 35/35 — a asserção "quiz **não** é persistido" virou "grava `excel-aula-10:aluno(a)` com as 5 respostas + assinatura" |
| `windows` (regressão) | **24/24** | era 22/22 — a asserção "leitura **não** persiste" virou "sobrevive ao reload, com barra e trava preservadas" |

`node --check` nos dois scripts inline: OK (14 blocos no Excel, 1 no Windows). Zero exceções e zero `console.error` nas quatro baterias.

> ⚠️ **O teste do L-01 quase deixou passar um bug**: a primeira implementação de `paintReadLesson` só *somava* o `☑` e nunca desfazia, então "↺ Recomeçar a leitura" zerava a barra mas deixava os 7 botões marcados e travados. A asserção original (`checked === 0`) passou por acidente, porque o teste sobrescrevia a chave inteira com `{"71":[1,2]}` e a Aula 1 já vinha zerada do reload. Corrigido dos dois lados: o código guarda `dataset.readLabel` com o rótulo original de cada botão e o teste agora **mescla** a 71 na chave (mantendo os 7/7 da Aula 1) e exige `☑` = 0 + rótulo original de volta. Revertendo o código, o teste acusa `FAIL … {"checked":7,"marcado":7}`.

### 5. Próximos passos sugeridos

1. **L-04**: remover Aulas 2–6 de `moduleLessonTitles.windows` ou criar os stubs com erro claro.
2. **L-07**: decidir se Word e PowerPoint entram nesta trilha (regras 2 e 8 estão violadas há mais de uma sessão).
3. **L-05 / L-06**: Internet — dar `lessonNum` à seção "Leituras Recomendadas" e legenda às 19 imagens.
4. **P-06**: única pendência de código do Excel que depende de olho humano — abrir o PDF do popup e conferir as 46 legendas e as 104 ilustrações.
5. **P-10**: commitar (agora com 7 arquivos, incluindo `modules/windows/index.html` por causa do L-01).

---

## ✅ SESSÃO ANTERIOR (01/10/2026) — Excel: quiz da A10 e persistência da FASE 0 corrigidos

**Escopo concluído nesta sessão (Excel):**

1. **Quiz da Aula 10 quebrado — corrigido.** `openFixationPanel(10)` lançava `Cannot set properties of undefined` e `calcFixation(10)` lançava `Cannot read properties of undefined`: faltavam a chave `10` em `userAnswers`, o `GABARITO_L10`, as `QUESTOES_L10` e a entrada `lessonData[10]` em `window.calcFixation`. Adicionados também `lessonTitleMap[10]`, `reportKey: "l10ReportData"` e `moduleId: "excel-aula-10"`. Gabarito: `[2, 1, 2, 1, 0]`.
2. **Persistência da FASE 0 (P-13) — corrigida.** Duas causas: (a) os quadradinhos de roteiro de A2/A3/A10 (`l2-check-1`/`l2-check-2`, `l3-check-1`, `l10-check-1`) são contados no "X / Y passos" mas não vivem no `readStatus`, então sumiam no reload; (b) `stepCheckbox()` resolvia o check pelo **número do tópico**, e como a FASE 0 desloca a numeração, o Tópico 1 da A2 (que mora em `l2-check-3`) era confundido com o check do roteiro — o contador travava em 6/8 e os dois últimos passos nunca eram alcançados.
   - `stepCheckbox()` agora resolve **pela fase** (`#lN-phase-M` → `input.lN-check`), ID só como fallback.
   - Nova chave `PREP_STORAGE_KEY = "wrExcelPrepChecks"` com `prepCheckboxes()` / `loadPrepChecks()` / `savePrepChecks()`; o `change` handler grava o roteiro sem tocar no `readStatus`.
   - `loadPrepChecks()` roda **síncrono** logo após a definição (o script principal já vem depois de `</main>`), **não** no `load`: o `refresh()` de cada aula dispara no `DOMContentLoaded` e desabilita o Tópico 1 ainda não marcado — restaurando no `load` o contador nasceria errado e o Tópico 1 ficaria travado para sempre.
3. **P-12 — falso alarme, arquivado.** A medição mostra `l8-check-1` em `l8-phase-1` e `l8-check-2` em `l8-phase-2`: o mapeamento 1 check ↔ 1 fase da Aula 8 sempre esteve correto. O sintoma "6/9" era na verdade o defeito nº 2 acima. **Não reabrir sem rodar o comando do P-12 no `PENDENCIAS-EXCEL.md`.**
4. **P-02 — resolvido.** `Docs/SPEC-EXCEL-MASTER.md` já marca a Aula 10 como ✅ Implementada.
5. **P-09 — resolvido.** Toda a fila de QA manual do Excel foi executada (quizzes, navegação de fases, passe das 13 aulas, reload no meio da leitura) + senha das 13 aulas.

**Validações desta sessão (Excel) — 173 asserções, 0 falhas:**

| Teste | Resultado |
|:---|:---|
| `node --check assets/js/pdf-lessons.js` · `quiz-engine.js` · 14 blocos inline | OK |
| `/tmp/opencode/pdftest/persist.js` | **PASSOU 59 · FALHOU 0** — 91 checks das 13 aulas, contadores, banners e reload |
| `/tmp/opencode/pdftest/partial.js` | **PASSOU 11 · FALHOU 0** — roteiro sozinho (2/8, T1 habilitado, banner oculto) → +3 tópicos (5/8, `xxxxx___`) → tudo (8/8, banner + quiz aprovado) |
| `/tmp/opencode/pdftest/final.js` | **PASSOU 59 · FALHOU 0** — gating 0/N→N/N, reload, API do quiz (regra 7), mobile 360px (regra 6), console limpo |
| `/tmp/opencode/pdftest/quiz6.js` | **PASSOU 13 · FALHOU 0** — 10 gabaritos + A1–A10 nota 10/aprovado/hash 64 hex + TXT (A11–13 são projetos, sem quiz) |
| `/tmp/opencode/pdftest/proj2.js` | **PASSOU 13 · FALHOU 0** — A11/A12 assinadas com relatório; A13 concluída **sem** comprovante (por design) |
| `/tmp/opencode/pdftest/pass.js` | **PASSOU 18 · FALHOU 0** — senha das 13 aulas, mestre `wr2026`, Enter no campo, senha errada bloqueada |

**Working tree:** três arquivos modificados, nada commitado — `modules/excel/index.html` (+105/−11, o código), `Docs/PENDENCIAS-EXCEL.md` (+238) e este `Docs/CONTINUACAO.md` (+38). Aguardando o professor pedir o commit.

**Pendências que continuam abertas** (detalhes em `Docs/PENDENCIAS-EXCEL.md`):
`P-03` 13 quadradinhos `disabled` em A2/A3 · `P-04` tamanho das imagens · `P-05` 23 das 46 imagens sem legenda · `P-06` conferência visual do PDF · `P-07` 5 PNGs órfãs em `assets/img/excel/a8/` · `P-08` des-nesting visual no mobile · `P-10` commitar o diff · **`P-14` 35 das 104 seções do PDF são texto puro (66% de cobertura)** (regra 2 do AGENTS.md — maior item aberto, ~3–4h).

**Localizadores e como reexecutar:** ambiente e bateria completa na seção "✅ Como revalidar o módulo depois de mexer nele" de `Docs/PENDENCIAS-EXCEL.md`. Auxiliares úteis em `/tmp/opencode/pdftest/`: `cdp2.js` (CDP + auto-descarte de `alert()` — **sem ele o harness trava** quando `calcFixation` é chamado com questões em branco), `casc.js` (dump da cascata de uma aula), `main.js` (PDFs via popup).

---

## ✅ SESSÃO ANTERIOR (30/09/2026) — Excel: P-01 concluída, P-12 levantada

**Escopo concluído nesta sessão (Excel):**

1. **P-01 — FASE 0 das Aulas 1,4,5,6,7**: implementados blocos com objetivo + roteiro numerado em chips (sem checkbox), faixa de preparação, resultado final e botão "Começar a aula". **37 checks** distribuídos ao fim de cada fase (7/7/7/7/9). `assets/js/pdf-lessons.js` com `1.0, 4.0, 5.0, 6.0, 7.0`; `chapter` migrado de `X.1` para `X.0`.
2. **Correções didáticas**: Aula 4 (frequência suficiente, **nota** insuficiente 5,0<7); Aula 5 (PROCV/PROCH retornam o **conteúdo** da célula; índice é entrada; lookup/fórmula mantidos em `E2`).
3. **Gate robusto**: `stepCheckbox()` agora busca `#lN-check-M` e usa `input.lN-check` como fallback (corrigido o caso onde 5 quadradinhos do Pivot Lab em `l7-phase-8` vinham antes de `l7-check-8` — cascata parava em 7/9).
4. **Mobile header**: `assets/css/style.css` (bloco global) com `.nav-container` em `flex-wrap`, margens laterais 4px e `max-width:100%`, `min-width:0` nos filhos — evita estouro em 375px.
5. **Validações Excel (100% verdes)**: `node --check assets/js/pdf-lessons.js` OK; `python3 tests/validate_aula07_imagens.py` OK; `playwright-test-p01-gating.js` → **>>> FALHAS: 0** (85 asserções). `playwright-test-p01-overflow.js` → **FALHAS: 0** (320/375/767px, cinco módulos). `check-pdf.js` → **PDF OK** (13× FASE 0, 13× chapter).
6. **Documentação**: `Docs/PENDENCIAS-EXCEL.md` atualizado (P-01 marcado como resolvido, criado **P-12**). `Docs/CONTINUACAO.md` consolidado nesta sessão.

**Pendente levantado (não corrigido ainda):**

- **P-12** — ~~`l8-check-1` e `l8-check-2` estão aninhados em `l7-phase-9`~~ **⚠️ FALSO ALARME, confirmado e arquivado em 01/10/2026.** A medição mostrou `l8-check-1` → `l8-phase-1` e `l8-check-2` → `l8-phase-2`: o mapeamento da Aula 8 sempre esteve correto, e o reload fecha em 9/9. O sintoma "6/9" aqui citado era, na verdade, o **deslocamento da FASE 0** (o `stepCheckbox` procurava o check pelo número do tópico e caía no quadradinho do roteiro), hoje corrigido como **P-13**. Ver a sessão de 01/10/2026 no topo deste arquivo.

**Validações desta sessão (Excel):**

| Teste | Resultado |
|:---|:---|
| `node --check assets/js/pdf-lessons.js` | OK |
| `python3 tests/validate_aula07_imagens.py` | OK |
| `playwright-test-p01-gating.js` | **>>> FALHAS: 0** (85 asserções) |
| `playwright-test-p01-overflow.js` | **>>> FALHAS: 0** |
| `check-pdf.js` (PDF Excel) | **PDF OK** |

**Localizadores e como reexecutar:**

| Item | Caminho |
|:---|:---|
| Servidor usado nos testes | `python3 -m http.server 8777` na raiz do repo (`file://` bloqueia `localStorage`) |
| Runner Playwright | `cd /home/rangel/.agents/skills/external/playwright-skill && node run.js <script>` |
| Bateria funcional (gate/restore/persistência) | `/tmp/playwright-test-p01-gating.js` |
| Bateria mobile dos 5 módulos | `/tmp/playwright-test-p01-overflow.js` |
| A/B da Aula 8 (baseline vs. fix) | `/tmp/playwright-test-p01-l8.js` |
| Validador estrutural do PDF | `/tmp/opencode/p01/check-pdf.js` |
| Gerador do PDF (escopado ao Excel) | `/tmp/opencode/p01/gen-pdf.js` |
| Backups do início da sessão | `/tmp/opencode/p01/index.html.bak` · `/tmp/opencode/p01/pdf-lessons.bak.js` |

> ⚠️ Scripts em `/tmp` somem ao reiniciar a máquina. O backup `.bak` é a referência do estado **pré-P-01** — ao comparar, use-o como baseline (foi ele que revelou que a remoção de `disabled` nas Aulas 8/9 era trabalho prévio não commitado, não uma regressão da P-01).

---

## 🪟 SESSÃO ANTERIOR (30/09/2026) — Aula 01 do Windows + Linux

Escopo duplo: **(a)** registrar o Excel como trilha concluída com backlog formal; **(b)** implementar do zero a **Aula 01 do Windows — "A História e o Funcionamento dos Computadores"** (o card dizia "Introdução ao Windows & Interface" e não havia `screen-lesson-1`).

**Concluído e validado nesta sessão (não refazer):**

1. **Excel**: `Docs/PENDENCIAS-EXCEL.md` criado (backlog real, 13 telas conferidas); Aula 10 (VBA Avançado) confirmada como **já implementada** — status da spec corrigido.
2. **Aula 01 do Windows — interface** (`modules/windows/index.html`): card do hub renomeado + `promptLessonPassword(1, ...)` + `badge-lesson-1`; senha nova `PASSWORD_A1 = "wr0126"`; `OPEN_LESSONS = [1, 7, 8, 71, 81]`; `routes[1] = "screen-lesson-1"`.
3. **Conteúdo**: `screen-lesson-1` com FASE 0 (objetivo + roteiro numerado), 6 fases (`l1-phase-1..6`, a 6ª = Consolidação), **7 checks** (`check-read-1-1..7`, gating sequencial, `TOTAL_TOPICS[1] = 7`), 7 imagens de `assets/img/windows/Aula1/`.
4. **Termômetro do Hardware** (`#w1-thermo`): 10 itens hardware/software, placar, "↺ Recomeçar"; montado por `window.buildThermometer()` + `updateThermometerScore()` no fim do IIFE.
5. **Quiz** de 5 questões (`QUESTIONS_LESSON_1`, `QUIZ_CFG[1].moduleId = "windows-aula-1"`), nota 2,0/questão, aprovação 7,0, assinatura SHA-256 `WR-XXXX-XXXX-XXXX-XXXX` e comprovantes TXT/WhatsApp/Gmail.
6. **Persistência real do quiz** (`persistQuizGen` / `restoreQuizGen` / `restartQuizGen`): grava em `localStorage` (`windows-aula-1:aluno(a)`) ao responder, navegar e assinar; restaura ao reabrir o painel; sem estado gravado **recomeça limpo**; novo botão **"↺ Recomeçar o exercício"** (`btn-restart-1`) zera memória + storage. Antes o rodapé prometia "✓ Salvo automaticamente" sem gravar nada — o módulo Windows nunca usava `QuizEngine.saveState/loadState` (Word e PowerPoint já usavam).
7. **Apostila em PDF** (`assets/js/pdf-lessons.js`): 7 seções `lessonNum: 1` (1.0–1.6) com 7 imagens + ilustrações HTML (`mini-sheet`, `es-sheet-box`, `fun-highlight`); `moduleLessonTitles.windows[1]` atualizado. **Removidas 5 seções genéricas** de "UNIDADE 1: CONCEITO E ESTRUTURA DO WINDOWS" que vinham **sem `lessonNum`** e por isso entravam em todas as apostilas do módulo (7, 8, 71, 81) repetindo o assunto da Aula 1.
8. **Correção factual**: "1 MB (1.024 bytes)" → "1 MB (1.048.576 bytes)" no HTML e no PDF (a lição repetia o erro de Conversion Bug em ambas as mídias).
9. **Mobile 375px**: o header dos módulos estourava 34px e empurrava hub/leitura/quiz. Corrigido no **bloco global** de `assets/css/style.css` (`.nav-container` com `flex-wrap`, `max-width: 100%`, `min-width: 0` e 4px de padding) — sem `@media` por aula, conforme regra 6 do AGENTS.md.
10. **Harness** (`/tmp/opencode/`): `cdp.js` (CDP com **cache desabilitado antes de navegar** — sem isso o Chrome servia CSS/HTML antigos e os testes davam falso verde), `test-aula1.js`, `test-nota10.js`, `test-persistencia.js`, `test-pdf-regressao.js`, `test-pdf.js`, `layout-audit.js`, `test-responsive2.js`.
11. **Documentação**: `Docs/SPEC-AULA-01-WINDOWS.md` reconciliada com o implementado (7 checks, 6 fases, persistência, título do PDF, checklist ✅, status); `SPEC-AULA-08-WINDOWS.md` §2 e `SPEC-PROJECT-ARCHITECTURE.md` §4 com a linha `wr0126`; `SPEC-EXCEL-MASTER.md` com a Aula 10 ✅.

### 11.1 Complemento da mesma sessão — aba "Saiba Mais: o Linux" (30/09/2026)

12. **Botão + overlay dedicado** (`modules/windows/index.html`): a `l1-phase-6` ganhou a caixa "Curiosidade da aula: e o Linux, como é?" com o botão `btn-saiba-mais-linux`, que abre `#linux-panel` com **4 subabas**: **1. O que é** (kernel + GNU + distribuição + software livre), **2. Como funciona** (repositório, permissões, GNOME/KDE/XFCE, terminal, máquina virtual), **3. Vantagens** (tabela comparativa de 7 linhas + "resumo honesto" citando os limites), **4. Praticar** (fonte, aviso do `.flv`, desafio `uname -o`). JS: `openLinuxPanel` / `closeLinuxPanel` / `switchLinuxTab` + `Esc`, com `document.body.style.overflow` travado enquanto aberto. `role="dialog"`, `aria-modal`, `aria-selected`.
13. **Decisão de escopo**: **overlay, não 8ª fase**. Virar fase quebraria `TOTAL_TOPICS[1] = 7` e obrigaria o aluno a marcar check de conteúdo não avaliado. O bloco é rotulado *"Só conhecimento — não entra na prova"*.
14. **Fonte**: <https://www.vivaolinux.com.br/linux/> (Viva o Linux, comunidade GNU/Linux da América Latina). Tom explicativo e factual: a tabela da subaba 3 é **comparativa**, não um "versus" depreciando o Windows.
15. **Defeito real encontrado e corrigido na validação**: o overlay foi criado dentro do `.lesson-reading-card`, que tem `transform` — o `position: fixed` passava a se posicionar contra esse ancestral e o painel renderizava com **largura 0** (invisível, mas `display: block`, o que enganava teste por `classList`). O painel foi **movido para filho direto de `<body>`**, logo após o `#password-modal` (mesmo padrão do modal, que já funcionava). Outro detalhe do mesmo caminho: na primeira tentativa o bloco entrou **dentro** do `.modal-overlay` (que é `display:none`) — conferido com contagem de profundidade de `div` +ancestrais antes de aceitar.
16. **Vídeo**: `AulaOrigem/windows/Aula1_.../Historia_Linux.flv` (7min48s, FLV/Sorenson 2009, 57.925.807 bytes, não versionado). Navegadores atuais não reproduzem FLV, o ambiente não tem `ffmpeg`/`ffprobe` e o `flvdemux` do GStreamer falha (`Internal data stream error` / `not-linked`); sondagens manuais não geraram frames. **Conversão abandonada** conforme combinado com o professor: a subaba 4 apenas informa o arquivo e sugere abrir no VLC — **nenhum player embutido falso** no HTML nem no PDF.
17. **PDF** (`assets/js/pdf-lessons.js`): a caixa **"SAIBA MAIS — O LINUX"** foi colocada **dentro do `html` da seção 1.6** (não como 8ª seção) — a apostila continua com **7 seções e 7 imagens**, e como está dentro de uma seção `lessonNum: 1`, as apostilas 7/8/71/81 **não a herdam**.
18. **Mobile**: regras do `#linux-panel` no **bloco `/* REGRAS MOBILE GLOBAIS */`** de `assets/css/style.css` (≤767px: `padding: 4px`, card `18px 8px`, abas `flex: 1 1 auto`) — sem `@media` por aula, conforme regra 6 do AGENTS.md.
19. **Harness novo**: `/tmp/opencode/test-linux.js` (25/25), `/tmp/opencode/test-linux-mobile.js` (12/12), `/tmp/opencode/check-pdf-linux.js` (6/6).
20. **Duas asserções minhas que estavam erradas** (corrigidas, não o código): (a) o check marcado fica `disabled` **por design** (uso único) — o certo é verificar a classe `checked`; (b) `.linux-panel-card` tem `max-width: 920px` e é centralizado no desktop, então "ocupar 100% da largura" só vale até 767px (regra 6 do AGENTS.md).

**Validações desta sessão — Windows (todas verdes):**

| Harness | Resultado |
|:---|:---|
| `node test-aula1.js` | **27/27** (estrutura, senha errada/ certa, gating, 7 abas, Termômetro, quiz, assinatura, console limpo) |
| `node test-nota10.js` | **6/6** (5/5 acertos → 10,0, "Parabéns!", assinatura persistida) |
| `node test-persistencia.js` | **8/8** (grava, restaura após reload, recomeça limpo) |
| `node test-pdf-regressao.js` | **25/25** (Aulas 1, 7, 8, 71, 81 — nenhuma herda as seções da Aula 1) |
| `node test-pdf.js` + `node layout-audit.js` | PDF sem erro estrutural, 7 imagens carregadas, sem transbordo (imagens 345–521px) |
| `node test-responsive2.js` | **18/18** (1440 / 768 / 375 — 4px de margem, zero overflow) |
| `node test-linux.js` | **25/25** (fluxo real card → senha → aula; botão na fase 6; abre/fecha; 4 abas; conteúdo de cada subaba; `Esc`; gating e `tab-btn-1-fix` intactos; console limpo) |
| `node test-linux-mobile.js` | **12/12** (375 / 768 / 1440 com o overlay aberto: sem overflow, card = 367px em 375, 4 abas dentro das bordas, tabela da subaba 3 sem estourar) |
| `node check-pdf-linux.js` | **6/6** (caixa Linux só na apostila 1; 7 seções preservadas; fonte e limites presentes; 7/8/71/81 = 0) |
| `node --check` | `assets/js/pdf-lessons.js` + o bloco `<script>` inline de `modules/windows/index.html` (o arquivo tem 3 tags `<script>`, **2 externas** `pdf-lessons.js` / `quiz-engine.js` + **1 inline**) |

**Pendente (humano, não é código):**
- Professor confirmar **título final** e a **senha `wr0126`**.
- Conferência visual do PDF por olho humano: `/tmp/opencode/aula1-pdf.png` e `/tmp/opencode/pdf-sec-0..6.png`.
- Des-nesting visual dos cards no mobile continua aberta (item 8 da lista de escopo anterior) — agora sem overflow, mas com caixas aninhadas.

---

## 🗂️ SESSÃO ANTERIOR (25/09/2026) — revisão das Aulas 8–13 do Excel


Escopo: **revisão das Aulas 8–13 de Excel** para público **iniciante absoluto**, com 6 entregas: (a) botão de leitura funcionando como nas outras lições, (b) 10.1 com terminologia explicada antes do uso + imagens maiores, (c) 10.3 com condicional concreta em células reais, (d) 11 com cabeçalhos A/B/C… corretos, (e) legendas em todas as imagens do PDF, (f) comprovantes/navegação do Projeto Vendas.

**Concluído e validado hoje (não refazer):**

1. **Botão de leitura reescrito** (`modules/excel/index.html`, IIFE principal): `markTopicRead` agora **alterna** marcar/desmarcar (antes só ligava). Novas funções `topicLabel`, `isTopicRead`, `hasLaterStepsDone`, `flashReadHint`, `setTopicRead`, `paintReadButton`; `markProjectTopicRead` foi **removida** (Aulas 11–13 passam pelo gate compartilhado). Rótulo por contexto: "Passo" nas Aulas 11–13 (que têm fases), "Tópico" nas Aulas 1–10. `aria-pressed` presente nos **87** botões. Guard contra recursão infinita entre `setTopicRead` ↔ handler `change` ↔ `markTopicRead` (o clique no botão escrevia no checkbox, o `change` reescrevia, laço infinito).
2. **Checkboxes das Aulas 8–13 liberados**: os 39 `input[type=checkbox]` de fase deixaram de ter `disabled` (antes o quadradinho era decorativo e nunca podia ser marcado). Botão e checkbox agora são **o mesmo estado** (marcar um marca o outro, nos dois sentidos). Aulas 11–13 mantêm **gating sequencial** (passo K só marca com o K-1 lido). Persistência em `localStorage` → `wrExcelReadStatus` (chave `READ_STORAGE_KEY`).
3. **Marcador de aba**: cada `button.topic-tab-btn` recebe `✓` no texto e a classe `.topic-done` quando lido. CSS novo em `assets/css/style.css` (`.topic-tab-btn.topic-done` + variante `.active`) usando `var(--excel-green-dark, #15803D)` com fallback (a variável vive no `:root` inline do `index.html`; o fallback protege os outros módulos, que compartilham este `style.css`).
4. **Defeito real corrigido — comprovantes invisíveis**: `l11-delivery` e `l12-delivery` estavam **dentro** de `.topic-phase-section` (que tem `display:none`), então `openProjectDelivery()` os escondia para sempre. Movidos para filhos diretos do `<article>` das Aulas 11 e 12 (~8350 e ~8827). Regressão estrutural garante que nenhum dos dois usa `.closest('.topic-phase-section')`.
5. **PDF — cabeçalhos de coluna corrigidos** (`assets/js/pdf-lessons.js`): 11.2 tinha `<th>A — Vendedores</th>` (letra grudada no nome) → agora linha de letras `<th>A</th><th>B</th><th>C</th>` e linha de títulos `VENDEDORES/PRODUTOS/REGIÕES`. 11.5 **escondia as colunas C, D, E** com `<th>...</th>` e misturava a linha de fórmula com o cabeçalho → agora mostra **A–H completas**, com linha de letras, linha de cabeçalhos, linha da fórmula (`=F2*G2`) e linha de valores formatados. 10.5 tinha `A — Quantidade` → separado, com aviso de que a 2ª coluna é legenda, não célula do Excel.
6. **PDF — legendas de imagem implementadas** (regressão real): o renderer desenhava `sec.images`/`sec.image` **sem legenda alguma** (só o `alt`). Novo helper `figure(item)` aceita string **ou** `{ src, caption }`; CSS `.pdf-img-caption` e `.pdf-img-grid-wide` (uma imagem por linha, `max-height:620px`) no `<style>` do popup. `sec.image` + `sec.imageCaption` também funciona. As **16 imagens** das Aulas 9–10 ganharam legenda escrita a partir do texto didático da própria seção (**as legendas foram derivadas do conteúdo das seções — não foi possível inspecionar visualmente as imagens neste ambiente**).
7. **Aula 10.1 reescrita** (`pdf-lessons.js`): a explicação agora parte da analogia **antes** do jargão (Workbook = o CADERNO, Worksheet = a PÁGINA, Range = o TRECHO), traz a tradução `ActiveWorkbook/ActiveSheet/Range(...)`, e avisa do erro nº1 do iniciante (o código age na planilha ativa). `imagesWide: true` deixa as 5 capturas grandes.
8. **Formulário "Salvar Edição" portado para o PDF da Aula 10** — existia só no HTML (`modules/excel/index.html` ~7243, dentro de `l10-phase-1`) e estava **ausente do PDF**. Agora a 10.1 traz a tabela do formulário (A/B, 3 campos), o `Sub SalvarEdicao` completo (3 validações: `IsEmpty`/`IsDate`/`IsNumeric` → grava → `wb.Save`) e o bloco "LEIA O CÓDIGO COMO UMA FRASE". Sem renumerar nada: o SDD fixa 10.1 Objetos, 10.2 Variáveis, 10.3 Condicionais, 10.4 Loops, 10.5 Mini-projeto.
9. **Aula 10.3 completada**: era só `MsgBox` com variável **hardcoded** (`quantidade = 12`). Agora tem "COMO LER O CÓDIGO" linha por linha, o alerta de que o VBA **para no primeiro teste verdadeiro** (por isso `<= 5` antes de `<= 15`), e o **EXEMPLO COM CÉLULAS REAIS** (`Cells(linha, 1/2/3)` numa mini-tabela A/B/C) que pinta a coluna de decisão — o mesmo padrão "decidir + escrever + avisar" que a Aula 11 usa. Acompanha de uma tabela HTML A/B/C.
10. **Auditoria "Aula X" no PDF** confirmou que só **9.2, 9.4, 9.5 e 10.1** usam imagens entre as Aulas 8–13; Aulas 8, 11, 12 e 13 são só tabelas HTML (sem imagem) — coerente com a regra do AGENTS.md.
11. **Bug real corrigido no comprovante de projeto** (`assets/js/quiz-engine.js`): o texto do `.TXT` foi escrito para **prova com questões** e não fazia sentido nas entregas das Aulas 11/12. `buildReportText` agora detecta entrega por `data.fileName` e troca o wording: "COMPROVANTE OFICIAL DE ENTREGA DE PROJETO PRÁTICO", "Progresso: 7 de 7 passos", "Conclusão: … passos concluídos", "PROJETO ENTREGUE", "Arquivo entregue / Tamanho do arquivo", "ETAPAS CONCLUÍDAS DO PROJETO" (em vez de "Acertos / Nota Final / DETALHAMENTO DA PROVA"). Nenhum outro módulo passa `fileName` (verificado: word/powerpoint/internet/windows = 0 ocorrências), então a mudança é **isolada ao Excel**.
12. **Segundo bug no mesmo lugar (pegado pelo teste novo)**: a lista de etapas marcava **todos** os passos como `[CONCLUÍDO ✓]` mesmo numa entrega parcial — ou seja, o certificado assinado afirmava "7 de 7 concluídos" logo abaixo do "Progresso: 3 de 7". Agora só os `correct` primeiros recebem `[CONCLUÍDO ✓]` e o resto vira `[PENDENTE ✗]`. (O laço original não tinha como saber quais passos foram feitos, porque o relatório só carrega a *contagem*.)

**Validações desta sessão (todas OK) — como rodar de novo:**

```bash
cd /home/rangel/git-dev/aulas
node --check assets/js/pdf-lessons.js && node --check assets/js/quiz-engine.js
node /tmp/opencode/check-inline.js      # 9 scripts inline do index.html compilam
node /tmp/opencode/audit-tables.js       # 0 cabeçalho fundido / 0 coluna escondida (Aulas 8-13)
timeout 90  node /tmp/opencode/test-read2.js   # 37 asserções: leitura/check/persistencia/abas/comprovantes
timeout 120 node /tmp/opencode/test-pdf.js     # 39 asserções: PDF das Aulas 8-13
timeout 120 node /tmp/opencode/check-mobile.js # 10 asserções: aria, checkboxes, comprovantes, navegação
node /tmp/opencode/test-report.js             # 22 asserções: comprovante TXT (prova x entrega de projeto)
node /tmp/opencode/test-css.js                # 9 asserções: style.css íntegro (anti-truncamento, ver aviso abaixo)
```

⚠️ **Armadilha do harness (custou tempo nesta sessão):** o JSDOM com `runScripts:'dangerously'` **já executa** os `<script>` inline. Reexecutar via `window.eval` no mesmo documento redeclara `let readStatus` e estoura `SyntaxError: Identifier 'readStatus' has already been declared` — a 2ª execução morre inteira, os botões parecem quebrados e o teste reporta falhas **falsas**. Use **apenas** `runScripts:'dangerously'`, sem `window.eval`. Para recriar um `window.open` no jsdom: `{ document:{ open(){}, write:(h)=>{...}, close(){} } }` — sem `document.open` no stub, `downloadLessonPDF` estoura `printWin.document.open is a function`.

🚨 **QUASE-ERRO GRAVE — redirecionamento acidental apagou o `style.css`.** Um comando de conferência de localizadores continha `echo "  var(--excel-green-dark #15" -> assets/css/style.css;`. O shell leu `-> assets/css/style.css` como **redirecionamento de saída** (`> arquivo`) e **sobrescreveu o arquivo inteiro**: `style.css` caiu de 1452 linhas para **1 linha de 31 bytes**. Só percebi porque o teste de braces imprimiu `0/0`. Recuperado com `git checkout -- assets/css/style.css` e as duas adições reaplicadas à mão (resultado: 1476 linhas, 189/189 braces, `git diff --numstat` = 24 adições / 0 remoções).
- **Como evitar:** nunca deixar `>` sem aspas ou sem espaço em volta dentro de um `echo` de conferência; preferir `grep -n ... arquivo` ou `printf '%s\n'`. Se precisar apontar saída para um arquivo, use `tee` explícito e confira `wc -l` depois.
- **Rede de segurança criada:** `node /tmp/opencode/test-css.js` falha se `style.css` tiver <1400 linhas, <150 blocos, chaves desbalanceadas, ou se o bloco `REGRAS MOBILE GLOBAIS` (regra 6 do AGENTS.md) sumir. Rodar depois de qualquer mexida em `style.css`.

**Pendências / próximos passos:**
- [ ] **Conferir visualmente o popup do PDF** (regra 2 do AGENTS.md): legendas `.pdf-img-caption` e o layout `pdf-img-grid-wide` da 10.1, e as tabelas A–H do 11.5. Harness Chrome/CDP pronto em `/tmp/opencode/pdftest/` (rodar com `--disable-popup-blocking`).
- [ ] **Validar as legendas contra as imagens**: elas foram escritas a partir do texto das seções, sem inspeção visual das PNGs. Alguém com eyesight precisa abrir `assets/img/excel/a9/` e `a10/` e conferir se o `caption` bate com o que a figura mostra.
- [ ] **`.topic-done`**: conferir o contraste do contorno verde no hub e se vale a pena animação.
- [ ] **Aulas 2 e 3** ainda têm 13 checkbox com `disabled` (fora do escopo desta sessão, comportamento pré-existente). Se a liberação de checkbox deve ser global, é a mesma correção de 8–13.
- [ ] Pendências antigas da sessão 24/09 continuam válidas: `.img-reduced` (max-width 70%) e os caps inline da Aula 7 (420px); des-nesting visual dos cards no mobile; teste de navegador do módulo Internet.

---

## 📜 SESSÃO 24/09/2026 — Aulas 11, 12 e 13 (resumo anterior)

Escopo de hoje: **implementar as Aulas 11, 12 e 13 do Módulo Excel** — o **Projeto Prático Integrado "Sistema de Controle de Vendas" da Tech Solutions** (baseado em `AulaOrigem/excel/Aula_12_a_13_Sistema_Controle_Vendas.html`). Decisões do requisitante: 3 aulas separadas (11, 12, 13), **sem quiz de fixação** (a avaliação é o próprio projeto entregue na Aula 13), gating sequencial de checks (modelo Aula 09), gamificação de leitura até 100%.

**Concluído e validado hoje (não refazer):**
1. **`Docs/SDD-AULA-11-12-13-PROJETO-VENDAS.md` criado** — escopo, divisão das fases (11: 7 fases; 12: 6 fases; 13: 6 fases + entrega), requisitos de tela, senhas, auditoria de PDF e checklist.
2. **`modules/excel/index.html` — cards do hub 11/12/13 desbloqueados**: `promptLessonPassword(11, 'Projeto Vendas: Estruturação')`, `promptLessonPassword(12, 'Projeto Vendas: Automação & Regras')`, `promptLessonPassword(13, 'Projeto Vendas: Dashboard & Conclusão')`; badges `badge-lesson-11|12|13`; ícones 🔒; destaques visuais (verde 11/12, âmbar/verde 13). **Aula 10 permanece "Em Construção"** (`alertLockedLesson`, senha `xj010`).
3. **`modules/excel/index.html` — 3 telas novas** (`screen-lesson-11`, `screen-lesson-12`, `screen-lesson-13` inseridas antes do `password-modal`, antes de `</main>`): cada uma com topo de ações (`← Voltar ao Menu`, `🖨️ Imprimir`, `📑 Baixar Apostila PDF` via `downloadLessonPDF('excel', N)`), barra gamificada (`gamify-fill-N`/`gamify-label-N`/`gamify-badge-box-N`), card de leitura com FASE 0 (objetivo + roteiro numerado em chips + contador `#lN-checklist-status` + `#lN-complete-hint` + botão "▶ ENTENDI! QUERO COMEÇAR A AULA ↓"), `<nav class="topic-tabs-bar">` (`tab-l11-1..7`, `tab-l12-1..6`, `tab-l13-1..6` via `switchTopicPhase`), fases `l11-phase-1..7`/`l12-phase-1..6`/`l13-phase-1..6`, **checks distribuídos** `lN-check-1..N` (um no fim de cada fase, nunca agrupados) e botões `btn-read-l11-1..7`/`btn-read-l12-1..6`/`btn-read-l13-1..6`.
4. **`modules/excel/index.html` — JS de gamificação do projeto**: `readStatus` ganha `11:[false×7]`, `12:[false×6]`, `13:[false×6]`; `markTopicRead` desvia p/ `markProjectTopicRead` quando `lessonNum >= 11`; novas funções `markProjectTopicRead` (gating: só marca se o anterior estiver concluído), `updateProjectGamification` (100% por leitura, sem quiz), `setProjectBadge` ("done"/"final"/"progress"), `window.concludeProject(13)` (valida todos os passos, marca o último, badge 100%, exibe e rola até `#l13-congrats`). Botão `#l13-conclude-btn` "🎉 CONCLUIR PROJETO E VER O PARABÉNS" e painel `#l13-congrats` com recap da jornada das 13 aulas.
5. **`assets/js/pdf-lessons.js` — seções do PDF das Aulas 11/12/13 inseridas** (após a Aula 09, ~linhas 1616–1933): 23 seções novas em `LESSONS.excel` — 11.0 FASE 0 (com `chapter` "AULA 11: PROJETO VENDAS — ESTRUTURAÇÃO (PARTE 1)...") até 11.7; 12.0 FASE 0 (chapter "AULA 12: PROJETO VENDAS — AUTOMAÇÃO & REGRAS (PARTE 2)...") até 12.6; 13.0 FASE 0 (chapter "AULA 13: PROJETO VENDAS — DASHBOARD & CONCLUSÃO (PARTE 3)...") até 13.7 Resumo da Aula. Todas com `content` + ilustrações `html` reais (`.fun-highlight`, `.es-sheet-box`, `.mini-sheet`).
6. **`assets/js/pdf-lessons.js` — `moduleLessonTitles.excel` ganhou as chaves 11/12/13** (~linha 2015): "Aula 11: Projeto Vendas — Estruturação (Parte 1) — O Sistema de Controle de Vendas da Tech Solutions", "Aula 12: Projeto Vendas — Automação & Regras (Parte 2) — Dashboard e Tabela Dinâmica", "Aula 13: Projeto Vendas — Dashboard & Conclusão (Parte 3) — Macros, Botões e Entrega do Projeto".
7. **Validações (todas OK)**: `node --check assets/js/pdf-lessons.js` OK; seções por aula 11→8, 12→7, 13→8 (obtidas por regex `lessonNum: N`); 23 headings conferidos; backticks balanceados; zero `${` não intencionais; chaves `moduleLessonTitles` resolvem; contagens em `index.html` conferidas (`l13-check-`×6, `l13-phase-`×6, `tab-l11-`×7 / `tab-l12-`×6 / `tab-l13-`×6, `btn-read-l11-`×7 / `btn-read-l12-`×6 / `btn-read-l13-`×6, `switchTopicPhase(11|12|13,` 19/16/16, `gamify-fill-*`×3, `gamify-badge-box-*`×3, badges hub ×3); `uniq -d` vazio (sem IDs duplicados) nas telas 11/12/13. Observação: o `\n` literal dentro dos template literals de `content` é processado em newline real pelo próprio template literal — renderiza igual aos textos das aulas antigas.

**Pendências da sessão resolvidas nesta rodada de continuação (teste visual + PDFs):**
7. **Defeito real encontrado e corrigido — FASE 0 ligava poucos checks**: os IIFEs de FASE 0 das aulas **2, 3, 8, 9, 11, 12, 13** rodavam durante o parse do HTML, **antes** de os `.lN-check` das fases existirem no DOM → `querySelectorAll('.lN-check')` pegava só 0–2 checks (contador "✅ 0/0" ou "0/2" e cadeia de cliques parava; as aulas 1, 4–7 não têm `lN-fase-0`/checks, sem o bug). **Fix**: em cada um dos 7 IIFEs, `(function () {` → `document.addEventListener('DOMContentLoaded', function () {` e `})();` → `});` (14 edições em `modules/excel/index.html`). Validação: `node --check` dos 8 blocos inline extraídos (OK, regra AGENTS.md) + teste ao vivo (status inicial `▢ 0 / N` com N correto e cadeia percorrendo TODOS os checks).
8. **Teste visual automatizado (Chrome headless + CDP) — todas as metas OK (relatório: `/tmp/opencode/pdftest/report.json`, 12:36)**:
   - Desktop 1440: aulas 11/12/13 desbloqueadas; FASE 0 presente com chips; contador `▢ 0 / 7`, `▢ 0 / 6`, `▢ 0 / 6`; `#lN-complete-hint` oculto antes de zerar; checks **distribuídos** (1 por fase, `checksInPhases = Total`); gating sequencial: cada check-K só habilita K+1 (perStep `nextBlockedBefore` encadeado); barra/progresso e badge "Em Andamento" → "🏆 ..." ao concluir (11: 14→100% 7/7, 12: 17→100% 6/6, 13: 17→100% 6/6, badge final "🏆 Projeto Final Concluído — Módulo Excel Completo!"); alert de bloqueio dispara só no skip indevido.
   - Aula 13: `#l13-conclude-btn` sem todos os passos → alert "⚠️ Para receber os PARABÉNS... 0 de 6" e badge "Em Andamento"; com todos os passos → badge "🏆 Projeto Final Concluído" e painel `#l13-congrats` visível (`display:block`, recap nas 13 aulas).
   - Mobile 375: hub e leitura ocupam 100% da largura (container `padding:4px`, `fase0Width:353`, sem "efeito linguiça") — regra global de `style.css` respeitada.
   - Aula 10: continua "Em Construção" — card dispara `alertLockedLesson` ("🔒 A Aula 10: Revisão Geral & Preparatório está em construção!"), `#screen-lesson-10` não existe, hub segue ativo pelo card.
9. **3 PDFs gerados e validados** (popup via `downloadLessonPDF('excel', N)`): era necessário relançar o Chrome headless com **`--disable-popup-blocking`** (sem isso o `window.open` é bloqueado e o "PDF" grande anterior era a própria app — 355 KB, não a apostila). `genPdf` em `/tmp/opencode/pdftest/main.js` foi reescrito: acha o popup pelo title "... — Apostila Didática Completa", confere `bodyLen > 3000`, chama `Page.printToPDF` (printBackground + preferCSSPageSize). Resultado: **Aula 11** 1.044.937 B / 9 pág (8 illus, 16 mini-sheets); **Aula 12** 936.316 B / 8 pág (7 illus, 10 mini-sheets); **Aula 13** 1.041.713 B / 9 pág (7 illus, 12 mini-sheets) — títulos corretos e **zero** "🖼️ Referência de imagem".

**Preparação da Aula 10 nesta rodada (24/09, após QA):**
10. **Decisão do aluno/professor (24/09)**: a "Aula 10: Revisão Geral & Preparatório" foi **substituída** — a Aula 10 será **VBA Avançado (continuação da Aula 09)**, conforme o SDD já existente `Docs/SDD-AULA-10-VBA-AVANCADO.md` (não criar SDD novo). A referência `AulaOrigem/excel/Aula-10-Excel2010_Revisao/` (html + 6 imagens) foi avaliada e fica **arquivada — NÃO usada**.
11. **`SDD-AULA-10-VBA-AVANCADO.md` atualizado (24/09)** para estar pronto à implementação: §1.1 (decisão 24/09), §8.2 alinado ao código real (espelhar a tela 9 — listados os IDs `screen-lesson-10`, `l10-fase-0`, `l10-check-1..6`, `tab-l10-1..6`, `l10-phase-1..5`, `btn-read-l10-1..5`, `gamify-*`, `QUESTOES_L10`, `QUIZ_CFG[10]`, `userAnswers[10]`, `l10-fixation`, `calcFixation(10)`), §8.5 (**bug 24/09**: IIFEs de checks devem rodar em `DOMContentLoaded`), §10/§11 (validações/checklist), §13 status "aprovado 24/09 — pronto para implementar", §14 **Plano de Execução** passo a passo para a próxima sessão.
12. **`Docs/SPEC-EXCEL-MASTER.md` atualizado**: Aula 09 → ✅ Implementada (SDD-09); Aula 10 → VBA Avançado, 📝 Especificada (SDD aprovado 24/09), senha `xj010` mantida.
13. **Harness pronto** (`/tmp/opencode/pdftest/`): Chrome headless na porta 9333 com `--disable-popup-blocking`; `report.json` (12:36) íntegro; `main.js`/`genPdf` + `genonly.js` + `dbg.js` prontos para testar a Aula 10 depois de implementada.

**Pendências para a próxima sessão (ordem sugerida):**
- [ ] **Aula 10 — implementar o VBA Avançado** per `Docs/SDD-AULA-10-VBA-AVANCADO.md` §14: substituir a "Revisão Geral & Preparatório" (card ~linha 635, recap ~8360); copiar as 5 imagens (`assets/img/excel/a10/`) de `AulaOrigem/VBA Excel_ Como começar e tornar seu trabalho mais fácil/images/`; adicionar `screen-lesson-10` espelhando a tela 9 (FASE 0 com `l10-check-1` no rodapé + roteiro 6 passos, `l10-phase-1..5`, abas `tab-l10-1..6`, `btn-read-l10-1..5`, gamificação, quiz); registrar `readStatus[10]`, `QUESTOES_L10`, `QUIZ_CFG[10]`, `userAnswers[10]`, `lessonTitleMap[10]`; seção PDF `lessonNum: 10` em `pdf-lessons.js`. ⚠️ **IIFE de checks dentro de `DOMContentLoaded`** (§8.5). Validar: `node --check` + teste CDP (senha `xj010`; FASE 0 "0 / 6" → cadeia 100% → quiz) + PDF 10 (5 imagens na ordem §4, sem screenshots repetidos) + Aula 09 e 11–13 intactas. Depois: marcar Aula 10 ✅ no `SPEC-EXCEL-MASTER.md` e atualizar este arquivo.
- [ ] **Imagens pequenas (reporte prévio — pendência 7 da sessão anterior)**: revisar `.img-reduced` (`max-width:70%`) em `style.css` ~1001–1011 (→ ~90–100%) e caps da Aula 7 (420px → ~640–720px), validando tela + PDF.
- [ ] **Edge case da senha da Aula 10 (agora MORTO)**: `xj010` + `showScreen('screen-lesson-10')` não existente → tela em branco se digitar a senha. Será **resolvido naturalmente** quando `screen-lesson-10` for criada na implementação acima; dispensado seguir sozinho.

---

## 📜 SESSÃO 19/09/2026 — Complemento 8A (Windows)

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