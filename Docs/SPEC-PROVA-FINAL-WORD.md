# 🏆 SPEC-PROVA-FINAL-WORD — Especificação da Avaliação Final do Módulo Word
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 🟢 IMPLEMENTADA E VALIDADA (banco recalibrado em 18/11/2026 — CDP: 7/7 PASS — nota 10,0, SHA-256, retomada)

---

## 🎯 1. Visão Geral da Avaliação Final

A **Avaliação Didática Oficial do Módulo 2: Microsoft Word** tem como objetivo aferir o domínio teórico, operacional e técnico do aluno sobre todo o ciclo de vida de criação e formatação de documentos profissionais e acadêmicos.

A prova integra a trilha do aluno no portal (`modules/word/index.html`) e toma como base o material `AulaOrigem/word/PROVA DE CONHECIMENTO – MICROSOFT WORD 2010,14-05-26/`. Roda 100% no navegador via JavaScript e `QuizEngine`, com persistência automática de respostas, geração de comprovante oficial inviolável com criptografia **Hash SHA-256**, conformidade plena com as normas da ABNT e suporte total à acessibilidade e visualização em dispositivos móveis (Regra 6 do `AGENTS.md`).

---

## 📐 2. Parâmetros e Regras da Prova

| Parâmetro | Regra / Diretriz Oficial | Detalhes e Justificativa |
| :--- | :--- | :--- |
| **Composição da Prova** | **15 Questões Objetivas** | Banco recalibrado a partir da Prova de Conhecimento do Microsoft Word 2010 (material-base do professor), com cobertura dos fundamentos e complementos de ABNT e tabelas. |
| **Escala de Pontuação** | **0,0 a 10,0 Pontos** | Cada questão objetiva possui peso uniforme de ~0,67 ponto (ou sistema ponderado de 15 x 0,5 pt = 7,5 pt + 2,5 pt práticos). Na versão digital automatizada do portal, calcula-se `(acertos / 15) * 10`. |
| **Nota Mínima de Aprovação** | **7,0 (>= 70%)** | O aluno precisa acertar no mínimo **11 questões** para obter o certificado/comprovante de aprovação. |
| **Persistência de Estado** | **`QuizEngine.saveState/loadState`** | As respostas são salvas no `localStorage` a cada clique (`word_final_exam_state`). Se a página for recarregada ou a conexão cair, a prova reabre exatamente onde parou. O campo `bankVersion = "word2010-2026-11-18"` impede que um estado gravado com o banco anterior seja retomado com as questões novas (a chave é descartada automaticamente). |
| **Recomeço Limpo** | **Botão "↺ Recomeçar a prova"** | Limpa a chave do `localStorage`, zera o array em memória e devolve o aluno à Tela 1 de identificação. |
| **Segurança e Antifraude** | **Assinatura Digital SHA-256** | O comprovante final contém hash criptográfico gerado pelo algoritmo SHA-256 incorporando nome do aluno, acertos, nota, data/hora e o salt institucional do professor. |
| **Canais de Entrega** | **Baixar TXT, WhatsApp e E-mail** | O aluno pode baixar o comprovante em texto puro (.txt), enviar diretamente para o WhatsApp do professor (`19 99130-6907`) ou para o e-mail oficial (`okcomputer.use.linux@gmail.com`). |

---

## 📚 3. Matriz de Competências e Banco Oficial de Questões (15 Questões)

O banco foi recalibrado a partir do material-base **`AulaOrigem/word/PROVA DE CONHECIMENTO – MICROSOFT WORD 2010,14-05-26/PROVADECONHECIMENTOMICROSOFTWORD2010140526.html`**, por solicitação do professor. A Parte 2 (10 questões de múltipla escolha) foi integralmente aproveitada; a Parte 3 (3 questões dissertativas) foi convertida para o formato objetivo do portal, preservando o conteúdo avaliado; duas questões complementares de ABNT e tabelas foram mantidas para representar a Parte 1 (digitação e formatação) e o fechamento do curso.

> **Nota sobre a Parte 1 do material (digitação ABNT):** a redação de um texto completo no Word não é automatizável no quiz do portal. Seus requisitos (Times New Roman 12, margens, entrelinha 1,5, título centralizado, texto justificado, recuo, borda, marca d'água, imagem com quebra de linha e salvamento em DOCX/PDF) são avaliados de forma objetiva pelas questões 09, 13 e 14, e foram trabalhados nas aulas 02, 03, 04 e 11.

**Gabarito consolidado (índices 0-based): `[2,1,2,1,0,2,0,1,0,2,0,0,0,1,1]`**

### Questão 01 (Material-base, Parte 2 — Q1)
- **Enunciado**: Qual é a principal função do Microsoft Word?
- **Alternativas**: A) Criar planilhas de cálculo · B) Editar imagens bitmap · C) Produzir documentos de texto *(Correta)* · D) Navegar na internet
- **Gabarito**: **C**
- **Dica Pedagógica**: *O Word é um processador de textos. Planilhas são do Excel.*

