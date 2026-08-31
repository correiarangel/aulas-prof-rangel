# 📄 SPEC-002 — Especificação Técnica da Aula 02: Navegando na Internet & História do HTML
### Módulo 5: Internet & Segurança | Prof. Marcos Rangel — WR Capacitação Profissional

---

## 🎯 1. Visão Geral da Aula 02

A **Aula 02** tem como objetivo ensinar ao aluno leigo, idoso ou criança como utilizar o navegador de internet no dia a dia com autonomia, segurança e discernimento, além de apresentar a origem histórica da World Wide Web (WWW) e a linguagem HTML.

- **Senha Secreta de Liberação**: `b002` (oculta da interface visual).
- **Abordagem Pedagógica**: Linguagem extremamente simples, metáforas cotidianas (janela para o mundo, biblioteca virtual, receitas de bolo), botões visuais táteis grandes (mínimo 56px).

---

## 🖼️ 2. Mapeamento de Recursos Visuais & Imagens

A lição faz uso direto das imagens organizadas em `assets/img/interrnet/`:

| Imagem | Recurso em `assets/img/` | Função Pedagógica na Lição |
| :--- | :--- | :--- |
| **Navegadores Principais** | `assets/img/interrnet/navegadores.png` | Comparativo visual entre os browsers mais populares do mercado |
| **Ícones de Browsers** | `crhome.png`, `firefox.png`, `edge.png`, `safare.png`, `opera.png`, `brava.png` | Identificação visual de ícones em computadores e celulares |
| **Barra de Endereços** | `assets/img/interrnet/barra-url.png` | Explicação de onde digitar o endereço do site (WWW / URL) |
| **Navegação em Abas** | `assets/img/interrnet/add-aba-chrome.png` | Como abrir várias páginas na mesma janela |
| **Menu Principal** | `assets/img/interrnet/menu-chrome-ferrametas.png`, `clicando-menu-firefox1.png` | Localização do menu dos 3 pontinhos (⋮ / ≡) |
| **Histórico de Navegação** | `assets/img/interrnet/hitorico-chrome.png` | Visualizando e pesquisando sites visitados por data (`Ctrl + H`) |
| **Gerenciador de Senhas** | `assets/img/interrnet/gerenciador-senha-chrome.png` | Salvando senhas com segurança em computadores pessoais |
| **Configuração de Inicialização** | `assets/img/interrnet/incialisacao-configuracaoe-crhome.png` | Definindo a página inicial do navegador |
| **Alertas de Phishing/Golpes** | `assets/img/interrnet/site-falso1.png`, `site-falso2.png` | Comparação prática entre site oficial legítimo e site clonado falso |
| **Infraestrutura da Web** | `assets/img/interrnet/globo-conectado.jpeg`, `cabo-marinho-robo-inspecionando.jpeg` | Entendendo como a internet viaja por cabos submarinos globais |

---

## 📖 3. Estrutura de Tópicos Interativos (Fases da Lição)

### 🔹 Tópico 1: O que é o Navegador & Principais Browsers
- **Conceito**: O navegador (browser) como a "janela" que exibe os sites.
- **Comparativo**: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera e Brave.
- **Recurso Visual**: `assets/img/interrnet/navegadores.png`.

### 🔹 Tópico 2: Tour pelas Ferramentas da Janela Web
- **Barra de URL**: Onde digitar o endereço oficial (`www.google.com`).
- **Botões de Controle**: Seta voltar (←), avançar (→), atualizar (↻).
- **Uso de Abas**: Abrir nova aba com `Ctrl + T` e fechar com `Ctrl + W`.
- **Ajuste de Zoom**: Aumentar letras com `Ctrl +` e diminuir com `Ctrl -`.

### 🔹 Tópico 3: Histórico de Navegação & Limpeza de Dados
- **Consultando o Histórico**: Atalho `Ctrl + H` para rever páginas visitadas.
- **Limpeza de Rastros**: Como apagar histórico, cookies e cache para proteger a privacidade.

