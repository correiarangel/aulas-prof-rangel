# 📘 SPEC-AULA-05-WORD — Especificação Técnica e Pedagógica da Aula 05 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: ✅ IMPLEMENTADA (03/11/2026)

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 5 Word_Estilos_Formatacao_Avancada/Aula_05_Word_Estilos_Formatacao_Avancada.html` | 33.394 bytes | **Apostila original da aula** — Conceito de estilos, galeria rápida, criação e modificação de estilos, pincel de formatação e limpeza |
| `AulaOrigem/word/Aula 5 Word_Estilos_Formatacao_Avancada/images/image1..11.png` | 1 KB a 146 KB | 11 figuras instrutivas (galeria de estilos, janela modificar, pincel, borrachinha) |

### 1.2 Estrutura do Conteúdo Original
1. **O Que São Estilos?**:
   - Um conjunto pré-definido de características visuais (fonte, tamanho, cor, espaçamento, recuo) salvo com um nome específico.
   - Os 4 grandes benefícios:
     1. *Agilidade*: Aplica 5 formatações simultâneas em 1 único clique.
     2. *Uniformidade*: Garante que todos os títulos do documento fiquem rigorosamente idênticos.
     3. *Atualização Global em Cascata*: Se o cliente ou orientador pedir para trocar a fonte dos 40 títulos do documento de Arial para Times, basta alterar o estilo uma única vez e o documento inteiro se atualiza sozinho em 1 segundo.
     4. *Geração Automática do Sumário*: O Word só é capaz de montar o sumário automático se identificar a marcação de estilos (Título 1, Título 2).
2. **A Galeria de Estilos Rápidos**:
   - Localizada no centro da guia `Página Inicial`.
   - Principais estilos nativos: *Normal* (corpo do texto), *Título 1* (capítulos principais), *Título 2* (subtópicos), *Título 3* (seções terciárias), *Citação*.
3. **Criação de Estilos Personalizados**:
   - O método mais rápido ("Criar por Exemplo"): Formatar um trecho de texto no padrão desejado > Selecionar o texto > Clicar com botão direito na galeria de estilos > Escolher *Salvar Seleção como um Novo Estilo Rápido...* > Dar um nome (ex: "Meu Título ABNT").
4. **Modificação de Estilos**:
   - Clicar com botão direito em qualquer estilo da galeria > Escolher *Modificar...* > Alterar fonte, cor ou parágrafo > Marcar "Atualizar automaticamente".
5. **O Pincel de Formatação (Pintura de Estilos)**:
   - Clique simples: copia a formatação e aplica em 1 trecho (o pincel desativa em seguida).
   - **Duplo clique no Pincel**: "Trava" o pincel ativo, permitindo pintar dezenas de palavras espalhadas pelo texto. Pressionar `Esc` para soltar o pincel.
   - Atalhos de teclado: `Ctrl + Shift + C` (copiar formatação) e `Ctrl + Shift + V` (colar formatação).
6. **Limpar Toda a Formatação (Botão Borracha)**:
   - Ícone de uma letra `A` com uma borrachinha rosa ao lado (`Página Inicial` > grupo Fonte). Remove instantaneamente qualquer sujeira visual de textos colados da internet, restaurando o texto puro no estilo Normal.

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 05: Estilos Rápidos & Pincel de Formatação** |
| **Subtítulo** | *Hierarquia visual, criação de estilos por exemplo, atualização em cascata e limpeza de formatação* |
| **ID da Seção no Portal** | `<section id="screen-lesson-5" class="screen-view">` |
| **Senha de Acesso** | `we005` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l5-check-1` a `l5-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-5`, `#gamify-label-5` (0% a 100%), `#gamify-badge-box-5` |
| **Persistência LocalStorage** | Leitura: `word_lesson_5_progress` \| Quiz: `word_lesson_5_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Descobrir o recurso que separa os usuários amadores dos profissionais de Word: a gestão por Estilos, economizando horas de trabalho braçal e preparando o documento para a criação do sumário automático.
- **Roteiro em 5 Passos (Chips)**:
  1. Compreender o conceito e os benefícios dos Estilos no Word.
  2. Aplicar estilos nativos (Normal, Título 1 e Título 2).
  3. Modificar um estilo e testemunhar a atualização global automática.
  4. Criar um estilo próprio usando o método fácil "Criar por Exemplo".
  5. Dominar o Pincel de Formatação (duplo clique) e o botão Limpar Formatação.
- **Contador**: `#l5-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l5` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: Por Que Usar Estilos? A Revolução da Produtividade
- O erro comum do iniciante: formatar cada título manualmente (muda fonte para 14, clica no negrito, escolhe cor azul) em 30 títulos diferentes.
- A solução com estilos: Criar o estilo uma única vez e aplicar com 1 clique.
- A mágica da atualização em cascata: Quando você modifica o estilo, todos os 30 títulos mudam de cor e tamanho juntos em uma fração de segundo.
- *Check 1*: `[ ] Passo 1: Entendi os 4 benefícios dos estilos e a importância da atualização global em cascata.`

