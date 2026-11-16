# SDD - Pendências Windows (Ajustes) | Prof. Marcos Rangel

**Status:** 🟡 EM ANDAMENTO  
**Prioridade:** P0 (crítico)  
**Objetivo:** Sanar todas as pendências do Módulo Windows antes de implementar a Aula 10  
**Base:** `Docs/CONTINUACAO.md`, `AGENTS.md` (Regras 1, 2, 6, 7, 8, 12)

---

## 1. Visão Geral

O Módulo Windows está quase finalizado. O gargalo real são as **Aulas 7, 8, 71 (Complemento 7A) e 81 (Complemento 8A)** que ainda não seguem o padrão obrigatório definido no `AGENTS.md`:

> **Regra 1:** toda aula começa com um bloco introdutório tutorial (objetivo + **roteiro numerado em passo a passo**). Os **checks ficam distribuídos** — posicionados no fim de cada fase, exatamente onde está a instrução de executar aquele passo (cada passo é um check e só libera o próximo). **Proibido agrupar todos os checks num único lugar.**

Atualmente essas telas existem, mas **não possuem FASE 0**.

---

## 2. Ordem de Execução (P0 → P1 → P2)

### BLOCO P0 — CRÍTICO (FAZER PRIMEIRO)

| ID | Tarefa | Arquivo | Status |
|---|---|---|---|
| **P0.1** | Adicionar **FASE 0** à `screen-lesson-7` | `modules/windows/index.html` | ☐ A FAZER |
| **P0.2** | Adicionar **FASE 0** à `screen-lesson-8` | `modules/windows/index.html` | ☐ A FAZER |
| **P0.3** | Adicionar **FASE 0** à `screen-lesson-71` (Complemento 7A) | `modules/windows/index.html` | ☐ A FAZER |
| **P0.4** | Adicionar **FASE 0** à `screen-lesson-81` (Complemento 8A) | `modules/windows/index.html` | ☐ A FAZER |
| **P0.5** | Garantir **checks distribuídos** no fim de cada fase (nunca agrupados) | `modules/windows/index.html` | ☐ A FAZER |
| **P0.6** | Validar contagem de `TOTAL_TOPICS` e gating sequencial | `modules/windows/index.html` | ☐ A FAZER |

#### Especificação P0

Para **cada** uma das telas acima:

1. **FASE 0** deve ter `id="lX-fase-0"` (ou equivalente seguindo padrão)
2. Conteúdo obrigatório:
   - **🎯 Objetivo da aula** — descrição clara
   - **🗺️ Roteiro numerado em passo a passo** — em chips/itens numerados, **SEM checkbox**
   - **🏁 O que você vai conseguir ao final** — resumo objetivo
   - **Checkbox de preparação** — `check-read-X-1` no fim da FASE 0 (libera primeira fase)
3. **Fases seguintes**: manter estrutura existente, mas **garantir** que haja **exatamente 1 check por fase** no **fim** de cada fase (posicionado logo após o conteúdo daquela fase), chamando `markTopicRead(X, N)`
4. **Gating sequencial**: manter `SEQUENTIAL_LESSONS[X] = true` quando aplicável
5. **Seguir padrão**: espelhar `screen-lesson-6` / `screen-lesson-9` o mais fielmente possível

**Referências:** `modules/windows/index.html` (Aulas 1, 2, 3, 4, 5, 6, 9), `Docs/SPEC-AULA-06-WINDOWS.md`

---

### BLOCO P1 — IMPORTANTE (APÓS P0)

| ID | Tarefa | Arquivo | Status |
|---|---|---|---|
| **P1.1** | Confirmar/validar senhas candidatas (`wr0126`,`wr0226`,`wr0326`,`wr0426`,`wr0526`) + revisar `wr0726` (7/7A), `wr0926` (8/8A/prova) | `modules/windows/index.html` | ☐ A FAZER |
| **P1.2** | Garantir `moduleLessonTitles.windows` para **7,8,71,81** corretos | `assets/js/pdf-lessons.js` | ☐ A FAZER |
| **P1.3** | Garantir **seções com `lessonNum`** para 7,8,71,81 no PDF. **Seções sem `lessonNum` NÃO devem vazar** para estas apostilas | `assets/js/pdf-lessons.js` | ☐ A FAZER |
| **P1.4** | Revisar **persistência de leitura** (`wrWindowsReadTopics`) para 7,8,71,81 | `modules/windows/index.html` | ☐ A FAZER |
| **P1.5** | Revisar **persistência de quiz** com `QuizEngine.saveState/loadState` + botão `"↺ Recomeçar o exercício"` | `modules/windows/index.html` / `assets/js/quiz-engine.js` | ☐ A FAZER |
| **P1.6** | Verificar imagens reais no PDF (regra 2) — sem "🖼️ Referência de imagem" | `assets/js/pdf-lessons.js` | ☐ A FAZER |

---

### BLOCO P2 — POLIMENTO (APÓS P1)

| ID | Tarefa | Arquivo | Status |
|---|---|---|---|
| **P2.1** | Aumentar tamanho das imagens pequenas (Aulas 1,3,4,5,6,7,9). Ajustar `.img-reduced` no CSS e caps inline quando necessário | `assets/css/style.css`, `modules/windows/index.html` | ☐ A FAZER |
| **P2.2** | Validar mobile 375px/414px com bloco `/* REGRAS MOBILE GLOBAIS */` (sem `@media` por aula) | `assets/css/style.css`, telas 7,8,71,81 | ☐ A FAZER |
| **P2.3** | Gerar PDFs por `downloadLessonPDF('windows', N)` para 7,8,71,81 e inspecionar | Navegador/Chrome headless | ☐ A FAZER |
| **P2.4** | **Aprovação visual humana** (Regra 12) — telas + PDFs | Navegador | ☐ A FAZER |
| **P2.5** | Rodar validações: `node --check assets/js/pdf-lessons.js` + checar scripts inline | Terminal | ☐ A FAZER |

---

## 3. Critérios de Aceite

- [ ] **P0 completo:** Todas as 4 telas (7,8,71,81) possuem **FASE 0** com objetivo + roteiro numerado + checks **distribuídos**
- [ ] **Sem checklist agrupado:** Proibido ter todos os checks num único lugar
- [ ] **PDF íntegro:** Cada aula tem `lessonNum` correto e ilustrações reais
- [ ] **Persistência funcional:** Leitura e quiz salvam/restauram corretamente
- [ ] **Mobile OK:** Sem overflow horizontal em 375px
- [ ] **Validações passam:** `node --check` OK, sem erros de sintaxe
- [ ] **Aprovação visual:** Conferido pelo professor

---

## 4. Notas

- **Não tocar** na Prova Final (`prova-windows.html`) — já validada
- **Não quebrar** Aulas 1-6,9 — já estáveis
- **Senha mestre** só para testes, nunca commitar mudanças desnecessárias nela
- **Atualizar `Docs/CONTINUACAO.md`** ao final desta rodada de ajustes

---

**Próximo passo:** Iniciar **P0.1** (Aula 7) seguindo estritamente o padrão das Aulas 5/6/9
