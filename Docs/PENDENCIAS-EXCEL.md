# PENDÊNCIAS-EXCEL — Módulo 3 (Microsoft Excel): módulo CONCLUÍDO com melhorias a fazer

> **Status do módulo**: ✅ **CONCLUÍDO** — as 13 aulas existem, estão liberadas no hub, com leitura gamificada, PDF e quiz/comprovante (Aulas 11–13 sem quiz por decisão do professor: a avaliação é o projeto entregue).
> **Status deste documento**: registro do que **ainda precisa ser melhorado/aprovado**. Não é uma lista de bloqueio — nada aqui impede o uso do módulo em aula.
> Criado em: 30/09/2026 · Prof. Marcos Rangel — WR Capacitação Profissional

---

## 📊 1. Panorama verificado (estado real do código em 30/09/2026)

| Verificação | Resultado |
|:---|:---|
| Telas de aula | 13/13 (`screen-lesson-1` … `screen-lesson-13`) |
| Fases por aula | 1→7 · 2→6 · 3→6 · 4→7 · 5→7 · 6→7 · 7→9 · 8→9 · 9→5 · 10→5 · 11→7 · 12→6 · 13→6 |
| Botões "Marcar Tópico/Passo como Lido" | 7/6/6/7/7/7/9/9/5/5 + 7/6/6 (projeto) — **100% das fases** |
| FASE 0 (objetivo + roteiro numerado) | ✅ **13/13** — Aulas 1, 4, 5, 6 e 7 concluídas em 30/09/2026 (P-01) |
| Checks distribuídos (`.lN-check`) | ✅ 1→7 · 2→8 · 3→7 · 4→7 · 5→7 · 6→7 · 7→9 · 8→9 · 9→5 · 10→6 · 11→7 · 12→6 · 13→6 |
| Seções de PDF | 1→8 · 2→7 · 3→7 · 4→8 · 5→8 · 6→8 · 7→10 · 8→11 · 9→7 · 10→7 · 11→8 · 12→7 · 13→8 (104 no total; 13 `chapter` + 13 headings `X.0`) |
| Imagens no HTML × no PDF | **46 refs, idênticas** (a1→6, a2→8, a7→16, a9→11, a10→5) |
| Sintaxe | `node --check assets/js/pdf-lessons.js` OK · `node --check assets/js/quiz-engine.js` OK |

---

## ✅ P-01 — ~~Aulas 1, 4, 5, 6 e 7 não têm FASE 0~~ RESOLVIDO em 30/09/2026

**Onde**: `modules/excel/index.html` — agora existem `l1-fase-0`, `l4-fase-0`, `l5-fase-0`, `l6-fase-0`, `l7-fase-0`.
**O que foi feito**: 🎯 objetivo · 🗺️ roteiro numerado em chips (sem checkbox) · 🏁 resultado final · ⚙️ faixa de preparação · botão "Começar a aula"; **37 checks** distribuídos no fim de cada fase (7/7/7/7/9 — nunca agrupados); e as seções `X.0` correspondentes no `assets/js/pdf-lessons.js` (`1.0`, `4.0`, `5.0`, `6.0`, `7.0`), com o `chapter` migrado de `X.1` para `X.0`.
**Correções de conteúdo no mesmo passe**: Aula 4 (Carlos tem frequência suficiente mas **nota** insuficiente, `5,0 < 7`); Aula 5 (PROCV/PROCH retornam o **conteúdo** da célula, o índice é entrada) e lookup/fórmula mantidos em `E2`.
**Defeito de gate corrigido**: `stepCheckbox()` buscava "o primeiro checkbox da fase", e na Aula 7 os 5 quadradinhos do Pivot Lab (`pl-field-*`) vêm antes do `l7-check-8` — a cascata parava em 7/9. Agora resolve por ID (`#lN-check-M` com fallback `input.lN-check`).
**Aceite (verificado)**: 85 asserções de navegador com `FALHAS: 0` — gate sequencial, contador, restore bloqueado fora de ordem, persistência em `wrExcelReadStatus`, integração com "Marcar Tópico como Lido", FASE 0 sem checkbox e zero erros de console. `node --check assets/js/pdf-lessons.js` OK e `python3 tests/validate_aula07_imagens.py` OK.

---

## 🔴 P-02 — `SPEC-EXCEL-MASTER.md` desatualizado: Aula 10 já está implementada

