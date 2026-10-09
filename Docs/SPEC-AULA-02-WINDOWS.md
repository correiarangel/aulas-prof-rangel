### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: ✅ IMPLEMENTADA E VALIDADA (04/10/2026) — 49/49 no harness próprio, 98/98 na regressão, PDF conferido; **aprovação visual humana PENDENTE** (ver `Docs/CONTINUACAO.md` §7)

---

## 🎯 1. Análise da Base de Informação (material de origem)

### 1.1 Arquivos analisados

| Arquivo | Papel |
|:---|:---|
| `AulaOrigem/windows/Aula2_Introducao_Windows/Aula2_Introducao_Windows.html` | apostila de origem (282 linhas) |
| `AulaOrigem/windows/Aula2_Introducao_Windows/Aula2_Introducao_Windows_files/` (16 PNG) | screenshots do Windows 10/11 |

A aula de origem é um "primeiro contato" com o Windows: mostra o Desktop, os ícones, a Barra de Tarefas, o Menu Iniciar, arquivos e pastas, o Disco C:, criação de pasta, atalhos de teclado, personalização e um apêndice de Prompt de Comando.

### 1.2 Título e subtítulo

- **Título no portal:** `Aula 02: Introdução ao Windows — Seu Primeiro Passo no Mundo do Computador`
- **Entrada do hub:** `Introdução ao Windows` (o `promptLessonPassword` recebe exatamente essa string)

### 1.3 Estrutura do conteúdo de origem (9 blocos + abertura)

`2.0` FASE 0 · `2.1` O que é o Windows · `2.2` A Área de Trabalho (Desktop) · `2.3` Configurar os Ícones da Área de Trabalho · `2.4` A Barra de Tarefas e o Menu Iniciar · `2.5` Ícones Comuns e Atalhos · `2.6` Arquivos, Pastas e a Hierarquia do Disco C: · `2.7` Criando uma Pasta e os Atalhos de Teclado · `2.8` Personalizar o Ambiente · `2.9` Primeiros Passos no Prompt de Comando.

> **Promessa da origem cumprida:** o bloco introdutório promete "abrir o Prompt de Comando" — como conteúdo fora da avaliação quebraria `TOTAL_TOPICS` (regra 11), ele virou a **seção 2.9**, uma fase de verdade com check próprio.

### 1.4 Inventário das 16 imagens e o que elas mostram

| Arquivo | Onde entra |
|:---|:---|
| `image1.png`, `image3.png` | 2.3 — ícones do Desktop (ajustar tamanho/posição) |
| `image2.png`, `image12.png` | 2.5 — ícones de atalho no Desktop |
| `image4.png`, `image13.png`, `image15.png`, `image16.png` | 2.4 — Barra de Tarefas e Menu Iniciar |
| `image5.png` | 2.7 — "Criar nova pasta" no menu de contexto |
| `image6.png`, `image8.png` | 2.6 — arquivos e pastas / Disco C: |
| `image7.png`, `image9.png`, `image11.png`, `image14.png` | 2.8 — papel de parede, data e hora, cores |
| `image10.png` | 2.2 — a Área de Trabalho |

Copiados para `assets/img/windows/Aula2/` (~1,9 MB no total), todos com `alt` descritivo e legenda no PDF.

### 1.5 Diagnóstico: o que já existia no portal

A Aula 2 **não existia** no portal: o card do hub estava ausente, `moduleLessonTitles.windows` não tinha a chave `2` (lacuna **L-04** — o título 2 era o de uma Aula inexistente), não havia `screen-lesson-2`, nem seções no PDF, nem imagem copiada. Tudo nesta aula é novo; as estruturas compartilhadas de leitura/quiz (corrigidas em L-01/L-02) foram reutilizadas sem forks.

---

## 📐 2. Definição da Aula

| Item | Valor |
|:---|:---|
| Origem | `Aula2_Introducao_Windows` |
| Seções de leitura | **10** (`TOTAL_TOPICS[2] = 10`) |
| Checks | **10** (`check-read-2-1..10`, padrão `l2-phase-M` + FASE 0) |
| Sequencial | **sim** (`SEQUENTIAL_LESSONS` inclui `2`) |
| Componente interativo | **quiz de fixação** (a aula é introdutória; não há simulador) |
| Senha | `wr0226` — ⚠️ **candidata, ainda não confirmada pelo professor** |
| Persistência da leitura | `wrWindowsReadTopics` (compartilhada com as outras 5 aulas) |
| Persistência do quiz | `windows-aula-2:aluno(a)` (`QuizEngine`) |

---

## 🎓 3. Estrutura Pedagógica da Aula

### 3.1 FASE 0 — Antes de Começar

