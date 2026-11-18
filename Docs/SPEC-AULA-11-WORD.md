# 📘 SPEC-AULA-11-WORD — Especificação Técnica e Pedagógica da Aula 11 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 🟢 IMPLEMENTADA E VALIDADA (18/11/2026)

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/AULA 11 - REVISÃO FINAL DO MICROSOFT WORD 2010/AULA11REVISOFINALDOMICROSOFTWORD2010.html` | 37.998 bytes | **Apostila original da aula** — Mapa geral de atalhos e menus, criação e formatação de tabelas completas, 3 oficinas de revisão e preparação para a prova final |

### 1.2 Estrutura do Conteúdo Original
1. **O Grande Mapa de Atalhos e Guias do Word**:
   - Consolidação de todos os comandos de atalhos rápidos do Word em Português.
   - O papel de cada uma das 7 guias essenciais da Faixa de Opções (Página Inicial, Inserir, Layout da Página, Referências, Correspondências, Revisão e Exibição).
2. **Criação e Formatação Profissional de Tabelas**:
   - Inserção de tabela: Guia `Inserir` > `Tabela` (matriz de colunas x linhas).
   - As guias contextuais **Ferramentas de Tabela**:
     - *Design*: Estilos prontos, sombreamento de cabeçalho, bordas personalizadas (espessura e cor).
     - *Layout*: Inserir linhas acima/abaixo, inserir colunas à esquerda/direita, mesclar células, dividir células, ajustar altura/largura e alinhar dados em 9 posições internas (Superior/Centro/Inferior x Esquerda/Centro/Direita).
   - Alinhamento profissional de tabelas: Textos alinhados à esquerda; Números e valores monetários alinhados à direita; Cabeçalhos centralizados em negrito.
3. **Oficinas Práticas de Consolidação**:
   - *Oficina 1*: Placa comercial com formas, Clip-Art e moldura de página.
   - *Oficina 2*: Formatação ABNT integral de notícia científica da NASA sobre buracos negros.
   - *Oficina 3*: Tabela comercial de controle de produtos (4 colunas x 6 linhas, cabeçalho sombreado, mesclagem e linha de total geral somando R$ 696,00).

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 11: Revisão Geral Integrada & Tabelas Profissionais** |
| **Subtítulo** | *Tabelas avançadas (mesclagem e bordas), mapa geral de atalhos e simulado preparatório* |
| **ID da Seção no Portal** | `<section id="screen-lesson-11" class="screen-view">` |
| **Senha de Acesso** | `wk011` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l11-check-1` a `l11-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-11`, `#gamify-label-11` (0% a 100%), `#gamify-badge-box-11` |
| **Persistência LocalStorage** | Leitura: `word_lesson_11_progress` \| Quiz: `word_lesson_11_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Consolidar 100% dos conhecimentos do Módulo Word antes da Avaliação Final: dominar a criação e formatação estética de tabelas (linhas, colunas, sombreamento e alinhamentos), revisar o mapa mental de menus e atalhos, e executar as oficinas práticas integradas.
- **Roteiro em 5 Passos (Chips)**:
  1. Revisar o mapa mestre de atalhos e as 7 guias da Faixa de Opções.
  2. Inserir uma tabela e dominar as guias contextuais Design e Layout.
  3. Praticar a Mesclagem de células e os 9 alinhamentos de texto interno.
  4. Aplicar sombreamento de cabeçalho, bordas visíveis e alinhamento numérico à direita.
  5. Concluir o simulado de revisão para liberação da Prova Final.
- **Contador**: `#l11-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l11` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: O Mapa Geral da Faixa de Opções e Atalhos
- Resumo visual de onde está cada comando:
  - `Página Inicial`: Fontes, Alinhamentos, Espaçamento, Estilos e Pincel.
  - `Inserir`: Tabelas, Imagens, Formas, Cabeçalho/Rodapé, Quebra de Página e Letra Capitular.
  - `Layout da Página`: Margens ABNT, Orientação, Tamanho A4, Colunas e Quebras de Seção.
  - `Referências`: Sumário Automático, Legendas e Índice de Ilustrações.
  - `Revisão`: Ortografia (F7), Sinônimos (Shift+F7), Comentários e Controlar Alterações.
  - `Exibição`: Régua horizontal e Zoom.
- *Check 1*: `[ ] Passo 1: Revisei o mapa de localização das 7 guias e a tabela completa de atalhos do Word.`

