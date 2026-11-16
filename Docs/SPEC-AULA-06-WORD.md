# 📘 SPEC-AULA-06-WORD — Especificação Técnica e Pedagógica da Aula 06 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 📝 ESPECIFICADA E PRONTA PARA IMPLEMENTAÇÃO

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 6 Word_Configuracao_de_Pagina_e_Layout/Aula6Word_Configuracao_de_Pagina_e_Layout.html` | 44.192 bytes | **Apostila original da aula** — Margens, papel A4, quebras de página vs seção, desvinculação de cabeçalhos e papel timbrado |

### 1.2 Estrutura do Conteúdo Original
1. **Configuração de Página**:
   - Margens do documento: modelos prontos e medidas personalizadas.
   - Tamanho do Papel: Padrão nacional **A4 (21,0 cm x 29,7 cm)** vs padrão norte-americano Carta (Letter).
   - Orientação mista: Como ter folhas em Retrato e Paisagem no mesmo arquivo sem quebrar a paginação.
2. **Quebra de Página vs Quebra de Seção (O Divisor de Águas)**:
   - **Quebra de Página (`Ctrl + Enter`)**: Apenas empurra o cursor para o início da página seguinte. Toda a configuração de cabeçalho, rodapé e margem continua a mesma.
   - **Quebra de Seção (Próxima Página)**: Cria uma barreira de isolamento arquitetural no arquivo. Permite que a nova seção tenha orientação Paisagem, margens diferentes ou numeração própria.
   - **Quebra de Seção (Contínua)**: Cria uma nova seção sem pular de folha (usada para intercalar trechos de 1 coluna com trechos de 2 ou 3 colunas).
3. **Cabeçalho e Rodapé Profissionais**:
   - Como abrir: Duplo clique na margem superior ou inferior.
   - Ferramenta **Primeira Página Diferente**: Impede que a capa do trabalho exiba cabeçalho ou número de página.
   - O botão decisivo **"Vincular ao Anterior"**: Por padrão, o Word repete o cabeçalho em todas as seções. Ao clicar em *Vincular ao Anterior* para desativá-lo, o vínculo é quebrado e o novo cabeçalho torna-se 100% independente.
4. **Numeração de Páginas nas Normas ABNT**:
   - A contagem de páginas começa na folha de rosto, mas o número só pode aparecer impresso a partir da primeira página textual (Introdução). Isso é resolvido com Quebra de Seção + Desvincular Cabeçalho!
5. **Oficinas Práticas**: Produção de Papel Timbrado corporativo e relatório com gráfico em tabela apensa em página horizontal.

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 06: Layout de Página, Quebras de Seção & Cabeçalhos** |
| **Subtítulo** | *Tamanho A4, quebra de página (Ctrl+Enter), quebras de seção e desvinculação de cabeçalhos* |
| **ID da Seção no Portal** | `<section id="screen-lesson-6" class="screen-view">` |
| **Senha de Acesso** | `wf006` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l6-check-1` a `l6-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-6`, `#gamify-label-6` (0% a 100%), `#gamify-badge-box-6` |
| **Persistência LocalStorage** | Leitura: `word_lesson_6_progress` \| Quiz: `word_lesson_6_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Dominar a engenharia estrutural do documento Word: entender a diferença vital entre quebra de página e quebra de seção, desvincular cabeçalhos para trabalhos ABNT e criar papéis timbrados profissionais.
- **Roteiro em 5 Passos (Chips)**:
  1. Padronizar o tamanho de papel oficial para A4 (21 x 29,7 cm).
  2. Aplicar a Quebra de Página com o atalho `Ctrl + Enter`.
  3. Inserir Quebra de Seção (Próxima Página) para alternar orientações.
  4. Desvincular Cabeçalhos e Rodapés com o botão "Vincular ao Anterior".
  5. Configurar numeração ABNT iniciando a partir da introdução.
- **Contador**: `#l6-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l6` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: O Padrão do Papel A4 e as Margens do Documento
- Por que o Brasil usa o padrão **A4** (norma ISO 216): Medidas exatas de `21,0 cm` de largura por `29,7 cm` de altura.
- O perigo do formato "Carta" (Letter): Muitas impressoras vêm de fábrica configuradas para Carta (padrão americano), o que corta a base do texto na hora de imprimir em folha A4.
- Onde conferir: Guia `Layout da Página` > botão `Tamanho` > selecionar `A4`.
- *Check 1*: `[ ] Passo 1: Verifiquei e configurei o tamanho do papel do documento estritamente como A4.`

### FASE 2: Quebra de Página (Ctrl + Enter) vs Múltiplos Enters
- O erro de quem não fez o curso: Pressionar `Enter` 15 vezes até o texto pular para a folha seguinte. Quando uma linha é adicionada lá em cima, todo o resto do trabalho desce e fica desalinhado!
- A regra de ouro: Sempre que terminar um capítulo, pressione `Ctrl + Enter`. O Word insere uma **Quebra de Página** invisível e o próximo título sempre começará no topo da folha seguinte, independentemente do que você adicionar antes.
- *Check 2*: `[ ] Passo 2: Pratiquei o atalho Ctrl+Enter para forçar o início de um capítulo na próxima página.`

