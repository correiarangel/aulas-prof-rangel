# SDD-AULA-09-MACROS-VBA — Introdução às Macros e ao VBA (Base) com Screenshots Reais

### Aula 09 Excel — Macros & Introdução ao VBA
### Prof. Marcos Rangel — WR Capacitação Profetional

---

## 1. Contexto e Decisões do Professor (11/09/2026)

O conteúdo original de "Macros & VBA" era extenso demais para uma única aula. Decisão: **dividir em duas aulas**:

| Aula | Papel | Escopo |
|:--|:--|:--|
| **Aula 09** (este SDD) | **Base introdutória** | Macro × VBA, ativar aba Desenvolvedor, gravar macro, Editor VBA e primeira sub-rotina com `MsgBox` (impressão "Hello World") |
| **Aula 10** (`Docs/SDD-AULA-10-VBA-AVANCADO.md`) | **Continuação / avanço** | Objetos (planilhas, intervalos, cores), variáveis, condicionais, loops e mini-projeto final |

Regras aplicáveis a esta aula (persistentes — AGENTS.md, SPEC §6.1, SDD-AULA-08):

1. **FASE 0 sempre presente**: objetivo + roteiro numerado; **checks distribuídos** — um check no fim de cada fase, exatamente onde o passo é executado; cada passo libera o próximo. **Proibido** agrupar todos numa lista única.
2. **Imagens reais obrigatórias no PDF**: o PDF gerado por `downloadLessonPDF` deve conter as screenshots reais (via `images`) e ilustrações HTML reais (via `html`). Nada de texto "🖼️ Referência de imagem: ...".
3. **Antiplágio (novo, decisão do professor)**: todo texto adaptado do material de referência (`AulaOrigem/…/VBA Excel_ Como começar…`) deve ser **reescrito com sinônimos**, mudando as palavras e mantendo o significado. Ver §7.
4. **Imagens na ordem exata do tutorial de referência** — os arquivos do exemplo aparecem na sequência §5, uma única vez.

**Tema escolhido: Capiberica** (narrativa lúdica) com as screenshots reais do tutorial encaixadas no fluxo.

---

## 2. Problema Identificado (auditoria de 11/09/2026)

| Problema na Aula 09 atual | Impacto |
|:---|:---|
| Nenhuma imagem real na página (`l9-phase-1..7` do `index.html`) | Aluno não vê a tela real do Excel/aba Desenvolvedor/Editor VBA |
| PDF usa `assets/img/excel/a9/image1..10` com md5 **diferente** das telas do tutorial de referência | PDF não corresponde ao roteiro visual canônico |
| Ordem das imagens fora da sequência do exemplo | Quebra o passo a passo visual de referência |
| Checks duplicados ("Ativar aba Desenvolvedor" como passo 2 na FASE 0 **e** passo 4 no 9.2) + roteiro "7 passos" × 9 checks | Redundância e numeração inconsistente |
| **Sobrecarga**: VBE + Variáveis + Condicionais + Loops empilhados | Aula densa demais para iniciante — motiva a divisão 09/10 |

---

## 3. Objetivo da Aula 09

Entregar uma **base sólida e curta**: o aluno sai da aula sabendo ligar Macros, ativar a aba Desenvolvedor, gravar uma ação repetitiva e escrever a própria primeira sub-rotina VBA que mostra uma mensagem — tudo com as telas reais do Excel na ordem certa e sem sobrecarga. Os conceitos de "programar de verdade" (objetos, variáveis, condicionais, loops) ficam para a Aula 10.

---

## 4. Referência Canônica — Estrutura do Tutorial (`AulaOrigem`)

Arquivo 1 linha (49.814 bytes): `AulaOrigem/VBA Excel_ Como começar e tornar seu trabalho mais fácil/VBAExcelComocomearetornarseutrabalhomaisfcil.html`
Imagens: `AulaOrigem/VBA Excel_ Como começar e tornar seu trabalho mais fácil/images/image1.png .. image16.png`.

