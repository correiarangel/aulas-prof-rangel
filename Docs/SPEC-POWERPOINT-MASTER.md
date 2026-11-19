# 📘 SPEC-POWERPOINT-MASTER — Especificação Mestre do Módulo 4: Microsoft PowerPoint
### Portal Didático de Informática Básica | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai (Global)**: Este documento herda as regras globais de [SPEC-PROJECT-ARCHITECTURE.md](SPEC-PROJECT-ARCHITECTURE.md) e as normas obrigatórias do [AGENTS.md](../AGENTS.md) (FASE 0, checks distribuídos por fase, PDF com ilustração real e `lessonNum`, mobile 100%, persistência real do quiz, fatos/unidades conferidos, overlay fora da avaliação como filho direto de `<body>` se houver, releitura do conteúdo renderizado).

---

## 1. Visão Geral do Módulo

O **Módulo 4: Microsoft PowerPoint — Apresentações Visuais Impactantes** é a trilha didático-prática do portal voltada à criação de apresentações claras, organizadas e profissionais. O aluno aprende a conhecer a interface, montar e organizar slides, formatar texto e imagens, aplicar animações/transições com critério, criar navegação interativa (botões e hiperlinks), padronizar apresentações com o Slide Mestre e concluir um projeto final guiado.

- **Base de interface**: **Microsoft PowerPoint 2010 (pt-BR)**, com notas de compatibilidade quando o recurso/nome de comando variar em versões mais recentes (2013+).
- **Origem do conteúdo**: material de `AulaOrigem/Power_point/` (Aulas 1–6, 49 imagens), revisado e corrigido (ver seção 7).
- **Ambiente**: estático (HTML5, CSS3/`assets/css/style.css`, JavaScript ES6+), GitHub Pages.

## 2. Aulas do Módulo (6 aulas)

| Aula | Título | Senha | Foco principal | Status |
|:---:|---|:---:|---|:---:|
| 01 | Interface do PowerPoint 2010 | `pa001` | Tela, áreas, Backstage (Arquivo), mapa das guias, exercício guiado (4 slides + animação) | ✅ Implementada |
| 02 | Trabalhando com Slides | `pb002` | Inserir/duplicar/excluir, layouts, temas/plano de fundo, rodapé/numeração, organização lógica | ✅ Implementada |
| 03 | Texto, Imagens, Animações e Transições | `pc003` | Tipografia/parágrafo, inserir/editar imagens, remover fundo/cor/fundo, animação × transição, modos manual/automático/quiosque, áudio | ✅ Implementada |
| 04 | Botões de Ação e Navegação | `pd004` | Botões de ação, hiperlinks (slide/URL/arquivo), navegação não linear (menu), mídia e configuração de apresentação | ✅ Implementada |
| 05 | Slide Mestre — O Molde da Apresentação | `pe005` | Mestre Principal × layouts, padronização (fundo/fonte/logotipo), fechar mestre, layout personalizado (.potx), resolução de problemas | ✅ Implementada |
| 06 | Projeto Final — Apresentação do Restaurante | `pf006` | Projeto guiado em 10 partes (4 slides), tema, tabela, imagens, transições/animações **ao clique** (sem avanço automático/vídeo/música), teste e entrega | ✅ Implementada |

## 3. Convenções de Implementação (replicam o molde Word)

- **Hub**: 6 cards em `modules/powerpoint/index.html`, `onclick="promptLessonPassword(N, 'Título')"`, badge `badge-lesson-N`, barra gamificada por aula (`gamify-percent-N`, `gamify-bar-N`, `gamify-badge-box-N`). Senhas em `PASSWORDS = {1:'pa001',...,6:'pf006'}`; whitelist em `promptLessonPassword`; `routes` mapeia para `screen-lesson-N`.
- **Progresso de leitura**: `TOTAL_TOPICS = {1:5,2:5,3:5,4:5,5:5,6:5}`, `SEQUENTIAL_LESSONS` todos `true`, storage `powerpoint_lessons_reading_progress` (e espelho por aula `powerpoint_lesson_N_progress`), loops de init/vínculo para 1–6.
- **Tela da aula** (`#screen-lesson-N`): topo (voltar/imprimir/PDF `PDFLessons.downloadLessonPDF('powerpoint', N)`), barra gamificada, `<article class="lesson-reading-card">`, **FASE 0** (`lN-fase-0`: objetivo, roteiro em chips, faixa de preparação, `lN-checklist-status`, `lN-complete-hint`, `btn-start-lN`), abas `tab-btn-N-1..5` + `tab-btn-N-fix`, 5 seções `lN-phase-K` (1ª `.active`) cada uma com **check distribuído no fim** (`phase-step-check`, `lN-check-K`, `check-read-N-K`) e navegação, simuladores `window.lN*`, painel `#fixation-panel-N` + `#result-panel-N` com comprovantes.
- **Quiz**: 5 questões por aula, 2,0 pts cada (10,0), aprovação ≥ 7,0 (`PASS_SCORE = 7.0`), `QUIZ_CFG[N] = {questions, name, answers:new Array(5).fill(null), current:0, signature:null, moduleId:'powerpoint_lesson_N_quiz', title, sig}`. Handlers genéricos `persistQuizGen/restoreQuizGen/restartQuizGen/renderTrailGen/renderQuestionGen/prevQuestionGen/nextQuestionGen/toggleHint/renderResultGen/getReportDataGen/openFixationPanel/switchTopicPhase` e `window.getReportDataGen`.
- **Persistência real (regra 7)**: `QuizEngine.saveState(cfg.moduleId,{name,lessonNum,answers,current,signature})` ao responder, navegar e finalizar; `restoreQuizGen` ao abrir o painel; "↺ Recomeçar o exercício" remove a chave `${moduleId}:${name}` e zera estado; rótulo "✓ Salvo automaticamente" verdadeiro.
- **IDs canônicos**: `screen-lesson-N`, `badge-lesson-N`, `gamify-percent/bar/badge-box-N`, `lN-fase-0`, `lN-checklist-status`, `lN-complete-hint`, `btn-start-lN`, `tab-btn-N-{1..5,fix}`, `lN-phase-K`, `lN-check-K`, `check-read-N-K`, `fixation-panel-N`, `result-panel-N`, `quiz-trail-N`, `q-count/text/points-N`, `btn-hint-N`, `hint-box-N`, `options-N`, `btn-prev/next-N`, `result-badge/title/sub/score-N`, `signature-code-N`, `breakdown-N`, `btn-download-txt/pdf/whatsapp/email-N`, `email-panel-N`, `btn-open-gmail-N`.
- **Overlay/aba extra** (se houver): filho direto de `<body>`, validar `getBoundingClientRect().width > 0` (regra 10).

