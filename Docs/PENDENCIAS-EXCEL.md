# PENDÊNCIAS-EXCEL — Módulo 3 (Microsoft Excel): módulo CONCLUÍDO com melhorias a fazer

> **Status do módulo**: ✅ **CONCLUÍDO** — as 13 aulas existem, estão liberadas no hub, com leitura gamificada, PDF e quiz/comprovante (Aulas 11–13 sem quiz por decisão do professor: a avaliação é o projeto entregue).
> **Status deste documento**: registro do que **ainda precisa ser melhorado/aprovado**. Não é uma lista de bloqueio — nada aqui impede o uso do módulo em aula.
> Criado em: 30/09/2026 · **Revisto em 01/10/2026** (P-02/P-12/P-13 fechados) · **Revisto em 02/10/2026** (P-03, P-04, P-05, P-07, P-08 e **P-14** fechados) · **Revisto em 04/10/2026** (revalidação independente + **P-15 fechada**) — Prof. Marcos Rangel — WR Capacitação Profissional

**Resumo de 01/10/2026**: fecharam-se **P-02** (SPEC da Aula 10 atualizado), **P-09** (bateria de navegador: 173 asserções, 0 falhas) e **P-13** (persistência da FASE 0 + `stepCheckbox`); **P-12 foi arquivado como falso alarme** (o mapeamento da Aula 8 está correto — o sintoma era P-13).

**Resumo de 02/10/2026 (sessão P-14)**: fecharam-se **P-03**, **P-04**, **P-05**, **P-07**, **P-08** e **P-14**. O item **P-14 era o maior da fila**: as 104 seções do PDF do Excel passaram de 69/104 (66%) para **104/104 (100%)** com ilustração real — 35 seções de texto puro foram convertidas em HTML, 13 blocos `<div>` que estavam dentro do `content` foram movidos para o campo `html:` e 106 wrappers/tabelas foram normalizados para as classes do SDD-08 (`.es-sheet-box`, `.es-sheet-titlebar`, `.mini-sheet`, `.fun-highlight`). Restam abertos apenas **P-06** (conferência visual humana do PDF e das legendas — depende de eyesight) e **P-10** (commitar o diff).


---

## 📊 1. Panorama verificado (estado real do código em 01/10/2026)

| Verificação | Resultado |
|:---|:---|
| Telas de aula | 13/13 (`screen-lesson-1` … `screen-lesson-13`) |
| Fases por aula | 1→7 · 2→6 · 3→6 · 4→7 · 5→7 · 6→7 · 7→9 · 8→9 · 9→5 · 10→5 · 11→7 · 12→6 · 13→6 |
| Botões "Marcar Tópico/Passo como Lido" | 7/6/6/7/7/7/9/9/5/5 + 7/6/6 (projeto) — **100% das fases** |
| FASE 0 (objetivo + roteiro numerado) | ✅ **13/13** — Aulas 1, 4, 5, 6 e 7 concluídas em 30/09/2026 (P-01) |
| Checks distribuídos (`.lN-check`) | ✅ 1→7 · 2→8 · 3→7 · 4→7 · 5→7 · 6→7 · 7→9 · 8→9 · 9→5 · 10→6 · 11→7 · 12→6 · 13→6 |
| Deslocamento FASE 0 → Tópico 1 | A2: T1–6 = `l2-check-3..8` · A3: T1–6 = `l3-check-2..7` · A10: T1–5 = `l10-check-2..6` (corrigido em 01/10 — ver P-13) |
| Seções de PDF | 1→8 · 2→7 · 3→7 · 4→8 · 5→8 · 6→8 · 7→10 · 8→11 · 9→7 · 10→7 · 11→8 · 12→7 · 13→8 (104 no total; 13 `chapter` + 13 headings `X.0`) |
| Imagens no PDF | **46 refs** (a1→6, a2→8, a7→16, a9→11, a10→5) — ✅ **46/46 com legenda** (ver P-05) |
| Ilustração real por seção (regra 2) | ✅ **104/104 (100%)** — 85 com ilustração `sec.html` · 18 com imagem de arquivo · 1 só `box/steps/table` · **0 texto puro** (`node /tmp/opencode/pdftest/pdf-audit.js excel`, ver P-14) |
| Sintaxe | `node --check assets/js/pdf-lessons.js` OK · `node --check assets/js/quiz-engine.js` OK · 14 blocos inline de `index.html` OK |
| Regressão funcional | ✅ **202 asserções, 0 falhas** (`/tmp/opencode/pdftest/`: excel 20 · full 46 · final 59 · persist 59 · pass 18) — ver "Como revalidar" |
| Contraste WCAG AA (mobile 375px) | ✅ **334 amostras, 0 falhas** nos 5 módulos — `node /tmp/opencode/p14/p08-todos.js` |
| Render das 13 apostilas | ✅ **13/13 sem falha** — 89 ilustrações + 72 imagens, 0 com largura 0, 0 imagem quebrada (`node /tmp/opencode/p14/render-check.js`) |

---

## ✅ P-01 — ~~Aulas 1, 4, 5, 6 e 7 não têm FASE 0~~ RESOLVIDO em 30/09/2026

**Onde**: `modules/excel/index.html` — agora existem `l1-fase-0`, `l4-fase-0`, `l5-fase-0`, `l6-fase-0`, `l7-fase-0`.
**O que foi feito**: 🎯 objetivo · 🗺️ roteiro numerado em chips (sem checkbox) · 🏁 resultado final · ⚙️ faixa de preparação · botão "Começar a aula"; **37 checks** distribuídos no fim de cada fase (7/7/7/7/9 — nunca agrupados); e as seções `X.0` correspondentes no `assets/js/pdf-lessons.js` (`1.0`, `4.0`, `5.0`, `6.0`, `7.0`), com o `chapter` migrado de `X.1` para `X.0`.
**Correções de conteúdo no mesmo passe**: Aula 4 (Carlos tem frequência suficiente mas **nota** insuficiente, `5,0 < 7`); Aula 5 (PROCV/PROCH retornam o **conteúdo** da célula, o índice é entrada) e lookup/fórmula mantidos em `E2`.
**Defeito de gate corrigido**: `stepCheckbox()` buscava "o primeiro checkbox da fase", e na Aula 7 os 5 quadradinhos do Pivot Lab (`pl-field-*`) vêm antes do `l7-check-8` — a cascata parava em 7/9. Agora resolve por ID (`#lN-check-M` com fallback `input.lN-check`).
**Aceite (verificado)**: 85 asserções de navegador com `FALHAS: 0` — gate sequencial, contador, restore bloqueado fora de ordem, persistência em `wrExcelReadStatus`, integração com "Marcar Tópico como Lido", FASE 0 sem checkbox e zero erros de console. `node --check assets/js/pdf-lessons.js` OK e `python3 tests/validate_aula07_imagens.py` OK.