| Nível | Título (será reescrito — §7) |
|:---|:---|
| H2 | O que é VBA no Excel? |
| H2 | Termos importantes do VBA Excel |
| H2 | Primeiros passos com o VBA no Excel (H3: Ativação da guia Desenvolvedor; Abrir o editor VBA; Navegando na interface do VBA) |
| H2 | Como escrever código VBA no Excel (H3: Escrevendo uma sub-rotina VBA) |

> A parte "Objetos" e "Variáveis" do tutorial alimentam a **Aula 10**. Esta Aula 09 usa apenas o trecho "guia Desenvolvedor → editor VBA → sub-rotina".

---

## 5. Ordem Obrigatória das Imagens da Aula 09 (11 imagens, sequência do exemplo)

| # | Arquivo (copiar p/ `assets/img/excel/a9/`) | Legenda canônica (a reescrever) | Fase da Capiberica |
|:--|:--|:--|:--|
| 1 | `image4.png` | Faixa de opções do Excel | 9.2 — contexto (onde fica "Arquivo") |
| 2 | `image1.png` | Personalizar faixa de opções (clique direito → Personalizar) | 9.2 — passo 1 |
| 3 | `image6.png` | Marcar a opção Desenvolvedor | 9.2 — passo 2 |
| 4 | `image7.png` | Guia Desenvolvedor ativada | 9.2 — resultado (check 3) |
| 5 | `image3.png` | Editor VBA aberto (Alt+F11) | 9.4 — abrir o VBE |
| 6 | `image12.png` | Interface do VBA (Explorador de Projetos, Janela de Código, Propriedades) | 9.4 — navegando (check 5) |
| 7 | `image14.png` | Inserir → Module | 9.5 — passo 1 |
| 8 | `image11.png` | Renomear o módulo (Propriedades → Name) | 9.5 — passo 2 |
| 9 | `image8.png` | Escrevendo a macro (`Sub … End Sub`) | 9.5 — passo 3 |
| 10 | `image16.png` | Desenvolvedor → Macros (executar) | 9.5 — passo 4 |
| 11 | `image5.png` | Caixa de mensagem MsgBox | 9.5 — resultado (check 6) |

> As imagens 12–16 do exemplo (objetos: planilhas/intervalos/cores) pertencem à **Aula 10** e não aparecem aqui.

---

## 6. Nova Estrutura da Aula 09 — Roteiro de 6 Passos

| Passo | Fase | Título | Conteúdo-chave | Ilustração |
|:--|:--|:--|:--|:--|
| 1 | FASE 0 | Histórico e planejamento | Objetivo, roteiro numerado (6), resultado final | HTML (`fun-highlight`) |
| 2 | 9.1 | O que são Macros e VBA | Conceito Macro × VBA + termos (Módulo, Objeto, Procedimento) | HTML (`fun-highlight`/`es-sheet-box`) |
| 3 | 9.2 | Ativar a aba Desenvolvedor | Arquivo → Opções → Personalizar Faixa → Desenvolvedor | **imgs 1–4** |
| 4 | 9.3 | Gravar a Primeira Macro | Gravar/parar/nomear/testar a macro | HTML (`mini-sheet` — tutorial não mostra gravação) |
| 5 | 9.4 | Abrir e Navegar no Editor VBA | Alt+F11; interface: código, projetos, propriedades | **imgs 5–6** |
| 6 | 9.5 | Sub-rotinas — "Hello World" | Module, renomear módulo, `Sub`, MsgBox, Desenvolvedor→Macros | **imgs 7–11** |
| — | Quiz | Exercício de Fixação (5 perguntas) | `openFixationPanel(9)` / `calcFixation(9)` | — |

A FASE 0 anuncia "roteiro dos **6 passos**" e o contador "X / 6 passos concluídos" (sem hardcode "0 / 7").

