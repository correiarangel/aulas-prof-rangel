

| 📊  EXCEL DO ZERO AULA 4 Funções Lógicas Avançadas SE • E • OU • NÃO • Formatação Condicional |
| :---: |

**Objetivo da Aula**

Aprender a combinar as funções lógicas SE, E, OU e NÃO para criar análises mais inteligentes no Excel — e usar a Formatação Condicional para destacar os resultados com cores automáticas.

**O que você vai aprender hoje:**

* Revisão rápida da função SE

* SE \+ E  →  quando TODAS as condições precisam ser verdadeiras

* SE \+ OU  →  quando PELO MENOS UMA condição precisa ser verdadeira

* SE aninhado  →  múltiplos resultados possíveis

* Função NÃO  →  inverte uma condição

* Formatação Condicional  →  cores automáticas com fórmulas

* Exercício prático com situação do mundo real

| 01 | Revisão Rápida da Função SE |
| :---: | :---- |

A função **SE** é a base de tudo nesta aula. Ela faz uma pergunta ao Excel e devolve um resultado dependendo da resposta: **Verdadeiro** ou **Falso**.

*Pense assim: é como perguntar ao Excel — Se isso for verdade, faça X; caso contrário, faça Y.*

|   Sintaxe da Função SE |
| :---- |
|  |
| **\=SE( teste\_lógico ; valor\_se\_verdadeiro ; valor\_se\_falso )** *3 partes separadas por ponto e vírgula* |

**Exemplo simples:** Verificar se um aluno foi aprovado.

| \=SE(B2\>=7; "Aprovado"; "Reprovado") *Se a nota em B2 for \>= 7, escreve Aprovado. Senão, Reprovado.* |
| :---- |

| Como ler essa fórmula em voz alta: "Se B2 for maior ou igual a 7  →  escreva Aprovado" "Caso contrário  →  escreva Reprovado" |
| :---- |

**Exemplo na planilha:**

| Aluno | Nota | Resultado (fórmula) |
| :---: | :---: | :---: |
| Ana | 8,5 | Aprovado |
| Carlos | 5,0 | Reprovado |
| Maria | 7,0 | Aprovado |

| 02 | SE \+ E  —  Todas as condições precisam ser verdadeiras |
| :---: | :---- |

A função **E** verifica se **todas** as condições que você listar são verdadeiras ao mesmo tempo. Se até uma delas for falsa, o resultado é FALSO.

*Imagine que a escola exige duas coisas para aprovar: nota boa E frequência suficiente. Se faltar qualquer uma, não passa.*

| Regra de ouro do E: Todas as condições precisam ser VERDADEIRAS. Uma só falsa → resultado é FALSO. |
| :---- |

**Sintaxe:**

| \=E( condição1 ; condição2 ; condição3 ... ) |
| :---- |

**Exemplo prático — Aprovação com nota E frequência:**

| \=SE(E(B2\>=7; C2\>=75); "Aprovado"; "Reprovado") *B2 \= nota  |  C2 \= frequência (%)* |
| :---- |

| Como ler essa fórmula: Se a nota em B2 for ≥ 7  E  a frequência em C2 for ≥ 75% →  escreve "Aprovado" Se qualquer uma dessas condições for falsa  →  escreve "Reprovado" |
| :---- |

**Veja na prática:**

| Aluno | Nota (B) | Frequência (C) | Resultado |
| :---: | :---: | :---: | :---: |
| Ana | 8,0 | 80% | Aprovado |
| Bruno | 7,5 | 60% | Reprovado  (frequência baixa) |
| Carla | 5,0 | 90% | Reprovado  (nota baixa) |
| Diego | 9,0 | 95% | Aprovado |

| Dica importante: Você pode adicionar quantas condições quiser dentro do E. Por exemplo: \=SE(E(B2\>=7; C2\>=75; D2="Entregou TCC"); "Formado"; "Pendente")  |
| :---- |

| 03 | SE \+ OU  —  Pelo menos uma condição precisa ser verdadeira |
| :---: | :---- |

A função **OU** verifica se **pelo menos uma** das condições é verdadeira. Basta uma ser verdadeira e o resultado é VERDADEIRO.

*Imagine: o aluno ganha bônus se tirar nota 9 OU tiver participação extra. Basta uma das duas\!*

| Regra de ouro do OU: Basta UMA condição ser VERDADEIRA. Só é FALSO quando todas são falsas. |
| :---- |

**Sintaxe:**

| \=OU( condição1 ; condição2 ; condição3 ... ) |
| :---- |

**Exemplo prático — Bônus por nota alta OU participação:**

| \=SE(OU(B2\>=9; C2="Sim"); "Tem bônus"; "Sem bônus") *B2 \= nota  |  C2 \= Participação Extra (Sim/Não)* |
| :---- |

| Como ler essa fórmula: Se a nota em B2 for ≥ 9  OU  C2 for "Sim"  →  escreve "Tem bônus" Se as duas condições forem falsas ao mesmo tempo  →  escreve "Sem bônus" |
| :---- |

