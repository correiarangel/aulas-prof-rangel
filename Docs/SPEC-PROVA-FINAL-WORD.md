# 🏆 SPEC-PROVA-FINAL-WORD — Especificação da Avaliação Final do Módulo Word
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 📝 ESPECIFICADA E PRONTA PARA IMPLEMENTAÇÃO

---

## 🎯 1. Visão Geral da Avaliação Final

A **Avaliação Didática Oficial do Módulo 2: Microsoft Word** tem como objetivo aferir o domínio teórico, operacional e técnico do aluno sobre todo o ciclo de vida de criação e formatação de documentos profissionais e acadêmicos.

A prova integra a trilha do aluno no portal (`modules/word/index.html`), rodando 100% no navegador via JavaScript e `QuizEngine`, com persistência automática de respostas, geração de comprovante oficial inviolável com criptografia **Hash SHA-256**, conformidade plena com as normas da ABNT e suporte total à acessibilidade e visualização em dispositivos móveis (Regra 6 do `AGENTS.md`).

---

## 📐 2. Parâmetros e Regras da Prova

| Parâmetro | Regra / Diretriz Oficial | Detalhes e Justificativa |
| :--- | :--- | :--- |
| **Composição da Prova** | **15 Questões Objetivas** | Cobre integralmente as 11 aulas do curso de forma equilibrada e sem lacunas. |
| **Escala de Pontuação** | **0,0 a 10,0 Pontos** | Cada questão objetiva possui peso uniforme de ~0,67 ponto (ou sistema ponderado de 15 x 0,5 pt = 7,5 pt + 2,5 pt práticos). Na versão digital automatizada do portal, calcula-se `(acertos / 15) * 10`. |
| **Nota Mínima de Aprovação** | **7,0 (>= 70%)** | O aluno precisa acertar no mínimo **11 questões** para obter o certificado/comprovante de aprovação. |
| **Persistência de Estado** | **`QuizEngine.saveState/loadState`** | As respostas são salvas no `localStorage` a cada clique (`word_final_exam_state`). Se a página for recarregada ou a conexão cair, a prova reabre exatamente onde parou. |
| **Recomeço Limpo** | **Botão "↺ Recomeçar a prova"** | Limpa a chave do `localStorage`, zera o array em memória e devolve o aluno à Tela 1 de identificação. |
| **Segurança e Antifraude** | **Assinatura Digital SHA-256** | O comprovante final contém hash criptográfico gerado pelo algoritmo SHA-256 incorporando nome do aluno, acertos, nota, data/hora e o salt institucional do professor. |
| **Canais de Entrega** | **Baixar TXT, WhatsApp e E-mail** | O aluno pode baixar o comprovante em texto puro (.txt), enviar diretamente para o WhatsApp do professor (`19 99130-6907`) ou para o e-mail oficial (`okcomputer.use.linux@gmail.com`). |

---

## 📚 3. Matriz de Competências e Banco Oficial de Questões (15 Questões)

Abaixo está o banco completo de 15 questões oficiais calibradas e revisadas (sem erros de atalhos e com unidades exatas):

### Questão 01 (Aula 01 — Atalhos e Salvamento)
- **Enunciado**: Qual é a combinação de teclas do teclado utilizada para SALVAR o documento atual no Microsoft Word configurado em português?
- **Alternativas**:
  - A) `Ctrl + S`
  - B) `Ctrl + B` *(Correta)*
  - C) `Ctrl + P`
  - D) `Ctrl + A`
- **Gabarito**: **B**
- **Dica Pedagógica**: *Cuidado com a pegadinha clássica: no Word em inglês é Ctrl+S, mas no Word em português o atalho de salvar é Ctrl+B (de Baixar cópia/Salvar) e Ctrl+S aplica Sublinhado.*

---

### Questão 02 (Aula 01 — Régua e Recuos)
- **Enunciado**: Na régua horizontal do Word, qual marcador é responsável EXCLUSIVAMENTE por recuar a primeira linha de cada parágrafo?
- **Alternativas**:
  - A) O retângulo inferior na base da régua.
  - B) O triângulo superior apontado para baixo. *(Correta)*
  - C) O triângulo inferior apontado para cima.
  - D) O marcador circular da margem direita.
- **Gabarito**: **B**
- **Dica Pedagógica**: *O triângulo superior com a ponta voltada para baixo comanda exclusivamente a primeira linha do parágrafo.*

---

### Questão 03 (Aula 02 — Normas ABNT: Margens)
- **Enunciado**: Segundo a norma da Associação Brasileira de Normas Técnicas (ABNT), quais devem ser as medidas padrão das margens de uma folha A4 para trabalhos acadêmicos?
- **Alternativas**:
  - A) Superior 2 cm, Esquerda 2 cm, Inferior 3 cm e Direita 3 cm.
  - B) Superior 3 cm, Esquerda 3 cm, Inferior 2 cm e Direita 2 cm. *(Correta)*
  - C) Todas as quatro margens com exatamente 2,5 cm.
  - D) Superior 4 cm, Esquerda 3 cm, Inferior 3 cm e Direita 2 cm.