---

## 7. Antiplágio — Regra de Paráfrase (obrigatória para o material do tutorial)

Decisão do professor: **mudar as palavras, manter o significado**. Ao aproveitar qualquer texto do tutorial de referência:

1. **Não copiar frases inteiras.** Exemplificando:
   - "Ativação da guia Desenvolvedor" → "como liberar o cardápio de opções do desenvolvedor no Excel"
   - "Selecione a opção Macros na guia Desenvolvedor" → "procure o grupo Código e acione o botão de gravar"
   - "Criação de variáveis no VBA" → "guardar valores em compartimentos nomeados"
2. **Termos técnicos e nomes** (VBA, Módulo, Objeto, `MsgBox`, Alt+F11, "Customizar Faixa de Opções") **ficam iguais** — são nomes próprios da ferramenta, não podem ser trocados.
3. **Estrutura do roteiro é nossa** (Capiberica + WR): apenas os conceitos técnicos vêm do tutorial, reescritos com sinônimos.
4. **Legendas das imagens escritas de próprio punho** (a legenda do tutorial é "Imagem do autor" — não replicar esse texto).
5. Ao revisar: conferir que nenhum parágrafo do `index.html`/`pdf-lessons.js` da Aula 09 coincide literalmente com o HTML da AulaOrigem (buscar trechos ≥ 8 palavras).

---

## 8. Alterações no Código Fonte

### 8.1 Imagens

| Origem | Destino | Ação |
|:--|:--|:--|
| `AulaOrigem/…/images/image1.png`, `image3.png`, `image4.png`, `image5.png`, `image6.png`, `image7.png`, `image8.png`, `image11.png`, `image12.png`, `image14.png`, `image16.png` | `assets/img/excel/a9/imageN.png` | Copiar as **11 imagens da Aula 09** preservando o nome |
| `assets/img/excel/a9/image1.jpg`, `image2.png` … `image10.png` (atuais, md5 ≠ exemplo) | — | **Remover** (pasta untracked — sem risco de histórico) e não reutilizar nomes gerando ambiguidade |

Paths relativos: `../../assets/img/excel/a9/imageN.png`.

### 8.2 `modules/excel/index.html`

| Alteração | Detalhe |
|:--|:--|
| Enxugar fases | Remover as atuais 9.5 (Variáveis), 9.6 (Condicionais) e 9.7 (Loops) — migram para a Aula 10. Aula 09 fica com 9.1–9.5 + Quiz |
| Reordenar/numerar checks | `l9-check-1..6` conforme §9; remover o check-2 duplicado "Ativar aba" da strip da FASE 0 |
| Inserir screenshots reais | `<img src="../../assets/img/excel/a9/image4.png">`, `image1`, `image6`, `image7` em 9.2; `image3`, `image12` em 9.4; `image14`, `image11`, `image8`, `image16`, `image5` em 9.5 — ordem §5, uma vez cada |
| Corrigir FASE 0 | "roteiro dos 6 passos"; contador dinâmico "X / 6" |

### 8.3 `assets/js/pdf-lessons.js` (lessonNum 9)

| Campo | Alteração |
|:--|:--|
| Seções 9.2 / 9.4 / 9.5 | `images: ['../../assets/img/excel/a9/image4.png','image1.png','image6.png','image7.png']` e demais na ordem §5 (substitui os atuais `a9/image3.jpg` etc.) |
| Remover seções 9.5/9.6/9.7 atuais (Variáveis/Condicionais/Loops) | Migram para a section lessonNum 10 (Aula 10) |
| Seções 9.0, 9.1, 9.3 | Manter `html:` com `mini-sheet`/`es-sheet-box`/`fun-highlight` |
| Texto 9.0 | "O caminho tem 7 passos" → "6 passos", lista alinhada a §6 |
| `chapter` | "AULA 09: MACROS & INTRODUÇÃO AO VBA — AVENTURA CAPIBERICA" |