## 4. PDF (Apostilas) — `assets/js/pdf-lessons.js`

- `LESSONS.powerpoint`: 6 apostilas, **todas as seções com `lessonNum: 1..6`** (regra 8 — nenhuma seção sem `lessonNum`).
- `moduleLessonTitles.powerpoint`: títulos das Aulas 01–06.
- Cada aula possui seções com `chapter/heading/content` e **ilustrações reais** via `images` (`../../assets/img/powerpoint/AulaN/...`) e/ou `html` (`.es-sheet-box`, `.es-sheet-titlebar`, `.mini-sheet`, `.fun-highlight`) renderizado em `<div class="pdf-html-illustration">` (regra 2).
- **Aula 4** não possui imagens de origem: ilustrada integralmente com HTML no PDF e nas telas.

## 5. Imagens

49 arquivos copiados de `AulaOrigem/Power_point/` para `assets/img/powerpoint/Aula1..Aula6/` (A1:7, A2:6, A3:12, A4:0, A5:10, A6:14), referenciados por paths relativos `../../assets/img/powerpoint/AulaN/<arquivo>`.

## 6. Validação (antes de concluir)

- `node --check assets/js/pdf-lessons.js` e sintaxe do `<script>` inline de `modules/powerpoint/index.html`.
- Conferir regras 2, 6, 7, 8, 9, 10 e 12 do `AGENTS.md` (ilustração real, mobile global 4px, persistência real, `lessonNum` em todas as seções, fatos/unidades/termos conferidos, overlay se houver, releitura do texto renderizado na tela e no PDF).
- Harness não detecta erro de conteúdo: revisar texto renderizado (UI e nomes de comandos do PowerPoint 2010 pt-BR).

## 7. Correções de conteúdo aplicadas (fontes → módulo)

| Tema | Fonte/origem do problema | Correção adotada |
|---|---|---|
| Versão e rótulos de UI (2013+) | A3 declara "PowerPoint 2013"; A3/A5/A6 usam "Imagens Online", "Este Dispositivo", "Áudio/Vídeo no Meu Computador/PC", "Formato da Imagem", "Design da Tabela" | **Padronizado para PowerPoint 2010 (pt-BR)**: `Inserir → Imagem` / `Áudio do Arquivo` / `Vídeo do Arquivo`; guias contextuais `Ferramentas de Imagem/Tabela → Formatar/Design/Layout`; `Design → Temas, Cores, Fontes e Efeitos` (nota: "Variantes" é nome comum em versões mais novas). |
| A1 exercício truncado/ambíguo | "em iniciara", "caixa a abaixo", concordâncias; animação citada como "Rotação" | Passos reescritos com clareza; animação de objeto tratada como **Girar** (Ênfase) quando aplicável, distinta da rotação de formato. |
| A2 dependente de externo/termos imprecisos | Download de 9 imagens+áudio, "Vortex"/tempos rígidos, "Executar entre slides"/"Retroceder…" truncado, "Click" | Exercício tornado **autocontido**; rótulos ajustados ao 2010; temas tratados como exemplos da instalação. |
| A3 atalhos | risco de confundir atalhos de formatação com salvar | Padronizado `Ctrl+B/I/U` (Negrito/Itálico/Sublinhado) e `Ctrl+S` (Salvar), coerente com o Office e demais módulos. |
| A4 sem imagens e conflito de fluxo | 0 imagens de origem; capa com avanço automático 3s conflita com "desmarcar Após" | **Ilustrações HTML** criadas; regra explicitada: navegação por botões/clique como padrão do menu interativo (avanço automático apenas se configurado conscientemente). |
| A5 numeração/fluxo | Figuras "Imagem 05/06" repetidas; caminho "Este Dispositivo" | Figuras reorganizadas/renumeradas no PDF; inserção ajustada para 2010. |
| A6 coerência | Reforço "ao clique, sem Após, sem quiosque, sem vídeo/música" | Mantido e destacado no comparador correto×incorreto e nos checks. |
| Higiene geral | Entidades/acentuação, comandos vagos, possíveis imprecisões | Comandos no formato `Guia → Grupo → Comando`; leitura do texto renderizado (tela e PDF) antes de concluir (regra 12). |

## 8. Documentos relacionados

- `Docs/SPEC-POWERPOINT-AULA-01.md` … `Docs/SPEC-POWERPOINT-AULA-06.md`
- `Docs/SPEC-PROJECT-ARCHITECTURE.md` (atualizar status do PowerPoint quando aplicável)
- `Docs/CONTINUACAO.md` (estado, validações, pendências residuais)

*Documento criado em 19/11/2026 — implementação inicial das Aulas 1–6 do Módulo PowerPoint.*