### FASE 2: Inserção de Tabelas e as Guias Contextuais
- Como criar: Guia `Inserir` > botão `Tabela` > selecionar uma grade de 4 colunas por 6 linhas.
- A mágica das guias contextuais: Quando o cursor está dentro da tabela, surgem duas novas guias douradas no topo da tela: **Ferramentas de Tabela: Design** e **Layout**. Se clicar fora da tabela, elas somem!
- Adicionando linhas e colunas: Guia `Layout` > grupo Linhas e Colunas > *Inserir Acima*, *Inserir Abaixo*, *Inserir à Esquerda*, *Inserir à Direita*.
- *Check 2*: `[ ] Passo 2: Inseri uma tabela de 4x6 e explorei as guias contextuais Design e Layout.`

### FASE 3: Mesclagem de Células e os 9 Alinhamentos
- O que é mesclar: Unir duas ou mais células adjacentes em uma única célula contínua (essencial para títulos de tabelas ou linhas de total).
  - Como fazer: Selecionar as células desejadas > Guia `Layout` > botão **Mesclar Células**.
- O segredo dos 9 alinhamentos:
  - Células de tabela possuem altura e largura. Na guia `Layout`, o grupo *Alinhamento* oferece 9 botões: Superior Esquerdo, Centro Superior, Superior Direito, Centralizado à Esquerda, **Centralizado no Meio**, Centralizado à Direita, etc.
- *Check 3*: `[ ] Passo 3: Mesclei células para criar a linha de total e ajustei o alinhamento centralizado.`

### FASE 4: Sombreamento, Bordas e Alinhamento Numérico Profissional
- Regra de ouro da estética de tabelas:
  - **Cabeçalho**: Deve ter cor de fundo destacada (Guia `Design` > *Sombreamento* azul escuro ou cinza), texto em **Negrito** e cor contrastante (branco sobre fundo escuro).
  - **Alinhamento de Dados**:
    - Descrição / Nomes de produtos: Alinhados à **Esquerda**.
    - Quantidades e Códigos: **Centralizados**.
    - Preços e Valores em R$: Alinhados rigorosamente à **Direita** (para que as vírgulas dos centavos fiquem perfeitamente alinhadas verticalmente).
- *Check 4*: `[ ] Passo 4: Apliquei sombreamento no cabeçalho, bordas completas e alinhei valores numéricos à direita.`

### FASE 5: Simulado Final de Revisão Geral
- A última etapa prática: Revisar todos os pontos críticos que serão cobrados na Prova Final do Módulo:
  - Formato de papel (A4) e margens ABNT (3-3-2-2).
  - Atalhos do Word (Ctrl+S salvar, Ctrl+B negrito, Ctrl+U sublinhado, Ctrl+A selecionar tudo, Ctrl+J justificar, Ctrl+R alinhar à direita).
  - Quebra de seção para desvincular cabeçalhos.
  - Estilos Título 1 e Título 2 para alimentar o Sumário Automático.
- *Check 5*: `[ ] Passo 5: Concluí o simulado de revisão e estou 100% preparado para a Avaliação Final.`

---

## 📝 4. Exercício de Fixação da Aula 11 (`QUIZ_CFG[11]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **Em uma tabela do Word, como se chama o recurso utilizado para unir duas ou mais células em uma única célula maior?**
   - a) Dividir Tabela.
   - b) Mesclar Células. *(Correta)*
   - c) Ocultar Coluna.
   - d) Agrupar Formas.
   - *Dica*: 'Mesclar' funde as células selecionadas em um único espaço contínuo.
2. **Qual é a prática recomendada de alinhamento visual para colunas que contêm PREÇOS e VALORES MONETÁRIOS em uma tabela?**
   - a) Alinhamento Justificado.
   - b) Alinhar à Direita. *(Correta)*
   - c) Alinhar à Esquerda.
   - d) Letra Capitular.
   - *Dica*: Alinhar à direita garante que as casas decimais e centavos fiquem em colunas retas.
3. **O que acontece na Faixa de Opções do Word quando você clica com o cursor DENTRO de uma tabela inserida?**
   - a) Todas as ferramentas são desativadas.
   - b) Surgem duas guias contextuais exclusivas: Ferramentas de Tabela (Design e Layout). *(Correta)*
   - c) O documento é salvo automaticamente como PDF.
   - d) A régua é ocultada.
   - *Dica*: As guias contextuais de tabela só aparecem quando você está interagindo com uma tabela.
