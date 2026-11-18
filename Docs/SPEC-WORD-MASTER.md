# 📘 SPEC-WORD-MASTER — Especificação Mestre do Módulo 2: Microsoft Word
### Portal Didático de Informática Básica | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai (Global)**: Este documento é o SDD Mestre exclusivo do **Módulo 2 (Microsoft Word)** e herda todas as regras globais de UI/UX, acessibilidade, responsividade mobile, segurança, persistência e atalhos definidas em [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md) e no [AGENTS.md](file:///home/rangel/git-dev/aulas/AGENTS.md).

---

## 🎯 1. Visão Geral do Módulo

O **Módulo 2: Microsoft Word — Processador de Textos Profissional** é a trilha didático-prática do portal voltada ao domínio completo da escrita, edição, padronização visual e acadêmica de documentos. O curso capacita o aluno a criar desde comunicados simples e certificados até relatórios executivos e trabalhos acadêmicos completos em conformidade com as **Normas ABNT (Associação Brasileira de Normas Técnicas)**.

O módulo roda em ambiente estático (**HTML5 Semântico, CSS3 Vanilla com variáveis de Design System e JavaScript ES6+**) hospedado no GitHub Pages, garantindo velocidade instantânea, responsividade absoluta em dispositivos móveis (largura útil máxima com no máximo 4px de respiro lateral conforme Regra 6 do `AGENTS.md`), motor de persistência automática com `QuizEngine.saveState/loadState` e download de apostilas completas em PDF com ilustrações HTML reais e imagens do acervo do professor.

---

## 🗺️ 2. Matriz Geral do Catálogo de Aulas (11 Aulas + Prova Final)

