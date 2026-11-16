# 📘 SPEC-AULA-10-WORD — Especificação Técnica e Pedagógica da Aula 10 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 📝 ESPECIFICADA E PRONTA PARA IMPLEMENTAÇÃO

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 10   Criando uma Pesquisa no Word seguindo regras simples da ABNT/Aula10CriandoumaPesquisanoWordseguindoregrass.html` | 24.407 bytes | **Apostila original da aula** — Metodologia de pesquisa, estrutura ABNT (Capa a Referências), regras de citação de sites e exemplo completo de trabalho |

### 1.2 Estrutura do Conteúdo Original
1. **O Que É Uma Pesquisa Acadêmica**:
   - Diferença entre copiar conteúdo e pesquisar: Pesquisar é reunir dados de fontes confiáveis, analisar com espírito crítico, organizar a informação e dar os devidos créditos aos autores originais.
   - O crime de plágio: Apresentar o texto de outra pessoa como se fosse seu é infração ética e acarreta nota zero imediata.
2. **A Estrutura Padrão do Trabalho Acadêmico (ABNT Simplificada)**:
   - **Elementos Pré-Textuais**:
     - *Capa*: Nome da Instituição, Nome do Aluno, Título do Trabalho em destaque, Cidade e Ano.
     - *Folha de Rosto*: Mesmos dados da capa acrescidos da nota de identificação ("Trabalho apresentado à disciplina de Informática...").
     - *Sumário*: Lista automática dos capítulos.
   - **Elementos Textuais**:
     - *Introdução*: Contextualização do tema e objetivo da pesquisa.
     - *Desenvolvimento*: O corpo principal do texto, fatiado em seções temáticas e subtópicos lógicos.
     - *Conclusão*: Síntese das descobertas e impressões do autor.
   - **Elementos Pós-Textuais**:
     - *Referências*: Relação em ordem alfabética de todos os livros, artigos e sites consultados.
3. **Normas de Referências Bibliográficas para Sites da Internet (ABNT NBR 6023)**:
   - Com autor conhecido:
     `SOBRENOME, Nome. Título do Artigo. Nome do Site, ano da publicação. Disponível em: <link_completo>. Acesso em: dia mês abreviado. ano.`
   - Sem autor (autoria institucional/coletiva):
     `TÍTULO DA PÁGINA EM MAIÚSCULAS. Nome do Site, ano. Disponível em: <link>. Acesso em: dia mês. ano.`
4. **Técnicas de Busca e Colagem Higienizada**:
   - Comandos avançados de pesquisa no Google (ex: `tema site:br`, `tema filetype:pdf`).
   - Regra da Paráfrase: Ler o conceito e reescrever com as próprias palavras.
   - Colagem limpa: Usar a opção *Manter Somente Texto* para não corromper o padrão ABNT do documento.

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 10: Pesquisa Acadêmica, Estrutura ABNT & Citações** |
| **Subtítulo** | *Estrutura de trabalho (Capa a Referências), prevenção de plágio e referências de sites* |
| **ID da Seção no Portal** | `<section id="screen-lesson-10" class="screen-view">` |
| **Senha de Acesso** | `wj010` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l10-check-1` a `l10-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-10`, `#gamify-label-10` (0% a 100%), `#gamify-badge-box-10` |
| **Persistência LocalStorage** | Leitura: `word_lesson_10_progress` \| Quiz: `word_lesson_10_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Aprender a estruturar um trabalho acadêmico ou relatório de pesquisa completo dentro das normas da ABNT: montar a capa e folha de rosto, redigir introdução, desenvolvimento e conclusão, e referenciar corretamente artigos e páginas da internet evitando o plágio.
- **Roteiro em 5 Passos (Chips)**:
  1. Compreender o que é uma pesquisa e a gravidade do plágio.
  2. Construir a Capa e a Folha de Rosto nas medidas formais.
  3. Estruturar Introdução, Desenvolvimento e Conclusão.
  4. Aprender a regra da ABNT para referenciar sites e links da internet.
  5. Pesquisar no Google e colar somente texto limpo no Word.
- **Contador**: `#l10-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l10` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: Pesquisa Séria vs Plágio (A Regra da Autoria)
- O que é plágio: Copiar um parágrafo da Wikipédia ou de uma notícia e colar no trabalho sem citar a fonte, fingindo que foi você quem escreveu.
- A técnica da Paráfrase: Leia o texto de referência, feche a aba do navegador, pense sobre o que compreendeu e digite a ideia com as suas próprias palavras.
- Dando o devido crédito: Sempre anote a URL (link), o nome do site e o dia exato em que você fez a consulta.
- *Check 1*: `[ ] Passo 1: Entendi o conceito de plágio e aprendi a técnica de parafrasear conceitos com minhas palavras.`

### FASE 2: A Capa Oficial e a Folha de Rosto ABNT
- **Montagem da Capa**:
  - Topo da folha: Nome da Escola ou Faculdade (Centralizado, Maiúsculas, tamanho 12 ou 14).
  - Meio da página: Nome do Aluno e, logo abaixo, TÍTULO DO TRABALHO em destaque (Negrito, tamanho 14).
  - Base da página: Cidade e Ano de entrega (ex: `Vargem Grande do Sul – SP / 2026`).
- **Folha de Rosto**:
  - Repete os dados da capa, mas inclui do lado direito (recuado a 8 cm da margem esquerda) a nota explicativa da finalidade do trabalho e nome do professor.
- *Check 2*: `[ ] Passo 2: Montei o modelo padrão de Capa e Folha de Rosto seguindo as medidas da ABNT.`

