# 🗺️ ROADMAP — Portal de Aulas de Informática Básica
### Prof. Marcos Rangel | WR Capacitação Profissional

---

## 📌 Status Geral dos Módulos

### 💻 Módulo 1: Sistema Operacional Windows
- [x] Catálogo Geral do Módulo em **12 Aulas** (Aulas 1-7 e 9-11 com selo `🔒 Em Construção`, Aula 08 `🔓 Liberada` e Aula 12 `📝 Prova Final`)
- [x] **Aula 08**: Diagnóstico de Memória, Restauração do Sistema e Criação de Mídia de Instalação no Windows (Leitura Prática "Mão na Massa" em 5 Tópicos com 28 imagens ilustrativas)
- [x] **Aula 08**: Exercício de Fixação em Formato Quiz (5 Questões) com Dicas, Validação de Nota e Assinatura Digital SHA-256 (Senha `wr0926`)
- [x] **Interface Ergonomicamente Ajustada**: Botão `📑 Baixar Apostila Didática em PDF` posicionado no início/topo das aulas em todos os módulos (Windows e Internet)
- [x] Emissão de Comprovantes TXT, Apostila PDF, WhatsApp e E-mail com SHA-256
- [ ] **11 Aulas restantes** (1-7 e 9-12): Material didático interativo pendente de implementação (`🔒 Em Construção`)


### 📝 Módulo 2: Microsoft Word
- [ ] **Material Didático Interativo por Aulas**: NÃO iniciado — atualmente contém apenas o simulado/prova de 10 questões
- [x] Simulado/Prova de 10 Questões (nota mínima 7,0) com desbloqueio por checkbox de leitura do PDF
- [x] Emissão de Comprovante TXT, PDF, WhatsApp e E-mail com SHA-256
- [ ] Desenvolver o modelo de aulas didáticas interativas conforme o Master Lesson Blueprint