- **Gabarito**: **B**
- **Dica Pedagógica**: *Lembre-se da regra '3-3-2-2': as margens esquerda e superior recebem 3 cm para dar espaço à encadernação e perfuração da folha.*

---

### Questão 04 (Aula 02 — Normas ABNT: Tipografia e Parágrafo)
- **Enunciado**: Qual das alternativas abaixo apresenta a configuração de tipografia e parágrafo exigida pela ABNT para o corpo do texto de um trabalho acadêmico?
- **Alternativas**:
  - A) Fonte Comic Sans 14, alinhamento centralizado e espaçamento simples.
  - B) Fonte Arial ou Times New Roman tamanho 12, alinhamento Justificado, espaçamento entre linhas de 1,5 e recuo de 1,25 cm na primeira linha. *(Correta)*
  - C) Fonte Calibri 11, alinhamento à esquerda, espaçamento duplo e sem recuo.
  - D) Fonte Courier New 10, alinhamento à direita e espaçamento triplo.
- **Gabarito**: **B**
- **Dica Pedagógica**: *A ABNT exige seriedade: Arial ou Times New Roman tamanho 12, texto justificado (Ctrl+J), entrelinhas 1,5 e recuo de 1,25 cm.*

---

### Questão 05 (Aula 03 — Alinhamentos e Atalhos)
- **Enunciado**: Qual alinhamento de texto faz com que as margens esquerda e direita do parágrafo fiquem perfeitamente retas e alinhadas simultaneamente?
- **Alternativas**:
  - A) Alinhar à Esquerda (`Ctrl + Q`).
  - B) Centralizar (`Ctrl + E`).
  - C) Alinhar à Direita (`Ctrl + G`).
  - D) Justificar (`Ctrl + J`). *(Correta)*
- **Gabarito**: **D**
- **Dica Pedagógica**: *O alinhamento justificado distribui o espaçamento entre as palavras para que o texto forme um bloco reto nas duas laterais.*

---

### Questão 06 (Aula 03 — Espaçamento Profissional em Pontos)
- **Enunciado**: Qual é o método profissional e correto no Word para distanciar dois parágrafos sem precisar pressionar a tecla Enter repetidas vezes?
- **Alternativas**:
  - A) Ajustar o valor do campo 'Espaçamento Depois' (medido em pontos - pt) na janela de Parágrafo. *(Correta)*
  - B) Aumentar o tamanho da fonte para 72 no final da frase.
  - C) Desenhar uma linha invisível do Paint entre os parágrafos.
  - D) Segurar a barra de espaço até pular de linha.
- **Gabarito**: **A**
- **Dica Pedagógica**: *O espaçamento 'Depois' em pontos (ex: 6 pt ou 12 pt) afasta os parágrafos com precisão milimétrica sem criar linhas em branco.*

---

### Questão 07 (Aula 04 — Quebra de Texto em Imagens)
- **Enunciado**: Ao inserir uma imagem no Word, ela frequentemente impede a movimentação livre do cursor. Qual opção de 'Quebra Automática de Texto' deve ser selecionada para que a imagem possa ser arrastada e o texto flua ao redor de suas bordas?
- **Alternativas**:
  - A) Alinhado com o texto.
  - B) Quadrado (ou Justo). *(Correta)*
  - C) Ocultar texto.
  - D) Enviar para trás da tela.
- **Gabarito**: **B**
- **Dica Pedagógica**: *A opção Quadrado ou Justo liberta a imagem da trava de linha, fazendo o texto contorná-la suavemente.*

---

### Questão 08 (Aula 04 — Bordas de Página)
- **Enunciado**: Em qual ferramenta da caixa de diálogo 'Bordas e Sombreamento' o usuário pode escolher molduras ilustradas prontas (como estrelas, fitas ou temas decorativos) para criar um certificado?
- **Alternativas**:
  - A) No menu suspenso 'Arte'. *(Correta)*
  - B) No controle de brilho da imagem.
  - C) No botão de verificação ortográfica.
  - D) Na régua de tabulação decimal.
- **Gabarito**: **A**
- **Dica Pedagógica**: *O campo 'Arte' na aba Bordas da Página oferece dezenas de molduras gráficas decorativas.*

---

### Questão 09 (Aula 05 — Estilos e Atualização em Cascata)
- **Enunciado**: Se um documento de 80 páginas possui todos os títulos formatados com o estilo nativo 'Título 1' e o orientador solicitar a mudança da cor dos títulos de azul para preto, qual é a forma mais rápida e profissional de realizar a alteração?
- **Alternativas**:
  - A) Percorrer as 80 páginas selecionando cada título individualmente para trocar a cor.
  - B) Clicar com o botão direito sobre o estilo 'Título 1' na Galeria de Estilos, escolher 'Modificar', alterar a cor para preto e salvar. *(Correta)*
  - C) Excluir todos os títulos e digitá-los novamente.
  - D) Aplicar uma marca d'água preta sobre a folha.