**Onde**: `Docs/SPEC-EXCEL-MASTER.md:32` diz *"📝 Especificada (SDD aprovado em 24/09/2026) — implementação agendada para a próxima sessão"*.
**Realidade**: `modules/excel/index.html:7031` tem `screen-lesson-10` (FASE 0, `l10-phase-1..5`, `btn-read-l10-1..5`, `tab-l10-1..6` + quiz) e `assets/js/pdf-lessons.js` tem 7 seções `lessonNum: 10`; o hub já pede a senha `xj010` e as 5 imagens estão em `assets/img/excel/a10/`.
**Correção**: marcar Aula 10 como ✅ Implementada (mesma redação das Aulas 09 e 11–13) e atualizar `Docs/CONTINUACAO.md` com a conclusão da Aula 10.
**Aceite**: nenhuma linha do SPEC descreve uma aula como "a implementar" quando ela já está no ar.

---

## 🟠 P-03 — 13 checkboxes com `disabled` nas Aulas 2 e 3

**Onde**: `modules/excel/index.html` — 13 `input[type="checkbox"][disabled]` remanescentes.
**Efeito**: o quadradinho das fases das Aulas 2 e 3 é decorativo (não pode ser marcado), ao contrário das Aulas 8–13, onde botão e quadradinho são o mesmo estado.
**Correção**: mesma liberação feita nas Aulas 8–13 em 25/09 (session 25/09, item 2).
**Aceite**: marcar o "Marcar Tópico N como Lido" reflecte no quadradinho e vice-versa nas 10 aulas.
**Esforço**: ~30min.

---

## 🔴 P-12 — `l8-check-1` e `l8-check-2` estão dentro de `l7-phase-9` (Aula 8 com estado embaralhado)

**Onde**: `modules/excel/index.html` — falta o fechamento `</section></article>` entre a Aula 7 e a Aula 8, então os dois primeiros checks da Aula 8 (`l8-check-1`, `l8-check-2`) ficam **dentro da última fase da Aula 7**.
**Confirmação**: `git show HEAD:modules/excel/index.html` → os dois ids já estão em `l7-phase-9`. É **defeito pré-existente**, não uma regressão da P-01.
**Efeito**: os checks da Aula 8 ficam fora da relação 1 check ↔ 1 fase — `l8-check-3` está em `l8-phase-1` (e assim por diante, até `l8-check-9` em `l8-phase-9`), então marcar o check da fase 1 grava o tópico 9 e vice-versa; a contagem e a barra de progresso da Aula 8 não fecham (reload fica em 6/9).
**Efeito colateral do P-01**: o gate da Aula 8 nunca foi habilitado para esses 2 checks (a FASE 0 dela consulta `.l8-check` dentro do próprio `article`); antes o `stepCheckbox` por fallback ainda acabava marcando o checkbox intruso `sl-min-total` da `l8-phase-6` — com o fix por ID isso não ocorre mais (medido: intruso marcado `true` → `false`).
**Correção**: fechar `</section></article>` antes de `l8-fase-0` e reposicionar `l8-check-1`/`l8-check-2` em `l8-phase-1`/`l8-phase-2` (ou renumerar para 8 fases).
**Aceite**: marcar os 9 checks da Aula 8 um a um → contagem 9/9, barra 100% e `readStatus[8]` = `[true×9]` após reload.
**Esforço**: ~30min.

---

## 🟠 P-04 — Tamanho das imagens (reclamação antiga do professor, ainda aberta)

**Causa raiz 1 — CSS global**: `assets/css/style.css:1017-1020` → `.img-reduced, .lesson-reading-card img { max-width: 70% !important; }` (sobe para 95% só em ≤640px e cai para 82% na impressão, linha ~1463).
**Causa raiz 2 — caps inline da Aula 7**: `modules/excel/index.html` tem 19 ocorrências de `max-width:420px` e 15 de `max-width:520px` nas 16 imagens da Aula 7.
**Causa raiz 3 — teto do PDF**: `assets/js/pdf-lessons.js` limita as imagens do PDF a `max-width:96%; max-height:480px`.
**Correção sugerida**: `.img-reduced` 70% → 92-100%; caps da Aula 7 → 640-720px; e avaliar `max-height` do PDF (as capturas verticais, como as do VideoPad da Aula 10, são as mais prejudicadas).
**Aceite**: as 46 imagens do módulo ficam legíveis na tela (1440px e 375px) e no PDF, sem rolagem horizontal.
**Esforço**: ~1h + conferência visual.

