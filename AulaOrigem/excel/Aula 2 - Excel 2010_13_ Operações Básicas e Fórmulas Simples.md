# **Aula 2 \- Excel 2010/13: Operações Básicas e Fórmulas Simples**

## **1\. Operações Matemáticas Básicas**

No Excel, você pode fazer cálculos diretamente nas células usando os símbolos matemáticos:

* **Soma:** `+`  
* **Subtração:** `-`  
* **Multiplicação:** `*`  
* **Divisão:** `/`

### **Como fazer:**

1. Clique em uma célula vazia (exemplo: C1)  
2. Digite o sinal de `=` (sempre começe fórmulas com \=)  
3. Digite sua operação (exemplo: `=2+3`)  
4. Pressione **Enter**

**Exemplo prático:**

Célula A1: 10  
Célula B1: 5  
Célula C1: \=A1+B1 (resultado: 15\)  
Célula C2: \=A1-B1 (resultado: 5\)  
Célula C3: \=A1\*B1 (resultado: 50\)  
Célula C4: \=A1/B1 (resultado: 2\)

## **2\. Fórmulas Simples**

### **Como criar uma fórmula:**

1. Selecione a célula onde quer o resultado  
2. Digite `=`  
3. Digite a fórmula ou clique nas células que quer usar  
4. Pressione **Enter**

**Exemplo prático \- Controle de gastos:**

        A            B               C  
1   Item       Valor       
2   Pão        3,50        
3   Leite      4,20        
4   Café       8,90        
5   TOTAL               \=B2+B3+B4

## **3\. Referência Relativa e Absoluta**

### **Referência Relativa (padrão)**

* Exemplo: `A1`, `B2`, `C3`  
* Quando você copia a fórmula, as referências mudam automaticamente

### **Referência Absoluta**

* Exemplo: `$A$1`, `$B$2`, `$C$3`  
* Quando você copia a fórmula, a referência fica fixa

### **Como criar referência absoluta:**

1. Digite a fórmula normalmente  
2. Coloque o cursor na referência que quer fixar  
3. Pressione **F4** (transforma A1 em $A$1)  
4. Pressione **F4** novamente para outras opções ($A1, A$1)

**Exemplo prático \- Calculando desconto:**

             A           B               C              D  
1   Produto     Preço     Desconto   Preço Final  
2                                       10%      
3   Notebook    1000                     \=B2\*(1-$C$2)  
4   Mouse            50                      \=B3\*(1-$C$2)  
5   Teclado           80                     \=B4\*(1-$C$2)

Note que `$C$2` fica fixo quando copiamos a fórmula\!

## **4\. Preenchimento Automático e Alças de Preenchimento**

### **Alça de preenchimento:**

É o pequeno quadradinho no canto inferior direito da célula selecionada.

### **Como usar:**

1. Digite um valor ou fórmula na célula  
2. Posicione o cursor sobre a alça de preenchimento (vira um \+)  
3. Clique e arraste para baixo ou para o lado  
4. Solte o botão do mouse

**Exemplos práticos:**

**Sequência de números:**

Digite em A1: 1  
Digite em A2: 2  
Selecione A1:A2, arraste a alça → 3, 4, 5, 6...

**Sequência de datas:**

Digite em A1: 01/01/2024  
Arraste a alça → 02/01/2024, 03/01/2024, 04/01/2024...

**Dias da semana:**

Digite em A1: Segunda  
Arraste a alça → Terça, Quarta, Quinta...

## **5\. Copiar Fórmulas Entre Células**

### **Método 1 \- Copiar e Colar:**

1. Clique na célula com a fórmula  
2. Pressione **Ctrl+C** (copiar)  
3. Selecione as células de destino  
4. Pressione **Ctrl+V** (colar)

### **Método 2 \- Alça de preenchimento:**

1. Clique na célula com a fórmula  
2. Arraste a alça de preenchimento para as células desejadas

**Exemplo prático \- Tabela de vendas:**

          A            B           C           D  
1   Vendedor   Jan       Fev       Total  
2   João       1000      1200      \=B2+C2  
3   Maria      1500      1800      (copie a fórmula de D2)  
4   Pedro      900       1100      (copie a fórmula de D2)

## **6\. Exercícios Práticos com Fórmulas em Tabelas**

### **Exercício Prático 1 \- Loja de Roupas**

Vamos criar uma tabela de vendas onde calculamos o total de cada produto:

           A           B          C         D  
1   Produto     Preço    Qtd     Total  
2   Camiseta    25          3        \=B2\*C2  
3   Calça           60         2        \=B3\*C3  
4   Tênis         120         1        \=B4\*C4  
5   Blusa           35         4        \=B5\*C5  
6   TOTAL GERAL                   \=D2+D3+D4+D5

**Passo a passo:**

