# 📊 SPEC-EXCEL-MASTER — Especificação Mestre do Módulo 3: Microsoft Excel
### Portal Didático de Informática Básica | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai (Global)**: Este documento é o SDD Mestre exclusivo do **Módulo 3 (Excel)** e herda todas as regras globais de UI/UX, segurança e atalhos definidas em [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md).

---

## 🎯 1. Visão Geral do Módulo


O **Módulo 3: Microsoft Excel** é a trilha didático-prática do portal dedicada ao aprendizado de planilhas eletrônicas, organização de dados, fórmulas matemáticas, funções lógicas, pesquisa, tabelas dinâmicas, gráficos e automação básica.

Projetado para rodar em **HTML5 Semântico, CSS3 Vanilla e JavaScript ES6+ (100% Estático)** no GitHub Pages, o módulo utiliza o **Design Senior-Friendly** e um **Simulador Interativo de Planilha Eletrônica** (grade visual com coordenadas A1..Z100, barra de fórmulas, abas de planilhas e cálculo em tempo real), permitindo aos alunos vivenciarem a experiência do Excel diretamente no navegador sem necessidade de instalação do pacote Office.

---

## 🗺️ 2. Matriz Geral do Catálogo de Aulas (13 Aulas / Etapas)

O currículo foi consolidado a partir do acervo original em [AulaOrigem/excel/](file:///home/rangel/git-dev/aulas/AulaOrigem/excel/) e estruturado em 13 aulas graduais:

| Aula # | Título da Aula | Conteúdo Temático Principal | Senha Secreta | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Aula 01** | Introdução ao Excel & Interface | O que é Excel, Células/Linhas/Colunas, Planilhas vs Pastas, Tipos de Dados, Navegação, Salvamento (.xlsx) | `xa001` | 🔓 Especificada (Fase 2) |
| **Aula 02** | Operações Básicas & Fórmulas | Operadores (+, -, *, /), Fórmulas Simples, Referências Relativas e Absolutas ($A$1 / F4), Alça de Preenchimento, Funções SOMA, MÉDIA, MÁXIMO, MÍNIMO | `xb002` | 🔒 Planejada |
| **Aula 03** | Exercícios Práticos & Formatação | Boletim Escolar, Controle Financeiro, Formatação Condicional, Estilos de Célula e Tabelas Visuais | `xc003` | 🔒 Planejada |
| **Aula 04** | Funções Lógicas Avançadas | Função SE, E, OU, SEERRO, SEs encadeados e Tomada de Decisão Automatizada | `xd004` | 🔒 Planejada |
| **Aula 05** | Funções de Pesquisa & Referência | PROCV, PROCH, CORRESP, ÍNDICE e Introdução ao PROCX moderno | `xe005` | 🔒 Planejada |
| **Aula 06** | Datas e Horas no Excel | Funções DIA, MÊS, ANO, HOJE, AGORA, DIATRABALHO, Cálculos de Horas e Formatação de Tempo | `xf006` | 🔒 Planejada |
| **Aula 07** | Contas Pessoais & Tabela Dinâmica | Criação de Tabela Dinâmica, Campos, Filtros, Segmentação de Dados (Slicers) e Gráficos Dinâmicos | `xg007` | 🔒 Planejada |
| **Aula 08** | Controle de Vendas (SOMASE / SOMASES) | Agrupamento condicional com SOMASE, SOMASES, CONT.SE, CONT.SES e MÉDIASE | `xh008` | 🔒 Planejada |
| **Aula 09** | Macros & Introdução ao VBA | Gravador de Macros, Botões de Ação, Guia Desenvolvedor e Introdução ao código VBA | `xi009` | 🔒 Planejada |
| **Aula 10** | Revisão Geral & Preparatório | Exercícios Integrados de Funções, Formatações e Tabelas Dinâmicas preparatórios para a Prova | `xj010` | 🔒 Planejada |
| **Aula 11** | Projeto Vendas: Estruturação | Modelagem de Banco de Dados no Excel, Cadastro de Clientes, Produtos e Vendas + **Quiz de Fixação (5 Questões)** | `xk011` | 🔒 Planejada |
| **Aula 12** | Projeto Vendas: Automação & Regras | Integração de Funções Lógicas, PROCV e Automações de Preço + **Quiz de Fixação (5 Questões)** | `xl012` | 🔒 Planejada |
| **Aula 13** | Projeto Vendas: Dashboard & Conclusão | Construção do Painel Indicador (Dashboard), KPI Cards, Gráficos Interativos e Finalização do Projeto Prático + **Quiz de Fechamento (5 Questões)** (Sem prova teórica tradicional, o projeto é o entregável principal) | `xm013` | 🔒 Planejada |

> **📌 Nota de Arquitetura Pedagógica (Aulas 11 a 13)**: As Aulas 11, 12 e 13 compõem o **Projeto Prático Integrado (Sistema de Controle de Vendas)**. Não há prova final teórica separada na Aula 13, pois o próprio desenvolvimento do projeto prático completo é o entregável de avaliação do módulo. Contudo, cada uma destas 3 aulas possui um **Quiz de Fixação com 5 Questões** ao final para validação dos conhecimentos específicos trabalhados naquela etapa e emissão do comprovante com SHA-256.


---

## 🎨 3. Design System Específico do Módulo Excel

O Módulo Excel utiliza a paleta oficial da WR Capacitação com destaque verde em tom **Excel Emerald**:

| Variável CSS | Hex / Valor | Aplicação no Módulo Excel |
| :--- | :--- | :--- |
| `--excel-green` | `#16A34A` | Cor temática principal do Excel (Badges, Destaques, Bordas de Célula Selecionada) |
| `--excel-green-dark` | `#15803D` | Hover de botões, cabeçalhos de tabela do Excel e botões de ação |
| `--excel-green-light` | `#DCFCE7` | Fundo de destaque para células selecionadas ou fórmulas ativas |
| `--bg-brown` | `#120B06` | Fundo geral da página (Dark Mode relaxante) |
| `--card-brown` | `#1E130B` | Container externo dos cartões de aula e controles |
| `--paper-beige` | `#FFFDF9` | Fundo da área de leitura didática e simulador |
| `--ink-dark` | `#1F160F` | Texto principal de leitura de altíssimo contraste (≥ 7:1) |

---

## 🖥️ 4. Requisitos da Interface do Simulador Interativo de Excel

Cada aula do Módulo Excel contará com um **Simulador Interativo em HTML/CSS/JS** integrado à leitura:

1. **Faixa de Opções (Ribbon)**: Abas de navegação (Página Inicial, Inserir, Fórmulas, Dados) estilizadas.
2. **Caixa de Nome & Barra de Fórmulas**: Exibição da coordenada da célula ativa (ex: `B4`) e o valor/fórmula contido (ex: `=SOMA(B2:B3)`).
3. **Grade de Planilha (Sheet Grid)**:
   - Cabeçalhos de colunas com letras (`A`, `B`, `C`, `D`...) e linhas numeradas (`1`, `2`, `3`...).
   - Células interativas com foco visual, seleção por clique ou setas de teclado.
   - Suporte a alinhamento automático de dados (Texto à Esquerda, Números e Moeda à Direita).
4. **Abas de Planilhas (Sheet Tabs)**: Alternância inferior entre planilhas (ex: `Plan1`, `Vendas`, `Resumo`).

---

## 🔒 5. Segurança, Senhas e Antifraude

- **Senhas de Acesso**: Cada aula exige senha secreta para liberação de leitura e exercícios (Padrão `xa001` a `xm013`).
- **Segurança Presencial**: Senhas NUNCA são exibidas na tela/UI. Ficam sob controle exclusivo do professor.
- **Motor Criptográfico SHA-256**: O `assets/js/quiz-engine.js` calcula a nota e gera a assinatura digital do aluno em formato Hash SHA-256 para todos os comprovantes emitidos.
- **Botões de Exportação**: Opcionais de TXT, PDF didático, WhatsApp (`19 99130-6907`) e E-mail (`okcomputer.use.linux@gmail.com`).

---

### 📝 5.1 Regras Globais de Quizzes e Avaliações

| Parâmetro | Regra / Diretriz | Descrição e Validação Pedagógica |
| :--- | :--- | :--- |
| **Quantidade de Questões** | 5 Questões por Aula | Todas as 13 aulas possuem Quizzes padronizados com exatamente 5 questões de múltipla escolha. |
| **Nota Mínima de Aprovação** | 7.0 / 10.0 (≥ 70%) | O aluno deve atingir pontuação mínima de 7.0 para aprovação e liberação de comprovante/certificado. |
| **Validação Criptográfica** | Assinatura Hash SHA-256 | Assinatura digital inviolável calculada pelo motor `quiz-engine.js` registrando nome, nota, data/hora e hash. |
| **Reaproveitamento de Questões** | Permitido (Acervo Legado) | Questões didáticas do material original (`AulaOrigem/excel/`) podem ser reaproveitadas, adaptadas e expandidas. |

---

## 📄 6. Regra dos Botões de PDF

- **Posicionamento**: O botão `📑 Baixar Apostila Didática em PDF` fica visível no início do cartão da aula (topo), permitindo ao aluno guardar o material de estudo.
- **Exportação do PDF**: Alimentado dinamicamente pelo motor `assets/js/pdf-lessons.js` com o conteúdo abrangente do módulo.

---

## 📚 7. Referências Didáticas e Acadêmicas

1. **Walkenbach, J. (2015)**. *Excel 2016 Bible*. John Wiley & Sons.
2. **Alexander, M., & Kusleika, R. (2018)**. *Access 2019 Bible / Excel Analysis*. Wiley.
3. **Microsoft Learn (2024)**. *Documentação Oficial de Fórmulas e Funções do Microsoft Excel*. Microsoft Press.
4. **W3C (2023)**. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.