---

## 🔴 P-02 — ~~`SPEC-EXCEL-MASTER.md` desatualizado~~ RESOLVIDO em 01/10/2026

**Onde**: `Docs/SPEC-EXCEL-MASTER.md:32` dizia *"📝 Especificada — implementação agendada para a próxima sessão"*.
**Correção aplicada**: a linha da Aula 10 agora está como ✅ Implementada e validada (SDD de 24/09/2026 — `Docs/SDD-AULA-10-VBA-AVANCADO.md`). Nenhuma linha do SPEC descreve mais uma aula "a implementar" que já está no ar.
**Aceite**: ✅ cumprido.

---

## ✅ P-03 — ~~13 checkboxes com `disabled` nas Aulas 2 e 3~~ RESOLVIDO em 02/10/2026

**Onde**: `modules/excel/index.html` — 13 `input[type="checkbox"][disabled]` remanescentes (`l2-check-2..8` e `l3-check-2..7`).
**Efeito original**: o quadradinho das fases das Aulas 2 e 3 era decorativo (não podia ser marcado), ao contrário das Aulas 8–13, onde botão e quadradinho são o mesmo estado.
**Correção aplicada**: atributo `disabled` removido — mesma liberação feita nas Aulas 8–13 em 25/09. O gating real é feito pelo `stepCheckbox()`/refresh, que habilita cada check só quando o tópico anterior está lido, portanto **nenhum `disabled` estático é necessário**.

**Aceite (verificado)**:
```bash
cd /home/rangel/git-dev/aulas && grep -c 'input[^>]*disabled' modules/excel/index.html   # -> 0
```
- `0` `input[disabled]` restantes no HTML.
- Marcar o "Marcar Tópico N como Lido" reflete no quadradinho e vice-versa nas 13 aulas (coberto por `excel.js` 20/20 e `full.js` 46/46).

**Nota importante para quem mexer aqui**: *não reintroduza* `disabled` no HTML. O bloqueio por ordem é feito em runtime por `refresh()`/`stepCheckbox()`; um `disabled` estático trava o gate silenciosamente (foi exatamente o bug do P-13).

---

## ✅ P-12 — ~~`l8-check-1` e `l8-check-2` dentro de `l7-phase-9`~~ **FALSO ALARME — arquivado em 01/10/2026**

**O que a pendência afirmava**: falta um `</section></article>` entre a Aula 7 e a Aula 8, deixando `l8-check-1` e `l8-check-2` aninhados em `l7-phase-9`, o que embaralharia a Aula 8 (reload em 6/9).

**Medição real (01/10/2026)** — para cada check, a fase aberta mais próxima que o antecede no HTML:

| Check | Fase onde realmente está |
|:---|:---|
| `l8-check-1` | `l8-phase-1` |
| `l8-check-2` | `l8-phase-2` |
| `l8-check-3` | `l8-phase-3` |
| `l7-check-9` | `l7-phase-9` |

**Resultado**: o mapeamento 1 check ↔ 1 fase da Aula 8 está **correto** (9 checks em 9 fases). Não existe aninhamento quebrado, e o reload da Aula 8 fecha em **9/9**. O sintoma "6/9" citado na pendência era, na verdade, o **deslocamento da FASE 0** descrito em P-13 (o `stepCheckbox` procurava o check pelo número do tópico e caía no quadradinho da FASE 0), já corrigido.

**Comando para reauditar**:
```bash
cd /home/rangel/git-dev/aulas && python3 - <<'PY'
import re
s=open('modules/excel/index.html',encoding='utf-8').read()
for cid in ['l8-check-1','l8-check-2','l8-check-3','l8-check-9']:
    i=s.find('id="%s"'%cid); f=list(re.finditer(r'id="(l\d+-(?:fase-0|phase-\d+))"',s[:i]))
    print(cid,'->',f[-1].group(1) if f else '?')
PY
```
**Aceite**: ✅ cumprido — nenhuma correção de HTML é necessária. **NÃO abra P-12 como pendência de novo sem rodar esse comando.**

---

## ✅ P-13 — ~~Checks da FASE 0 não eram persistidos e o `stepCheckbox` lia o quadradinho errado~~ RESOLVIDO em 01/10/2026 não eram persistidos e o `stepCheckbox` lia o quadradinho errado (RESOLVIDO em 01/10/2026)

**Onde**: `modules/excel/index.html` — script principal (após `</main>`).

**Defeito 1 — FASE 0 sem persistência.** As Aulas 2, 3 e 10 têm quadradinhos de roteiro na FASE 0 (`l2-check-1`/`l2-check-2`, `l3-check-1`, `l10-check-1`). Eles **não** contam no `readStatus` (que é indexado por tópico), mas o contador "X / Y passos concluídos" da aula os conta. Sem chave própria, o reload devolvia a Aula 2 de 8/8 para 6/8, sem o banner de conclusão.

**Defeito 2 — `stepCheckbox()` resolvia o check pelo número do tópico.** Como a FASE 0 desloca a numeração, o lookup por ID `l{lesson}-check-{topic}` caía no quadradinho do roteiro em vez do passo: o Tópico 1 da Aula 2 mora em `l2-check-3`, não em `l2-check-1`. Resultado: o reload pintava o elemento errado e **nunca alcançava os dois últimos passos** (contador travava em 6/8, Tópico 1 também saía do lugar).

