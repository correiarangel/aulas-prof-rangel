# SDD-AULA-10-VBA-AVANCADO — Objetos, Variáveis, Condicionais, Loops e Mini-Projeto

### Aula 10 Excel — VBA Avançado (Continuação da Aula 09)
### Prof. Marcos Rangel — WR Capacitação Profetional

---

## 1. Contexto e Decisões do Professor (11/09/2026)

O conteúdo de "Macros & VBA" foi **dividido em duas aulas** para reduzir a sobrecarga:

| Aula | Papel | Escopo |
|:--|:--|:--|
| **Aula 09** (`Docs/SDD-AULA-09-MACROS-VBA.md`) | **Base introdutória** | Macro × VBA, aba Desenvolvedor, gravar macro, Editor VBA, primeira sub-rotina `MsgBox` |
| **Aula 10** (este SDD) | **Continuação / avanço** | Objetos (planilhas, intervalos, cores), **variáveis, condicionais, loops** e mini-projeto final integrando tudo |

A Aula 10 retoma exatamente onde a 09 parou ("Hello World" funcionando) e **avança** na programação VBA. Decisão: **sem aula de revisão** dedicada no spec — Aulas 11, 12 e 13 permanecem o Projeto Vendas (SPC) final.

Regras aplicáveis (persistentes — AGENTS.md, SPEC §6.1, SDD-AULA-08):

1. **FASE 0 sempre presente**: objetivo + revisão-relâmpago da Aula 09 + roteiro numerado; **checks distribuídos**, um no fim de cada fase; cada passo libera o próximo. **Proibido** agrupar checks numa lista única.
2. **Imagens reais obrigatórias no PDF** (campo `images`) e **ilustrações HTML reais** (campo `html`) — nunca texto "🖼️ Referência de imagem: ...".
3. **Antiplágio**: todo texto adaptado do material de referência deve ser **reescrito com sinônimos**, mudando as palavras e mantendo o significado (§5).
4. **Imagens na ordem exata do tutorial de referência** — as imagens 12–16 do exemplo (objetos) aparecem na sequência §4, uma única vez.

**Tema: Capiberica** (continuação da aventura) + screenshots reais dos objetos + código VBA ilustrado em HTML (`mini-sheet`/`fun-highlight`).

### 1.1 Decisão do Professor (24/09/2026) — este SDD é o plano oficial da Aula 10

- Autorizado **seguir este SDD (VBA Avançado)** como definição da Aula 10. A antiga "Aula 10: Revisão Geral & Preparatório" (card do hub, senha `xj010`) será **substituída** por "VBA Avançado (continuação da Aula 09)". Isenção de novo SDD: não criar spec baseada na referência de revisão.
- O material `AulaOrigem/excel/Aula-10-Excel2010_Revisao/` (incl. `images/image1..6.png`), fornecido pelo professor para estudo, foi **avaliado e fica arquivado como referência — NÃO será usado** no conteúdo da Aula 10 (a aula é continuação direta da Aula 09).
- **Implementação agendada para a próxima sessão** — seguir §14 (Plano de Execução) e validar com §11 (Checklist).
- Lembrar da **lição do IIFE de FASE 0 (24/09)**: todo IIFE de gating deve rodar em `DOMContentLoaded` (§8.5) — quando implementar, **não** reintroduzir o bug dos checks.

---

## 2. Problema Identificado (auditoria de 11/09/2026)

| Problema | Impacto |
|:---|:---|
| Variáveis (9.5), Condicionais (9.6) e Loops (9.7) empilhados na Aula 09 atual | Aula densa; iniciante perde o fio |
| Parte "Objetos" do tutorial (imagens 12–16) **sem uso** no fluxo atual | Desperdício do material visual canônico |
| Não existe bloco da Aula 10 no site nem no PDF (spec-Aula-10 = "Revisão Geral", com `xj010`) | Continuação sem suporte na página/curso |

