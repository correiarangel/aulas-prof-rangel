### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 🟡 **A FAZER** (baseado no material de origem) — Aula 06: WordPad — Editor de Texto do Windows
### Padrão: seguir rigorosamente `Docs/SPEC-AULA-05-WINDOWS.md`, regras do `AGENTS.md` e práticas já validadas nas Aulas 01–05

---

## 1. Análise da Base de Informação (material de origem)

### 1.1 Arquivos analisados

| Arquivo | Papel |
|:---|:---|
| `AulaOrigem/windows/Aula 6 - WordPad/Aula6WordPad.html` | Apostila de origem (Google Docs export HTML), ~46 KB. Contém todo o conteúdo didático, tabelas, listas e as referências às imagens. |
| `AulaOrigem/windows/Aula 6 - WordPad/images/image1.png` ... `image8.png` | 8 capturas de tela reais do WordPad (janela aberta, ícone, faixa de opções "Página Inicial", grupos "Fonte"/"Parágrafo", menu Arquivo e janela "Abrir/Salvar"). |

### 1.2 Título e rótulos

- **Título no hub (card):** `Aula 06: WordPad — Editor de Texto do Windows`
- **Entrada via `promptLessonPassword`:** `WordPad — Editor de Texto do Windows`
- **Título no PDF (`moduleLessonTitles.windows[6]`):** `Aula 06: WordPad — Editor de Texto do Windows`
- **Senha candidata:** `wr0626` (aguardar confirmação com o professor)

### 1.3 Conteúdo extraído da origem

A aula aborda:

| Bloco | Descrição |
|:---|:---|
| **1. O que é o WordPad?** | Definição: editor de texto básico que acompanha o Windows gratuitamente. Diferença em relação ao Bloco de Notas e ao Microsoft Word. Principais características. |
| **2. Como abrir o WordPad** | Windows 7: `Iniciar → Todos os Programas → Acessórios → WordPad`. Windows 10/11: `Menu Iniciar → digitar "WordPad" → Enter`. |
| **3. Comandos do menu / Faixa de Opções** | Apresentação da faixa de opções (Ribbon). **Guia Página Inicial:** Área de Transferência (Recortar/Copiar/Colar), Fonte (tipo, tamanho, Negrito/Itálico/Sublinhado, Tachado, Sobrescrito/Subscrito, Cor do texto, Realce), Parágrafo (Alinhamento, Marcadores, Recuo, Espaçamento entre linhas). **Guia Inserir:** noções gerais. **Guia Exibir:** Régua, Unidades, Quebra de linha, Zoom. **Menu Arquivo:** Novo, Abrir, Salvar, Salvar como, Imprimir, Configurar página. |
| **4. Diferenças entre "Salvar" e "Salvar Como"** | Comparativo claro: `Salvar (Ctrl+S)` atualiza o arquivo existente. `Salvar Como (F12)` cria cópia/permite trocar nome, pasta ou formato (.RTF / .DOCX / .ODT / .TXT). |
| **5. Exercício 1 – Relatório do PC** | Coleta de informações: `Este Computador/Meu Computador → Propriedades` (Processador, RAM, Tipo de sistema), `Este Computador` (espaço em disco C:), `Win + R → cmd → ipconfig` (IPv4). Montar relatório com cabeçalho, seções e formatação básica. |
| **6. Exercício 2 – Criação de estrutura de pastas** | Criar em `Documentos` uma pasta com `[Nome-Sobrenome]` e subpastas: `Word`, `Windows`, `Excel`, `PowerPoint`, `Internet`. Aplicação prática de criação/organização. |
| **7. Salvando e imprimindo (simulação)** | Salvar em `Documentos\[Nome-Sobrenome]\Windows\` com nome `relatório aula - 6` nos formatos sugeridos. Simular impressão via `Arquivo → Imprimir` e cancelar. |

---

## 2. Objetivos da Aula

Ao final desta aula, o aluno deverá ser capaz de:

- Identificar o WordPad, suas finalidades e diferenças em relação ao Bloco de Notas e ao Microsoft Word;
- Abrir o WordPad nas versões Windows 7, 10 e 11;
- Identificar e utilizar os principais grupos da guia "Página Inicial" (Transferência, Fonte e Parágrafo);
- Utilizar os comandos das guias "Inserir", "Exibir" e do "Menu Arquivo";
- Diferenciar corretamente `Salvar` e `Salvar Como`, aplicando o atalho adequado;
- Criar um relatório simples, aplicando formatação básica (negrito, alinhamento, listas);
- Obter informações do sistema via `Propriedades` e `ipconfig`;
- Criar pastas e organizar arquivos em uma estrutura padronizada;
- Salvar documentos nos formatos compatíveis com o WordPad.

---

## 3. Mapeamento de Imagens (Tela x PDF)

As imagens reais devem ser copiadas para `assets/img/windows/Aula6/` com os mesmos nomes `image1.png` ... `image8.png`.

| Imagem | Uso sugerido | Legenda (para tela + PDF) |
|:---|:---|:---|
| `image5.png` | Capa/abertura da aula (FASE 0 / 6.0) | `WordPad aberto com a Faixa de Opções visível.` |
| `image3.png` | Como abrir / ícone | `Ícone do WordPad.` |
| `image6.png` | Guia "Página Inicial" | `Faixa de Opções do WordPad — Guia Página Inicial.` |
| `image2.png` | Grupos "Fonte" / "Parágrafo" | `Grupos Fonte e Parágrafo na guia Página Inicial.` |
| `image7.png` | Visão geral da faixa / detalhamento | `Principais comandos da Faixa de Opções do WordPad.` |
| `image8.png` | Exercício / layout prático | `Aplicando formatação no WordPad.` |
| `image4.png` | Menu Arquivo | `Botão Arquivo (Menu WordPad).` |
| `image1.png` | Menu Arquivo aberto | `Menu Arquivo do WordPad com os comandos Novo, Abrir, Salvar, Salvar como e Imprimir.` |

**Regra:** Nunca usar texto do tipo "🖼️ Referência de imagem: ...". As ilustrações reais devem ir no `sec.html` das seções do PDF, utilizando as classes `.mini-sheet`, `.fun-highlight`, `.es-sheet-box`, `.es-sheet-titlebar` quando cabível.

---

## 4. Estrutura da Aula no Portal (`modules/windows/index.html`)

Seguir o mesmo molde das Aulas 04/05:

| Elemento | Especificação |
|:---|:---|
| **ID da tela** | `screen-lesson-6` |
| **FASE 0** | `#l6-fase-0` com `check-read-6-1`. Incluir: Objetivo, Roteiro numerado em **passo a passo** (8 passos) e *"Ao concluir cada etapa, marque o quadradinho correspondente para liberar a próxima fase."* |
| **Fases** | `#l6-phase-1` até `#l6-phase-8` com `class="topic-phase-section"` |
| **Abas** | `<nav class="topic-tabs-bar">` com `tab-btn-6-1` ... `tab-btn-6-8` + `tab-btn-6-fix` apontando para `openFixationPanel(6)` |
| **Checks distribuídos** | `check-read-6-1` a `check-read-6-9` → `TOTAL_TOPICS[6] = 9` |
| **Gating sequencial** | `SEQUENTIAL_LESSONS[6] = true` |
| **Leitura + gamificação** | Integrar com `paintReadLesson(6)`, barra de progresso e badge "LEITURA COMPLETA!" |
| **Quiz** | `QUESTIONS_LESSON_6` com **5 questões × 4 alternativas**. `QUIZ_CFG[6]` com `moduleId: "windows-aula-6"`, `title: "Módulo 1 — Aula 6: WordPad — Editor de Texto do Windows"`, `sig: "Módulo 1 - Aula 6 (Windows)"`. |
| **Persistência** | Seguir Regra 7: gravar/restaurar com `QuizEngine.saveState/loadState`, manter "↺ Recomeçar o exercício" limpando a chave `windows-aula-6:<nome>`. |
| **Hub** | Atualizar card "Aula 06" para **ativo** com `badge-lesson-6` `"🟢 Disponível"`, `onclick="promptLessonPassword(6, 'WordPad — Editor de Texto do Windows')"` e ícone condizente. |
| **Rotas/Gates** | Incluir `6: "screen-lesson-6"` em `showScreen`, adicionar `PASSWORD_A6 = "wr0626"` (candidata) ao gate de senhas, somar `6` em `OPEN_LESSONS` e em `[1,2,3,4,5,6,7,71,81]` onde aplicável. |