1. Digite os dados nas colunas A, B e C  
2. Em D2, digite `=B2*C2` e pressione Enter  
3. Copie a fórmula de D2 para D3, D4 e D5 (use Ctrl+C e Ctrl+V)  
4. Em D6, some todos os totais com `=D2+D3+D4+D5`

### **Exercício Prático 2 \- Folha de Pagamento Simples**

Calcule salários com desconto de INSS (8%):

              A                B                 C                 D  
1   **Funcionário Sal.Bruto  INSS (8%)    Sal.Líquido**  
2         Ana           2500        \=B2\*0.08      \=B2-C2  
3        Carlos        3200        \=B3\*0.08      \=B3-C3  
4        Beatriz       2800        \=B4\*0.08      \=B4-C4  
5        Daniel        3500        \=B5\*0.08      \=B5-C5  
   **Total** **Sal** \=C2+C3+C4+C5  
    **INSS**  \=D2+D3+D4+D5

**Dica:** Use referência absoluta se o desconto for sempre o mesmo\!

* Coloque o percentual em uma célula (ex: F1: 8%)  
* Use na fórmula: `=B2*$F$1`

### **Exercício Prático 3 \- Controle de Combustível**

Calcule gastos mensais com combustível:

        A        B             C               D              E  
1   **Dia      Litros   Preço/L     Total     Km rodados**  
2   01/03    40        4.50        \=B2\*C2         320  
3   08/03    35        4.55        \=B3\*C3         280  
4   15/03    38        4.48        \=B4\*C4         304  
5   22/03    42        4.52        \=B5\*C5         336  
6   29/03    36        4.49        \=B6\*C6         288  
7   TOTAL Litro \=B2+B3+B4+B5+B6/ Valor total: \=D2+D3+D4+D5+D6/ Total litro: \=E2+E3+E4+E5+E6  
8   MÉDIA \=D7/5 \=E

### **Exercício Prático 4 \- Calculadora de Impostos**

Tabela com diferentes alíquotas de imposto:

          A             B               C                 D                E  
1   **Produto     Valor         ICMS             IPI         Impostos**  
2   TV             1000      \=B2\*0.18    \=B2\*0.05       \=C2+D2  
3   Geladeira  1500      \=B3\*0.18    \=B3\*0.05       \=C3+D3  
4   Fogão          800      \=B4\*0.18    \=B4\*0.05       \=C4+D4  
5   Micro.          400      \=B5\*0.18    \=B5\*0.05       \=C5+D5  
Valor total    **\=B2+B3+B4+B5**     
**ICMS total: \=C2+C3+C4+C5 / IPI total: \=D2+D3+D4+D5 /**  
**Total imposto: \=E2+E3+E4+E5**

### **Exercício Prático 5 \- Tabela de Comissões de Vendas**

Calcule comissões diferentes por vendedor:

           A              B                    C                  D                    E  
1   Vendedor   Vendas     % Comissão   Comissão       Meta Batida?  
2     João          15000            5%             \=B2\*C2        \=B2\>=10000  
3     Maria          8500             3%             \=B3\*C3        \=B3\>=10000  
4     Pedro        12000             5%             \=B4\*C4        \=B4\>=10000  
5     Ana             6000             3%             \=B5\*C5        \=B5\>=10000  
6     Total Vendas:    \=B2+B3+B4+B5         
     Total comissão:    \=D2+D3+D4+D5

**Explicação da coluna E:**

* A fórmula `=B2>=10000` retorna VERDADEIRO se a venda for ≥ 10000  
* Retorna FALSO se for menor que 10000

### **Exercício Prático 6 \- Controle de Estoque com Alerta**

Tabela que calcula quando repor estoque:

   A                      B             C               D             E  
1   Produto    Estoque   Vendido  Restante      Status  
2   Notebook     50            12         \=B2-C2      \=D2\<10  
3   Mouse          80            25         \=B3-C3      \=D3\<10  
4   Teclado        30              8          \=B4-C4      \=D4\<10  
5   Monitor        25             15          \=B5-C5      \=D5\<10

**Na coluna E:**

* Se o resultado for VERDADEIRO \= precisa repor (menos de 10 unidades)  
* Se for FALSO \= estoque OK

### **Exercício Prático 7 \- Calculadora de Parcelas**

Simule parcelas de um financiamento:

             A             B  
1   Valor Total   10000  
2   Entrada      \=B1\*0.30  
3   Financiado  \=B1-B2  
4   Parcelas       12  
5   Juros/mês    2%  
6   Valor Parc.  \=B3/B4\*(1+B5)

**Explicação:**

* Entrada \= 30% do valor total  
* Valor financiado \= Total \- Entrada  
* Parcela \= (Valor financiado ÷ número de parcelas) × (1 \+ juros)