### Questão 02 (Material-base, Parte 2 — Q2)
- **Enunciado**: Qual empresa desenvolveu o programa Microsoft Word?
- **Alternativas**: A) Google · B) Microsoft *(Correta)* · C) Oracle · D) Corel
- **Gabarito**: **B**
- **Dica Pedagógica**: *O Word integra o pacote Microsoft Office.*

### Questão 03 (Material-base, Parte 2 — Q3)
- **Enunciado**: Qual é o formato de arquivo padrão utilizado pelo Word 2010 para salvar documentos?
- **Alternativas**: A) `.xls` · B) `.ppt` · C) `.docx` *(Correta)* · D) `.html`
- **Gabarito**: **C**
- **Dica Pedagógica**: *Desde 2007 o padrão é `.docx`, baseado em XML e compactado.*

### Questão 04 (Material-base, Parte 2 — Q4)
- **Enunciado**: Qual opção deve ser usada ao gravar um documento pela primeira vez?
- **Alternativas**: A) Fechar · B) Salvar *(Correta)* · C) Visualizar Impressão · D) Copiar
- **Gabarito**: **B**
- **Dica Pedagógica**: *Salvar (Ctrl+S) na primeira gravação solicita nome, formato e local.*

### Questão 05 (Material-base, Parte 2 — Q5 — Aula 01)
- **Enunciado**: O que o atalho `Ctrl + Z` realiza no Word?
- **Alternativas**: A) Reverte a última ação *(Correta)* · B) Abre um novo documento · C) Imprime o arquivo · D) Cola um texto
- **Gabarito**: **A**
- **Dica Pedagógica**: *Ctrl+Z = Desfazer; Ctrl+Y = Refazer; Ctrl+V = Colar.*

### Questão 06 (Material-base, Parte 2 — Q6 — Aula 06)
- **Enunciado**: Em qual guia da Faixa de Opções podemos alterar a orientação da página entre Retrato e Paisagem?
- **Alternativas**: A) Inserir · B) Revisão · C) Layout da Página *(Correta)* · D) Exibição
- **Gabarito**: **C**
- **Dica Pedagógica**: *Layout da Página reúne Margens, Orientação, Tamanho e Quebras.*

### Questão 07 (Material-base, Parte 2 — Q7 — Aula 01)
- **Enunciado**: Para modificar a cor das letras de um texto selecionado, qual guia deve ser utilizada?
- **Alternativas**: A) Página Inicial *(Correta)* · B) Correspondências · C) Referências · D) Exibição
- **Gabarito**: **A**
- **Dica Pedagógica**: *Página Inicial concentra fonte, tamanho, negrito e cor da fonte.*

### Questão 08 (Material-base, Parte 2 — Q8 — Aula 06)
- **Enunciado**: Como adicionar uma nova quebra de página no Word 2010?
- **Alternativas**: A) Usando `Ctrl + N` · B) Escolhendo 'Quebras' na guia Layout da Página *(Correta)* · C) Clicando em Salvar · D) Acessando a guia Revisão
- **Gabarito**: **B**
- **Dica Pedagógica**: *O atalho direto é Ctrl+Enter; Ctrl+N cria um documento novo.*

### Questão 09 (Material-base, Parte 2 — Q9 — Aula 01)
- **Enunciado**: Qual é a utilidade da régua exibida no Word?
- **Alternativas**: A) Ajustar margens e recuos *(Correta)* · B) Inserir figuras · C) Alterar o idioma do texto · D) Exibir comentários
- **Gabarito**: **A**
- **Dica Pedagógica**: *A régua mostra margens, recuo de primeira linha, recuo esquerdo e tabulações.*

### Questão 10 (Material-base, Parte 2 — Q10)
- **Enunciado**: Para que serve a visualização de impressão no Word?
- **Alternativas**: A) Corrigir ortografia · B) Inserir tabelas · C) Mostrar como o documento ficará impresso *(Correta)* · D) Alterar o tamanho da folha
- **Gabarito**: **C**
- **Dica Pedagógica**: *A visualização antecipa a paginação final antes de imprimir.*

### Questão 11 (Material-base, Parte 3 — Q11, convertida — Aula 01)
- **Enunciado**: Qual atalho de teclado seleciona todo o texto de um documento no Word?
- **Alternativas**: A) `Ctrl + A` *(Correta)* · B) `Ctrl + C` · C) `Ctrl + V` · D) `Ctrl + X`
- **Gabarito**: **A**
- **Dica Pedagógica**: *Ctrl+A = selecionar tudo; Ctrl+C = copiar; Ctrl+X = recortar; Ctrl+V = colar.*