`#l2-fase-0` traz objetivo + **roteiro numerado em 7 passos** e é um `div` com a classe `tab-panel` (não `.topic-phase-section`) — as fases 1–9 usam `.topic-phase-section`. O roteiro termina em "abrir o Prompt de Comando", cumprindo a promessa da origem.

### 3.2 Mapa de checks distribuídos (regra de ouro — proibido agrupar)

| Check | Fase | Libera |
|:---|:---|:---|
| `check-read-2-1` | `l2-fase-0` | 2 |
| `check-read-2-2` | `l2-phase-1` | 3 |
| … | … | … |
| `check-read-2-9` | `l2-phase-8` | 10 |
| `check-read-2-10` | `l2-phase-9` (CMD) | barra em 100% |

Cada check fica **no fim da fase correspondente**, onde está a instrução de executar o passo; nada agrupado.

### 3.3 Reinício

`initReading` injeta "↺ Recomeçar a leitura" nas **6** barras do módulo (Aulas 1, 2, 7, 8, 71, 81) — sem ele o estado gravado seria irreversível, porque o check marcado fica `disabled` (L-01).

---

## 🔒 4. Autenticação e Senha

`PASSWORD_A2 = "wr0226"`, aceita na mesma lista das demais senhas do módulo. `promptLessonPassword(2, 'Introdução ao Windows')` abre o modal; senha errada mostra alerta e **não** navega. `OPEN_LESSONS = [1, 2, 7, 8, 71, 81]` — a Aula 2 aparece no aviso de aulas liberadas, mas continua protegida por senha.

---

## 📝 5. Quiz de Fixação (5 questões)

`QUESTIONS_LESSON_2`: Windows+I (Configurações) · setas no ícone do Windows · extensão `.txt` · comando que cria pasta (`mkdir`) · a pasta `Windows` **não** se altera. `PASS_SCORE = 7` (2,0 por questão, nota máxima real 10,0). `QUIZ_CFG[2] = { moduleId: "windows-aula-2", title: "Introdução ao Windows" }`.

O rodapé "✓ Salvo automaticamente" só aparece **depois da 1ª resposta** (regra 7): grava via `QuizEngine.saveState('windows-aula-2', …)` ao responder, ao navegar e ao assinar; restaura com `loadState`; "↺ Recomeçar o exercício" apaga a chave.

---

## 📄 6. Apostila em PDF (`assets/js/pdf-lessons.js`)

### 6.1 Seções criadas

10 seções com `lessonNum: 2` (2.0 → 2.9), as mesmas da tela, com as 16 imagens legendadas e três caixas HTML (`es-sheet-box` / `mini-sheet`) para o roteiro, os ícones comuns e o passo a passo do CMD. Título em `moduleLessonTitles.windows[2]`.

> `lessonNum: 2` é **legítimo** aqui (a aula existe). As Aulas 3–6 continuam fora de `moduleLessonTitles`, e o guarda de apostila vazia (L-04) só protege os números que não existem.

### 6.2 Regras do PDF (obrigatórias)

Imagens em `sec.images` com `caption` (nunca `"🖼️ Referência de imagem"`); ilustração HTML em `sec.html`; nenhuma seção só-texto. Auditoria: **Windows 39/39 seções ilustradas, 0 texto puro; 86/86 imagens legendadas**.

---

## ⚙️ 7. Alterações no Código Fonte

| Arquivo | O que mudou |
|:---|:---|
| `modules/windows/index.html` | `screen-lesson-2` (811 linhas), card do hub, `TOTAL_TOPICS[2]`, `SEQUENTIAL_LESSONS`, `OPEN_LESSONS`, `PASSWORD_A2`, rota `2: "screen-lesson-2"`, `QUESTIONS_LESSON_2`, `QUIZ_CFG[2]`, quiz no `forEach` de `[1, 2, 7, 71, 81]` |
| `assets/js/pdf-lessons.js` | 10 seções da Aula 2 + título + correção factual (§8) |
| `assets/img/windows/Aula2/` | 16 PNG (~1,9 MB) |
| `assets/css/style.css` | `.fixation-panel` no bloco `REGRAS MOBILE GLOBAIS` (regra 6) |
| `Docs/` | esta spec + `CONTINUACAO.md` |

---

## ✅ 8. Checklist de Validação (pós-implementação)