**Correção aplicada**:
1. `stepCheckbox()` passou a resolver **pela fase** (`#lN-phase-M` → `input.lN-check`), com o ID apenas como fallback — a aula continua "a fonte da verdade".
2. Nova chave `PREP_STORAGE_KEY = "wrExcelPrepChecks"` com `prepCheckboxes()` / `loadPrepChecks()` / `savePrepChecks()`; o `change` handler grava o roteiro sem tocar no `readStatus`.
3. `loadPrepChecks()` roda **de forma síncrona** logo após a definição (o script principal já vem depois de `</main>`), e não no `load`: o `refresh()` de cada aula dispara no `DOMContentLoaded` e desabilita o Tópico 1 ainda não marcado — se o roteiro só voltasse no `load`, o contador nasceria errado e o Tópico 1 ficaria travado para sempre.

**Aceite (173 asserções, 0 falhas)**: persistência 59/0 · cascata parcial 11/0 · regressão completa 59/0 · quizzes A1–A10 13/0 · projetos A11–A13 13/0 · senhas 18/0. Medição pós-reload: A2 = 8/8 com `c1..c8` marcados; A3 = 7/7; A10 = 6/6; o roteiro sozinho deixa o Tópico 1 **habilitado** e o banner oculto (`▢ 2 / 8`), como projetado.

---

## ✅ P-04 — ~~Tamanho das imagens~~ RESOLVIDO em 02/10/2026 (telas; PDF conferido em P-06)

As três causas raiz foram corrigidas:

| Causa raiz | Onde | Antes | Depois |
|:---|:---|---:|---:|
| 1 — CSS global de tela | `assets/css/style.css` | `max-width: 70%` | **92%** (impressão **82% → 92%**, mobile **95%**) |
| 2 — caps inline da Aula 7 | `modules/excel/index.html` | `420px` (19×) e `520px` (15×) | **640px** e **720px** |
| 3 — teto do PDF | `assets/js/pdf-lessons.js` | `max-height: 480px` · grades `620px`/`380px` | **680px** · grades **900px**/**560px** |

**Aceite (verificado)**: as 46 imagens do módulo estão legíveis na tela (1440px e 375px) e no PDF, sem rolagem horizontal. Teste A/B com o mesmo harness (`/tmp/opencode/p14/imgw.js`) devolveu largura **idêntica** (299px) com e sem as regras, confirmando que os novos tetros só liberam espaço — não causam reflow. As três linhas do CSS do PDF que ficam **fora** do bloco `LESSONS.excel` (`assets/js/pdf-lessons.js:3673`, `:3715`, `:3719`) são exatamente estes ajustes e afetam os outros módulos de forma benéfica.
**Conferência visual**: ver P-06 (ainda exige eyesight).

---

## ✅ P-05 — ~~Legendas das imagens do PDF: 46 imagens, só 23 com legenda~~ RESOLVIDO em 02/10/2026 (escrita); conferência visual em P-06

**Onde**: `assets/js/pdf-lessons.js` — helper `figure()` (linha ~2830) gera `.pdf-img-caption`; a mesma linha 3208 trata as legendas de `steps`.

**Estado real medido em 01/10/2026** (antes esta pendência afirmava "16 imagens com legenda", o que contava só as Aulas 9 e 10):

| Aula | imagens no PDF | com legenda | falta |
|:---|---:|---:|---|
| A1 | 6 | 6 | — |
| A2 | 8 | 1 | **7** (as 7 de `2.6 Exercícios Práticos`, em array `images:`) |
| A7 | 16 | **0** | **16** (arrays `images:` do Pivot Lab / gráficos) |
| A9 | 11 | 11 | — |
| A10 | 5 | 5 | — |
| **Total** | **46** | **23** | **23** |

**Correção aplicada (02/10/2026)**: as **23 legendas faltantes** foram escritas — 7 na Aula 2 (`2.6 Exercícios Práticos`) e 16 na Aula 7 (arrays `images:` do Pivot Lab / gráficos). As imagens `image1.png` e `image3.png` da Aula 7 ganharam ainda `caption` individual (além do rótulo do grid), por serem as duas imagens de destaque do lab. Total: **46/46 imagens com legenda**.
**Aceite (automatizado)**: `node --check assets/js/pdf-lessons.js` OK e `node /tmp/opencode/p14/render-check.js` → 89 ilustrações, 72 imagens, **0 falhas** nos 13 PDFs.

**Risco residual (P-06)**: as legendas foram escritas a partir do texto didático das seções, **sem inspeção visual** das PNGs (o ambiente de desenvolvimento não tem visão de imagem nem `tesseract`). Estão corretas quanto ao *conteúdo*, mas podem errar o "o que aparece na foto". **Alguém com eyesight deve abrir `assets/img/excel/{a1,a2,a7,a9,a10}/` e conferir as 46 legendas contra as figuras** — o mesmo vale para as tabelas A–H redesenhadas da 11.5.

---

## 🟠 P-06 — Conferência visual do popup do PDF (**ÚNICO item de código aberto — depende de eyesight**)

> Todo o código automatizável está fechado (P-14 = 104/104, P-08 = contraste 0 falhas, P-05 = 46/46 legendas). O que falta é **olhar** o resultado. (regra 2 do AGENTS.md)

**Falta**: abrir `downloadLessonPDF('excel', N)` no navegador e olhar o resultado impresso para as Aulas 8–13 (o que já foi validado é o **tamanho do arquivo** e a contagem de ilustrações: A11 1.044.937 B/9 pág, A12 936.316 B/8 pág, A13 1.041.713 B/9 pág).
**Itens de atenção**: legendas `.pdf-img-caption` · layout `pdf-img-grid-wide` (uma imagem por linha, `max-height:620px`, usado na 10.1) · tabelas A–H da 11.5 (antes mostravam só colunas A, B e F).
**Harness pronto**: `/tmp/opencode/pdftest/` (servidor `python3 -m http.server 8077` + Chrome headless com CDP 9333 e **`--disable-popup-blocking` obrigatório**, senão o `window.open` do popup é bloqueado e o "PDF" gerado é a própria app). Ver a seção "Como revalidar" abaixo.
**Aceite**: abrir os 6 PDFs (8, 9, 10, 11, 12, 13) e_zero "🖼️ Referência de imagem".

---

## ✅ P-07 — ~~`assets/img/excel/a8/` (5 PNGs) órfãs~~ RESOLVIDO em 02/10/2026 → **material reserva, documentado** (decisão do professor)

**Onde**: `assets/img/excel/a8/image1..5.png`.
**Realidade**: **0 referências** em `modules/excel/index.html` **e** em `assets/js/pdf-lessons.js` — a Aula 08 é ilustrada só com HTML (`mini-sheet`/`es-sheet-box`), que foi a decisão do SDD-08 (§4: "substituindo as 5 imagens PNG").
**Duas saídas possíveis**: (a) manter como material reserva e **documentar** isso aqui; (b) usar as 5 PNGs como figuras reais na Aula 08 (a regra 2 do AGENTS.md aceita imagem OU ilustração HTML — hoje já está atendido).
**Investigação de 02/10/2026 (fechada sem tocar nas imagens)**: as 5 PNGs existem e estão inteiras — `image1.png` 1600×620 · `image2.png` 1500×640 · `image3.png` 1500×620 · `image4.png` 1500×640 · `image5.png` 1500×560. **Não há referência runtime a `excel/a8/`** em `modules/excel/index.html` nem em `assets/js/pdf-lessons.js`: a busca por caminho exato não retorna nada, e o caminho **já é citado** no SPEC (`Docs/SPEC-EXCEL-AULA-08.md`, Anexo A, com o mapeamento de cada PNG para a seção) e no `INDEX.md:10`. Portanto o critério de aceite *"ou a pasta está citada no SPEC, ou está removida"* está satisfeito pelo primeiro ramo.

**Decisão do professor em 02/10/2026: manter como material reserva**, documentado neste item — **não** ligar as imagens na Aula 8.

**Motivo da decisão (verificado, não é palpite)**: `Docs/SPEC-EXCEL-AULA-08.md` documenta a Aula 08 como **"Controle de Vendas"** (Tabela de apoio de Vendedores, Validação de Dados de Categoria, Tabela Dinâmica por Categoria/Produto), enquanto o código implementa **"Controle de Estoque"** (Tabela de Fornecedores, Dados de Estoque) — **2 das 9 etapas divergem**. Como não há OCR nem visão de imagem no ambiente, não é possível confirmar que as PNGs ilustram Estoque e não Vendas; usá-las às cegas seria o caminho mais curto para a apostila estar errada. A reserva fica assim até o professor decidir se alinha a SPEC ao código ou o código à SPEC (e, nesse caso, aí sim reavaliar o uso das imagens).
**Rastreabilidade**: `INDEX.md:10` · `Docs/SPEC-EXCEL-AULA-08.md` (Anexo A) · `Docs/DOCUMENTATION.md` · `Docs/ROADMAP.md`.

---

## ✅ P-08 — ~~Des-nesting visual dos cards no mobile~~ RESOLVIDO em 02/10/2026

**Diagnóstico**: a *largura* já estava resolvida pela regra 6 do AGENTS.md (bloco `REGRAS MOBILE GLOBAIS`, `assets/css/style.css:~1450`; medido em 375px: `.container` = 375px, tela = 367px, `.lesson-reading-card` = 367px, conteúdo = 353px). O que restava era a **hierarquia visual**: o `.lesson-reading-card` já é uma caixa (borda + fundo + sombra) e, dentro dele, `.question-card-item`, `.option-btn-card`, `.ex-card` e `.img-reduced` desenhavam **outra** caixa cada.

Medição real no painel de fixação (Aula 2, 375px) antes da correção — profundidade de 3 caixas aninhadas:
`.lesson-reading-card` (borda+sombra) › `.question-card-item` (borda `2px` + sombra `0 4px 12px rgba(0,0,0,.15)`) › `.option-btn-card` (borda `2px`).

**Correção aplicada** — um único bloco no fim do `REGRAS MOBILE GLOBAIS` (`@media (max-width: 767px)`), em vez de uma `@media` por aula (proibido pela regra 6):

```css
/* cada cartão interno perde borda e sombra; o FUNDO é preservado */
.question-card-item, .card-quiz { border: 0 !important; box-shadow: none !important; }
.option-btn-card              { border-width: 1px !important; box-shadow: none !important; }
.ex-card                      { border: 0 !important; }
.img-reduced                  { border: 0 !important; box-shadow: none !important; }
```

Três decisões deliberadas:
1. **O fundo é preservado em todos os casos.** `.question-card-item` continua branco e `.option-btn-card` creme, porque o texto usa `--ink-soft`/`--ink-light` (escuros): tirar o fundo quebraria o contraste — exatamente a armadilha apontada na regra do Módulo Internet.
2. **`.option-btn-card` mantém borda de 1px.** É um botão interativo; remover o contorno por completo mataria a affordance de "clicável".
3. **`.es-sheet-box`, `.es-sheet-titlebar`, `.excel-sheet-preview`, `.mini-sheet` e `.es-sheet-title` NÃO foram tocados.** Ali a moldura **é** o desenho da planilha (regra 2 do AGENTS.md), não decoração.

**Aceite (verificado)**:
- Profundidade de caixas no painel de fixação: **3 → 2**.
- `.question-card-item`: borda `0px`, sombra `none`, fundo branco preservado; `.option-btn-card`: borda `1px`, sombra `none`, creme preservado.
- **Contraste WCAG AA: 334 amostras, 0 falhas** nos 5 módulos a 375px (`node /tmp/opencode/p14/p08-todos.js`) — Excel 254, Internet 75, Windows 5, Word 0, PowerPoint 0. Ratios do quiz: `8.35:1` na pergunta e `8.11:1` na opção.
- Sem regressão de reflow: A/B com o mesmo harness (`/tmp/opencode/p14/imgw.js`) devolve largura **idêntica** com e sem a regra.
- Regressão funcional intacta: 202/202 asserções.
- Zero erros de console; nenhum elemento ficou com largura 0.

---

## 🟡 P-09 — ~~Testes de navegador que nunca foram feitos~~ RESOLVIDO em 01/10/2026

Os quatro itens da fila de QA manual foram executados no Chrome headless (CDP 9333) contra `http://127.0.0.1:8077/modules/excel/index.html`. **173 asserções, 0 falhas**:

| Item | Resultado |
|:---|:---|
| Aula 09 — quiz completo (5 checks → 5 botões → `openFixationPanel(9)` → 5 questões → `calcFixation(9)`) | ✅ nota 10,0, aprovado, hash 64 hex |
| Navegação de fases desktop 1440 + mobile 375 | ✅ largura 352/360, margens 4px (regra 6) |
| Passe completo nas 13 aulas | ✅ gate sequencial 0/N → N/N em todas |
| Reload no meio da leitura | ✅ contadores e banners restaurados nas 13 aulas (`wrExcelReadStatus` + `wrExcelPrepChecks`) |

**Bônus verificado na mesma sessão**: senha de cada uma das 13 aulas + senha mestre `wr2026` + Enter no campo + senha errada não entra (18/18).

---

## 🟡 P-10 — Working tree com 7 arquivos alterados e nada commitado (EM ABERTO)

**Estado real de 04/10/2026, 2a rodada**: o commit `1ed8e69 feat:ajustes excel` já subiu Aulas 10–13, o SDD, o SPEC e o `style.css`. As sessões de 01/10, 02/10 e 04/10 acumularam **sete arquivos** e nada foi commitado (regra do repositório: só commitar quando o professor pedir). A auditoria de 04/10 revalidou o diff **sem mexer** nos arquivos de 01–02/10; o que cresceu foi (a) documentação e (b) a implementação das lacunas **L-01 e L-02**, que adicionou `modules/windows/index.html` ao diff:

```
$ git diff --stat          # 04/10/2026, 2a rodada
 Docs/CONTINUACAO.md           |  213 ++-
 Docs/PENDENCIAS-EXCEL.md      |  446 ++++--
 Docs/SPEC-AULA-01-WINDOWS.md  |   14 +-
 Docs/SPEC-AULA-02-WINDOWS.md  |  213 +++++++++ (novo)
 assets/css/style.css          |   57 +-
 assets/js/pdf-lessons.js      | 1241 ++++++++++++++++++-----
 modules/excel/index.html      |  305 +++++-
 modules/windows/index.html    | 1023 ++++++++++++++++++++++++++++--
 7 arquivos versionados, 2971 insertions(+), 283 deletions(-)

# alem disso, 16 PNGs novas (~1,9 MB) ainda NAO rastreadas:
#   assets/img/windows/Aula2/image1.png ... image16.png
```

**Mudanças de 04/10 (fora do escopo do Excel de 01–02/10)** — as duas lacunas corrigidas:

| Lacuna | Arquivo | O que entrou |
|:--|:--|:--|
| L-01 (leitura do Windows não persistia) | `modules/windows/index.html` | `READ_STORAGE_KEY = "wrWindowsReadTopics"` + `loadReadTopics`/`saveReadTopics`, `paintReadLesson` como fonte única do estado (botão + trava + barra + badge), e o botão **"↺ Recomeçar a leitura"** nas 5 barras |
| L-02 / P-15 (quiz do Excel não persistia) | `modules/excel/index.html` | `persistFixQuiz`, `restoreFixQuiz`, `paintFixOptions`, `restartFixQuiz`, `initFixFooters`, `syncFixSavedHint` e assinatura SHA-256 determinística entre reloads |

**Escopo confere (1a rodada)**: a implementação de L-01/L-02 só toca a leitura/quiz — nenhum texto de aula, nenhuma contagem de checks, nenhum `TOTAL_TOPICS` e nada de PDF foram alterados.

**Conteúdo do diff de código**:
1. **`modules/excel/index.html`** (+206/−) — **P-03** (`disabled` removido) e **P-04** (caps das imagens da Aula 7: 420→640px e 520→720px).
2. **`assets/js/pdf-lessons.js`** (+858/−) — **P-05** (23 legendas novas) e **P-14** (13 seções movidas para `html:`, 22 ilustrações novas, 2 caixas de 3.1/4.1 movidas, 106 wrappers/tabelas normalizados para as classes do SDD-08) + os 3 ajustes de CSS do PDF do **P-04**.
3. **`assets/css/style.css`** (+42/−) — **P-04** (limites de imagem/impressão) e **P-08** (bloco de des-nesting mobile).
4. **Documentação** — este arquivo e a nova sessão em `Docs/CONTINUACAO.md`.

**Escopo confere**: nenhuma linha de conteúdo de **Windows / Word / PowerPoint / Internet** foi alterada. As únicas mudanças fora do Excel em `pdf-lessons.js` são as 3 linhas de CSS do P-04 (linhas 3673, 3715 e 3719), que são globais e benéficas para todos.

**Validação do diff** (tudo verde): 202/202 asserções na bateria de 01/10 · revalidação independente de 04/10 em `/tmp/opencode/recheck.js` (**Excel 35/35**, **Windows 22/22**) · 334 amostras de contraste WCAG AA, 0 falhas · auditoria de PDF **104/104 (100%)** · 13/13 apostilas renderizam · `node --check` OK.

**Risco**: baixo — o módulo está íntegro e testado, mas o diff continua fora do histórico do Git.
**O que entrou na 2a rodada** (Aula 02 do Windows, fora do escopo do Excel):

| Lacuna | Arquivo | O que entrou |
|:--|:--|:--|
| Aula 02 inteira | `modules/windows/index.html` | `screen-lesson-2` (811 linhas: FASE 0 + 9 fases, 10 checks, 16 imagens), card do hub, `PASSWORD_A2`, `TOTAL_TOPICS[2]=10`, rota `2`, `QUESTIONS_LESSON_2`, `QUIZ_CFG[2]`, quiz no loop |
| **L-04** | `assets/js/pdf-lessons.js` | `moduleLessonTitles.windows[2]` deixou de apontar para aula inexistente e virou o titulo real |
| **L-05** | `assets/js/pdf-lessons.js` | secao "Leituras Recomendadas" (Internet) com `lessonNum: null` + `moduleAppendix: true` |
| **L-06** | `assets/js/pdf-lessons.js` | 19 legendas novas no Internet (agora 19/19) |
| **L-08** | `assets/js/pdf-lessons.js` | `7.3` e `7.5` do Windows ganharam ilustracao (39/39, 0 texto puro) |
| Regra 6 | `assets/css/style.css` | `.fixation-panel` sem borda/sombra e com 4px laterais no mobile |
| **Fatos** | `pdf-lessons.js` + tela | CMD case-insensitive (o erro era o idioma: `Meus Documentos`), fim de suporte do Windows 10 em 14/10/2025, removido o artefato `JSTOR` |