---

## 🟠 P-05 — Legendas das imagens do PDF nunca foram conferidas contra as figuras

**Onde**: `assets/js/pdf-lessons.js` — helper `figure()` (linha ~2265) gera `.pdf-img-caption`; as **16 imagens** das Aulas 9 e 10 (a9: 11, a10: 5) receberam legenda.
**Risco real**: as legendas foram escritas a partir do texto didático das seções, **sem inspeção visual** das PNGs (não foi possível abrir as imagens no ambiente de desenvolvimento). Podem estar corretas no conteúdo e erradas no "o que aparece na foto".
**Correção**: alguém com eyesight abre `assets/img/excel/a9/` e `assets/img/excel/a10/` e confere cada legenda; o mesmo vale para as tabelas A–H redesenhadas da 11.5 (ver P-06).
**Aceite**: 16/16 legendas correspondem ao que a figura mostra.
**Esforço**: ~1h (humano).

---

## 🟠 P-06 — Conferência visual do popup do PDF (regra 2 do AGENTS.md)

**Falta**: abrir `downloadLessonPDF('excel', N)` no navegador e olhar o resultado impresso para as Aulas 8–13 (o que já foi validado é o **tamanho do arquivo** e a contagem de ilustrações: A11 1.044.937 B/9 pág, A12 936.316 B/8 pág, A13 1.041.713 B/9 pág).
**Itens de atenção**: legendas `.pdf-img-caption` · layout `pdf-img-grid-wide` (uma imagem por linha, `max-height:620px`, usado na 10.1) · tabelas A–H da 11.5 (antes mostravam só colunas A, B e F).
**Harness pronto**: `/tmp/opencode/pdftest/` (servidor `python3 -m http.server 8077` + Chrome headless com CDP 9333 e **`--disable-popup-blocking` obrigatório**, senão o `window.open` do popup é bloqueado e o "PDF" gerado é a própria app).
**Aceite**: abrir os 6 PDFs (8, 9, 10, 11, 12, 13) e_zero "🖼️ Referência de imagem".

---

## 🟡 P-07 — `assets/img/excel/a8/` (5 PNGs) está órfã

**Onde**: `assets/img/excel/a8/image1..5.png`.
**Realidade**: **0 referências** em `modules/excel/index.html` **e** em `assets/js/pdf-lessons.js` — a Aula 08 é ilustrada só com HTML (`mini-sheet`/`es-sheet-box`), que foi a decisão do SDD-08 (§4: "substituindo as 5 imagens PNG").
**Duas saídas possíveis**: (a) manter como material reserva e **documentar** isso aqui; (b) usar as 5 PNGs como figuras reais na Aula 08 (a regra 2 do AGENTS.md aceita imagem OU ilustração HTML — hoje já está atendido).
**Aceite**: ou a pasta está citada no SPEC, ou está removida. **Esforço**: 5min.

---

## 🟡 P-08 — Des-nesting visual dos cards no mobile (parte larga do "efeito linguiça")

**Já resolvido**: largura/padding (regra 6 do AGENTS.md — bloco `REGRAS MOBILE GLOBAIS`, `style.css:1371`).
**Ainda pendente**: a *hierarquia visual* (fundos/bordas/sombras aninhadas) ainda é aplicada em Excel/Windows/Word/PowerPoint no mobile; só o Módulo Internet foi "achatado" (`.browser-card`, `.subcard-item`, `.fixation-panel`, `.question-card-item` sem caixa).
**Correção**: portar a des-nesting para o bloco global do `style.css`, **testando aula por aula** para não perder legibilidade (regra do Internet: `question-card-item` sobre fundo escuro **precisa** manter fundo claro).
**Aceite**: 375px sem moldura-dupla em nenhum cartão do Excel.
**Esforço**: ~2h + teste visual.

---

## 🟡 P-09 — Testes de navegador que nunca foram feitos no módulo Excel

Fila de QA manual (o harness do item P-06 resolve os dois primeiros):
1. **Aula 09**: fluxo completo do quiz — 5 checks → 5 botões "Marcar Tópico como Lido" → `openFixationPanel(9)` → 5 questões → `calcFixation(9)`.
2. **Navegação de fases** (desktop 1440 + mobile 375) nas Aulas 2, 3 e 8 (a função `switchTopicPhase` é global: `index.html:9554`).
3. **Aulas 1, 4, 5, 6 e 7**: passe visual completo (é onde P-01 vai mexer).
4. Recarregar a página no meio da leitura e conferir a persistência (`localStorage` → `wrExcelReadStatus`).