4. **Qual atalho do teclado deve ser usado para REFAZER uma ação que foi desfeita pelo Ctrl+Z?**
   - a) `Ctrl + Y` *(Correta)*
   - b) `Ctrl + X`.
   - c) `Ctrl + P`.
   - d) `Ctrl + B`.
   - *Dica*: O par clássico da edição é Ctrl+Z (desfazer) e Ctrl+Y (refazer).
5. **Em qual ferramenta da guia Design de Tabela você pode aplicar uma cor de fundo personalizada em uma linha ou célula selecionada?**
   - a) Estilos de Borda.
   - b) Sombreamento (balde de tinta). *(Correta)*
   - c) Espaçamento entre Linhas.
   - d) Efeitos de Texto.
   - *Dica*: O balde de sombreamento colore o fundo interno da célula.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 11`:
- **Seção 11.1**: *O Mapa Geral de Ferramentas e Atalhos do Word 2010/2016/365*
  - Tabela sintética consolidada de todos os atalhos essenciais em português.
- **Seção 11.2**: *Engenharia e Formatação Avançada de Tabelas*
  - Ilustração HTML (`sec.html`): Mini-tabela comercial estilizada de 4 colunas x 6 linhas com cabeçalho azul sombreado, linhas zebradas e linha de Total destacada em negrito somando R$ 696,00.
- **Seção 11.3**: *Boas Práticas de Diagramação Tabular Corporativa*
  - Recomendações de tipografia, alinhamento de números à direita e mesclagem de células.
- **Seção 11.4**: *Guia de Preparação e Checklist para a Avaliação Final*
  - Roteiro de autoavaliação do aluno antes de iniciar a Prova Final do Módulo.

---

## ✅ 6. Registro de Implementação (18/11/2026)

- **Tela**: `#screen-lesson-11` em `modules/word/index.html`, com FASE 0 (objetivo + roteiro numerado de 5 passos + checagens distribuídas no fim de cada fase), 5 fases, 6 simuladores (`l11Guide`, `l11Table`, `l11Merge`, `l11Align`, `l11Style`, `l11Review`), fixação e resultado.
- **Registro/roteamento**: `PASSWORDS[11]="wk011"`, `moduleLessonTitles.word[11]`, `11: "screen-lesson-11"`, `TOTAL_TOPICS[11]=5`, `SEQUENTIAL_LESSONS[11]=true`, loops estendidos até 11.
- **Quiz**: `QUESTIONS_LESSON_11` + `QUIZ_CFG[11]` (`word_lesson_11_quiz`), gabarito `[1,1,1,0,1]` — Q4 = `Ctrl + Y` (Refazer). Persistência via handlers genéricos (`persistQuizGen`/`restoreQuizGen`/`restartQuizGen`).
- **Apostila**: 4 seções `lessonNum: 11` (11.1–11.4) em `assets/js/pdf-lessons.js`, todas com `sec.html` ilustrado. Tabela comercial 4×6 com `TOTAL GERAL R$ 696,00` (144+108+296+148). Material de origem sem imagens (`AULA11REVISOFINALDOMICROSOFTWORD2010.html`): ilustrações HTML reais no lugar de referências de imagem.
- **Correções de atalhos (pedido explícito)**: `Ctrl+Q` removido de HTML/PDF/SPECs/Prova Final; alinhamento à direita = `Ctrl+R`; `Ctrl+G` mantido só como distraidor (SPEC 02) e em nota correta da Aula 4 ("no Word, Ctrl+G abre Ir Para").
- **Auditoria de conteúdo (regra 12 do AGENTS.md)**: corrigidos `where`→`Onde`, "voltee"→"volte", `Dominio`→`Domino`, e atribuições de aulas nos blocos de revisão (item 5 → Aulas 07 e 11; BLOCO 3 → 05–09). Nenhum `JSTOR`, data vencida ou erro de unidade.
- **Validações**: `node --check assets/js/pdf-lessons.js` OK; script inline do HTML OK (1 script, 0 erros); 795 IDs sem duplicatas, 46 IDs obrigatórios presentes; 4 seções PDF com `html`. Bateria CDP não executada (sem navegador automatizado no ambiente). Nenhum commit realizado.