### FASE 2: A Galeria de Estilos e a Hierarquia Título 1 e Título 2
- Onde encontrar: Guia `Página Inicial` > grupo `Estilos`.
- Navegando pela hierarquia:
  - **Título 1**: Capítulos de primeiro nível (ex: `1 INTRODUÇÃO`, `2 DESENVOLVIMENTO`).
  - **Título 2**: Seções secundárias (ex: `2.1 Histórico`, `2.2 Conceitos Fundamentais`).
  - **Título 3**: Subseções terciárias (ex: `2.2.1 Análise de Dados`).
  - **Normal**: Todo o parágrafo de texto comum do trabalho.
- *Check 2*: `[ ] Passo 2: Apliquei os estilos Título 1 e Título 2 respeitando a hierarquia dos capítulos.`

### FASE 3: Modificando um Estilo Existente
- Passo a passo para ajustar o estilo Título 1 para a norma ABNT:
  - Clicar com o botão direito no cartão `Título 1` na galeria > escolher **Modificar...**.
  - Na janela, mudar a fonte para `Arial` ou `Times New Roman`, tamanho `14`, cor `Automático (Preto)` e marcar `Negrito`.
  - Clicar em `OK`. Imediatamente todos os títulos marcados como Título 1 assumem a nova formatação.
- *Check 3*: `[ ] Passo 3: Modifiquei o estilo Título 1 para atender à norma de títulos da ABNT.`

### FASE 4: Criando Estilos Personalizados por Exemplo
- Como criar um estilo personalizado em 10 segundos:
  - Digite uma frase e formate como desejar (ex: Verde escuro, Itálico, tamanho 11, recuo centralizado).
  - Deixe essa frase selecionada.
  - Clique com o botão direito na galeria de estilos ou abra o menu da galeria e selecione **Salvar Seleção como um Novo Estilo Rápido...**.
  - Digite o nome: "Aviso do Professor" e confirme. Seu novo estilo já está na barra superior!
- *Check 4*: `[ ] Passo 4: Criei um estilo personalizado pelo método 'Criar por Exemplo' e salvei na galeria.`

### FASE 5: O Pincel de Formatação Avançado e a Borracha de Limpeza
- **O Segredo do Duplo Clique no Pincel**:
  - Selecione a palavra formatada.
  - Dê **dois cliques rápidos** no ícone do Pincel de Formatação.
  - O cursor do mouse fica travado com o ícone do pincel: você pode clicar em 10 trechos diferentes pela folha sem precisar voltar ao menu.
  - Pressione a tecla `Esc` para soltar o pincel.
- **Limpando Textos da Internet**:
  - Ao colar um texto copiado da web cheio de fontes estranhas e fundos cinzas, selecione o texto e clique no botão **Limpar Toda a Formatação** (ícone da borracha). O texto fica limpo instantaneamente.
- *Check 5*: `[ ] Passo 5: Dominei o duplo clique do Pincel de Formatação e usei o botão Limpar Formatação.`

---

## 📝 4. Exercício de Fixação da Aula 05 (`QUIZ_CFG[5]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **Qual é a maior vantagem de utilizar ESTILOS (como Título 1 e Título 2) em vez de formatar títulos manualmente?**
   - a) Diminuir o tamanho do arquivo em 90%.
   - b) Permitir a atualização global de todos os títulos em um clique e possibilitar a criação do sumário automático. *(Correta)*
   - c) Ocultar o texto de outras pessoas.
   - d) Não permitir que o documento seja impresso.
   - *Dica*: Estilos garantem padronização automática e alimentam o sumário.
2. **O que acontece quando você clica DUAS VEZES seguidas (duplo clique) no botão do Pincel de Formatação?**
   - a) O pincel é excluído da barra de ferramentas.
   - b) O pincel fica 'travado', permitindo copiar a formatação para vários trechos de texto sem desativar. *(Correta)*
   - c) O texto selecionado fica em negrito e itálico.
   - d) O Word fecha o documento.
   - *Dica*: O duplo clique mantém o pincel ativo até você pressionar a tecla Esc.