---

## 🟡 P-10 — Working tree com 5 arquivos alterados e nenhum commit

**Fato**: `git status` mostra `Docs/{CONTINUACAO,SDD-AULA-10,SPEC-EXCEL-MASTER}.md`, `assets/css/style.css`, `assets/js/{pdf-lessons,quiz-engine}.js` e `modules/excel/index.html` modificados (+2.932/-212 no HTML) e `Docs/SDD-AULA-11-12-13-PROJETO-VENDAS.md` + `assets/img/excel/a10/` **não rastreados** (untracked).
**Risco**: a Aula 10, o Projeto Vendas (11–13), a correção do comprovante de entrega e as legendas do PDF estão **fora do histórico do Git** — uma limpeza de working tree perderia a Aula 10 inteira.
**Correção**: revisar o diff, corrigir P-02 (SPEC) e **commitar** (regra do repositório: só commitar quando o professor pedir).
**Armadilha conhecida**: já houve redirecionamento acidental que apagou o `style.css` inteiro (sessão 25/09). Rodar `node /tmp/opencode/test-css.js` depois de qualquer mexida nele.

---

## ⚪ P-11 — Backlog de evolução (opcional, não é pendência)

1. **Conteúdo estendido das Aulas 8 e 9**: o `SPEC-EXCEL-MASTER.md` avisa que a fonte da Aula 08 cobre **só SOMASE** (SOMASES/CONT.SE/CONT.SES/MÉDIASE ficaram para "extensão futura").
2. **Aulas 3, 4, 5, 6, 8, 11, 12 e 13 não têm nenhuma imagem** — só tabelas/ilustrações HTML. Se o professor quiser, dá para produzir PNGs/capturas reais (o PADRE do módulo é justamente imagem-real).
3. **Simulador**: Aulas 1, 5, 6, 7, 9 e 10 não têm componente interativo próprio (o Master Blueprint §7.5 prevê "simulador dedicado ou prática guiada").
4. **Simulador compartilhado**: a estrutura do simulador (`Grade de Planilha`, `Barra de Fórmulas`, abas) do §4 do SPEC-MASTER está described mas implemented de forma diferente em cada aula — unificar é um projeto próprio.

---

## ✅ Como revalidar o módulo depois de mexer nele

```bash
cd /home/rangel/git-dev/aulas
node --check assets/js/pdf-lessons.js && node --check assets/js/quiz-engine.js
python3 -m http.server 8077 > /tmp/opencode/pdftest/server.log 2>&1 &
/usr/bin/google-chrome --headless=new --remote-debugging-port=9333 \
  --user-data-dir=/tmp/opencode/pdftest/chrome-profile \
  --disable-popup-blocking --disable-gpu --no-sandbox --no-first-run about:blank &
node /tmp/opencode/check-inline.js      # scripts inline do index.html
node /tmp/opencode/audit-tables.js       # cabeçalhos fundidos / colunas escondidas
timeout 90  node /tmp/opencode/test-read2.js    # leitura, checks, persistência, abas
timeout 120 node /tmp/opencode/test-pdf.js      # PDFs das Aulas 8–13
timeout 120 node /tmp/opencode/check-mobile.js  # aria, checkboxes, comprovantes, navegação
node /tmp/opencode/test-report.js              # comprovante TXT (prova × entrega)
node /tmp/opencode/test-css.js                 # style.css íntegro (anti-truncamento)
```

> ⚠️ Os scripts acima vivem em `/tmp/opencode/` e **somem ao reiniciar a máquina** — se não existirem, reconstruir ou usar o harness Chrome/CDP descrito em `Docs/CONTINUACAO.md`.

---

## 🔗 Referências

- `AGENTS.md` → as 6 regras persistentes do repositório.
- `Docs/SPEC-EXCEL-MASTER.md` §6.1 → normas obrigatórias de toda aula + matriz de status das 13 aulas.
- `Docs/SDD-AULA-08-SIMPLIFICACAO.md` §9/§10/§11 → requisitos obrigatórios, auditoria do PDF e checklist de validação (modelo canônico).
- `Docs/CONTINUACAO.md` → histórico sessão a sessão (o pendente antigo está consolidado aqui).