### 🔹 Tópico 4: Gerenciador de Senhas & Proteção Contra Golpes
- **Gerenciador de Senhas**: Salvar senhas com segurança apenas em dispositivos pessoais.
- **Identificação de Phishing**: Como reconhecer sites clonados falsos (`site-falso1.png`, `site-falso2.png`), verificar o cadeado 🔒 e o protocolo `https://`.

### 🔹 Tópico 5: História do HTML & Inspecção de Código-Fonte
- **Origem**: Invenção do HTML e do WWW em 1989/1991 por Tim Berners-Lee no CERN.
- **Inspeção**: Como clicar com o botão direito do mouse e escolher "Exibir Código-Fonte" para ver as tags HTML.

### 🔹 Tópico 6: Atividade Prática — Criando sua Primeira Home Page Pessoal

#### 6.1 Gerador Interativo de Home Page Pessoal
- **Formulário de Configuração**:
  - Campos de entrada: *Nome Completo*, *Profissão/Ocupação*, *Escolaridade*, *Hobbies & Interesses*, *Cidade/Estado*, e *Sites Favoritos* (com padrão: Google, YouTube e fast.com).
- **Geração Dinâmica de Código**:
  - Ao clicar em `⚡ Gerar Meu Código HTML Personalizado`, o sistema monta o código HTML completo e responsivo pré-formatado.
- **Ferramentas de Exportação**:
  - 📋 **Copiar Código**: Copia todo o código gerado diretamente para a área de transferência do aluno via Clipboard API (`navigator.clipboard.writeText`).
  - 💾 **Baixar HTML (`minha-pagina.html`)**: Gera o download automático do arquivo `.html` pronto para ser aberto em qualquer navegador.

#### 6.2 Nova Atividade Prática: Criando com Inteligência Artificial (IA & Prompts)
- **Introdução Didática Sênior-Friendly**:
  - **O que é Inteligência Artificial (IA)?**: Explicação simples sobre assistentes virtuais capazes de entender textos em português e gerar conteúdos ou códigos sob medida.
  - **O que é um Prompt e Como Funciona?**: Conceito do prompt como uma instrução ou "pedido de trabalho" detalhado enviado à IA para que ela produza o resultado desejado.
- **Prompt Copiável para IA**:
  - Caixa de texto contendo um prompt profissional otimizado para o aluno copiar e colar em qualquer chat de IA (Gemini, ChatGPT, Copilot) para gerar uma Home Page pessoal ainda mais elegante, fluida e com paleta de cores personalizada.
- **Recursos Interativos**:
  - Botão 📋 **Copiar Prompt para a IA** com notificação de confirmação.

---

## 📝 4. Exercício de Fixação Interativo (5 Questões)

1. **História e Código da Web**: Quem criou a World Wide Web (WWW) e a linguagem HTML?
2. **Navegadores e Ferramentas**: Qual é o atalho de teclado usado para consultar o Histórico de navegação?
3. **Navegação Segura**: O que significa a presença do símbolo de cadeado 🔒 e o prefixo `https://` na barra de endereços?
4. **Gerenciamento de Janelas**: Como ajustar o zoom para aumentar o tamanho do texto em uma página pequena?
5. **Criação de Páginas**: Qual extensão de arquivo deve ser usada ao salvar uma página web no Bloco de Notas para que o navegador a reconheça?

---

## 📚 5. Leituras Estratégicas & Valor Acadêmico Reconhecido

- **Berners-Lee, T. (1999)**. *Weaving the Web: The Original Design and Ultimate Destiny of the World Wide Web*. HarperSanFrancisco.
- **W3C (World Wide Web Consortium)**. *HTML5 Core Specification & Web Accessibility Initiative (WAI-ARIA)*.
- **MDN Web Docs (Mozilla Developer Network)**. *Getting Started with the Web & History of HTML*.
- **UNESCO (2023/2024)**. *Guidance for Generative AI in Education and Research & AI Competency Framework for Students*. UNESCO Publishing.
- **MEC / Governo Digital (2024)**. *Guia Prático de Inteligência Artificial para a Cidadania e Educação*. Ministério da Educação do Brasil.
