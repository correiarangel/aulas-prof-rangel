# 🗂️ INDEX — Portal Didático de Informática Básica
### Prof. Marcos Rangel | WR Capacitação Profissional

---

## 📅 Trabalho em Andamento & Último Status
- **Data:** 03/09/2026
- **Status:** Módulo 3 Microsoft Excel — Aulas 01, 02, 03, **04 e 05 implementadas** (Funções de Pesquisa & Referência: PROCV, PROCH, ÍNDICE, CORRESP e ÍNDICE+CORRESP).
- **Últimas Alterações:**
  - **Implementação (Fase 3) da Aula 05** ([modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)): 7 tópicos (PROCV; PROCH; ÍNDICE; CORRESP; ÍNDICE+CORRESP; Lookup Lab; Exercício Prático de Loja de Eletrônicos), **Simulador "Lookup Lab"** (tabela de produtos editável + busca em tempo real com fórmula `=PROCV`), **Quiz de 5 Questões com gabarito oficial `GABARITO_L5 = [1, 0, 2, 0, 2]`**, senha `xe005` e Assinatura Criptográfica SHA-256. Planilhas desenhadas em HTML estilo Excel (letras de coluna em linha própria + cabeçalho limpo).
  - **Apostila PDF da Aula 05** ([assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)): 7 seções didáticas com planilhas desenhadas em HTML estilo Excel (Tabela de Produtos, Metas Mensais, Frutas, Funcionários, Loja de Eletrônicos), gabarito das 5 tarefas e resumo das funções · `moduleLessonTitles.excel[5]` adicionado.
  - **Implementação (Fase 3) da Aula 04** ([modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)): 7 tópicos (Revisão SE; SE+E; SE+OU; SE aninhado; NÃO; Logic Lab; Exercício Financeiro de Classificação de Clientes com Formatação Condicional `=$E2=`), **Simulador "Logic Lab"** (paleta editável de alunos + recálculo em tempo real SE/E/OU/SE aninhado + Modo NÃO de inversão lógica + mini-demo de Formatação Condicional verde/vermelho), **Quiz de 5 Questões com gabarito oficial `GABARITO_L4 = [0, 1, 1, 2, 0]`**, senha `xd004` e Assinatura Criptográfica SHA-256. Validado em Chrome headless (0 erros JS; quiz 5/5 → nota 10.0; SHA-256 emitido).
  - **Apostila PDF da Aula 04** ([assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)): 7 seções didáticas com planilhas desenhadas em HTML estilo Excel (Aprovação de Alunos, Nota+Frequência, Comparativo E×OU, Classificação de Notas, Reforço Escolar, Classificação de Clientes) e título de módulo atualizado.
  - **Implementação da Aula 03** (Funções de Cálculo): 6 tópicos (SOMA, MÉDIA, MÁXIMO/MÍNIMO, CONT.VALORES/CONT.NÚM, Lab de Funções, 4 Exercícios Guiados), **Simulador Interativo "Function Lab"** (planilha de custos com valores editáveis que recalculam em tempo real + Modo Contadoras CONT.NÚM vs CONT.VALORES), **Quiz de 5 Questões com gabarito oficial `GABARITO_L3 = [1, 2, 1, 1, 0]`**, senha `xc003` e Assinatura Criptográfica SHA-256.
  - **Refinamentos Aula 03**: correção de **contraste** do intro (texto `--ink-light` sobre fundo claro `--paper-beige` → `--ink-dark`); **planilhas desenhadas em HTML estilo Excel** (`.excel-sheet-preview`/`.mini-sheet`: título, colunas A–E, cabeçalho, 3+ linhas, linha de total) nos Tópicos 1 (SOMA), 2 (MÉDIA) e 3 (MÁXIMO/MÍNIMO) **no site e na apostila PDF**, espelhadas nos **4 Exercícios Guiados (3.6)**; nota `=MINIMOA(intervalo)` adicionada na 3.3 para Excel antigo. PDF renderizado e validado em Chrome headless (7 tabelas de planilha, 0 erros JS).
  - **Reforço da Aula 01**: adicionado o **Tópico 7 "Introdução aos Operadores"** (`+ - * / %`) com tabela de operadores e **worksheet HTML estilo Excel** (letras de coluna A–E, cabeçalho, 5 linhas, total `=SOMA(E2:E6) → R$ 72,80`) + **Atividade Prática "Controle de Gastos Pessoais"** (aluno cria planilha real usando operadores básicos e `=SOMA()`); imagem PNG de operadores removida (tela e PDF); gamificação/guarda refatorada para dinâmica (7 tópicos Aula 1, 6 tópicos Aula 2); §1.2 imagem anatomia ampliada e §1.4 expandido (base sólida sobre tipos de dados e "número que não soma").
  - **Reforço da Aula 02**: §2.2 com bloco "O que é uma FUNÇÃO?" e "Lista de Gatos" com `=SOMA(C2:C6)`; §2.6 com os 7 exercícios, cada um com **PNG da planilha resolvida + tabela HTML preenchida + passo a passo** (arquivos `aula2_ex1..ex7` gerados via PIL).
  - **PDF atualizado** (`assets/js/pdf-lessons.js`): seções 1.7 (operadores → tabela estilo Excel + atividade de gastos, sem PNG ruim), 1.4, 2.2 e 2.6 com as novas imagens.
  - Cumprimento estrito do pipeline de fases do `global-start-skill` (v6.0) — Fases 0-2 (Planejar→Validar→Especificar) e Fase 3 (Implementar) concluídas para a Aula 02.
  - Centralização arquitetural em [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md), SDD Mestre [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md), SDD Aula 01 [SPEC-EXCEL-AULA-01.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-01.md), SDD Aula 02 [SPEC-EXCEL-AULA-02.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-02.md) e SDD Aula 03 [SPEC-EXCEL-AULA-03.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-03.md).
  - Auditoria SDD realizada com sucesso (senhas `xa001`-`xm013`, quizzes com 5 questões e nota 7.0).
  - **Implementação Completa da Aula 02** ([modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html)): 6 tópicos, **Simulador Interativo "Fórmula Builder"** (cálculo em tempo real dos 4 operadores + parser de fórmulas com referências relativas/absolutas `$A$1`, `SOMA`, `%` e `+ - * /`, divisão por zero, barra de fórmulas) e **Quiz de 5 Questões com gabarito oficial `GABARITO_L2 = [1, 2, 1, 1, 1]`**, senha `xb002` e Assinatura Criptográfica SHA-256.
  - **Apostila PDF da Aula 02**: 6 seções didáticas adicionadas em [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js) com mapeamento de títulos de aulas agora module-aware (momento/bug do `lessonTitles` da Internet sobrescrever títulos do Excel corrigido).
  - **Implementação Completa do Módulo Excel**: Aula 01 com 6 tópicos, Simulador Grid Inspector, integração visual com 6 imagens em `assets/img/excel/a1/` e quiz com SHA-256.
