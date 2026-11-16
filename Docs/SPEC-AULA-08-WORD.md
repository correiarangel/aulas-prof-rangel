# 📘 SPEC-AULA-08-WORD — Especificação Técnica e Pedagógica da Aula 08 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 📝 ESPECIFICADA E PRONTA PARA IMPLEMENTAÇÃO

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 8 Sumário Automático no Word/AULA8SumrioAutomticonoWord.html` | 25.917 bytes | **Apostila original da aula** — Conceito de sumário, estilos hierárquicos, inserção automática, atualização com F9 e índice de figuras |

### 1.2 Estrutura do Conteúdo Original
1. **O Que É um Sumário Acadêmico**:
   - Lista no início do trabalho que mapeia cada capítulo, divisão e a página exata correspondente.
   - O grande erro do iniciante: Tentar fazer o sumário digitando o título, enchendo de pontos com o teclado e digitando o número da página no final. O resultado fica torto, desalinhado e fica obsoleto na primeira edição do texto.
2. **A Dependência dos Estilos Hierárquicos**:
   - O recurso de Sumário Automático do Word consulta o mapa interno de estilos do documento:
     - **Título 1**: Capítulos principais (ex: `1 INTRODUÇÃO`, `2 REFERENCIAL TEÓRICO`).
     - **Título 2**: Seções secundárias (ex: `2.1 Definições Básicas`).
     - **Título 3**: Subseções (ex: `2.1.1 Classificação`).
3. **Passo a Passo da Criação**:
   - Deixar uma página em branco após os elementos pré-textuais.
   - Acessar a guia `Referências` > botão `Sumário` no canto esquerdo > selecionar *Sumário Automático 1* ou *2*.
4. **Atualização Dinâmica do Sumário (Tecla F9)**:
   - Se o documento sofrer alterações, basta clicar no sumário e clicar em **Atualizar Sumário** (ou pressionar `F9`):
     - *Atualizar apenas os números de página*: Atualiza a numeração quando novos textos foram inseridos.
     - *Atualizar o índice inteiro*: Reescaneia todos os títulos, incluindo novos tópicos ou exclusões.
5. **Hiperlinks Nativos e Navegação**:
   - No Word, qualquer linha do sumário automático funciona como hiperlink: segurar a tecla `Ctrl` e clicar no capítulo para navegar instantaneamente até a página dele.
6. **Índice de Ilustrações e Tabelas**:
   - Guia `Referências` > `Inserir Legenda` em cada foto ou gráfico > `Inserir Índice de Ilustrações`.

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 08: Sumário Automático & Índices de Ilustrações** |
| **Subtítulo** | *Estilos hierárquicos (Título 1/2), guia Referências, atualização com F9 e hiperlinks* |
| **ID da Seção no Portal** | `<section id="screen-lesson-8" class="screen-view">` |
| **Senha de Acesso** | `wh008` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l8-check-1` a `l8-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-8`, `#gamify-label-8` (0% a 100%), `#gamify-badge-box-8` |
| **Persistência LocalStorage** | Leitura: `word_lesson_8_progress` \| Quiz: `word_lesson_8_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Dominar a criação do Sumário Automático oficial no Word, acabando de uma vez por todas com a digitação manual de pontinhos, e aprendendo a atualizar páginas instantaneamente com a tecla F9.
- **Roteiro em 5 Passos (Chips)**:
  1. Marcar a hierarquia de todos os capítulos com Estilos (Título 1 e Título 2).
  2. Inserir o Sumário Automático oficial pela Guia Referências.
  3. Navegar pelo documento usando `Ctrl + Clique` no sumário.
  4. Atualizar páginas e títulos automaticamente usando a tecla `F9`.
  5. Inserir legendas em imagens e gerar o Índice de Ilustrações.
- **Contador**: `#l8-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l8` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: Por Que o Sumário Manual é um Erro Inaceitável
- A armadilha dos pontinhos manuais: Quando você digita "1 INTRODUÇÃO ................. 3", as fontes proporcionais (como Arial) possuem larguras variáveis para cada letra, fazendo os números da margem direita ficarem completamente desalinhados.
- O pesadelo da revisão: Se o orientador pedir para acrescentar um parágrafo na página 2, todas as páginas subsequentes mudam e você teria que recalcular o sumário inteiro à mão.
- A inteligência do Word: O sumário automático calcula as páginas em milissegundos e cria preenchimento por tabulação milimétrica perfeita.
- *Check 1*: `[ ] Passo 1: Compreendi por que a ABNT e o mercado exigem sumários automáticos em vez de manuais.`

### FASE 2: Preparando o Terreno — A Marcação com Título 1 e Título 2
- O Word não sabe o que é um título até que você o ensine através da Galeria de Estilos:
  - Selecione o nome do capítulo principal e clique no estilo **Título 1** (`Página Inicial` > Estilos).
  - Selecione o subtópico e clique no estilo **Título 2**.
  - O texto corrido deve permanecer sempre com o estilo **Normal**.
- Teste visual: Ao passar o mouse sobre um Título 1 ou 2, aparece uma pequena setinha cinza ao lado dele indicando que o Word já o reconhece como cabeçalho hierárquico!
- *Check 2*: `[ ] Passo 2: Apliquei os estilos Título 1 e Título 2 em todos os capítulos e subtópicos do documento.`

