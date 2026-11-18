# 📘 SPEC-AULA-03-WORD — Especificação Técnica e Pedagógica da Aula 03 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: ✅ IMPLEMENTADA E VALIDADA (02/11/2026)

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 3 - Formatação de Parágrafos no Word 2010_2013/Aula3FormataodePargrafosnoWord20102013.html` | 54.075 bytes | **Apostila original da aula** — Alinhamentos, espaçamentos em pontos (pt), recuos, bordas, sombreamento, marca d'água e texto prático sobre Marte |

### 1.2 Estrutura do Conteúdo Original
1. **Os Quatro Alinhamentos Fundamentais**:
   - Alinhar à Esquerda (`Ctrl + L`): Padrão ocidental de leitura, margem direita irregular.
   - Centralizar (`Ctrl + E`): Usado em títulos, capas, poesias e certificados.
   - Alinhar à Direita (`Ctrl + R`): Usado em datas de cartas, assinaturas e referências.
   - Justificar (`Ctrl + J`): Ambas as margens perfeitamente alinhadas, padrão de livros e jornais.
2. **Espaçamento entre Parágrafos (Antes e Depois)**:
   - Medido em pontos (`pt`), evita o vício amador de pressionar repetidas vezes a tecla `Enter` para afastar parágrafos.
   - Exemplo profissional: Espaçamento de 0 pt Antes e 6 pt Depois.
3. **Tipos de Recuo de Parágrafo**:
   - Primeira Linha: Avança apenas a frase de abertura do parágrafo (1,25 cm).
   - Deslocamento (Pendente / Francês): Primeira linha na margem e as seguintes recuadas (essencial para referências bibliográficas).
   - Recuo Esquerdo e Direito: Afasta todo o parágrafo de ambos os lados (usado em citações longas > 3 linhas recuadas a 4 cm).
4. **Listas: Marcadores e Numeração**:
   - Marcadores com símbolos gráficos (bullets).
   - Numeração com algarismos arábicos, romanos ou letras.
5. **Bordas e Sombreamento de Parágrafo**:
   - Adiciona caixas de destaque com fundo colorido (sombreamento) para avisos, caixas de notas e comunicados.
6. **Marca d'Água no Documento**:
   - Inserção de texto de fundo semitransparente ("CONFIDENCIAL", "AMOSTRA", "RASCUNHO") ou logotipo da empresa.
7. **Exercício Prático Integrador**: Aplicação de todas as técnicas no artigo "As rochas com manchas de leopardo que podem ter pistas sobre vida em Marte".

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 03: Formatação Avançada de Parágrafos & Elementos Visuais** |
| **Subtítulo** | *Alinhamentos, espaçamento antes/depois (pt), recuos, bordas, sombreamento e marca d'água* |
| **ID da Seção no Portal** | `<section id="screen-lesson-3" class="screen-view">` |
| **Senha de Acesso** | `wc003` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l3-check-1` a `l3-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-3`, `#gamify-label-3` (0% a 100%), `#gamify-badge-box-3` |
| **Persistência LocalStorage** | Leitura: `word_lesson_3_progress` \| Quiz: `word_lesson_3_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Dominar a formatação cirúrgica de parágrafos, aprendendo a afastar blocos de texto profissionalmente com medidas em pontos (pt), criar caixas de destaque com bordas e proteger documentos com marcas d'água.
- **Roteiro em 5 Passos (Chips)**:
  1. Conhecer e alternar os 4 alinhamentos de texto usando atalhos.
  2. Ajustar espaçamentos entre linhas e espaçamentos Antes/Depois em pontos.
  3. Aplicar recuos especiais (Primeira Linha e Deslocamento).
  4. Criar caixas de destaque com Bordas e Sombreamento colorido.
  5. Inserir Marca d'Água de texto no documento.
- **Contador**: `#l3-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l3` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: O Domínio dos Quatro Alinhamentos e Atalhos
- Tabela prática e interativa dos alinhamentos:
  - Esquerda (`Ctrl + L`)
  - Centralizado (`Ctrl + E`)
  - Direita (`Ctrl + R`)
  - Justificado (`Ctrl + J`)
