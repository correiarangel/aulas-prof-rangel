# 🗂️ INDEX — Portal Didático de Informática Básica
### Prof. Marcos Rangel | WR Capacitação Profissional

---

## 📅 Trabalho em Andamento & Último Status
- **Data:** 01/09/2026
- **Status:** Módulo 1 (Windows) Atualizado com Catálogo de 12 Aulas, Aula 08 Didática Interativa por Tópicos (28 Imagens + Quiz de 5 Questões) e Posicionamento do Botão de PDF no Topo de Todos os Módulos Concluído
- **Últimas Alterações:**
  - Cumprimento estrito do pipeline de 10 fases do `global-start-skill` (v6.0).
  - Estruturação da especificação SDD em `Docs/SPEC-AULA-08-WINDOWS.md`.
  - Reestruturação do Hub de Aulas do Módulo 1 Windows (`modules/windows/index.html`) para exibir as **12 Aulas** do catálogo (Aulas 1-7 e 9-11 com marcação `🔒 Em Construção`, Aula 08 `🔓 Liberada` com senha `wr0926` e Aula 12 `📝 Prova Final`).
  - Implementação da **Aula 08** ("Diagnóstico de Memória, Restauração do Sistema e Criando Mídia de Instalação no Windows") com foco na **Prática Orientada / Mão na Massa**, atalhos visuais `<kbd>`, avisos de segurança e **todas as 28 imagens** ilustrativas mapeadas da pasta `assets/img/windows/Aula8/`.
  - Implementação do **Exercício de Fixação (Quiz de 5 Questões)** na Aula 8 com dicas do professor, nota de 0 a 10.0, Assinatura Digital SHA-256 e botões de exportação (TXT, PDF, WhatsApp, E-mail).
  - **Ajuste Ergonomico de Interface**: Posicionamento do botão `📑 Baixar Apostila Didática em PDF` no início/topo de todas as aulas (Windows e Internet).
  - Atualização do motor de PDF (`assets/js/pdf-lessons.js`) com os dados da Aula 8 do Windows.
  - Atualização da Tríade de Documentação SDD (`DOCUMENTATION.md` Registro #009, `ROADMAP.md` e `INDEX.md`).
- **Próxima Tarefa:** Módulos 1 e 5 operacionais e preparados para aulas presenciais de informática básica.


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
- [modules/internet/index.html](file:///home/rangel/git-dev/aulas/modules/internet/index.html)
- [modules/internet/prova-internet.html](file:///home/rangel/git-dev/aulas/modules/internet/prova-internet.html)
- [index.html](file:///home/rangel/git-dev/aulas/index.html)
- [assets/js/pdf-lessons.js](file:///home/rangel/git-dev/aulas/assets/js/pdf-lessons.js)
- [ROADMAP.md](file:///home/rangel/git-dev/aulas/ROADMAP.md)
- [INDEX.md](file:///home/rangel/git-dev/aulas/INDEX.md)
- [DOCUMENTATION.md](file:///home/rangel/git-dev/aulas/DOCUMENTATION.md)
