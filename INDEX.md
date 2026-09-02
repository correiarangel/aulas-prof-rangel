# 🗂️ INDEX — Portal Didático de Informática Básica
### Prof. Marcos Rangel | WR Capacitação Profissional

---

## 📅 Trabalho em Andamento & Último Status
- **Data:** 02/09/2026
- **Status:** Módulo 3 Microsoft Excel — Hub de 13 Aulas, Aula 01 Didática Interativa e Simulador Grid Inspector Concluídos
- **Últimas Alterações:**
  - Cumprimento estrito do pipeline de 10 fases do `global-start-skill` (v6.0).
  - Centralização arquitetural em [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md), SDD Mestre [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) e SDD Aula 01 [SPEC-EXCEL-AULA-01.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-01.md).
  - Auditoria SDD realizada com sucesso (senhas `xa001`-`xm013`, quizzes com 5 questões e nota 7.0).
  - **Implementação Completa do Módulo Excel ([modules/excel/index.html](file:///home/rangel/git-dev/aulas/modules/excel/index.html))**:
    - Hub principal de seleção com as 13 Aulas do módulo (Aula 01 liberada via senha `xa001`, Aulas 02 a 13 com selo de construção).
    - Modal de senha presencial reutilizável (`#password-modal`).
    - Painel sanfona do Professor Marcos Rangel.
    - Aula 01 com 6 tópicos pedagógicos interativos por abas e trava de leitura obrigatória.
    - **Integração Visual Completa & Impressão Organizada na Aula 01**: Inserção de 6 imagens ilustrativas didáticas capturadas (`excel_aula1_01_visao_geral.png` a `excel_aula1_06_salvar_como.png` em `assets/img/excel/a1/`), com otimização completa no layout de impressão `@media print` (quebras de página limpas sem cortar imagens) e mapeamento integral no gerador de Apostilas PDF (`pdf-lessons.js`).
    - **Formalização do Modelo-Base Padronizado de Aula (Master Lesson Blueprint)**: Documentação completa na Seção 7 de [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md) estabelecendo os 7 componentes obrigatórios (Header com PDF/Impressão, Progresso Gamificado, Abas de Tópicos, Imagens Ilustrativas `.img-reduced`, Simulador Interativo, Quiz de 5 Questões com SHA-256 e Otimização `@media print`), servindo de modelo mestre para todas as aulas restantes do portal (Excel Aulas 02 a 13, Word, PowerPoint, etc.).
- **Próxima Tarefa:** Dar continuidade à especificação e implementação da Aula 02 do Módulo Excel (Operações Básicas & Fórmulas).





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
- [Docs/SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md)
- [Docs/SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md)
- [Docs/SPEC-EXCEL-AULA-01.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-AULA-01.md)
- [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
- [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
- [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