- Exemplos de onde usar cada um em uma carta comercial: Cabeçalho à esquerda, Título centralizado, Local e data à direita, Corpo justificado.
- *Check 1*: `[ ] Passo 1: Pratiquei os 4 alinhamentos com os atalhos Ctrl+L, Ctrl+E, Ctrl+R e Ctrl+J.`

### FASE 2: Espaçamento de Linhas e o Segredo do Antes/Depois (pt)
- O vício do aluno iniciante: Pressionar `Enter` duas ou três vezes para afastar parágrafos, gerando espaços desiguais e páginas vazias acidentais.
- A técnica profissional: Abrir a janela de Parágrafo (`Página Inicial` > grupo Parágrafo > seta no canto inferior direito):
  - **Espaçamento Antes**: Espaço antes do parágrafo começar (ex: 0 pt).
  - **Espaçamento Depois**: Espaço reservado logo após o parágrafo terminar (ex: 6 pt ou 12 pt). Ao dar um único `Enter`, o Word afasta o próximo bloco perfeitamente.
- *Check 2*: `[ ] Passo 2: Configurei o espaçamento Antes e Depois em pontos (pt) sem precisar dar Enter repetidos.`

### FASE 3: Recuo Deslocado (Francês) e Recuo de Citações
- Diferença prática entre os recuos:
  - **Recuo de 1ª Linha**: Padrão ABNT de 1,25 cm.
  - **Recuo Deslocado (Pendente)**: A primeira linha fica encostada na margem esquerda e todas as linhas seguintes dão um passo à frente. Usado universalmente para referências bibliográficas.
  - **Recuo Esquerdo de 4 cm**: Usado para citações diretas longas (mais de 3 linhas), com fonte tamanho 10 e espaçamento simples.
- *Check 3*: `[ ] Passo 3: Entendi a diferença entre Recuo de Primeira Linha e Recuo Deslocado para referências.`

### FASE 4: Caixas de Destaque com Bordas e Sombreamento
- Como chamar a atenção para um aviso importante ou lembrete:
  - Selecionar o parágrafo.
  - Na guia `Página Inicial`, clicar na seta do botão `Bordas` > escolher `Bordas Externas`.
  - Clicar no botão do balde de tinta (`Sombreamento`) e escolher uma cor suave (como cinza claro ou bege claro).
- *Check 4*: `[ ] Passo 4: Criei uma caixa de aviso com bordas completas e sombreamento de fundo suave.`

### FASE 5: Protegendo o Documento com Marca d'Água
- Finalidade da Marca d'Água: Identificar versões preliminares, confidencialidade ou propriedade da empresa.
- Passo a passo:
  - No Word 2010/2013: Guia `Layout da Página` > grupo *Plano de Fundo da Página* > `Marca d'Água`.
  - Em versões recentes: Guia `Design` > `Marca d'Água`.
  - Escolher uma opção rápida ("CONFIDENCIAL", "AMOSTRA") ou clicar em *Personalizar Marca d'Água* para digitar o próprio texto ou inserir imagem.
- *Check 5*: `[ ] Passo 5: Inseri uma marca d'água de texto personalizado em segundo plano no documento.`

---

## 📝 4. Exercício de Fixação da Aula 03 (`QUIZ_CFG[3]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **Qual é o atalho correto do teclado para CENTRALIZAR um título no Word em português?**
   - a) `Ctrl + C`
   - b) `Ctrl + E` *(Correta)*
   - c) `Ctrl + T`
   - d) `Ctrl + K`
   - *Dica*: `Ctrl + C` é copiar; a centralização no Word PT-BR usa a letra E.
2. **Por que é considerado um erro amador pressionar a tecla Enter várias vezes para separar parágrafos?**
   - a) Porque desliga o computador.
   - b) Porque cria linhas em branco invisíveis que desalinham o texto ao adicionar novas frases. *(Correta)*
   - c) Porque o Word não aceita mais de 5 palavras por folha.
   - d) Porque apaga o cabeçalho.
   - *Dica*: O espaçamento correto deve ser definido no campo 'Espaçamento Depois' em pontos (pt).