- [x] Card da Aula 02 no hub abre o modal; senha errada **não** navega.
- [x] `wr0226` destrava `screen-lesson-2`.
- [x] FASE 0 com objetivo + roteiro numerado (sem glossário, sem lista de materiais).
- [x] **10 checks distribuídos**, 1 por fase, nenhum bloco agrupado; trava sequencial coerente.
- [x] Barra gamificada 0 → 100% e badge virando "🎉 Leitura Completa!".
- [x] Clicar nas 10 abas mostra **só** a fase escolhida.
- [x] 16 imagens na tela com `alt` e `naturalWidth > 0`.
- [x] Quiz: 5 questões, aprovação em 7,0, 5/5 → **10,0**, assinatura SHA-256 `WR-XXXX-XXXX-XXXX-XXXX`.
- [x] Quiz persiste (`windows-aula-2:aluno(a)`), restaura após reload e recomeçar limpa a chave.
- [x] Leitura persiste em `wrWindowsReadTopics` e sobrevive ao reload com a trava preservada.
- [x] "↺ Recomeçar a leitura" presente nas 6 barras do módulo.
- [x] PDF: 10 seções, 18 imagens (16 da aula + 2 legadas), 0 "🖼️ Referência de imagem", título correto.
- [x] Apostila gerada de verdade (`downloadLessonPDF('windows', 2)`) sem erro de console e sem alerta de popup.
- [x] **Mobile 375px e 414px**: sem overflow horizontal; leitura 367/375 e 406/414; quiz 345/375 e 384/414.
- [x] `node --check assets/js/pdf-lessons.js` e `check-inline` (1328 linhas) OK; `git diff --check` limpo.
- [x] Regressão dos outros módulos sem dano: `windows` 24/0 · `windows-read` 19/0 · `excel` 37/0 · `excel-quiz` 18/0.
- [x] **Fatos conferidos** (§9).

### 8.1 Harnesses usados

| Script | Resultado |
|:---|:---|
| `/tmp/opencode/a2-harness.js` | **49/49** — senha, badge, geometria, 10 fases, gating, progresso, persistência, reinício, quiz, nota 10,0, hash, imagens, hub, console limpo |
| `/tmp/opencode/a2-pdfgen.js` | **11/11** — apostila real: título, 10 numerações de seção, 18 imagens, 16 de `Aula2/`, FASE 0, seção 2.9, correções aplicadas, zero `JSTOR` |
| `/tmp/opencode/a2-mobile.js` | **MOBILE OK** em 375 e 414 px |
| `/tmp/opencode/recheck.js windows \| windows-read \| excel \| excel-quiz` | 24/0 · 19/0 · 37/0 · 18/0 |
| `/tmp/opencode/pdf-audit.js` · `caption-audit.js` · `check-inline.js` | 39/39 · 86/86 · OK |

> ⚠️ Ficam em `/tmp` e são perdidos no reboot. Se sumirem, reescrever com `cdp2.js` (`open(url)` + `eval`) antes de confiar em qualquer item acima.

---

## 🔎 9. Fatos corrigidos durante a validação

| Defeito | Correção |
|:---|:---|
| "O Windows diferencia maiúscula de minúscula nos nomes; `cd documentos` **não** funciona quando a pasta se chama `Documents`" — **falso** (o NTFS é case-insensitive) | Reescrito: a caixa não é problema; o que atrapalha é o idioma — em português a pasta é **Meus Documentos**. Aplicado na tela **e** no PDF. |
| "Windows 10 … com **fim de suporte anunciado**" — evento já ocorrido (14/10/2025) | "Ainda é comum em máquinas de trabalho, mas o suporte oficial terminou em 14/10/2025". |
| "agenda, e-mail e **JSTOR**, Zoom e Meet" — artefato de geração em seção do módulo Internet | JSTOR removido. |

---

## 🔗 10. Dependências & Riscos

| Risco | Mitigação |
|:---|:---|
| Senha `wr0226` não confirmada | Marcada como candidata em §2 e §4 — confirmar antes de publicar. |
| Card do hub se confunde com o da Aula 01 ("Introdução ao Windows & Interface") | Rótulo do hub e `promptLessonPassword` mudados **na mesma entrega**; a Aula 01 segue com `screen-lesson-1`. |
| Quebrar as Aulas 7/8/71/81 ao mexer nas estruturas compartilhadas | Toda alteração foi **aditiva**; as 4 aulas continuam passando na regressão `windows-read`. |
| `.fixation-panel` é regra **global** do `style.css` | Afeta também Excel e Internet; o painel de fixação de todos os módulos usa a mesma caixa. Reverificar visualmente os outros módulos (regra 6). |

---

## 📌 11. Status

- **04/10/2026**: base analisada, spec escrita, implementação completa e validada por harness (49/49 + 11/11 + mobile + 98/0 de regressão).
- **Pendências humanas**: (a) confirmação da senha `wr0226`; (b) conferência visual do PDF e da tela — o modelo não tem visão; (c) inspeção do PDF do Excel (P-06).
- **Pendências de repositório**: commit do working tree (P-10) aguardando o professor.
- **Fora do escopo desta aula**: **L-07** (Word e PowerPoint com PDF 100% texto puro) continua aberto e é a maior pendência de conteúdo do portal.