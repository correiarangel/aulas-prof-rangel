# 📘 SPEC-AULA-07-WORD — Especificação Técnica e Pedagógica da Aula 07 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 🟢 IMPLEMENTADA (tela, JS, simuladores, PDF e quiz persistente — pendente teste CDP)

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
| **Progresso Gamificado** | `#gamify-percent-7`, `#gamify-bar-7`, `#gamify-badge-box-7` (0% a 100%) |
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

Seções com `lessonNum: 7` (padrão do módulo: `N.0` + uma seção por fase):
- **Seção 7.0**: *FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer*
  - Objetivo, os 5 passos, faixa de preparação (texto de Astronomia como prática) e tabela-roteiro com passos/atalhos (`F7`, `Ctrl+Alt+M`, `Ctrl+Shift+E`).
- **Seção 7.1**: *A Guia Revisão e a Higiene da Língua Portuguesa*
  - O uso do `F7`, atalhos de sinônimos (`Shift + F7`), interpretação das cores de sublinhado ondulado e contagem de palavras.
- **Seção 7.2**: *Comunicação em Equipe com Balões de Comentários*
  - Ilustração HTML (`sec.html`): simulação visual de um parágrafo com balão de comentário lateral contendo nome do revisor, data, texto de observação e resposta de revisora; tabela do ciclo de vida (Novo/Responder/Resolver/Excluir).
- **Seção 7.3**: *Auditoria Editorial: O Controle de Alterações (Track Changes)*
  - Ilustração HTML: exemplo prático do texto com marcações de inserção (sublinhado azul) e exclusão (tachado vermelho); tabela de comportamento do recurso.
- **Seção 7.4**: *Fluxo de Aprovação: Aceitar, Rejeitar e Finalizar o Documento*
  - Tabela Aceitar vs Rejeitar, fluxo de finalização em 3 passos e a regra de segurança profissional ("nunca envie com marcações").
- **Seção 7.5**: *Restringir Edição, Inspecionar Metadados e Marcar como Final*
  - Fluxo da proteção em 4 passos, tabela de higienização (Arquivo > Informações), checklist de auditoria da aula e alerta da senha de proteção.

**Fonte de imagens:** o material de origem da Aula 07 **não possui imagens** (0 referências `src=` no HTML original — verificado por script). Em conformidade com a Regra 2 do `AGENTS.md`, o PDF usa **ilustrações HTML reais** (`sec.html` com `.es-sheet-box`, `.mini-sheet`, `.fun-highlight`), não placeholders.

---

## 🧩 6. Registro de Implementação (16/11/2026)

| Peça | Onde | Estado |
| :--- | :--- | :--- |
| Tela da aula | `modules/word/index.html` → `#screen-lesson-7` | ✅ `<section class="screen-view">` como irmã das demais telas, antes da Prova Final |
| Desbloqueio no Hub | card Aula 07 | ✅ `active-lesson` + badge `🔓 Aula Liberada (Senha wg007)`; gate em `promptLessonPassword` (`lessonNum !== 7`) e rota `7: "screen-lesson-7"` |
| FASE 0 | `#l7-fase-0` | ✅ Objetivo + roteiro em 5 chips + faixa de preparação + contador `#l7-checklist-status` + `#l7-complete-hint` + botão `#btn-start-l7` |
| Fases 1–5 | `#l7-phase-1..5` + `#tab-btn-7-1..5` | ✅ 1. Ortografia & Sinônimos; 2. Comentários; 3. Controlar Alterações; 4. Aceitar & Rejeitar; 5. Proteção & Finalização |
| Checks distribuídos | `#l7-check-1..5` + `#check-read-7-1..5` | ✅ Um check no fim de cada fase (nada agrupado), com trava sequencial |
| Simuladores | `window.l7SetSpell()`, `l7CommentAction()`, `l7ToggleTrack()`, `l7Decide()`, `l7ToggleProtect()` | ✅ Marcações F7/ondulados e sinônimos; ciclo de vida do comentário (novo/responder/resolver/excluir); Track Changes liga/desliga (inserida sublinhada azul, apagada tachada vermelha); aceitar/rejeitar revisão com restauração; proteção "somente comentários" bloqueando edição |
| CSS dos simuladores | bloco inline `<style>` | ✅ `.l7-doc-stage`, `.l7-wavy-red/.l7-wavy-blue`, `.l7-syn-panel`, `.l7-comment-row`, `.l7-balloon` (+ `.resolved`), `.l7-track-insert/.l7-track-del`, `.l7-protect-note` + media query 640px |
| Fixação | `QUESTIONS_LESSON_7` + `QUIZ_CFG[7]` | ✅ 5 questões; `moduleId: "word_lesson_7_quiz"`; gabarito `[2, 2, 1, 1, 1]`; persistência `QuizEngine` e "↺ Recomeçar o exercício" |
| Roteamento e progresso | `TOTAL_TOPICS`, `SEQUENTIAL_LESSONS` (`7: 5/true`), loops de inicialização e de comprovantes `[1,2,3,4,5,6,7]` | ✅ Aula 7 integrada à cadeia |
| Resultado e comprovante | `#result-panel-7`, `#signature-code-7`, `#breakdown-7`, botões .txt/PDF/WhatsApp/e-mail | ✅ Mesmo contrato das Aulas 1–6 |
| Apostila PDF | `assets/js/pdf-lessons.js` → `LESSONS.word.sections` | ✅ Seções 7.0–7.5 com `lessonNum: 7` e `html` ilustrado (0 placeholders) |

---

## ✅ 7. Validações Executadas (16/11/2026)