> Este SDD está totalmente atrelado ao da Aula 09: só faz sentido depois de a 09 existir (screenshots 1–11 + `l9-check-1..6`).

---

## 3. Objetivo da Aula 10

Fazer o aluno **"programar de verdade"** em VBA, partindo da base da Aula 09: manipular planilhas/intervalos/cores com objetos, guardar valores em variáveis, controlar fluxo com `If`, repetir tarefas com loops e **fechar com um mini-projeto prático** (ex.: "Controlador do Capiberica") que combina tudo — pronto para as Aulas 11–13 (Projeto Vendas).

---

## 4. Referência Canônica — Imagens 12–16 do Tutorial (usadas nesta aula)

Fonte: `AulaOrigem/VBA Excel_ Como começar e tornar seu trabalho mais fácil/images/imageN.png`

| # global | Arquivo (copiar p/ `assets/img/excel/a10/`) | Legenda canônica (a reescrever) | Fase da Capiberica |
|:--|:--|:--|:--|
| 12 | `image9.png` | Adicionar e salvar nova planilha via VBA (`Sheets.Add`) | 10.1 — objetos: planilhas |
| 13 | `image15.png` | Alterar o nome da planilha via VBA (`.Name =`) | 10.1 — objetos: renomear |
| 14 | `image13.png` | Planilha renomeada com sucesso | 10.1 — resultado parcial |
| 15 | `image10.png` | Selecionando o intervalo e alterando a cor via VBA (`Range` + `Interior.Color`) | 10.1 — objetos: intervalo |
| 16 | `image2.png` | Cor aplicada na faixa de células | 10.1 — resultado (check 3) |

> Variáveis/condicionais/loops **não têm screenshot no tutorial** → ilustrar com HTML real: blocos VBA em `<pre>` estilizados / `es-sheet-box` / `mini-sheet` (CSS já portado).

---

## 5. Antipágina — Regra de Paráfrase (obrigatória)

Mudar as palavras, manter o significado. Ao aproveitar o tutorial de referência:

1. **Nunca copiar frase inteira.** Ex.: "Entendendo os objetos no VBA" → "conheça as peças que o Excel oferece ao seu código"; "Criação de variáveis no VBA" → "guardando valores em etiquetas nomeadas".
2. **Termos técnicos/nomes inalterados** (`Sheets.Add`, `.Name`, `Range`, `Interior.Color`, `For … Next`, `If … Then … Else`, `Dim`).
3. Fluxo/roteiro é nosso (Capiberica + WR); apenas conceitos vêm do tutorial, reescritos com sinônimos.
4. Legendas das imagens redigidas por nós (não replicar "Imagem do autor").
5. Conferir em revisão: nenhum parágrafo ≥ 8 palavras idêntico ao HTML da AulaOrigem.

---

## 6. Nova Estrutura da Aula 10 — Roteiro de 6 Passos

| Passo | Fase | Título | Conteúdo-chave | Ilustração |
|:--|:--|:--|:--|:--|
| 1 | FASE 0 | Revisão-relâmpago + planejamento | Onde parou na 09 (Hello World); roteiro numerado (6); resultado final | HTML (`fun-highlight`) |
| 2 | 10.1 | Objetos do VBA — Planilhas, Intervalos e Cores | `Workbook`/`Worksheet`/`Range`; `Sheets.Add`, `.Name`, `Interior.Color` | **imgs 12–16** |
| 3 | 10.2 | Variáveis — Etiquetas da memória | `Dim`, tipos (String, Double, Boolean), atribuição | HTML (`pre` VBA + `fun-highlight`) |
| 4 | 10.3 | Condicionais — Decisões | `If … Then … Else`, comparações, validação de entrada | HTML (`pre` VBA + `es-sheet-box`) |
| 5 | 10.4 | Loops — Repetições | `For … Next`, `Do While`, percorrer linhas | HTML (`pre` VBA + `mini-sheet`) |
| 6 | 10.5 | Mini-Projeto — Controlador do Capiberica | Junta objetos+variáveis+condicional+loop num pequeno automatizador (ex.: preencher/colorir faixas por critério) com `MsgBox` final | HTML (`pre` VBA + `mini-sheet`) — sem reuso de screenshots |
| — | Quiz | Exercício de Fixação (5 perguntas) | `openFixationPanel(10)` / `calcFixation(10)` | — |