O currículo foi compilado e reorganizado a partir dos arquivos originais em [AulaOrigem/word/](file:///home/rangel/git-dev/aulas/AulaOrigem/word/) e estruturado em 11 aulas sequenciais e complementares, culminando na Avaliação Final:

| Aula # | Título Oficial da Aula | Origem do Conteúdo | Tópicos Principais | Senha Sugerida | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aula 01** | **Introdução ao Word & Digitação Eficiente** | `Aula 1 Introducao_ao_Microsoft_Word_v2` | Interface do Word, Faixa de Opções (Guias), Barra de Acesso Rápido, Zoom, Seleção com mouse, Atalhos essenciais PT-BR, Gerador `=rand()`, Régua (recuo de 1ª linha, esquerdo e deslocado), Teclado e ergonomia (Shift, Ctrl, Alt). | `wa001` | 📝 Especificada (`SPEC-AULA-01-WORD.md`) |
| **Aula 02** | **Normas ABNT & Formatação Básica** | `Aula 2 Word_ABNT` | Conceito da ABNT, Margens ABNT (3-3-2-2 cm), Tipografia padrão (Arial/Times 12 e títulos 14), Parágrafo (Justificado Ctrl+J, entrelinhas 1,5, recuo 1,25 cm), Numeração de páginas, Inserção de imagens com quebra justa, Texto em 2 Colunas e Letra Capitular. | `wb002` | 📝 Especificada (`SPEC-AULA-02-WORD.md`) |
| **Aula 03** | **Formatação Avançada de Parágrafos & Elementos Visuais** | `Aula 3 - Formatação de Parágrafos no Word 2010_2013` | 4 Alinhamentos de texto, Espaçamento antes/depois de parágrafos (pt), Marcadores e Numeração de listas, Bordas e Sombreamento de parágrafos, Marca d'água de texto/imagem, Exercício prático temático "Manchas em Marte". | `wc003` | 📝 Especificada (`SPEC-AULA-03-WORD.md`) |
| **Aula 04** | **Bordas Decorativas, Formas & Quebra de Texto** | `Aula 4  USANDO FIGURAS BORDAS NO WORD 2010-2013` | Bordas de Página (simples, tripla, decorativa/arte), Inserção de Formas geométricas, WordArt, Estilização visual (preenchimento, contorno, sombra), Opções de Quebra Automática de Texto (Quadrado, Justo, Atrás do Texto, Em Frente ao Texto). | `wd004` | 📝 Especificada (`SPEC-AULA-04-WORD.md`) |
| **Aula 05** | **Estilos Rápidos & Pincel de Formatação** | `Aula 5 Word_Estilos_Formatacao_Avancada` | Conceito e importância de Estilos, Galeria de Estilos (Normal, Título 1, Título 2), Criação de estilos personalizados por exemplo, Modificação de estilos existentes, Uso produtivo do Pincel de Formatação (clique simples vs duplo), Limpar Toda a Formatação. | `we005` | 📝 Especificada (`SPEC-AULA-05-WORD.md`) |
| **Aula 06** | **Layout de Página, Quebras de Seção & Cabeçalhos** | `Aula 6 Word_Configuracao_de_Pagina_e_Layout` | Margens personalizadas, Orientação (Retrato vs Paisagem), Tamanhos de papel (A4 vs Carta), Quebra de Página (Ctrl+Enter) vs Quebras de Seção (Próxima Página, Contínua), Cabeçalho/Rodapé desvinculados ("Vincular ao Anterior"), Primeira Página Diferente, Papel timbrado. | `wf006` | 📝 Especificada (`SPEC-AULA-06-WORD.md`) |
| **Aula 07** | **Revisão de Texto, Comentários & Colaboração** | `Aula 07 Colaboracao_Comentarios_Word.html` | Guia Revisão, Verificação Ortográfica e Gramatical (F7), Inserção e resposta a Comentários, Controle de Alterações (Track Changes), Painel de Revisões, Aceitar/Rejeitar mudanças, Proteção de documento com restrição de edição, Inspeção e remoção de metadados. | `wg007` | 📝 Especificada (`SPEC-AULA-07-WORD.md`) |
| **Aula 08** | **Sumário Automático & Índices de Ilustrações** | `Aula 8 Sumário Automático no Word` | Estrutura de Sumário acadêmico, Hierarquia com Título 1, Título 2 e Título 3, Inserção do Sumário Automático pela guia Referências, Atualização do sumário (apenas páginas vs índice inteiro), Personalização de níveis, Inserção de legendas e Índice de Figuras. | `wh008` | 📝 Especificada (`SPEC-AULA-08-WORD.md`) |
| **Aula 09** | **Oficina de Listas Multinível, Tabulação & Certificados** | `Aula 10 -Exercício_ Criando Listas no Word.md` | Listas numeradas e marcadores avançados, Listas multinível com teclas Tab e Shift+Tab, Tabulação com pontos de preenchimento, Criação de Certificado Oficial com moldura/arte, Projeto integrado "Ciclo Solar" (2 colunas, capitular, quebra de texto e marca d'água). | `wi009` | 📝 Especificada (`SPEC-AULA-09-WORD.md`) |
| **Aula 10** | **Pesquisa Acadêmica, Estrutura ABNT & Citações** | `Aula 10   Criando uma Pesquisa no Word seguindo regras simples da ABNT` | O que é pesquisa científica vs plágio, Estrutura completa de trabalho (Capa, Folha de Rosto, Sumário, Introdução, Desenvolvimento, Conclusão, Referências), Regras ABNT de citação direta/indireta, Formatação de Referências de sites e artigos na web. | `wj010` | 📝 Especificada (`SPEC-AULA-10-WORD.md`) |
| **Aula 11** | **Revisão Geral Integrada & Tabelas Profissionais** | `AULA 11 - REVISÃO FINAL DO MICROSOFT WORD 2010` | Mapa mental completo de atalhos e guias do Word, Criação e formatação de Tabelas (linhas, colunas, sombreamento, bordas, alinhamento numérico, mesclagem e fórmulas básicas), 3 oficinas práticas de revisão geral antes da prova. | `wk011` | 📝 Especificada (`SPEC-AULA-11-WORD.md`) |
| **Prova Final** | **Avaliação Prática & Teórica do Módulo Word** | `modules/word/index.html` + `Prova_Final_Windows 24_09_2026` | 15 Questões objetivas abrangentes (7,5 pts) cobrindo todos os módulos + 2 desafios práticos orientados (2,5 pts), nota mínima 7,0, emissão de Comprovante Oficial com assinatura Hash SHA-256 e gravação de estado. | Livre / Acesso Hub | 📝 Especificada (`SPEC-PROVA-FINAL-WORD.md`) |

---

## 🏛️ 3. Arquitetura do Portal do Aluno (`modules/word/index.html`)

O arquivo `modules/word/index.html` passa a seguir o padrão arquitetural comprovado dos módulos Windows e Excel:

### 3.1 Padrão de Telas (`<section class="screen-view">`)
- `#screen-hub`: Hub principal do aluno com a grade de cards das 11 aulas + card de destaque da Prova Final, termômetro de progresso geral do módulo e atalhos rápidos.
- `#screen-lesson-1` até `#screen-lesson-11`: Telas completas e autônomas de cada aula.
- `#screen-quiz`: Tela dedicada da Avaliação Final com barra de progresso (trail nodes), cronômetro opcional, alternativas em cartões acessíveis e dicas pedagógicas.
- `#screen-result`: Tela de resultado oficial da Prova Final com breakdown detalhado, nota final (0 a 10), selo de aprovação/revisão, comprovante em texto puro (.txt), link para envio por WhatsApp e e-mail institucional.

### 3.2 Componentes Padrão de Toda Aula
Toda tela `screen-lesson-N` contém obrigatoriamente:
1. **Cabeçalho de Ações da Aula**:
   - `← Voltar ao Menu`: Retorna instantaneamente ao `#screen-hub`.
   - `🖨️ Imprimir`: Aciona `window.print()` estilizado sem cabeçalhos de navegador.
   - `📑 Baixar Apostila PDF`: Invoca `downloadLessonPDF('word', N)` gerando o PDF com ilustrações HTML reais e imagens de apoio.
2. **Barra Gamificada de Progresso da Leitura**:
   - Elementos `#gamify-fill-N`, `#gamify-label-N`, `#gamify-badge-box-N` atualizados a cada checkbox marcado.
3. **Card Principal de Leitura (`.lesson-reading-card`)**:
   - **FASE 0 — Bloco Tutorial Obrigatório**:
     - Caixa de destaque visual com objetivo pedagógico da aula.
     - Roteiro numerado em passos sequenciais (chips clicáveis ou guiados).
     - Contador interativo de passos (ex: `▢ 0 / 5`).
     - Botão `▶ ENTENDI! QUERO COMEÇAR A AULA ↓` que realiza rolagem suave até a Fase 1.
   - **Barra de Abas de Tópicos (`<nav class="topic-tabs-bar">`)**:
     - Botões de navegação por tópicos com estado ativo e indicador de completude.
   - **Fases do Conteúdo (`.phase-content-block`)**:
     - Explicações claras, parágrafos concisos em tom acolhedor e encorajador.
     - Mini-simuladores visuais interativos em HTML/CSS (ex.: Régua interativa, Galeria de Estilos, Simulador de Margens).
     - **Check de Conclusão Distribuído**: Cada fase encerra-se com o checkbox `#lN-check-P` acompanhado da instrução de execução daquele passo. O próximo passo só é liberado após a validação do passo atual.
4. **Painel de Exercício de Fixação (`#fixation-panel-lN`)**:
   - Posicionado ao final da leitura, ativado automaticamente quando todos os checks da aula são concluídos (100%).
   - Contém 5 perguntas didáticas de fixação com feedback imediato de resposta correta/incorreta e justificativa do professor.
   - Integrado ao `QuizEngine.saveState(storageKey, state)` e `QuizEngine.loadState(storageKey, name)`.
   - Botão **"↺ Recomeçar o exercício"** que limpa o armazenamento local daquela aula e zera as respostas.
   - Emissão de Comprovante de Conclusão de Leitura e Exercício com assinatura digital SHA-256.

---

## 🎨 4. Regras Mobile Globais (Invioláveis — Regra 6 do `AGENTS.md`)

- Em viewports móveis (`<= 767px`), o conteúdo de TODAS as telas do Módulo Word deve ocupar **100% da largura útil da tela**, com margem e padding lateral máximo de **~4px** por lado, eliminando o "efeito linguiça" ou cartões duplamente aninhados.
- Central de verdade única: o bloco `/* REGRAS MOBILE GLOBAIS */` presente no final de `assets/css/style.css`.
- É **proibido** criar regras `@media` locais em `modules/word/index.html` que reintroduzam paddings laterais maiores ou que sobreponham o bloco global de `style.css`.

---

## 🔒 5. Sistema de Senhas, Persistência & Antifraude

### 5.1 Matriz Oficial de Senhas do Módulo Word

| Aula | Senha Oficial | Chave no `localStorage` da Leitura | Chave no `localStorage` do Quiz |
| :---: | :---: | :---: | :---: |
| **Aula 01** | `wa001` | `word_lesson_1_progress` | `word_lesson_1_quiz` |
| **Aula 02** | `wb002` | `word_lesson_2_progress` | `word_lesson_2_quiz` |
| **Aula 03** | `wc003` | `word_lesson_3_progress` | `word_lesson_3_quiz` |
| **Aula 04** | `wd004` | `word_lesson_4_progress` | `word_lesson_4_quiz` |
| **Aula 05** | `we005` | `word_lesson_5_progress` | `word_lesson_5_quiz` |
| **Aula 06** | `wf006` | `word_lesson_6_progress` | `word_lesson_6_quiz` |
| **Aula 07** | `wg007` | `word_lesson_7_progress` | `word_lesson_7_quiz` |
| **Aula 08** | `wh008` | `word_lesson_8_progress` | `word_lesson_8_quiz` |
| **Aula 09** | `wi009` | `word_lesson_9_progress` | `word_lesson_9_quiz` |
| **Aula 10** | `wj010` | `word_lesson_10_progress` | `word_lesson_10_quiz` |
| **Aula 11** | `wk011` | `word_lesson_11_progress` | `word_lesson_11_quiz` |
| **Prova Final** | Livre (Acesso direto) | — | `word_final_exam_state` |

### 5.2 Validação Criptográfica SHA-256
- Cada comprovante emitido (seja de fixação de aula ou da prova final) gera uma assinatura digital calculada por `QuizEngine.generateSignature(data)` incorporando:
  - Nome completo do aluno
  - Módulo e Número da Aula
  - Pontuação / Nota obtida
  - Timestamp ISO exato
  - Salt institucional do professor (`PROF_RANGEL_SALT`)

---

## 📑 6. Diretrizes Obrigatórias da Apostila PDF (`assets/js/pdf-lessons.js`)

Para cumprir as Regras 2, 3, 4 e 8 do `AGENTS.md`:

1. **Substituição do Objeto Legado**: O bloco estático genérico `word: { sections: [...] }` em `assets/js/pdf-lessons.js` deve ser inteiramente substituído por seções dedicadas com o campo obrigatório `lessonNum: N` (onde `N` varia de 1 a 11).
2. **Proibição de Seções Órfãs**: Toda e qualquer seção de Word deve possuir seu respectivo `lessonNum`. Nenhuma seção genérica sem `lessonNum` pode existir em `LESSONS.word`.
3. **Ilustrações HTML Reais (`sec.html`)**: Toda aula do PDF deve conter ilustrações HTML reais no campo `sec.html` (miniaturas de réguas com recuos, tabelas formatadas, caixas de estilos, diagramas de margens e modelos de citações), renderizadas com as classes de estilo padrão do popup (`.mini-sheet`, `.fun-highlight`, `.es-sheet-box`, `.es-sheet-titlebar`).
4. **Imagens Reais do Repositório**: As imagens extraídas do material de origem serão organizadas em pastas padronizadas em `assets/img/word/AulaN/imageX.png` e referenciadas via URLs relativas resolvidas pelo helper de PDF.
5. **Verificação de Fatos**: Atalhos do Word conferidos e corrigidos (Ctrl+S salvar, Ctrl+B negrito, Ctrl+I itálico, Ctrl+U sublinhado, Ctrl+A selecionar tudo, Ctrl+J justificar, Ctrl+R alinhar à direita; os atalhos NÃO mudam com o idioma), unidades de medida ABNT corretas (cm para margens e recuos, pt para entrelinhas e espaçamento antes/depois).

---

## 🔬 7. Bateria de Testes e Validação Estrutural

Toda entrega no módulo Word deve ser auditada e validada através de testes automatizados com headless Chrome ou Node.js:
1. `node --check assets/js/pdf-lessons.js` para garantir zero erros de sintaxe no gerador de PDF.
2. Checagem de balanceamento de tags e ausência de scripts quebrados no inline de `modules/word/index.html`.
3. Auditoria geométrica com CDP: certificar que nenhum painel fixo ou modal tenha largura 0 ou ancestral conflitante com `transform` (Regra 10 do `AGENTS.md`).
4. Validação da persistência do `QuizEngine`: testar restauração de estado, persistência de nome do aluno e funcionamento do botão "↺ Recomeçar".