### 📝 Módulo 3: Microsoft Excel
- [x] **Especificação SDD Mestre**: Arquitetura do Módulo Excel em 13 Aulas, Design Tokens Verde Excel, Matriz de Senhas (`xa001`-`xm013`) e Simulador Interativo (`Docs/SPEC-EXCEL-MASTER.md`)
- [x] **Especificação SDD Aula 01**: Introdução ao Excel, Interface, Tipos de Dados, Navegação e Quiz de 5 Questões (`Docs/SPEC-EXCEL-AULA-01.md`)
- [x] **Auditoria SDD Pré-Implementação**: 12 achados corrigidos (senhas, quizzes de 5 questões em todas as aulas, nota 7.0, hierarquia documental)
- [x] **Material Didático Interativo Aula 01**: Implementação HTML/JS do Hub de 13 Aulas, Conteúdo Didático da Aula 01, Simulador Grid Inspector e Quiz de 5 Questões (`modules/excel/index.html`)
- [x] **Especificação SDD Aula 02**: Operações Básicas & Fórmulas Simples (operadores, referências relativas/absolutas, alça de preenchimento, copiar fórmulas, 7 exercícios práticos), Simulador "Fórmula Builder" e Quiz de 5 Questões (`Docs/SPEC-EXCEL-AULA-02.md`)
- [x] **Material Didático Interativo Aula 02**: Implementação HTML/JS das Operações Básicas & Fórmulas (6 tópicos, referências relativa/absoluta com tecla F4, alça de preenchimento, copiar fórmulas, 7 exercícios práticos para reprodução no Excel real), Simulador Interativo "Fórmula Builder" com cálculo em tempo real dos 4 operadores, referência absoluta e parser de fórmulas (SOMA, %, + - * /), e Quiz de 5 Questões com SHA-256 (`modules/excel/index.html`)
- [x] **Reforço Didático Aula 01 (Operadores como Tópico 7)**: Aula 01 refatorada para **7 tópicos** — novo Tópico 7 "Introdução aos Operadores" (`+ - * / %`) com tabela de operadores, regra de ordem/parênteses, **worksheet HTML estilo Excel** (letras de coluna A–E, cabeçalho, 5 linhas, total `=SOMA(E2:E6) → R$ 72,80`) e bloco teaser de funções, além da **Atividade Prática "Controle de Gastos Pessoais"** (aluno cria planilha real com operadores básicos + `=SOMA()`); imagem PNG de operadores **removida** (tela e PDF); gamificação/guarda refatorada para dinâmica (7 tópicos Aula 1, 6 tópicos Aula 2); aba de exercício de fixação integrada (`tab-l1-8`). §1.2 imagem anatomia ampliada e §1.4 expandido (base sólida sobre tipos de dados, número-como-texto, Caixa de Nome/Barra de Fórmulas)
- [x] **Reforço Didático Aula 02 (Função SOMA + 7 Planilhas Desenhadas)**: §2.2 ganhou bloco "O que é uma FUNÇÃO?" e a planilha "Lista de Gatos" com `=SOMA(C2:C6)` (imagem `aula2_gatos_soma.png`); §2.6 reescrito com os 7 exercícios, cada um com **PNG da planilha resolvida, tabela HTML preenchida e passo a passo** (`aula2_ex1..ex7`, geradas via `/tmp/gen_sheets2.py` com PIL); exercício 5 corrigido para consistência pedagógica (percentual fixo `$C$1`)
- [x] **Motor de PDF atualizado (`assets/js/pdf-lessons.js`)**: seção 1.7 (operadores → tabela estilo Excel + atividade de gastos pessoais, PNG ruim removido), §1.4 expandido (tipos de dados), §2.2 (Lista de Gatos + SOMA) e §2.6 (7 imagens das planilhas) nas apostilas PDF das Aulas 01 e 02
- [x] **Especificação SDD Aula 03**: Funções de Cálculo Essenciais — SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM, com base no material real `Aula-3-Excel_Exercicios_Praticos.html` (4 exercícios práticos: Custos, Estoque, Vendas, Contagem), Simulador "Function Lab" e Quiz de 5 Questões (`Docs/SPEC-EXCEL-AULA-03.md`)
- [x] **Material Didático Interativo Aula 03**: Implementação HTML/JS das Funções de Cálculo (6 tópicos, SOMA/MÉDIA/MÁXIMO/MÍNIMO/CONT.VALORES/CONT.NÚM, 4 exercícios práticos para reprodução no Excel real), Simulador Interativo "Function Lab" com cálculo em tempo real das funções + modo Contadoras (CONT.NÚM vs CONT.VALORES), e Quiz de 5 Questões com SHA-256 (senha `xc003`) (`modules/excel/index.html`)
- [x] **Motor de PDF atualizado para Aula 03 (`assets/js/pdf-lessons.js`)**: seção de apostila da Aula 03 com 6 tópicos (SOMA, MÉDIA, MÁXIMO/MÍNIMO, CONT.VALORES/CONT.NÚM, Lab de Funções, 4 Exercícios Guiados), título de módulo atualizado e **planilhas desenhadas em HTML estilo Excel** (com colunas/cabeçalho/total) nos Tópicos 1-3 (SOMA, MÉDIA, MÁXIMO/MÍNIMO) **e nos 4 Exercícios Guiados (3.6)**, além da nota `=MINIMOA(intervalo)` na 3.3
- [x] **Correção de contraste Aula 03 (`modules/excel/index.html`)**: texto do intro mudado de `--ink-light` (claro sobre fundo `--paper-beige` claro) para `--ink-dark`, garantindo legibilidade
- [x] **Planilhas desenhadas no site Aula 03 (`modules/excel/index.html`)**: `.excel-sheet-preview`/`.mini-sheet` com desenho estilo Excel (título, colunas A–E, cabeçalho, 3+ linhas, linha de total) nos Tópicos 1 (SOMA), 2 (MÉDIA) e 3 (MÁXIMO/MÍNIMO) + nota `=MINIMOA(intervalo)`
- [x] **Especificação SDD Aula 04**: Funções Lógicas Avançadas — SE, E, OU, NÃO, SE aninhado e Formatação Condicional com Fórmulas, com base no material real `Aula-4-Excel Funções Lógicas Avançadas` (7 tópicos + Exercício Financeiro de Classificação de Clientes), Simulador "Logic Lab" e Quiz de 5 Questões (`Docs/SPEC-EXCEL-AULA-04.md`)
- [x] **Material Didático Interativo Aula 04**: Implementação HTML/JS das Funções Lógicas Avançadas (7 tópicos: Revisão SE; SE+E; SE+OU; SE aninhado; NÃO; Logic Lab; Exercício Financeiro de Classificação de Clientes com Formatação Condicional), Simulador "Logic Lab" (paleta editável de alunos + recalculo em tempo real SE/E/OU/aninhado + Modo NÃO de inversão lógica + mini-demo de Formatação Condicional verde/vermelho) e Quiz de 5 Questões com SHA-256 (senha `xd004`, gabarito `GABARITO_L4 = [0, 1, 1, 2, 0]`) (`modules/excel/index.html`)
- [x] **Motor de PDF atualizado para Aula 04 (`assets/js/pdf-lessons.js`)**: seção de apostila da Aula 04 com 7 tópicos (SE, SE+E, SE+OU, SE aninhado, NÃO, Logic Lab, Exercício de Classificação de Clientes) e planilhas desenhadas em HTML estilo Excel (Aprovação de Alunos, Nota+Frequência, Comparativo E×OU, Classificação de Notas, Reforço Escolar, Classificação de Clientes) + fórmula `=$E2=` de Formatação Condicional
- [x] **Especificação SDD Aula 05**: Funções de Pesquisa & Referência — PROCV, PROCH, CORRESP, ÍNDICE e combinação ÍNDICE + CORRESP, com base no material real `Aula-5-Funcoes_Pesquisa_Referencia.html` (5 tarefas práticas), Simulador "Lookup Lab" e Quiz de 5 Questões (`Docs/SPEC-EXCEL-MASTER.md`)
- [x] **Material Didático Interativo Aula 05**: Implementação HTML/JS das Funções de Pesquisa (7 tópicos: PROCV; PROCH; ÍNDICE; CORRESP; ÍNDICE+CORRESP; Lookup Lab; Exercício Prático de Loja de Eletrônicos), Simulador "Lookup Lab" (tabela de produtos editável + busca em tempo real com fórmula =PROCV) e Quiz de 5 Questões com SHA-256 (senha `xe005`, gabarito `GABARITO_L5 = [1, 0, 2, 0, 2]`) (`modules/excel/index.html`)
- [x] **Motor de PDF atualizado para Aula 05 (`assets/js/pdf-lessons.js`)**: seção de apostila da Aula 05 com 7 tópicos (PROCV, PROCH, ÍNDICE, CORRESP, ÍNDICE+CORRESP, Lookup Lab, Exercício de Loja de Eletrônicos) e planilhas desenhadas em HTML estilo Excel (Tabela de Produtos, Metas Mensais, Frutas, Funcionários, Loja de Eletrônicos) + gabarito das 5 tarefas + resumo das funções
- [ ] Exercícios de Fixação e Quizzes das Aulas 06 a 13