**Comparando E x OU na prática:**

| Aluno | Nota ≥ 9? | Participação? | Com E | Com OU |
| :---: | :---: | :---: | :---: | :---: |
| Ana | Sim | Não | Sem bônus | Tem bônus |
| Bruno | Não | Sim | Sem bônus | Tem bônus |
| Carla | Sim | Sim | Tem bônus | Tem bônus |
| Diego | Não | Não | Sem bônus | Sem bônus |

| 04 | SE Aninhado  —  Múltiplos resultados possíveis |
| :---: | :---- |

O **SE aninhado** é quando você coloca um SE dentro de outro SE. Isso permite ter **mais de dois resultados** possíveis.

*A lógica é como um funil: o Excel testa a primeira condição; se for falsa, cai no segundo SE; se também for falsa, cai no terceiro... e assim por diante.*

| Quando usar? Quando você precisa de mais de 2 resultados — como classificar notas em Excelente, Bom, Regular ou Reprovado. |
| :---- |

**Exemplo — Classificação de notas em 4 níveis:**

| \=SE(B2\>=9; "Excelente"; SE(B2\>=7; "Bom"; SE(B2\>=5; "Regular"; "Reprovado"))) *O Excel testa cada condição em ordem, de cima para baixo* |
| :---- |

| Como o Excel lê essa fórmula, passo a passo: 1º teste: Nota \>= 9?  Sim  →  escreve "Excelente" e para. 2º teste: Nota \>= 7?  Sim  →  escreve "Bom" e para. 3º teste: Nota \>= 5?  Sim  →  escreve "Regular" e para. Se chegou aqui: nenhuma condição foi verdadeira  →  escreve "Reprovado" |
| :---- |

| Aluno | Nota | Classificação |
| :---: | :---: | :---: |
| Ana | 9,5 | Excelente |
| Bruno | 7,8 | Bom |
| Carla | 5,2 | Regular |
| Diego | 3,0 | Reprovado |

| Dica: Evite aninhar mais de 3 SEs. Para muitos casos, considere outras funções como PROCV ou CHOOSE. |
| :---- |

| 05 | Função NÃO  —  Inverte uma condição |
| :---: | :---- |

A função **NÃO** é bem simples: ela **inverte** o resultado lógico. O que é VERDADEIRO vira FALSO, e o que é FALSO vira VERDADEIRO.

*É como dizer 'exceto'. Em vez de dizer 'quero notas \>=7', você diz 'não quero notas \< 7'.*

**Sintaxe:**

| \=NÃO( teste\_lógico ) |
| :---- |

**Exemplo — Identificar alunos que precisam de reforço:**

| \=SE(NÃO(B2\>=7); "Precisa de reforço"; "OK") *NÃO(B2\>=7)  é o mesmo que  B2\<7* |
| :---- |

| Equivalências úteis: NÃO(A\>=7)  é o mesmo que  A\<7 NÃO(C="Sim")  é o mesmo que  C\<\>"Sim" (diferente de Sim) NÃO(E(…))  inverte o resultado de um E — muito usado em Formatação Condicional |
| :---- |

| 06 | Formatação Condicional com Fórmulas Lógicas |
| :---: | :---- |

A **Formatação Condicional** permite que o Excel **mude a cor de uma célula automaticamente** com base em uma condição ou fórmula. É uma das ferramentas mais visuais e poderosas do Excel.

*Imagine: ao invés de ler cada linha para saber o resultado, as células ficam verdes para aprovados e vermelhas para reprovados — instantaneamente\!*

**Passo a Passo Completo**

| Passo 1 — Selecionar o intervalo Clique na primeira célula com resultado (ex: D2), segure Shift e clique na última (ex: D20). Você verá todas as células selecionadas em azul. *Dica: Se os dados mudarem, você pode ampliar esse intervalo depois.* |
| :---- |

| Passo 2 — Abrir o menu Na faixa de opções no topo: Página Inicial  →  Formatação Condicional  →  Nova Regra... Na janela que abrir, escolha a opção:  "Usar uma fórmula para determinar quais células devem ser formatadas" *Essa opção é a mais poderosa — ela permite usar qualquer fórmula do Excel.* |
| :---- |

| Passo 3 — Inserir a fórmula e escolher a cor Na caixa "Formatar valores onde esta fórmula for verdadeira", digite a fórmula. Depois clique em Formatar... → aba Preenchimento → escolha a cor. |
| :---- |

**Exemplos de Fórmulas para Formatação Condicional**

**Exemplo 1 — Verde para Aprovado (usando SE \+ E):**

Pintar de verde quando nota \>= 7 E frequência \>= 75%:

| \=$B2\>=7 *Selecione o intervalo de resultados e use esta fórmula* |
| :---- |

Ou com múltiplas condições usando **E**:

| \=E($B2\>=7; $C2\>=75) *Verde se nota E frequência forem suficientes* |
| :---- |

**Exemplo 2 — Vermelho para Reprovado (usando NÃO \+ E):**