### 8.4 FASE 0

- 🎯 Objetivo (história Macro × VBA).
- 🗺️ Roteiro numerado dos **6 passos** (chips, sem checkbox).
- 🏁 Resultado final (mensagem "Hello World" do Capiberica).
- ⚙️ Strip de preparação: somente `l9-check-1` (ler a história).
- ▶ Botão "Começar a Aula" (rola para `#l9-phase-1`) + contador.

---

## 9. Mapa de Checks Distribuídos (regra de ouro — 07/09/2026)

| Check | Passo | Posicionamento |
|:--|:--|:--|
| `l9-check-1` | 1 — Ler a história / planejar | Rodapé da FASE 0 |
| `l9-check-2` | 2 — Entender Macro × VBA | Fim do Tópico 9.1 |
| `l9-check-3` | 3 — Ativar a aba Desenvolvedor | Fim do Tópico 9.2 (junto da imagem 4) |
| `l9-check-4` | 4 — Gravar e testar a macro | Fim do Tópico 9.3 |
| `l9-check-5` | 5 — Abrir e navegar no VBE | Fim do Tópico 9.4 (junto da imagem 6) |
| `l9-check-6` | 6 — Escrever e executar a sub-rotina | Fim do Tópico 9.5 (junto da imagem 11/MsgBox) |

Gating sequencial via IIFE article-scoped (`l9-check`, ordem do DOM — mesma mecânica de `l8-check`).

---

## 10. Regras Obrigatórias (resumo para esta aula)

1. FASE 0 + roteiro numerado + checks distribuídos (nunca agrupados).
2. Imagens reais no PDF (campo `images` em paths relativos `../../assets/img/excel/a9/…`).
3. Ilustrações HTML reais no PDF via `html` renderizado como `<div class="pdf-html-illustration">`.
4. **Paráfrase obrigatória** do material do tutorial (§7) — sem cópia literal.
5. Imagens na ordem §5.

---

## 11. Validações

```
node --check assets/js/pdf-lessons.js
node /tmp/opencode/check-inline.js
# CSS balanceado: node -e "ler style.css; contar { }" -> 174/174
# Visual: abrir Aula 09, clicar nas fases, baixar PDF e conferir as 11 imagens na ordem + nenhum trecho literal do tutorial
```

---

## 12. Checklist de Validação (pós-implementação)

- [ ] 11 imagens do tutorial copiadas para `assets/img/excel/a9/` na ordem §5; 10 antigas removidas
- [ ] Fases reduzidas a 9.1–9.5 + Quiz (variáveis/condicionais/loops fora — foram para a Aula 10)
- [ ] FASE 0 anuncia "6 passos"; contador "X / 6"; check-2 duplicado removido
- [ ] `l9-check-1..6` distribuídos, um por fase, gatinho sequencial
- [ ] PDF Aula 09: 11 telas na ordem + `html` nas fases sem screenshot
- [ ] Nenhum parágrafo ≥ 8 palavras idêntico ao HTML da AulaOrigem (paráfrase)
- [ ] Quiz de fixação (5 perguntas) funciona
- [ ] `node --check assets/js/pdf-lessons.js` → OK

---

## 13. Status

**Criado em:** 11/09/2026 (adaptado da versão 09/10 unificada após decisão de dividir em Aula 09 base + Aula 10 avançada).
**Status:** SDD entregue para revisão — implementação pendente.
**Próximo passo:** revisão do professor → implementar §8 rodando §11 → criar a **Aula 10** (ver `Docs/SDD-AULA-10-VBA-AVANCADO.md`) → atualizar `Docs/SPEC-EXCEL-MASTER.md` (Aula 09 = base; Aula 10 = VBA avançado; Aulas 11–13 = Projeto Vendas) → atualizar `Docs/CONTINUACAO.md` e `AGENTS.md`.