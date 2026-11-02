# 📘 SPEC-AULA-02-WORD — Especificação Técnica e Pedagógica da Aula 02 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 🟢 IMPLEMENTADA E VALIDADA COM 34 TESTES CDP (29/10/2026)

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 2 Word_ABNT/Aula2Word_ABNT.html` | 45.336 bytes | **Apostila original da aula** — Regras completas de ABNT, tabelas de medidas, exercícios de duas colunas e capitular |

### 1.2 Estrutura do Conteúdo Original
1. **O que é a ABNT?**: Associação Brasileira de Normas Técnicas, responsável pela padronização de trabalhos acadêmicos, relatórios e documentos oficiais no Brasil.
2. **Quadro-Resumo das Medidas Obrigatórias**:
   - **Margens**: Superior: 3 cm | Esquerda: 3 cm | Inferior: 2 cm | Direita: 2 cm (regra mnemônica "3-3-2-2").
   - **Fonte**: Arial ou Times New Roman (uma única família em todo o documento).
   - **Tamanho da Fonte**: 12 para o corpo do texto; 14 (em Negrito) para Títulos principais; 10 para notas de rodapé e citações longas.
   - **Alinhamento**: Justificado (`Ctrl + J`) em todo o corpo de texto para alinhar perfeitamente ambas as margens.
   - **Espaçamento entre Linhas**: 1,5 linha.
   - **Recuo de Parágrafo**: 1,25 cm na primeira linha.
3. **Numeração de Páginas**: Inserida no canto superior direito (ou inferior direito), iniciando a contagem nos elementos pré-textuais e exibindo o número nos textuais.
4. **Elementos Visuais e Editoriais**:
   - **Inserção de Imagem com Quebra de Texto**: Usar opção "Quadrado" ou "Justo" para o texto contornar a figura de forma fluida.
   - **Texto em Duas Colunas**: `Layout da Página` > `Colunas` > `Duas` (muito usado em artigos científicos e resumos expandidos).
   - **Letra Capitular**: `Inserir` > `Letra Capitular` (destaque visual clássico na primeira letra do parágrafo inicial).
5. **Exercícios de Fixação**: Produção de artigo curto em 2 colunas com imagem centralizada e capitular.

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 02: Normas ABNT & Formatação Básica de Trabalhos** |
| **Subtítulo** | *Margens 3-3-2-2, espaçamento 1,5, recuo 1,25 cm, duas colunas e letra capitular* |
| **ID da Seção no Portal** | `<section id="screen-lesson-2" class="screen-view">` |
| **Senha de Acesso** | `wb002` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l2-check-1` a `l2-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-2`, `#gamify-label-2` (0% a 100%), `#gamify-badge-box-2` |
| **Persistência LocalStorage** | Leitura: `word_lesson_2_progress` \| Quiz: `word_lesson_2_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Aprender a configurar um documento do zero dentro dos padrões rigorosos da ABNT, eliminando erros comuns de formatação que reprovam trabalhos acadêmicos e relatórios profissionais.
- **Roteiro em 5 Passos (Chips)**:
  1. Configurar as Margens da página na regra "3-3-2-2 cm".
  2. Padronizar a Fonte (Arial/Times tamanho 12) e Títulos em tamanho 14.
  3. Formatar o Parágrafo: Justificado, entrelinhas 1,5 e recuo de 1,25 cm.
  4. Inserir imagens com Quebra de Texto Automática ("Quadrado").
  5. Aplicar formatação editorial em Duas Colunas e Letra Capitular.
- **Contador**: `#l2-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l2` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: O Que é a ABNT e a Regra de Ouro das Margens 3-3-2-2
- Por que a ABNT existe: evitar poluição visual, garantir conforto de leitura e permitir encadernação sem cortar texto.
- Como configurar as margens no Word:
  - Guia `Layout da Página` (ou `Layout`) > botão `Margens` > `Margens Personalizadas...`.
  - Superior: `3 cm` | Esquerda: `3 cm` | Inferior: `2 cm` | Direita: `2 cm`.
  - Explicação prática: As margens esquerda e superior são maiores (3 cm) porque a folha é perfurada ou encadernada do lado esquerdo!
- *Check 1*: `[ ] Passo 1: Configurei as margens personalizadas em 3cm (superior/esquerda) e 2cm (inferior/direita).`

### FASE 2: Tipografia Acadêmica — Fonte e Hierarquia de Tamanhos
- Regras oficiais da ABNT para tipos de letra:
  - Permitidas apenas fontes sóbrias: **Arial** ou **Times New Roman**.
  - Tamanho padrão do corpo do texto: **12**.
  - Títulos principais: tamanho **14**, com destaque em **Negrito** (`Ctrl + N`).
  - Cor do texto: exclusivamente **Preto automático** (proibido textos coloridos em documentos acadêmicos).
- *Check 2*: `[ ] Passo 2: Padronizei a fonte do texto para Arial ou Times tamanho 12 e títulos em tamanho 14 negrito.`