> Regra: cada screenshot do tutorial aparece **uma única vez** na aula (na 10.1). As fases 10.2–10.5 usam ilustrações HTML reais de código/planilha.

FASE 0 anuncia "roteiro dos **6 passos**"; contador "X / 6 passos concluídos" (dinâmico).

---

## 7. Mapas de Checks Distribuídos (regra de ouro)

| Check | Passo | Posicionamento |
|:--|:--|:--|
| `l10-check-1` | 1 — Revisar Aula 09 + planejar | Rodapé da FASE 0 |
| `l10-check-2` | 2 — Objetos (planilhas/intervalos/cores) | Fim do Tópico 10.1 (junto da imagem 16) |
| `l10-check-3` | 3 — Variáveis | Fim do Tópico 10.2 |
| `l10-check-4` | 4 — Condicionais | Fim do Tópico 10.3 |
| `l10-check-5` | 5 — Loops | Fim do Tópico 10.4 |
| `l10-check-6` | 6 — Mini-projeto concluído | Fim do Tópico 10.5 |
| — | Quiz | Painel de fixação (5 questões) | — |

Gating sequencial via IIFE article-scoped (`l10-check`, ordem do DOM — mecânica de `l8-check`/`l9-check`).

---

## 8. Alterações no Código Fonte

### 8.1 Imagens

| Origem | Destino | Ação |
|:--|:--|:--|
| `AulaOrigem/…/images/image2.png`, `image9.png`, `image10.png`, `image13.png`, `image15.png` | `assets/img/excel/a10/` | Copiar as **5 imagens da Aula 10** preservando o nome (cria nova pasta) |

Paths relativos: `../../assets/img/excel/a10/imageN.png`.

### 8.2 `modules/excel/index.html`

**Padrão a copiar:** a Aula 09 já implementada e validada — `screen-lesson-9` (linha ~6428), FASE 0 `l9-fase-0` (~6468) com `l9-checklist-status`/`l9-complete-hint`/`l9-start-btn`/`l9-start-hint`, abas `tab-l9-1..6` (6ª abre o quiz), fases `l9-phase-1..5`, checks `.l9-check` em `.phase-step-check` com `.l9-lock-hint`, gamificação `gamify-label-9`/`gamify-fill-9`/`gamify-badge-box-9`, `btn-read-l9-1..5` e quiz `openFixationPanel(9)`/`calcFixation(9)`. **Espelhar tudo com sufixo `10`.**