### FASE 3: O Corpo da Pesquisa (Introdução, Miolo e Conclusão)
- **Introdução**: Um texto claro e acolhedor (1 a 2 páginas) apresentando o tema escolhido, a motivação da pesquisa e os objetivos gerais.
- **Desenvolvimento**: O miolo do trabalho organizado em seções hierárquicas (usando Título 1 e Título 2).
- **Conclusão**: O fechamento do trabalho. Não deve apresentar ideias novas, mas sim recapitular os pontos principais e expressar o que foi concluído a partir dos dados.
- *Check 3*: `[ ] Passo 3: Organizei os tópicos da pesquisa em Introdução, Desenvolvimento e Conclusão.`

### FASE 4: Referências de Sites da Internet (NBR 6023)
- O padrão exato que a banca examinadora exige:
  - Com autor:
    `SILVA, João. História dos Jogos Digitais. TechGames, 2024. Disponível em: <https://www.techgames.com.br/historia>. Acesso em: 15 mar. 2026.`
  - Sem autor individual (artigo de enciclopédia/portal):
    `HISTÓRIA DO WINDOWS. Wikipédia, 2026. Disponível em: <https://pt.wikipedia.org/wiki/Microsoft_Windows>. Acesso em: 10 fev. 2026.`
- Detalhes fundamentais: Os meses são abreviados com 3 letras e ponto (`jan.`, `fev.`, `mar.`, `abr.`, `mai.`, `jun.`, `jul.`, `ago.`, `set.`, `out.`, `nov.`, `dez.` — exceto maio que não tem ponto).
- *Check 4*: `[ ] Passo 4: Formatei referências bibliográficas de internet seguindo o modelo oficial da norma ABNT.`

### FASE 5: Dicas de Busca no Google e Colagem Segura
- Truques de busca profissional no Google:
  - `termo de pesquisa site:br` (restringe a páginas brasileiras).
  - `termo de pesquisa filetype:pdf` (encontra apostilas, teses e artigos acadêmicos prontos).
- Colando com segurança no Word:
  - Ao copiar um trecho, clique com o botão direito no Word e escolha **Manter Somente Texto** (ícone com uma pranchetinha e a letra `A`). O texto assume imediatamente o estilo Normal do seu documento sem herdar cores ou fontes feias da internet.
- *Check 5*: `[ ] Passo 5: Apliquei filtros de busca no Google e pratiquei a colagem com 'Manter Somente Texto'.`

---

## 📝 4. Exercício de Fixação da Aula 10 (`QUIZ_CFG[10]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **O que caracteriza a prática inaceitável de PLÁGIO em um trabalho escolar ou acadêmico?**
   - a) Ler livros em bibliotecas públicas.
   - b) Copiar textos, frases ou ideias de outra pessoa na internet e apresentar como se fossem seus, sem citar a fonte. *(Correta)*
   - c) Tirar uma nota 10 na avaliação.
   - d) Usar fonte Arial tamanho 12.
   - *Dica*: Plágio é a apropriação indevida da autoria alheia sem o devido crédito.
2. **De acordo com a norma ABNT NBR 6023, como deve iniciar a referência de um site quando NÃO se sabe o nome do autor pessoal?**
   - a) Pelo nome do dono da Lan House.
   - b) Pelo link HTTP direto.
   - c) Pela primeira palavra do TÍTULO do artigo em letras MAIÚSCULAS. *(Correta)*
   - d) Não é necessário colocar nada.
   - *Dica*: Quando não há autor físico, o título do artigo em maiúsculas assume a liderança da referência.
3. **Qual comando especial de busca no Google restringe a pesquisa apenas a arquivos em formato PDF (comuns em artigos acadêmicos)?**
   - a) `pdf:apenas`
   - b) `filetype:pdf` *(Correta)*
   - c) `abrir-no-word`
   - d) `baixar.agora`
   - *Dica*: O operador 'filetype:' filtra por extensão do arquivo desejado.
4. **Qual é a opção correta de colagem no Word para transferir um texto da internet sem trazer junto fundos cinzas e fontes desconfiguradas?**
   - a) Manter Formatação Original.
   - b) Mesclar Formatação.
   - c) Manter Somente Texto. *(Correta)*
   - d) Colar como Imagem Bitmap.
   - *Dica*: 'Manter Somente Texto' remove toda a sujeira visual e herda o padrão do seu documento.
5. **Em qual parte da estrutura do trabalho acadêmico o autor deve resumir as principais conclusões alcançadas, sem introduzir novos tópicos?**
   - a) Na Capa.
   - b) Na Conclusão (Considerações Finais). *(Correta)*
   - c) No Sumário.
   - d) Na Folha de Rosto.
   - *Dica*: É a seção final do texto onde se fecham os objetivos da pesquisa.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 10`:
- **Seção 10.1**: *Metodologia Científica e a Ética da Pesquisa*
  - O papel da pesquisa no aprendizado e combate ao plágio.
- **Seção 10.2**: *A Estrutura Padrão: Pré-Textuais, Textuais e Pós-Textuais*
  - Ilustração HTML (`sec.html`): Fluxograma visual demonstrando as 3 grandes partes do trabalho acadêmico (Capa, Folha de Rosto, Sumário | Introdução, Desenvolvimento, Conclusão | Referências).
- **Seção 10.3**: *Manual Prático de Referências da Internet (NBR 6023)*
  - Modelos comentados com exemplos reais de citação de sites, artigos online e Wikipédia.
- **Seção 10.4**: *Pesquisa Eficiente na Web e Colagem Higienizada*
  - Comandos úteis de busca no Google e filtros de arquivos.