### Questão 12 (Material-base, Parte 3 — Q12, convertida)
- **Enunciado**: Quais recursos estão disponíveis na guia 'Inserir' do Word?
- **Alternativas**: A) Tabela, Imagem e Cabeçalho e Rodapé *(Correta)* · B) Negrito, Itálico e Sublinhado · C) Margens, Orientação e Colunas · D) Sumário Automático, Legenda e Notas de Rodapé
- **Gabarito**: **A**
- **Dica Pedagógica**: *A guia Inserir adiciona objetos; formatação básica fica em Página Inicial e sumário em Referências.*

### Questão 13 (Material-base, Parte 3 — Q13, convertida — Aulas 02/04)
- **Enunciado**: Como salvar ou imprimir um documento no formato PDF diretamente pelo Word 2010?
- **Alternativas**: A) Arquivo > Salvar como > tipo PDF (ou Imprimir > Microsoft Print to PDF) *(Correta)* · B) Copiar o texto e colar no Paint · C) Renomear o arquivo `.docx` para `.pdf` · D) Apertar `Ctrl+P` e escolher a opção 'Imagem'
- **Gabarito**: **A**
- **Dica Pedagógica**: *Renomear a extensão não converte o arquivo. Use Salvar como PDF ou Microsoft Print to PDF.*

### Questão 14 (Complementar — Aula 02, Parte 1 do material)
- **Enunciado**: Qual configuração de parágrafo atende às normas ABNT para o corpo de um trabalho acadêmico?
- **Alternativas**: A) Comic Sans 14, centralizado, espaçamento simples · B) Arial ou Times New Roman 12, justificado, entrelinha 1,5 e recuo de 1,25 cm *(Correta)* · C) Calibri 11, à esquerda, espaçamento duplo · D) Courier New 10, à direita, espaçamento triplo
- **Gabarito**: **B**
- **Dica Pedagógica**: *Regra da Parte 1: Times New Roman 12, entrelinha 1,5, justificado e recuo na primeira linha.*

### Questão 15 (Complementar — Aula 11, tabelas)
- **Enunciado**: Em uma tabela comercial de orçamento, qual é o alinhamento recomendado para a coluna de valores em Reais (R$)?
- **Alternativas**: A) Alinhar à Esquerda · B) Alinhar à Direita *(Correta)* · C) Justificado · D) Centralizado
- **Gabarito**: **B**
- **Dica Pedagógica**: *Alinhar à direita mantém as casas decimais na mesma coluna vertical.*

---

## 🖥️ 4. Fluxo de Execução da Prova na Interface (`#screen-quiz` e `#screen-result`)

### 4.1 Identificação e Instruções Iniciais (`#screen-start`)
- Campo de input obrigatório: `#student-name` (com sanitização contra tags HTML e validação de nome mínimo de 3 caracteres).
- Alerta visual das regras da prova: 15 questões, nota mínima 7,0, proibido colar, salvamento automático ativo.
- Botão acionador: `btn-start-quiz` ("Iniciar a Avaliação Oficial").

### 4.2 Navegação e Tela da Prova (`#screen-quiz`)
- Barra de trilha com nós interativos (`.trail-node`, `.trail-line`).
- Metadados da questão ativa (`Questão X de 15`).
- Cartões acessíveis de alternativas (`.opt` com foco visual por teclado e área de clique generosa).
- Dica pedagógica retrátil com o botão `💡 Precisa de uma dica?` (revela `#hint-box`).
- Botões de navegação: `← Questão Anterior` e `Próxima Questão →` / `Finalizar e Enviar Prova`.

### 4.3 Tela de Resultados e Certificação (`#screen-result`)
- **Badge de Status**:
  - Se nota >= 7,0: Ícone de Troféu dourado (`🏆`) com fundo verde e mensagem **"PARABÉNS! VOCÊ FOI APROVADO(A)!"**.
  - Se nota < 7,0: Ícone de Alerta (`⚠️`) com fundo âmbar e mensagem **"REVISÃO NECESSÁRIA. NOTA INSUFICIENTE."**.
- **Nota em Destaque**: Cálculo visual formatado (ex: `8,7 / 10,0` — `13 acertos de 15 questões`).
- **Tabela de Breakdown**: Lista as 15 questões, indicando `✓ Correta` (verde) ou `✗ Incorreta` (vermelho), exibindo a justificativa do gabarito.
- **Comprovante Criptográfico Oficial**:
  - Código identificador Hash SHA-256 gerado em tempo real pelo `QuizEngine.generateSignature`.
  - Caixa de código em tipografia monospace JetBrains Mono com botão "📋 Copiar Código".
- **Botões de Ação Final**:
  - `📥 Baixar Comprovante Oficial (.txt)`: Faz o download de arquivo estruturado para arquivo pessoal do aluno.
  - `📱 Enviar ao Professor via WhatsApp`: Monta a URL `https://api.whatsapp.com/send?phone=...` com mensagem pré-formatada.
  - `✉️ Enviar Comprovante por E-mail`: Abre o cliente de e-mail institucional.
  - `↺ Recomeçar a Avaliação`: Limpa o `localStorage` e permite refazer a prova após revisão dos conteúdos.