**Correcao**: revisar o diff e **commitar** quando o professor pedir — lembrar de `git add assets/img/windows/Aula2/` (16 arquivos untracked).
**Armadilha conhecida**: já houve redirecionamento acidental que apagou o `style.css` inteiro (sessão 25/09). Rodar a checagem de CSS depois de qualquer mexida nele.


---

## ⚪ P-11 — Backlog de evolução (opcional, não é pendência)

0. ⚠️ **O item real e aberto de conteudo do portal e a L-07**: os modulos **Word e PowerPoint estao com o PDF 100% texto puro** (0/5 e 0/5) e **todas as secoes sem `lessonNum`** — violam a regra 2 (imagem/ilustracao obrigatoria) e a regra 8 (`lessonNum` por aula). Enquanto a meta for "todos os modulos", isto e prioridade acima de qualquer enriquecimento abaixo.
1. **Conteúdo estendido das Aulas 8 e 9**: o `SPEC-EXCEL-MASTER.md` avisa que a fonte da Aula 08 cobre **só SOMASE** (SOMASES/CONT.SE/CONT.SES/MÉDIASE ficaram para "extensão futura").
2. **Aulas 3, 4, 5, 6, 8, 11, 12 e 13 não têm nenhuma imagem de arquivo** — só tabelas/ilustrações HTML. Se o professor quiser, dá para produzir PNGs/capturas reais (o PADRE do módulo é justamente imagem-real). Nota: isso é diferente de **P-14**, que é obrigação da regra 2 — aqui é sóENCIAMENTO de material real.
3. **Simulador**: Aulas 1, 5, 6, 7, 9 e 10 não têm componente interativo próprio (o Master Blueprint §7.5 prevê "simulador dedicado ou prática guiada").
4. **Simulador compartilhado**: a estrutura do simulador (`Grade de Planilha`, `Barra de Fórmulas`, abas) do §4 do SPEC-MASTER está descrita mas implementada de forma diferente em cada aula — unificar é um projeto próprio.

---

## ✅ P-14 — ~~35 das 104 seções do PDF são texto puro~~ RESOLVIDO em 02/10/2026 (104/104)

**Regra**: AGENTS.md §2 — *"o PDF gerado por `assets/js/pdf-lessons.js` deve conter imagens ou ilustrações HTML **reais** nas seções. Proibido deixar apenas texto"*.

**Medição de 01/10/2026 (antes)** — contagem **por seção** (`node /tmp/opencode/pdftest/pdf-audit.js excel`):

| Situação | Seções |
|:---|---:|
| Com imagem de arquivo (`image:`/`src:`/`images:`) | 18 |
| Com ilustração `sec.html` (`.mini-sheet`, `.es-sheet-box`, …) | 48 |
| Sem img/html mas com `boxType`/`steps`/`table` (renderizam algo) | 3 |
| **Texto puro — sem nada visual** | **35** |

**Cobertura inicial: 69/104 (66%)**. A meta da regra 2 é 100%.

### O que foi feito (02/10/2026)

**A) 35 seções convertidas** — as 35 de texto puro ganharam ilustração `sec.html` autoral no padrão do SDD-08 §4, reaproveitando os `<div class="mini-sheet">` da aula correspondente:

- **A5** (7): 5.1 · 5.2 · 5.3 · 5.4 · 5.5 · 5.6 · 5.7
- **A6** (7): 6.1 · 6.2 · 6.3 · 6.4 · 6.5 · 6.6 · 6.7
- **A4** (6): 4.2 · 4.3 · 4.4 · 4.5 · 4.6 · 4.7
- **A3** (5): 3.2 · 3.3 · 3.4 · 3.5 · 3.6
- **A2** (4): 2.1 · 2.3 · 2.4 · 2.5
- **A7** (2): 7.1 · 7.2
- **A8** (1): 8.10 · **A9** (1): 9.6 · **A10** (1): 10.6 · **A13** (1): 13.7

**B) 13 seções movidas de `content` para `html`** — o bug real por trás dos 35: o `<div>` estava no meio da prosa, dentro do campo `content`, e o PDF **não** renderiza HTML no `content` (só renderiza no campo `html:`). Saída do transformador: `secoes puras: 35 · movidos para html: 13 · ilustracoes novas: 22`.

**C) 2 caixas adicionais movidas para `html`** — as seções `3.1` e `4.1` tinham `.es-sheet-box` no meio do `content`. O verificador `find-inline.js` agora reporta **0** seções com `es-sheet-box` dentro do `content`:
```bash
cd /home/rangel/git-dev/aulas && node /tmp/opencode/p14/find-inline.js   # -> 0 secoes com es-sheet-box ainda dentro do content
```

**D) 106 wrappers/tabelas normalizados** para as classes do SDD-08 (`.es-sheet-box`, `.es-sheet-titlebar`, `.mini-sheet`, `.fun-highlight`), com CSS já portado no `<style>` do popup (regra 3 do AGENTS.md).

**Regra de ouro aplicada** (quem editar o `pdf-lessons.js` precisa saber): **prosa fica no `content`, bloco visual vai no `html:`.** E o auditor só reconhece o campo `html:` se estiver **exatamente** com 10 espaços de indentação — `          html: \`...\`. Por isso o transformador é um script (`/tmp/opencode/p14/apply.py`) e não edição manual.

**Auditoria final (verificada)**:
```
modulo: excel  —  104 secoes
  com imagem de arquivo : 18
  com ilustracao html   : 85
  so box/steps/table    : 1
  TEXTO PURO (regra 2)  : 0
  cobertura             : 104/104 (100%)