| Alteração | Detalhe |
|:--|:--|
| Card do hub (linha ~635) | Trocar `alertLockedLesson('Aula 10: Revisão Geral & Preparatório')` → `promptLessonPassword(10, 'VBA Avançado: …')`; `lesson-name` → "VBA Avançado (continuação da Aula 09)"; mantém "🔒 (Senha `xj010`)" |
| Recap do módulo (linha ~8360) | Item "10" "Revisão Geral & Preparatório" → "VBA Avançado (continuação da Aula 09)" (ainda `✅` após destravar/ler) |
| Nova `section#screen-lesson-10` | Inserir quando a Aula 09 terminar (após tela 9). Topo com Voltar/Imprimir/PDF (espelho da tela 9); barra de progresso gamificada; FASE 0 `l10-fase-0`: título/numbering "Módulo 3 • Aula 10 — VBA Avançado", objetivo Capiberica, revisão-relâmpago "Hello World" da 09, roteiro **6 passos**, contador `l10-checklist-status` "▢ 0 / 6 passos concluídos", `l10-complete-hint`, botão `l10-start-btn` → `scrollIntoView('#l10-phase-1')` |
| Fases/abas | `l10-phase-1..5` (10.1 Objetos, 10.2 Variáveis, 10.3 Condicionais, 10.4 Loops, 10.5 Mini-projeto) + abas `tab-l10-1..6` (6ª = `onclick="openFixationPanel(10)"` "Exercício de 5 Perguntas 📝") |
| Checks | `l10-check-1..6` em `.phase-step-check`: `l10-check-1` no **rodapé da FASE 0 (§8.4)** e `l10-check-2..6` ao fim de 10.1..10.5. Botões `btn-read-l10-1..5` (um por fase; FASE 0 sem botão de leitura, igual à 09) chamando `onclick="markTopicRead(10, N)"` |
| Conteúdo | Migrar as antigas 9.5/9.6/9.7 (Variáveis/Condicionais/Loops) reescritas (§5) + nova fase 10.1 (objetos, imagens 12–16) + 10.5 (mini-projeto). Conferir idempotência dos checks ao reutilizar texto |
| Gamificação | `gamify-label-10` "Progresso da Leitura" / `gamify-fill-10` / `gamify-badge-box-10`; registros JS: `readStatus[10] = [false×5]` (5 tópicos) + `QUESTOES_L10` (5 perguntas) + `QUIZ_CFG[10]` + `userAnswers[10]` + painel `l10-fixation` com `quiz-trail-10` e `calcFixation(10)` (mecânica = Aula 09) |
| JS de apoio | `openFixationPanel` `lessonTitleMap` ganha `10: "Aula 10"`; `markTopicRead`/`updateGamification` já atendem 10 por padrão (só `lessonNum >= 11` desvia para projeto) |
| Extras | `node --check` nos blocos inline (regra AGENTS.md); `readStatus` inicial e redirecionamento `screen-hub` intactos |

### 8.3 `assets/js/pdf-lessons.js`

| Campo | Alteração |
|:--|:--|
| Nova section `lessonNum: 10` no objeto `excel` | `chapter: "AULA 10: VBA AVANÇADO — OBJETOS, VARIÁVEIS, CONDICIONAIS, LOOPS E MINI-PROJETO"` |
| Sections 10.1 | `images: ['../../assets/img/excel/a10/image9.png','image15.png','image13.png','image10.png','image2.png']` (ordem §4) |
| Sections 10.2–10.5 | `html:` com `pre` VBA / `es-sheet-box` / `mini-sheet` / `fun-highlight` (sem repetir screenshots) |
| Sections 10.0 | FASE 0 com revisão + roteiro 6 passos |
| Ajustar navegação de capítulos | `lessonNum` do capítulo 9 inalterado; 10 adicionado |

> Observação: o `chapter` da Aula 09 pai está em `moduleLessonTitles.excel.sections` (objeto), não há array `excel[N]`; **adicionar** elemento com `lessonNum:10` no formato dos demais.

### 8.4 FASE 0

- 🎯 Objetivo (história: agora o Capiberica vai automatizar de verdade).
- 🔄 Revisão-relâmpago da Aula 09 (recap da sub-rotina Hello World).
- 🗺️ Roteiro numerado dos **6 passos** (chips: 1 Revisar Aula 09, 2 Objetos, 3 Variáveis, 4 Condicionais, 5 Loops, 6 Mini-projeto).
- 🏁 Resultado final (mini-projeto com MsgBox).
- ⚙️ **`l10-check-1` no rodapé da FASE 0** (antes do botão "Começar a Aula"), dentro de `.phase-step-check` com `.l10-lock-hint` — ele é o passo 1 da cadeia: marca quem revisou a Aula 09 e libera `l10-check-2`. Contador da FASE 0 conta **6** (`l10-checklist-status`).
- ▶ Botão "Começar a Aula" (`l10-start-btn`) rolando para `#l10-phase-1` (sempre habilitado, igual à Aula 09).

