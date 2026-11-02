# 📘 SPEC-AULA-01-WORD — Especificação Técnica e Pedagógica da Aula 01 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 📝 ESPECIFICADA E PRONTA PARA IMPLEMENTAÇÃO

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 1 Introducao_ao_Microsoft_Word_v2/Aula_1_Introducao_ao_Microsoft_Word_v2.html` | 58.830 bytes | **Apostila original da aula** — 102 parágrafos didáticos, tabelas de atalhos, blocos de ergonomia |
| `AulaOrigem/word/Aula 1 Introducao_ao_Microsoft_Word_v2/images/image1..13.png` | 4,6 KB a 288 KB | 13 figuras instrutivas (interface, atalhos, régua, zoom, seleção com mouse) |

### 1.2 Estrutura do Conteúdo Original
1. **Abertura & O que é o Word**: Criado pela Microsoft em 1983, editor de textos profissional para cartas, relatórios, contratos e trabalhos.
2. **Faixa de Opções (Guias)**: Página Inicial (Fonte, Parágrafo, Estilos), Inserir (Imagens, Tabelas, Formas, Cabeçalho/Rodapé), Layout da Página (Margens, Orientação, Colunas), Referências (Sumário, Notas), Revisão (Ortografia, Comentários), Exibição (Zoom, Régua).
3. **Atalhos Essenciais no Word em Português**:
   - `Ctrl + B`: Salvar o documento (no Word em inglês é `Ctrl + S`).
   - `Ctrl + N`: Negrito.
   - `Ctrl + I`: Itálico.
   - `Ctrl + S`: Sublinhado.
   - `Ctrl + T`: Selecionar tudo (no Word em inglês é `Ctrl + A`).
   - `Ctrl + Z`: Desfazer última ação.
   - `Ctrl + C` / `Ctrl + V` / `Ctrl + X`: Copiar, Colar e Recortar.
4. **Seleção de Texto com o Mouse**:
   - Clique duplo: seleciona uma palavra inteira.
   - Clique triplo: seleciona o parágrafo inteiro.
   - Clique na margem esquerda (seta inclinada para a direita): seleciona a linha inteira; arrastar seleciona múltiplas linhas.
   - `Ctrl + Clique`: seleciona uma frase completa até o ponto final.
5. **Gerador Automático de Texto de Exemplo**:
   - `=rand(p, l)` onde `p` é o número de parágrafos e `l` é o número de linhas por parágrafo.
6. **A Régua e os 3 Marcadores de Recuo**:
   - **Triângulo Superior**: Recuo da primeira linha (marca o recuo clássico de 1,25 cm da ABNT).
   - **Triângulo Inferior**: Recuo deslocado (mantém a primeira linha na margem e recua as demais).
   - **Retângulo Inferior**: Recuo esquerdo total (move todo o bloco do parágrafo).
7. **Ergonomia e Teclado**:
   - Posição das mãos na linha guia (`A-S-D-F` na mão esquerda, `J-K-L-Ç` na mão direita).
   - Teclas especiais: `Shift` (maiusculização temporária e símbolos superiores), `Ctrl` (combinações de atalhos), `Alt` e `Alt Gr` (terceira função das teclas).

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 01: Introdução ao Word & Digitação Eficiente** |
| **Subtítulo** | *Dominando a interface, as guias, atalhos do teclado e a régua de alinhamento* |
| **ID da Seção no Portal** | `<section id="screen-lesson-1" class="screen-view">` |
| **Senha de Acesso** | `wa001` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l1-check-1` a `l1-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-1`, `#gamify-label-1` (0% a 100%), `#gamify-badge-box-1` |
| **Persistência LocalStorage** | Leitura: `word_lesson_1_progress` \| Quiz: `word_lesson_1_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Conhecer a área de trabalho do Word, aprender os atalhos indispensáveis do dia a dia e dominar a régua para nunca mais apertar barra de espaço repetidamente para afastar parágrafos.
- **Roteiro em 5 Passos (Chips)**:
  1. Conhecer a interface, as Guias e a Faixa de Opções.
  2. Praticar os atalhos de produtividade do Word em Português.
  3. Gerar texto automático com o comando secreto `=rand()`.
  4. Dominar a Régua e os 3 pontos de recuo de parágrafo.
  5. Aprender a digitação correta e as teclas especiais.
- **Contador**: `#l1-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l1` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: A Área de Trabalho e a Faixa de Opções
- Explicação clara sobre o que é o processador de textos.
- Anatomia da tela: Barra de Título, Barra de Ferramentas de Acesso Rápido, Faixa de Opções dividida em Guias, Área de Edição (Folha de Papel em branco), Barra de Status (contagem de palavras e páginas) e Controle de Zoom.
- *Check 1*: `[ ] Passo 1: Localizei as guias Página Inicial, Inserir e Layout da Página na Faixa de Opções.`

### FASE 2: Atalhos Essenciais no Word em Português
- Tabela visual com atalhos de alta produtividade:
  - `Ctrl + B`: Salvar
  - `Ctrl + N`: Negrito
  - `Ctrl + I`: Itálico
  - `Ctrl + S`: Sublinhado
  - `Ctrl + T`: Selecionar tudo
  - `Ctrl + Z`: Desfazer
  - `Ctrl + C` / `Ctrl + V`: Copiar e Colar
- Alerta contra o erro comum: *No Word em inglês, salvar é Ctrl+S; no Word em português, Ctrl+S aplica Sublinhado e Salvar é Ctrl+B!*
- *Check 2*: `[ ] Passo 2: Entendi a diferença dos atalhos em português (Ctrl+B para Salvar e Ctrl+S para Sublinhado).`