- `node --check assets/js/pdf-lessons.js`: **OK**. Script inline de `modules/word/index.html` extraído (todos os `<script>` concatenados em `/tmp/opencode/word_inline.js`) e checado: **OK**.
- Conferência estrutural: FASE 0 (1), fases 1–5, checks 1–5, botões de leitura, abas 1–5 + fix, painéis de fixação/resultado, IDs gamify, IDs e funções dos simuladores, gate, rota, `TOTAL_TOPICS 7`, `QUIZ_CFG[7]`, `QUESTIONS_LESSON_7`, loops `[1,2,3,4,5,6,7]` — **todos presentes, 0 IDs duplicados, tags balanceadas** (`section` 6/6, `article` 1/1, `div` 125/125, `nav` 1/1, `table` 3/3), 0 placeholders "🖼️ Referência de imagem".
- Gabarito extraído da implementação: `['2','2','1','1','1']` — confere com a spec §4.
- Dados do PDF (script `/tmp/opencode/check-pdf7.js`, padrão `new Function` sobre `const LESSONS = {` + `const moduleLessonTitles = {`): 42 seções word, **6 da Aula 07 com `html` não vazio**, **0 seções órfãs** (sem `lessonNum`), título `moduleLessonTitles.word[7]` correto, sem `${` interpolado e sem artefatos ("JSTOR" etc.).
- Barra de senha: `wg007` liberada junto com as senhas mestras (`wa001`, `wb002`, `wr0926`, `admin`).

---

## 🧾 8. Fatos Conferidos e Correções (Regra 12 do AGENTS.md)

Atalhos e conceitos verificados contra o material de origem: `F7` (ortografia/gramática) ✅, `Shift + F7` (sinônimos) ✅, `Ctrl + Alt + M` (novo comentário) ✅, `Ctrl + Shift + E` (controlar alterações) ✅, ondulado vermelho = ortografia / azul-verde = gramática ✅, palavra apagada fica tachada em vez de sumir ✅, modos de visualização (Marcação Simples, Todas as Marcações, Sem Marcação, Original) ✅.

Correções de texto aplicadas durante a revisão (nada factual estava errado; erros de redação):
1. **PDF 7.4**: "Marcação Simple" → **"Marcação Simples"** (tradução quebrada).
2. **Tela, Fase 4**: "navegue com Anterior e Próxima pular de alteração em alteração" → **"use os botões Anterior e Próxima para pular de alteração em alteração"** (verbo faltando).

---

## 🧪 9. Harnesses de Teste (§9.1 — padrão SPEC-AULA-02-WINDOWS)

| # | Caso de teste | Passos | Resultado esperado |
| :--- | :--- | :--- | :--- |
| H1 | Desbloqueio da aula | Hub > clicar no card Aula 07 > digitar `wg007` | Abre `#screen-lesson-7`; senha errada mostra alerta "está em preparação" |
| H2 | Cadeia de checks sequenciais | Marcar `#l7-check-1..5` em ordem; tentar marcar o 2 antes do 1 | Contador `#l7-checklist-status` vai de 0/5 a 5/5; `#l7-complete-hint` aparece ao completar |
| H3 | Gamificação de leitura | Marcar `#check-read-7-1..5` | Barra `#gamify-bar-7` avança em %; badge `#gamify-badge-box-7` muda ao completar |
| H4 | Simulador de ortografia | `l7SetSpell('f7')` → ondulados; `l7SetSpell('syn')` → painel de sinônimos; `'clean'` limpa | Estados alternam e o texto de status muda em cada modo |
| H5 | Ciclo do comentário | `l7CommentAction('new')` → `'reply'` → `'resolve'` → `'delete'` | Balão aparece com autor/data; resposta agrupada; resolvido esmaece/riska; excluir volta ao estado limpo |
| H6 | Track Changes | `l7ToggleTrack()` desliga e religa | Desligado: tachado some da marcação ativa e status explica; ligado: marcações voltam |
| H7 | Aceitar/Rejeitar | `l7Decide('accept')` / `('reject')` / `('reset')` | Aceito: só o texto preto comum; rejeitado: texto original; reset restaura as marcações |
| H8 | Proteção | `l7ToggleProtect()` | Alterna nota "🚫 Edição bloqueada (só comentários)" ↔ "✅ Documento liberado" |
| H9 | Fixação 5 questões | Responder as 5 com `QUIZ_CFG[7]`; recarregar a página e reabrir o painel | Pontuação 10,0; "✓ Salvo automaticamente" é verdade (estado em `word_lesson_7_quiz`); gabarito comentado; SHA-256 exibido |
| H10 | Recomeçar | "↺ Recomeçar o exercício" | Apaga `word_lesson_7_quiz` do localStorage e zera o estado em memória |
| H11 | Apostila PDF | Botão "📑 Baixar Apostila PDF" | Popup com capa, seções 7.0–7.5, ilustrações HTML renderizadas, sem imagens quebradas |
| H12 | Mobile 375/390px | ReRule 6 do AGENTS.md | Conteúdo ocupa ~100% da largura (máx. ~4px de margem); sem "efeito linguiça" |

**Status dos harnesses:** H1–H12 **não executados em navegador real** nesta sessão (sem CDP/Playwright disponível); cobertos por checagem estática + `node --check`. Executar na próxima sessão com navegador.

---

## 📌 10. Pendências da Aula 07

- [ ] Rodar H1–H12 em navegador (CDP) — Aulas 06 e 07.
- [x] Commit — realizado como `2399b5c` (16/11/2026): Aula 07 + correções de imagens das Aulas 04/05 + documentação.
