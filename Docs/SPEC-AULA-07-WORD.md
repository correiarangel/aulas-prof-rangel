# 📘 SPEC-AULA-07-WORD — Especificação Técnica e Pedagógica da Aula 07 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 📝 ESPECIFICADA E PRONTA PARA IMPLEMENTAÇÃO

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 07 Colaboracao_Comentarios_Word.html` | 21.616 bytes | **Apostila original da aula** — Inserção de comentários, controle de alterações, aceitar/rejeitar revisões, proteção de documentos e texto sobre Astronomia |

### 1.2 Estrutura do Conteúdo Original
1. **Revisão e Colaboração no Trabalho Moderno**:
   - Ninguém trabalha sozinho: contratos, relatórios empresariais e artigos acadêmicos passam por múltiplos leitores, chefes e orientadores.
2. **Guia Revisão e Ferramentas de Texto**:
   - Verificação Ortográfica e Gramatical (`F7`): Sublinhado ondulado vermelho (erro ortográfico) e azul/verde (erro gramatical ou concordância).
   - Dicionário de Sinônimos (`Shift + F7`): Substituição de palavras repetitivas para enriquecer o vocabulário do texto.
   - Contagem de Palavras: Requisito indispensável para resumos acadêmicos com limite de palavras (ex: 250 a 500 palavras).
3. **Inserção e Gestão de Comentários**:
   - Como inserir: Selecionar a frase > Guia `Revisão` > `Novo Comentário` (ou atalho `Ctrl + Alt + M`).
   - Os comentários aparecem como balões na margem direita da tela com identificação do autor.
   - Ciclo de vida: Responder a um comentário de colega, marcar como resolvido e excluir.
4. **Controle de Alterações (Track Changes)**:
   - O recurso mais poderoso de auditoria de texto do Word: Guia `Revisão` > botão `Controlar Alterações` (`Ctrl + Shift + E`).
   - Com o recurso ativado:
     - Cada nova palavra digitada aparece sublinhada e em cor destacada.
     - Cada palavra apagada não some imediatamente: fica com efeito tachado (riscado no meio).
     - Formatações alteradas são registradas na lateral.
5. **Aceitar e Rejeitar Alterações**:
   - O autor principal pode navegar com os botões *Anterior* e *Próxima*, e decidir individualmente com os botões *Aceitar* (incorpora a mudança) ou *Rejeitar* (restaura o texto original).
6. **Proteção de Documento e Higienização Final**:
   - Restringir Edição: Permitir que o destinatário apenas adicione comentários, sem poder alterar uma vírgula do texto original.
   - Inspecionar Documento: Remoção de dados pessoais e revisões ocultas antes de converter para PDF ou enviar a clientes.

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 07: Revisão de Texto, Comentários & Colaboração** |
| **Subtítulo** | *Ortografia (F7), comentários na margem, controle de alterações e proteção de documentos* |
| **ID da Seção no Portal** | `<section id="screen-lesson-7" class="screen-view">` |
| **Senha de Acesso** | `wg007` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l7-check-1` a `l7-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-7`, `#gamify-label-7` (0% a 100%), `#gamify-badge-box-7` |
| **Persistência LocalStorage** | Leitura: `word_lesson_7_progress` \| Quiz: `word_lesson_7_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Aprender a revisar textos de forma colaborativa e profissional: usar a verificação gramatical, dialogar através de comentários laterais, registrar edições com Controle de Alterações e proteger o arquivo contra edições indevidas.
- **Roteiro em 5 Passos (Chips)**:
  1. Executar a Verificação Ortográfica e Gramatical com a tecla `F7`.
  2. Inserir e responder a Comentários na margem do documento.
  3. Ativar o Controle de Alterações (Track Changes) para auditar edições.
  4. Aceitar e Rejeitar alterações sugeridas por revisores.
  5. Proteger o documento restringindo a edição apenas a comentários.
- **Contador**: `#l7-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l7` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: Verificação Ortográfica, Gramatical e Sinônimos
- A tecla salvadora: Pressione `F7` em qualquer momento. O Word analisa todo o texto do início ao fim e abre o painel lateral de correção.
- Entendendo as marcações na tela:
  - **Ondulado Vermelho**: Erro ortográfico ou palavra não encontrada no dicionário do Word (nomes próprios, termos técnicos).
  - **Ondulado Azul ou Verde**: Erro de concordância gramatical, pontuação ou espaçamento duplo acidental.
- Como enriquecer o vocabulário: Selecione uma palavra repetitiva e pressione `Shift + F7` para abrir o Dicionário de Sinônimos.
- *Check 1*: `[ ] Passo 1: Executei a verificação ortográfica com a tecla F7 e consultei o dicionário de sinônimos.`

### FASE 2: Inserção de Comentários e Trabalho em Equipe
- O que são comentários: Anotações laterais que não alteram o texto da folha, servindo como canal de diálogo entre alunos, professores ou colegas de empresa.
- Passo a passo:
  - Selecione a frase que gera dúvida.
  - Na guia `Revisão`, clique em **Novo Comentário** (atalho `Ctrl + Alt + M`).
  - Digite sua observação no balão que surge à direita: *"Professor, favor verificar se esta data está correta"*.
  - Para responder, clique no botão de resposta dentro do próprio balão.
- *Check 2*: `[ ] Passo 2: Inseri comentários na lateral do texto para sugerir melhorias sem alterar o documento.`