### FASE 3: O Parágrafo Padrão ABNT (Justificado, 1,5 e 1,25 cm)
- Os três pilares inegociáveis do parágrafo:
  1. **Alinhamento Justificado (`Ctrl + J`)**: Margens esquerda e direita ficam uniformemente retas.
  2. **Espaçamento entre Linhas de 1,5**: Dá respiro à leitura e permite anotações do revisor.
  3. **Recuo Especial da Primeira Linha em 1,25 cm**: Na janela de Parágrafo (`Página Inicial` > seta no canto do grupo Parágrafo), selecionar *Especial: Primeira Linha*, por *1,25 cm*.
- *Check 3*: `[ ] Passo 3: Ajustei o parágrafo como Justificado, entrelinhas 1,5 e recuo de primeira linha de 1,25cm.`

### FASE 4: Inserção de Imagens e Quebra de Texto
- Inserindo imagem: Guia `Inserir` > `Imagem`.
- O problema comum: A imagem vem travada como "Alinhado com o texto", criando buracos em branco enormes na página.
- A solução profissional: Clicar no ícone de *Opções de Layout* (ou guia *Formatar* > *Quebra Automática de Texto*) e selecionar **Quadrado** ou **Justo**. Agora a imagem pode ser arrastada livremente e as palavras fluem ao redor dela.
- *Check 4*: `[ ] Passo 4: Mudei a quebra de texto da imagem para 'Quadrado' para permitir movimentação livre.`

### FASE 5: Recursos Editoriais — Duas Colunas e Letra Capitular
- **Divisão em Colunas**: Selecionar o texto > Guia `Layout da Página` > `Colunas` > selecionar `Duas`. O Word cria as quebras de seção contínuas automaticamente.
- **Letra Capitular**: Posicionar o cursor no primeiro parágrafo > Guia `Inserir` > grupo Texto > `Letra Capitular` > escolher `No texto`. A primeira letra ocupa 3 linhas de altura com visual de publicação de revista.
- *Check 5*: `[ ] Passo 5: Apliquei com sucesso o formato em 2 colunas e inseri a letra capitular no parágrafo.`

---

## 📝 4. Exercício de Fixação da Aula 02 (`QUIZ_CFG[2]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **De acordo com as normas da ABNT, quais devem ser as medidas padrão das MARGENS da folha?**
   - a) Superior 2 cm, Esquerda 2 cm, Inferior 3 cm, Direita 3 cm.
   - b) Superior 3 cm, Esquerda 3 cm, Inferior 2 cm, Direita 2 cm. *(Correta)*
   - c) Todas as quatro margens iguais a 2,5 cm.
   - d) Superior 4 cm e todas as outras 1 cm.
   - *Dica*: Lembre-se da regra "3-3-2-2": superior e esquerda recebem 3 cm para encadernação.
2. **Qual é o tamanho e estilo de fonte recomendado pela ABNT para o CORPO DO TEXTO?**
   - a) Comic Sans tamanho 14 itálico.
   - b) Arial ou Times New Roman tamanho 12. *(Correta)*
   - c) Calibri tamanho 16 negrito.
   - d) Impact tamanho 10 sublinhado.
   - *Dica*: ABNT aceita Arial ou Times New Roman tamanho 12 para leitura formal.
3. **Qual é o atalho de teclado para aplicar o alinhamento JUSTIFICADO no parágrafo?**
   - a) `Ctrl + J` *(Correta)*
   - b) `Ctrl + E`
   - c) `Ctrl + Q`
   - d) `Ctrl + G`
   - *Dica*: Pense na inicial da palavra 'Justificar' (J).
4. **Qual é o espaçamento entre linhas obrigatório no corpo do texto de um trabalho nas normas ABNT?**
   - a) Espaçamento Simples (1,0).
   - b) Espaçamento 1,5 linha. *(Correta)*
   - c) Espaçamento Duplo (2,0).
   - d) Espaçamento Triplo (3,0).
   - *Dica*: É a medida intermediária de uma linha e meia (1,5).
5. **Para fazer com que o texto de um documento contorne suavemente uma imagem inserida, qual opção de quebra de texto deve ser selecionada?**
   - a) Em linha com o texto.
   - b) Quadrado (ou Justo). *(Correta)*
   - c) Ocultar imagem.
   - d) Cortar imagem.
   - *Dica*: O modo 'Quadrado' faz o texto envolver a moldura da imagem.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 2`:
- **Seção 2.1**: *O que é a ABNT e por que Padronizar Documentos*
  - Contexto da norma e importância profissional.
- **Seção 2.2**: *Quadro Oficial de Margens e Dimensões (Regra 3-3-2-2)*
  - Ilustração HTML (`sec.html`): Mini-página desenhada com bordas demonstrando o recuo de 3 cm no topo e esquerda e 2 cm na base e direita com cotas dimensionais.
- **Seção 2.3**: *Tipografia e Formatação de Parágrafo*
  - Tabela com regras de fontes (12 pt corpo, 14 pt títulos, 10 pt citações longas), espaçamento 1,5 e recuo de 1,25 cm.
- **Seção 2.4**: *Diagramação Editorial: Duas Colunas e Letra Capitular*
  - Exemplo prático de artigo científico em duas colunas com destaque para letra capitular.