### FASE 3: O Comando Mágico `=rand()` e Seleção com Mouse
- Como gerar texto de teste rapidamente sem perder tempo digitando: digitar `=rand(3,4)` e teclar `Enter`.
- Técnicas profissionais com o mouse: 1 clique para posicionar o cursor, 2 cliques para selecionar a palavra, 3 cliques para selecionar o parágrafo inteiro, clique na margem esquerda para selecionar a linha.
- *Check 3*: `[ ] Passo 3: Gerei parágrafos de teste com o comando =rand() e pratiquei os cliques de seleção com o mouse.`

### FASE 4: A Régua e os 3 Marcadores de Recuo
- Como exibir a régua: Guia `Exibição` > marcar a caixa `Régua`.
- Dissecando os marcadores da régua horizontal:
  - **Triângulo Superior**: Recuo da Primeira Linha (onde o parágrafo começa).
  - **Triângulo Inferior**: Recuo Francês / Deslocado.
  - **Quadrado Inferior**: Recuo Esquerdo Total (move tudo junto).
- Regra de ouro do professor: *Nunca dê 10 espaços com a barra de espaço para fazer o início do parágrafo; use sempre o marcador de recuo da régua ou a tecla Tab!*
- *Check 4*: `[ ] Passo 4: Entendi como movimentar o triângulo superior da régua para criar o recuo da primeira linha.`

### FASE 5: Ergonomia, Posição das Mãos e Teclas Especiais
- Posição correta na mesa: tela na altura dos olhos, costas retas apoiadas na cadeira, punhos alinhados.
- Linha guia do teclado: indicadores no `F` e no `J` (que possuem relevos táteis).
- Funções das teclas `Shift`, `Ctrl`, `Alt`, `CapsLock`, `Backspace` (apaga à esquerda) e `Delete` (apaga à direita).
- *Check 5*: `[ ] Passo 5: Concluí o roteiro de digitação e posicionei corretamente minhas mãos no teclado.`

---

## 📝 4. Exercício de Fixação da Aula 01 (`QUIZ_CFG[1]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **Qual é o atalho correto para SALVAR um documento no Microsoft Word em português?**
   - a) `Ctrl + S`
   - b) `Ctrl + B` *(Correta)*
   - c) `Ctrl + P`
   - d) `Ctrl + A`
   - *Dica*: No Word em português, a letra B é associada a salvar/baixar cópia.
2. **Para que serve o comando secreto `=rand(2,3)` digitado em um documento em branco?**
   - a) Excluir automaticamente 2 linhas e 3 palavras.
   - b) Criar uma tabela com 2 linhas e 3 colunas.
   - c) Gerar automaticamente 2 parágrafos com 3 frases de texto para teste. *(Correta)*
   - d) Calcular a soma de 2 mais 3.
   - *Dica*: Vem da palavra inglesa 'random' (aleatório), gerando texto demonstrativo.
3. **Qual marcador da régua horizontal controla EXCLUSIVAMENTE o afastamento da primeira linha de cada parágrafo?**
   - a) O triângulo superior apontado para baixo. *(Correta)*
   - b) O retângulo inferior na base da régua.
   - c) O triângulo inferior apontado para cima.
   - d) O marcador do lado direito da régua.
   - *Dica*: Fica na parte de cima da régua e aponta para baixo.
4. **Quantos cliques rápidos do mouse sobre uma palavra são necessários para selecionar o PARÁGRAFO INTEIRO?**
   - a) 1 clique simples.
   - b) 2 cliques rápidos (duplo clique).
   - c) 3 cliques rápidos (triplo clique). *(Correta)*
   - d) 4 cliques rápidos.
   - *Dica*: 2 cliques selecionam a palavra; 3 selecionam todo o bloco de texto.
5. **Qual é a principal função da tecla Shift ao ser pressionada junto com uma letra?**
   - a) Salvar o documento imediatamente.
   - b) Digitar aquela letra em MAIÚSCULA de forma pontual. *(Correta)*
   - c) Ativar o modo de bloqueio permanente de maiúsculas.
   - d) Apagar a letra anterior.
   - *Dica*: Ao soltar a tecla Shift, a digitação volta imediatamente a ser minúscula.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 1`:
- **Seção 1.1**: *Conhecendo a Interface do Word e a Faixa de Opções*
  - Conteúdo histórico e prático sobre menus e ferramentas.
  - Ilustração HTML (`sec.html`): Cartão visual destacando a Faixa de Opções e as principais guias.
- **Seção 1.2**: *Atalhos Fundamentais de Teclado no Word em Português*
  - Tabela comparativa dos atalhos com destaque especial para `Ctrl+B` vs `Ctrl+S`.
  - Imagem do acervo: `../../assets/img/word/Aula1/image1.png` (resolvida via `resolveImagePath`).
- **Seção 1.3**: *A Régua do Word e os Três Tipos de Recuo*
  - Ilustração HTML (`sec.html`): Desenho esquemático da régua marcando o Triângulo Superior (Recuo de Primeira Linha: 1,25 cm), Triângulo Inferior (Recuo Francês) e Retângulo Inferior (Recuo Esquerdo).
- **Seção 1.4**: *Seleção Ágil e o Gerador de Texto =rand()*
  - Guia de truques do mouse e do comando `=rand()`.
- **Seção 1.5**: *Ergonomia e Domínio do Teclado*
  - Recomendações de saúde postural e guia tátil da linha guia `ASDF - JKLÇ`.
