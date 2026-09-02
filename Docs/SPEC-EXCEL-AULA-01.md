# 🏛️ SPEC-EXCEL-AULA-01 — Especificação Técnica e Pedagógica da Aula 01 (Excel)
### Módulo 3: Microsoft Excel | Prof. Marcos Rangel — WR Capacitação Profissional

> **🔗 Especificação Pai**: Herda regras de [SPEC-EXCEL-MASTER.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-EXCEL-MASTER.md) e [SPEC-PROJECT-ARCHITECTURE.md](file:///home/rangel/git-dev/aulas/Docs/SPEC-PROJECT-ARCHITECTURE.md).

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 01 do Módulo Excel** é o ponto de partida fundamental da trilha de planilhas eletrônicas. Ela introduz o conceito de planilha eletrônica, anatomia da interface, matriz de células (linhas e colunas), tipos de dados reconhecidos pelo Excel, navegação ágil pelo teclado e salvamento de arquivos.

### Core Topics (6 Tópicos Didáticos):
1. **O que é o Excel & Aplicações Práticas**: Conceito de planilha eletrônica criada em 1985, automação de cálculos, controle financeiro, listas e orçamentos.
2. **Anatomia da Interface e Elementos Principais**: Barra de Título, Faixa de Opções (Ribbon), Barra de Fórmulas, Grade de Células (Colunas A, B, C... e Linhas 1, 2, 3...) e Barra de Status.
3. **Diferença entre Planilhas e Pastas de Trabalho**: Conceito de Pasta de Trabalho (arquivo `.xlsx`) como um caderno que contém múltiplas Planilhas (abas `Plan1`, `Plan2`...).
4. **Tipos de Dados e Alinhamento Automático**: Texto (alinhado à esquerda), Números (alinhados à direita), Datas (`DD/MM/AAAA`) e Valores Monetários (`R$`).
5. **Inserção, Edição e Navegação Ágil**: Inserção com `Enter`/`Tab`, edição com `F2`, cancelamento com `Esc`, atalhos de navegação (`Ctrl + Setas`, `Ctrl + Home`, `Ctrl + Page Up/Down`).
6. **Salvando e Formatos de Arquivo**: Procedimento de salvamento (`Ctrl + S`), diferença entre `.xlsx` (padrão Excel), `.csv` (dados delimitados) e `.pdf` (documento estático).

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 3 / Aula 01** | Introdução ao Excel, Interface, Tipos de Dados e Navegação | `xa001` | 🔒 Oculta (Acesso Restrito) |

---

## 🖥️ 3. Simulador Interativo da Aula 01 (Grid Inspector)

A Aula 01 contará com um **Simulador Interativo de Grade (Grid Inspector)** integrado à página didática:
- **Painel de Experimentação de Tipos de Dados**:
  - O aluno digita valores em uma caixa de teste e observa o comportamento automático da célula.
  - Se digitar `"João Silva"`, o simulador alinha à **Esquerda** e classifica como **Texto**.
  - Se digitar `250.50`, o simulador alinha à **Direita** e classifica como **Número/Moeda**.
  - Se digitar `12/09/2026`, o simulador alinha à **Direita** e classifica como **Data**.
- **Display de Coordenadas de Célula (Caixa de Nome)**:
  - Ao clicar nas células da grade ilustrativa (`A1`, `B2`, `C3`), a caixa de nome exibe instantaneamente a coordenada ativa.

---

## 📝 4. Especificação do Quiz de Fixação (5 Questões)

1. **Questão 1 (Conceito de Célula)**:
   - *Pergunta*: No Microsoft Excel, o que representa a interseção entre uma Coluna (identificada por letra) e uma Linha (identificada por número)?
   - *Alternativas*:
     - a) Uma Pasta de Trabalho
     - b) Uma Célula [Correta]
     - c) Um Gráfico Dinâmico
     - d) Uma Faixa de Opções
   - *Dica*: É o quadradinho individual onde você digita textos, números ou fórmulas (exemplo: A1, B2).

2. **Questão 2 (Alinhamento Automático de Dados)**:
   - *Pergunta*: Ao digitar um número puro (ex: 150) e um texto (ex: "Contas") em células sem formatação prévia, como o Excel alinha automaticamente esses conteúdos?
   - *Alternativas*:
     - a) Texto à direita e Número à esquerda
     - b) Ambos centralizados
     - c) Texto à esquerda e Número à direita [Correta]
     - d) Ambos alinhados à direita
   - *Dica*: Números são alinhados à direita para facilitar a visualização de colunas de valores e cálculos.

3. **Questão 3 (Planilha vs Pasta de Trabalho)**:
   - *Pergunta*: Qual é a diferença correta entre uma "Planilha" e uma "Pasta de Trabalho" no Excel?
   - *Alternativas*:
     - a) A Planilha é o arquivo salvo no computador e a Pasta de Trabalho é um gráfico
     - b) A Planilha é uma aba individual e a Pasta de Trabalho é o arquivo completo que pode conter várias planilhas [Correta]
     - c) Não existe diferença, ambos são exatamente a mesma coisa
     - d) A Pasta de Trabalho é apenas para impressões em PDF
   - *Dica*: Pense na Pasta de Trabalho como um caderno completo e nas Planilhas como as folhas/páginas desse caderno.

4. **Questão 4 (Tecla de Edição F2)**:
   - *Pergunta*: Qual tecla de atalho do teclado permite EDITAR o conteúdo de uma célula selecionada sem apagar o texto ou valor que já estava digitado?
   - *Alternativas*:
     - a) F2 [Correta]
     - b) F5
     - c) Delete
     - d) Esc
   - *Dica*: Ela coloca o cursor de texto piscando dentro da célula para que você possa modificar apenas uma parte da informação.

5. **Questão 5 (Formato Padrão .xlsx)**:
   - *Pergunta*: Qual é o formato de arquivo padrão recomendado para salvar pastas de trabalho no Microsoft Excel moderno?
   - *Alternativas*:
     - a) .doc
     - b) .txt
     - c) .xlsx [Correta]
     - d) .exe
   - *Dica*: É a extensão oficial adotada pela Microsoft desde o Excel 2007 para guardar planilhas completas.

---

## 🎨 5. Ergonomia e Regras de Interface

- **Botão de PDF na Barra Superior / Início da Aula**: Botão `📑 Baixar Apostila Didática em PDF` posicionado no topo da aula para download imediato do material de apoio.
- **Formatação de Atalhos de Teclado**: Apresentação visual clara das teclas utilizando a tag `<kbd>` (ex: `<kbd>F2</kbd>`, `<kbd>Ctrl</kbd> + <kbd>S</kbd>`, `<kbd>Tab</kbd>`).
- **Nota Mínima do Quiz**: Pontuação mínima de **7.0 / 10.0** (acerto de no mínimo 4 de 5 questões) para aprovação e liberação do comprovante de conclusão.
- **Validação Anti-Fraude**: Geração de Hash SHA-256 e botões de envio via WhatsApp e E-mail após a conclusão do Quiz com nota mínima de 7.0.