### FASE 3: Quebra de Seção — A Fronteira Entre Ambientes Diferentes
- Quando a Quebra de Página não resolve: Se você quiser colocar a página 4 deitada (Paisagem) para caber uma tabela grande, enquanto as páginas 1 a 3 continuam em pé (Retrato), a quebra de página não serve!
- Como fazer:
  - Posicionar o cursor no fim da página 3.
  - Ir na guia `Layout da Página` > botão `Quebras` > escolher **Quebra de Seção: Próxima Página**.
  - Agora, na página 4, mude a Orientação para *Paisagem*. As páginas 1 a 3 continuam intactas em *Retrato*!
- *Check 3*: `[ ] Passo 3: Inseri uma quebra de seção do tipo 'Próxima Página' e alterei a orientação de uma folha.`

### FASE 4: Cabeçalho, Rodapé e o Botão "Vincular ao Anterior"
- Editando cabeçalhos: Dê um duplo clique rápido na margem do topo da folha. A guia contextual **Ferramentas de Cabeçalho e Rodapé > Design** é aberta.
- O segredo da ABNT e de relatórios executivos:
  - Marcar a opção **Primeira Página Diferente**: A capa fica limpa sem cabeçalho e sem rodapé.
  - Para criar seções com cabeçalhos diferentes: Navegue até a Seção 2 e localize o botão **Vincular ao Anterior**. Clique nele para desativar a seleção amarela. Pronto! Agora o cabeçalho da Seção 2 pode ter um texto completamente novo sem alterar a Seção 1.
- *Check 4*: `[ ] Passo 4: Desvinculei o cabeçalho da nova seção desmarcando o botão 'Vincular ao Anterior'.`

### FASE 5: Numeração ABNT e Criação de Papel Timbrado
- **Numeração a partir da Introdução**:
  - Com o cabeçalho desvinculado da seção anterior, ir em `Número de Página` > `Início da Página` > selecionar alinhamento à direita.
  - Ir em `Formatar Números de Página...` e definir se continua a numeração da seção anterior (ex: página 5) ou se inicia em 1.
- **Papel Timbrado Profissional**:
  - Inserir a logomarca da empresa e o slogan no Cabeçalho.
  - Inserir CNPJ, endereço e telefone de contato no Rodapé.
  - Ao fechar o cabeçalho, todos os dados ficam esmaecidos e protegidos em todas as páginas timbradas.
- *Check 5*: `[ ] Passo 5: Configurei a numeração de páginas independente e criei a estrutura de papel timbrado.`

---

## 📝 4. Exercício de Fixação da Aula 06 (`QUIZ_CFG[6]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **Qual é o atalho correto do teclado para inserir uma QUEBRA DE PÁGINA no Word?**
   - a) `Shift + Enter`
   - b) `Ctrl + Enter` *(Correta)*
   - c) `Alt + Enter`
   - d) `Ctrl + Espaço`
   - *Dica*: Segure o Ctrl e toque em Enter para pular de folha com segurança.
2. **Qual é a diferença fundamental entre uma 'Quebra de Página' e uma 'Quebra de Seção'?**
   - a) Não existe diferença, são exatamente a mesma coisa.
   - b) A Quebra de Página apenas pula de folha, enquanto a Quebra de Seção cria um bloco isolado que permite mudar margens, orientação e cabeçalhos. *(Correta)*
   - c) A Quebra de Seção apaga os parágrafos anteriores.
   - d) A Quebra de Página só funciona se o computador estiver conectado à internet.
   - *Dica*: Seção cria compartimentos independentes dentro do mesmo documento.
3. **Qual tamanho de papel é o padrão oficial utilizado no Brasil para documentos formais e trabalhos acadêmicos?**
   - a) Papel Carta (Letter).
   - b) Papel A4 (21,0 cm x 29,7 cm). *(Correta)*
   - c) Papel Ofício 2.
   - d) Papel Envelope A6.
   - *Dica*: O padrão internacional ISO adotado no Brasil é o A4.
4. **Para que serve o botão 'Vincular ao Anterior' nas ferramentas de Cabeçalho e Rodapé?**
   - a) Salvar o documento na nuvem.
   - b) Fazer com que o cabeçalho da seção atual repita obrigatoriamente o mesmo conteúdo da seção anterior. *(Correta)*
   - c) Corrigir a ortografia de cabeçalhos antigos.
   - d) Enviar o documento por e-mail.
   - *Dica*: Ao desativar esse botão, o cabeçalho atual torna-se livre e independente.
5. **Qual recurso deve ser ativado para que a CAPA de um documento não exiba nenhum cabeçalho nem número de página?**
   - a) Páginas Pares e Ímpares Diferentes.
   - b) Primeira Página Diferente. *(Correta)*
   - c) Excluir Cabeçalho Global.
   - d) Modo Escuro.
   - *Dica*: O nome da opção indica claramente que a primeira folha terá comportamento próprio.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 6`:
- **Seção 6.1**: *Padrões de Papel e Dimensionamento Físico de Documentos*
  - Análise das dimensões do formato A4 (21 x 29,7 cm) e comparação com o padrão Carta.
- **Seção 6.2**: *A Engenharia de Quebras: Páginas vs Seções*
  - Ilustração HTML (`sec.html`): Diagrama esquemático mostrando Seção 1 (Retrato) conectada por uma Quebra de Seção à Seção 2 (Paisagem) e Seção 3 (Retrato).
- **Seção 6.3**: *Desvinculação de Cabeçalhos e Rodapés para Trabalhos ABNT*
  - Fluxograma do botão "Vincular ao Anterior" desativado para ocultar número na capa e sumário.
- **Seção 6.4**: *Montagem Prática de Papel Timbrado Corporativo*
  - Passo a passo para fixar logotipo no cabeçalho e dados institucionais no rodapé.