### FASE 3: O Poder do Controle de Alterações (Track Changes)
- Quando ativar: Sempre que você for revisar o texto de outra pessoa ou enviar uma minuta de contrato para revisão.
- Como ativar: Guia `Revisão` > clique no botão **Controlar Alterações** (`Ctrl + Shift + E`).
- Como o Word se comporta:
  - Se você digitar uma nova palavra: ela fica azul e sublinhada.
  - Se você apagar uma palavra com Backspace ou Delete: ela **não desaparece**, fica riscada no meio (tachada em vermelho).
  - O documento mantém a memória viva de exatamente quem alterou o quê e em qual data e horário!
- *Check 3*: `[ ] Passo 3: Ativei o Controle de Alterações e verifiquei o registro visual de palavras inseridas e excluídas.`

### FASE 4: O Ritual de Aceitar ou Rejeitar Revisões
- Como consolidar o texto final após a revisão:
  - Abra o documento com as alterações marcadas.
  - Na guia `Revisão`, grupo *Alterações*, utilize os botões **Anterior** e **Próxima** para pular de alteração em alteração.
  - Para cada sugestão:
    - Se a correção foi boa: clique em **Aceitar**. O texto riscado é excluído de vez e o texto sublinhado vira texto comum preto.
    - Se a sugestão foi inadequada: clique em **Rejeitar**. A sugestão é descartada e o texto original é preservado.
  - Regra de segurança: Nunca envie um arquivo final para um cliente com o controle de alterações aberto! Clique em *Aceitar Todas as Alterações* antes de emitir o documento final.
- *Check 4*: `[ ] Passo 4: Naveguei pelas revisões do documento praticando as opções Aceitar e Rejeitar.`

### FASE 5: Restrição de Edição e Higienização de Metadados
- **Restringir Edição**:
  - Guia `Revisão` > botão **Restringir Edição**.
  - Marcar a opção "Permitir apenas este tipo de edição no documento" e selecionar **Comentários**.
  - Clicar em "Sim, Aplicar Proteção" e definir uma senha. Agora qualquer pessoa que abrir o arquivo poderá ler e comentar, mas não conseguirá alterar o texto principal!
- **Inspecionar Documento**:
  - Menu `Arquivo` > `Informações` > `Verificar se Há Problemas` > `Inspecionar Documento`. Remove dados pessoais e comentários antigos antes da entrega formal.
- *Check 5*: `[ ] Passo 5: Apliquei a restrição de edição para comentários e entendi a inspeção de metadados.`

---

## 📝 4. Exercício de Fixação da Aula 07 (`QUIZ_CFG[7]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **Qual é o atalho clássico do teclado para iniciar a Verificação Ortográfica e Gramatical em todo o documento no Word?**
   - a) `F1`
   - b) `F5`
   - c) `F7` *(Correta)*
   - d) `F12`
   - *Dica*: A tecla de função F7 é o atalho universal do revisor ortográfico.
2. **O que acontece visualmente no documento quando o recurso 'Controlar Alterações' está ativado e você apaga uma palavra?**
   - a) A palavra desaparece para sempre.
   - b) A tela inteira fica preta.
   - c) A palavra não desaparece imediatamente; fica riscada no meio (tachada) em cor destacada. *(Correta)*
   - d) O computador emite um aviso sonoro e trava o teclado.
   - *Dica*: O controle de alterações mantém o histórico do que foi apagado para aprovação posterior.
3. **Para que serve o recurso de 'Comentários' localizado na guia Revisão do Word?**
   - a) Enviar mensagens de WhatsApp pelo Word.
   - b) Fazer anotações em balões laterais sem alterar o conteúdo original do texto. *(Correta)*
   - c) Trocar a cor da folha de papel.
   - d) Inserir um gráfico de pizza.
   - *Dica*: Permite dialogar com o autor sugerindo correções sem misturar com o texto.
4. **Quando um revisor recebe um documento com alterações controladas, qual botão ele deve clicar para aprovar uma sugestão e torná-la definitiva no texto?**
   - a) Botão Rejeitar.
   - b) Botão Aceitar. *(Correta)*
   - c) Botão Desfazer.
   - d) Botão Recortar.
   - *Dica*: Aceitar valida a alteração sugerida e remove a marcação de revisão.
5. **Qual é a principal utilidade da ferramenta 'Restringir Edição' do Word?**
   - a) Impedir que o arquivo seja aberto sem internet.
   - b) Limitar o que outros usuários podem fazer no documento, como permitir exclusivamente a inserção de comentários. *(Correta)*
   - c) Diminuir o tamanho das imagens.
   - d) Transformar o texto em planilha do Excel.
   - *Dica*: Garante que ninguém altere o conteúdo original indevidamente.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 7`:
- **Seção 7.1**: *A Guia Revisão e a Higiene da Língua Portuguesa*
  - O uso do F7, atalhos de sinônimos (`Shift+F7`) e interpretação das cores de sublinhado ondulado.
- **Seção 7.2**: *Comunicação em Equipe com Balões de Comentários*
  - Ilustração HTML (`sec.html`): Simulação visual de um parágrafo com balão de comentário lateral contendo nome do revisor, data e texto de observação.
- **Seção 7.3**: *Auditoria Editorial: O Controle de Alterações (Track Changes)*
  - Exemplo prático do texto com marcações de inserção (sublinhado azul) e exclusão (tachado vermelho).
- **Seção 7.4**: *Fluxo de Aprovação: Aceitar, Rejeitar e Restringir Edição*
  - Guia definitivo de finalização de documentos antes da remessa para clientes ou orientadores de TCC.