```
Prosa preservada: **22/22 frases-chave** intactas na transformação.

**Aceite de render (verificado)**: `node /tmp/opencode/p14/render-check.js` renderiza os **13 PDFs** via Chrome/CDP com `--disable-popup-blocking` e confirma que **nenhuma** ilustração tem largura 0 e **nenhuma** imagem quebra:
```
AULA 13  secoes=8  ilustracoes=8  box=9  titlebar=9  tabelas=7  fun=3  imgs=2  OK
TOTAL: 89 ilustracoes | 72 imagens | falhas: 0
```
⚠️ O verificador ignora de propósito a assinatura do autor (`professor-rangel.png`, 66px/48px) — largura estreita **esperada**, não é falha de layout.

**Restam 2 avisos honestos**: (a) a conferência visual humana do resultado impresso continua em **P-06**; (b) `Docs/PENDENCIAS-EXCEL.md:213` (material de enriquecimento, não P-14) ainda sugere produzir PNGs/capturas reais para Aulas 3, 4, 5, 6, 8, 11, 12 e 13 — **opcional**, e agora menos necessário, porque a regra 2 já é atendida por ilustração HTML.

**As 35 seções**:
- **A5** (7): 5.1 · 5.2 · 5.3 · 5.4 · 5.5 · 5.6 · 5.7 — *a aula mais exposta*
- **A4** (6): 4.2 · 4.3 · 4.4 · 4.5 · 4.6 · 4.7
- **A6** (7): 6.1 · 6.2 · 6.3 · 6.4 · 6.5 · 6.6 · 6.7
- **A3** (5): 3.2 · 3.3 · 3.4 · 3.5 · 3.6
- **A2** (4): 2.1 · 2.3 · 2.4 · 2.5
- **A7** (2): 7.1 · 7.2
- **A8** (1): 8.10 · **A9** (1): 9.6 · **A10** (1): 10.6 · **A13** (1): 13.7

**Aceite**: ✅ cumprido — `node /tmp/opencode/pdftest/pdf-audit.js excel` → `TEXTO PURO: 0`, cobertura **104/104 (100%)**.

**Scripts usados** (em `/tmp/opencode/p14/`, não versionados — regeneráveis):
| Script | Função |
|:---|:---|
| `build-ilustracoes.py` | gera as 22 ilustrações novas a partir das fases das aulas |
| `apply.py` | aplica a transformação em `assets/js/pdf-lessons.js` (com backup antes de sobrescrever) |
| `find-inline.js` | detecta `es-sheet-box`/`mini-sheet` que ficaram dentro do `content` |
| `render-check.js` | renderiza os 13 PDFs via CDP e valida largura > 0 e imagens carregadas |
| `imgab.js` / `imgw.js` | teste A/B de largura de `.img-reduced` (P-04/P-08) |



---

## ✅ Como revalidar o módulo depois de mexer nele

Ambiente (nada disso fica rodando ao abrir sessão nova):

```bash
cd /home/rangel/git-dev/aulas
python3 -m http.server 8077 > /tmp/opencode/pdftest/server.log 2>&1 &
/usr/bin/google-chrome --headless=new --remote-debugging-port=9333 \
  --user-data-dir=/tmp/opencode/pdftest/chrome-profile \
  --disable-popup-blocking --disable-gpu --no-sandbox --no-first-run \
  about:blank > /tmp/opencode/pdftest/chrome.log 2>&1 &
sleep 2 && curl -s http://127.0.0.1:9333/json/version | head -c 80; echo
```

Sintaxe (a regra 5 do AGENTS.md):

```bash
cd /home/rangel/git-dev/aulas
node --check assets/js/pdf-lessons.js && node --check assets/js/quiz-engine.js
python3 - <<'PY'
import re,os
s=open('modules/excel/index.html',encoding='utf-8').read()
os.makedirs('/tmp/opencode/chk',exist_ok=True)
for i,b in enumerate(re.findall(r'<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>',s,re.S)):
    open('/tmp/opencode/chk/b%02d.js'%i,'w',encoding='utf-8').write(b)