- **Gabarito**: **B**
- **Dica Pedagógica**: *Modificar o estilo atualiza todos os títulos vinculados a ele instantaneamente em uma fração de segundo.*

---

### Questão 10 (Aula 05 — Pincel de Formatação)
- **Enunciado**: Qual ação deve ser executada no botão do Pincel de Formatação para que ele permaneça 'travado/ativo', permitindo copiar o formato para múltiplos trechos de texto sem desativar após o primeiro clique?
- **Alternativas**:
  - A) Clicar com o botão direito do mouse.
  - B) Dar um clique duplo (dois cliques rápidos) sobre o ícone do Pincel. *(Correta)*
  - C) Segurar a tecla Enter enquanto clica no pincel.
  - D) Arrastar o pincel para a lixeira do Windows.
- **Gabarito**: **B**
- **Dica Pedagógica**: *Dois cliques no pincel travam a ferramenta. Para destravar após o uso, basta pressionar a tecla Esc.*

---

### Questão 11 (Aula 06 — Quebra de Página vs Seção)
- **Enunciado**: Para criar um documento onde a página 3 esteja na orientação Paisagem (horizontal), enquanto as páginas 1, 2 e 4 permanecem na orientação Retrato (vertical), qual recurso estrutural é OBRIGATÓRIO utilizar?
- **Alternativas**:
  - A) Quebra de Página simples (`Ctrl + Enter`).
  - B) Quebra de Seção do tipo 'Próxima Página'. *(Correta)*
  - C) Diminuir o zoom para 10%.
  - D) Inserir uma caixa de texto gigante.
- **Gabarito**: **B**
- **Dica Pedagógica**: *A Quebra de Seção cria um novo compartimento independente no arquivo, permitindo trocar a orientação da página sem afetar o restante.*

---

### Questão 12 (Aula 06 — Desvinculação de Cabeçalhos)
- **Enunciado**: Na elaboração de um Trabalho de Conclusão de Curso (TCC), a Capa e o Sumário não devem exibir numeração de página impressa, mas a numeração deve começar na Introdução. Como isso é tecnicamente viabilizado no Word?
- **Alternativas**:
  - A) Colocando um corretivo branco sobre a tela do monitor.
  - B) Inserindo uma Quebra de Seção antes da Introdução e desativando o botão 'Vincular ao Anterior' no cabeçalho da nova seção. *(Correta)*
  - C) Apagando o número de todas as páginas ao mesmo tempo.
  - D) Criando arquivos de texto separados no Bloco de Notas.
- **Gabarito**: **B**
- **Dica Pedagógica**: *Desativar o botão 'Vincular ao Anterior' quebra o cordão umbilical entre as seções, permitindo que a Introdução tenha cabeçalho próprio.*

---

### Questão 13 (Aula 07 — Controle de Alterações)
- **Enunciado**: Durante a revisão de um contrato no Word, o que acontece com uma palavra excluída quando o recurso 'Controlar Alterações' (Track Changes) está ATIVADO?
- **Alternativas**:
  - A) A palavra desaparece do documento imediatamente sem deixar vestígios.
  - B) A palavra permanece visível, mas fica riscada no meio (com efeito tachado) e em cor destacada para aprovação posterior. *(Correta)*
  - C) O Word fecha o arquivo e pede uma senha de administrador.
  - D) A palavra é enviada automaticamente para a impressora.
- **Gabarito**: **B**
- **Dica Pedagógica**: *O controle de alterações mantém o texto apagado riscado em vermelho até que o revisor clique em 'Aceitar' ou 'Rejeitar'.*

---

### Questão 14 (Aula 08 — Sumário Automático)
- **Enunciado**: O que faz com que o comando 'Sumário Automático' da guia Referências consiga identificar perfeitamente os títulos e as respectivas páginas do trabalho?
- **Alternativas**:
  - A) A quantidade de pontos digitados manualmente entre o título e o número.
  - B) A aplicação prévia dos Estilos 'Título 1', 'Título 2' e 'Título 3' nos títulos do documento. *(Correta)*
  - C) A cor da fonte do texto.
  - D) O tamanho das imagens inseridas na capa.
- **Gabarito**: **B**
- **Dica Pedagógica**: *O sumário automático depende 100% da leitura dos estilos de título aplicados na estrutura do trabalho.*

---

### Questão 15 (Aula 11 — Tabelas Profissionais)
- **Enunciado**: Em uma tabela comercial de orçamento criada no Word, qual é o alinhamento de texto recomendado para a coluna que contém os valores e preços em Reais (R$)?
- **Alternativas**:
  - A) Alinhar à Esquerda.
  - B) Alinhar à Direita. *(Correta)*
  - C) Justificado.
  - D) Letra Capitular.
- **Gabarito**: **B**
- **Dica Pedagógica**: *Alinhar à direita faz com que as casas decimais (centavos) fiquem rigorosamente alinhadas na mesma linha vertical, facilitando a leitura de valores.*

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