3. **Qual tecla do teclado deve ser pressionada para desativar o Pincel de Formatação que foi travado com duplo clique?**
   - a) Tecla `Enter`.
   - b) Tecla `Esc`. *(Correta)*
   - c) Tecla `Espaço`.
   - d) Tecla `Tab`.
   - *Dica*: Pense na tecla de escape (sair) no canto superior esquerdo do teclado.
4. **Qual é a função do botão 'Limpar Toda a Formatação' (ícone de uma letra A com uma borrachinha ao lado)?**
   - a) Excluir todo o texto do documento.
   - b) Remover todas as formatações visuais (cores, fontes estranhas, tamanhos) e retornar o texto ao padrão Normal. *(Correta)*
   - c) Corrigir os erros ortográficos da língua portuguesa.
   - d) Salvar o arquivo em PDF.
   - *Dica*: É a ferramenta ideal para higienizar textos copiados da internet.
5. **Se você modificar a cor do estilo 'Título 1' de azul para preto, o que acontecerá com os demais títulos do documento que já usavam esse estilo?**
   - a) Permanecerão azuis até que você mude um por um.
   - b) Serão excluídos do documento.
   - c) Todos os títulos vinculados ao Título 1 mudarão instantaneamente para preto de forma automática. *(Correta)*
   - d) O Word emitirá um alerta de erro.
   - *Dica*: Esta é a chamada atualização global em cascata proporcionada pelos estilos.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 5` (padrão do módulo: `N.0` + uma seção por fase):
- **Seção 5.0**: *FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer*
  - Objetivo, roteiro numerado em 5 passos, faixa de preparação e ilustração HTML do roteiro.
- **Seção 5.1**: *A Arquitetura de Estilos e Produtividade Corporativa*
  - O conceito de estilos rápidos, os 4 benefícios e a tabela de arquitetura hierárquica.
- **Seção 5.2**: *Galeria de Estilos e Modificação Global em Cascata*
  - Ilustração HTML (`sec.html`): Diagrama em caixas demonstrando a relação entre o objeto "Estilo Título 1" e múltiplos capítulos atualizados simultaneamente.
- **Seção 5.3**: *Criando Estilos Personalizados pelo Método "Criar por Exemplo"*
  - Os 4 tipos de estilo (Parágrafo, Caractere, Tabela, Lista), os 4 passos do Criar por Exemplo e boas práticas de nomenclatura.
- **Seção 5.4**: *O Pincel de Formatação e Seus Truques Avançados*
  - Guia visual do clique simples vs duplo clique e atalhos `Ctrl+Shift+C` e `Ctrl+Shift+V`.
- **Seção 5.5**: *Higienização de Textos e o Botão Limpar Formatação*
  - Demonstração do antes e depois de texto copiado de navegadores web limpos com a ferramenta borracha, mais o checklist de auditoria da aula.

### 5.1 Mapa de Implementação

| Peça | Local | Detalhes |
| :--- | :--- | :--- |
| Desbloqueio no Hub | `modules/word/index.html` | Card `active-lesson` com `🔓 Aula Liberada (Senha we005)`; senha em `promptLessonPassword` (`5: "we005"`). |
| Tela da aula | `#screen-lesson-5` | FASE 0 + 5 fases, 6 abas, barra gamificada (`gamify-percent-5`, `gamify-bar-5`, `gamify-badge-box-5`). |
| Checks distribuídos | `#l5-check-1..5` | Um check no fim de cada fase + `#check-read-5-N` com trava sequencial. |
| Simuladores | `window.l5SetCascade`, `l5SetGallery`, `l5SetMod`, `l5ToggleModBold`, `l5SaveStyle`, `l5ResetStyle`, `l5ArmBrush`, `l5ReleaseBrush`, `l5PaintBrush` | Cascata, galeria/hierarquia, janela Modificar, criar por exemplo e pincel travado. |
| Exercício de fixação | `QUESTIONS_LESSON_5` + `QUIZ_CFG[5]` | `moduleId: "word_lesson_5_quiz"`, gabarito `[1, 1, 1, 1, 2]`, persistência `QuizEngine` e "↺ Recomeçar o exercício". |
| Roteamento e progresso | `modules/word/index.html` | Aula 5 em `TOTAL_TOPICS`, `SEQUENTIAL_LESSONS`, loops `[1,2,3,4,5]` e `routes` (`5: "screen-lesson-5"`). |
| Apostila PDF | `assets/js/pdf-lessons.js` → `LESSONS.word.sections` | Seções **5.0 a 5.5** com `lessonNum: 5`, imagens reais e `html` ilustrado. |