### 📊 Módulo 4: Microsoft PowerPoint
- [ ] **Material Didático Interativo por Aulas**: NÃO iniciado — atualmente contém apenas o simulado/prova de 10 questões
- [x] Simulado/Prova de 10 Questões (nota mínima 7,0) com desbloqueio por checkbox de leitura do PDF
- [x] Emissão de Comprovante TXT, PDF, WhatsApp e E-mail com SHA-256
- [ ] Desenvolver o modelo de aulas didáticas interativas conforme o Master Lesson Blueprint

### 🌐 Módulo 5: Internet & Segurança
- [x] **Aula 01**: Introdução à Internet e Navegação Segura (Leitura em 6 Tópicos)
- [x] **Aula 01**: Exercício de Fixação (5 Questões) com Validação e Assinatura Digital SHA-256
- [x] **Aula 01**: Botões Finais Integrados (📄 TXT, 📑 PDF, 📱 WhatsApp `19 99130-6907`, ✉️ E-mail `okcomputer.use.linux@gmail.com`)
- [x] **Aula 01**: Remoção de botão de PDF redundante no cabeçalho superior do Hub
- [x] **Especificação SDD Geral**: Especificação da Arquitetura e Regras do Projeto (`Docs/SPEC-PROJECT-ARCHITECTURE.md`)
- [x] **Especificação SDD Aula 02**: Navegando na Internet & História do HTML (`Docs/SPEC-AULA-02.md`) com 18 imagens mapeadas
- [x] **Especificação SDD Aula 03**: Dominando o Google & Produtividade na Nuvem (`Docs/SPEC-AULA-03.md`) com Waffle e operadores
- [x] **Gerador de PDF Apostila Individual por Aula**: Reestruturação do `assets/js/pdf-lessons.js` com suporte a filtragem dinâmica por aula (`lessonNum`) e imagens ilustrativas dedicadas.
- [x] **Aula 02 (Implementação HTML)**: Navegando na Internet & História do HTML (6 Tópicos, Atividade do Bloco de Notas, 5 Questões e SHA-256 com senha `b002`)
- [x] **Aula 02 (Formulário & IA)**: Formulário interativo gerador de HTML com botões de copiar/baixar + Atividade prática de Inteligência Artificial e Prompts didáticos com referências (UNESCO, MEC, W3C)
- [x] **Aula 03 (Implementação HTML, Imagens `a3/` & Google Drive)**: Dominando o Google & Produtividade na Nuvem (7 Tópicos, Waffle 9 Pontinhos, Docs/Sheets/Slides/Drive, Passo a Passo Guiado de Criação e Upload de Pastas/Docs do PC, 12 imagens ilustrativas e SHA-256 com senha `c003`)
- [x] **Aula 04**: Prova Final de Avaliação (`prova-internet.html`) com Senha (`d004`) e Assinatura Digital SHA-256

---

## 🔒 Diretrizes de Manutenção e Servidores de Teste
- [x] Encerrar imediatamente qualquer servidor HTTP local (`python3 -m http.server`) após a realização de testes e capturas no navegador.
- [x] Manter a Tríade de Documentação SDD (`ROADMAP.md`, `INDEX.md`, `DOCUMENTATION.md`) 100% atualizada a cada modificação.
