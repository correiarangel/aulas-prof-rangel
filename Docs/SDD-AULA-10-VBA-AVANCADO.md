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

| Alteração | Detalhe |
|:--|:--|
| Bloco novo da Aula 10 | Mensagem de bloqueio com senha `xj010` → conteúdo `l10-unlock`; fases `l10-phase-0..5`; checks `l10-check-1..6` |
| Conteúdo | Migrar as antigas 9.5/9.6/9.7 (Variáveis/Condicionais/Loops) reescritas (§5) + nova fase 10.1 (objetos, imagens 12–16) + 10.5 (mini-projeto) |
| FASE 0 | Revisão-relâmpago da 09 + roteiro dos 6 passos + contador "X / 6" + `l10-check-1` |
| Navegação | Inserir a Aula 10 no seletor/menu do módulo (agora aulas 1–10) + senha `xj010` |

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
- 🗺️ Roteiro numerado dos **6 passos** (chips).
- 🏁 Resultado final (mini-projeto com MsgBox).
- ⚙️ Preparação: apenas `l10-check-1`.
- ▶ Botão "Começar a Aula" rolando para `#l10-phase-1`.

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
node /tmp/opencode/check-inline.js
# CSS balanceado (cada abertura/ fechamento { })
# Visual: abrir Aula 10 no navegador com senha xj010, percorrer as fases, baixar PDF 10 e conferir: 5 imagens na ordem §4 + html nas demais + nenhum trecho literal do tutorial
# Conferir que a Aula 09 (SDD-09) continua íntegra e sem os tópicos migrados
```

---

## 11. Checklist de Validação (pós-implementação)

- [ ] 5 imagens copiadas para `assets/img/excel/a10/` (configuração nova `a10`)
- [ ] Bloco Aula 10 funcional no site (senha `xj010`, fases `l10-phase-0..5`)
- [ ] Migradas e reescritas: Variáveis (10.2), Condicionais (10.3), Loops (10.4) + nova Objetos (10.1) + Mini-projeto (10.5)
- [ ] FASE 0 com revisão-relâmpago da 09 + roteiro "6 passos" + contador "X / 6"
- [ ] `l10-check-1..6` distribuídos, um por fase, gatinho sequencial
- [ ] PDF Aula 10: 5 telas na ordem §4 + `html` nas fases sem screenshot; screenshots não repetidos
- [ ] Nenhum parágrafo ≥ 8 palavras idêntico ao HTML da AulaOrigem (paráfrase)
- [ ] Quiz de fixação (5 perguntas) funciona
- [ ] `node --check assets/js/pdf-lessons.js` → OK

---

## 12. Dependências & Integração

- **Bloco por**: só implementar após a Aula 09 (SDD-09) estar no ar — a FASE 0 referencia a revisão dela.
- **Espec mestre**: atualizar `Docs/SPEC-EXCEL-MASTER.md` — Aula 10 deixa de ser "Revisão Geral & Preparatório" e vira **VBA Avançado (continuação da Aula 09)**; Aulas 11–13 seguem Projeto Vendas (SPC). Manter senha `xj010`.
- **Continuidade**: registrar em `Docs/CONTINUACAO.md` e reforçar regra antiplágio em `AGENTS.md` ao implementar.

---

## 13. Status

**Criado em:** 11/09/2026.
**Status:** SDD entregue para revisão — implementação pendente.
**Próximo passo:** revisão do professor → implementar §8 rodando §10 → atualizar `SPEC-EXCEL-MASTER.md` → atualizar `Docs/CONTINUACAO.md` e `AGENTS.md`.