> ⚠️ **Atenção de UX:** a FASE 0 da Aula 09 **não** tem check (5 checks, um por fase). A Aula 10 é o único caso com `l10-check-1` no rodapé da FASE 0 (decisão §7). Ao implementar, conferir que o gating da cadeia trata os 6 checks e que o contador mostra "X / 6".

### 8.5 ⚠️ Lição aprendida — IIFEs de gating DEVEM rodar em `DOMContentLoaded` (bug 24/09)

Nas aulas 2, 3, 8, 9, 11, 12 e 13, os IIFEs de FASE 0/checks executavam **antes** do DOM estar pronto → os `.lN-check` não existiam no `querySelectorAll`, os `disabled`/`opacity` não eram aplicados e a cadeia não encadeava (checks 0–2 travados, status errado). **Não reintroduzir este bug na Aula 10.**

- Envolver TODO o bloco `<script>` dos checks em:

```html
<script>
document.addEventListener('DOMContentLoaded', function () {
  ... querySelectorAll('.l10-check') ... refresh() ... addEventListener('change', refresh) ...
});
</script>
```

- Estrutura idêntica à da tela 9 (`#l10-fase-0` → `closest('article')`, `.l10-check`, `.phase-step-check`, `.l10-lock-hint`, `l10-checklist-status`, `l10-complete-hint`, `l10-start-hint`).
- Após editar o HTML: `node --check` no(s) bloco(s) inline e teste visual (CDP) da cadeia completa da primeira à última fase.

---

## 9. Regras Obrigatórias (resumo)

1. FASE 0 + roteiro numerado + checks distribuídos (nunca agrupados).
2. Imagens reais no PDF (`images` relativas `../../assets/img/excel/a10/…`).
3. Ilustrações HTML reais no PDF (`html` → `<div class="pdf-html-illustration">`).
4. **Paráfrase obrigatória** (§5) — sem cópia literal do tutorial.
5. Screenshot reutilizado **uma única vez** (todos em 10.1).
6. Continuidade com a Aula 09 (revisão-relâmpago na FASE 0).

---

## 10. Validações

```
node --check assets/js/pdf-lessons.js
node --check  # bloco(s) inline do HTML após qualquer edição
# Visual (harness de Aula 09, disponível em /tmp/opencode/pdftest/): abrir Aula 10 com senha xj010,
#   conferir FASE 0 (contador "0 / 6", check-1 no rodapé liberando check-2), percorrer fases até 100%,
#   baixar PDF 10 e conferir: 5 imagens na ordem §4 + html nas demais + nenhum trecho literal do tutorial
# Conferir que a Aula 09 (SDD-09) continua íntegra e sem os tópicos migrados
```

---

## 11. Checklist de Validação (pós-implementação)

- [ ] 5 imagens copiadas para `assets/img/excel/a10/` (configuração nova `a10`)
- [ ] Card do hub (linha ~635) com `promptLessonPassword(10, 'VBA Avançado: …')`, senha `xj010` e recap (~8360) renomeado
- [ ] `screen-lesson-10` no ar, espelhando a tela 9 (topo, gamificação, FASE 0, abas, fases, checks, botões de leitura, quiz)
- [ ] Bloco Aula 10 funcional no site (senha `xj010`, fases `l10-phase-1..5`, abas `tab-l10-1..6`)
- [ ] Migradas e reescritas: Variáveis (10.2), Condicionais (10.3), Loops (10.4) + nova Objetos (10.1) + Mini-projeto (10.5)
- [ ] FASE 0 com revisão-relâmpago da 09 + roteiro "6 passos" + contador "X / 6" + `l10-check-1` no rodapé
- [ ] `l10-check-1..6` distribuídos, um por passo, gating sequencial **em `DOMContentLoaded`** (§8.5)
- [ ] Gamificação: `readStatus[10]` (5 tópicos), `btn-read-l10-1..5`, `gamify-label/fill/badge-10`
- [ ] Quiz de fixação (5 perguntas): `QUESTOES_L10`, `QUIZ_CFG[10]`, `userAnswers[10]`, `l10-fixation`, `calcFixation(10)`, `lessonTitleMap` + 10
- [ ] PDF Aula 10 (`pdf-lessons.js`, section `lessonNum: 10`): 5 telas na ordem §4 + `html` nas fases sem screenshot; screenshots não repetidos
- [ ] Nenhum parágrafo ≥ 8 palavras idêntico ao HTML da AulaOrigem (paráfrase)
- [ ] `node --check assets/js/pdf-lessons.js` → OK; blocos inline OK
- [ ] Suíte completa (report) sem regressão nas Aulas 09 e 11–13