| \=NÃO(E($B2\>=7; $C2\>=75)) *Vermelho se qualquer uma das condições falhar* |
| :---- |

| Por que usar $ (cifrão) nas fórmulas de Formatação Condicional? O $B2 trava a coluna B, mas deixa a linha livre Isso faz com que cada linha da planilha seja avaliada com seus próprios dados Se você escrever apenas B2 sem o $, a formatação pode não funcionar corretamente ao ser aplicada em várias linhas *Regra prática: em formatação condicional com fórmulas, sempre use $ antes da letra da coluna* |
| :---- |

| Passo 4 — Criar múltiplas regras Para ter verde E vermelho ao mesmo tempo, crie uma regra para cada cor. Repita os Passos 2 e 3 para cada regra. Para gerenciar todas as regras, vá em: Formatação Condicional  →  Gerenciar Regras... |
| :---- |

**Resumo: Fórmulas e cores para situações comuns:**

| Situação | Fórmula | Cor sugerida |
| :---: | :---: | :---: |
| Aprovado (nota e freq.) | \=E($B2\>=7; $C2\>=75) | Verde |
| Reprovado (alguma falha) | \=NÃO(E($B2\>=7; $C2\>=75)) | Vermelho |
| Nota muito alta (destaque) | \=$B2\>=9 | Azul / Amarelo |
| Frequência baixa | \=$C2\<75 | Laranja |

| 07 | Exercício Prático  —  Situação do Mundo Real |
| :---: | :---- |

| Cenário: Você trabalha no setor financeiro de uma empresa e precisa classificar clientes automaticamente com base nos pagamentos deles. Sua planilha tem: nome do cliente, valor pago, status do pagamento e a data. Sua missão: criar a coluna Situação que classifica cada cliente automaticamente. |
| :---- |

**Estrutura da planilha:**

| A — Cliente | B — Valor (R$) | C — Pago? | D — Data Pgto. | E — Situação |
| :---: | :---: | :---: | :---: | :---: |
| Empresa ABC | R$ 1.200 | Sim | 10/03/2025 | ? |
| Loja XYZ | R$ 350 | Sim | 15/03/2025 | ? |
| Mercado Sol | R$ 800 | Não | — | ? |
| Padaria Luz | R$ 200 | Não | — | ? |

**Regras de Classificação**

| Pagou e valor ≥ R$ 500  →  "Cliente Premium" Pagou e valor \< R$ 500  →  "Cliente Regular" Não pagou  →  "Em aberto" |
| :---- |

**Construindo a Fórmula Passo a Passo**

**Passo 1 — Verificar o pagamento com SE simples:**

| \=SE(C2="Sim"; "Pagou"; "Não pagou") *Começa verificando a coluna C* |
| :---- |

**Passo 2 — Dentro do Pagou, usar SE aninhado para o valor:**

| \=SE(C2="Sim"; SE(B2\>=500; "Cliente Premium"; "Cliente Regular"); "Em aberto") *Fórmula completa — célula E2* |
| :---- |

| Lendo a fórmula em voz alta: SE C2 for "Sim" (pagou)  →  entra no segundo SE: SE B2 \>= 500  →  "Cliente Premium",  senão  "Cliente Regular" SE C2 não for "Sim"  →  "Em aberto" |
| :---- |

**Resultado esperado:**

| A — Cliente | B — Valor | C — Pago? | E — Situação |
| :---: | :---: | :---: | :---: |
| Empresa ABC | R$ 1.200 | Sim | Cliente Premium |
| Loja XYZ | R$ 350 | Sim | Cliente Regular |
| Mercado Sol | R$ 800 | Não | Em aberto |
| Padaria Luz | R$ 200 | Não | Em aberto |

**Formatação Condicional para o Exercício**

Agora vamos colorir a coluna **Situação (E2:E20)** automaticamente com 3 cores diferentes\!

| Regra | Fórmula para usar | Cor | Significado |
| :---: | :---: | :---: | :---: |
| Regra 1 | \=$E2="Cliente Premium" | Verde escuro | Pagou e é grande cliente |
| Regra 2 | \=$E2="Cliente Regular" | Azul claro | Pagou e é cliente normal |
| Regra 3 | \=$E2="Em aberto" | Vermelho | Pagamento pendente |

| Como criar as 3 regras: Selecione E2:E20 (coluna Situação) Página Inicial → Formatação Condicional → Nova Regra... Escolha "Usar uma fórmula..." e insira a fórmula da Regra 1 Clique em Formatar... → Preenchimento → escolha Verde escuro → OK Repita os passos 2 a 4 para a Regra 2 (azul) e Regra 3 (vermelho) Verifique em Gerenciar Regras se todas as 3 aparecem |
| :---- |

| Testando a formatação: Mude C2 de "Sim" para "Não" e veja a cor mudar para vermelho automaticamente Mude B2 de 1200 para 200 e veja *Cliente Premium* virar *Cliente Regular* A cor muda sozinha conforme os dados mudam — isso é a magia da Formatação Condicional\! |
| :---- |

