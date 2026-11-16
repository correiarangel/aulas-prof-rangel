# 📘 SPEC-AULA-09-WORD — Especificação Técnica e Pedagógica da Aula 09 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 📝 ESPECIFICADA E PRONTA PARA IMPLEMENTAÇÃO

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 10 -Exercício_ Criando Listas no Word.md` | 463.801 bytes | **Roteiro prático original** — Listas de livros categorizadas, listas multinível, projeto do Certificado de Conclusão e diagramação do artigo "O Ciclo Solar" |

### 1.2 Estrutura do Conteúdo Original
1. **Listas Avançadas por Categorias**:
   - Listas com Marcadores e Listas Numeradas organizadas por gênero (Ficção Científica, Fantasia, Suspense & Mistério, Clássicos, Desenvolvimento Pessoal).
   - Uso cirúrgico das teclas `Tab` (rebaixar nível) e `Shift + Tab` (promover nível) para listas hierárquicas multinível.
2. **Tabulação Profissional com Pontos de Preenchimento**:
   - Uso das marcas de tabulação na régua para alinhar cardápios, índices e formulários com linhas pontilhadas automáticas sem usar tabelas pesadas.
3. **Oficina 1: Criação de Certificado Oficial de Conclusão**:
   - Aplicação prática de página em modo Paisagem, moldura decorativa de página, caixas de texto com contorno estilizado, tipografia nobre para homenageado e linhas de assinatura alinhadas.
4. **Oficina 2: Projeto Integrador "O Ciclo Solar, um Pulsar de Energia Estelar"**:
   - Artigo real da Agência Espacial Europeia (ESA) sobre atividade solar.
   - Aplicação integrada de todas as técnicas acumuladas:
     - Título: Impact 18 pt, Vermelho, Centralizado, Negrito e Sublinhado.
     - Corpo do texto: Verdana 12 pt, Justificado, Espaçamento 1,5 linha.
     - Diagramação: 2 Colunas com respiro central.
     - Detalhe editorial: Letra Capitular na abertura.
     - Ilustração: Imagem do campo magnético com quebra de texto fluida entre colunas.
     - Segurança: Marca d'água suave com o texto "Sistema Solar".

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 09: Oficina de Listas Multinível, Tabulação & Certificados** |
| **Subtítulo** | *Listas hierárquicas (Tab/Shift+Tab), tabulação, criação de certificados e projeto Ciclo Solar* |
| **ID da Seção no Portal** | `<section id="screen-lesson-9" class="screen-view">` |
| **Senha de Acesso** | `wi009` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l9-check-1` a `l9-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-9`, `#gamify-label-9` (0% a 100%), `#gamify-badge-box-9` |
| **Persistência LocalStorage** | Leitura: `word_lesson_9_progress` \| Quiz: `word_lesson_9_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Colocar a mão na massa em projetos práticos completos de design editorial: dominar listas hierárquicas multinível com as teclas Tab e Shift+Tab, construir um Certificado de Conclusão e diagramar o artigo científico "O Ciclo Solar" com 2 colunas, capitular e marca d'água.
- **Roteiro em 5 Passos (Chips)**:
  1. Criar listas multinível dominando as teclas `Tab` e `Shift + Tab`.
  2. Alinhar formulários com paradas de Tabulação e pontos de preenchimento.
  3. Construir um Certificado Oficial em orientação Paisagem com moldura de arte.
  4. Diagramar o artigo "O Ciclo Solar" em 2 colunas com letra capitular.
  5. Inserir imagens com quebra justa e aplicar a marca d'água "Sistema Solar".
- **Contador**: `#l9-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l9` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: Listas Multinível — A Mágica do Tab e Shift+Tab
- O que é uma lista multinível: Uma lista que possui subtópicos alinhados internamente (ex: `1. Informática > 1.1 Hardware > 1.1.1 Placa-Mãe`).
- Como controlar os níveis com o teclado:
  - Digite o item e pressione `Enter`.
  - Pressione a tecla **Tab**: O Word recua o item e troca automaticamente o marcador para o subnível!
  - Para voltar para o nível principal: Pressione **Shift + Tab**. O item dá um passo para a esquerda e reassume o número principal.
- *Check 1*: `[ ] Passo 1: Construí uma lista hierárquica multinível alternando níveis com Tab e Shift+Tab.`

### FASE 2: Tabulação e Linhas Pontilhadas Automáticas
- O erro comum: Digitar o nome de um prato de cardápio e ficar apertando barra de espaço ou pontinhos até o preço no final da linha.
- A solução com a régua de Tabulação:
  - Na régua horizontal, dê um clique duplo na posição `15 cm`.
  - Na janela *Tabulação*, escolha Alinhamento à Direita e preenchimento tipo **2 (pontilhado)**.
  - Ao digitar o item e pressionar uma única vez a tecla `Tab`, o Word estende uma linha pontilhada perfeita até o preço!
- *Check 2*: `[ ] Passo 2: Configurei paradas de tabulação com pontos de preenchimento automáticos.`