---

## 12. Dependências & Integração

- **Bloco por**: REsolvido — a Aula 09 (SDD-09) está **implementada e validada** no site (tela 9 completa, com quiz e gamificação); a FASE 0 da Aula 10 referencia a revisão dela.
- **Espec mestre**: atualizar `Docs/SPEC-EXCEL-MASTER.md` — Aula 10 deixa de ser "Revisão Geral & Preparatório" e vira **VBA Avançado (continuação da Aula 09)**; Aulas 11–13 seguem Projeto Vendas (SPC). Manter senha `xj010`.
- **Continuidade**: registrar em `Docs/CONTINUACAO.md` e reforçar regra antiplágio em `AGENTS.md` ao implementar.
- **Imagens**: pasta `assets/img/excel/a10/` a criar com as 5 PNGs (adicionar configuração `a10` em `pdf-lessons.js`).

---

## 13. Status

**Criado em:** 11/09/2026.
**Aprovado em:** 24/09/2026 (professor) — substitui a "Aula 10: Revisão Geral & Preparatório".
**Status:** SDD pronto para implementação — agendado para a **próxima sessão**.
**Próximo passo:** implementar §8 rodando §10 → atualizar `SPEC-EXCEL-MASTER.md` → atualizar `Docs/CONTINUACAO.md`.

---

## 14. Plano de Execução — próxima sessão (ordem sugerida)

1. **Imagens**: criar `assets/img/excel/a10/` e copiar `image2.png`, `image9.png`, `image10.png`, `image13.png`, `image15.png` de `AulaOrigem/VBA Excel_ Como começar e tornar seu trabalho mais fácil/images/`.
2. **`pdf-lessons.js`**: adicionar no objeto `excel` a section `lessonNum: 10` (capítulo + sections 10.0–10.5 seguindo §8.3), configuração `a10`, e checar `moduleLessonTitles.excel` / navegação de capítulos. Rodar `node --check`.
3. **`index.html`**:
   a. Renomear card do hub (linha ~635) e item do recap (linha ~8360);
   b. Adicionar `screen-lesson-10` espelhando a tela 9 (ids com sufixo `10`);
   c. Adicionar registros JS: `readStatus[10]`, `QUESTOES_L10`, `QUIZ_CFG[10]`, `userAnswers[10]`, `lessonTitleMap` + 10;
   d. IIFE dos checks da FASE 0 **dentro de `DOMContentLoaded`** (§8.5).
4. **Validar**: `node --check` (pdf-lessons.js + blocos inline); teste visual CDP com senha `xj010` (FASE 0 "0 / 6" → cadeia 100% → quiz) e **PDF 10** (5 imagens na ordem §4, `html` nas demais, sem screenshots repetidos); conferir que Aula 09 e 11–13 seguem íntegras.
5. **Registrar**: `SPEC-EXCEL-MASTER.md` (Aula 10 = VBA Avançado, 📝 Especificada → ⚙️ implementada após validar), `CONTINUACAO.md` (concluído + próximo), e reforçar regra antiplágio se necessário.