3. **Qual tipo de recuo mantém a PRIMEIRA linha do parágrafo na margem e recua todas as linhas seguintes?**
   - a) Recuo de Primeira Linha.
   - b) Recuo Deslocado (ou Francês). *(Correta)*
   - c) Recuo Direito.
   - d) Sem Recuo.
   - *Dica*: Esse recuo 'desloca' o corpo do texto mantendo o início firme, típico de referências.
4. **Em qual ferramenta da guia Página Inicial é possível colocar uma cor de fundo em um parágrafo inteiro para criar uma caixa de aviso?**
   - a) Cor da Fonte (letra A com barra colorida).
   - b) Balde de Tinta de Sombreamento. *(Correta)*
   - c) Pincel de Formatação.
   - d) Localizar e Substituir.
   - *Dica*: O ícone parece um baldinho derramando tinta.
5. **Para que serve o recurso de 'Marca d'Água' no Microsoft Word?**
   - a) Imprimir o documento em papel fotográfico.
   - b) Inserir um texto ou imagem semitransparente ao fundo de todas as páginas (como 'Confidencial'). *(Correta)*
   - c) Molhar a folha antes da impressão.
   - d) Inserir um vírus de proteção.
   - *Dica*: É uma marca suave no fundo da página que não atrapalha a leitura.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 3`:
- **Seção 3.1**: *Os Quatro Alinhamentos e Boas Práticas Editoriais*
  - Detalhamento de atalhos e regras estéticas.
- **Seção 3.2**: *Espaçamentos Entre Linhas e Espaçamentos em Pontos (pt)*
  - Ilustração HTML (`sec.html`): Comparativo visual entre texto espaçado com múltiplos "Enters" (amador) vs parágrafos com "Espaçamento Depois: 10 pt" (profissional).
- **Seção 3.3**: *Tipos de Recuo de Parágrafo e Citações Longas ABNT*
  - Exemplo prático de citação longa recuada a 4 cm com fonte 10 e espaçamento simples.
- **Seção 3.4**: *Bordas, Sombreamento e Marcas d'Água*
  - Caixa de destaque estilizada demonstrando borda dupla e sombreamento suave.

---

## ✅ 6. Registro de Implementação (02/11/2026)

| Peça | Onde | Estado |
| :--- | :--- | :--- |
| Tela da aula | `modules/word/index.html` → `#screen-lesson-3` | ✅ `<section class="screen-view">` como irmã das demais telas |
| FASE 0 | `#l3-fase-0` | ✅ Objetivo + roteiro em 5 chips + contador `#l3-checklist-status` |
| Fases 1–5 | `#tab-btn-3-1..5` | ✅ Alinhamentos, Espaçamento (pt), Recuos, Bordas/Sombreamento, Marca d'Água |
| Checks distribuídos | `#l3-check-1..5` + `#check-read-3-1..5` | ✅ Um check no fim de cada fase, com trava sequencial |
| Simuladores | `l3SetAlign()`, `l3SetSpace()` | ✅ Alinhamento ao vivo (4 modos) e espaçamento em pt (0/6/12/18) |
| Fixação | `QUESTIONS_LESSON_3` + `QUIZ_CFG[3]` | ✅ 5 questões; `moduleId: "word_lesson_3_quiz"`; gabarito `[2, 0, 1, 3, 2]` |
| Roteamento | `TOTAL_TOPICS`, `SEQUENTIAL_LESSONS`, `promptLessonPassword`, `routes` | ✅ Aula 3 liberada com senha `wc003` |
| Apostila PDF | `assets/js/pdf-lessons.js` → `LESSONS.word.sections` | ✅ Seções 3.0–3.5 com `lessonNum: 3` e `html` ilustrado |

**Validações estáticas executadas:** `node --check assets/js/pdf-lessons.js` OK; script inline de `modules/word/index.html` extraído e checado OK; conferência estrutural (5 fases, 5 checks, 5 botões de leitura, 6 abas, tags balanceadas, 18 seções no módulo Word e 6 seções da Aula 03 com `html`).

**Pendente de validação em navegador:** bateria CDP automatizada (desbloqueio `wc003`, checks sequenciais, simuladores, quiz 5/5 com SHA-256, PDF da Aula 3 e auditoria mobile 375/390 px). Não havia Playwright/Puppeteer disponível na sessão de implementação.