### Sugestão de divisão por fases

| Fase | Título | Conteúdo | Check |
|:---|:---|:---|:---|
| **FASE 0** | `FASE 0 – Apresentação da Aula` | Objetivo + Roteiro (9 passos) | `check-read-6-1` |
| **FASE 1** | `1. O que é o WordPad?` | Conceito, diferenças vs Bloco de Notas x Word, características. *(image5)* | `check-read-6-2` |
| **FASE 2** | `2. Abrindo o WordPad` | Windows 7 x Windows 10/11. *(image3)* | `check-read-6-3` |
| **FASE 3** | `3. Faixa de Opções – Página Inicial` | Área de Transferência, Fonte, Parágrafo. Atalhos `Ctrl+C/X/V`, `Ctrl+B/I/U`. *(image6, image2, image7)* | `check-read-6-4` |
| **FASE 4** | `4. Inserir, Exibir e Menu Arquivo` | Guias Inserir/Exibir + comandos do Menu Arquivo. *(image4, image1)* | `check-read-6-5` |
| **FASE 5** | `5. Salvar x Salvar Como` | Comparativo com exemplos práticos. Ênfase em `.RTF`, `.DOCX`, `.TXT`. | `check-read-6-6` |
| **FASE 6** | `6. Exercício Prático – Relatório do PC` | Coleta via Propriedades + `ipconfig`, preenchimento do modelo, formatação. *(image8)* | `check-read-6-7` |
| **FASE 7** | `7. Organizando pastas e salvando o relatório` | Estrutura `Documentos\[Nome-Sobrenome]\{Word,Windows,Excel,PowerPoint,Internet}`, salvar `relatório aula - 6`, simular impressão. | `check-read-6-8` |
| **FASE 8** | `8. Fixação e Revisão` | Recapitulação + botão "Ir para Exercícios de Fixação" → `openFixationPanel(6)`. | `check-read-6-9` |