### FASE 3: Oficina de Criação do Certificado de Conclusão
- Montando um certificado oficial do zero:
  - Guia `Layout da Página` > Orientação: **Paisagem**.
  - Margens: Estreitas (1,27 cm).
  - Guia `Design` / `Layout da Página` > **Bordas da Página** > escolher uma moldura elegante no menu *Arte*.
  - Título principal com WordArt ou fonte clássica (ex: Monotype Corsiva ou Times New Roman tamanho 36).
  - Caixa de texto sem preenchimento e sem contorno para o texto de certificação.
  - Duas linhas de assinatura no rodapé (Instrutor e Diretor) alinhadas com tabulação.
- *Check 3*: `[ ] Passo 3: Montei a estrutura completa de um certificado com moldura e assinaturas alinhadas.`

### FASE 4: Diagramação Editorial em 2 Colunas e Letra Capitular
- Projeto do Artigo Científico "O Ciclo Solar":
  - Título em destaque: Fonte `Impact`, tamanho `18`, negrito, sublinhado, centralizado, cor vermelha.
  - Selecionar os parágrafos do texto > Guia `Layout da Página` > `Colunas` > `Duas`.
  - Clicar no início do texto > Guia `Inserir` > `Letra Capitular` > `No Texto`. A primeira letra assume tamanho gigante e visual de publicação formal.
- *Check 4*: `[ ] Passo 4: Formatei o título do artigo e dividi o texto em duas colunas com letra capitular.`

### FASE 5: Inserção de Imagem com Quebra Fluida e Marca d'Água
- Finalização do projeto "O Ciclo Solar":
  - Inserir a imagem explicativa do campo magnético.
  - Mudar a quebra de texto para **Quadrado** ou **Justo** e posicionar no centro entre as duas colunas. O texto contorna a imagem harmoniosamente em ambos os lados.
  - Inserir a Marca d'Água personalizada com o texto **"Sistema Solar"**, cor cinza semitransparente em diagonal.
- *Check 5*: `[ ] Passo 5: Posicionei a imagem com quebra de texto justa e apliquei a marca d'água 'Sistema Solar'.`

---

## 📝 4. Exercício de Fixação da Aula 09 (`QUIZ_CFG[9]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **Em uma lista com marcadores ou numerada, qual tecla deve ser pressionada para REBAIXAR o item atual para um subnível mais interno?**
   - a) Tecla `Enter`.
   - b) Tecla `Tab`. *(Correta)*
   - c) Tecla `Backspace`.
   - d) Tecla `CapsLock`.
   - *Dica*: A tecla Tab avança a indentação para criar subitens hierárquicos.
2. **Qual combinação de teclas faz o item de uma lista RETORNAR (voltar) para o nível hierárquico superior?**
   - a) `Ctrl + Tab`
   - b) `Shift + Tab` *(Correta)*
   - c) `Alt + Tab`
   - d) `Ctrl + Shift + Enter`
   - *Dica*: O Shift inverte a direção natural do Tab, trazendo o item de volta para a esquerda.
3. **Para criar um alinhamento perfeito de preços com linha pontilhada em um cardápio sem usar tabelas, qual recurso deve ser utilizado?**
   - a) Barra de espaço segurada por 10 segundos.
   - b) Paradas de Tabulação com preenchimento pontilhado. *(Correta)*
   - c) Caixa de ferramentas do Paint.
   - d) WordArt de tamanho gigante.
   - *Dica*: A ferramenta de Tabulação preenche os espaços com linhas ou pontos matematicamente retos.
4. **Qual recurso clássico do Word transforma a primeira letra do parágrafo de abertura em uma letra grande de destaque que ocupa várias linhas?**
   - a) Marca-texto amarelo.
   - b) Letra Capitular (Drop Cap). *(Correta)*
   - c) Sublinhado duplo.
   - d) Sobrescrito.
   - *Dica*: É a clássica 'Letra Capitular' usada na abertura de capítulos de livros e revistas.
5. **Em qual orientação de página deve ser montado um Certificado de Conclusão tradicional para que o layout fique horizontal e proporcional?**
   - a) Orientação Retrato.
   - b) Orientação Paisagem. *(Correta)*
   - c) Orientação Vertical Invertida.
   - d) Orientação Circular.
   - *Dica*: Paisagem coloca a folha deitada, formato tradicional de diplomas e certificados.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 9`:
- **Seção 9.1**: *Engenharia de Listas: Marcadores, Numeração e Listas Multinível*
  - O guia definitivo das teclas `Tab` e `Shift+Tab`.
- **Seção 9.2**: *Tabulação Avançada e Pontos de Preenchimento*
  - Ilustração HTML (`sec.html`): Modelo visual de linha de cardápio com item alinhado à esquerda, linha pontilhada guia e valor em R$ alinhado perfeitamente à direita.
- **Seção 9.3**: *Projeto Prático: O Certificado de Conclusão de Curso*
  - Anatomia de um certificado profissional: moldura de arte, tipografia formal e blocos de assinatura.
- **Seção 9.4**: *Diagramação Científica: O Projeto Ciclo Solar*
  - Integração de 2 colunas, capitular, quebra de texto justa e marca d'água.