### FASE 3: Inserindo o Sumário em 1 Clique
- Onde posicionar: Deixe uma página inteira reservada após a Folha de Rosto e antes da Introdução.
- O comando:
  - Posicione o cursor no topo da página do sumário.
  - Acesse a guia **Referências** (localizada entre *Layout da Página* e *Correspondências*).
  - No primeiro grupo à esquerda, clique no botão **Sumário**.
  - Escolha o modelo **Sumário Automático 1** (ou 2).
- Imediatamente o Word varre o documento, localiza todos os títulos marcados, puxa a numeração de páginas exata e gera as guias de preenchimento pontilhadas retas.
- *Check 3*: `[ ] Passo 3: Inseri o Sumário Automático 1 através da guia Referências.`

### FASE 4: A Mágica da Atualização com a Tecla F9
- Cenário real: Você terminou o sumário, mas o professor mandou adicionar mais 3 páginas sobre a história do tema. E agora?
- Procedimento de atualização:
  - Clique com o botão esquerdo sobre qualquer área do sumário.
  - Clique na aba superior que aparece escrita **Atualizar Sumário...** (ou simplesmente pressione a tecla **F9** no teclado).
  - A janela pergunta:
    - *Atualizar apenas os números de página*: Use se o texto apenas mudou de tamanho.
    - *Atualizar o índice inteiro*: Use se você trocou o nome de algum capítulo ou adicionou seções novas.
  - Escolha a opção e clique em OK. O sumário refaz todos os cálculos em menos de 1 segundo!
- *Check 4*: `[ ] Passo 4: Pratiquei a atualização do sumário com a tecla F9 escolhendo a opção Atualizar o índice inteiro.`

### FASE 5: Navegação Ágil e Índice de Figuras
- **Navegação Hiperlink**: Aproxime o ponteiro do mouse de qualquer linha do sumário automático, segure a tecla `Ctrl` e clique. O Word salta imediatamente para a página daquele capítulo!
- **Índice de Ilustrações**:
  - Clique em uma foto do documento > Guia `Referências` > `Inserir Legenda` > digite: "Figura 1: Esquema dos Planetas" e clique em OK.
  - No início do documento, clique em `Inserir Índice de Ilustrações`. O Word cria uma lista separada de todas as figuras do trabalho!
- *Check 5*: `[ ] Passo 5: Testei a navegação rápida com Ctrl+Clique e criei uma legenda de imagem com o Índice de Ilustrações.`

---

## 📝 4. Exercício de Fixação da Aula 08 (`QUIZ_CFG[8]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **O que é estritamente OBRIGATÓRIO aplicar nos títulos do documento para que o Word consiga gerar o Sumário Automático?**
   - a) Pintar todos os títulos de amarelo com marca-texto.
   - b) Aplicar os Estilos de Título (como Título 1 e Título 2) da guia Página Inicial. *(Correta)*
   - c) Digitar todos os títulos em letras minúsculas.
   - d) Inserir uma tabela em cada capítulo.
   - *Dica*: O Word lê exclusivamente a marcação de estilos para montar a hierarquia do sumário.
2. **Em qual guia da Faixa de Opções do Word fica localizado o botão de inserção do Sumário Automático?**
   - a) Guia Exibir.
   - b) Guia Página Inicial.
   - c) Guia Referências. *(Correta)*
   - d) Guia Arquivo.
   - *Dica*: Fica na guia 'Referências', responsável por notas, sumários e citações.
3. **Qual tecla de atalho do teclado pode ser pressionada para ATUALIZAR rapidamente um sumário automático selecionado?**
   - a) `F1`
   - b) `F5`
   - c) `F9` *(Correta)*
   - d) `F12`
   - *Dica*: A tecla F9 atualiza campos e sumários no Word.
4. **Quando a janela de atualização do sumário aparecer, qual opção você deve escolher caso tenha adicionado um NOVO capítulo ao trabalho?**
   - a) Cancelar atualização.
   - b) Atualizar apenas os números de página.
   - c) Atualizar o índice inteiro. *(Correta)*
   - d) Excluir sumário.
   - *Dica*: O índice inteiro força o Word a reler todos os títulos novos.
5. **Ao posicionar o cursor sobre uma linha do sumário automático, qual tecla deve ser mantida pressionada junto com o clique do mouse para pular direto para a página correspondente?**
   - a) Tecla `Ctrl`. *(Correta)*
   - b) Tecla `Shift`.
   - c) Tecla `Alt`.
   - d) Tecla `Tab`.
   - *Dica*: `Ctrl + Clique` aciona os hiperlinks internos de navegação do Word.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 8`:
- **Seção 8.1**: *A Lógica do Sumário Automático e a Norma ABNT*
  - Exigências formais para elementos pré-textuais e paginação.
- **Seção 8.2**: *A Árvore de Estilos: Título 1, Título 2 e Título 3*
  - Ilustração HTML (`sec.html`): Mini-sumário desenhado demonstrando a indentação de 1 INTRODUÇÃO, 1.1 Objetivos e 1.1.1 Escopo com linha pontilhada alinhada.
- **Seção 8.3**: *Inserção e Manutenção Dinâmica com a Tecla F9*
  - O ciclo de vida do documento: criação, acréscimo de conteúdo e atualização instantânea.
- **Seção 8.4**: *Índice de Ilustrações, Tabelas e Legendas*
  - O passo a passo para etiquetar figuras corporativas e científicas com o assistente de legendas.