---

## 5. Apostila PDF (`assets/js/pdf-lessons.js`)

Adicionar as seções com `lessonNum: 6` no módulo `windows`, entre a última seção `lessonNum: 5` e a primeira `lessonNum: 7`.

| Seção | Título | Observações |
|:---|:---|:---|
| `6.0` | `FASE 0 – Apresentação da Aula 06: WordPad — Editor de Texto do Windows` | Objetivo + roteiro numerado. |
| `6.1` | `6.1 O que é o WordPad?` | Conceito e características. Incluir `image5`. |
| `6.2` | `6.2 Como abrir o WordPad (Windows 7, 10 e 11)` | Tabela com caminhos. Incluir `image3`. |
| `6.3` | `6.3 Faixa de Opções – Guia Página Inicial` | Tabelas: Área de Transferência, Fonte, Parágrafo. Incluir `image6`, `image2`, `image7`. |
| `6.4` | `6.4 Inserir, Exibir e Menu Arquivo` | Comandos principais. Incluir `image4`, `image1`. |
| `6.5` | `6.5 Diferenças entre "Salvar" e "Salvar Como"` | Tabela comparativa lado a lado. |
| `6.6` | `6.6 Exercício Prático – Relatório do PC` | Passo a passo + modelo preenchível. Incluir `image8`. |
| `6.7` | `6.7 Criando a estrutura de pastas e salvando o arquivo` | Árvore de pastas + orientações de salvamento. |
| `6.8` | `6.8 Revisão e Fixação` | Resumo prático com os pontos-chave. |

- **Imagens:** utilizar paths relativos `../../assets/img/windows/Aula6/imageX.png`
- **Ilustrações:** onde couber, usar `sec.html` com classes existentes (`.mini-sheet`, `.fun-highlight`, `.es-sheet-box`, `.es-sheet-titlebar`)
- **Sem placeholders:** Proibido "🖼️ Referência de imagem: ..."
- **Títulos consistentes:** manter coerente com `moduleLessonTitles.windows[6]`
- **Cobertura:** garantir que as 8 imagens reais apareçam nas seções corretas (sem deixar seções puramente textuais quando houver ilustração na origem)

---

## 6. Quiz da Aula 06 (sugestão de gabarito)

Elaborar **5 questões** com **4 alternativas (A-D)**, baseadas no conteúdo da origem:

| Nº | Enunciado (sugerido) | Gabarito |
|:---|:---|:---|
| **1** | O WordPad é considerado um editor: | **B)** Intermediário entre o Bloco de Notas e o Microsoft Word |
| **2** | Para abrir o WordPad no Windows 10/11, o caminho mais prático é: | **C)** Digitar "WordPad" no Menu Iniciar e pressionar Enter |
| **3** | Qual comando atualiza um arquivo já existente, sem abrir a janela "Salvar como"? | **A)** Salvar (Ctrl+S) |
| **4** | Para criar uma cópia com outro nome, local ou formato, deve-se utilizar: | **D)** Salvar como (F12) |
| **5** | Qual comando do Prompt (CMD) permite visualizar o endereço IPv4 da máquina? | **B)** `ipconfig` |

*(Validar com o material exato durante a implementação. Priorizar questões que realmente foram vistas na aula.)*

---

## 7. Checklist de Implementação

- [ ] Copiar `image1.png`–`image8.png` para `assets/img/windows/Aula6/`
- [ ] Criar `screen-lesson-6` em `modules/windows/index.html` (FASE 0 + 8 fases, 9 checks)
- [ ] Atualizar hub, rotas, `OPEN_LESSONS`, `TOTAL_TOPICS[6]=9`, `SEQUENTIAL_LESSONS[6]=true`
- [ ] Adicionar `PASSWORD_A6="wr0626"`, `QUESTIONS_LESSON_6`, `QUIZ_CFG[6]`
- [ ] Adicionar 9 seções com `lessonNum: 6` em `assets/js/pdf-lessons.js` + `moduleLessonTitles.windows[6]`
- [ ] Garantir persistência de leitura e quiz (Regra 7)
- [ ] Validar com `node --check assets/js/pdf-lessons.js` e checagem do script inline
- [ ] Testar estrutura/gating/quiz/PDF via harness CDP
- [ ] Conferir mobile (sem overflow horizontal)
- [ ] Aprovação visual humana (tela + PDF) antes de considerar concluída

---

## 8. Referências

- `Docs/SPEC-AULA-05-WINDOWS.md` — Padrão-base utilizado para esta spec
- `AGENTS.md` — Regras obrigatórias (FASE 0, checks distribuídos, imagens reais no PDF, regras mobile, persistência, etc.)
- `Docs/CONTINUACAO.md` — Histórico e pendências
- `AulaOrigem/windows/Aula 6 - WordPad/` — Material fonte único