- **Próxima Tarefa:** **Aulas 06 a 13 do Excel** (Exercícios de Fixação e Quizzes, seguindo o pipeline SDD).
---

### ✅ GRÁFICO REAL DO PROGRESSO DOS MÓDULOS
| Módulo | Estado Real | Observação |
|---|---|---|
| **1. Windows** | 🟡 1 de 12 aulas | Aula 08 implementada; 11 aulas pendentes |
| **2. Word** | 🔴 Não iniciado | Apenas simulado/prova de 10 questões (sem material didático por aulas) |
| **3. Excel** | 🟡 Em progresso | Aulas 01, 02, 03, 04 e 05 implementadas (Aula 01: 7 tópicos + operadores; Aula 02: SOMA e 7 planilhas; Aula 03: Funções de Cálculo + Function Lab; Aula 04: Funções Lógicas + Logic Lab; Aula 05: Funções de Pesquisa + Lookup Lab); Aulas 06-13 pendentes |
| **4. PowerPoint** | 🔴 Não iniciado | Apenas simulado/prova de 10 questões (sem material didático por aulas) |
| **5. Internet** | 🟢 Completo | Aulas 01-03 + Prova Final + Certificado A4 Landscape |





---

## 📁 Mapeamento da Estrutura de Arquivos

```text
/home/rangel/git-dev/aulas/
├── index.html                    # Portal Principal (Hub Geral)
├── README.md                     # Visão geral do repositório
├── ROADMAP.md                    # Roadmap de progresso e funcionalidades
├── INDEX.md                      # Índice e estado atual do projeto
├── DOCUMENTATION.md              # Documentação técnica e Cronologia SDD
├── assets/
│   ├── css/
│   │   └── style.css             # Estilos visuais e tokens de design
│   ├── js/
│   │   ├── pdf-lessons.js        # Motor de geração de PDF didático
│   │   └── quiz-engine.js        # Motor de provas, persistência e SHA-256
│   └── img/                      # Ativos visuais e ilustrações
└── modules/
    ├── windows/                  # Módulo 1: Windows
    ├── word/                     # Módulo 2: Microsoft Word
    ├── excel/                    # Módulo 3: Microsoft Excel
    ├── powerpoint/               # Módulo 4: Microsoft PowerPoint
    └── internet/                 # Módulo 5: Internet & Segurança
        ├── index.html            # Hub do Módulo 5 + Aulas 1, 2 e 3
        └── prova-internet.html   # Aula 04: Avaliação Final do Módulo Internet & Segurança
```

---

## 🛠️ Últimos Arquivos Trabalhados
- [modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html) (Aula 01 → 7 tópicos + operadores; Aula 02 → FUNÇÃO SOMA + 7 planilhas; Aula 03 → Funções de Cálculo + Function Lab)
- [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js) (seções 1.7, 1.4, 2.2, 2.6 e Aula 03 com as seções de funções de cálculo)
- [assets/img/excel/a2/](file:///home/rangel/git-dev/aulas/assets/img/excel/a2/) (9 PNGs de planilhas)
- [Docs/SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md)
- [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md)
- [Docs/SPEC-EXCEL-AULA-01.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-01.md)
- [Docs/SPEC-EXCEL-AULA-02.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-02.md)
- [Docs/SPEC-EXCEL-AULA-03.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-03.md)
- [Docs/SPEC-EXCEL-AULA-04.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-04.md)
- [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
- [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
- [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