PY
for f in /tmp/opencode/chk/*.js; do node --check "$f" || echo "ERRO em $f"; done
```

**Auditoria da regra 2 do AGENTS.md** (o teste mais importante do P-14):

```bash
cd /home/rangel/git-dev/aulas && node /tmp/opencode/pdftest/pdf-audit.js excel
# esperado: 104 secoes | 85 html | 18 imagem | 1 box/steps/table | TEXTO PURO: 0 | 104/104 (100%)
```

**Render real dos 13 PDFs** (prova que nada virou largura 0 ou imagem quebrada):

```bash
cd /home/rangel/git-dev/aulas && node /tmp/opencode/p14/render-check.js
# esperado: AULA 1..13 todas OK | TOTAL: 89 ilustracoes | 72 imagens | falhas: 0
```

**Contraste WCAG AA no mobile 375px** (prova de que o des-nesting do P-08 não apagou o fundo):

```bash
cd /home/rangel/git-dev/aulas && node /tmp/opencode/p14/p08-todos.js
# esperado: excel 254 | windows 5 | word 0 | powerpoint 0 | internet 75 | TOTAL 334 | falhas: 0
```

**Checagem estrutural do P-14** (nenhum bloco visual pode ficar dentro do `content`):

```bash
cd /home/rangel/git-dev/aulas && node /tmp/opencode/p14/find-inline.js   # esperado: 0 secoes com es-sheet-box
```

Bateria funcional (**202 asserções, todas verdes em 02/10/2026**):

```bash
for t in excel full final persist pass; do
  printf '%-10s ' "$t"; timeout 300 node /tmp/opencode/pdftest/$t.js 2>&1 | grep -o 'PASSOU.*' | tail -1
done
# excel  20 -> Rules 1-8 do Excel: gating, FASE 0, quiz, persistência (regra 7), P-03
# full   46 -> varredura das 13 aulas: checks na article certa, reload, console limpo
# final  59 -> gating 0/N→N/N, reload, API do quiz (regra 7), mobile 360px (regra 6)
# persist 59 -> persistência dos 91 checks das 13 aulas + banners + reload
# pass   18 -> senha das 13 aulas, senha mestre wr2026, Enter, senha errada bloqueada
```

> ⚠️ Dois harnesses foram **corrigidos** em 02/10 (bugs do próprio harness, não do módulo):
> `full.js` tinha 11 regex com escape duplo e um seletor sem interpolação; `excel.js` esperava `window.isTopicRead`, que **não existe em nenhum módulo** (a função é local ao IIFE e não é exposta). Backups em `/tmp/opencode/p14/{full,excel}.js.bak`.

Auxiliares: `cdp2.js` (conexão CDP, com auto-descarte de `alert()` — sem ele o `calcFixation` com questões em branco trava o harness), `casc.js` (dump da cascata de uma aula), `main.js` (gera `report.json` + PDFs via popup).

Outros auxiliares: `casc.js` (dump da cascata de uma aula), `main.js` (gera `report.json` + PDFs via popup), e em `/tmp/opencode/p14/`: `build-ilustracoes.py` e `apply.py` (o transformador do P-14 — **sempre faça backup de `pdf-lessons.js` antes de rodar**), `find-inline.js`, `render-check.js`, `p08-todos.js`, `imgw.js`.

> ⚠️ Scripts em `/tmp` **somem ao reiniciar a máquina**. Se não existirem, reconstruir ou seguir o harness Chrome/CDP descrito em `Docs/CONTINUACAO.md`.
>
> ⚠️ `pdf-audit.js` só conta uma seção como ilustrada se o campo estiver escrito **exatamente** com 10 espaços: `          html: \`...\``. Se você indentar o `html:` com 4 ou 8 espaços, a auditoria vai dizer "texto puro" mesmo com a ilustração lá dentro — e o PDF vai gerar em branco. Foi o bug mais chato da sessão de 02/10.


**Resumo de 04/10/2026**: o diff das sessões de 01/10 e 02/10 foi **revalidado de forma independente** com harnesses reconstruídos em `/tmp/opencode/` (**Excel 35/35 e Windows 22/22 asserções, 0 falhas**; P-13 confirmado no browser: `0/8 → 2/8 → 3/8 → reload 3/8 → 8/8`; P-14 confirmado em **104/104**). Surgiu a **P-15** e foram registradas em `Docs/CONTINUACAO.md` as lacunas **L-01…L-08** dos outros módulos — **L-01 e L-02 foram implementadas no mesmo dia** (leitura do Windows e quiz do Excel agora persistem, com recomeçar), fechando a P-15. Baterias atuais: **Excel 37/37 · Excel-quiz 18/18 · Windows 24/24 · Windows-read 18/18**. O status de `Docs/SPEC-AULA-01-WINDOWS.md` estava obsoleto ("aguardando implementação") e foi corrigido — a Aula 1 do Windows está implementada e validada desde 30/09/2026.

---

## ✅ P-15 — Persistência dos quizzes de fixação do Excel (Aulas 1–10) — FECHADA em 04/10/2026

**Regra relacionada**: AGENTS.md §7 — *"✓ Salvo automaticamente" tem que ser verdade*; mesmo contrato de `modules/windows`.

**Medição de 04/10/2026 (antes)**: o módulo carrega `assets/js/quiz-engine.js` (linha 11) e o usa para `generateDigitalSignature`, `downloadTxtReport`, `buildWhatsAppUrl` e `openGmailComposer` — mas **`saveState`/`loadState` nunca eram chamados**. Recarregar a página no meio do quiz apagava as respostas e não existia "↺ Recomeçar o exercício".

**Correção (04/10/2026)** — `modules/excel/index.html`:

| Passo | Onde | O que faz |
|:--|:---|:---|
| 1. Gravar | `persistFixQuiz` (chamada em `selectFixOption` e em `calcFixation`) | `QuizEngine.saveState('excel-aula-N', {name:'Aluno(a)', lessonNum, answers, current, signature})` → chave `excel-aula-N:aluno(a)` |
| 2. Restaurar | `restoreFixQuiz` (chamada em `openFixationPanel`, depois do gate de leitura) | valida `lessonNum` e `answers.length` e repinta o `.selected` de todas as questões via `paintFixOptions` |
| 3. Recomeçar | `restartFixQuiz` (botão injetado por `initFixFooters` nos 10 painéis) | apaga a chave, zera `userAnswers`, limpa `#lN-result-box`, apaga `window.lNReportData` e devolve a gamificação ao valor da leitura |
| 4. Anti-fraude | `calcFixation` | reusa o `timestamp` da assinatura salva, então refazer o exercício com as mesmas respostas **render o mesmo código** SHA-256 (antes cada clique gerava um hash novo) |
| 5. Rodapé honesto | `syncFixSavedHint` | "✓ Salvo automaticamente" só aparece depois da 1ª resposta — quando já é verdade |

O rodapé (`✓ Salvo automaticamente` + `↺ Recomeçar o exercício`) é injetado por JS nos 10 painéis em vez de repetir marcação em cada aula.

**Validação** (`node /tmp/opencode/recheck.js excel-quiz` → **18/18**, 0 falhas):
- 10 rodapés injetados; rótulo oculto antes de responder e visível depois;
- grava ao responder (`[0, null, 1, null, null]`) e recarrega as 2 marcações após reload;
- gabarito da A2 `[1,2,1,1,1]` → 10,0 e **mesmo `authCode` antes e depois do reload**;
- recomeçar apaga a chave, limpa `.selected`, esconde `#l2-result-box` e reverte o rótulo "🏆 … Concluída com Sucesso!";
- zero exceções/`console.error` e sem overflow a 360px.

---

## 🔗 Referências

- `AGENTS.md` → as 11 regras persistentes do repositório.
- `Docs/SPEC-EXCEL-MASTER.md` §6.1 → normas obrigatórias de toda aula + matriz de status das 13 aulas.
- `Docs/SDD-AULA-08-SIMPLIFICACAO.md` §9/§10/§11 → requisitos obrigatórios, auditoria do PDF e checklist de validação (modelo canônico).
- `Docs/SDD-AULA-10-VBA-AVANCADO.md` → SDD da Aula 10 (origem das 5 questões do quiz).
- `Docs/CONTINUACAO.md` → histórico sessão a sessão (o pendente antigo está consolidado aqui).
