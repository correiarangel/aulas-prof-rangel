/**
 * Portal Didático — Prof. Marcos Rangel
 * Gerador de Apostila Didática Completa e Estruturada em PDF (Print-Friendly PDF Generator)
 * WR Capacitação Profissional
 */

window.PDFLessons = (function() {
  "use strict";

  const LESSONS = {
    internet: {
      title: "Módulo 5: Internet, Navegação Segura e Produtividade na Nuvem",
      subtitle: "Apostila Didática Oficial Completa — Prof. Marcos Rangel",
      moduleName: "Internet & Segurança",
      sections: [
        {
          lessonNum: 1,
          chapter: "AULA 01: INTRODUÇÃO À INTERNET E NAVEGAÇÃO SEGURA",
          heading: "1.1 O que é a Internet & Origem Histórica",
          content: `A Internet é uma rede mundial de computadores interconectada globalmente, permitindo a troca instantânea de dados, comunicação interpessoal, acesso a serviços bancários e compartilhamento de conteúdo.\n\n• Origem: A Internet nasceu na década de 1960 como o projeto militar norte-americano ARPANET.\n• A Grande Revolução (1989/1991): O cientista Tim Berners-Lee, no laboratório CERN na Suíça, criou a World Wide Web (WWW) e a linguagem HTML, permitindo navegar entre documentos através de links clicáveis (hiperlinks).`,
          images: ["../../assets/img/internet/globo-conectado.jpeg", "../../assets/img/internet/cabo-marinho-robo-inspecionando.jpeg"],
          boxType: "tip",
          boxTitle: "💡 O que é a WWW?",
          boxText: "A World Wide Web (WWW) é a teia de páginas que navegamos na Internet usando um navegador web."
        },
        {
          lessonNum: 1,
          heading: "1.2 Classificação das Redes de Computadores",
          content: `As redes de computadores são classificadas conforme a extensão geográfica que cobrem:\n\n• LAN (Local Area Network - Rede Local): Abrange residências, escritórios ou salas de aula (ex: o Wi-Fi da sua casa).\n• MAN (Metropolitan Area Network - Rede Metropolitana): Conecta bairros ou instituições em uma mesma cidade.\n• WAN (Wide Area Network - Rede de Longa Distância): Conecta cidades, estados, países ou continentes (ex: agências bancárias nacionais).\n• Internet: A maior rede de todas, unindo bilhões de dispositivos no planeta inteiro.`,
          image: "../../assets/img/network-types.png"
        },
        {
          lessonNum: 1,
          heading: "1.3 Principais Navegadores de Internet (Browsers)",
          content: `Os navegadores são programas que interpretam o código HTML e exibem os sites na tela:\n\n1. Google Chrome: O mais utilizado no mundo, rápido e integrado à Conta Google.\n2. Mozilla Firefox: Focado em privacidade, código aberto e altamente personalizável.\n3. Microsoft Edge: Padrão do Windows, baseado no Chromium, otimizado para o sistema.\n4. Apple Safari: Padrão em dispositivos Apple (Mac, iPhone, iPad).\n5. Opera: Inclui recursos nativos como VPN gratuita integrada e bloqueador de anúncios.\n6. Brave: Focado em privacidade rigorosa, bloqueando rastreadores automaticamente.`,
          image: "../../assets/img/internet/navegadores.png"
        },
        {
          lessonNum: 1,
          heading: "1.4 Golpes Virtuais Comuns & Como se Proteger",
          content: `• Phishing (Pescaria de Dados): Mensagens ou e-mails falsos se passando por bancos/lojas para roubar senhas.\n• Boleto Falso: Boletos alterados por criminosos. Solução: Confira sempre o nome e o CNPJ do beneficiário no banco antes de pagar.\n• Loja Online Falsa: Sites com preços absurdamente baixos. Solução: Pesquise no 'Reclame Aqui' e verifique se o endereço tem HTTPS.\n• Engenharia Social & Golpe do PIX: Manipulação por mensagens urgentes de supostos parentes no WhatsApp. Solução: Ligue de viva-voz antes de transferir qualquer valor.\n• Falso Suporte Técnico: Pop-ups alarmantes dizendo que o PC tem vírus. Lembre-se: A Microsoft NUNCA liga para você pedindo acesso remoto.`,
          image: "../../assets/img/internet/site-falso1.png",
          boxType: "warning",
          boxTitle: "⚠️ Regra de Ouro da Segurança",
          boxText: "Bancos e órgãos oficiais NUNCA pedem senhas completas ou códigos por e-mail, telefone ou WhatsApp!"
        },
        {
          lessonNum: 1,
          heading: "1.5 Guia Prático de Navegação Segura",
          content: `1. Mantenha Navegador, Antivírus e Sistema Operacional sempre atualizados.\n2. Verifique o Cadeado 🔒 e o prefixo 'https://' antes de digitar senhas ou dados bancários.\n3. Use Senhas Fortes e Únicas: Combine maiúsculas, minúsculas, números e símbolos (@#$%). Use gerenciadores de senha (Bitwarden, 1Password).\n4. Ative a Autenticação em Duas Etapas (2FA) em todas as suas contas digitais.\n5. Evite compras e acesso a bancos em redes Wi-Fi públicas sem VPN.`,
          image: "../../assets/img/internet-security.png"
        },
        {
          lessonNum: 2,
          chapter: "AULA 02: NAVEGAÇÃO PRÁTICA, SEGURANÇA E HTML",
          heading: "2.1 O Navegador como Janela para a Web & Código-Fonte",
          content: `O navegador é a sua janela de acesso às páginas da Web. Toda página é construída em código HTML.\n\nComo visualizar o código de qualquer site:\n1. Clique com o botão direito do mouse em qualquer área neutra da página.\n2. Escolha a opção 'Exibir código-fonte da página' (ou 'Ver código-fonte').\n3. Uma nova aba abrirá exibindo o código HTML estrutural.`,
          image: "../../assets/img/html-history.png"
        },
        {
          lessonNum: 2,
          heading: "2.2 Tour pelas Ferramentas do Navegador",
          content: `• Barra de Endereços (URL): Onde você digita o site desejado (ex: www.google.com).\n• Botões de Controle: Seta para esquerda (←) volta; Seta para direita (→) avança; Círculo (↻) atualiza a página.\n• Atalhos de Abas: Ctrl + T abre nova aba; Ctrl + W fecha a aba atual.\n• Ajuste de Zoom: Pressione Ctrl e + para aumentar o texto; Ctrl e - para diminuir; Ctrl + 0 restaura o padrão 100%.`,
          image: "../../assets/img/internet/barra-url.png"
        },
        {
          lessonNum: 2,
          heading: "2.3 Histórico de Navegação e Privacidade",
          content: `O navegador registra a lista de todos os sites visitados por data.\n\n• Consultar Histórico: Pressione o atalho Ctrl + H no teclado.\n• Limpar Dados de Navegação: No menu do histórico, escolha 'Limpar dados', marque Histórico, Cookies e Cache, e confirme a exclusão.`,
          image: "../../assets/img/internet/historico-chrome.png"
        },
        {
          lessonNum: 2,
          heading: "2.4 Atividades Práticas — Gerador de Home Page Pessoal & Inteligência Artificial (IA)",
          content: `Passo a Passo Guiado de Criação de Páginas Web:\n\n• Atividade 6.1 — Gerador Interativo de Código HTML:\n1. Preencha seus dados de identificação (Nome Completo, Profissão/Ocupação, Escolaridade, Hobbies, Cidade e 3 Sites Favoritos).\n2. Clique no botão '⚡ Gerar Meu Código HTML Personalizado' para visualizar a estrutura construída em tempo real.\n3. Utilize os botões '📋 Copiar Código' ou '💾 Baixar HTML (minha-pagina.html)' para salvar o arquivo no seu computador.\n4. Dê duplo clique no arquivo salvo para abri-lo no seu navegador de internet!\n\n• Atividade 6.2 — Criando com Inteligência Artificial (IA & Prompts):\n1. Entenda o conceito: Inteligência Artificial é um assistente virtual que entende linguagem natural. Um 'Prompt' é a instrução ou comando que você envia para a IA.\n2. Copie o prompt pré-formatado da lição contendo suas preferências visuais e de cores.\n3. Cole em qualquer chat de IA (Google Gemini, ChatGPT, Copilot) e veja a IA criar uma Home Page ainda mais fluida e elegante para você!`,
          image: "../../assets/img/internet/gerenciador-senha-chrome.png",
          boxType: "code",
          boxTitle: "💻 Atividade Prática Concluída",
          boxText: "Parabéns! Você aprendeu a gerar código HTML personalizado e a interagir com Inteligência Artificial usando Prompts!"
        },
        {
          lessonNum: 3,
          chapter: "AULA 03: DOMINANDO O GOOGLE E PRODUTIVIDADE NA NUVEM",
          heading: "3.1 O Ecossistema Google & A Conta Gmail",
          content: `A Conta Google (Gmail) funciona como o seu passaporte digital único. Com um único e-mail e senha, você acessa e-mails, documentos, arquivos, vídeos e mapas de qualquer lugar do mundo.\n\n⚠️ Cuide bem da sua senha de e-mail e anote em um caderno seguro.`,
          images: ["../../assets/img/internet/a3/gmail-imagem-foto-user-menu-google-fechado.png", "../../assets/img/internet/a3/botao-escreve-email-gmail.png"]
        },
        {
          lessonNum: 3,
          heading: "3.2 O Menu Mágico dos 9 Pontinhos (Waffle)",
          content: `Ao entrar na sua Conta Google, no canto superior direito há um ícone com 9 pontinhos (Waffle). Ele dá acesso gratuito aos principais aplicativos:\n\n• 📄 Google Docs (Documentos): Editor de texto profissional (equivalente ao Word).\n• 📊 Google Sheets (Planilhas): Tabelas e cálculos automáticos (equivalente ao Excel).\n• 🖼️ Google Slides (Apresentações): Criação de slides visuais (equivalente ao PowerPoint).\n• 📁 Google Drive: Seu armário de arquivos na nuvem com 15 GB gratuitos.`,
          images: ["../../assets/img/internet/a3/grade-menu-apps--google.png", "../../assets/img/internet/a3/dual-linha-grade-menu-apps--google.png"]
        },
        {
          lessonNum: 3,
          heading: "3.3 Recursos do Google Docs e Planilhas",
          content: `• Salvamento Automático Contínuo: No Google Docs e Planilhas não existe o botão 'Salvar'. Cada letra ou número digitado é salvo na nuvem instantaneamente.\n• Google Planilhas: As células são identificadas por Colunas (A, B, C) e Linhas (1, 2, 3). Para somar valores, selecione as células e veja o resultado automático no canto inferior direito.`,
          images: ["../../assets/img/internet/a3/barra-ferramentas-google-docs.png", "../../assets/img/internet/a3/barra-ferramentas-planilha.png"]
        },
        {
          lessonNum: 3,
          heading: "3.4 O Poder do Compartilhamento & Google Drive",
          content: `Em vez de anexar arquivos pesados por e-mail, clique no botão azul 'Compartilhar':\n\n• Leitor: A pessoa pode apenas visualizar e ler o documento.\n• Editor: A pessoa pode alterar, escrever e trabalhar junto com você em tempo real.\n\n📁 Passo a Passo Guiado no Google Drive (drive.google.com):\n1. Criar Pastas e Docs: Clique no botão '+ Novo' -> Selecione 'Nova pasta' (para organizar) ou 'Documentos Google' / 'Planilhas Google' (para criar um arquivo novo).\n2. Subir (Upload) Arquivos e Pastas do PC:\n   • Método 1 (+ Novo): Clique em '+ Novo' -> Escolha 'Fazer upload de arquivo' (para 1 arquivo) ou 'Fazer upload de pasta' (para uma pasta inteira) e selecione no computador.\n   • Método 2 (Arrastar e Soltar): Abra a pasta do seu PC, clique no arquivo, segure e arraste diretamente para a tela do navegador no Google Drive!`,
          images: ["../../assets/img/internet/a3/botao-compartilhar-docs-google.png", "../../assets/img/internet/a3/configuracao-compartilhamento-documento.png"]
        },
        {
          lessonNum: 3,
          heading: "3.5 Operadores Avançados de Busca no Google",
          content: `Torne suas pesquisas no Google infinitamente mais precisas usando os operadores:\n\n• Busca Exata: Use aspas duplas -> "informática para terceira idade"\n• Pesquisar em Site Específico: site:g1.globo.com tecnologia\n• Buscar Arquivos em PDF: filetype:pdf apostila redes\n• Excluir Palavras: manga -fruta (busca a história em quadrinhos descartando frutas)\n• Buscar no Título: intitle:segurança digital`,
          image: "../../assets/img/google-search.png"
        },
        {
          lessonNum: null,
          chapter: "REFERÊNCIAS BIBLIOGRÁFICAS E ACADÊMICAS",
          heading: "Leituras Recomendadas & Valor Acadêmico Reconhecido",
          content: `1. Berners-Lee, T., Cailliau, R., Groff, J. F., & Pollermann, B. (1992). World-Wide Web: The Information Universe. Electronic Networking: Research, Applications and Policy, 2(1), 52-58.\n2. Brin, S., & Page, L. (1998). The Anatomy of a Large-Scale Hypertextual Web Search Engine. Computer Networks and ISDN Systems, 30(1-7), 107-117.\n3. Tanenbaum, A. S., & Wetherall, D. J. (2011). Computer Networks (5th ed.). Prentice Hall.\n4. Stallings, W. (2018). Data and Computer Communications (10th ed.). Pearson Education.\n5. W3C (World Wide Web Consortium). Web Content Accessibility Guidelines (WCAG) 2.2. W3C Recommendation.`,
          boxType: "academic",
          boxTitle: "🎓 Bibliografia de Referência",
          boxText: "Material formulado com base em fontes acadêmicas e padrões internacionais do W3C."
        }
      ]
    },
    windows: {
      title: "Módulo 1: Sistema Operacional Windows",
      subtitle: "Apostila Didática Oficial Completa — Prof. Marcos Rangel",
      moduleName: "Sistema Operacional Windows",
      sections: [
        {
          lessonNum: 1,
          chapter: "AULA 01: A HISTÓRIA E O FUNCIONAMENTO DOS COMPUTADORES",
          heading: "1.0 FASE 0 — Antes de Começar",
          content: "Objetivo desta aula: entender de onde vieram os computadores, como eles pensam por dentro (apenas 0 e 1) e de que peças são feitos (hardware e software) — para nunca mais olhar para a sua máquina como algo mágico.",
          html: `
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">ROTEIRO DA AULA (6 PASSOS)</div>
              <table class="mini-sheet">
                <thead>
                  <tr><th>#</th><th>Passo a Passo</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Voltar no tempo: a Guerra e o primeiro computador (ENIAC).</td></tr>
                  <tr><td>2</td><td>Os nomes que mudaram tudo: Turing, Bill Gates e Steve Jobs.</td></tr>
                  <tr><td>3</td><td>Como o computador "pensa": o código binário (0 e 1).</td></tr>
                  <tr><td>4</td><td>O caminho da informação: Entrada &rarr; Processamento &rarr; Saída.</td></tr>
                  <tr><td>5</td><td>Hardware &times; Software: o que se toca e o que se vê na tela.</td></tr>
                  <tr><td>6</td><td>As peças do computador e o Sistema Operacional.</td></tr>
                </tbody>
              </table>
            </div>
            <div class="fun-highlight">
              <h4>🏁 Resultado esperado ao final da aula</h4>
              <p style="margin:0; font-size:12.5px; color:#20130B;">Apontar para qualquer computador e dizer <strong>qual peça faz o quê</strong> — e por que a tela só funciona se existir um <strong>sistema operacional</strong>.</p>
            </div>
          `,
          images: [
            {
              src: "../../assets/img/windows/Aula1/image6.png",
              caption: "Abertura da aula: programadoras operam o primeiro computador eletrônico da história, o ENIAC (Foto: ARL Technical Library / U.S. Army)."
            }
          ],
          imagesWide: true
        },
        {
          lessonNum: 1,
          heading: "1.1 A História dos Computadores (da Guerra ao ENIAC)",
          content: "Os computadores não surgiram prontos como os conhecemos hoje. Eles nasceram de uma necessidade muito séria: durante a Segunda Guerra Mundial (1939-1945) era preciso resolver cálculos complexos rapidamente — e foi aí que tudo começou.",
          html: `
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">RESUMO DO TÓPICO 1</div>
              <table class="mini-sheet">
                <tbody>
                  <tr><td><strong>1939–1945</strong></td><td>Guerra Mundial — surgem os primeiros computadores</td></tr>
                  <tr><td><strong>Fev/1946</strong></td><td>ENIAC, o primeiro computador eletrônico, operado por programadoras</td></tr>
                  <tr><td><strong>Alan Turing</strong></td><td>Cria a base do cálculo automático ao decifrar a máquina Enigma</td></tr>
                </tbody>
              </table>
            </div>
          `,
          images: [
            {
              src: "../../assets/img/windows/Aula1/image1.png",
              caption: "Alan Turing e a máquina Enigma, usada pelos alemães na Segunda Guerra Mundial para codificar mensagens."
            }
          ],
          imagesWide: true,
          boxType: "tip",
          boxTitle: "💡 Para ver",
          boxText: "O filme O Jogo da Imitação conta essa mesma época e mostra por que o trabalho de Turing foi tão importante para a computação."
        },
        {
          lessonNum: 1,
          heading: "1.2 Os Nomes que Mudaram Tudo: Bill Gates e Steve Jobs",
          content: "Com o passar das décadas a tecnologia evoluiu rapidamente — e dois nomes marcaram essa história para sempre.",
          html: `
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">LINHA DO TEMPO DAS DUAS EMPRESAS</div>
              <table class="mini-sheet">
                <thead>
                  <tr><th>Ano</th><th>O que aconteceu</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1975</strong></td><td><strong>Bill Gates funda a Microsoft</strong> — em 1985 lança o Windows 1.0, popularizando os sistemas operacionais em computadores pessoais</td></tr>
                  <tr><td><strong>1976</strong></td><td><strong>Steve Jobs cofunda a Apple</strong> — lança o Apple I e, décadas depois, revoluciona a interface gráfica e populariza o iPhone (2007)</td></tr>
                </tbody>
              </table>
            </div>
          `,
          images: [
            {
              src: "../../assets/img/windows/Aula1/image7.png",
              caption: "Bill Gates (com o logo do Windows 1.0 ao fundo) e Steve Jobs (com o Apple I)."
            }
          ],
          imagesWide: true,
          boxType: "tip",
          boxTitle: "💡 Para lembrar",
          boxText: "Gates levou o sistema operacional para dentro do computador de mesa de todo mundo; Jobs levou a interface gráfica (a janela com botões e ícones que você usa hoje) e depois o telefone."
        },
        {
          lessonNum: 1,
          heading: "1.3 Como o Computador \"Pensa\": o Código Binário",
          content: "Por mais avançado que pareça, um computador é, no fundo, uma grande calculadora. Toda a informação que ele processa — textos, fotos, vídeos, sons — é transformada em apenas dois estados possíveis: ligado (1) e desligado (0).",
          html: `
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">CÓDIGO BINÁRIO — A ÚNICA LINGUAGEM DA MÁQUINA</div>
              <table class="mini-sheet">
                <thead>
                  <tr><th>Estado</th><th>Código</th><th>O que acontece na máquina</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Ligado</strong></td><td>1</td><td>Corrente elétrica passa — o circuito está "ligado"</td></tr>
                  <tr><td><strong>Desligado</strong></td><td>0</td><td>Não passa corrente — o circuito está "desligado"</td></tr>
                </tbody>
              </table>
            </div>
            <div class="fun-highlight">
              <h4>⚠️ Atenção: bit e byte</h4>
              <ul>
                <li><strong>1 bit</strong> = um único dígito binário (0 ou 1).</li>
                <li><strong>8 bits</strong> = <strong>1 byte</strong>, que representa um caractere.</li>
                <li>É assim que um arquivo de 1 MB (1.048.576 bytes) ainda cabia em um disquete de 1,44 MB.</li>
              </ul>
            </div>
          `,
          boxType: "tip",
          boxTitle: "💡 Resumo do Tópico 3",
          boxText: "Computador = grande calculadora • 2 estados: 1 (ligado) e 0 (desligado) • 8 bits = 1 byte = 1 caractere."
        },
        {
          lessonNum: 1,
          heading: "1.4 O Caminho da Informação: Entrada &rarr; Processamento &rarr; Saída",
          content: "Todo processamento de dados segue um caminho simples, dividido em três etapas: entrada, processamento e saída.",
          html: `
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">AS 3 ETAPAS DE TODO PROCESSAMENTO</div>
              <table class="mini-sheet">
                <thead>
                  <tr><th>Etapa</th><th>O que acontece</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Entrada</strong></td><td>O que o computador RECEBE do usuário — teclado, mouse, microfone, câmera</td></tr>
                  <tr><td><strong>Processamento</strong></td><td>O que o computador FAZ com a informação, usando o processador (CPU) para calcular e tomar decisões</td></tr>
                  <tr><td><strong>Saída</strong></td><td>O RESULTADO que aparece para o usuário — monitor, som, impressora</td></tr>
                </tbody>
              </table>
            </div>
          `,
          images: [
            {
              src: "../../assets/img/windows/Aula1/image5.png",
              caption: "Teclado/mouse (Entrada) &rarr; um ícone de processador (Processamento) &rarr; um monitor (Saída)."
            }
          ],
          imagesWide: true,
          boxType: "tip",
          boxTitle: "💡 Pense assim",
          boxText: "É exatamente o caminho do seu dedo no teclado até a letra aparecer na tela. Sem entrada não há processamento; sem processamento não há saída."
        },
        {
          lessonNum: 1,
          heading: "1.5 Hardware &times; Software e as Peças do Computador",
          content: "Todo computador é formado por duas partes que trabalham juntas — uma que você pode TOCAR (hardware) e outra que você só VÊ funcionando na tela (software).",
          html: `
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">HARDWARE (PARTE FÍSICA) &times; SOFTWARE (PARTE LÓGICA)</div>
              <table class="mini-sheet">
                <thead>
                  <tr><th>Hardware (parte física)</th><th>Software (parte lógica)</th></tr>
                </thead>
                <tbody>
                  <tr><td>Teclado</td><td>Navegadores de internet</td></tr>
                  <tr><td>Mouse</td><td>Editores de texto</td></tr>
                  <tr><td>Monitor</td><td>Sistema operacional</td></tr>
                  <tr><td>Processador</td><td>Aplicativos e jogos</td></tr>
                  <tr><td>Memória RAM</td><td>Antivírus</td></tr>
                </tbody>
              </table>
            </div>
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">AS 6 PEÇAS PRINCIPAIS DO COMPUTADOR</div>
              <table class="mini-sheet">
                <thead>
                  <tr><th>Peça</th><th>Função</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Placa-mãe</strong></td><td>Conecta e integra todos os componentes entre si</td></tr>
                  <tr><td><strong>Processador (CPU)</strong></td><td>É o "cérebro" — realiza os cálculos e comandos</td></tr>
                  <tr><td><strong>Memória RAM</strong></td><td>Memória temporária enquanto o computador está ligado</td></tr>
                  <tr><td><strong>HD / SSD</strong></td><td>Onde ficam armazenados os dados e programas (SSD, 2008, é mais rápido que o HD)</td></tr>
                  <tr><td><strong>Placa de vídeo</strong></td><td>Processamento gráfico — essencial para jogos e edição de vídeos</td></tr>
                  <tr><td><strong>Fonte de alimentação</strong></td><td>Fornece energia elétrica para todos os componentes</td></tr>
                </tbody>
              </table>
            </div>
          `,
          images: [
            {
              src: "../../assets/img/windows/Aula1/image4.png",
              caption: "Hardware (a parte física que você toca) e software (a parte lógica que você vê funcionando): um não funciona sozinho sem o outro."
            },
            {
              src: "../../assets/img/windows/Aula1/image2.png",
              caption: "As peças que formam o computador: placa-mãe, processador, RAM, HD/SSD, placa de vídeo e fonte."
            }
          ],
          imagesWide: true
        },
        {
          lessonNum: 1,
          heading: "1.6 O Sistema Operacional: o \"Gerente\" do Computador",
          content: "O sistema operacional é o programa responsável por gerenciar o hardware e os outros programas do computador. É ele que permite que você interaja com a máquina através de telas, ícones e menus.",
          html: `
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">LINHA DO TEMPO DOS SISTEMAS OPERACIONAIS</div>
              <table class="mini-sheet">
                <thead>
                  <tr><th>Ano</th><th>Marco</th></tr>
                </thead>
                <tbody>
                  <tr><td>1971</td><td><strong>Unix</strong> — surgem os primeiros sistemas operacionais</td></tr>
                  <tr><td>1981</td><td><strong>IBM PC</strong> — traz o conceito de computador pessoal</td></tr>
                  <tr><td>1985</td><td><strong>Windows 1.0</strong> — sistema operacional gráfico da Microsoft</td></tr>
                  <tr><td>1991</td><td><strong>Linux</strong> — criado por Linus Torvalds, gratuito e aberto</td></tr>
                  <tr><td>2007</td><td><strong>iOS</strong> — lançado pela Apple junto com o iPhone</td></tr>
                  <tr><td>2008</td><td><strong>Android</strong> — sistema operacional do Google para dispositivos móveis</td></tr>
                </tbody>
              </table>
            </div>
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">OS PRINCIPAIS TIPOS DE SISTEMA OPERACIONAL HOJE</div>
              <table class="mini-sheet">
                <thead>
                  <tr><th>Sistema</th><th>Onde ele é usado</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Windows</strong></td><td>O mais popular em computadores pessoais no mundo todo</td></tr>
                  <tr><td><strong>Linux</strong></td><td>Livre e gratuito, muito usado em servidores e por programadores</td></tr>
                  <tr><td><strong>macOS</strong></td><td>Sistema exclusivo para computadores da Apple</td></tr>
                  <tr><td><strong>Android / iOS</strong></td><td>Sistemas operacionais voltados para celulares e tablets</td></tr>
                </tbody>
              </table>
            </div>
            <div class="es-sheet-box">
              <div class="es-sheet-titlebar">SAIBA MAIS — O LINUX (CONTEÚDO EXTRA, FORA DA PROVA)</div>
              <p><strong>GNU/Linux</strong> é uma família de sistemas operacionais <strong>livres</strong>, formada por três partes que trabalham juntas:</p>
              <table class="mini-sheet">
                <thead>
                  <tr><th>Parte</th><th>O que faz</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Kernel Linux</strong></td><td>O núcleo: conversa com o hardware e gerencia memória, processos, dispositivos, arquivos e permissões</td></tr>
                  <tr><td><strong>Projeto GNU</strong></td><td>As ferramentas básicas de linha de comando e de sistema</td></tr>
                  <tr><td><strong>Distribuição</strong></td><td>O kit completo: kernel + ferramentas + aplicativos + instalador + repositórios (Ubuntu, Debian, Linux Mint, Fedora, openSUSE)</td></tr>
                </tbody>
              </table>
              <div class="fun-highlight"><strong>Software livre</strong> = poder <strong>usar, estudar, modificar e compartilhar</strong>. Ninguém paga licença para instalar, e o código é público para qualquer pessoa conferir.</div>
              <table class="mini-sheet">
                <thead>
                  <tr><th>Aspecto</th><th>No Windows</th><th>No Linux</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Licença</strong></td><td>Paga</td><td>Gratuito e de código aberto</td></tr>
                  <tr><td><strong>Instalar programas</strong></td><td>Baixar .exe de sites variados</td><td>Repositório oficial, com checagem de integridade</td></tr>
                  <tr><td><strong>Segurança</strong></td><td>Usuário costuma ser administrador</td><td>Usuário comum separado do administrador</td></tr>
                  <tr><td><strong>Velocidade</strong></td><td>Engorda com o tempo</td><td>Roda bem em máquinas antigas</td></tr>
                  <tr><td><strong>Estabilidade</strong></td><td>Reinícios frequentes</td><td>Servidores ficam dias ou semanas no ar</td></tr>
                  <tr><td><strong>Interface</strong></td><td>Um visual único</td><td>GNOME, KDE, XFCE trocáveis</td></tr>
                </tbody>
              </table>
              <p><em>Resumo honesto:</em> o Linux não serve para tudo — quem depende de programas muito específicos pode encontrar limitações. Mas para navegar, estudar, trabalhar com documentos e manter o computador seguro e leve, é uma ótima escolha. Na tela da aula existe o botão <strong>"🐧 Saiba mais sobre o Linux"</strong> (Fase 6) com a versão completa em 4 abas. <em>Fonte: Viva o Linux — www.vivaolinux.com.br/linux</em></p>
            </div>
          `,
          images: [
            {
              src: "../../assets/img/windows/Aula1/image3.png",
              caption: "Logotipos do Unix, IBM PC, Windows, Linux, iOS e Android."
            }
          ],
          imagesWide: true,
          boxType: "tip",
          boxTitle: "💡 Resumo do Tópico 6",
          boxText: "Sem sistema operacional o computador seria apenas uma tela preta: é ele que gerencia o hardware e transforma a máquina em algo que você consegue usar."
        },
        {
          lessonNum: 8,
          chapter: "AULA 08: DIAGNÓSTICO DE MEMÓRIA, RESTAURAÇÃO DO SISTEMA E MÍDIA DE INSTALAÇÃO",
          heading: "8.1 Diagnóstico de Memória RAM do Windows (Teste de Memória)",
          content: "A memória RAM é responsável pela velocidade e execução dos programas. Se o computador trava com frequência ou apresenta telas azuis, execute a ferramenta nativa de teste do Windows:",
          steps: [
            {
              text: "1. Pressione a combinação de teclas <kbd>Win</kbd> + <kbd>S</kbd> no teclado para abrir a busca do Windows e digite 'Diagnóstico de Memória do Windows'. Clique no aplicativo localizado.",
              image: "../../assets/img/windows/Aula8/image7.jpg",
              caption: "Janela nativa do Diagnóstico de Memória do Windows com opção de reinicialização."
            },
            {
              text: "2. Selecione a opção 'Reiniciar agora e verificar problemas'. O computador será reiniciado em ambiente seguro para varredura completa da memória física.",
              image: null,
              caption: null
            }
          ],
          boxType: "warning",
          boxTitle: "⚠️ Autorização Prévia em Sala de Aula",
          boxText: "Aguarde a orientação do Professor Marcos Rangel antes de reiniciar os computadores do laboratório."
        },
        {
          lessonNum: 8,
          heading: "8.2 Restauração Padrão do Windows 11 e Windows 10",
          content: "A restauração padrão é ideal para resolver lentidões severas e erros de sistema. O procedimento é equivalente no Windows 10 e Windows 11:",
          steps: [
            {
              text: "• Passo a Passo no Windows 11: Pressione <kbd>Win</kbd> + <kbd>I</kbd> > acesse Sistema > Recuperação > clique em 'Restaurar o computador'.",
              image: "../../assets/img/windows/Aula8/image21.jpg",
              caption: "Acessando o menu de Configurações > Sistema > Recuperação no Windows 11."
            },
            {
              text: "• Painel de Recuperação do Windows 11 com destaque ao botão Restaurar o computador:",
              image: "../../assets/img/windows/Aula8/image16.jpg",
              caption: "Painel de Recuperação do Windows 11 destacando a opção Restaurar o computador."
            },
            {
              text: "• Passo a Passo no Windows 10: Acesse Configurações (<kbd>Win</kbd> + <kbd>I</kbd>) > Atualização e Segurança > Recuperação > no campo 'Restaurar o PC', clique em 'Começar'.",
              image: "../../assets/img/windows/Aula8/image19.jpg",
              caption: "Menu de recuperação e restauração do sistema no Windows 10."
            },
            {
              text: "• Definindo a Estratégia de Arquivos (Manter vs Remover): Escolha entre 'Manter meus arquivos' (preserva fotos e documentos) ou 'Remover tudo' (limpeza de fábrica).",
              image: "../../assets/img/windows/Aula8/image18.jpg",
              caption: "Janela de escolha entre 'Manter meus arquivos' e 'Remover tudo'."
            }
          ]
        },
        {
          lessonNum: 8,
          heading: "8.3 Restauração por Ponto de Restauração (Painel de Controle e rstrui)",
          content: "O Ponto de Restauração permite voltar o computador a uma data anterior em que funcionava perfeitamente, sem afetar seus arquivos recentes:",
          steps: [
            {
              text: "1. Acesse o Painel de Controle no menu de busca e selecione 'Sistema e Segurança'.",
              image: "../../assets/img/windows/Aula8/image26.jpg",
              caption: "Acessando a seção Sistema e Segurança no Painel de Controle."
            },
            {
              text: "2. Na Central de Ações (ou Recuperação), clique em 'Restaurar um estado anterior do computador'.",
              image: "../../assets/img/windows/Aula8/image20.jpg",
              caption: "Opção Restaurar um estado anterior do computador na Central de Ações."
            },
            {
              text: "3. Na janela do assistente, clique em 'Abrir Restauração de Sistema'.",
              image: "../../assets/img/windows/Aula8/image4.jpg",
              caption: "Tela inicial do assistente nativo de Restauração do Sistema."
            },
            {
              text: "4. Clique no botão 'Avançar' para visualizar a lista de pontos de restauração salvos.",
              image: "../../assets/img/windows/Aula8/image13.jpg",
              caption: "Avançando para a seleção de pontos salvos."
            },
            {
              text: "5. Selecione o ponto de restauração com base na data e hora em que a máquina funcionava perfeitamente e confirme.",
              image: "../../assets/img/windows/Aula8/image25.jpg",
              caption: "Lista de Pontos de Restauração gravados por Data e Hora."
            }
          ],
          boxType: "code",
          boxTitle: "⚡ Comando Rápido no Teclado",
          boxText: "Pressione Win + R, digite 'rstrui' e aperte Enter para abrir o assistente de restauração diretamente!"
        },
        {
          lessonNum: 8,
          heading: "8.4 Criando Pendrive USB de Instalação do Windows (Media Creation Tool)",
          content: "Criação de Mídia de Boot Oficial USB através da Media Creation Tool da Microsoft:",
          steps: [
            {
              text: "1. Acesse o site oficial da Microsoft para baixar a ferramenta do Windows 10.",
              image: "../../assets/img/windows/Aula8/image24.png",
              caption: "Página oficial de download do Windows 10 no site da Microsoft."
            },
            {
              text: "2. Clique no botão 'Baixar agora a ferramenta'.",
              image: "../../assets/img/windows/Aula8/image12.png",
              caption: "Botão de download do instalador da Media Creation Tool."
            },
            {
              text: "3. Para o Windows 11, acesse a página equivalente oficial da Microsoft.",
              image: "../../assets/img/windows/Aula8/image15.png",
              caption: "Página oficial de download do Windows 11."
            },
            {
              text: "4. Na pasta Downloads, clique com o botão direito no instalador e selecione 'Executar como administrador'.",
              image: "../../assets/img/windows/Aula8/image8.png",
              caption: "Executando a Media Creation Tool como administrador."
            },
            {
              text: "5. Leia e aceite os Termos de licença aplicáveis.",
              image: "../../assets/img/windows/Aula8/image22.png",
              caption: "Aceitando os Termos de Licença da Microsoft."
            },
            {
              text: "6. Na pergunta 'O que você deseja fazer?', marque 'Criar mídia de instalação (pen drive, DVD ou arquivo ISO)'.",
              image: "../../assets/img/windows/Aula8/image27.png",
              caption: "Seleção da opção Criar mídia de instalação."
            },
            {
              text: "7. Selecione Idioma, Edição e Arquitetura (64 bits ou 32 bits).",
              image: "../../assets/img/windows/Aula8/image3.png",
              caption: "Definição de Idioma, Edição e Arquitetura do sistema."
            },
            {
              text: "8. Selecione a mídia a ser usada: 'Unidade flash USB'.",
              image: "../../assets/img/windows/Aula8/image6.png",
              caption: "Escolha do tipo de mídia: Unidade flash USB."
            },
            {
              text: "9. Selecione a letra correspondente ao pendrive USB conectado (mínimo de 8 GB).",
              image: "../../assets/img/windows/Aula8/image5.png",
              caption: "Seleção da unidade flash USB conectada ao computador."
            },
            {
              text: "10. Aguarde o download dos arquivos de instalação do Windows.",
              image: "../../assets/img/windows/Aula8/image9.png",
              caption: "Progresso do download dos arquivos da imagem do Windows."
            },
            {
              text: "11. Aguarde a gravação da mídia de boot no pendrive.",
              image: "../../assets/img/windows/Aula8/image14.png",
              caption: "Progresso da criação da mídia de instalação no pendrive."
            },
            {
              text: "12. Mensagem de conclusão: 'Sua unidade flash USB está pronta'. Clique em Concluir.",
              image: "../../assets/img/windows/Aula8/image11.png",
              caption: "Conclusão: Sua unidade flash USB está pronta para uso."
            },
            {
              text: "13. Em caso de instalação do Windows 11, aceite os termos no assistente de instalação.",
              image: "../../assets/img/windows/Aula8/image23.png",
              caption: "Aceitando os termos de licença durante a instalação do Windows 11."
            },
            {
              text: "14. Selecione o tipo de instalação (Atualização ou Personalizada).",
              image: "../../assets/img/windows/Aula8/image28.png",
              caption: "Escolha entre Atualização ou Instalação Personalizada."
            },
            {
              text: "15. Escolha a partição de disco para a instalação do sistema.",
              image: "../../assets/img/windows/Aula8/image17.png",
              caption: "Seleção da partição do disco rígido para instalação do Windows."
            }
          ]
        },
        {
          lessonNum: 8,
          heading: "8.5 Resolução de Erros & Formatação do Pendrive em FAT32",
          content: "Se a ferramenta apresentar erro ao gravar no pendrive, formate a unidade em FAT32 antes de tentar novamente:",
          steps: [
            {
              text: "1. No Explorador de Arquivos (<kbd>Win</kbd> + <kbd>E</kbd>), clique com o botão direito sobre o ícone do Pendrive e escolha 'Formatar...'.",
              image: "../../assets/img/windows/Aula8/image2.png",
              caption: "Menu de contexto do Pendrive com opção Formatar no Explorador de Arquivos."
            },
            {
              text: "2. Em Sistema de arquivos, selecione 'FAT32 (Padrão)' e clique em 'Iniciar'.",
              image: "../../assets/img/windows/Aula8/image10.png",
              caption: "Janela de Formatação: Seleção do Sistema de arquivos FAT32 (Padrão)."
            },
            {
              text: "3. Confirme o aviso de exclusão dos dados do pendrive.",
              image: "../../assets/img/windows/Aula8/image1.png",
              caption: "Aviso de alerta: A formatação apaga permanentemente todos os dados do pendrive."
            }
          ],
          boxType: "warning",
          boxTitle: "⚠️ Cuidado com Seus Dados",
          boxText: "Confirme se não há arquivos pessoais importantes no pendrive antes de clicar em Formatar."
        },
        {
          lessonNum: 7,
          chapter: "AULA 07: SEGURANÇA E ANTIVÍRUS NO WINDOWS",
          heading: "7.1 Central de Segurança do Windows",
          content: "A Central de Segurança (Windows 7) e a Segurança do Windows (Windows 10/11) reúnem em um único painel toda a proteção do computador: antivírus, firewall, atualizações e manutenção do sistema. Ela avisa quando falta alguma proteção e oferece atalhos para corrigir o problema.",
          steps: [
            {
              text: "• Central de Segurança no Windows 7: reúne Firewall, Windows Update, Proteção contra vírus, Spyware e outras configurações de segurança.",
              image: "../../assets/img/windows/Aula7/image13.png",
              caption: "Central de Segurança do Windows 7 com todos os itens de proteção reunidos em um só painel."
            },
            {
              text: "• Segurança do Windows no Windows 10/11: a nova central visual mostra 'Proteção contra vírus e ameaças', 'Proteção de conta', 'Firewall e proteção de rede' e muito mais.",
              image: "../../assets/img/windows/Aula7/image2.png",
              caption: "Central da Segurança do Windows 10/11: o painel moderno de proteção do sistema."
            }
          ],
          boxType: "tip",
          boxTitle: "💡 Dica Rápida",
          boxText: "Acesse a Segurança do Windows digitando o nome 'Segurança do Windows' na busca (Win + S) ou diretamente por Configurações > Privacidade e Segurança."
        },
        {
          lessonNum: 7,
          heading: "7.2 Antivírus do Windows (Windows Defender)",
          content: "O Windows Defender (Microsoft Defender Antivírus) é o antivírus NATIVO e gratuito dos Windows 10 e 11. Ele funciona em tempo real, verificando arquivos, downloads e programas antes que eles causem danos. No Windows 7, a central de segurança monitora os programas de proteção instalados.",
          steps: [
            {
              text: "1. Abra a Segurança do Windows e acesse 'Proteção contra vírus e ameaças'.",
              image: "../../assets/img/windows/Aula7/image14.png",
              caption: "Windows Defender no Windows 7: proteção contra vírus e spyware ativa."
            },
            {
              text: "2. No Windows 10/11, o Defender mostra o status da proteção em tempo real e permite executar verificações rápidas ou completas.",
              image: "../../assets/img/windows/Aula7/image16.png",
              caption: "Windows Defender no Windows 10/11: proteção em tempo real ativa."
            },
            {
              text: "3. Quando encontra uma ameaça, o Defender bloqueia e remove o arquivo, exibindo o alerta de 'Ameaças encontradas — Ações executadas'.",
              image: "../../assets/img/windows/Aula7/image17.png",
              caption: "Windows Defender após encontrar um vírus: histórico de proteção com a ameaça removida."
            }
          ],
          boxType: "warning",
          boxTitle: "⚠️ Não Instale Dois Antivírus ao Mesmo Tempo",
          boxText: "Ter dois antivírus ativos simultaneamente pode causar conflitos e deixar o sistema lento. Escolha um único programa de segurança confiável."
        },
        {
          lessonNum: 7,
          heading: "7.3 Atualizações de Segurança (Windows Update)",
          content: "As atualizações do Windows corrigem falhas descobertas no sistema, fechando as 'portas de entrada' usadas por vírus e hackers. Manter o Windows Update ativo é um dos passos mais importantes da segurança.",
          sec: `
            <div class="fun-highlight">
              <h4>🛡️ Por que atualizar é tão importante?</h4>
              <ul>
                <li>Corrige vulnerabilidades conhecidas (falhas de segurança).</li>
                <li>Atualiza as definições de vírus do Windows Defender.</li>
                <li>Melhora a estabilidade e o desempenho do sistema.</li>
                <li>Adiciona novos recursos e compatibilidade com programas.</li>
              </ul>
            </div>
            <div class="mini-sheet">
              <div class="es-sheet-titlebar">COMO VERIFICAR ATUALIZAÇÕES</div>
              <div class="es-sheet-box">
                <p><strong>Windows 10/11:</strong> Configurações (Win + I) → Windows Update → "Verificar se há atualizações".</p>
                <p><strong>Windows 7:</strong> Iniciar → Painel de Controle → Windows Update.</p>
              </div>
            </div>`
        },
        {
          lessonNum: 7,
          heading: "7.4 Firewall do Windows",
          content: "O Firewall do Windows funciona como um 'muro de proteção' que filtra a entrada e a saída de dados da internet, bloqueando acessos não autorizados ao computador sem bloquear a navegação normal.",
          steps: [
            {
              text: "• Firewall no Windows 7: a Central de Segurança indica quando o firewall está ativo e acessível.",
              image: "../../assets/img/windows/Aula7/image1.png",
              caption: "Firewall do Windows 7 ativo apontado pela Central de Segurança."
            },
            {
              text: "• Firewall no Windows 10/11: exibe o status por tipo de rede (DNS, Rede pública, Rede privada) e permite abrir exceções para programas confiáveis.",
              image: "../../assets/img/windows/Aula7/image11.png",
              caption: "Firewall e proteção de rede no Windows 10/11 com as redes monitoradas."
            }
          ],
          boxType: "tip",
          boxTitle: "💡 Entendendo o Firewall",
          boxText: "O firewall PERMITE os acessos autorizados (como navegar e baixar da página oficial) e BLOQUEIA as tentativas estranhas vindas da internet. Ele não impede o uso normal do computador."
        },
        {
          lessonNum: 7,
          heading: "7.5 Ferramenta de Backup do Windows",
          content: "O Backup cria cópias de segurança dos seus arquivos para recuperá-los caso o computador seja perdido, roubado, infectado ou apresente falha no disco. No Windows 7 a ferramenta nativa é o 'Backup e Restauração'; no Windows 10/11 o recurso é o 'Histórico de Arquivos'.",
          sec: `
            <div class="mini-sheet">
              <div class="es-sheet-titlebar">🖥️ FERRAMENTAS DE BACKUP NATIVAS</div>
              <div class="es-sheet-box">
                <p><strong>Windows 7:</strong> Painel de Controle → Sistema e Segurança → <strong>Backup e Restauração</strong>.</p>
                <p><strong>Windows 10/11:</strong> Configurações → Contas → <strong>Backup do Windows</strong> ou <strong>Histórico de Arquivos</strong>.</p>
              </div>
            </div>
            <div class="fun-highlight">
              <h4>📦 Boas práticas de backup 📦</h4>
              <ul>
                <li>Copie para um <strong>pendrive ou HD externo</strong>, não só para o próprio disco.</li>
                <li>Prefira o <strong>Complemento 7A</strong>, que ensina um backup .bat automático.</li>
                <li>Faça backup em datas regulares (ex.: toda sexta-feira).</li>
              </ul>
            </div>`
        },
        {
          lessonNum: 7,
          heading: "7.6 Criar um Ponto de Restauração",
          content: "Um Ponto de Restauração é uma 'fotografia' do sistema em uma data. Se um programa ou driver causar problemas, o aluno pode voltar o computador a um ponto anterior em que funcionava perfeitamente — sem perder documentos e fotos recentes.",
          steps: [
            {
              text: "• Windows 7: Iniciar → digite 'Criar um ponto de restauração' → escolha a unidade de sistema → clique em 'Criar' → digite uma descrição da data.",
              image: "../../assets/img/windows/Aula7/image9.png",
              caption: "Criando um Ponto de Restauração nas Propriedades do Sistema do Windows 7."
            },
            {
              text: "• Windows 10/11: Configurações → Sistema → Sobre → 'Proteção do Sistema' → Crie um ponto manual antes de instalar programas novos.",
              image: "../../assets/img/windows/Aula7/image15.png",
              caption: "Painel de Proteção do Sistema no Windows 10/11 com botão Criar."
            }
          ],
          boxType: "code",
          boxTitle: "⚡ Comando Rápido no Teclado",
          boxText: "Pressione Win + R, digite 'rstrui' e aperte Enter para abrir o assistente de Restauração do Sistema — compatível com Windows 7, 10 e 11."
        },
        {
          lessonNum: 7,
          heading: "7.7 Os Riscos da Pirataria",
          content: "Usar Windows pirata (crackeado) é extremamente perigoso: além de ser ilegal, o 'crack' pode conter vírus escondidos, e o sistema pirata geralmente desativa as atualizações de segurança — deixando o computador totalmente vulnerável.",
          sec: `
            <div class="mini-sheet">
              <div class="es-sheet-titlebar">⚠️ OS PERIGOS DO WINDOWS PIRATA</div>
              <div class="es-sheet-box">
                <p><strong>1. Vírus no próprio crack:</strong> o 'ativador' pode roubar senhas e dados.</p>
                <p><strong>2. Sem atualizações:</strong> o pirateador bloqueia o Windows Update, deixando falhas abertas.</p>
                <p><strong>3. Sem suporte:</strong> nenhuma correção oficial chega ao sistema.</p>
                <p><strong>4. Ilegal:</strong> o uso de software pirata é crime de violação de direitos autorais.</p>
              </div>
            </div>`,
          boxType: "warning",
          boxTitle: "🚫 Nunca Use 'Ativadores' ou Cracks",
          boxText: "Se o crack promete 'ativar o Windows de graça', na prática ele entrega o computador nas mãos de cibercriminosos."
        },
        {
          lessonNum: 71,
          chapter: "COMPLEMENTO 7A: BACKUP AUTOMÁTICO COM ARQUIVO .BAT",
          heading: "7A.1 O que é um arquivo .BAT?",
          content: "Um arquivo .bat ('batch') é um arquivo de texto simples que guarda uma lista de comandos do Prompt de Comando do Windows. Ao dar dois cliques, o Windows executa os comandos em sequência automaticamente — funcionando como uma 'receita' de tarefas repetitivas.",
          steps: [
            {
              text: "1. O arquivo .bat guarda comandos que o Prompt de Comando executa: é a base do script de backup.",
              image: "../../assets/img/windows/Aula7ComplementoBackup/image3.png",
              caption: "O arquivo .bat armazena os comandos executados pelo Prompt de Comando."
            }
          ],
          boxType: "tip",
          boxTitle: "💡 Por que usar .bat para backup?",
          boxText: "Transforma uma tarefa repetitiva (copiar arquivos manualmente) em um processo de um clique só — reduzindo erros e economizando tempo."
        },
        {
          lessonNum: 71,
          heading: "7A.2 Primeiro Script: 'Olá, Mundo!'",
          content: "Antes do backup, pratique criando um arquivo .bat simples: abra o Bloco de Notas, digite o script, salve como ola_mundo.bat (Tipo: Todos os arquivos) e execute com dois cliques.",
          steps: [
            {
              text: "1. Digite o script no Bloco de Notas:",
              image: "../../assets/img/windows/Aula7ComplementoBackup/image5.png",
              caption: "Script 'echo Ola, Mundo!' e 'pause' digitados no Bloco de Notas."
            },
            {
              text: "2. Execute o arquivo: uma janela preta mostra a mensagem 'Ola, Mundo!' e permanece aberta aguardando uma tecla.",
              image: "../../assets/img/windows/Aula7ComplementoBackup/image4.png",
              caption: "Resultado da execução: mensagem exibida e janela mantida aberta pelo comando pause."
            }
          ],
          boxType: "code",
          boxTitle: "⚡ Código do Script de Teste",
          boxText: "@echo off\necho Ola, Mundo!\npause"
        },
        {
          lessonNum: 71,
          heading: "7A.3 Script de Backup do Pendrive (comando xcopy)",
          content: "O comando xcopy copia pastas inteiras (incluindo subpastas). No script, o aluno ajusta apenas duas linhas: ORIGEM (pasta a copiar) e DESTINO (letra do pendrive).",
          steps: [
            {
              text: "1. O comando xcopy copia os arquivos da pasta de origem para o pendrive:",
              image: "../../assets/img/windows/Aula7ComplementoBackup/image7.png",
              caption: "Explicação visual do comando xcopy copiando a pasta de origem para o destino."
            },
            {
              text: "2. Descubra a letra do pendrive (ex.: E:) no Explorador de Arquivos (> Este Computador):",
              image: "../../assets/img/windows/Aula7ComplementoBackup/image6.png",
              caption: "Localizando a letra da unidade do pendrive no Explorador de Arquivos."
            },
            {
              text: "3. Monte o script com as linhas ORIGEM e DESTINO ajustadas pelo aluno:",
              image: "../../assets/img/windows/Aula7ComplementoBackup/image2.png",
              caption: "Script backup.bat no Bloco de Notas, com as linhas ORIGEM e DESTINO destacadas para ajuste."
            }
          ],
          boxType: "code",
          boxTitle: "⚡ Código do Script de Backup",
          boxText: "@echo off\nREM ==== Aluno: ajuste as duas linhas abaixo ====\nset ORIGEM=\"C:\\Usuarios\\SeuNome\\Documentos\"\nset DESTINO=E:\\Backup\necho Iniciando backup...\nxcopy %ORIGEM% %DESTINO% /E /I /Y\necho Backup concluido!\npause"
        },
        {
          lessonNum: 71,
          heading: "7A.4 Executando e Conferindo o Backup",
          content: "Com o pendrive conectado, dê dois cliques em backup.bat e aguarde a mensagem 'Backup concluido!'. Depois confira no pendrive se os arquivos foram copiados.",
          steps: [
            {
              text: "1. O Prompt de Comando mostra cada arquivo copiado e confirma o término do backup:",
              image: "../../assets/img/windows/Aula7ComplementoBackup/image1.png",
              caption: "Execução do backup.bat: arquivos copiados e mensagem de conclusão exibida."
            }
          ],
          boxType: "tip",
          boxTitle: "💡 O que significa /E /I /Y?",
          boxText: "/E copia também as subpastas; /I trata o destino como pasta; /Y substitui arquivos existentes sem perguntar."
        },
        {
          lessonNum: 81,
          chapter: "COMPLEMENTO 8A: TUTORIAL DE CRIAÇÃO DE MÍDIA DE INSTALAÇÃO",
          heading: "8A.1 Introdução e Material Necessário",
          content: "Para instalar o Windows é preciso de uma mídia de instalação — normalmente um pendrive com os arquivos do sistema. A ferramenta oficial da Microsoft que cria essa mídia é a Media Creation Tool.",
          steps: [
            {
              text: "1. Material necessário: um pendrive com pelo menos 8 GB e um computador com acesso à internet.",
              image: "../../assets/img/windows/Aula8TutorialMidia/image1.png",
              caption: "Tela de introdução do tutorial, com o material necessário apresentado."
            }
          ],
          boxType: "tip",
          boxTitle: "📋 Atenção ao Pendrive",
          boxText: "Todo o conteúdo do pendrive será apagado durante a gravação. Use um pendrive reserva."
        },
        {
          lessonNum: 81,
          heading: "8A.2 Baixando a Media Creation Tool",
          content: "Baixe a ferramenta SOMENTE do site oficial da Microsoft (microsoft.com) para evitar versões falsas que podem conter vírus.",
          steps: [
            {
              text: "1. Clique em 'Baixar agora' no item 'Ferramenta de Criação de Mídia':",
              image: "../../assets/img/windows/Aula8TutorialMidia/image1.png",
              caption: "Localizando a Media Creation Tool na página de download da Microsoft."
            },
            {
              text: "2. Salve o arquivo MediaCreationTool_22H2.exe:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image3.png",
              caption: "Download do arquivo da ferramenta selecionado no navegador."
            },
            {
              text: "3. O arquivo aparece na pasta Download aguardando execução (clique duas vezes para abrir):",
              image: "../../assets/img/windows/Aula8TutorialMidia/image2.png",
              caption: "Arquivo da Media Creation Tool salvo na pasta Download."
            }
          ]
        },
        {
          lessonNum: 81,
          heading: "8A.3 Executando o Assistente de Instalação",
          content: "Ao abrir, a ferramenta inicia um assistente guiado. Basta aceitar os avisos de licença e escolher 'Criar mídia de instalação (pen drive USB, DVD ou arquivo ISO) para outro computador'.",
          steps: [
            {
              text: "1. Aplicando alterações: aguarde e aceite para continuar:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image5.png",
              caption: "Assistente da Media Creation Tool iniciando as alterações."
            },
            {
              text: "2. A tela 'Preparando tudo' abre a próxima etapa:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image4.png",
              caption: "Tela de preparação da ferramenta de criação de mídia."
            },
            {
              text: "3. Aceite os avisos e termos de licença da Microsoft:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image7.png",
              caption: "Avisos e termos de licença exibidos pela ferramenta."
            },
            {
              text: "4. Marque 'Criar mídia de instalação...' e clique em Avançar:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image6.png",
              caption: "Seleção da opção de criar mídia de instalação para outro computador."
            }
          ]
        },
        {
          lessonNum: 81,
          heading: "8A.4 Escolhendo Idioma, Edição e Arquitetura",
          content: "O assistente pergunta sobre idioma (Português Brasil), edição e arquitetura (64 ou 32 bits). O padrão recomendado é quase sempre o correto.",
          steps: [
            {
              text: "1. Clique em 'Usar as opções recomendadas para este computador':",
              image: "../../assets/img/windows/Aula8TutorialMidia/image9.png",
              caption: "Seleção da opção recomendada para o computador."
            },
            {
              text: "2. Confirme o idioma e clique em Avançar:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image8.png",
              caption: "Idioma selecionado no assistente da ferramenta."
            },
            {
              text: "3. Revise os detalhes da instalação (idioma, edição, arquitetura) e avance:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image12.png",
              caption: "Detalhes finais da instalação antes de iniciar a gravação."
            }
          ],
          boxType: "tip",
          boxTitle: "💡 Arquitetura = 64 bits?",
          boxText: "A maioria dos computadores modernos usa 64 bits. O padrão recomendado pelo assistente já seleciona a arquitetura correta automaticamente."
        },
        {
          lessonNum: 81,
          heading: "8A.5 Pendrive USB ou Arquivo ISO?",
          content: "A ferramenta oferece duas formas: Pendrive USB (grava direto no pen drive — mais prático) ou Arquivo ISO (baixa uma imagem de disco para gravar em DVD depois ou montar como CD).",
          steps: [
            {
              text: "1. Selecione 'Unidade flash USB' e clique em Avançar:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image10.png",
              caption: "Escolha da opção Pendrive USB na ferramenta."
            },
            {
              text: "2. Selecione a letra da unidade USB conectada:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image11.png",
              caption: "Seleção da unidade flash USB para gravação da mídia."
            },
            {
              text: "3. Aguarde a preparação do pendrive:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image13.png",
              caption: "Aguarde enquanto o pendrive está sendo preparado."
            },
            {
              text: "4. Acompanhe o progresso do download do Windows:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image14.png",
              caption: "Barra de progresso do download dos arquivos de instalação."
            },
            {
              text: "5. Ao final, a mensagem 'Ferramenta concluída com êxito' confirma a mídia pronta:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image15.png",
              caption: "Tela de conclusão: a unidade flash USB está pronta para uso."
            }
          ]
        },
        {
          lessonNum: 81,
          heading: "8A.6 Resolvendo o Erro de Formatação (FAT32)",
          content: "Se aparecer a mensagem 'A unidade precisa ter pelo menos 8 GB', o pendrive pode ser pequeno ou estar em um formato incompatível. A solução é reformatar o pendrive em FAT32 e tentar novamente.",
          steps: [
            {
              text: "1. Erro típico de capacidade/formato do pendrive:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image16.png",
              caption: "Erro informando que a unidade deve ter pelo menos 8 GB."
            },
            {
              text: "2. No Explorador de Arquivos, clique com o botão direito no pendrive e escolha 'Formatar...':",
              image: "../../assets/img/windows/Aula8TutorialMidia/image17.png",
              caption: "Formatação do pendrive pelo menu de contexto do Explorador de Arquivos."
            },
            {
              text: "3. Em Sistema de arquivos, selecione FAT32 e clique em Iniciar:",
              image: "../../assets/img/windows/Aula8TutorialMidia/image18.png",
              caption: "Janela de formatação com o sistema de arquivos FAT32 selecionado."
            }
          ],
          boxType: "tip",
          boxTitle: "💡 Lembre-se:",
          boxText: "Após criar a mídia, o pendrive fica 'bootável' — capaz de iniciar o computador direto dele, pronto para reutilizar na aula de Formatação."
        }
      ]
    },
    word: {
      title: "Módulo 2: Microsoft Word — Editor de Textos Profissional",
      subtitle: "Apostila Didática Oficial Completa — Prof. Marcos Rangel",
      moduleName: "Microsoft Word",
      sections: [
        {
          chapter: "UNIDADE 1: EDIÇÃO E FORMATAÇÃO DE DOCUMENTOS",
          heading: "1.1 Introdução ao Processamento de Texto",
          content: "O Microsoft Word é o padrão da indústria para a criação de documentos impressos e digitais, como relatórios, cartas oficiais, contratos, livros e trabalhos científicos."
        },
        {
          heading: "1.2 Formatação de Fonte e Parágrafos",
          content: `• Estilos de Texto: Negrito (Ctrl + N), Itálico (Ctrl + I), Sublinhado (Ctrl + S).\n• Alinhamentos de Parágrafo:\n  - Esquerda (Ctrl + Q)\n  - Centralizado (Ctrl + E)\n  - Direita (Ctrl + G)\n  - Justificado (Ctrl + J): Alinha margens esquerda e direita simultaneamente, essencial para documentos formais.`
        },
        {
          heading: "1.3 Tabelas, Imagens e Elementos Gráficos",
          content: "Insira tabelas para organizar dados tabulares e ajuste a disposição do texto em torno de imagens inseridas. Utilize Quebra de Página (Ctrl + Enter) para iniciar novos capítulos corretamente."
        },
        {
          heading: "1.4 Pincel de Formatação e Estilos Rápidos",
          content: "O Pincel de Formatação copia todos os atributos visuais de um texto (fonte, tamanho, cor, espaçamento) e os aplica instantaneamente em outro trecho com um clique."
        },
        {
          heading: "1.5 Normas ABNT Fundamentais",
          content: "• Fonte: Arial ou Times New Roman tamanho 12 para corpo do texto.\n• Espaçamento entre linhas: 1,5 cm.\n• Margens: Superior 3cm, Esquerda 3cm, Inferior 2cm, Direita 2cm."
        }
      ]
    },
    excel: {
      title: "Módulo 3: Microsoft Excel — Planilhas Eletrônicas e Análise de Dados",
      subtitle: "Apostila Didática Oficial Completa — Prof. Marcos Rangel",
      moduleName: "Microsoft Excel",
      sections: [
        {
          lessonNum: 1,
          chapter: "AULA 01: INTRODUÇÃO AO EXCEL, INTERFACE E NAVEGAÇÃO",
          heading: "1.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `O QUE VAMOS FAZER (objetivo):
Você vai aprender a usar o Microsoft Excel do zero: abrir o programa, entender cada parte da tela, digitar dados sem medo, editar com o teclado e salvar o seu trabalho. No fim você terá a planilha de compras funcionando, com o total de cada item calculado por você e o total geral automático.

COMO VAMOS FAZER (os 7 passos):
1. O que é o Excel e onde ele é usado
2. Anatomia da interface e elementos principais
3. Planilha (aba) × Pasta de Trabalho
4. Tipos de dados e alinhamento automático
5. Inserir, editar com F2 e navegar pelo teclado
6. Salvar a pasta de trabalho (.xlsx vs .csv)
7. Operadores básicos e a função =SOMA()

PREPARAÇÃO ANTES DO TÓPICO 1:
• Abra o Excel em uma pasta de trabalho em branco (Plan1) e deixe a janela maximizada.
• Confira se as Faixas de Opções (Arquivo, Página Inicial, Inserir, Fórmulas, Dados) estão visíveis no topo.
• Se alguma faixa sumiu: Arquivo → Opções → Faixa de Opções e marque as abas que quiser de volta.

O QUE VOCÊ VAI CONSEGUIR NO FINAL:
Uma pasta salva em .xlsx com a planilha de compras montada: total de cada item calculado por multiplicação com desconto e total geral pela função SOMA — sem nenhuma conta digitada à mão.`,
          html: `<div style="margin:16px 0;">
  <p style="font-size:12px; color:#475569; margin:0 0 10px 0;">O objetivo desta aula é usar o Excel do zero (interface, tipos de dados, edição com F2, salvamento) e sair com uma planilha de compras com totais calculados por fórmula.</p>
  <div style="font-weight:800; color:#166534; font-size:14px; margin-bottom:8px;">🗺️ O ROTEIRO DOS 7 PASSOS</div>
  <div style="display:flex; flex-wrap:wrap; gap:6px;">
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">1</strong> O que é o Excel e onde ele é usado</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">2</strong> Anatomia da interface e elementos principais</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">3</strong> Planilha (aba) × Pasta de Trabalho</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">4</strong> Tipos de dados e alinhamento automático</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">5</strong> Inserir, editar com F2 e navegar pelo teclado</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">6</strong> Salvar a pasta de trabalho (.xlsx vs .csv)</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">7</strong> Operadores básicos e a função =SOMA()</span>
  </div>
  <p style="font-size:11.5px; color:#475569; margin:8px 0 0 0;">Cada passo tem um check no fim da fase onde ele é executado — o próximo só abre depois que o anterior for concluído.</p>
  <div class="es-sheet-box" style="max-width:470px; background:#F7FEF9;">
    <div class="es-sheet-titlebar">⚙️ FAIXA DE PREPARAÇÃO — antes do Tópico 1</div>
    <ol style="font-size:11.5px; color:#374151; line-height:1.6; margin:0; padding-left:18px;">
      <li>Abra o Excel em uma <strong>pasta de trabalho em branco</strong> (Plan1), maximizado.</li>
      <li>Confira se as Faixas de Opções (Arquivo, Página Inicial, Inserir, Fórmulas, Dados) estão visíveis.</li>
      <li>Se sumiu: <strong>Arquivo → Opções → Faixa de Opções</strong>.</li>
    </ol>
  </div>
  <div style="font-weight:800; color:#166534; font-size:14px; margin:16px 0 8px 0;">🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL</div>
  <p style="font-size:12px; color:#475569; margin:0 0 8px 0;">Total de cada item por multiplicação com desconto e total geral pela SOMA — nenhuma conta digitada à mão:</p>
  <div class="es-sheet-box" style="max-width:470px;">
    <div class="es-sheet-titlebar">Planilha de Compras (operadores + SOMA)</div>
    <table class="mini-sheet">
      <tr><th>Item</th><th>Preço</th><th>Qtd</th><th>Desc.</th><th>Total</th></tr>
      <tr><td>Caderno</td><td>12,00</td><td>2</td><td>5%</td><td>=B2*C2*(1-D2)</td></tr>
      <tr><td>Caneta</td><td>2,50</td><td>5</td><td>0%</td><td>=B3*C3*(1-D3)</td></tr>
      <tr><td>…</td><td>…</td><td>…</td><td>…</td><td>…</td></tr>
      <tr style="background:#FEF3C7; font-weight:700;"><td>TOTAL</td><td></td><td></td><td></td><td>=SOMA(E2:E6)</td></tr>
    </table>
  </div>
</div>`
        },
        {
          lessonNum: 1,
          heading: "1.1 O que é o Microsoft Excel & Aplicações Práticas",
          content: "O Microsoft Excel é a planilha eletrônica líder mundial para organização de dados, cálculos automáticos, análises financeiras e gráficos.\n\n• Origem e Conceito: Lançado originalmente em 1985, substituiu o cálculo manual em papel por tabelas inteligentes em computador.\n• Aplicações no Dia a Dia: Controle de orçamento doméstico, controle de estoque, folha de pagamento, boletim escolar e emissão de relatórios dinâmicos.",
          image: "../../assets/img/excel/a1/excel_aula1_01_visao_geral.png",
          caption: "Visão Geral de uma Planilha Financeira no Excel"
        },
        {
          lessonNum: 1,
          heading: "1.2 Anatomia da Interface & Elementos Principais",
          content: "• Barra de Título: Exibe o nome do arquivo (ex: Pasta1.xlsx).\n• Faixa de Opções (Ribbon): Agrupa os comandos em abas (Página Inicial, Inserir, Fórmulas, Dados).\n• Caixa de Nome: Mostra a coordenada exata da célula selecionada (ex: A1, B5).\n• Barra de Fórmulas: Exibe o conteúdo real ou a fórmula oculta na célula.\n• Grade de Planilha: Matriz dividida em Colunas (identificadas por letras A, B, C...) e Linhas (identificadas por números 1, 2, 3...).\n• Barra de Status: Exibe contagem, soma e média rápida dos valores selecionados.",
          image: "../../assets/img/excel/a1/excel_aula1_02_anatomia_interface.png",
          caption: "Anatomia da Interface do Microsoft Excel"
        },
        {
          lessonNum: 1,
          heading: "1.3 Diferença entre Planilhas (Abas) e Pastas de Trabalho",
          content: "• Pasta de Trabalho: É o arquivo completo salvo no computador com a extensão .xlsx (pense como um caderno de anotações).\n• Planilha (Sheet): É uma aba individual de trabalho contida dentro do arquivo (pense como as folhas de papel desse caderno, ex: Plan1, Plan2, Vendas, Resumo).",
          image: "../../assets/img/excel/a1/excel_aula1_03_abas_planilhas.png",
          caption: "Abas de Planilhas e Pasta de Trabalho"
        },
        {
          lessonNum: 1,
          heading: "1.4 Tipos de Dados e Alinhamento Automático",
          content: "Tudo o que você digita em uma célula é classificado em um TIPO DE DADO, e o Excel aplica um ALINHAMENTO automático que avisa se o dado é calculável ou apenas texto:\n\n• Texto (Rótulos/Nomes): Alinhado à ESQUERDA. Usado para títulos, nomes e observações.\n• Números e Moeda: Alinhados à DIREITA. Usados em cálculos e somas.\n• Datas e Horas: Alinhadas à DIREITA (ex: 15/09/2026, 14:30).\n• Porcentagem: Alinhada à DIREITA (ex: 8%, 25%).\n• Lógico (Verdadeiro/Falso): Usado em testes e funções como SE().\n• Fórmula: Sempre começa com = e calcula valores (ex: =75+25, =SOMA(A1:A3)).\n\n⚠️ Número que não soma: se um número fica alinhado à ESQUERDA (digitado com apóstrofo '123 ou copiado como texto), o Excel o trata como TEXTO e ele NÃO pode ser somado. Sinal: triângulo verde no canto. Correção: selecionar e 'Converter em Número'. Verifique sempre a Barra de Fórmulas para ver o que realmente está gravado na célula.",
          image: "../../assets/img/excel/a1/excel_aula1_04_tipos_dados.png",
          caption: "Alinhamento Automático de Tipos de Dados"
        },
        {
          lessonNum: 1,
          heading: "1.5 Inserção, Edição com F2 e Navegação Ágil pelo Teclado",
          content: "• Enter: Confirma a digitação e move o cursor para a CÉLULA DE BAIXO.\n• Tab: Confirma a digitação e move o cursor para a CÉLULA DA DIREITA.\n• Tecla F2: Coloca o cursor piscando dentro da célula para EDITAR sem apagar o texto existente.\n• Tecla Esc: Cancela a edição e restaura o valor original.\n• Ctrl + Setas: Salta instantaneamente para a última célula preenchida da coluna ou linha.",
          image: "../../assets/img/excel/a1/excel_aula1_05_edicao_f2.png",
          caption: "Modo de Edição de Célula com Tecla F2"
        },
        {
          lessonNum: 1,
          heading: "1.6 Salvando Pastas de Trabalho (.xlsx vs .csv)",
          content: "• Atalho Ctrl + S: Salva as alterações da Pasta de Trabalho.\n• Formato .xlsx: Formato padrão moderno do Excel que preserva fórmulas, cores e formatações.\n• Formato .csv: Arquivo de texto separado por vírgulas, ideal para exportação entre sistemas.",
          image: "../../assets/img/excel/a1/excel_aula1_06_salvar_como.png",
          caption: "Janela Salvar Como e Formatos de Arquivo"
        },
        {
          lessonNum: 1,
          heading: "1.7 Introdução aos Operadores Básicos e à Função SOMA",
          content: "Os operadores matemáticos são as ferramentas para calcular dentro do Excel, sempre começando com o sinal de (=):\n\n• Adição (+): =75+25 → 100\n• Subtração (-): =100-30 → 70\n• Multiplicação (*): =8*4 → 32 (asterisco, não o 'x')\n• Divisão (/): =100/4 → 25 (barra, não o símbolo ÷)\n• Porcentagem (%): =500*10% → 50\n\nRegra da ordem: multiplicação/divisão vencem soma/subtração. Use parênteses para forçar: =(75+25)*2 → 200.\n\nEXEMPLO NA TELA — Planilha de Compras (tabela estilo Excel):\n┌ Colunas A | B | C | D | E ┐\n• B2..B6: Item e Preço; C: Qtd; D: Desconto.\n• Total de cada linha (coluna E) usa referência relativa: Caderno =B2*C2*(1-D2).\n• Linha TOTAL GERAL usa a função: =SOMA(E2:E6) → R$ 72,80.\n\nA função SOMA() é uma FÓRMULA PRONTA do Excel: em vez de =E2+E3+E4+E5+E6 você escreve =SOMA(E2:E6) e o Excel soma o intervalo sozinho. Ela será aprofundada na Aula 02.",
          steps: [
            { text: "ATIVIDADE PRÁTICA — Sua Planilha de Controle de Gastos Pessoais. Crie no Excel real a sua própria planilha usando os operadores básicos e a função =SOMA(). Passo a passo: (1) Abra o Excel em uma planilha em branco; (2) Em A1 digite o título: CONTROLE DE GASTOS PESSOAIS; (3) Na linha 2 digite os cabeçalhos: A2=Descrição, B2=Categoria, C2=Valor, D2=Qtd e E2=Subtotal; (4) Digite nas linhas 3 a 7 as suas 5 despesas (ex.: Aluguel, Mercado, Transporte, Lazer, Internet) com categoria, valor e quantidade; (5) Em E3 calcule o subtotal com o operador de multiplicação: =C3*D3; (6) Use a Alça de Preenchimento para copiar o subtotal de E3 até E7; (7) Em E8 some tudo com a função: =SOMA(E3:E7) → total dos gastos; (8) Em B10 digite 'Meu Salário' e em C10 o valor do seu salário; (9) Em C11 calcule o que sobra com a subtração: =C10-E8; (10) Bônus: divida a internet com um amigo em C12 com =C7/2 e guarde 10% na poupança em C13 com =C11*10%." },
            { text: "Como deve ficar a sua planilha: TOTAL DOS GASTOS =SOMA(E3:E7) → R$ 2.560,00 · Meu Salário =C10 → R$ 3.500,00 · O QUE SOBRA =C10-E8 → R$ 940,00. Quanto maior a economia (resultado positivo), melhor para o seu orçamento pessoal!" }
          ]
        },
        {
          lessonNum: 2,
          chapter: "AULA 02: OPERAÇÕES BÁSICAS & FÓRMULAS SIMPLES",
          heading: "2.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: "FASE 0 — para quem nunca mexeu em fórmulas: esta aula ensina a fazer o Excel calcular sozinho, começando do zero. Você digita números nas células, escreve fórmulas com o sinal de igual (=) e o Excel resolve a conta.\n\nO QUE VAMOS FAZER (objetivo):\n• Digitar números em células quadriculadas (A1, B1...), um número por caixinha.\n• Escrever fórmulas começando com = usando os 4 operadores: + (soma), - (subtração), * (multiplicação, asterisco) e / (divisão, barra).\n• Usar referências de célula: RELATIVA (A1) e ABSOLUTA ($A$1 com a tecla F4).\n• Preencher sequências e copiar fórmulas com a Alça de Preenchimento (ou Ctrl+C/Ctrl+V).\n• Reproduzir os 7 exercícios práticos e conferir cada resultado.\n\nCOMO VAMOS FAZER (a escada de 8 degraus):\n1. Planilha em branco → 2. Digitar os números → 3. Primeira fórmula com = → 4. Referências de célula → 5. Referência absoluta ($) → 6. Alça de Preenchimento → 7. Copiar fórmulas → 8. Os 7 exercícios.",
          html: `<div style="margin:16px 0;">
  <div style="font-weight:800; color:#166534; font-size:14px; margin-bottom:8px;">🗺️ O ROTEIRO DOS 8 PASSOS</div>
  <div style="display:flex; flex-wrap:wrap; gap:6px;">
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">1</strong> Criar planilha em branco</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">2</strong> Digitar os números</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">3</strong> Primeira fórmula (= + − * /)</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">4</strong> Referências de célula</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">5</strong> Travar referência ($ + F4)</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">6</strong> Alça de Preenchimento</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">7</strong> Copiar fórmulas</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">8</strong> Os 7 exercícios</span>
  </div>
  <p style="font-size:11.5px; color:#475569; margin:8px 0 0 0;">Cada passo tem um check no fim da fase onde ele é executado — só avance depois de concluir o anterior.</p>
  <div style="font-weight:800; color:#166534; font-size:14px; margin:14px 0 8px 0;">🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL</div>
  <div style="border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; background:#FFFFFF; font-family:'JetBrains Mono',monospace; font-size:12px; max-width:320px;">
    <div style="background:#16A34A; color:#fff; font-weight:700; padding:6px 12px; text-align:center;">Primeira Fórmula</div>
    <table style="border-collapse:collapse; width:100%;">
      <tr style="background:#DCFCE7;"><td style="padding:5px 12px; border:1px solid #CBD5E1;">A1</td><td style="padding:5px 12px; border:1px solid #CBD5E1;">10</td></tr>
      <tr><td style="padding:5px 12px; border:1px solid #CBD5E1;">B1</td><td style="padding:5px 12px; border:1px solid #CBD5E1;">5</td></tr>
      <tr style="background:#DCFCE7;"><td style="padding:5px 12px; border:1px solid #CBD5E1;">C1</td><td style="padding:5px 12px; border:1px solid #CBD5E1;">=A1+B1 → 15</td></tr>
    </table>
  </div>`
        },
        {
          lessonNum: 2,
          heading: "2.1 Os Quatro Operadores Matemáticos Básicos",
          content: "Toda fórmula do Excel começa com o sinal de igual (=).\n\n• Adição (+): =A1+B1 → soma dois valores.\n• Subtração (-): =A1-B1 → subtrai um valor do outro.\n• Multiplicação (*): =A1*B1 → usa o ASTERISCO, não o 'x' da calculadora.\n• Divisão (/): =A1/B1 → usa a BARRA, não o símbolo ÷.\n\nExemplo com A1=10 e B1=5: soma=15, subtração=5, multiplicação=50, divisão=2.\n\nEXERCÍCIO: Em uma planilha em branco, digite 10 em A1, 5 em B1 e a fórmula =A1+B1 em C1. O resultado 15 aparecerá automaticamente."
        },
        {
          lessonNum: 2,
          heading: "2.2 Fórmulas Simples, a Função SOMA() e a Lista de Gatos",
          content: "Uma fórmula calcula valores já armazenados usando REFERÊNCIAS DE CÉLULA (ex: B2), e não os números digitados manualmente. Assim, se o valor mudar, o resultado é recalculado sozinho.\n\nDuas formas de criar uma fórmula:\n• Digitando: digite =B2+B3+B4 e pressione Enter.\n• Clicando: digite =, clique em B2, digite +, clique em B3, +, clique em B4 e Enter.\n\nEXEMPLO — Gastos do Supermercado: B2=45, B3=38,50, B4=52. Em B5 digite =B2+B3+B4 → Total R$ 135,50.\n\nO QUE É UMA FUNÇÃO? Uma função é uma FÓRMULA PRONTA que o Excel já conhece. A sintaxe é sempre: =NOME(argumentos).\n• Ex.: =SOMA(B2:B6) soma o intervalo de B2 até B6 (o sinal : significa 'até').\n• Vantagens: fórmula mais curta, menos erros e acompanha novas células adicionadas no intervalo.\n\nEXEMPLO — Lista de Gatos do Abrigo: digite Nome/Raça/Idade dos 5 gatos em A2:C6. Na célula C7 digite =SOMA(C2:C6) → soma as idades: 2+5+3+4+6 = 20. Repare que digitamos só a função; o Excel faz a conta.",
          image: "../../assets/img/excel/a2/aula2_gatos_soma.png",
          caption: "Planilha Lista de Gatos do Abrigo usando a função =SOMA(C2:C6) para somar as idades"
        },
        {
          lessonNum: 2,
          heading: "2.3 Referência Relativa e Absoluta ($A$1 e Tecla F4)",
          content: "Ao criar uma fórmula, o Excel guarda a POSIÇÃO da célula (referência).\n\n• Referência RELATIVA (A1): ao copiar a fórmula, a referência muda automaticamente (B2 vira B3, B4...).\n• Referência ABSOLUTA ($A$1): com o cifrão ($) antes da letra e do número, a referência permanece fixa ao copiar.\n\nTecla F4: posicione o cursor sobre a referência na fórmula e pressione F4 para alternar: A1 → $A$1 → A$1 → $A1 → A1.\n\nEXEMPLO — Desconto fixo de 10%: fórmula =B2*(1-$C$2) replicada nas linhas 3 e 4 mantém o desconto fixo (referência absoluta) enquanto o preço de cada produto muda (referência relativa)."
        },
        {
          lessonNum: 2,
          heading: "2.4 Alça de Preenchimento Automático",
          content: "A Alça de Preenchimento é o pequeno quadradinho no canto inferior direito da célula selecionada. Quando o cursor vira uma CRUZ PRETA (+), arraste para preencher automaticamente.\n\n• Números: digite 1 e 2, selecione, arraste → completa 3, 4, 5...\n• Datas: digite 01/01/2026 e arraste → completa os dias seguintes.\n• Dias da semana: digite 'Segunda' e arraste → completa Terça, Quarta...\n• Fórmulas: arraste a alça de uma fórmula para copiá-la ajustando as referências."
        },
        {
          lessonNum: 2,
          heading: "2.5 Copiando Fórmulas Entre Células",
          content: "Copie uma fórmula para várias células sem redigitar, e as referências relativas se ajustam automaticamente.\n\nEXEMPLO — Tabela de Vendas: digite =B2*C2 apenas na célula D2 (subtotal de Preço × Qtd). Depois arraste a alça de preenchimento (ou use Ctrl+C e Ctrl+V) para baixo — o Excel transforma sozinho em =B3*C3, =B4*C4...\n\nMétodos:\n• Ctrl+C / Ctrl+V: selecione a célula, copie e cole em várias de destino.\n• Alça de Preenchimento: clique na célula da fórmula e arraste a cruz preta sobre as células de baixo."
        },
        {
          lessonNum: 2,
          heading: "2.6 Exercícios Práticos com Fórmulas (7 Guiados)",
          content: "Cada exercício abaixo apresenta a PLANILHA DE EXEMPLO já preenchida com 5 linhas, para você reproduzir no Excel real e conferir o resultado.\n\n1) Loja de Roupas: subtotal =B2*C2 e total =SOMA(D2:D6). Preços em B, quantidades em C, totais em D.\n2) Folha de Pagamento: desconto INSS =B2*8% e salário líquido =B2-C2. Funcionários em A, salários em B.\n3) Combustível: gasto total =B2*C2 (litros × preço) e consumo =E2/B2 (km ÷ litros).\n4) Impostos: ICMS =B2*18%, IPI =B2*5%, total impostos =C2+D2.\n5) Comissões: fixe o percentual em C1 e use =B2*$C$1 (referência absoluta).\n6) Estoque com Alerta: restante =B2-C2 e status =SE(D2<10;\"Repor\";\"OK\").\n7) Parcelas: entrada =B1*30%, financiado =B1-B2, parcela =(B3/B4)*(1+B5).\n\nReproduza cada planilha com 5 linhas de exemplo como nas imagens e pratique no Excel real.",
          images: [
            "../../assets/img/excel/a2/aula2_ex1_loja_roupas.png",
            "../../assets/img/excel/a2/aula2_ex2_folha_pagamento.png",
            "../../assets/img/excel/a2/aula2_ex3_combustivel.png",
            "../../assets/img/excel/a2/aula2_ex4_impostos.png",
            "../../assets/img/excel/a2/aula2_ex5_comissoes.png",
            "../../assets/img/excel/a2/aula2_ex6_estoque.png",
            "../../assets/img/excel/a2/aula2_ex7_parcelas.png"
          ]
        },
        {
          lessonNum: 3,
          chapter: "AULA 03: FUNÇÕES DE CÁLCULO — SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM",
          heading: "3.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: "FASE 0 — esta aula ensina as FUNÇÕES de cálculo do Excel: fórmulas prontas que o programa já conhece. No lugar de =B2+B3+B4, você escreve =SOMA(B2:B4) e o Excel soma sozinho.\n\nO QUE VAMOS FAZER (objetivo):\n• Somar um intervalo inteiro com =SOMA(intervalo).\n• Calcular a média com =MÉDIA(intervalo).\n• Achar o maior e o menor valor com =MÁXIMO() e =MÍNIMO().\n• Contar células preenchidas e numéricas com =CONT.VALORES() e =CONT.NÚM().\n• Testar tudo no Lab de Funções interativo e reproduzir os 4 exercícios práticos.\n\nCOMO VAMOS FAZER (a escada de 7 degraus):\n1. Planilha em branco → 2. =SOMA → 3. =MÉDIA → 4. =MÁXIMO & =MÍNIMO → 5. =CONT.VALORES & =CONT.NÚM → 6. Lab de Funções → 7. Os 4 exercícios.",
          html: `<div style="margin:16px 0;">
  <div style="font-weight:800; color:#166534; font-size:14px; margin-bottom:8px;">🗺️ O ROTEIRO DOS 7 PASSOS</div>
  <div style="display:flex; flex-wrap:wrap; gap:6px;">
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">1</strong> Criar planilha em branco</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">2</strong> =SOMA()</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">3</strong> =MÉDIA()</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">4</strong> =MÁXIMO & =MÍNIMO</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">5</strong> =CONT.VALORES & =CONT.NÚM</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">6</strong> Lab de Funções</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">7</strong> Os 4 exercícios</span>
  </div>
  <p style="font-size:11.5px; color:#475569; margin:8px 0 0 0;">Cada passo tem um check no fim da fase onde ele é executado — só avance depois de concluir o anterior.</p>
  <div style="font-weight:800; color:#166534; font-size:14px; margin:14px 0 8px 0;">🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL</div>
  <div style="border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; background:#FFFFFF; font-family:'JetBrains Mono',monospace; font-size:12px; max-width:320px;">
    <div style="background:#16A34A; color:#fff; font-weight:700; padding:6px 12px; text-align:center;">Minhas Funções</div>
    <table style="border-collapse:collapse; width:100%;">
      <tr style="background:#DCFCE7;"><td style="padding:5px 12px; border:1px solid #CBD5E1;">=SOMA(B2:B4)</td><td style="padding:5px 12px; border:1px solid #CBD5E1; text-align:right;">600</td></tr>
      <tr><td style="padding:5px 12px; border:1px solid #CBD5E1;">=MÉDIA(B2:B4)</td><td style="padding:5px 12px; border:1px solid #CBD5E1; text-align:right;">200</td></tr>
      <tr style="background:#DCFCE7;"><td style="padding:5px 12px; border:1px solid #CBD5E1;">=MÁXIMO(B2:B4)</td><td style="padding:5px 12px; border:1px solid #CBD5E1; text-align:right;">300</td></tr>
      <tr><td style="padding:5px 12px; border:1px solid #CBD5E1;">=MÍNIMO(B2:B4)</td><td style="padding:5px 12px; border:1px solid #CBD5E1; text-align:right;">100</td></tr>
      <tr style="background:#FEF3C7; font-weight:700;"><td style="padding:5px 12px; border:1px solid #CBD5E1;">=CONT.VALORES(A2:A4)</td><td style="padding:5px 12px; border:1px solid #CBD5E1; text-align:right;">3 preenchidas</td></tr>
    </table>
  </div>`
        },
        {
          lessonNum: 3,
          heading: "3.1 A Função SOMA() — Some Intervalos em Segundos",
          content: `A função SOMA() é a mais usada do Excel. Ela soma todos os valores dentro de um intervalo de células.\n\n• Sintaxe: =SOMA(intervalo)\n• Em vez de digitar =B2+B3+B4+B5+B6, escreva =SOMA(B2:B6).\n• O intervalo é a sequência de células separadas por dois-pontos (:). Ex.: B2:B7 = 'da célula B2 até a B7'.\n• Você pode somar um retângulo inteiro de uma vez com =SOMA(B2:D7).\n\nEXEMPLO — Gastos com Aluguel (3 meses): aluguel de R$ 2.500,00 nas células B2, C2 e D2. Digite =SOMA(B2:D2) → R$ 7.500,00.\n\nATIVIDADE PRÁTICA: Em B2, B3 e B4 digite 100, 200 e 300. Clique em B5 e digite =SOMA(B2:B4) e pressione Enter → 600. Mude B2 para 150 e o total vira 650 automaticamente!

EXEMPLO DE PLANILHA — Controle de Custos Mensais (Função SOMA):
<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Sheet1 — Controle de Custos Mensais (Função SOMA)</div>
  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">
    <tr>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">A</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">B</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">C</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">D</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">E</td>
    </tr>
    <tr>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">&nbsp;</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Despesa</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Jan</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Fev</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Mar</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Total</td>
    </tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">2</td><td style="border:1px solid #E2E8F0; padding:6px;">Aluguel</td><td style="border:1px solid #E2E8F0; padding:6px;">2.500,00</td><td style="border:1px solid #E2E8F0; padding:6px;">2.500,00</td><td style="border:1px solid #E2E8F0; padding:6px;">2.500,00</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace;">=SOMA(B2:D2)</td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">3</td><td style="border:1px solid #E2E8F0; padding:6px;">Energia</td><td style="border:1px solid #E2E8F0; padding:6px;">380,00</td><td style="border:1px solid #E2E8F0; padding:6px;">410,00</td><td style="border:1px solid #E2E8F0; padding:6px;">395,00</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace;">=SOMA(B3:D3)</td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">4</td><td style="border:1px solid #E2E8F0; padding:6px;">Água</td><td style="border:1px solid #E2E8F0; padding:6px;">120,00</td><td style="border:1px solid #E2E8F0; padding:6px;">135,00</td><td style="border:1px solid #E2E8F0; padding:6px;">110,00</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace;">=SOMA(B4:D4)</td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">7</td><td colspan="4" style="background:#F0FDF4; border:1px solid #CBD5E1; padding:6px; font-weight:bold; border-top:2px solid #217346;">TOTAL (Função SOMA na coluna)</td><td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:6px; font-weight:bold; font-family:monospace; border-top:2px solid #217346;">=SOMA(B2:D4) → R$ 9.050,00</td></tr>
  </table>
</div>`,
          boxType: "tip",
          boxTitle: "💡 Soma na hora",
          boxText: "A função SOMA acompanha novas células adicionadas ao intervalo e é bem mais curta (e com menos erros) do que somar célula por célula."
        },
        {
          lessonNum: 3,
          heading: "3.2 A Função MÉDIA() — Calcule Médias Automaticamente",
          content: `A função MÉDIA() calcula a média aritmética dos valores de um intervalo de células.\n\n• Sintaxe: =MÉDIA(intervalo)\n• Exemplo: conta de Energia de R$ 380 (Jan), R$ 410 (Fev) e R$ 395 (Mar) → a média mensal =MÉDIA(380;410;395) = 395. No Excel, use as células: =MÉDIA(B3:D3).\n• Média de uma coluna inteira de vendas: =MÉDIA(D2:D6).\n\n⚠️ A MÉDIA() ignora células vazias e células com texto — você não precisa 'limpar' a planilha antes de calcular.
EXEMPLO DE PLANILHA — Conta de Energia Elétrica (Função MÉDIA):
<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="background:#C2410C; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Sheet1 — Conta de Energia Elétrica (Função MÉDIA)</div>
  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">
    <tr>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">A</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">B</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">C</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">D</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">E</td>
    </tr>
    <tr>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">&nbsp;</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Mês</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Energia</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Aluguel</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Água</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Média p/ mês</td>
    </tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">2</td><td style="border:1px solid #E2E8F0; padding:6px;">Jan</td><td style="border:1px solid #E2E8F0; padding:6px;">380,00</td><td style="border:1px solid #E2E8F0; padding:6px;">2.500,00</td><td style="border:1px solid #E2E8F0; padding:6px;">120,00</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace;">=MÉDIA(B2:D2)</td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">3</td><td style="border:1px solid #E2E8F0; padding:6px;">Fev</td><td style="border:1px solid #E2E8F0; padding:6px;">410,00</td><td style="border:1px solid #E2E8F0; padding:6px;">2.500,00</td><td style="border:1px solid #E2E8F0; padding:6px;">135,00</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace;">=MÉDIA(B3:D3)</td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">4</td><td style="border:1px solid #E2E8F0; padding:6px;">Mar</td><td style="border:1px solid #E2E8F0; padding:6px;">395,00</td><td style="border:1px solid #E2E8F0; padding:6px;">2.500,00</td><td style="border:1px solid #E2E8F0; padding:6px;">110,00</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace;">=MÉDIA(B4:D4)</td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">5</td><td colspan="4" style="background:#FEF3C7; border:1px solid #CBD5E1; padding:6px; font-weight:bold; border-top:2px solid #C2410C;">MÉDIA da Energia (Função MÉDIA na coluna)</td><td style="background:#FEF3C7; border:1px solid #CBD5E1; padding:6px; font-weight:bold; font-family:monospace; border-top:2px solid #C2410C;">=MÉDIA(B2:B4) → 395,00</td></tr>
  </table>
</div>`
        },
        {
          lessonNum: 3,
          heading: "3.3 MÁXIMO() e MÍNIMO() — Encontre o Maior e o Menor Valor",
          content: `As funções MÁXIMO() e MÍNIMO() varrem um intervalo e retornam o maior e o menor valor presente nele.\n\n• Sintaxe: =MÁXIMO(intervalo)  e  =MÍNIMO(intervalo)\n• Exemplo no controle de custos: =MÁXIMO(B2:D7) encontra o maior gasto de qualquer mês (no nosso caso R$ 8.500,00 do Salário de Março) e =MÍNIMO(B2:D7) encontra o menor (R$ 110,00 da Água).\n\n💡 Use MÁXIMO e MÍNIMO no intervalo completo (como B2:D7) para varrer todos os meses de uma vez. Se os valores mudarem, o Excel recalcula sozinho.
EXEMPLO DE PLANILHA — Controle de Custos Mensais (MÁXIMO e MÍNIMO):
<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="background:#166534; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Sheet1 — Controle de Custos Mensais (Funções MÁXIMO e MÍNIMO)</div>
  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">
    <tr>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">A</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">B</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">C</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">D</td>
      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">E</td>
    </tr>
    <tr>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">&nbsp;</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Despesa</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Jan</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Fev</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Mar</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Observação</td>
    </tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">2</td><td style="border:1px solid #E2E8F0; padding:6px;">Aluguel</td><td style="border:1px solid #E2E8F0; padding:6px;">2.500,00</td><td style="border:1px solid #E2E8F0; padding:6px;">2.500,00</td><td style="border:1px solid #E2E8F0; padding:6px;">2.500,00</td><td style="border:1px solid #E2E8F0; padding:6px;"></td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">3</td><td style="border:1px solid #E2E8F0; padding:6px;">Energia</td><td style="border:1px solid #E2E8F0; padding:6px;">380,00</td><td style="border:1px solid #E2E8F0; padding:6px;">410,00</td><td style="border:1px solid #E2E8F0; padding:6px;">395,00</td><td style="border:1px solid #E2E8F0; padding:6px;"></td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">4</td><td style="border:1px solid #E2E8F0; padding:6px;">Água</td><td style="border:1px solid #E2E8F0; padding:6px;">120,00</td><td style="border:1px solid #E2E8F0; padding:6px;">135,00</td><td style="border:1px solid #E2E8F0; padding:6px;">110,00</td><td style="border:1px solid #E2E8F0; padding:6px;"></td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">5</td><td style="border:1px solid #E2E8F0; padding:6px;">Internet</td><td style="border:1px solid #E2E8F0; padding:6px;">150,00</td><td style="border:1px solid #E2E8F0; padding:6px;">150,00</td><td style="border:1px solid #E2E8F0; padding:6px;">175,00</td><td style="border:1px solid #E2E8F0; padding:6px;"></td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #E2E8F0; padding:6px;">6</td><td style="border:1px solid #E2E8F0; padding:6px;">Salário</td><td style="border:1px solid #E2E8F0; padding:6px;">8.200,00</td><td style="border:1px solid #E2E8F0; padding:6px;">8.200,00</td><td style="border:1px solid #E2E8F0; padding:6px; font-weight:bold;">8.500,00</td><td style="border:1px solid #E2E8F0; padding:6px;"></td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">7</td><td colspan="4" style="background:#F0FDF4; border:1px solid #CBD5E1; padding:6px; font-weight:bold; border-top:2px solid #166534;">MAIOR gasto (Função MÁXIMO)</td><td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:6px; font-weight:bold; font-family:monospace; border-top:2px solid #166534;">=MÁXIMO(B2:D6) → 8.500,00</td></tr>
    <tr><td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">8</td><td colspan="4" style="background:#FFF7ED; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">MENOR gasto (Função MÍNIMO)</td><td style="background:#FFF7ED; border:1px solid #CBD5E1; padding:6px; font-weight:bold; font-family:monospace;">=MÍNIMO(B2:D6) → 110,00</td></tr>
  </table>
</div>

📌 OBSERVAÇÃO: Em versões antigas do Excel, a função MÍNIMO() pode não estar disponível. Nesse caso, use =MINIMOA(intervalo). O resultado é o mesmo — encontra o menor valor do intervalo.`
        },
        {
          lessonNum: 3,
          heading: "3.4 CONT.VALORES() e CONT.NÚM() — Contando Células",
          content: "Duas funções parecidas, mas com objetivos diferentes:\n\n• CONT.VALORES(intervalo): Conta TODAS as células com algum valor (texto, número ou data). Ex.: =CONT.VALORES(A2:A8) conta quantos funcionários têm nome preenchido (7).\n• CONT.NÚM(intervalo): Conta APENAS células com valores numéricos. Ex.: =CONT.NÚM(B2:B8) conta quantos funcionários têm código numérico preenchido (6).\n\nEXEMPLO — Equipe de Vendas (7 funcionários, coluna A nomes, coluna B códigos):\n• Códigos cadastrados: =CONT.NÚM(B2:B8) → 6 (Eliane está vazio; só números contam).\n• Quantos atingiram a meta: =CONT.VALORES(C2:C8) → 6 (células preenchidas com 'Sim'/'Não').\n• Pessoas na lista: =CONT.VALORES(A2:A8) → 7 (todos os nomes, texto conta!)\n\n🧠 Reflexão: por que CONT.VALORES(A2:A8)=7, mas CONT.NÚM(A2:A8)=0? Porque a coluna A contém texto e não números!"
        },
        {
          lessonNum: 3,
          heading: "3.5 Lab de Funções — Simulador Interativo",
          content: "Na tela da aula, você encontra o Lab de Funções: uma planilha de custos interativa que recalcula em tempo real ao editar qualquer valor, exatamente como o Excel real.\n\n• Edite os valores das células (Jan/Fev/Mar) e veja =SOMA, =MÉDIA, =MÁXIMO e =MÍNIMO atualizarem na hora.\n• Modo Contadoras: compare =CONT.NÚM(B2:B8) (só números → 6) com =CONT.VALORES(A2:A8) (qualquer valor → 7).\n\nExperimente mudar os números e observe os resultados se recalculando sozinho!"
        },
        {
          lessonNum: 3,
          heading: "3.6 Exercícios Guiados — 4 Planilhas para Reproduzir no Excel Real",
          content: `🏢 EXERCÍCIO 1 — Planilha de Custos (empresa ABC): a empresa controla seus custos fixos e variáveis no primeiro trimestre. Use SOMA(), MÉDIA(), MÁXIMO() e MÍNIMO().
<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Exercício 1 — Planilha de Custos da Empresa ABC</div>
  <table style="width:100%; border-collapse:collapse; font-size:12px;">
    <tr>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">Categoria</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold; text-align:center;">Jan</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold; text-align:center;">Fev</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold; text-align:center;">Mar</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:6px; font-weight:bold; text-align:center;">TOTAL</td>
    </tr>
    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Aluguel</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">2500</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">2500</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">2500</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace; text-align:center;">=SOMA(B2:D2)</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Energia Elétrica</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">380</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">410</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">395</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace; text-align:center;">=SOMA(B3:D3)</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Água</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">120</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">135</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">110</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace; text-align:center;">=SOMA(B4:D4)</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Internet</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">150</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">150</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">150</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace; text-align:center;">=SOMA(B5:D5)</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Salários</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">8200</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">8200</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">8500</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace; text-align:center;">=SOMA(B6:D6)</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Material Escrit.</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">200</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">175</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">220</td><td style="border:1px solid #E2E8F0; padding:6px; font-family:monospace; text-align:center;">=SOMA(B7:D7)</td></tr>
    <tr><td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:6px; font-weight:bold;">TOTAL MENSAL</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:6px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(B2:B7)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:6px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(C2:C7)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:6px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(D2:D7)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:6px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(E2:E7)</td></tr>
  </table>
</div>
1) Em cada linha use =SOMA(B2:D2) ... =SOMA(B7:D7) para o TOTAL do item. 2) Na linha TOTAL MENSAL, use SOMA() para cada coluna: =SOMA(B2:B7), =SOMA(C2:C7), =SOMA(D2:D7). 3) Análise: Maior custo =MÁXIMO(B2:D7) (→ 8500); Menor custo =MÍNIMO(B2:D7) (→ 110). 4) Média de Energia =MÉDIA(B3:D3) (→ 395).

📦 EXERCÍCIO 2 — Controle de Estoque (papelaria): o estoque final é calculado por Estoque Inicial + Entradas − Saídas.
<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="background:#166534; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Exercício 2 — Controle de Estoque da Papelaria</div>
  <table style="width:100%; border-collapse:collapse; font-size:12px;">
    <tr>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold;">Produto</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Est. Inicial</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Entradas</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Saídas</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Estoque Final</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Preço</td>
    </tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Caneta Azul</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">150</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">80</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">95</td><td style="border:1px solid #E2E8F0; padding:5px; font-family:monospace; text-align:center;">=B2+C2-D2</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">1,50</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Caderno 100f</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">80</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">50</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">60</td><td style="border:1px solid #E2E8F0; padding:5px; font-family:monospace; text-align:center;">=B3+C3-D3</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">12,90</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Borracha</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">200</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">100</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">130</td><td style="border:1px solid #E2E8F0; padding:5px; font-family:monospace; text-align:center;">=B4+C4-D4</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">0,75</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Lápis HB</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">300</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">150</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">200</td><td style="border:1px solid #E2E8F0; padding:5px; font-family:monospace; text-align:center;">=B5+C5-D5</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">0,50</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Grampeador</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">25</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">10</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">8</td><td style="border:1px solid #E2E8F0; padding:5px; font-family:monospace; text-align:center;">=B6+C6-D6</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">35,00</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Papel A4 (resma)</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">40</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">30</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">25</td><td style="border:1px solid #E2E8F0; padding:5px; font-family:monospace; text-align:center;">=B7+C7-D7</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">22,00</td></tr>
    <tr><td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-weight:bold;">TOTAIS</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(B2:B7)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(C2:C7)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(D2:D7)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(E2:E7)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; text-align:center;">—</td></tr>
  </table>
</div>
1) Em E2 digite =B2+C2-D2 (inicial + entradas − saídas) e arraste pela alça até E7. 2) Total de saídas: =SOMA(D2:D7). 3) Maior estoque final: =MÁXIMO(E2:E7); menor: =MÍNIMO(E2:E7). 4) Itens cadastrados: =CONT.VALORES(A2:A7) (→ 6 produtos).

📈 EXERCÍCIO 3 — Relatório de Vendas (TechShop, 6 meses): a equipe de vendas precisa de um relatório semestral com TOTAIS, MÉDIAS, maior e menor venda.
<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="background:#C2410C; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Exercício 3 — Relatório de Vendas da TechShop</div>
  <table style="width:100%; border-collapse:collapse; font-size:11.5px;">
    <tr>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold;">Vendedor</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Jan</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Fev</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Mar</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Abr</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Mai</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold; text-align:center;">Jun</td>
    </tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Ana Lima</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">12.500</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">13.200</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">11.800</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">14.000</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">15.300</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">16.100</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Bruno Souza</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">9.800</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">10.500</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">9.200</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">11.000</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">10.800</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">12.500</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Carla Mendes</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">15.200</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">14.800</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">16.500</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">13.900</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">17.200</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">18.000</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Diego Ferr.</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">8.900</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">9.100</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">8.600</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">10.200</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">9.500</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">11.300</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Eliane Costa</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">11.300</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">12.000</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">10.900</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">13.100</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">12.700</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">14.200</td></tr>
    <tr><td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-weight:bold;">TOTAL/MÊS</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(B2:B6)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(C2:C6)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(D2:D6)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(E2:E6)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(F2:F6)</td>
      <td style="background:#F0FDF4; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=SOMA(G2:G6)</td></tr>
    <tr><td style="background:#FFF7ED; border:1px solid #CBD5E1; padding:5px; font-weight:bold;">MÉDIA/MÊS</td>
      <td style="background:#FFF7ED; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=MÉDIA(B2:B6)</td>
      <td style="background:#FFF7ED; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=MÉDIA(C2:C6)</td>
      <td style="background:#FFF7ED; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=MÉDIA(D2:D6)</td>
      <td style="background:#FFF7ED; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=MÉDIA(E2:E6)</td>
      <td style="background:#FFF7ED; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=MÉDIA(F2:F6)</td>
      <td style="background:#FFF7ED; border:1px solid #CBD5E1; padding:5px; font-family:monospace; text-align:center; font-weight:bold;">=MÉDIA(G2:G6)</td></tr>
  </table>
</div>
1) Crie as fórmulas na primeira coluna e arraste horizontalmente até a coluna G. 2) Total Geral: =SOMA(B2:G6). 3) Maior Venda: =MÁXIMO(B2:G6); Menor Venda: =MÍNIMO(B2:G6).

🔢 EXERCÍCIO 4 — CONT.VALORES() e CONT.NÚM() na equipe de vendas: entenda a diferença entre as duas funções aplicando-as à lista de funcionários.
<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="background:#7A1F12; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Exercício 4 — Contagem da Equipe de Vendas</div>
  <table style="width:100%; border-collapse:collapse; font-size:12px;">
    <tr>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold;">A</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold;">B</td>
      <td style="background:#E2E8F0; border:1px solid #CBD5E1; padding:5px; font-weight:bold;">C</td>
    </tr>
    <tr>
      <td style="border:1px solid #CBD5E1; padding:5px; font-weight:bold;">Funcionário</td>
      <td style="border:1px solid #CBD5E1; padding:5px; font-weight:bold;">Código</td>
      <td style="border:1px solid #CBD5E1; padding:5px; font-weight:bold;">Meta Atingida</td>
    </tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Ana Lima</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">1001</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">Sim</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Bruno Souza</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">1002</td><td style="border:1px solid #E2E8F0; padding:5px;"></td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Carla Mendes</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">1003</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">Não</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Diego Ferreira</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">1004</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">Sim</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Eliane Costa</td><td style="border:1px solid #E2E8F0; padding:5px; font-style:italic;">(vazio)</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">Sim</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Fábio Ramos</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">1006</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">Sim</td></tr>
    <tr><td style="border:1px solid #E2E8F0; padding:5px;">Gisele Torres</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">1007</td><td style="border:1px solid #E2E8F0; padding:5px; text-align:center;">Sim</td></tr>
  </table>
</div>
 1) Valores numéricos da coluna Código (B): =CONT.NÚM(B2:B8) → 6 (conta somente as células com valor numérico, ignorando a vazia/texto). 2) Atingiram a meta: =CONT.VALORES(C2:C8) → 6 (células com "Sim"/"Não"). 3) Pessoas na lista: =CONT.VALORES(A2:A8) → 7 (texto conta). 4) Reflexão: por que CONT.VALORES(A2:A8)=7, mas CONT.NÚM(A2:A8)=0? Porque a coluna A tem texto, não números!`
        },
        {
          lessonNum: 4,
          chapter: "AULA 04: FUNÇÕES LÓGICAS AVANÇADAS — SE, E, OU, NÃO, SE ANINHADO E FORMATAÇÃO CONDICIONAL",
          heading: "4.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `O QUE VAMOS FAZER (objetivo):
Você vai transformar a planilha em um decisor automático: a partir de agora é o Excel que pergunta, decide e responde sozinho. Vai dominar SE() e suas companheiras E(), OU() e NÃO(), aprender o SE aninhado, treinar tudo no Logic Lab e fechar classificando automaticamente os clientes de uma empresa por valor e situação de pagamento.

COMO VAMOS FAZER (os 7 passos):
1. Revisão rápida da função SE()
2. SE + E — todas as condições precisam ser verdadeiras
3. SE + OU — pelo menos uma condição basta
4. SE aninhado — múltiplos resultados possíveis
5. NÃO() — inverter uma condição
6. Logic Lab — simulador interativo
7. Exercício prático: situação do cliente

PREPARAÇÃO ANTES DO TÓPICO 1:
• Renomeie a aba Plan1 para Notas.
• Em A1, B1 e C1 digite Aluno, Nota e Frequência %; preencha as linhas 2 a 4 com Ana 8,5/90, Carlos 5,0/95 e Maria 7,0/60.
• Formate a coluna B como Número (2 casas): comparação de texto nunca será avaliada com >=7.

O QUE VOCÊ VAI CONSEGUIR NO FINAL:
Uma planilha que classifica sozinha: notas viram Excelente/Bom/Regular/Reprovado e clientes viram Cliente Premium, Cliente Regular ou Em aberto — sem você reavaliar linha por linha.`,
          html: `<div style="margin:16px 0;">
  <p style="font-size:12px; color:#475569; margin:0 0 10px 0;">O objetivo desta aula é transformar a planilha em um decisor automático com SE(), E(), OU(), NÃO() e SE aninhado, fechando com a classificação de clientes do setor financeiro.</p>
  <div style="font-weight:800; color:#166534; font-size:14px; margin-bottom:8px;">🗺️ O ROTEIRO DOS 7 PASSOS</div>
  <div style="display:flex; flex-wrap:wrap; gap:6px;">
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">1</strong> Revisão rápida da função SE()</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">2</strong> SE + E — todas as condições verdadeiras</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">3</strong> SE + OU — pelo menos uma condição basta</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">4</strong> SE aninhado — múltiplos resultados</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">5</strong> NÃO() — inverter uma condição</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">6</strong> Logic Lab — simulador interativo</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">7</strong> Exercício: situação do cliente</span>
  </div>
  <p style="font-size:11.5px; color:#475569; margin:8px 0 0 0;">Cada passo tem um check no fim da fase onde ele é executado — o próximo só abre depois que o anterior for concluído.</p>
  <div class="es-sheet-box" style="max-width:470px; background:#F7FEF9;">
    <div class="es-sheet-titlebar">⚙️ FAIXA DE PREPARAÇÃO — antes do Tópico 1</div>
    <ol style="font-size:11.5px; color:#374151; line-height:1.6; margin:0; padding-left:18px;">
      <li>Renomeie a aba <strong>Plan1</strong> para <strong>Notas</strong>.</li>
      <li>Cabeçalhos: <em>Aluno</em>, <em>Nota</em>, <em>Frequência %</em> com Ana 8,5/90, Carlos 5,0/95 e Maria 7,0/60.</li>
      <li>Formate a coluna B como <strong>Número</strong> (2 casas decimais).</li>
    </ol>
  </div>
  <div style="font-weight:800; color:#166534; font-size:14px; margin:16px 0 8px 0;">🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL</div>
  <p style="font-size:12px; color:#475569; margin:0 0 8px 0;">A mesma fórmula decide o nível da nota e a situação do cliente, sem intervenção manual:</p>
  <div class="es-sheet-box" style="max-width:470px;">
    <div class="es-sheet-titlebar">Classificação de Clientes (exercício 7)</div>
    <table class="mini-sheet">
      <tr><th>Cliente</th><th>Valor</th><th>Pago?</th><th>Situação</th></tr>
      <tr><td>Empresa ABC</td><td>1.200</td><td>Sim</td><td>Cliente Premium</td></tr>
      <tr><td>Loja XYZ</td><td>350</td><td>Sim</td><td>Cliente Regular</td></tr>
      <tr><td>Mercado Sol</td><td>800</td><td>Não</td><td>Em aberto</td></tr>
      <tr><td>Padaria Luz</td><td>200</td><td>Não</td><td>Em aberto</td></tr>
    </table>
  </div>
</div>`
        },
        {
          lessonNum: 4,
          heading: "4.1 Revisão Rápida da Função SE()",
          content: `A função SE() é a base de tudo nesta aula. Ela faz uma pergunta ao Excel e devolve um resultado dependendo da resposta: VERDADEIRO ou FALSO.\n\nPense assim: é como perguntar ao Excel — Se isso for verdade, faça X; caso contrário, faça Y.\n\nSINTAXE: =SE( teste_lógico ; valor_se_verdadeiro ; valor_se_falso ) — 3 partes separadas por ponto e vírgula.\n\nEXEMPLO — Aluno aprovado ou reprovado: =SE(B2>=7; "Aprovado"; "Reprovado"). Se a nota em B2 for >= 7, escreve "Aprovado". Senão, "Reprovado".\n\nPLANILHA — Aprovação de Alunos (Função SE):\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Aprovação de Alunos (Função SE)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Aluno</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Nota</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Resultado</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Ana</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">8,5</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Aprovado</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Carlos</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">5,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Reprovado</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Maria</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">7,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Aprovado</td></tr>\n  </table>\n</div>`,
          boxType: "tip",
          boxTitle: "💡 O SE faz uma pergunta",
          boxText: "O Excel testa a condição e escolhe entre dois caminhos: o valor se for verdadeiro ou o valor se for falso. É a base de todas as análises lógicas."
        },
        {
          lessonNum: 5,
          chapter: "AULA 05: FUNÇÕES DE PESQUISA E REFERÊNCIA — PROCV, PROCH, ÍNDICE E CORRESP",
          heading: "5.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `O QUE VAMOS FAZER (objetivo):
Você vai aprender a procurar dados dentro da planilha em vez de ficar caçando linha por linha — é o recurso que transforma o Excel em um sistema de consulta. Vai dominar PROCV (busca vertical), PROCH (busca horizontal), ÍNDICE (valor por coordenada), CORRESP (posição) e a combinação ÍNDICE + CORRESP, a única que devolve uma coluna situada à esquerda do valor procurado. No fim, monta as 5 tarefas de uma loja de eletrônicos.

COMO VAMOS FAZER (os 7 passos):
1. PROCV — busca vertical
2. PROCH — busca horizontal
3. ÍNDICE — valor por coordenadas
4. CORRESP — encontra a posição
5. ÍNDICE + CORRESP — a combinação poderosa
6. Lookup Lab — simulador de busca
7. Exercício: loja de eletrônicos

PREPARAÇÃO ANTES DO TÓPICO 1:
• Renomeie a aba Plan1 para Produtos.
• Respeite o ponto e vírgula ao digitar: é ele que separa as partes da fórmula.
• Use sempre FALSO no último argumento com dados.

O QUE VOCÊ VAI CONSEGUIR NO FINAL:
Um buscador de produtos que responde em segundos o que antes exigia procura manual, e a certeza de que ÍNDICE + CORRESP funciona mesmo quando a coluna que você quer está à esquerda do valor procurado.`,
          html: `<div style="margin:16px 0;">
  <p style="font-size:12px; color:#475569; margin:0 0 10px 0;">O objetivo desta aula é procurar dados dentro da planilha com PROCV, PROCH, ÍNDICE e CORRESP, e usar ÍNDICE + CORRESP para buscar inclusive colunas à esquerda do valor procurado.</p>
  <div style="font-weight:800; color:#166534; font-size:14px; margin-bottom:8px;">🗺️ O ROTEIRO DOS 7 PASSOS</div>
  <div style="display:flex; flex-wrap:wrap; gap:6px;">
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">1</strong> PROCV — busca vertical</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">2</strong> PROCH — busca horizontal</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">3</strong> ÍNDICE — valor por coordenadas</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">4</strong> CORRESP — encontra a posição</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">5</strong> ÍNDICE + CORRESP — a combinação poderosa</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">6</strong> Lookup Lab — simulador de busca</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">7</strong> Exercício: loja de eletrônicos</span>
  </div>
  <p style="font-size:11.5px; color:#475569; margin:8px 0 0 0;">Cada passo tem um check no fim da fase onde ele é executado — o próximo só abre depois que o anterior for concluído.</p>
  <div class="es-sheet-box" style="max-width:470px; background:#F7FEF9;">
    <div class="es-sheet-titlebar">⚙️ FAIXA DE PREPARAÇÃO — antes do Tópico 1</div>
    <ol style="font-size:11.5px; color:#374151; line-height:1.6; margin:0; padding-left:18px;">
      <li>Renomeie a aba <strong>Plan1</strong> para <strong>Produtos</strong>.</li>
      <li>Separe os argumentos com <strong>ponto e vírgula</strong>.</li>
      <li>Use <strong>FALSO</strong> no último argumento com dados.</li>
    </ol>
  </div>
  <div style="font-weight:800; color:#166534; font-size:14px; margin:16px 0 8px 0;">🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL</div>
  <p style="font-size:12px; color:#475569; margin:0 0 8px 0;">O PROCV responde pelas colunas à direita; o ÍNDICE + CORRESP alcança qualquer direção:</p>
  <div class="es-sheet-box" style="max-width:470px;">
    <div class="es-sheet-titlebar">Loja de Produtos Eletrônicos — busca por E002</div>
    <table class="mini-sheet">
      <tr><th>Célula</th><th>Fórmula</th><th>Resultado</th></tr>
      <tr><td>H2</td><td>=PROCV(G2;A:B;2;FALSO)</td><td>Teclado Mecânico</td></tr>
      <tr><td>H3</td><td>=PROCV(G2;A:E;4;FALSO)</td><td>R$ 349,90</td></tr>
      <tr><td>H4</td><td>=PROCV(G2;A:E;5;FALSO)</td><td>23</td></tr>
      <tr><td>H7</td><td>=ÍNDICE(D:D;CORRESP(G7;B:B;0))</td><td>R$ 349,90</td></tr>
    </table>
  </div>
</div>`
        },
        {
          lessonNum: 5,
          heading: "5.1 PROCV — Busca Vertical (A Estrela do Excel)",
          content: `A função PROCV é a ferramenta mais usada para buscar dados no Excel. Ela procura um valor na PRIMEIRA COLUNA de uma tabela e retorna um valor de OUTRA coluna na mesma linha.\n\nPense nela como um índice de um livro: você procura a palavra na coluna (a primeira) e ela aponta o conteúdo que está do lado, na mesma linha.\n\nSINTAXE: =PROCV( valor_procurado ; matriz_tabela ; núm_coluna ; [procurar_intervalo] )\n\nARGUMENTOS:\n• valor_procurado: o que você quer encontrar (ex: 102 — código do produto).\n• matriz_tabela: a tabela onde procurar (ex: A2:C5).\n• núm_coluna: qual coluna retornar, 1, 2, 3... (ex: 2 = retorna a 2ª coluna).\n• procurar_intervalo: FALSO = exato | VERDADEIRO = aproximado. Use SEMPRE FALSO para dados.\n\nPROCURANDO UM CÓDIGO EM E2 PARA OBTER O NOME DO PRODUTO AUTOMATICAMENTE:\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Tabela de Produtos (A1:C5)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;"></td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">A</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">B</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">C</td>\n    </tr>\n    <tr>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">1</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Código</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Produto</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Preço</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">2</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">101</td><td style="border:1px solid #E2E8F0; padding:6px;">Caneta</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 2,50</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">3</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">102</td><td style="border:1px solid #E2E8F0; padding:6px;">Caderno</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 15,00</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">4</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">103</td><td style="border:1px solid #E2E8F0; padding:6px;">Borracha</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 1,50</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">5</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">104</td><td style="border:1px solid #E2E8F0; padding:6px;">Lápis</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 1,00</td></tr>\n  </table>\n</div>\n\nFÓRMULA: =PROCV(E2; A2:C5; 2; FALSO)\n\nPASSO A PASSO:\n1) E2 = você digita 102.\n2) A2:C5 = Excel procura na primeira coluna (coluna A).\n3) Encontra o 102 na linha 3.\n4) 2 = retorna a 2ª coluna (coluna B) da mesma linha.\n5) RESULTADO: Caderno.\n\n⚠️ DICA DE OURO: Use SEMPRE FALSO (0) para dados corretos. VERDADEIRO (1) é apenas para tabelas ordenadas e buscas aproximadas (raro).`
        },
        {
          lessonNum: 5,
          heading: "5.2 PROCH — Busca Horizontal",
          content: `A função PROCH é como o PROCV, mas procura na PRIMEIRA LINHA e retorna valores das LINHAS de baixo. Use quando seus dados estão organizados em linhas (horizontalmente). Enquanto o PROCV "desce" pela coluna, o PROCH "atravessa" a linha. A letra H lembra Horizontal; a letra V de PROCV lembra Vertical.\n\nSINTAXE: =PROCH( valor_procurado ; matriz_tabela ; núm_linha ; [procurar_intervalo] )\n\nOs argumentos são os mesmos do PROCV, mas o 3º argumento agora é o número da LINHA que deve ser retornada (não da coluna).\n\nTABELA DE METAS MENSAIS — QUESTÃO: QUAL É A META DE MARÇO?\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Metas Mensais (A1:D2)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;"></td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">A</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">B</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">C</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">D</td>\n    </tr>\n    <tr>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">1</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Janeiro</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Fevereiro</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Março</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Abril</td>\n    </tr>\n    <tr>\n      <td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">2</td>\n      <td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 5.000</td>\n      <td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 6.000</td>\n      <td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 7.000</td>\n      <td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 8.000</td>\n    </tr>\n  </table>\n</div>\n\nFÓRMULA: =PROCH("Mar"; A1:D2; 2; FALSO)\n\nO Excel procura "Mar" na primeira linha (encontra na coluna C), vai para a linha 2 e retorna o valor: R$ 7.000.`
        },
        {
          lessonNum: 5,
          heading: "5.3 ÍNDICE — Retorna Valor por Coordenadas",
          content: `A função ÍNDICE retorna um valor específico baseado na LINHA e COLUNA onde ele está — como as coordenadas de um mapa (ex: "linha 3, coluna 3").\n\nSINTAXE: =ÍNDICE( matriz ; núm_linha ; núm_coluna )\n\nVOCÊ INFORMA A MATRIZ (A REGIÃO DA TABELA) E DEPOIS AS COORDENADAS DA CÉLULA QUE QUER PEGAR.\n\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Frutas (A1:C3)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;"></td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">A</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">B</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">C</td>\n    </tr>\n    <tr>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">1</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Fruta</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Preço</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Estoque</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">2</td><td style="border:1px solid #E2E8F0; padding:6px;">Maçã</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 3,00</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">50</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">3</td><td style="border:1px solid #E2E8F0; padding:6px;">Banana</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 2,00</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">80</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">4</td><td style="border:1px solid #E2E8F0; padding:6px;">Uva</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 5,00</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">30</td></tr>\n  </table>\n</div>\n\nFÓRMULA: =ÍNDICE(A1:C3; 3; 3)\n\nLinha 3, coluna 3 → é a quantidade no estoque da Banana: 80.\n\n🧠 QUANDO USAR: use quando você JÁ SABE a linha e a coluna exatas do dado que deseja. Para encontrar a posição automaticamente, combine com a função CORRESP (tópico 5).`
        },
        {
          lessonNum: 5,
          heading: "5.4 CORRESP — Encontra a Posição",
          content: `A função CORRESP retorna a POSIÇÃO (o número) de um valor em uma lista — NÃO o valor em si. É como perguntar: "em qual posição da fila está o Carlos?"\n\nSINTAXE: =CORRESP( valor_procurado ; matriz_procurada ; [tipo_correspondência] )\n\nO 3º argumento 0 = busca exata (o tipo que devemos usar com textos e códigos).\n\nLISTA DE NOMES (A1:A4): Ana, Bruno, Carlos, Diana.\n\nFÓRMULA: =CORRESP("Carlos"; A1:A4; 0)\n\nO CORRESP percorre a lista, encontra "Carlos" e devolve a posição: 3 (Carlos está na 3ª posição).\n\n🧠 POR QUE A POSIÇÃO É ÚTIL? Sozinho parece simples, mas a posição é o "número da linha" que o ÍNDICE precisa. Juntos, eles formam a dupla de busca mais flexível do Excel.`
        },
        {
          lessonNum: 5,
          heading: "5.5 ÍNDICE + CORRESP — A Combinação Poderosa",
          content: `O PROCV só busca da ESQUERDA para a DIREITA. Já a dupla ÍNDICE + CORRESP busca em QUALQUER DIREÇÃO — muito mais flexível para tabelas complexas.\n\nFÓRMULA COMBINADA: =ÍNDICE( coluna_para_retornar ; CORRESP( valor_procurado ; coluna_para_procurar ; 0 ) )\n\nO CORRESP encontra a LINHA, e o ÍNDICE pega o valor DESSA LINHA na coluna que você escolher — à direita OU à esquerda.\n\nTABELA DE FUNCIONÁRIOS (A1:C4):\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Funcionários (A1:C4)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;"></td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">A</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">B</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">C</td>\n    </tr>\n    <tr>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">1</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Nome</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Setor</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Salário</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">2</td><td style="border:1px solid #E2E8F0; padding:6px;">Ana</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Vendas</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 3.000</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">3</td><td style="border:1px solid #E2E8F0; padding:6px;">Bruno</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">TI</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 4.500</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">4</td><td style="border:1px solid #E2E8F0; padding:6px;">Carlos</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">RH</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 3.200</td></tr>\n  </table>\n</div>\n\nQUESTÃO: QUERO O SALÁRIO DO BRUNO.\nFÓRMULA: =ÍNDICE(C2:C4; CORRESP("Bruno"; A2:A4; 0))\n\nPASSO A PASSO:\n1) CORRESP procura "Bruno" em A2:A4 e encontra na posição 2.\n2) ÍNDICE pega o 2º valor de C2:C4.\n3) RESULTADO: R$ 4.500.\n\n⚠️ POR QUE É MAIS PODEROSO? Com ÍNDICE+CORRESP você pode buscar uma coluna que está À ESQUERDA da coluna que contém o valor procurado. O PROCV jamais consegue fazer isso — ele só enxerga da esquerda para a direita.`
        },
        {
          lessonNum: 5,
          heading: "5.6 Lookup Lab — Simulador de Busca",
          content: "Na tela da aula, você encontra o Lookup Lab: uma tabela de produtos (código, produto e preço) que permite digitar um código e ver o Excel \"procurar\" e retornar nome e preço, exatamente como o PROCV faria.\n\n• Edite os valores das colunas Código, Produto e Preço.\n• Em Buscar Código, digite um dos códigos (ex: 102) e clique em Procurar.\n• O simulador procura o código na primeira coluna e devolve o produto e o preço da mesma linha.\n\nExperimente mudar os valores e veja a fórmula =PROCV(...) recalculando na hora!"
        },
        {
          lessonNum: 5,
          heading: "5.7 Exercício Prático — Loja de Produtos Eletrônicos",
          content: `CENÁRIO: Você trabalha no controle de estoque de uma loja online de eletrônicos e precisa criar um sistema de busca rápida das informações dos produtos.\n\nPASSO 1 — MONTE A TABELA (começando em A1):\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Tabela — Loja de Produtos Eletrônicos (A1:E6)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;"></td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">A</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">B</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">C</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">D</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">E</td>\n    </tr>\n    <tr>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">1</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">ID</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Produto</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Categoria</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Preço</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Estoque</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">2</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">E001</td><td style="border:1px solid #E2E8F0; padding:6px;">Mouse Gamer</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Periféricos</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 89,90</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">45</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">3</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">E002</td><td style="border:1px solid #E2E8F0; padding:6px;">Teclado Mecânico</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Periféricos</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 349,90</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">23</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">4</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">E003</td><td style="border:1px solid #E2E8F0; padding:6px;">Monitor 24"</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Monitores</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 899,90</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">12</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">5</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">E004</td><td style="border:1px solid #E2E8F0; padding:6px;">Webcam HD</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Periféricos</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 129,90</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">67</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">6</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">E005</td><td style="border:1px solid #E2E8F0; padding:6px;">Mousepad Grande</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Acessórios</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">R$ 49,90</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">120</td></tr>\n  </table>\n</div>\n\nPASSO 2 — Em G2, escreva E002 (o ID a ser buscado).\n\nAS 5 TAREFAS:\n• Tarefa 1 — PROCV Básico: em H2, crie uma fórmula que busque o NOME DO PRODUTO usando o ID em G2. Dica: use PROCV para buscar na coluna B.\n• Tarefa 2 — Buscar em colunas diferentes: em H3 busque o PREÇO; em H4 busque o ESTOQUE. Altere apenas o número da coluna (4 para preço, 5 para estoque).\n• Tarefa 3 — VERDADEIRO/FALSO: o que muda se você usar VERDADEIRO em vez de FALSO? Teste e veja.\n• Tarefa 4 — ÍNDICE + CORRESP Avançado: em G7 escreva o nome de um produto (ex: "Teclado Mecânico"). Em H7, crie uma fórmula ÍNDICE+CORRESP que retorne o PREÇO. Bônus: ÍNDICE+CORRESP consegue buscar a coluna Nome mesmo estando antes do preço.\n• Tarefa 5 — Reflexão: por que o PROCV NÃO pode buscar a coluna Categoria se ela está antes de Estoque?\n\n✅ GABARITO DAS TAREFAS:\n• Tarefa 1: =PROCV(G2; A:B; 2; FALSO)\n• Tarefa 2: =PROCV(G2; A:E; 4; FALSO) | =PROCV(G2; A:E; 5; FALSO)\n• Tarefa 3: Com VERDADEIRO, o Excel busca o valor aproximado (não funciona bem com texto). Use sempre FALSO para correspondência exata.\n• Tarefa 4: =ÍNDICE(D:D; CORRESP(G7; B:B; 0))\n• Tarefa 5: o PROCV sempre busca à DIREITA. A categoria está à esquerda de Estoque, então ele não consegue alcançá-la. O ÍNDICE+CORRESP não tem essa limitação!\n\n📚 RESUMO DAS FUNÇÕES:\n• PROCV: busca vertical (mais comum). Limitação: só busca da esquerda para a direita.\n• PROCH: busca horizontal. Para dados organizados em linhas.\n• ÍNDICE: retorna valor por posição. Precisa saber a linha e coluna exatas.\n• CORRESP: encontra a posição de um valor. Retorna apenas a posição, não o valor.\n• ÍNDICE+CORRESP: busca flexível em qualquer direção. Um pouco mais complexa, mas muito poderosa.\n\n🎯 QUANDO USAR CADA UMA:\n• Dados organizados em COLUNAS? Use PROCV.\n• Dados organizados em LINHAS? Use PROCH.\n• Precisa buscar em QUALQUER DIREÇÃO? Use ÍNDICE+CORRESP.\n• Só quer saber a POSIÇÃO? Use CORRESP.`
        },
        {
          lessonNum: 4,
          heading: "4.2 SE + E — Todas as Condições Precisam Ser Verdadeiras",
          content: `A função E() verifica se TODAS as condições que você listar são verdadeiras ao mesmo tempo. Se até uma delas for falsa, o resultado é FALSO.\n\nImagine que a escola exige duas coisas para aprovar: nota boa E frequência suficiente. Se faltar qualquer uma, não passa.\n\nREGRA DE OURO DO E: TODAS as condições precisam ser VERDADEIRAS. Uma só falsa → resultado é FALSO.\n\nSINTAXE: =E( condição1 ; condição2 ; condição3 ... )\n\nEXEMPLO — Aprovação com nota E frequência: =SE(E(B2>=7; C2>=75); "Aprovado"; "Reprovado") — B2 = nota | C2 = frequência (%).\n\nPLANILHA — Aprovação com Nota e Frequência (SE + E):\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Aprovação com Nota e Frequência</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Aluno</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Nota</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Frequência</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Resultado</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Ana</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">8,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">80%</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Aprovado</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Bruno</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">7,5</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">60%</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Reprovado (freq. baixa)</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Carla</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">5,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">90%</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Reprovado (nota baixa)</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Diego</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">9,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">95%</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Aprovado</td></tr>\n  </table>\n</div>\n\n💡 DICA: Você pode adicionar quantas condições quiser dentro do E. Ex.: =SE(E(B2>=7; C2>=75; D2="Entregou TCC"); "Formado"; "Pendente")`
        },
        {
          lessonNum: 4,
          heading: "4.3 SE + OU — Pelo Menos Uma Condição Precisa Ser Verdadeira",
          content: `A função OU() verifica se PELO MENOS UMA das condições é verdadeira. Basta uma ser verdadeira e o resultado é VERDADEIRO.\n\nImagine: o aluno ganha bônus se tirar nota 9 OU tiver participação extra. Basta uma das duas!\n\nREGRA DE OURO DO OU: basta UMA condição ser VERDADEIRA. Só é FALSO quando todas são falsas.\n\nSINTAXE: =OU( condição1 ; condição2 ; condição3 ... )\n\nEXEMPLO — Bônus por nota alta OU participação: =SE(OU(B2>=9; C2="Sim"); "Tem bônus"; "Sem bônus") — B2 = nota | C2 = Participação Extra (Sim/Não).\n\nCOMPARANDO E x OU — PENSE ASSIM:\nO E() é como uma porta trancada com 2 fechaduras — precisa de AMBAS as chaves para abrir. O OU() é como uma porta com 2 fechaduras alternativas — basta UMA chave para abrir.\n\nAplicando a mesma regra de bônus nos mesmos 4 alunos:\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#0F766E; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Comparativo E x OU — Bônus dos Alunos</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Aluno</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Nota ≥ 9?</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Participação?</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Com E</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Com OU</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Ana</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sim</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Não</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sem bônus</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Tem bônus</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Bruno</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Não</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sim</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sem bônus</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Tem bônus</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Carla</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sim</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sim</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Tem bônus</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Tem bônus</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Diego</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Não</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Não</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sem bônus</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sem bônus</td></tr>\n  </table>\n</div>\n\nCOMO FUNCIONA CADA LINHA:\n\n🔹 Ana: Nota ≥ 9? Sim ✅ Participação? Não ❌\n• E: Faltou participação → Sem bônus (precisa das DUAS)\n• OU: Nota alta já basta → Tem bônus (basta UMA)\n\n🔹 Bruno: Nota ≥ 9? Não ❌ Participação? Sim ✅\n• E: Faltou nota → Sem bônus (precisa das DUAS)\n• OU: Participação já basta → Tem bônus (basta UMA)\n\n🔹 Carla: Nota ≥ 9? Sim ✅ Participação? Sim ✅\n• E: Tem as duas → Tem bônus (última a ganhar com E)\n• OU: Tem as duas → Tem bônus (ganha com qualquer um dos dois)\n\n🔹 Diego: Nota ≥ 9? Não ❌ Participação? Não ❌\n• E: Não tem nenhuma → Sem bônus\n• OU: Não tem nenhuma → Sem bônus (único que perde nos DOIS)\n\n📌 REGRA FÁCIL DE GUARDAR:\n• E() = mais exigente — só passa quem tem TUDO ✅✅\n• OU() = mais generoso — passa quem tem PELO MENOS UMA ✅\n• No exemplo: só Carla ganhou com E (tinha as duas). Com OU, Ana e Bruno também ganharam. Diego não ganhou em nenhum dos dois (não tinha nada).`
        },
        {
          lessonNum: 4,
          heading: "4.4 SE Aninhado — Múltiplos Resultados Possíveis",
          content: `O SE aninhado é quando você coloca um SE dentro de outro SE. Isso permite ter MAIS DE DOIS resultados possíveis.\n\nA lógica é como um funil: o Excel testa a primeira condição; se for falsa, cai no segundo SE; se também for falsa, cai no terceiro... e assim por diante.\n\nQUANDO USAR? Quando você precisa de mais de 2 resultados — como classificar notas em Excelente, Bom, Regular ou Reprovado.\n\nEXEMPLO — Classificação de notas em 4 níveis:\n=SE(B2>=9; "Excelente"; SE(B2>=7; "Bom"; SE(B2>=5; "Regular"; "Reprovado")))\n\nCOMO O EXCEL LÊ, PASSO A PASSO:\n1º teste: Nota >= 9? Sim → "Excelente" e para.\n2º teste: Nota >= 7? Sim → "Bom" e para.\n3º teste: Nota >= 5? Sim → "Regular" e para.\nSe chegou aqui: nenhuma condição verdadeira → "Reprovado".\n\nPLANILHA — Classificação de Notas:\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#166534; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Classificação de Notas (SE Aninhado)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Aluno</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Nota</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Classificação</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Ana</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">9,5</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Excelente</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Bruno</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">7,8</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Bom</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Carla</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">5,2</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Regular</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Diego</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">3,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Reprovado</td></tr>\n  </table>\n</div>\n\n💡 DICA: Evite aninhar mais de 3 SEs. Para muitos casos, considere PROCV ou ESCOLHER (CHOOSE).`
        },
        {
          lessonNum: 4,
          heading: "4.5 Função NÃO() — Inverte Uma Condição",
          content: `A função NÃO() é bem simples: ela INVERTE o resultado lógico. O que é VERDADEIRO vira FALSO, e o que é FALSO vira VERDADEIRO.\n\nÉ como dizer 'exceto'. Em vez de 'quero notas >= 7', você diz 'não quero notas < 7'.\n\nSINTAXE: =NÃO( teste_lógico )\n\nEXEMPLO — Identificar alunos que precisam de reforço:\n=SE(NÃO(B2>=7); "Precisa de reforço"; "OK") — NÃO(B2>=7) é o mesmo que B2<7.\n\nEQUIVALÊNCIAS ÚTEIS:\n• NÃO(A>=7) é o mesmo que A<7\n• NÃO(C="Sim") é o mesmo que C<>"Sim" (diferente de Sim)\n• NÃO(E(...)) inverte o resultado de um E — muito usado em Formatação Condicional.\n\nPLANILHA — Reforço Escolar (Função NÃO):\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#0F766E; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Reforço Escolar (Função NÃO)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Aluno</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Nota</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Situação</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Ana</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">8,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">OK</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Bruno</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">6,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Precisa de reforço</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Carla</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">9,2</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">OK</td></tr>\n  </table>\n</div>`
        },
        {
          lessonNum: 4,
          heading: "4.6 Logic Lab — Simulador Interativo",
          content: "Na tela da aula, você encontra o Logic Lab: uma planilha de alunos (nota e frequência) que recalcula em tempo real ao editar qualquer valor, exatamente como o Excel real.\n\n• Edite a nota e a frequência e veja =SE (aprovado), =SE+E, =SE+OU e =SE aninhado atualizarem na hora.\n• Modo NÃO: compare como a inversão lógica altera todos os resultados (Verdadeiro ↔ Falso).\n• Mini-demo de Formatação Condicional: as células da coluna Situação mudam de cor (verde/vermelho) automaticamente conforme a nota.\n\nExperimente mudar os valores e observe os resultados lógicos se recalculando sozinho!"
        },
        {
          lessonNum: 4,
          heading: "4.7 Exercício Prático — Classificação de Clientes (Situação do Mundo Real)",
          content: `CENÁRIO: Você trabalha no setor financeiro de uma empresa e precisa classificar clientes automaticamente com base nos pagamentos. A planilha tem: nome do cliente, valor pago, status do pagamento e a data. Sua missão: criar a coluna SITUAÇÃO que classifica cada cliente automaticamente.\n\nESTRUTURA DA PLANILHA — Classificação de Clientes:\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Classificação de Clientes (Exercício 7)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">A</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">B</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">C</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">D</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">E</td>\n    </tr>\n    <tr>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Cliente</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Valor (R$)</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Pago?</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Data Pgto.</td>\n      <td style="background:#E2E8F0; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#334155; font-weight:600;">Situação</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Empresa ABC</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">1.200</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sim</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">10/03/2025</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">?</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Loja XYZ</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">350</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Sim</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">15/03/2025</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">?</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Mercado Sol</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">800</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Não</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">—</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">?</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Padaria Luz</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">200</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Não</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">—</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">?</td></tr>\n  </table>\n</div>\n\nREGRAS DE CLASSIFICAÇÃO:\n• Pagou e valor >= R$ 500 → "Cliente Premium"\n• Pagou e valor < R$ 500 → "Cliente Regular"\n• Não pagou → "Em aberto"\n\nCONSTRUINDO A FÓRMULA PASSO A PASSO:\nPasso 1 — Verificar o pagamento com SE simples: =SE(C2="Sim"; "Pagou"; "Não pagou")\nPasso 2 — Dentro do "Pagou", usar SE aninhado para o valor — fórmula completa na célula E2:\n=SE(C2="Sim"; SE(B2>=500; "Cliente Premium"; "Cliente Regular"); "Em aberto")\n\nLENDO A FÓRMULA EM VOZ ALTA:\n• SE C2 for "Sim" (pagou) → entra no segundo SE: SE B2 >= 500 → "Cliente Premium", senão "Cliente Regular"\n• SE C2 não for "Sim" → "Em aberto"\n\nRESULTADO ESPERADO:\n• Empresa ABC (1.200, Sim) → Cliente Premium\n• Loja XYZ (350, Sim) → Cliente Regular\n• Mercado Sol (800, Não) → Em aberto\n• Padaria Luz (200, Não) → Em aberto\n\nFORMATAÇÃO CONDICIONAL PARA O EXERCÍCIO — colorir a coluna Situação (E2:E20) com 3 cores:\n• Regra 1: =$E2="Cliente Premium" → Verde escuro (pagou e é grande cliente)\n• Regra 2: =$E2="Cliente Regular" → Azul claro (pagou e é cliente normal)\n• Regra 3: =$E2="Em aberto" → Vermelho (pagamento pendente)\n\nCOMO CRIAR AS 3 REGRAS: Selecione E2:E20 (coluna Situação) → Página Inicial → Formatação Condicional → Nova Regra... → Escolha "Usar uma fórmula..." e insira a fórmula da Regra 1 → Clique em Formatar... → Preenchimento → escolha Verde escuro → OK. Repita para a Regra 2 (azul) e Regra 3 (vermelho). Verifique em Gerenciar Regras se todas as 3 aparecem.\n\nTESTANDO: mude C2 de "Sim" para "Não" e veja a cor mudar para vermelho automaticamente. Mude B2 de 1200 para 200 e veja "Cliente Premium" virar "Cliente Regular". A cor muda sozinha conforme os dados mudam — isso é a magia da Formatação Condicional!`
        },
        {
          lessonNum: 6,
          chapter: "AULA 06: DATAS E HORAS NO EXCEL — HOJE, AGORA, DATA, DIA, MÊS, ANO, DIAS360, DIAS.ÚTEIS",
          heading: "6.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `O QUE VAMOS FAZER (objetivo):
Você vai colocar o calendário dentro do Excel: a data de hoje, a data e a hora do instante, datas montadas por você e o cálculo automático de prazos, idade e dias úteis. Vai sair daqui com uma Agenda de Contatos que calcula sozinha a idade de cada pessoa e há quantos dias você não fala com ela.

COMO VAMOS FAZER (os 7 passos):
1. HOJE() — a data de hoje
2. AGORA() — data e hora
3. DATA() — montar uma data sob medida
4. DIA(), MÊS() e ANO() — extrair partes da data
5. DIAS360() — calendário comercial
6. DIAS.ÚTEIS() — dias úteis para prazos
7. Agenda de Contatos e alertas

PREPARAÇÃO ANTES DO TÓPICO 1:
• Renomeie a aba Plan1 para Agenda.
• Em A1 digite 01/01/2025 e em B1 31/12/2025 (exemplo do calendário comercial); para dias úteis use 01/11/2025 e 30/11/2025.
• Confira o formato em Formatar Célula → Data: sem data válida, as funções de prazo não têm o que calcular.

O QUE VOCÊ VAI CONSEGUIR NO FINAL:
Uma Agenda de Contatos que se atualiza sozinha: a idade avança todo ano e a coluna Dias sem Contato avança todo dia, avisando quem está há tempo demais sem conversa.`,
          html: `<div style="margin:16px 0;">
  <p style="font-size:12px; color:#475569; margin:0 0 10px 0;">O objetivo desta aula é colocar o calendário dentro do Excel com HOJE(), AGORA(), DATA(), DIA/MÊS/ANO, DIAS360() e DIAS.ÚTEIS(), fechando com uma Agenda de Contatos que calcula idade e dias sem contato.</p>
  <div style="font-weight:800; color:#166534; font-size:14px; margin-bottom:8px;">🗺️ O ROTEIRO DOS 7 PASSOS</div>
  <div style="display:flex; flex-wrap:wrap; gap:6px;">
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">1</strong> HOJE() — a data de hoje</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">2</strong> AGORA() — data e hora</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">3</strong> DATA() — montar uma data sob medida</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">4</strong> DIA(), MÊS() e ANO() — extrair partes</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">5</strong> DIAS360() — calendário comercial</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">6</strong> DIAS.ÚTEIS() — dias úteis para prazos</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">7</strong> Agenda de Contatos e alertas</span>
  </div>
  <p style="font-size:11.5px; color:#475569; margin:8px 0 0 0;">Cada passo tem um check no fim da fase onde ele é executado — o próximo só abre depois que o anterior for concluído.</p>
  <div class="es-sheet-box" style="max-width:470px; background:#F7FEF9;">
    <div class="es-sheet-titlebar">⚙️ FAIXA DE PREPARAÇÃO — antes do Tópico 1</div>
    <ol style="font-size:11.5px; color:#374151; line-height:1.6; margin:0; padding-left:18px;">
      <li>Renomeie a aba <strong>Plan1</strong> para <strong>Agenda</strong>.</li>
      <li>Datas do exemplo: <code>01/01/2025</code> e <code>31/12/2025</code>.</li>
      <li>Confira o formato em <strong>Formatar Célula → Data</strong>.</li>
    </ol>
  </div>
  <div style="font-weight:800; color:#166534; font-size:14px; margin:16px 0 8px 0;">🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL</div>
  <p style="font-size:12px; color:#475569; margin:0 0 8px 0;">A idade avança todo ano e os dias sem contato avançam todo dia — sem refazer conta:</p>
  <div class="es-sheet-box" style="max-width:470px;">
    <div class="es-sheet-titlebar">Agenda de Contatos (A1:I3)</div>
    <table class="mini-sheet">
      <tr><th>ID</th><th>Nome</th><th>Data Nasc.</th><th>Idade</th><th>Dias s/ Contato</th></tr>
      <tr><td>1</td><td>João Silva</td><td>15/03/1985</td><td>=ANO(HOJE())-ANO(D2)</td><td>=HOJE()-F2</td></tr>
      <tr><td>2</td><td>Maria Santos</td><td>22/07/1990</td><td>=ANO(HOJE())-ANO(D3)</td><td>=HOJE()-F3</td></tr>
    </table>
  </div>
</div>`
        },
        {
          lessonNum: 6,
          heading: "6.1 Função HOJE() — A Data de Hoje",
          content: `A função HOJE() mostra a data de hoje. Todos os dias, quando você abrir a planilha, essa data se atualiza sozinha — você não precisa digitar nada.\n\nSINTAXE: =HOJE()\n\nNão recebe nenhum argumento (parênteses vazios). Exemplo: digite =HOJE() na célula A1 e o resultado será a data de hoje (ex.: 24/10/2025).\n\nAPLICAÇÕES PRÁTICAS:\n• Saber se um documento ainda está dentro do prazo de validade.\n• Calcular a idade de uma pessoa.\n• Verificar quantos dias faltam para um prazo terminar.\n\nPASSO A PASSO:\n1. Clique em uma célula vazia (ex.: A1).\n2. Digite exatamente: =HOJE().\n3. Pressione Enter.\n4. A célula vai mostrar a data de hoje.`
        },
        {
          lessonNum: 6,
          heading: "6.2 Função AGORA() — Data e Hora",
          content: `A função AGORA() mostra a data e também a hora exata em que você abriu ou atualizou a planilha.\n\nSINTAXE: =AGORA()\n\nExemplo: digite =AGORA() em uma célula e o resultado será algo como 24/10/2025 14:30.\n\nTABELA COMPARATIVA HOJE × AGORA:\n• =HOJE() — Somente a data (dia/mês/ano).\n• =AGORA() — A data e também a hora.`
        },
        {
          lessonNum: 6,
          heading: "6.3 Função DATA() — Montar uma Data Customizada",
          content: `A função DATA() monta uma data escolhida por você, informando o ano, o mês e o dia.\n\nSINTAXE: =DATA( ano ; mês ; dia )\n\nA ordem dos argumentos é ANO, MÊS, DIA — não confunda com o formato brasileiro (dia/mês/ano).\n\nEXEMPLO — NATAL:\n=DATA(2025;12;25) → 25/12/2025 (Natal).\n\nPASSO A PASSO:\n1. Em uma célula, digite: =DATA(2025;12;25).\n2. Pressione Enter.\n3. O Excel vai montar a data 25/12/2025 automaticamente.\n\nDICA: você também pode usar números de outras células. Se A1 tem o ano, B1 o mês e C1 o dia, a fórmula fica =DATA(A1;B1;C1).`
        },
        {
          lessonNum: 6,
          heading: "6.4 Funções DIA(), MÊS() e ANO() — Extrair Partes da Data",
          content: `Essas funções pegam uma data que já existe e retiram dela só o dia, só o mês ou só o ano.\n\nTABELA DE SINTAXE:\n• =DIA(data) — O número do dia.\n• =MÊS(data) — O número do mês.\n• =ANO(data) — O número do ano.\n\nEXEMPLO — Se A1 tem 15/06/2025:\n• =DIA(A1) → 15\n• =MÊS(A1) → 6\n• =ANO(A1) → 2025\n\nAPLICAÇÃO PRÁTICA — ANIVERSARIANTE DO MÊS:\n=SE( MÊS(A1) = MÊS(HOJE()) ; "Aniversariante do mês" ; "" )\n\nCompara o mês da data de nascimento (A1) com o mês de hoje. Se forem iguais, escreve o aviso; senão, deixa em branco.`
        },
        {
          lessonNum: 6,
          heading: "6.5 Função DIAS360() — Dias no Calendário Comercial",
          content: `A função DIAS360() calcula quantos dias existem entre duas datas usando um calendário comercial (todo mês tem 30 dias, ano = 360 dias). Muito usada em cálculos financeiros e contratos.\n\nSINTAXE: =DIAS360( data_inicial ; data_final ; método )\n\nO 3º argumento (método) é opcional:\n• FALSO ou vazio → método americano (o mais comum).\n• VERDADEIRO → método europeu.\n\nEXEMPLO — A1 = 01/01/2025, B1 = 31/12/2025:\n• =DIAS360(A1;B1) → 360 dias (método americano).\n• =DIAS360(A1;B1;VERDADEIRO) → 359 dias (método europeu).\n• =B1-A1 → 364 dias (contagem real do calendário).\n\nDICA: use =B1-A1 quando quiser a diferença real de dias no calendário normal. Use =DIAS360() apenas quando o cálculo exigir o padrão comercial de 30 dias por mês.`
        },
        {
          lessonNum: 6,
          heading: "6.6 Função DIAS.ÚTEIS() — Dias Úteis para Prazos",
          content: `A função DIAS.ÚTEIS() conta apenas os dias de segunda a sexta-feira entre duas datas — ideal para prazos de trabalho.\n\nSINTAXE: =DIAS.ÚTEIS( data_inicial ; data_final )\n\nEXEMPLO — PRAZO DE PROJETO: Início = 01/11/2025, Fim = 30/11/2025:\n• Total de dias: =B12-B11 → 29 dias.\n• Dias úteis: =DIAS.ÚTEIS(B11;B12) → 20 dias.\n• Dias comerciais (30 dias/mês): =DIAS360(B11;B12) → 29 dias.\n\nDICA: a função =DIAS.ÚTEIS() funciona normalmente no Excel 2010 e versões posteriores.`
        },
        {
          lessonNum: 6,
          heading: "6.7 Exercício Prático — Agenda de Contatos e Alertas",
          content: `CENÁRIO: montar uma planilha simples que guarda o nome, telefone e data de nascimento de algumas pessoas, calculando automaticamente a idade e há quantos dias você não fala com elas.\n\nESTRUTURA DA PLANILHA — AGENDA DE CONTATOS (A1:I3):\n• A: ID | B: Nome | C: Telefone | D: Data Nasc. | E: Idade | F: Última Ligação | G: Dias sem Contato\n• Linha 2 — 1 | João Silva | (11) 98765-4321 | 15/03/1985 | =ANO(HOJE())-ANO(D2) | 10/10/2025 | =HOJE()-F2\n• Linha 3 — 2 | Maria Santos | (11) 97654-3210 | 22/07/1990 | =ANO(HOJE())-ANO(D3) | 20/10/2025 | =HOJE()-F3\n\nFÓRMULAS EXPLICADAS:\n• Coluna Idade (ex.: E2): =ANO(HOJE())-ANO(D2) → pega o ano de hoje e subtrai o ano de nascimento.\n• Coluna Dias sem Contato (ex.: G2): =HOJE()-F2 → calcula quantos dias se passaram desde a última ligação.\n\nDICA: a fórmula de idade é simplificada e pode errar por até 1 ano em alguns casos (quando o aniversário da pessoa ainda não chegou no ano atual). Para uma turma iniciante isso é suficiente; a correção pode ser vista em uma aula futura.\n\n🔔 ALERTAS AUTOMÁTICOS:\n• Aniversário do mês (coluna H): =SE(MÊS(D2)=MÊS(HOJE()); "Aniversariante!"; "")\n• Contato urgente (coluna I, >15 dias): =SE(G2>15; "Ligar urgente!"; "")\n\n📊 PAINEL DE ESTATÍSTICAS:\n• Data de hoje: =HOJE()\n• Total de contatos: =CONT.NÚM(A2:A6)\n• Idade média: =MÉDIA(E2:E6)\n• Idade mais alta: =MÁXIMO(E2:E6)\n• Idade mais baixa: =MÍNIMO(E2:E6)\n• Média de dias sem contato: =MÉDIA(G2:G6)\n\nO QUE CADA FUNÇÃO FAZ:\n• CONT.NÚM — conta quantas células têm números preenchidos.\n• MÉDIA — calcula a média dos valores.\n• MÁXIMO e MÍNIMO — encontram o maior e o menor valor da lista.\n\n📅 CÁLCULO DE PRAZO DE PROJETO:\n• Início do Projeto: 01/11/2025 (digite direto na célula).\n• Fim do Projeto: 30/11/2025 (digite direto na célula).\n• Total de dias: =B12-B11.\n• Dias úteis: =DIAS.ÚTEIS(B11;B12).\n• Dias comerciais (30 dias/mês): =DIAS360(B11;B12).\n\n✏️ EXERCÍCIOS PARA PRATICAR:\n1. Crie uma planilha com a sua data de nascimento e calcule quantos dias você já viveu (use =HOJE()-sua_data).\n2. Liste 5 amigos com as datas de nascimento deles e descubra quem faz aniversário este mês.\n3. Calcule quantos dias úteis ainda faltam até o final deste ano.\n4. Crie um alerta para contatos que você não liga há mais de 30 dias.\n5. Monte um contador de dias para uma data importante para você (casamento, formatura, viagem, etc.).`
        },
        {
          lessonNum: 7,
          chapter: "AULA 07: CONTAS PESSOAIS & TABELA DINÂMICA — PLANILHA BASE, CAMPOS, FILTROS E ESTRUTURA DE TÓPICOS",
          heading: "7.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `O QUE VAMOS FAZER (objetivo):
Você vai transformar uma lista solta de lançamentos em um painel que responde perguntas — o salto de "anotei tudo" para "entendi para onde o meu dinheiro vai". Vai montar a planilha base com 11 campos, derivar dia/mês/ano com fórmulas, padronizar a digitação com Validação de Dados e fechar tudo com uma Tabela Dinâmica que resume receitas e despesas por ano, grupo, conta e mês.

COMO VAMOS FAZER (os 9 passos):
1. Preparação da planilha de lançamentos
2. Funções de data na base (DIA, MÊS, ANO)
3. Validação de dados (lista)
4. Renomear a aba Análise e criar a Tabela Dinâmica
5. Selecionar o intervalo (Tabela/Intervalo)
6. Configuração dos campos da Tabela Dinâmica
7. Ordenar os dados em ordem decrescente
8. Visualização, filtros e estrutura de tópicos
9. Exercício: contas pessoais com Tabela Dinâmica

PREPARAÇÃO ANTES DO TÓPICO 1:
• Renomeie a aba Plan1 para Lançamento.
• Digite na linha 1 os 11 campos: Data | Ano | Tipo de Lançamento | Grupo | Conta | Valor | Forma de Pagamento | Descrição | Dia | Mês | Ano Lançamento.
• Deixe o Excel visível ao lado desta janela: a Tabela Dinâmica se monta por cliques, não por fórmula.

O QUE VOCÊ VAI CONSEGUIR NO FINAL:
Um painel de contas pessoais que responde, com dois cliques, quanto você gastou em cada grupo, conta e mês — e mostra em qual grupo o dinheiro está sumindo.`,
          html: `<div style="margin:16px 0;">
  <p style="font-size:12px; color:#475569; margin:0 0 10px 0;">O objetivo desta aula é transformar uma lista solta de lançamentos em um painel que responde perguntas, com a planilha base de 11 campos, colunas de data por fórmula, Validação de Dados e Tabela Dinâmica.</p>
  <div style="font-weight:800; color:#166534; font-size:14px; margin-bottom:8px;">🗺️ O ROTEIRO DOS 9 PASSOS</div>
  <div style="display:flex; flex-wrap:wrap; gap:6px;">
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">1</strong> Preparação da planilha de lançamentos</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">2</strong> Funções de data na base (DIA, MÊS, ANO)</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">3</strong> Validação de dados (lista)</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">4</strong> Renomear a aba Análise e criar a Tabela Dinâmica</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">5</strong> Selecionar o intervalo (Tabela/Intervalo)</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">6</strong> Configuração dos campos da Tabela Dinâmica</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">7</strong> Ordenar em ordem decrescente</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">8</strong> Visualização, filtros e estrutura de tópicos</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">9</strong> Exercício: contas pessoais</span>
  </div>
  <p style="font-size:11.5px; color:#475569; margin:8px 0 0 0;">Cada passo tem um check no fim da fase onde ele é executado — o próximo só abre depois que o anterior for concluído.</p>
  <div class="es-sheet-box" style="max-width:470px; background:#F7FEF9;">
    <div class="es-sheet-titlebar">⚙️ FAIXA DE PREPARAÇÃO — antes do Tópico 1</div>
    <ol style="font-size:11.5px; color:#374151; line-height:1.6; margin:0; padding-left:18px;">
      <li>Renomeie a aba <strong>Plan1</strong> para <strong>Lançamento</strong>.</li>
      <li>Digite os <strong>11 campos</strong> na linha 1.</li>
      <li>Deixe o Excel visível ao lado desta janela.</li>
    </ol>
  </div>
  <div style="font-weight:800; color:#166534; font-size:14px; margin:16px 0 8px 0;">🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL</div>
  <p style="font-size:12px; color:#475569; margin:0 0 8px 0;">Recetas e despesas resumidas por grupo, sem nenhuma soma digitada à mão:</p>
  <div class="es-sheet-box" style="max-width:470px;">
    <div class="es-sheet-titlebar">Tabela Dinâmica — aba Análise</div>
    <table class="mini-sheet">
      <tr><th>Grupo</th><th>RECEITA</th><th>DESPESA</th></tr>
      <tr><td>Salário (Fixo)</td><td>3.500,00</td><td>—</td></tr>
      <tr><td>Alimentação</td><td>—</td><td>450,00</td></tr>
      <tr><td>Transporte</td><td>—</td><td>200,00</td></tr>
      <tr><td>Moradia</td><td>—</td><td>1.200,00</td></tr>
      <tr style="background:#FEF3C7; font-weight:700;"><td>Total Geral</td><td>3.500,00</td><td>1.850,00</td></tr>
    </table>
  </div>
</div>`
        },
        {
          lessonNum: 7,
          heading: "7.1 Preparação da Planilha de Lançamentos",
          content: `O primeiro passo para controlar as suas contas pessoais é criar uma planilha organizada com 11 campos que servirão de base para a Tabela Dinâmica.\n\nCAMPOS DA PLANILHA BASE:\nData | Ano | Tipo de Lançamento | Grupo | Conta | Valor | Forma de Pagamento | Descrição | Dia | Mês | Ano Lançamento\n\nPASSO A PASSO:\n1. Abra uma planilha nova no Excel.\n2. Na linha 1, digite os 11 títulos acima.\n3. Renomeie a aba Plan1 para Lançamento.\n4. Preencha com os seus lançamentos do mês (receitas e despesas).\n\nTABELA DE EXEMPLO (Aba: Lançamento):\n• A: Data | B: Ano | C: Tipo de Lançamento | D: Grupo | E: Conta | F: Valor | G: Forma de Pagamento | H: Descrição | I: Dia | J: Mês | K: Ano Lançamento\n• Linha 2 — 05/01/2025 | =ANO(A2) | RECEITA | Salário (Fixo) | Empresa | 3.500,00 | PIX | Salário do mês | =DIA(A2) | =MÊS(A2) | =ANO(A2)\n• Linha 3 — 08/01/2025 | =ANO(A3) | DESPESA | Alimentação | Mercado | 450,00 | DÉBITO | Compras do mês | =DIA(A3) | =MÊS(A3) | =ANO(A3)\n• Linha 4 — 10/01/2025 | =ANO(A4) | DESPESA | Transporte | Posto | 200,00 | BOLETO | Combustível | =DIA(A4) | =MÊS(A4) | =ANO(A4)\n• Linha 5 — 15/01/2025 | =ANO(A5) | DESPESA | Moradia | Aluguel | 1.200,00 | TRANSFERÊNCIA | Aluguel do apartamento | =DIA(A5) | =MÊS(A5) | =ANO(A5)`
        },
        {
          lessonNum: 7,
          heading: "7.2 Funções de Data na Base — DIA(), MÊS() e ANO()",
          content: `Em vez de digitar dia, mês e ano separadamente, usamos funções de data para extrair as informações automaticamente do campo Data.\n\nFUNÇÕES USADAS NA BASE:\n• Coluna Dia (I): =DIA(A2) → O dia da data do lançamento.\n• Coluna Mês (J): =MÊS(A2) → O número do mês (1 a 12).\n• Coluna Ano Lançamento (K): =ANO(A2) → O ano do lançamento.\n• Coluna Ano (B): =ANO(A2) → O ano, usado depois como Filtro na pivô.\n\nEXEMPLO — Data 15/06/2025 na célula A2:\n• =DIA(A2) → 15\n• =MÊS(A2) → 6\n• =ANO(A2) → 2025\n\nDICA: você também pode usar =HOJE() no cabeçalho da planilha para mostrar sempre a data de hoje.`
        },
        {
          lessonNum: 7,
          heading: "7.3 Validação de Dados — Tipo de Lançamento e Forma de Pagamento",
          content: `Antes de criar qualquer lista, o ponto mais importante desta fase: a base tem DOIS campos diferentes, e eles NÃO podem ser misturados.

• Tipo de Lançamento responde "o dinheiro entrou ou saiu?"
• Forma de Pagamento responde "como o dinheiro foi pago?"

Cada campo recebe a sua própria lista suspensa. O caminho do menu é o mesmo nas duas vezes: Dados → Validação de Dados → Permitir: Lista.

⚠️ O ERRO MAIS COMUM
BOLETO; DÉBITO; PIX; TRANSFERÊNCIA são formas de pagamento — NÃO tipos de lançamento. Se essa lista for colocada na coluna Tipo de Lançamento, a Tabela Dinâmica vai agrupar por "PIX" e por "BOLETO", e você perde justamente a informação que interessa no controle de contas: quanto entrou e quanto saiu.

PASSO A PASSO:
1. Selecione as células da coluna Tipo de Lançamento (coluna C).
2. Acesse Dados → Validação de Dados.
3. Em Permitir, escolha Lista.
4. Em Fonte, digite: RECEITA;DESPESA e confirme.
5. Repita o processo na coluna Forma de Pagamento (coluna G), agora com a Fonte BOLETO;DÉBITO;PIX;TRANSFERÊNCIA.
6. Tente digitar qualquer coisa fora das listas: o Excel recusa nos dois campos.`,
          html: `<div class="es-sheet-box"><div class="es-sheet-titlebar">Qual lista vai em qual campo</div><table class="mini-sheet"><tr><th>Campo da base</th><th>Pergunta que ele responde</th><th>Fonte da lista suspensa</th></tr><tr><td><strong>C — Tipo de Lançamento</strong></td><td>O dinheiro <strong>entrou</strong> ou <strong>saiu</strong>?</td><td><code>RECEITA;DESPESA</code></td></tr><tr><td><strong>G — Forma de Pagamento</strong></td><td>Como o dinheiro foi <strong>pago</strong>?</td><td><code>BOLETO;DÉBITO;PIX;TRANSFERÊNCIA</code></td></tr></table></div><div class="fun-highlight"><strong>⚠️ O erro mais comum nesta fase:</strong> <code>BOLETO; DÉBITO; PIX; TRANSFERÊNCIA</code> são <strong>formas de pagamento</strong>, não tipos de lançamento. Colocada no campo errado, a Tabela Dinâmica agrupa por "PIX"/"BOLETO" e você perde a informação que importa: <strong>quanto entrou e quanto saiu</strong>.</div>`
        },
        {
          lessonNum: 7,
          heading: "7.4 Renomear a Aba de Análise e Criar a Tabela Dinâmica",
          content: `Agora que a base de lançamentos está pronta, vamos criar uma segunda aba chamada Análise para receber a Tabela Dinâmica.\n\nCAMINHO DO MENU:\nPlan2 → renomear para Análise, depois Inserir → Tabela Dinâmica\n\nPASSO A PASSO:\n1. Clique na aba Plan2 e renomeie para Análise.\n2. Estando na aba Análise, acesse o menu Inserir → Tabela Dinâmica.\n3. O Excel vai abrir a janela de criação da Tabela Dinâmica.`,
          image: '../../assets/img/excel/a7/image1.png'
        },
        {
          lessonNum: 7,
          heading: "7.5 Selecionar o Intervalo (Tabela/Intervalo)",
          content: `Na janela Criar Tabela Dinâmica, precisamos indicar qual intervalo de dados deve ser usado, apontando para a tabela Lançamento.\n\nO QUE PREENCHER:\n• Tabela/Intervalo: selecione a tabela Lançamento (ex.: Lançamento!$A$1:$K$5).\n• Onde colocar: escolha Nova Planilha ou a aba Análise.\n• Clique em OK para criar a tabela dinâmica vazia.\n\nPASSO A PASSO:\n1. Na janela Criar Tabela Dinâmica, coloque o cursor no campo Tabela/Intervalo.\n2. Selecione na planilha a aba Lançamento para apontar o intervalo completo.\n3. Confirme clicando em OK.`,
          image: '../../assets/img/excel/a7/image3.png'
        },
        {
          lessonNum: 7,
          heading: "7.6 Configuração dos Campos da Tabela Dinâmica",
          content: `Com a Tabela Dinâmica criada, usamos o painel Lista de Campos para arrastar cada campo para a área certa. Colocamos TIPO DE LANÇAMENTO em Linhas, para as receitas e despesas virarem os grupos das linhas.\n\nCONFIGURAÇÃO DOS CAMPOS:\n• FILTROS: Ano.\n• LINHAS: TIPO DE LANÇAMENTO → Grupo → Conta → Valor → Mês.\n• VALORES: Valor (Soma).\n\nPASSO A PASSO:\n1. Insira TIPO DE LANÇAMENTO na área Linhas.\n2. Com Tipo selecionado, selecione também os demais campos: Grupo, Conta, Valor e Mês (conforme a imagem de referência).\n3. Arraste Valor para Valores (Soma).\n4. Arraste Ano para Filtros (veremos mais adiante).`,
          images: ['../../assets/img/excel/a7/image12.png', '../../assets/img/excel/a7/image9.png', '../../assets/img/excel/a7/image4.png', '../../assets/img/excel/a7/image6.png', '../../assets/img/excel/a7/image11.png']
        },
        {
          lessonNum: 7,
          heading: "7.7 Ordenação dos Dados (Decrescente)",
          content: `Para facilitar a leitura, vamos ordenar a Tabela Dinâmica em ordem decrescente: a maior categoria vem primeiro.\n\nPASSOS DA ORDENAÇÃO:\n1. Selecione a linha Receitas como indicado na imagem.\n2. Acesse Dados → Classificar.\n3. Escolha Ordem decrescente (do maior para o menor).`,
          images: ['../../assets/img/excel/a7/image2.png', '../../assets/img/excel/a7/image16.png', '../../assets/img/excel/a7/image7.png']
        },
        {
          lessonNum: 7,
          heading: "7.8 Visualização, Filtros e Estrutura de Tópicos",
          content: `Vamos deixar a tabela mais limpa: ocultamos as linhas de grade e os cabeçalhos na aba Exibir. Também vemos como filtrar por ano arrastando o campo Ano para Filtros e como usar a Estrutura de Tópicos para expandir/recolher com os botões + / −.\n\nOCULTAR LINHAS E GRADES:\n• Na aba Exibir, desmarque Linhas e Grades para ocultar os cabeçalhos de linha/coluna e as linhas de grade.\n• Se a lista de campos sumir: clique em uma célula da tabela com o botão direito e escolha a última opção → Mostrar Lista de Campos.\n• Arraste a coluna Ano para a área FILTROS → agora dá para filtrar por ano (ex.: 2025, 2026).\n\nESTRUTURA DE TÓPICOS (AGRUPAMENTO):\n• Selecione a linha Receita.\n• Acesse Dados → Estrutura de tópicos.\n• Aparecem os botões + e − para expandir ou ocultar as linhas de detalhe.\n• Clique em − para ocultar os detalhes e + para expandir novamente.`,
          images: ['../../assets/img/excel/a7/image8.png', '../../assets/img/excel/a7/image5.png', '../../assets/img/excel/a7/image13.png']
        },
        {
          lessonNum: 7,
          heading: "7.9 Exercício Prático — Contas Pessoais com Tabela Dinâmica",
          content: `Vamos montar passo a passo o seu controle de contas pessoais completo com a Tabela Dinâmica de análise.\n\nPASSO 1 — PLANILHA BASE:\nCrie a base de lançamentos com os 11 campos (Data | Ano | Tipo de Lançamento | Grupo | Conta | Valor | Forma de Pagamento | Descrição | Dia | Mês | Ano Lançamento) e renomeie Plan1 → Lançamento.\n\nPASSO 2 — FUNÇÕES DE DATA:\n• Ano (para filtro): =ANO(A2)\n• Dia: =DIA(A2)\n• Mês: =MÊS(A2)\n• Ano Lançamento: =ANO(A2)\n\nPASSO 3 — VALIDAÇÃO DE DADOS:\nAplique Dados → Validação de Dados → Lista DUAS VEZES: no campo Tipo de Lançamento com a fonte RECEITA;DESPESA e no campo Forma de Pagamento com a fonte BOLETO;DÉBITO;PIX;TRANSFERÊNCIA. Misturar os dois campos estraga o agrupamento da Tabela Dinâmica.\n\nPASSO 4 — CRIAR A TABELA DINÂMICA:\nRenomeie Plan2 → Análise, acesse Inserir → Tabela Dinâmica, selecione a tabela Lançamento e configure os campos: TIPO DE LANÇAMENTO, Grupo, Conta, Valor e Mês nas Linhas, Valor em Valores e Ano em Filtros.\n\nPASSO 5 — ORDENAR, OCULTAR E AGRUPAR:\n1. Ordene em ordem decrescente (Dados → Classificar).\n2. Na aba Exibir, desmarque Linhas e Grades.\n3. Filtre por ano usando o campo Ano na área de Filtros.\n4. Use a Estrutura de Tópicos (Dados → Estrutura de tópicos) com os botões + / − para ocultar os detalhes.\n\n✏️ EXERCÍCIOS PARA PRATICAR:\n1. Monte a planilha de Contas Pessoais com os seus próprios lançamentos do mês (preencha os 11 campos).\n2. Use as funções =DIA(), =MÊS() e =ANO() para preencher as colunas derivadas de data.\n3. Aplique Validação de Dados (Lista) nos Tipos de Lançamento (RECEITA; DESPESA) e nas Formas de Pagamento (BOLETO; DÉBITO; PIX; TRANSFERÊNCIA).\n4. Crie a Tabela Dinâmica na aba Análise, colocando TIPO DE LANÇAMENTO e depois Grupo, Conta, Valor e Mês em Linhas.\n5. Classifique em ordem decrescente, filtre por um ano e use os botões + / − da Estrutura de Tópicos para ocultar os detalhes.\n\n🔒 REGRA DE OURO:\nUma base bem organizada (com Validação de Dados e funções de data) é o segredo para uma Tabela Dinâmica confiável. Arraste os campos para Linhas para agrupar, para Filtros para recortar por ano e use a Estrutura de Tópicos para expandir ou ocultar os detalhes.`,
          images: ['../../assets/img/excel/a7/image10.png', '../../assets/img/excel/a7/image15.png', '../../assets/img/excel/a7/image14.png']
        },
      {
          lessonNum: 8,
          chapter: "AULA 08: CONTROLE DE ESTOQUE COM A FUNÇÃO SOMASE — TABELAS, VALIDAÇÃO DE DADOS, FÓRMULAS, TOTAIS E TABELA DINÂMICA",
          heading: "8.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `Esta aula ensina, para quem nunca mexeu no Excel, a construir do zero o controle de estoque de uma pequena loja. Você será o(a) dono(a) da loja e precisa descobrir quanto tem em estoque, quanto isso vale em reais e quando repor.\n\nO QUE VAMOS FAZER (objetivo):\n• Criar uma pasta de trabalho com 4 abas: Produtos, Fornecedores, Estoque e Resumo.\n• Na aba Estoque, transformar uma lista comum em uma Tabela inteligente que calcula sozinha Estoque Atual, Valor em Estoque e Status.\n• Usar listas suspensas (Validação de Dados) para evitar erros de digitação.\n• Criar uma consulta por fornecedor com a função SOMASE.\n• Gerar um painel de análise com Tabela Dinâmica.\n\nCOMO VAMOS FAZER (a escada de 9 degraus):\nO projeto é uma escada. Cada degrau usa o que foi feito no anterior — siga SEMPRE na ordem de 1 a 9:\n1. Tabela de Produtos → 2. Tabela de Fornecedores → 3. Dados de Estoque → 4. Virar Tabela → 5. Fórmulas → 6. SOMASE → 7. Classificar & Filtrar → 8. Linha de Totais → 9. Tabela Dinâmica.`,
          html: `<div style="margin:16px 0;">
  <div style="font-weight:800; color:#166534; font-size:14px; margin-bottom:8px;">🗺️ O ROTEIRO DOS 9 PASSOS</div>
  <div style="display:flex; flex-wrap:wrap; gap:6px;">
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">1</strong> Tabela de Produtos</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">2</strong> Tabela de Fornecedores</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">3</strong> Dados de Estoque</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">4</strong> Virar Tabela (Ctrl+T)</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">5</strong> Fórmulas</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">6</strong> SOMASE</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">7</strong> Classificar & Filtrar</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">8</strong> Linha de Totais</span>
    <span style="background:#F7FEF9; border:1px solid #D1FAE5; border-radius:6px; padding:3px 8px; font-size:11.5px; color:#374151;"><strong style="color:#15803D;">9</strong> Tabela Dinâmica</span>
  </div>
  <p style="font-size:11.5px; color:#475569; margin:8px 0 0 0;">Cada degrau tem um check no fim da fase onde ele é executado — só avance depois de concluir o anterior.</p>
  <div style="font-weight:800; color:#166534; font-size:14px; margin:16px 0 8px 0;">🏁 O QUE VOCÊ VAI CONSEGUIR NO FINAL</div>
  <div class="es-sheet-box" style="max-width:460px;">
    <div class="es-sheet-titlebar">Aba “Resumo” — Estoque por Fornecedor (Tabela Dinâmica)</div>
    <table class="mini-sheet">
      <tr><td><strong>TechDistrib</strong></td><td style="text-align:right;">R$ 28.100,00</td></tr>
      <tr><td><strong>MoveisPro</strong></td><td style="text-align:right;">R$ 4.020,00</td></tr>
      <tr><td><strong>InfoPlus</strong></td><td style="text-align:right;">R$ 1.530,00</td></tr>
      <tr><td><strong>AtacadoMax</strong></td><td style="text-align:right;">R$ 1.160,00</td></tr>
      <tr style="background:#FEF3C7; font-weight:700;"><td><strong>Total Geral</strong></td><td style="text-align:right;">R$ 34.810,00</td></tr>
    </table>
  </div>
  <p style="font-size:12.5px; color:#475569; margin-top:10px;">Nada disso é digitado à mão: são as funcionetes SOMASE e a Tabela Dinâmica que fazem as somas automaticamente.</p>
</div>`
        },
        {
          lessonNum: 8,
          heading: "8.1 Etapa 1 — Criar a Tabela de Produtos",
          content: `O primeiro passo do projeto é criar uma tabela de apoio de Produtos em uma aba separada. Essa tabela não recebe estoque diretamente — ela serve como fonte da lista suspensa de produtos usada na Tabela de Dados de Estoque (Etapa 3).\n\nPASSO A PASSO:\n1. Abra uma planilha nova no Excel.\n2. Em uma aba separada, crie a coluna Produtos.\n3. Digite os itens: Cadeira | Mesa | Monitor | Mouse | Teclado | Notebook.\n4. Mantenha essa aba como tabela de apoio — ela vai alimentar a lista suspensa da coluna Produto.`,
          html: `<div class="es-sheet-box" style="max-width:300px;">
            <div class="es-sheet-titlebar">Aba “Produtos” — Tabela de Apoio</div>
            <table class="mini-sheet">
              <tr><th>Produtos</th></tr>
              <tr><td>Cadeira</td></tr>
              <tr><td>Mesa</td></tr>
              <tr><td>Monitor</td></tr>
              <tr><td>Mouse</td></tr>
              <tr><td>Teclado</td></tr>
              <tr><td>Notebook</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 8,
          heading: "8.2 Etapa 2 — Criar a Tabela de Fornecedores",
          content: `Da mesma forma, crie uma tabela de apoio com os nomes dos fornecedores. Ela alimentará a lista suspensa da coluna Fornecedor da Tabela de Estoque.\n\nVALORES DA TABELA DE APOIO — FORNECEDORES:\nTechDistrib | InfoPlus | MoveisPro | AtacadoMax\n\nPOR QUE AS TABELAS DE APOIO?\nAs tabelas de apoio (Produtos e Fornecedores) alimentam, por Validação de Dados, as listas suspensas da Tabela de Estoque. Qualquer produto ou fornecedor novo criado nessas abas passa a aparecer automaticamente nas listas.`,
          html: `<div class="es-sheet-box" style="max-width:300px;">
            <div class="es-sheet-titlebar">Aba “Fornecedores” — Tabela de Apoio</div>
            <table class="mini-sheet">
              <tr><th>Fornecedores</th></tr>
              <tr><td>TechDistrib</td></tr>
              <tr><td>InfoPlus</td></tr>
              <tr><td>MoveisPro</td></tr>
              <tr><td>AtacadoMax</td></tr>
            </table>
            <div style="padding:8px 12px; font-size:11.5px; color:#475569;">→ Fonte das listas suspensas de Produto e Fornecedor, respectivamente.</div>
          </div>`
        },
        {
          lessonNum: 8,
          heading: "8.3 Etapa 3 — Criar a Tabela de Dados de Estoque",
          content: `Agora montamos a planilha principal de estoque. Aqui entram a Validação de Dados (listas suspensas), os dados de exemplo e a conversão do intervalo em uma Tabela formatável.\n\nO QUE É A VALIDAÇÃO DE DADOS:\nA Validação de Dados cria uma lista suspensa dentro da célula, para que o usuário escolha um valor em vez de digitar livremente. Isso evita erros de digitação, nomes escritos de formas diferentes e categorias inventadas.\n\nCAMINHO DO MENU:\nDados → Ferramentas de Dados → Validação de Dados → Aba Configurações → Permitir: Lista\n\nCOMO ACESSAR A VALIDAÇÃO DE DADOS:\n1. Clique na célula (ou selecione o intervalo) onde a lista deve aparecer — por exemplo, a coluna Fornecedor.\n2. Vá até a guia Dados, no grupo Ferramentas de Dados.\n3. Clique em Validação de Dados.\n4. Na aba Configurações, em Permitir, escolha a opção Lista.\n5. No campo Fonte, selecione a coluna da tabela de apoio correspondente (coluna Fornecedores para o campo Fornecedor e coluna Produtos para o campo Produto).\n6. Clique em OK.\n\nPOR QUE USAR AS TABELAS DE APOIO COMO FONTE?\nAo apontar a Fonte para o intervalo da tabela de apoio (em vez de digitar os nomes diretamente na caixa), qualquer produto ou fornecedor novo criado nessa tabela passa a aparecer automaticamente na lista suspensa — sem precisar editar a validação novamente.\n\nCRIAR A LISTA DE CATEGORIA:\nA Categoria tem apenas dois valores fixos. Na Validação de Dados da coluna Categoria, em Fonte, digite diretamente: Informática;Móveis\n\nPREPARAR OS DADOS INICIAIS:\nCrie a planilha principal com os cabeçalhos na linha 1: Produto | Categoria | Fornecedor | Entradas | Saídas | Preço Unit. (R$). Nas colunas Produto, Categoria e Fornecedor, use a Validação de Dados.\n\nDADOS DE EXEMPLO (linhas 2 a 9 — 8 itens):\nNotebook | Informática | TechDistrib | 10 | 3 | 3.500\nMonitor | Informática | TechDistrib | 5 | 2 | 1.200\nMouse | Informática | InfoPlus | 40 | 30 | 45\nTeclado | Informática | InfoPlus | 25 | 16 | 120\nCadeira | Móveis | MoveisPro | 12 | 4 | 280\nMesa | Móveis | MoveisPro | 3 | 1 | 890\nCadeira | Móveis | AtacadoMax | 8 | 6 | 280\nTeclado | Informática | AtacadoMax | 15 | 10 | 120\n\nCONVERTER EM TABELA:\nSelecione todos os dados A1:F9 (produto, categoria, fornecedor, entradas, saídas e preço) e pressione Ctrl+T, marcando a opção Minha tabela tem cabeçalhos. O nome da tabela será definido na Etapa 4.`,
          html: `<div class="es-sheet-box">
            <div class="es-sheet-titlebar">Aba “Estoque” — Dados de Entrada (A1:F9, 8 linhas)</div>
            <table class="mini-sheet">
              <tr><th>A Produto</th><th>B Categoria</th><th>C Fornecedor</th><th>D Entradas</th><th>E Saídas</th><th>F Preço Unit. (R$)</th></tr>
              <tr><td>Notebook</td><td>Informática</td><td>TechDistrib</td><td style="text-align:right;">10</td><td style="text-align:right;">3</td><td style="text-align:right;">3500</td></tr>
              <tr><td>Monitor</td><td>Informática</td><td>TechDistrib</td><td style="text-align:right;">5</td><td style="text-align:right;">2</td><td style="text-align:right;">1200</td></tr>
              <tr><td>Mouse</td><td>Informática</td><td>InfoPlus</td><td style="text-align:right;">40</td><td style="text-align:right;">30</td><td style="text-align:right;">45</td></tr>
              <tr><td>Teclado</td><td>Informática</td><td>InfoPlus</td><td style="text-align:right;">25</td><td style="text-align:right;">16</td><td style="text-align:right;">120</td></tr>
              <tr><td>Cadeira</td><td>Móveis</td><td>MoveisPro</td><td style="text-align:right;">12</td><td style="text-align:right;">4</td><td style="text-align:right;">280</td></tr>
              <tr><td>Mesa</td><td>Móveis</td><td>MoveisPro</td><td style="text-align:right;">3</td><td style="text-align:right;">1</td><td style="text-align:right;">890</td></tr>
              <tr><td>Cadeira</td><td>Móveis</td><td>AtacadoMax</td><td style="text-align:right;">8</td><td style="text-align:right;">6</td><td style="text-align:right;">280</td></tr>
              <tr><td>Teclado</td><td>Informática</td><td>AtacadoMax</td><td style="text-align:right;">15</td><td style="text-align:right;">10</td><td style="text-align:right;">120</td></tr>
            </table>
          </div>
          <div class="fun-highlight">
            <strong>Validação de Dados aplicada antes de digitar (Dados → Validação de Dados → Permitir: Lista):</strong><br>
            • Produto ← aba “Produtos” (tabela de apoio) &nbsp;|&nbsp; • Categoria ← valores fixos: Informática;Móveis &nbsp;|&nbsp; • Fornecedor ← aba “Fornecedores” (tabela de apoio)
          </div>`
        },
        {
          lessonNum: 8,
          heading: "8.4 Etapa 4 — Aplicar Estilos de Tabela",
          content: `Com os dados convertidos em Tabela, vamos aprimorar a visualização e nomear a tabela para que as fórmulas usem referências estruturadas como TabelaEstoque[Valor em Estoque].\n\nESCOLHER UM ESTILO:\nCom a tabela selecionada, vá em Design de Tabela e escolha um estilo (sugestão: Médio 6 ou Médio 15).\n\nPERSONALIZAR OPÇÕES DE ESTILO:\n• Marque: Linhas em Tiras (faixas alternadas).\n• Marque: Primeira Coluna (destaque).\n• Marque: Linha de Totais.\n\nNOMEAR A TABELA:\nEm Design de Tabela, no campo Nome da Tabela, digite: TabelaEstoque. Esse nome será usado nas fórmulas com referências estruturadas.`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Aba “Estoque” — convertida em Tabela (Ctrl+T sobre A1:F9)</div>
            <table class="mini-sheet">
              <tr><th>Produto</th><th>Categoria</th><th>Fornecedor</th><th>Entradas</th><th>Saídas</th><th>Preço Unit.</th></tr>
              <tr style="background:#F0FDF4;"><td>Notebook</td><td>Informática</td><td>TechDistrib</td><td style="text-align:right;">10</td><td style="text-align:right;">3</td><td style="text-align:right;">3500</td></tr>
              <tr style="background:#FFFFFF;"><td>Monitor</td><td>Informática</td><td>TechDistrib</td><td style="text-align:right;">5</td><td style="text-align:right;">2</td><td style="text-align:right;">1200</td></tr>
              <tr style="background:#F0FDF4;"><td style="font-weight:700; color:#15803D;">Mouse</td><td>Informática</td><td>InfoPlus</td><td style="text-align:right;">40</td><td style="text-align:right;">30</td><td style="text-align:right;">45</td></tr>
            </table>
            <div style="padding:8px 12px; font-size:11.5px; color:#475569;">Faixas alternadas (Linhas em Tiras) e destaque com <strong>Nome da Tabela = TabelaEstoque</strong>.</div>
          </div>`
        },
        {
          lessonNum: 8,
          heading: "8.5 Etapa 5 — Adicionar Fórmulas na Tabela",
          content: `Agora calculamos os valores automaticamente. Com as referências estruturadas [@Coluna], o Excel replica a fórmula para toda a coluna ao pressionar Enter.\n\nCALCULAR O ESTOQUE ATUAL:\nClique na célula G2 (coluna Estoque Atual) e digite:\n=[@Entradas]-[@Saídas]\nPressione Enter — a fórmula será aplicada automaticamente a toda a coluna.\n\nCALCULAR O VALOR EM ESTOQUE:\nCrie uma nova coluna H chamada Valor em Estoque:\n=[@[Estoque Atual]]*[@[Preço Unit. (R$)]]\n\nADICIONAR COLUNA DE STATUS DO ESTOQUE:\nCrie uma coluna I chamada Status. Como temos três faixas (Baixo, Médio, Alto), usamos um SE aninhado:\n=SE([@[Estoque Atual]]<=5;"Baixo";SE([@[Estoque Atual]]<=15;"Médio";"Alto"))\n\nRESUMO DAS FÓRMULAS DA TabelaEstoque:\n• Estoque Atual (G): =[@Entradas]-[@Saídas] → Entradas − Saídas.\n• Valor em Estoque (H): =[@[Estoque Atual]]*[@[Preço Unit. (R$)]] → Estoque × Preço Unitário.\n• Status (I): =SE([@[Estoque Atual]]<=5;"Baixo";SE([@[Estoque Atual]]<=15;"Médio";"Alto")) → Baixo se menor ou igual a 5; Médio se menor ou igual a 15; senão Alto.`,
          html: `<div class="fun-highlight">
            <strong>As 3 fórmulas da TabelaEstoque (uma por troço):</strong><br>
            1️⃣ Estoque Atual (G): <code>= [@Entradas] - [@Saídas]</code><br>
            2️⃣ Valor em Estoque (H): <code>= [@[Estoque Atual]] * [@[Preço Unit. (R$)]]</code><br>
            3️⃣ Status (I): <code>= SE( [@[Estoque Atual]]&lt;=5 ; &quot;Baixo&quot; ; SE( [@[Estoque Atual]]&lt;=15 ; &quot;Médio&quot; ; &quot;Alto&quot; ) )</code>
          </div>
          <div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Resultado com 1 Enter — as colunas G, H e I calculam tudo sozinhas</div>
            <table class="mini-sheet">
              <tr><th>Produto</th><th>G Estoque Atual</th><th>H Valor em Estoque</th><th>I Status</th></tr>
              <tr><td>Notebook</td><td style="text-align:right;">7</td><td style="text-align:right;">R$ 24.500,00</td><td style="text-align:center;">Médio</td></tr>
              <tr><td>Monitor</td><td style="text-align:right;">3</td><td style="text-align:right;">R$ 3.600,00</td><td style="text-align:center;">Baixo</td></tr>
              <tr><td>Mouse</td><td style="text-align:right;">10</td><td style="text-align:right;">R$ 450,00</td><td style="text-align:center;">Médio</td></tr>
              <tr><td>Teclado</td><td style="text-align:right;">9</td><td style="text-align:right;">R$ 1.080,00</td><td style="text-align:center;">Médio</td></tr>
              <tr><td>Cadeira</td><td style="text-align:right;">8</td><td style="text-align:right;">R$ 2.240,00</td><td style="text-align:center;">Médio</td></tr>
              <tr><td>Cadeira</td><td style="text-align:right;">2</td><td style="text-align:right;">R$ 560,00</td><td style="text-align:center;">Baixo</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 8,
          heading: "8.6 Etapa 6 — Consulta Rápida por Fornecedor (SOMASE)",
          content: `Criamos um pequeno campo de consulta: você escolhe o nome de um fornecedor em uma lista suspensa, e o valor em estoque fornecido por ele aparece automaticamente em outra célula. Isso é feito com a função SOMASE.\n\nENTENDENDO A FUNÇÃO SOMASE:\n=SOMASE( intervalo_critério ; critério ; intervalo_soma )\n• intervalo_critério: onde o Excel vai procurar a condição — a coluna Fornecedor da TabelaEstoque.\n• critério: o valor procurado — o nome escolhido no campo de consulta.\n• intervalo_soma: os valores que serão somados quando o critério for encontrado — a coluna Valor em Estoque da TabelaEstoque.\n\nMONTAR O CAMPO DE CONSULTA:\n1. Escolha duas células livres na planilha, por exemplo B2 (entrada) e C2 (resultado).\n2. Em B2, aplique Validação de Dados (Lista), usando a Tabela Fornecedores da Etapa 2 como Fonte — assim você escolhe o nome em vez de digitar.\n3. Em C2, digite a fórmula:\n=SOMASE( TabelaEstoque[Fornecedor] ; B2 ; TabelaEstoque[Valor em Estoque] )\n4. Pressione Enter. O valor em C2 mostra o valor em estoque do fornecedor selecionado em B2.\n5. Troque o nome em B2 e observe o resultado em C2 mudar automaticamente. Exemplo: MoveisPro retorna R$ 4.020,00.\n\nPOR QUE REFERENCIAR A CÉLULA B2 E NÃO DIGITAR O NOME DIRETO NA FÓRMULA?\nUsando =SOMASE(TabelaEstoque[Fornecedor];B2;TabelaEstoque[Valor em Estoque]) em vez de =SOMASE(TabelaEstoque[Fornecedor];"MoveisPro";TabelaEstoque[Valor em Estoque]), a fórmula não muda quando você troca o fornecedor — só o conteúdo da célula B2 muda. Isso transforma a fórmula em um painel de consulta reutilizável.`,
          html: `<div class="es-sheet-box" style="max-width:360px;">
            <div class="es-sheet-titlebar">Campo de Consulta — aba “Estoque”</div>
            <table class="mini-sheet">
              <tr><th style="width:60%;">B2 (escolha o fornecedor)</th><th>C2 (resultado SOMASE)</th></tr>
              <tr><td style="font-weight:700;">▾ MoveisPro</td><td style="text-align:right; font-weight:700; background:#F0FDF4;">R$ 4.020,00</td></tr>
            </table>
          </div>
          <div class="fun-highlight">
            <strong>Fórmula em C2:</strong> <code>=SOMASE( TabelaEstoque[Fornecedor] ; B2 ; TabelaEstoque[Valor em Estoque] )</code><br>
            Troque o nome em B2 (via lista suspensa) e o resultado muda — <strong>a fórmula nunca muda</strong>.
          </div>`
        },
        {
          lessonNum: 8,
          heading: "8.7 Etapa 7 — Classificação e Filtragem Avançadas",
          content: `Para analisar o estoque com mais facilidade, usamos ordenação e filtros na TabelaEstoque.\n\nCLASSIFICAÇÃO SIMPLES:\n1. Clique na seta ao lado de Valor em Estoque.\n2. Escolha: Classificar do Maior para o Menor.\n\nCLASSIFICAÇÃO PERSONALIZADA (MÚLTIPLOS NÍVEIS):\nVá em Dados → Classificar e configure:\n• 1º nível: Fornecedor (A a Z).\n• 2º nível: Valor em Estoque (maior → menor).\n\nFILTRAGEM POR CATEGORIA:\n1. Clique na seta de Categoria.\n2. Desmarque Móveis (mostrará somente Informática).\n\nFILTRAGEM POR VALOR:\n1. Clique na seta de Valor em Estoque.\n2. Vá em Filtros de Número → Maior que...\n3. Digite: 5000.\n\nFILTROS MÚLTIPLOS (PRATIQUE COMBINANDO):\n• Filtro A: Categoria = Informática.\n• Filtro B: Fornecedor = TechDistrib ou MoveisPro.\n• Filtro C: Estoque Atual > 4.\n\n🖥️ No menu interativo da aula (Sales Lab), use os botões Classificar Valor, Filtro Categoria e Valor > 5.000 para experimentar esses passos na grade interativa.`,
          html: `<div class="fun-highlight">
            <strong>Os 3 filtros principais da Etapa 7:</strong><br>
            • <strong>Valor em Estoque → Filtros de Número → Maior que…</strong> → 5000<br>
            • <strong>Categoria → desmarcar Móveis</strong> (mostra só Informática)<br>
            • <strong>Classificação personalizada</strong>: 1º nível Fornecedor (A a Z) + 2º nível Valor em Estoque (maior → menor)
          </div>`
          ,
        },
        {
          lessonNum: 8,
          heading: "8.8 Etapa 8 — Linha de Totais com Funções",
          content: `A Linha de Totais mostra automaticamente as totalizações de cada coluna no rodapé da Tabela — com Soma para valores numéricos e Contagem para textos.\n\nATIVAR LINHA DE TOTAIS:\nEm Design de Tabela, marque: Linha de Totais.\n\nCONFIGURAR TOTALIZAÇÕES:\n• Coluna Entradas → Soma.\n• Coluna Saídas → Soma.\n• Coluna Valor em Estoque → Soma.\n• Coluna Fornecedor → Contagem.\n\n🖥️ No menu interativo da aula (Sales Lab), clique em Linha de Totais para alternar as totalizações: Soma de Entradas, Saídas e Valor em Estoque, e Contagem de Fornecedor.`,
          html: `<div class="es-sheet-box" style="max-width:620px;">
            <div class="es-sheet-titlebar">Rodapé da TabelaEstoque com Linha de Totais ativa</div>
            <table class="mini-sheet">
              <tr><th>Produto</th><th>Categoria</th><th>Fornecedor</th><th>Entradas</th><th>Saídas</th><th>Preço Unit.</th><th>Valor</th></tr>
              <tr><td>Notebook</td><td>Informática</td><td>TechDistrib</td><td style="text-align:right;">10</td><td style="text-align:right;">3</td><td style="text-align:right;">3500</td><td style="text-align:right;">24.500</td></tr>
              <tr style="background:#F0FDF4;"><td>Cadeira</td><td>Móveis</td><td>AtacadoMax</td><td style="text-align:right;">8</td><td style="text-align:right;">6</td><td style="text-align:right;">280</td><td style="text-align:right;">560</td></tr>
              <tr style="background:#FEF3C7; font-weight:700;"><td>Total</td><td></td><td>8 (Contagem)</td><td style="text-align:right;">118</td><td style="text-align:right;">72</td><td></td><td style="text-align:right;">34.810</td></tr>
            </table>
            <div style="padding:8px 12px; font-size:11.5px; color:#475569;">Clique na célula do Total e escolha Soma / Contagem para cada coluna.</div>
          </div>`
        },
        {
          lessonNum: 8,
          heading: "8.9 Etapa 9 — Criar Tabela Dinâmica",
          content: `A Tabela Dinâmica consolida o estoque em segundos: por fornecedor, por categoria e por produto — sem escrever nenhuma fórmula manual de soma.\n\nINSERIR TABELA DINÂMICA:\n1. Clique em qualquer célula da tabela.\n2. Vá em: Inserir → Tabela Dinâmica.\n3. Escolha: Nova Planilha.\n4. Clique em OK.\n\nPRIMEIRA ANÁLISE — ESTOQUE POR FORNECEDOR:\n1. Arraste Fornecedor para LINHAS.\n2. Arraste Valor em Estoque para VALORES (configurar como Soma).\n\nSEGUNDA ANÁLISE — ESTOQUE POR CATEGORIA E PRODUTO:\nCrie outra tabela dinâmica em uma nova planilha:\n• LINHAS: Categoria, depois Produto.\n• VALORES: Soma de Valor em Estoque.\n• COLUNAS: Fornecedor.\n\nFORMATAR AS TABELAS DINÂMICAS:\n• Aplique um estilo de tabela dinâmica.\n• Formate os valores como moeda: R$ 0,00.\n• Adicione Segmentação de Dados (Fornecedor e Categoria) para filtrar visualmente.`,
          html: `<div class="es-sheet-box" style="max-width:480px;">
            <div class="es-sheet-titlebar">Aba “Resumo” — Tabela Dinâmica: Linhas (Categoria → Produto) e Valores (Soma de Valor)</div>
            <table class="mini-sheet">
              <tr><th>Rótulos de Linha</th><th style="text-align:right;">Soma de Valor em Estoque</th></tr>
              <tr><td><strong>Informática</strong></td><td style="text-align:right;"><strong>R$ 30.230,00</strong></td></tr>
              <tr><td style="padding-left:22px;">&nbsp;&nbsp;Notebook</td><td style="text-align:right;">R$ 24.500,00</td></tr>
              <tr><td style="padding-left:22px;">&nbsp;&nbsp;Monitor</td><td style="text-align:right;">R$ 3.600,00</td></tr>
              <tr><td style="padding-left:22px;">&nbsp;&nbsp;Mouse</td><td style="text-align:right;">R$ 450,00</td></tr>
              <tr><td style="padding-left:22px;">&nbsp;&nbsp;Teclado</td><td style="text-align:right;">R$ 1.680,00</td></tr>
              <tr><td><strong>Móveis</strong></td><td style="text-align:right;"><strong>R$ 4.580,00</strong></td></tr>
              <tr><td style="padding-left:22px;">&nbsp;&nbsp;Cadeira</td><td style="text-align:right;">R$ 2.800,00</td></tr>
              <tr><td style="padding-left:22px;">&nbsp;&nbsp;Mesa</td><td style="text-align:right;">R$ 1.780,00</td></tr>
              <tr style="background:#FEF3C7; font-weight:700;"><td><strong>Total Geral</strong></td><td style="text-align:right;"><strong>R$ 34.810,00</strong></td></tr>
            </table>
          </div>
          <p style="font-size:12.5px; color:#475569;">Formate os valores como moeda (R$ 0,00) e adicione Segmentação de Dados (Fornecedor e Categoria) para filtrar com um clique.</p>`
        },
        {
          lessonNum: 8,
          heading: "8.10 Resumo da Aula — Controle de Estoque com SOMASE",
          content: `PARA FIXAR O APRENDIZADO:\n• Tabelas de apoio (Produtos e Fornecedores) alimentam as listas suspensas da Tabela de Estoque via Validação de Dados — itens novos aparecem automaticamente.\n• Validação de Dados (Dados → Validação de Dados → Permitir: Lista): a Fonte pode ser uma coluna de apoio (Fornecedor/Produto) ou valores fixos separados por ponto e vírgula (Categoria: Informática;Móveis).\n• Converter dados em Tabela (Inserir → Tabela ou Ctrl+T, marcando Minha tabela tem cabeçalhos, sobre o intervalo A1:F9) habilita referências estruturadas como TabelaEstoque[Valor em Estoque].\n• Fórmulas estruturadas: Estoque Atual =[@Entradas]-[@Saídas], Valor em Estoque =[@[Estoque Atual]]*[@[Preço Unit. (R$)]] e Status =SE([@[Estoque Atual]]<=5;"Baixo";SE([@[Estoque Atual]]<=15;"Médio";"Alto")).\n• SOMASE: =SOMASE(TabelaEstoque[Fornecedor];B2;TabelaEstoque[Valor em Estoque]) permite consultar o valor em estoque de um fornecedor referenciando a célula do nome, sem alterar a fórmula.\n• Classificação e filtros: classificar Valor em Estoque do maior para o menor, classificação personalizada e filtros por categoria e por valor (Valor em Estoque > 5000).\n• Linha de Totais (Design de Tabela): Soma para Entradas, Saídas e Valor em Estoque; Contagem para Fornecedor.\n• Tabela Dinâmica (Inserir → Tabela Dinâmica): Estoque por Fornecedor (LINHAS: Fornecedor; VALORES: Soma de Valor em Estoque) e Estoque por Categoria e Produto (LINHAS: Categoria e Produto; COLUNAS: Fornecedor), formatadas como moeda e com Segmentação de Dados.\n\n🔒 REGRA DE OURO:\nUma base bem organizada — com tabelas de apoio, Validação de Dados e referências estruturadas — torna as consultas (SOMASE), os filtros e as Tabelas Dinâmicas confiáveis e automáticos.`
        },
        {
          lessonNum: 9,
          chapter: "AULA 09: MACROS & INTRODUÇÃO AO VBA — AVENTURA CAPIBERICA",
          heading: "9.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `Nesta aula vamos ativar a aba Desenvolvedor do Excel, gravar a primeira Macro sem digitar código e entrar no Editor VBA (VBE) para escrever nossa primeira sub-rotina com MsgBox — ambientados na história do herói Capiberica no Reino do Excel. É a base introdutória: ao final, você vai executar um programa VBA que mostra uma mensagem na tela.

O caminho tem 6 passos — cada passo é uma fase da história e uma ferramenta do Excel:
1. Ler a história e planejar — entender o que são Macros e VBA com a Aventura Capiberica
2. Entender o que são Macros e VBA — o "robô auxiliar" e a "língua secreta" do Excel
3. Ativar a aba Desenvolvedor — onde ficam os botões de macro
4. Gravar a Primeira Macro — gravar um passo a passo para o Excel repetir
5. Abrir e navegar no Editor VBA (VBE) — o "laboratório" onde escrevemos código
6. Escrever e executar a sub-rotina "Hello World" — criar um módulo, digitar Sub...End Sub e exibir a caixa de mensagem

Cada degrau tem um check no fim da fase — marque como concluído só depois de terminar a leitura e os exercícios daquela fase.
Na Aula 10, vamos avançar para objetos, variáveis, condicionais e laços.`,
          html: `<div style="margin:16px 0;">
            <p style="text-align:center;font-weight:700;font-size:1.1em;">🗺️ O ROTEIRO DOS 6 PASSOS</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:12px 0;">
              <span style="background:#E8F5E9;color:#1B5E20;padding:6px 12px;border-radius:16px;font-size:0.9em;">1. Ler a história</span>
              <span style="background:#E3F2FD;color:#0D47A1;padding:6px 12px;border-radius:16px;font-size:0.9em;">2. Macros & VBA</span>
              <span style="background:#FFF3E0;color:#E65100;padding:6px 12px;border-radius:16px;font-size:0.9em;">3. Aba Desenvolvedor</span>
              <span style="background:#F3E5F5;color:#4A148C;padding:6px 12px;border-radius:16px;font-size:0.9em;">4. Gravar Macro</span>
              <span style="background:#E0F7FA;color:#006064;padding:6px 12px;border-radius:16px;font-size:0.9em;">5. Editor VBE</span>
              <span style="background:#FCE4EC;color:#880E4F;padding:6px 12px;border-radius:16px;font-size:0.9em;">6. Sub-rotina "Hello World"</span>
            </div>
            <p style="text-align:center;margin-top:8px;font-size:0.9em;color:#555;">Cada degrau tem um check no fim da fase.</p>
          </div>
          <div class="es-sheet-box" style="max-width:480px;">
            <div class="es-sheet-titlebar">Aventura Capiberica — O que você vai criar</div>
            <table class="mini-sheet">
              <tr><th>Conquista</th><th>Resultado ao final da aula</th></tr>
              <tr><td>Aba Desenvolvedor</td><td>Ativada e visível</td></tr>
              <tr><td>Macro gravada</td><td>Formatador Automático</td></tr>
              <tr><td>Sub-rotina</td><td>"Hello World" com MsgBox</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 9,
          heading: "9.1 Macros & VBA — A História da Capiberica",
          content: `Uma Macro é um conjunto de instruções gravadas no Excel que o computador repete automaticamente — como um robô auxiliar que executa uma sequência de passos para você.\n\nVBA (Visual Basic for Applications) é a "linguagem" por trás das Macros. É o código que o Excel interpreta para executar tarefas.\n\nNa Aventura Capiberica, o herói do Reino do Excel grava os passos de formatar 100 tabelas de impostos e o Excel passa a repetir tudo sozinho — essa é a Macro. Para criar comandos do zero (como mostrar uma mensagem), Capiberica precisa aprender a linguagem VBA.\n\nTERMOS IMPORTANTES:\n• Módulo: uma "folha em branco" onde guardamos o código VBA.\n• Sub-rotina (Sub): um bloco de código com nome, que começa com Sub e termina com End Sub.\n• Objeto: uma parte do Excel que podemos manipular (planilha, intervalo de células, botão).`,
          html: `<div class="fun-highlight">
            <strong>História do Capiberica no VBA:</strong><br>
            • <strong>Macro</strong> → sequência de passos gravada, repetida automaticamente<br>
            • <strong>VBA</strong> → a "língua secreta" que o Excel entende<br>
            • <strong>Módulo</strong> → onde guardamos o código (Inserir → Módulo)<br>
            • <strong>Sub-rotina</strong> → Sub ... End Sub com um nome<br>
            • <strong>MsgBox</strong> → exibe uma caixa de mensagem
          </div>`
        },
        {
          lessonNum: 9,
          heading: "9.2 Ativar a Aba Desenvolvedor",
          content: `Antes de criar macros, precisamos liberar a aba "Desenvolvedor" no Excel — ela fica escondida por padrão.\n\nPASSO A PASSO:\n1. Clique em Arquivo → Opções.\n2. Na janela que abre, clique em Personalizar Faixa de Opções.\n3. Na coluna da direita, marque a caixa ao lado de Desenvolvedor.\n4. Clique em OK.\n\nPronto! Agora aparece uma nova aba no Excel chamada Desenvolvedor, com os botões de Gravar Macro, Editor VBA e outros recursos de programação.`,
          html: `<div class="es-sheet-box" style="max-width:500px;">
            <div class="es-sheet-titlebar">Arquivo → Opções → Personalizar Faixa de Opções</div>
            <table class="mini-sheet">
              <tr><th>Coluna da Direita</th><th>Marcar?</th></tr>
              <tr><td>Página Inicial</td><td>✓</td></tr>
              <tr><td>Inserir</td><td>✓</td></tr>
              <tr><td>Desenvolvedor</td><td>✅ marque esta!</td></tr>
              <tr><td>Fórmulas</td><td>✓</td></tr>
            </table>
            <div style="padding:8px;font-size:0.85em;color:#555;">Após marcar, clique OK — a aba Desenvolvedor aparece na faixa de opções.</div>
          </div>`,
          images: [
            { src: '../../assets/img/excel/a9/image4.png', caption: 'Passo 1 — o menu Arquivo aberto, com a opção Opções logo abaixo de "Informações". É por aqui que se libera a aba Desenvolvedor.' },
            { src: '../../assets/img/excel/a9/image1.png', caption: 'Passo 2 — dentro da janela Opções do Excel, a lista da esquerda com "Personalizar Faixa de Opções" selecionada.' },
            { src: '../../assets/img/excel/a9/image6.png', caption: 'Passo 3 — a coluna da direita com a lista de abas. A caixa de Desenvolvedor vem desmarcada: é ela que você precisa marcar.' },
            { src: '../../assets/img/excel/a9/image7.png', caption: 'Passo 4 — depois de clicar em OK, a aba Desenvolvedor passa a aparecer na faixa de opções, ao lado de Fórmulas e Dados.' }
          ]
        },
        {
          lessonNum: 9,
          heading: "9.3 Gravar a Primeira Macro",
          content: `A forma mais simples de criar uma Macro é gravar: o Excel observa cada passo que você faz e anota tudo para repetir depois.\n\nPASSO A PASSO:\n1. Vá à aba Desenvolvedor → clique em Gravar Macro.\n2. Dê um nome à Macro (ex: "FormatacaoCapiberica") — sem espaços.\n3. Escolha um atalho de teclado (opcional, ex: Ctrl+Shift+C).\n4. Clique em OK — o Excel começa a gravar.\n5. Faça as ações que quer automatizar (ex: formatar células, colorir cabeçalhos).\n6. Quando terminar, clique em Parar Gravação (aba Desenvolvedor).\n\nPara executar a Macro: aba Desenvolvedor → Macros → selecione a macro → Executar.\n\nDICA: A gravação tem uma limitação — ela só repete exatamente os mesmos passos. Para criar algo mais inteligente (decisões, repetições, memória), precisamos do Editor VBA.`,
          html: `<div class="fun-highlight">
            <strong>Os 3 estados de uma Macro:</strong><br>
            1️⃣ <strong>Gravando</strong> → Excel observa e anota cada clique<br>
            2️⃣ <strong>Parada</strong> → Macro salva, pronta para executar<br>
            3️⃣ <strong>Executando</strong> → Excel repete tudo automaticamente
          </div>
          <div class="es-sheet-box" style="max-width:420px;">
            <div class="es-sheet-titlebar">Diálogo "Gravar Macro"</div>
            <table class="mini-sheet">
              <tr><td>Nome:</td><td>FormatacaoCapiberica</td></tr>
              <tr><td>Atalho:</td><td>Ctrl+Shift+C</td></tr>
              <tr><td>Salvar em:</td><td>Esta Pasta de Trabalho</td></tr>
              <tr><td>Descrição:</td><td>Formata o cabeçalho da tabela</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 9,
          heading: "9.4 O Editor VBA (VBE) — O Laboratório do Programador",
          content: `O Editor VBA (VBE) é onde escrevemos e editamos o código das macros. É o "laboratório" do programador — uma tela separada do Excel onde escrevemos instruções em VBA.\n\nCOMO ABRIR:\n• Atalho: Alt + F11\n• Ou: Aba Desenvolvedor → Visual Basic\n\nDENTRO DO VBE:\n• Painel Esquerdo (Project Explorer): mostra as pastas e módulos do projeto.\n• Janela de Código: onde digitamos o código (Sub...End Sub).\n• Menu Ferramentas → Referências: bibliotecas extras (não vamos usar agora).\n\nPara inserir um módulo novo: clique com o botão direito no Project Explorer → Inserir → Módulo.\n\nO primeiro programa que vamos escrever é um Sub que exibe uma mensagem na tela — o "Olá Mundo" do VBA.`,
          html: `<div class="es-sheet-box" style="max-width:540px;">
            <div class="es-sheet-titlebar">Editor VBA — Estrutura</div>
            <table class="mini-sheet">
              <tr><th>Painel</th><th>O que mostra</th></tr>
              <tr><td>Project Explorer (esquerda)</td><td>VBAProject → Módulos → Module1</td></tr>
              <tr><td>Janela de Código (direita)</td><td>Sub OlaMundo() ... End Sub</td></tr>
              <tr><td>Propriedades (abaixo)</td><td>Nome do módulo, nome do formulário</td></tr>
            </table>
          </div>
          <div class="fun-highlight">
            <strong>Seu primeiro código VBA:</strong><br>
            <code>Sub OlaMundo()</code><br>
            <code>&nbsp;&nbsp;MsgBox "Olá, Capiberica!"</code><br>
            <code>End Sub</code><br>
            <br>
            Execute com F5 ou botão ▶️ — aparece uma caixa de mensagem!
          </div>`,
          images: [
            { src: '../../assets/img/excel/a9/image3.png', caption: 'O Editor VBA (VBE) aberto com Alt+F11: à esquerda o Project Explorer, à direita a Janela de Código — a parte branca onde vamos digitar o programa.' },
            { src: '../../assets/img/excel/a9/image12.png', caption: 'Criando o módulo: botão direito em VBAProject → Inserir → Módulo. O Module1 passa a aparecer na pasta Módulos e uma janela de código em branco se abre para receber as instruções.' }
          ]
        },
        {
          lessonNum: 9,
          heading: "9.5 Sub-rotinas — Seu Primeiro Programa em VBA",
          content: `Agora que o Editor VBA está aberto, vamos escrever o "Olá Mundo" do Capiberica — o primeiro programa que qualquer pessoa escreve ao aprender uma nova linguagem.\n\nPASSO A PASSO:\n1. No painel esquerdo (Project Explorer), clique com o botão direito no nome do seu arquivo.\n2. Selecione Inserir → Módulo. Uma janela branca se abre à direita.\n3. No painel Propriedades (abaixo à esquerda), renomeie o módulo (ex: ModHelloWorld).\n4. Digite o código abaixo na janela de Código:\n\nSub MeuPrimeiroPrograma()\n    MsgBox "Olá! Eu sou o Capiberica e estou programando no VBA!"\nEnd Sub\n\nCOMO EXECUTAR:\n• Clique dentro do código e aperte F5.\n• Ou: aba Desenvolvedor → Macros → selecione MeuPrimeiroPrograma → Executar.\n\nUma caixa de mensagem aparece com o texto do Capiberica! 🎉\n\nO QUE ACONTECEU?\n• Sub e End Sub delimitam uma sub-rotina (um "pedaço de programa") — tudo entre eles é executado quando você manda rodar.\n• MsgBox exibe uma caixa de mensagem — o jeito mais simples de ver que o código funcionou.`,
          html: `<div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Código: MeuPrimeiroPrograma</div>
            <div style="padding:10px 14px;font-family:'Courier New',monospace;font-size:0.9em;background:#F8FAFC;line-height:1.7;">
              <span style="color:#7C3AED;">Sub</span> <span style="color:#2563EB;">MeuPrimeiroPrograma</span>()<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#7C3AED;">MsgBox</span> "Olá! Eu sou o Capiberica e estou programando no VBA!"<br>
              <span style="color:#7C3AED;">End Sub</span>
            </div>
          </div>
          <div class="fun-highlight">
            <strong>💡 O que aconteceu?</strong><br>
            <code>Sub</code> e <code>End Sub</code> delimitam a <strong>sub-rotina</strong>. O <code>MsgBox</code> exibe a caixa de mensagem — F5 executa.
          </div>`,
          images: [
            { src: '../../assets/img/excel/a9/image14.png', caption: 'Passo 1 — botão direito no nome do arquivo dentro do Project Explorer: é desse menu que sai o comando de inserção de módulo.' },
            { src: '../../assets/img/excel/a9/image11.png', caption: 'Passo 2 — o menu com Inserir → Módulo. Depois de confirmar, o Module1 já aparece na pasta Módulos.' },
            { src: '../../assets/img/excel/a9/image8.png', caption: 'Passo 3 — no painel Propriedades (embaixo à esquerda), o campo (Name) mostra Module1: troque por um nome mais claro, como ModHelloWorld.' },
            { src: '../../assets/img/excel/a9/image16.png', caption: 'Passo 4 — o código digitado na Janela de Código, com Sub no começo e End Sub no fim delimitando a sub-rotina.' },
            { src: '../../assets/img/excel/a9/image5.png', caption: 'Resultado — ao apertar F5, a sub-rotina roda e a caixa de mensagem (MsgBox) aparece com o texto do Capiberica. É a prova de que o programa funcionou.' }
          ]
        },
        {
          lessonNum: 9,
          heading: "9.6 Resumo da Aula — Macros, VBA e a Sub-rotina do Capiberica",
          content: `PARA FIXAR O APRENDIZADO:\n• Macros são sequências de ações gravadas no Excel que o computador repete automaticamente (robô auxiliar).\n• VBA (Visual Basic for Applications) é a linguagem de programação do Excel — permite criar comandos além da gravação simples.\n• A aba Desenvolvedor (Arquivo → Opções → Personalizar Faixa de Opções → marcar Desenvolvedor) libera os botões de gravação e do Editor VBA.\n• Gravar Macro: Desenvolvedor → Gravar Macro → nome → OK → fazer ações → Parar Gravação → Macros → Executar.\n• Editor VBA (Alt+F11 ou Desenvolvedor → Visual Basic): painel Project Explorer (esquerda) + Janela de Código (direita) + Propriedades (abaixo) + Inserir → Módulo.\n• Sub-rotina: bloco de código com nome entre Sub e End Sub.\n• MsgBox: exibe uma caixa de mensagem — o "Hello World" do VBA, executado com F5.\n\n🔒 REGRA DE OURO:\nCom a aba Desenvolvedor, a gravação de macros e o Editor VBA (VBE), você montou a base da automação do Excel. Na Aula 10, vamos avançar para objetos, variáveis, condicionais e laços de repetição.`
        },
        {
          lessonNum: 10,
          chapter: "AULA 10: VBA AVANÇADO — OBJETOS, VARIÁVEIS, CONDICIONAIS, LOOPS E MINI-PROJETO",
          heading: "10.0 FASE 0 — Antes de Começar: Revisão-relâmpago da Aula 09 e o plano dos 6 passos",
          content: `Você chegou ao "nível profissional" do VBA! Na Aula 09, o Capiberica aprendeu a gravar Macros, conheceu o Editor VBA (VBE) e escreveu sua primeira sub-rotina que exibe a famosa caixa de mensagem "Hello World" com MsgBox — a porta de entrada para a programação de verdade.\n\nNesta Aula 10, o herói vai deixar de repetir passos e passar a PROGRAMAR de verdade: vai manipular as peças do Excel (objetos), guardar valores na memória (variáveis), tomar decisões (condicionais), repetir tarefas (loops) e fechar com um Mini-Projeto que junta tudo: o Controlador do Capiberica!\n\nA jornada tem 6 passos — e o primeiro deles você conclui ao revisar a Aula 09 aqui embaixo e marcar o check:\n1. Revisar a Aula 09 e planejar — relembrar a sub-rotina Hello World e entender o roteiro\n2. Objetos — conhecer Workbook, Worksheet e Range (planilhas, intervalos e cores)\n3. Variáveis — declarar e usar variáveis com Dim (etiquetas da memória)\n4. Condicionais — decisões com If...Then...Else (SE/ENTÃO/SENÃO)\n5. Loops — repetições automáticas com For...Next\n6. Mini-Projeto — o Controlador do Capiberica juntando tudo + MsgBox final\n\nCada degrau tem um check no fim da fase — marque como concluído só depois de terminar a leitura e os exercícios daquela fase.\nNa Aula 11, começamos o Projeto Vendas — a aplicação desses conhecimentos.`,
          html: `<div style="margin:16px 0;">
            <p style="text-align:center;font-weight:700;font-size:1.1em;">🗺️ O ROTEIRO DOS 6 PASSOS</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:12px 0;">
              <span style="background:#E8F5E9;color:#1B5E20;padding:6px 12px;border-radius:16px;font-size:0.9em;">1. Revisar Aula 09</span>
              <span style="background:#E3F2FD;color:#0D47A1;padding:6px 12px;border-radius:16px;font-size:0.9em;">2. Objetos</span>
              <span style="background:#FFF3E0;color:#E65100;padding:6px 12px;border-radius:16px;font-size:0.9em;">3. Variáveis</span>
              <span style="background:#F3E5F5;color:#4A148C;padding:6px 12px;border-radius:16px;font-size:0.9em;">4. Condicionais</span>
              <span style="background:#E0F7FA;color:#006064;padding:6px 12px;border-radius:16px;font-size:0.9em;">5. Loops</span>
              <span style="background:#FCE4EC;color:#880E4F;padding:6px 12px;border-radius:16px;font-size:0.9em;">6. Mini-Projeto</span>
            </div>
            <p style="text-align:center;margin-top:8px;font-size:0.9em;color:#555;">Cada degrau tem um check no fim da fase — o passo 1 (revisar) fica no rodapé desta FASE 0.</p>
          </div>
          <div class="fun-highlight">
            <strong>🔄 Revisão-relâmpago — onde paramos na Aula 09:</strong><br>
            • Comando <code>MsgBox</code> → exibe uma caixa de mensagem<br>
            • Bloco <code>Sub ... End Sub</code> → delimitam uma sub-rotina<br>
            • F5 → executa o código dentro do Editor VBA<br>
            • Ideia: "Hello World" do Capiberica funcionando!
          </div>`
        },
        {
          lessonNum: 10,
          heading: "10.1 Objetos — Planilhas, Intervalos e Cores",
          content: `Antes de escrever uma linha de código, vamos acertar a linguagem. Você já usa estas três coisas todos os dias no Excel — só não sabia o nome técnico. Pense assim:\n\n• Workbook = o CADERNO. É o arquivo inteiro (.xlsx) que você abriu, com todas as abas dentro.\n• Worksheet = a PÁGINA do caderno. É a aba que você vê embaixo (Vendas, Dados, Análise...).\n• Range = o TRECHO da página. Pode ser uma célula só (B5) ou um bloco inteiro (F3:I3).\n\nO QUE CADA UM VIRA NO CÓDIGO:\n• ActiveWorkbook = o caderno que está aberto AGORA.\n• ActiveSheet = a aba que está selecionada AGORA.\n• Range("F3:I3") = o trecho de células de F3 até I3.\n\n⚠️ O ERRO MAIS COMUM DE INICIANTE: o código sempre age na planilha ativa (ActiveSheet). Se o resultado não apareceu onde você esperava, quase sempre a aba errada estava selecionada quando você apertou F5. É exatamente por isso que, nas Aulas 11 a 13, o projeto avisa qual aba está ativa antes de gravar.\n\nPASSO A PASSO — OBJETO WORKBOOK (adicionar planilha e salvar):\n1. No Editor VBA (Alt+F11), insira um Módulo novo (Inserir → Módulo).\n2. Escreva a sub-rotina abaixo.\n3. Execute com F5: uma nova planilha (Sheet2) é criada e o arquivo é salvo automaticamente.\n\nSub AddSheetAndSaveWorkbook()\n    ' Adiciona uma nova planilha à pasta de trabalho ativa\n    ActiveWorkbook.Sheets.Add\n    ' Salva a pasta de trabalho\n    ActiveWorkbook.Save\nEnd Sub\n\nComentários começam com ' (aspas simples) e não alteram o código — servem para documentar.\n\nOBJETO WORKSHEET (renomear a planilha ativa):\n1. Crie outra sub-rotina.\n2. Ao executar, o nome da aba muda para "Sales Report".\n\nSub RenameActiveSheet()\n    ' Renomeia a planilha ativa\n    ActiveSheet.Name = "Sales Report"\nEnd Sub\n\nOBJETO RANGE (colorir um intervalo):\n1. Agora vamos selecionar células e pintá-las.\n2. Ao executar, o grupo F3:I3 ganha fundo verde-claro.\n\nSub FormatRange()\n    ' Seleciona o intervalo de F3 até I3\n    Range("F3:I3").Select\n    ' Altera a cor de fundo do intervalo selecionado para verde\n    Selection.Interior.Color = RGB(101, 255, 143)\nEnd Sub\n\n🛠️ MÃOS À OBRA — UM FORMULÁRIO COM BOTÃO "SALVAR EDIÇÃO"\nAgora que você distingue a pasta, a aba e o trecho de células, vamos juntar tudo em uma coisa só: um formulário de cadastro com 3 campos e um botão.\n\nNa aba Cadastro, monte o formulário da tabela ao lado. Os três campos ficam em B3 (Cliente), B4 (Data) e B5 (Valor). O botão fica em B6 e é um Botão de Formulário (Desenvolvedor → Inserir → Botão).\n\nO QUE O VBA FAZ QUANDO VOCÊ CLICA NO BOTÃO:\n1. Validação 1 — o Cliente (B3) está preenchido? Se estiver vazio, avisa, seleciona a célula e PARA.\n2. Validação 2 — a Data (B4) é uma data de verdade? (IsDate) Se não for, avisa e PARA.\n3. Validação 3 — o Valor (B5) é um número? (IsNumeric) Se não for, avisa e PARA.\n4. Só depois dos três testes: grava a linha na tabela, limpa o formulário e salva a pasta.\n\nÉ o mesmo esquema das Aulas 11 a 13: validar, gravar, salvar. Você já está construindo o projeto final.\n\nASSIM SE FAZ:\n1. Abra o Editor VBA com Alt + F11 e vá em Inserir → Módulo.\n2. Cole a sub-rotina SalvarEdicao abaixo (ela valida, grava e salva).\n3. Volte ao Excel, clique com o botão direito no Botão "Salvar Edição" → Atribuir Macro → escolha SalvarEdicao.\n4. Teste: deixe o Cliente vazio e clique (o Excel avisa). Depois preencha tudo e clique (a linha é gravada e a pasta é salva).\n\nAs imagens abaixo mostram exatamente esses três passos acontecendo no Excel: adicionar e salvar planilha, renomear e pintar um intervalo.`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Os 3 objetos principais do VBA</div>
            <table class="mini-sheet">
              <tr><th>Objeto</th><th>O que representa</th><th>Exemplo</th></tr>
              <tr><td><strong>Workbook</strong></td><td>O arquivo inteiro do Excel</td><td>ActiveWorkbook.Sheets.Add</td></tr>
              <tr><td><strong>Worksheet</strong></td><td>Uma aba da planilha</td><td>ActiveSheet.Name = "Vendas"</td></tr>
              <tr><td><strong>Range</strong></td><td>Célula ou grupo de células</td><td>Range("F3:I3").Select</td></tr>
            </table>
          </div>
          <div class="es-sheet-box" style="max-width:620px;">
            <div class="es-sheet-titlebar">Aba "Cadastro" — o formulário (linhas 2 a 6)</div>
            <table class="mini-sheet" style="font-size:12.5px;">
              <tr><th></th><th>A</th><th>B</th></tr>
              <tr><td>2</td><td><strong>CLIENTE</strong></td><td>(obrigatório)</td></tr>
              <tr><td>3</td><td><strong>DATA</strong></td><td>(obrigatória)</td></tr>
              <tr><td>4</td><td><strong>VALOR</strong></td><td>(obrigatório, R$)</td></tr>
              <tr><td>5</td><td colspan="2" style="text-align:center; padding:10px;">
                <span style="display:inline-block; background:#217346; color:#fff; font-weight:700; font-size:12.5px; padding:7px 18px; border-radius:6px;">💾 Salvar Edição</span>
              </td></tr>
            </table>
            <div style="padding:8px 12px;font-size:12.5px;color:#555;line-height:1.6;">Os três campos ficam em <strong>B3</strong> (Cliente), <strong>B4</strong> (Data) e <strong>B5</strong> (Valor). O botão fica em <strong>B6</strong>.</div>
          </div>
          <div class="es-sheet-box" style="max-width:620px;">
            <div class="es-sheet-titlebar">Código: SalvarEdicao — validar, gravar e salvar</div>
            <div style="padding:12px 16px;font-family:'Courier New',monospace;font-size:12px;background:#F8FAFC;line-height:1.75;white-space:pre-wrap;word-break:break-word;">Sub SalvarEdicao()
    <span style="color:#64748B;">' === A PASTA e A ABA (Workbook / Worksheet) ===</span>
    Dim wb As Workbook
    Dim ws As Worksheet
    Dim celula As Range
    Dim proximaLinha As Long
    Set wb = ThisWorkbook
    Set ws = wb.Worksheets("Cadastro")

    <span style="color:#64748B;">' === VALIDAÇÃO 1: o Cliente é obrigatório? ===</span>
    Set celula = ws.Range("B3")
    If IsEmpty(celula.Value) Or Trim(celula.Value) = "" Then
        MsgBox "Preencha o Cliente!", vbExclamation
        celula.Select: Exit Sub
    End If

    <span style="color:#64748B;">' === VALIDAÇÃO 2: a Data é uma data de verdade? ===</span>
    Set celula = ws.Range("B4")
    If Not IsDate(celula.Value) Then
        MsgBox "A Data precisa ser uma data valida!", vbExclamation
        celula.Select: Exit Sub
    End If

    <span style="color:#64748B;">' === VALIDAÇÃO 3: o Valor é um número? ===</span>
    Set celula = ws.Range("B5")
    If Not IsNumeric(celula.Value) Then
        MsgBox "O Valor precisa ser um numero!", vbExclamation
        celula.Select: Exit Sub
    End If

    <span style="color:#64748B;">' === GRAVA a linha e SALVA a pasta ===</span>
    proximaLinha = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1
    ws.Cells(proximaLinha, 1).Value = proximaLinha - 2
    ws.Cells(proximaLinha, 2).Value = ws.Range("B3").Value
    ws.Cells(proximaLinha, 3).Value = ws.Range("B4").Value
    ws.Cells(proximaLinha, 4).Value = ws.Range("B5").Value
    ws.Range("B3:B5").ClearContents
    wb.Save
    MsgBox "Edicao salva!", vbInformation
End Sub</div>
          </div>
          <div class="fun-highlight">
            <strong>🔎 LEIA O CÓDIGO COMO UMA FRASE:</strong> "pegue a <em>pasta</em> (wb), pegue a <em>aba Cadastro</em> (ws), olhe a <em>célula B3</em> (celula)… se o Cliente estiver vazio, avise e pare. Se a Data não for data, avise e pare. Se o Valor não for número, avise e pare. Só passando pelos três testes, a linha é gravada, o formulário é limpo e a pasta é salva."
          </div>
          <div class="fun-highlight">
            <strong>💡 DICA:</strong> todo comando que começa com ' (aspas simples) é só um <strong>comentário</strong> — não executa nada, serve para explicar o código para quem vai ler depois (inclusive você mesmo daqui a seis meses).
          </div>`,
          imagesWide: true,
          images: [
            { src: '../../assets/img/excel/a10/image9.png', caption: 'WORKBOOK (o arquivo inteiro) — a sub-rotina AddSheetAndSaveWorkbook executa ActiveWorkbook.Sheets.Add e a pasta de trabalho ganha uma aba nova, a Sheet2.' },
            { src: '../../assets/img/excel/a10/image15.png', caption: 'WORKBOOK — ActiveWorkbook.Save grava o arquivo em seguida, sem você precisar passar por Arquivo → Salvar. Note que o botão Salvar da barra de título ficou com a marca de alteração aplicada.' },
            { src: '../../assets/img/excel/a10/image13.png', caption: 'WORKBOOK (continuação) — o arquivo já atualizado no disco, com a nova aba pronta para receber os dados.' },
            { src: '../../assets/img/excel/a10/image10.png', caption: 'WORKSHEET (uma aba) — ActiveSheet.Name = "Sales Report" troca o nome da aba ativa; o título da aba passa a ler Sales Report.' },
            { src: '../../assets/img/excel/a10/image2.png', caption: 'RANGE (um grupo de células) — Range("F3:I3").Select escolhe o intervalo de F3 até I3 e Selection.Interior.Color pinta esse trecho de verde-claro.' }
          ]
        },
        {
          lessonNum: 10,
          heading: "10.2 Variáveis — Etiquetas da Memória",
          content: `Variáveis são "caixinhas" na memória do computador onde o programa guarda valores para usar depois. Em VBA, declaramos uma variável com a palavra-chave Dim (de "dimensão"), seguida do nome e do tipo de dado.\n\nSINTAXE:\nDim nomeDaVariavel As Tipo\n\nTIPOS MAIS COMUNS:\n• String → texto (ex: "Capiberica")\n• Integer / Long → números inteiros (ex: 10)\n• Double → números com casas decimais (ex: 15.75)\n• Boolean → Verdadeiro/Falso (True ou False)\n\nPASSO A PASSO:\n1. Em um Módulo novo, escreva esta sub-rotina:\n\nSub DeclaraVariaveis()\n    Dim nome As String\n    Dim estoque As Integer\n    Dim preco As Double\n    Dim temDesconto As Boolean\n\n    nome = "Capiberica"\n    estoque = 24\n    preco = 19.90\n    temDesconto = True\n\n    MsgBox nome & " tem " & estoque & " itens em estoque."\nEnd Sub\n\n2. Execute com F5 e veja a caixa de mensagem montada com os valores das variáveis.\n\nREGRAS PARA NOMEAR VARIÁVEIS:\n• O nome não pode ultrapassar 255 caracteres.\n• Não pode conter espaços.\n• Não pode começar com número.\n• Não use pontos finais dentro do nome.\n\nO operador & (e-comercial) "cola" textos e valores — é chamado de concatenação.`,
          html: `<div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Declarando variáveis com Dim</div>
            <div style="padding:10px 14px;font-family:'Courier New',monospace;font-size:0.9em;background:#F8FAFC;line-height:1.7;">
              <span style="color:#7C3AED;">Dim</span> nome <span style="color:#7C3AED;">As</span> <span style="color:#2563EB;">String</span><br>
              <span style="color:#7C3AED;">Dim</span> estoque <span style="color:#7C3AED;">As</span> <span style="color:#2563EB;">Integer</span><br>
              <span style="color:#7C3AED;">Dim</span> preco <span style="color:#7C3AED;">As</span> <span style="color:#2563EB;">Double</span><br>
              <span style="color:#7C3AED;">Dim</span> temDesconto <span style="color:#7C3AED;">As</span> <span style="color:#2563EB;">Boolean</span>
            </div>
            <div style="padding:8px;font-size:0.85em;color:#555;">Variáveis guardam valores na memória para o programa usar depois.</div>
          </div>
          <div class="fun-highlight">
            <strong>💡 Regras de nome (memorize):</strong><br>
            • até 255 caracteres • sem espaços • não começa com número • sem pontos finais
          </div>`
        },
        {
          lessonNum: 10,
          heading: "10.3 Condicionais — Decisões com If...Then...Else",
          content: `Um programa não só executa comandos em sequência: ele também TOMA DECISÕES. No VBA, a estrutura If...Then...Else (SE...ENTÃO...SENÃO) decide qual bloco de código rodar conforme uma condição.\n\nSINTAXE:\nIf condicao Then\n    ' código se a condição for verdadeira\nElse\n    ' código se a condição for falsa\nEnd If\n\nOPERADORES DE COMPARAÇÃO:\n• > maior que • < menor que • = igual a\n• >= maior ou igual • <= menor ou igual\n• <> diferente de\n\nOPERADORES LÓGICOS:\n• And (E) → as duas condições precisam ser verdadeiras\n• Or (OU) → basta uma condição ser verdadeira\n• Not (NÃO) → inverte o resultado\n\nPASSO A PASSO:\n1. Escreva esta sub-rotina em um Módulo novo:\n\nSub AvaliaEstoque()\n    Dim produto As String\n    Dim quantidade As Integer\n\n    produto = "Teclado"\n    quantidade = 12\n\n    If quantidade <= 5 Then\n        MsgBox produto & ": estoque CRÍTICO. Repor agora!"\n    ElseIf quantidade <= 15 Then\n        MsgBox produto & ": estoque BAIXO. Considere repor."\n    Else\n        MsgBox produto & ": estoque OK."\n    End If\nEnd Sub\n\n2. Execute com F5 e veja a decisão sendo tomada conforme o valor da variável.\n\nCOMO LER O CÓDIGO (traduzindo cada linha):\n• If quantidade <= 5 Then — "SE a quantidade for menor ou igual a 5, ENTÃO..."\n• a linha MsgBox logo abaixo — é o que acontece quando a condição é verdadeira.\n• ElseIf quantidade <= 15 Then — "SENÃO SE a quantidade for menor ou igual a 15..."\n• Else — "SENÃO". Aparece quando nenhuma das condições acima foi verdadeira.\n• End If — "FIM DA DECISÃO". Obrigatório: sem ele o VBA nem compila o código.\n\nAtenção na ordem: o VBA testa de cima para baixo e PARA no primeiro teste verdadeiro. Por isso "quantidade <= 5" vem antes de "quantidade <= 15": se invertesse, tudo que fosse menor ou igual a 15 cairia no primeiro If e o segundo nunca chegaria a ser avaliado.\n\nEXEMPLO COM CÉLULAS REAIS (o mesmo raciocínio do Projeto Vendas):\nNo exemplo anterior o valor estava escrito dentro do código (quantidade = 12). Na prática o número vem de uma célula. Suponha esta mini-tabela na planilha:\n\nA2: Teclado   B2: 12\nA3: Mouse     B3: 4\nA4: Monitor   B4: 30\n\nSub AvaliarEstoqueReal()\n    Dim linha As Integer\n    Dim nome As String\n    Dim quantidade As Integer\n\n    For linha = 2 To 4\n        nome = Cells(linha, 1).Value          ' lê a coluna A (produto)\n        quantidade = Cells(linha, 2).Value   ' lê a coluna B (quantidade)\n\n        If quantidade <= 5 Then\n            Cells(linha, 3).Value = "CRÍTICO - repor agora"\n            Cells(linha, 3).Interior.Color = RGB(255, 120, 120)\n        ElseIf quantidade <= 15 Then\n            Cells(linha, 3).Value = "BAIXO - considere repor"\n            Cells(linha, 3).Interior.Color = RGB(255, 230, 100)\n        Else\n            Cells(linha, 3).Value = "OK"\n            Cells(linha, 3).Interior.Color = RGB(140, 255, 160)\n        End If\n    Next\nEnd Sub\n\nO que muda em relação ao exemplo com MsgBox: em vez de SÓ mostrar um aviso na tela, o programa ESCREVE o resultado de volta na planilha, na coluna C, e PINTA a célula de aviso com a cor correspondente. É exatamente esse padrão (decidir + escrever + avisar) que a Aula 11 usa para gravar a venda no formulário.\n\nVALIDAÇÃO DE ENTRADA:\nIf IsNumeric(Range("A1").Value) And Range("A1").Value > 0 Then\n    MsgBox "Valor válido na célula A1!"\nElse\n    MsgBox "Digite um número maior que zero em A1."\nEnd If\n\nIsNumeric verifica se o valor é um número — ótimo para validar o que o usuário digita.`,
          html: `<div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Estrutura If...Then...Else</div>
            <div style="padding:10px 14px;font-family:'Courier New',monospace;font-size:0.9em;background:#F8FAFC;line-height:1.7;">
              <span style="color:#7C3AED;">If</span> quantidade &lt;= 5 <span style="color:#7C3AED;">Then</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;MsgBox "Estoque CRÍTICO!"<br>
              <span style="color:#7C3AED;">ElseIf</span> quantidade &lt;= 15 <span style="color:#7C3AED;">Then</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;MsgBox "Estoque BAIXO."<br>
              <span style="color:#7C3AED;">Else</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;MsgBox "Estoque OK."<br>
              <span style="color:#7C3AED;">End If</span>
            </div>
            <div style="padding:8px;font-size:0.85em;color:#555;">O programa escolhe um caminho conforme a condição.</div>
          </div>
          <div class="fun-highlight">
            <strong>🧠 Condições compostas:</strong> use <code>And</code> (E), <code>Or</code> (OU) e <code>Not</code> (NÃO) para testar mais de uma coisa ao mesmo tempo.
          </div>
          <div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Exemplo com células reais — o que o VBA faz na planilha</div>
            <table class="mini-sheet">
              <tr><th>A</th><th>B</th><th>C</th></tr>
              <tr><th>Produto</th><th>Quantidade</th><th>Decisão (escrita pelo código)</th></tr>
              <tr><td>Teclado</td><td>12</td><td style="background:#FFE664;">BAIXO - considere repor</td></tr>
              <tr><td>Mouse</td><td>4</td><td style="background:#FF7878;color:#fff;">CRÍTICO - repor agora</td></tr>
              <tr><td>Monitor</td><td>30</td><td style="background:#8CFFA0;">OK</td></tr>
            </table>
            <div style="padding:8px;font-size:0.85em;color:#555;">A coluna C começa vazia. O VBA percorre as linhas 2 a 4, decide conforme o número da coluna B, escreve a decisão em C e pinta a célula com a cor do nível de estoque.</div>
          </div>`
        },
        {
          lessonNum: 10,
          heading: "10.4 Loops — Repetições com For...Next",
          content: `Repetir é a grande vantagem do computador: o VBA tem estruturas que executam o mesmo bloco de código várias vezes. A mais usada é o For...Next, que repete um número de vezes definido.\n\nSINTAXE:\nFor contador = inicio To fim\n    ' código que se repete\nNext\n\nPASSO A PASSO:\n1. Escreva esta sub-rotina:\n\nSub NumeraLinhas()\n    Dim linha As Integer\n\n    For linha = 1 To 10\n        Cells(linha, 1).Value = "Linha " & linha\n    Next\n\n    MsgBox "Numeração concluída até a linha 10!"\nEnd Sub\n\n2. Execute com F5: a coluna A das linhas 1 a 10 é preenchida automaticamente.\n\nO que aconteceu?\n• A variável linha começa em 1 e, a cada volta, Some 1 até chegar em 10.\n• Cells(linha, 1) representa a célula da linha atual na coluna 1 (A).\n• Ao final, um MsgBox confirma a conclusão.\n\nVARIANTE — Do While (repete enquanto a condição for verdadeira):\nDim i As Integer\n\ni = 1\nDo While i <= 5\n    Cells(i, 2).Value = i * 2\n    i = i + 1\nLoop\n\nAqui, a célula B1..B5 recebe o dobro de i. Cuidado para a condição virar falsa em algum momento — senão o loop roda para sempre (loop infinito)!`,
          html: `<div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">For...Next — repetindo 10 vezes</div>
            <div style="padding:10px 14px;font-family:'Courier New',monospace;font-size:0.9em;background:#F8FAFC;line-height:1.7;">
              <span style="color:#7C3AED;">For</span> linha = 1 <span style="color:#7C3AED;">To</span> 10<br>
              &nbsp;&nbsp;&nbsp;&nbsp;Cells(linha, 1).Value = "Linha " &amp; linha<br>
              <span style="color:#7C3AED;">Next</span>
            </div>
            <div style="padding:8px;font-size:0.85em;color:#555;">A variável "linha" avança de 1 até 10, preenchendo células.</div>
          </div>
          <table class="mini-sheet" style="max-width:260px;">
            <tr><th>A</th></tr>
            <tr><td>Linha 1</td></tr>
            <tr><td>Linha 2</td></tr>
            <tr><td style="color:#9CA3AF;">...</td></tr>
            <tr><td>Linha 10</td></tr>
          </table>`
        },
        {
          lessonNum: 10,
          heading: "10.5 Mini-Projeto — O Controlador do Capiberica",
          content: `Chegou a hora de juntar TUDO: objetos (Range/Cells), variáveis (Dim), condicionais (If) e loops (For...Next). O Mini-Projeto abaixo lê uma lista de quantidades no intervalo A2:A6 e pinta cada linha conforme o nível de estoque, com uma mensagem final.\n\nPASSO A PASSO:\n1. No Editor VBA, insira um Módulo novo e digite o código abaixo.\n2. Antes de executar, digite em A2:A6 da planilha: 3, 10, 20, 6, 15.\n3. Execute com F5 e veja as cores + a caixa de mensagem final.\n\nSub ControladorCapiberica()\n    Dim linha As Integer\n    Dim quantidade As Integer\n\n    For linha = 2 To 6\n        quantidade = Cells(linha, 1).Value\n\n        If quantidade <= 5 Then\n            ' Crítico: fundo vermelho\n            Cells(linha, 1).Interior.Color = RGB(255, 120, 120)\n        ElseIf quantidade <= 10 Then\n            ' Baixo: fundo amarelo\n            Cells(linha, 1).Interior.Color = RGB(255, 230, 100)\n        Else\n            ' OK: fundo verde\n            Cells(linha, 1).Interior.Color = RGB(140, 255, 160)\n        End If\n    Next\n\n    MsgBox "Controle do Capiberica finalizado! Confira as cores.", vbInformation, "Mini-Projeto Aula 10"\nEnd Sub\n\nO QUE VOCÊ APRENDEU COM ISSO:\n• Range/Cells captura as células (objeto).\n• Dim guarda o valor lido (variável).\n• If pinta conforme a regra (condicional).\n• For...Next percorre todas as linhas (loop).\n• MsgBox encerra informando o resultado (comunicação).\n\nEste mini-projeto é um "pré-treino" para o Projeto Vendas das Aulas 11 a 13!`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Controlador do Capiberica — resultado esperado</div>
            <table class="mini-sheet">
              <tr><th>A</th><th>Leitura da regra (coluna de apoio, não é célula do Excel)</th></tr>
              <tr><th>Quantidade</th><th>Cor aplicada</th></tr>
              <tr><td style="background:#FF7878;color:#fff;">3</td><td>≤ 5 → vermelho (crítico)</td></tr>
              <tr><td style="background:#FFE664;">10</td><td>≤ 10 → amarelo (baixo)</td></tr>
              <tr><td style="background:#8CFFA0;">20</td><td>&gt; 10 → verde (ok)</td></tr>
              <tr><td style="background:#FFE664;">6</td><td>≤ 10 → amarelo (baixo)</td></tr>
              <tr><td style="background:#8CFFA0;">15</td><td>&gt; 10 → verde (ok)</td></tr>
            </table>
          </div>
          <div class="fun-highlight">
            <strong>🏁 Pronto para o Projeto Vendas!</strong> Este mini-projeto combina objetos + variáveis + condicionais + loops. Nas Aulas 11–13 você aplica tudo num sistema profissional.
          </div>`
        },
        {
          lessonNum: 10,
          heading: "10.6 Resumo da Aula — VBA Avançado",
          content: `PARA FIXAR O APRENDIZADO:\n• Objetos: as peças que o VBA manipula — Workbook (arquivo), Worksheet (planilha) e Range (células). Ex.: ActiveWorkbook.Sheets.Add, ActiveSheet.Name = "Sales Report", Range("F3:I3") + Selection.Interior.Color = RGB(...).\n• Variáveis: guardam valores com Dim nome As Tipo (String, Integer/Long, Double, Boolean); nome sem espaços, sem pontos, sem começar com número, até 255 caracteres.\n• Condicionais: If...Then...ElseIf...Else...End If decidem caminhos; comparadores (<, >, =, <=, >=, <>); operadores lógicos And, Or, Not.\n• Loops: For contador = inicio To fim ... Next percorrem repetições; Cells(linha, coluna) acessa células dinamicamente; Do While...Loop repete enquanto a condição valer.\n• Mini-Projeto Controlador do Capiberica: combina Range/Cells (objeto) + Dim (variável) + If (condicional) + For...Next (loop) + MsgBox (saída).\n\n🔒 REGRA DE OURO:\nQuem domina objetos, variáveis, condicionais e loops DOMINA a programação em VBA. Você agora tem a base para automatizar planilhas de verdade — e o Projeto Vendas (Aulas 11–13) vai usar tudo isso!`
        },
        {
          lessonNum: 11,
          chapter: "AULA 11: PROJETO VENDAS — ESTRUTURAÇÃO (PARTE 1) — O SISTEMA DE CONTROLE DE VENDAS DA TECH SOLUTIONS",
          heading: "11.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `Nesta aula você monta a estrutura do banco de dados do Sistema de Controle de Vendas da Tech Solutions: as 4 planilhas do arquivo, as listas de apoio e a base de vendas pronta para receber os lançamentos. Este é o início do Projeto Integrado — as Aulas 11, 12 e 13 constroem juntas um sistema completo.\n\nO caminho tem 7 passos — cada passo é uma fase da estruturação do projeto:\n1. Preparar o arquivo: renomear e criar as 4 planilhas (Dados_Vendas, Dashboard, Analise_Vendedor, Configuracoes)\n2. Montar as listas de apoio na planilha Configuracoes (vendedores, produtos e regiões)\n3. Criar os cabeçalhos e formatar a base de vendas (A1:H1)\n4. Aplicar Validação de Dados — listas suspensas automáticas\n5. Inserir fórmulas automáticas (N° da Venda com =LIN()-1 e Total com =F2*G2)\n6. Lançar os dados de exemplo da Tech Solutions\n7. Converter a base em Tabela do Excel (Ctrl+T) e nomear TabelaVendas\n\nCada degrau tem um check no fim da fase — marque como concluído só depois de terminar a leitura e os exercícios daquela fase. O próximo só é liberado depois que o anterior for finalizado.`,
          html: `<div class="fun-highlight">
            <strong>🎯 MISSÃO DA AULA 11:</strong> criar a fundação do Sistema de Controle de Vendas — planilhas organizadas, listas padronizadas e uma base de vendas estruturada com validação e fórmulas automáticas.
          </div>
          <div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">As 4 planilhas do Sistema (abas do arquivo)</div>
            <table class="mini-sheet">
              <tr><th>Planilha</th><th>Função no projeto</th></tr>
              <tr><td><strong>Dados_Vendas</strong></td><td>Base de lançamento de todas as vendas</td></tr>
              <tr><td><strong>Dashboard</strong></td><td>Painel com indicadores, resumo e gráfico</td></tr>
              <tr><td><strong>Analise_Vendedor</strong></td><td>Relatório por vendedor (Tabela Dinâmica)</td></tr>
              <tr><td><strong>Configuracoes</strong></td><td>Listas de apoio: vendedores, produtos, regiões</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 11,
          heading: "11.1 Preparação Inicial — As 4 Planilhas do Sistema",
          content: `Todo sistema começa pela organização do arquivo. Vamos criar uma Pasta de Trabalho nova e montar as 4 planilhas que vão compor o Sistema de Controle de Vendas.\n\nPASSO A PASSO:\n1. Abra o Excel e crie uma Pasta de Trabalho em branco.\n2. Na aba da planilha, clique com o botão direito sobre Planilha1 → Renomear e digite Dados_Vendas.\n3. Ainda com botão direito na aba → Mover ou Copiar (ou clique no + ao lado das abas) e crie as abas Configuracoes, Dashboard e Analise_Vendedor.\n4. Deixe a ordem das abas assim (da esquerda para a direita): Dados_Vendas · Dashboard · Analise_Vendedor · Configuracoes.\n5. Salve o arquivo como Controle_Vendas.xlsx (podemos salvar com macros no final do projeto, na Aula 13).\n\n✅ POR QUE ESSA ORGANIZAÇÃO?\n• A base de vendas fica separada do Dashboard (dado ≠ exibição).\n• As listas ficam numa aba de apoio, então as listas suspensas herdam os itens automaticamente.\n• A Analise_Vendedor será preenchida pela Tabela Dinâmica na Aula 12.`,
          html: `<div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Ordem das abas no arquivo</div>
            <table class="mini-sheet">
              <tr><th>#</th><th>Aba</th><th>Papel</th></tr>
              <tr><td>1</td><td>Dados_Vendas</td><td>Base de vendas</td></tr>
              <tr><td>2</td><td>Dashboard</td><td>Painel visual</td></tr>
              <tr><td>3</td><td>Analise_Vendedor</td><td>Tabela Dinâmica</td></tr>
              <tr><td>4</td><td>Configuracoes</td><td>Listas de apoio</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 11,
          heading: "11.2 Planilha Configuracoes — As Listas de Apoio",
          content: `As listas suspensas da base de vendas precisam de uma fonte de dados. Vamos montar na planilha Configuracoes três listas simples de apoio: Vendedores, Produtos e Regiões.\n\nPASSO A PASSO:\n1. Vá até a aba Configuracoes.\n2. Na coluna A (célula A1), digite o título VENDEDORES e abaixo os nomes: Ana Souza; Bruno Lima; Carla Mendes; Diego Ferraz; Elisa Rocha.\n3. Na coluna B (célula B1), digite PRODUTOS e abaixo: Notebook; Mouse Sem Fio; Teclado USB; Monitor LED; Impressora; Cadeira Gamer.\n4. Na coluna C (célula C1), digite REGIÕES e abaixo: Sudeste; Sul; Nordeste; Centro-Oeste; Norte.\n5. Selecione cada intervalo (cabeçalho + itens) e aplique Página Início → Formatar como Tabela, marcando "Minha tabela tem cabeçalhos".\n\n✅ DICA DE PROFISSIONAL:\nQuando as listas são Tabelas, os novos itens que você adicionar entram automaticamente nas listas suspensas da validação — sem retrabalho.`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Planilha Configuracoes — tabelas de apoio</div>
            <table class="mini-sheet">
              <tr><th>A</th><th>B</th><th>C</th></tr>
              <tr><th>VENDEDORES</th><th>PRODUTOS</th><th>REGIÕES</th></tr>
              <tr><td>Ana Souza</td><td>Notebook</td><td>Sudeste</td></tr>
              <tr><td>Bruno Lima</td><td>Mouse Sem Fio</td><td>Sul</td></tr>
              <tr><td>Carla Mendes</td><td>Teclado USB</td><td>Nordeste</td></tr>
              <tr><td>Diego Ferraz</td><td>Monitor LED</td><td>Centro-Oeste</td></tr>
              <tr><td>Elisa Rocha</td><td>Impressora</td><td>Norte</td></tr>
              <tr><td></td><td>Cadeira Gamer</td><td></td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 11,
          heading: "11.3 Planilha Dados_Vendas — Cabeçalhos e Formatação",
          content: `Agora vamos preparar a base de vendas. Na planilha Dados_Vendas, criamos a linha de cabeçalhos — a "espinha dorsal" de todo o sistema.\n\nPASSO A PASSO:\n1. Vá até a aba Dados_Vendas.\n2. Digite os cabeçalhos na linha 1, da célula A1 até H1.\n3. Selecione A1:H1 e aplique: texto em negrito, fundo verde Tech Solutions, fonte branca e centralizado.\n4. Ajuste a largura das colunas (clique duas vezes na borda entre as letras das colunas) para caber o conteúdo.\n\n💡 DICA:\nUse N° da Venda, Qtd e Total para as células de cálculo e Data com o formato data do Excel. A coluna Total será calculada por fórmula (Tópico 5) — não digite valores nela.`,
          html: `<div class="es-sheet-box" style="max-width:640px;">
            <div class="es-sheet-titlebar">Dados_Vendas — Linha de Cabeçalhos (A1:H1)</div>
            <table class="mini-sheet">
              <tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th></tr>
              <tr><td>N° da Venda</td><td>Data</td><td>Vendedor</td><td>Produto</td><td>Região</td><td>Qtd</td><td>Preço Unit. (R$)</td><td>Total (R$)</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 11,
          heading: "11.4 Validação de Dados — Listas Suspensas Automáticas",
          content: `Para evitar erros de digitação (e garantir que o Dashboard e a Tabela Dinâmica funcionem), vamos criar listas suspensas para Vendedor, Produto e Região, alimentadas pelas listas da planilha Configuracoes.\n\nPASSO A PASSO:\n1. Selecione o intervalo C2:C100 (coluna Vendedor).\n2. Abra Dados → Validação de Dados.\n3. Em Permitir: escolha Lista.\n4. Em Fonte: clique e vá até a aba Configuracoes, selecionando os itens de Vendedores (ex.: Configuracoes!A2:A6).\n5. Repita o mesmo para a coluna D (Produtos → Configuracoes!B2:B7) e para a coluna E (Região → Configuracoes!C2:C6).\n6. Clique em OK. Agora clicar numa célula dessas colunas mostra uma seta de lista suspensa.\n\n⚙️ COMO FICA:\nem C2 você vê a seta e pode escolher Ana Souza, Bruno Lima... sem digitar. Em D2, os produtos; em E2, as regiões. Dados sempre padronizados!`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Validação de Dados — resumo das listas</div>
            <table class="mini-sheet">
              <tr><th>Coluna</th><th>Campo</th><th>Fonte na Configuracoes</th></tr>
              <tr><td>C</td><td>Vendedor</td><td>Configuracoes!A2:A6</td></tr>
              <tr><td>D</td><td>Produto</td><td>Configuracoes!B2:B7</td></tr>
              <tr><td>E</td><td>Região</td><td>Configuracoes!C2:C6</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 11,
          heading: "11.5 Fórmulas Automáticas — N° da Venda e Total",
          content: `O Excel vai numerar e calcular sozinho. Vamos usar duas fórmulas que se arrastam para toda a coluna (a alça de preenchimento faz o resto).\n\nPASSO A PASSO:\n1. Em A2, digite =LIN()-1 e pressione Enter → o Excel retorna 1 (a linha de A2 é 2, menos 1 = 1).\n2. Arraste a alça de preenchimento de A2 para baixo (até A11) → a numeração vira automática (1 a 10).\n3. Em H2, digite =F2*G2 (Quantidade × Preço Unitário) e pressione Enter → o Total da venda é calculado.\n4. Arraste a alça de H2 para baixo até H11.\n5. Formate as colunas G e H como moeda (R$).\n\n🧮 COMO FUNCIONA:\n• =LIN()-1 → a função LIN() devolve o número da linha; subtraindo 1, a numeração começa em 1. Automática e à prova de erro!\n• =F2*G2 → multiplica Quantidade (F) pelo Preço Unitário (G). Se mudar um número, o Total recalcula sozinho.`,
          html: `<div class="es-sheet-box" style="max-width:760px;">
            <div class="es-sheet-titlebar">Como fica na grade (colunas A a H completas)</div>
            <table class="mini-sheet">
              <tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th></tr>
              <tr><td>N° da Venda</td><td>Data</td><td>Vendedor</td><td>Produto</td><td>Região</td><td>Qtd</td><td>Preço Unit. (R$)</td><td>Total (R$)</td></tr>
              <tr><td>=LIN()-1</td><td>02/06/2026</td><td>Ana Souza</td><td>Notebook</td><td>Sudeste</td><td>1</td><td>3200,00</td><td>=F2*G2</td></tr>
              <tr><td>1</td><td>02/06/2026</td><td>Ana Souza</td><td>Notebook</td><td>Sudeste</td><td>1</td><td>R$ 3.200,00</td><td>R$ 3.200,00</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 11,
          heading: "11.6 Dados de Exemplo — Primeiras Vendas da Tech Solutions",
          content: `Hora de popular a base. Lance as vendas abaixo usando as listas suspensas (Vendedor, Produto e Região) e as datas corretas. A coluna A e a coluna H já estão com fórmula — preencha as demais.\n\n🔎 CONFIRA:\nao preencher a última venda, a coluna A deve mostrar 10 e a coluna H deve ter somado Qtd × Preço em cada linha automaticamente.`,
          html: `<div class="es-sheet-box" style="max-width:700px;">
            <div class="es-sheet-titlebar">Dados de exemplo — 10 vendas da Tech Solutions</div>
            <table class="mini-sheet">
              <tr><th>Data</th><th>Vendedor</th><th>Produto</th><th>Região</th><th>Qtd</th><th>Preço Unit.</th></tr>
              <tr><td>02/06/2026</td><td>Ana Souza</td><td>Notebook</td><td>Sudeste</td><td>1</td><td>R$ 3.200,00</td></tr>
              <tr><td>02/06/2026</td><td>Bruno Lima</td><td>Mouse Sem Fio</td><td>Sul</td><td>5</td><td>R$ 89,90</td></tr>
              <tr><td>03/06/2026</td><td>Carla Mendes</td><td>Teclado USB</td><td>Nordeste</td><td>3</td><td>R$ 149,90</td></tr>
              <tr><td>03/06/2026</td><td>Diego Ferraz</td><td>Monitor LED</td><td>Sudeste</td><td>2</td><td>R$ 899,00</td></tr>
              <tr><td>04/06/2026</td><td>Elisa Rocha</td><td>Impressora</td><td>Centro-Oeste</td><td>1</td><td>R$ 449,00</td></tr>
              <tr><td>04/06/2026</td><td>Ana Souza</td><td>Cadeira Gamer</td><td>Sul</td><td>2</td><td>R$ 1.200,00</td></tr>
              <tr><td>05/06/2026</td><td>Bruno Lima</td><td>Notebook</td><td>Sudeste</td><td>2</td><td>R$ 3.200,00</td></tr>
              <tr><td>05/06/2026</td><td>Carla Mendes</td><td>Mouse Sem Fio</td><td>Nordeste</td><td>10</td><td>R$ 89,90</td></tr>
              <tr><td>06/06/2026</td><td>Diego Ferraz</td><td>Teclado USB</td><td>Sul</td><td>4</td><td>R$ 149,90</td></tr>
              <tr><td>06/06/2026</td><td>Elisa Rocha</td><td>Monitor LED</td><td>Norte</td><td>3</td><td>R$ 899,00</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 11,
          heading: "11.7 Converter a Base em Tabela — A Fundação das Análises",
          content: `O último passo da estruturação: transformar a base de vendas em uma Tabela do Excel. Isso dá nome ao intervalo (referências estruturadas), traz filtros nos cabeçalhos, estilo profissional e prepara tudo para o Dashboard e a Tabela Dinâmica da próxima aula.\n\nPASSO A PASSO:\n1. Clique em qualquer célula da base (ex.: A1).\n2. Pressione Ctrl+T (ou Inserir → Tabela).\n3. Marque "Minha tabela tem cabeçalhos" e confira que o intervalo cobre A1:H11.\n4. Clique em OK. Nas abas Design de Tabela, dê o nome TabelaVendas ao intervalo.\n\n✅ PRONTO!\nSua base agora é um banco de dados estruturado. Na Aula 12 vamos construir o Dashboard e a Tabela Dinâmica em cima dessa estrutura. 🚀`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Base pronta para o Dashboard e a Tabela Dinâmica</div>
            <table class="mini-sheet">
              <tr><th>Nome</th><th>Intervalo</th><th>Recurso que ativa</th></tr>
              <tr><td>Nome da Tabela</td><td>TabelaVendas</td><td>SOMASE, Tabela Dinâmica, filtros</td></tr>
              <tr><td>Filtros</td><td>▼ em cada cabeçalho</td><td>Classificar e filtrar sem fórmulas</td></tr>
              <tr><td>Estilo</td><td>Faixas alternadas</td><td>Leitura profissional</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 12,
          chapter: "AULA 12: PROJETO VENDAS — AUTOMAÇÃO & REGRAS (PARTE 2) — DASHBOARD E TABELA DINÂMICA",
          heading: "12.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `Com a base de vendas estruturada na Aula 11, agora o Excel trabalha sozinho! Você vai construir o Dashboard da Tech Solutions: cartões de indicadores, resumo por vendedor com SOMASE, gráfico de colunas e a Tabela Dinâmica de análise por vendedor. É aqui que os dados viram decisão! 📊\n\nO caminho tem 6 passos — cada passo é uma fase da automação:\n1. Criar o título do Dashboard\n2. Criar os cartões de indicadores (SOMA e MÉDIA)\n3. Montar o resumo por vendedor com SOMASE\n4. Criar o gráfico de colunas\n5. Ajustar a formatação e aparência\n6. Criar a Tabela Dinâmica (Analise_Vendedor)\n\nCada degrau tem um check no fim da fase — marque como concluído só depois de terminar a leitura e os exercícios daquela fase. O próximo só é liberado depois que o anterior for finalizado.`,
          html: `<div class="fun-highlight">
            <strong>🎯 MISSÃO DA AULA 12:</strong> dar vida aos dados — montar o Dashboard (indicadores, resumo, gráfico) e a Tabela Dinâmica Analise_Vendedor. Ao final, o sistema passa a se atualizar automaticamente quando novas vendas entram.
          </div>
          <div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Dashboard + Analise_Vendedor</div>
            <table class="mini-sheet">
              <tr><td>📈 Indicadores</td><td>Total, Ticket médio, Quantidade</td></tr>
              <tr><td>🧮 SOMASE</td><td>Resumo por vendedor</td></tr>
              <tr><td>📊 Gráfico</td><td>Colunas por vendedor</td></tr>
              <tr><td>🔀 Tabela Dinâmica</td><td>Vendedor × Região (Soma de Total)</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 12,
          heading: "12.1 Dashboard — Título do Painel",
          content: `O Dashboard é a "vitrine" do sistema: nele, os donos da Tech Solutions veem o resultado do negócio em um só olhar. Vamos começar dando um título profissional.\n\nPASSO A PASSO:\n1. Vá até a aba Dashboard.\n2. Selecione B2:E2 (ou A1:G1) e clique em Mesclar e Centralizar (Página Início → Mesclar e Centralizar).\n3. Digite SISTEMA DE CONTROLE DE VENDAS — TECH SOLUTIONS.\n4. Formate: fonte 20, negrito, cor verde escuro da marca.\n\n💡 DICA DE PROFISSIONAL:\nmesclar só o espaço necessário evita desalinhar o conteúdo ao imprimir. Veja o Live Preview do título conforme formata.`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Dashboard — estrutura inicial</div>
            <table class="mini-sheet">
              <tr><th>Área</th><th>O que vai ficar</th></tr>
              <tr><td>B2:E2 (mesclada)</td><td>Título: Sistema de Controle de Vendas — Tech Solutions</td></tr>
              <tr><td>Próximas linhas</td><td>Cartões de indicadores (Tópico 2)</td></tr>
              <tr><td>Área inferior</td><td>Resumo por vendedor + Gráfico (Tópicos 3 e 4)</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 12,
          heading: "12.2 Cartões de Indicadores — SOMA, MÉDIA e CONT",
          content: `Os indicadores (KPIs) são os números que todo dono olha primeiro. Vamos criar 3 cartões que se atualizam sozinhos conforme a base de vendas cresce, usando referências à planilha Dados_Vendas.\n\nPASSO A PASSO:\n1. Deixe uma linha após o título e monte os rótulos dos cartões: Total de Vendas, Ticket Médio e Itens Vendidos.\n2. Ao lado de "Total de Vendas", digite =SOMA(Dados_Vendas!H2:H100) e formate como moeda.\n3. Ao lado de "Ticket Médio", digite =MÉDIA(Dados_Vendas!H2:H100) e formate como moeda.\n4. Ao lado de "Itens Vendidos", digite =SOMA(Dados_Vendas!F2:F100) (soma das quantidades).\n5. Desenhe um contorno colorido em cada cartão (borda + fundo suave).\n\n🧮 REGRA:\nao referenciar a outra planilha usamos NomeDaPlanilha! antes do intervalo. Quando novas vendas entrarem na base, os cartões recalculam sozinhos.`,
          html: `<div class="es-sheet-box" style="max-width:640px;">
            <div class="es-sheet-titlebar">Cartões de indicadores (linhas 4–6)</div>
            <table class="mini-sheet">
              <tr><th>Rótulo</th><th>Fórmula</th><th>Resultado esperado (exemplo)</th></tr>
              <tr><td>Total de Vendas</td><td>=SOMA(Dados_Vendas!H2:H100)</td><td>R$ 24.446,80</td></tr>
              <tr><td>Ticket Médio</td><td>=MÉDIA(Dados_Vendas!H2:H100)</td><td>R$ 2.444,68</td></tr>
              <tr><td>Itens Vendidos</td><td>=SOMA(Dados_Vendas!F2:F100)</td><td>33</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 12,
          heading: "12.3 Resumo por Vendedor — a Função SOMASE",
          content: `Agora o "segredo" do painel: uma pequena tabela que resume o total vendido por cada vendedor. Com =SOMASE e o nome do vendedor numa célula, a fórmula procura na coluna Vendedor da base e soma os totais correspondentes — sem escrever nada na mão.\n\nPASSO A PASSO:\n1. Num espaço livre do Dashboard (ex.: a partir da célula A8), digite o título RESUMO POR VENDEDOR.\n2. Na coluna abaixo, liste os vendedores (Ana Souza, Bruno Lima, Carla Mendes, Diego Ferraz, Elisa Rocha).\n3. Ao lado de cada vendedor (ex.: B10), digite: =SOMASE(Dados_Vendas!$C$2:$C$100; A10; Dados_Vendas!$H$2:$H$100)\n4. Arraste a fórmula até o último vendedor e formate a coluna como moeda.\n\n🧮 REGRA:\no 1º argumento é o intervalo onde procurar (Vendedor), o 2º é o critério (A10) e o 3º é o intervalo a somar (Total). Repare no $ (cifrão) travando as colunas ao arrastar.`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Resumo por Vendedor (resultado esperado)</div>
            <table class="mini-sheet">
              <tr><th>Vendedor</th><th>Total (R$)</th></tr>
              <tr><td>Ana Souza</td><td>R$ 5.600,00</td></tr>
              <tr><td>Bruno Lima</td><td>R$ 6.689,50</td></tr>
              <tr><td>Carla Mendes</td><td>R$ 1.348,70</td></tr>
              <tr><td>Diego Ferraz</td><td>R$ 2.537,60</td></tr>
              <tr><td>Elisa Rocha</td><td>R$ 8.270,00</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 12,
          heading: "12.4 Gráfico de Colunas — Vendas por Vendedor",
          content: `Números em tabela são bons; a imagem é melhor ainda. Vamos transformar o resumo em um gráfico de colunas que o gestor lê em 2 segundos.\n\nPASSO A PASSO:\n1. Selecione a tabela Resumo por Vendedor (Vendedor + Total).\n2. Vá em Inserir → Gráficos e escolha Colunas → Coluna Agrupada (ou 2D).\n3. Ajuste o título do gráfico para Vendas por Vendedor.\n4. Adicione os rótulos de dados (clique com o botão direito na série → Adicionar Rótulos de Dados).\n5. Posicione e redimensione o gráfico ao lado da tabela de resumo.\n\n💡 DICA:\nse você atualizar os dados, o gráfico atualiza na hora. Rótulos de dados facilitam a leitura do valor exato de cada vendedor.`,
          html: `<div class="fun-highlight">
            <strong>📊 VISUAL DO GRÁFICO:</strong> colunas proporcionais ao total de cada vendedor — Elisa Rocha (R$ 8.270,00) e Bruno Lima (R$ 6.689,50) lideram as barras mais altas, Carla Mendes tem a menor (R$ 1.348,70).
          </div>`
        },
        {
          lessonNum: 12,
          heading: "12.5 Formatação e Aparência — Um Painel Profissional",
          content: `Detalhes visuais fazem o Dashboard parecer feito por uma empresa. Vamos aplicar a "cara" da Tech Solutions: verde da marca, bordas, alinhamento e organização.\n\nPASSO A PASSO:\n1. Use a pincel de formatação (Página Início) para copiar o estilo do título para os cartões.\n2. Aplique preenchimento verde suave e bordas nos cartões e na tabela de resumo.\n3. Alinhe os valores em R$ à direita e os rótulos à esquerda.\n4. Ajuste o tamanho/posição do gráfico e do resumo para caberem juntos numa leitura sem scroll.\n5. Opcional: em Exibir, desmarque Linhas de Grade para um visual limpo.\n\n🎨 IDENTIDADE VISUAL:\nmantenha 1 cor de destaque (verde), 1 cor neutra de fundo (claro) e títulos em negrito. Painel corporativo usa simplicidade.`,
          html: `<div class="fun-highlight">
            <strong>🎨 PALETA DA TECH SOLUTIONS:</strong> verde da marca como cor de destaque, fundo claro neutro e títulos em negrito. Valores em R$ alinhados à direita, rótulos à esquerda.
          </div>`
        },
        {
          lessonNum: 12,
          heading: "12.6 Tabela Dinâmica — Análise por Vendedor e Região",
          content: `Última peça de automação: a Tabela Dinâmica. Com apenas arrastar e soltar, ela responde "quanto cada vendedor vendeu em cada região", sem escrever fórmula nenhuma.\n\nPASSO A PASSO:\n1. Clique dentro da base Dados_Vendas (ou selecione o intervalo da TabelaVendas).\n2. Vá em Inserir → Tabela Dinâmica.\n3. Escolha "Nova Planilha" e renomeie a nova aba para Analise_Vendedor.\n4. No painel Campos da Tabela Dinâmica:\n   • FILTROS: (deixe vazio por ora)\n   • LINHAS: Vendedor (e abaixo, opcional: Produto)\n   • COLUNAS: Região\n   • VALORES: Soma de Total (arraste o campo Total)\n5. Formate os valores como moeda (botão direito → Formatar Células).\n\n🔀 PODER DA DINÂMICA:\nbasta reorganizar os campos para responder outra pergunta (ex.: trocar Região por Produto nas Colunas) — zero fórmula. Na Aula 13 vamos automatizar a atualização dela com uma macro.`,
          html: `<div class="es-sheet-box" style="max-width:640px;">
            <div class="es-sheet-titlebar">Analise_Vendedor — estrutura da Tabela Dinâmica</div>
            <table class="mini-sheet">
              <tr><th>Área</th><th>Campo arrastado</th></tr>
              <tr><td>LINHAS</td><td>Vendedor</td></tr>
              <tr><td>COLUNAS</td><td>Região</td></tr>
              <tr><td>VALORES</td><td>Soma de Total (R$)</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 13,
          chapter: "AULA 13: PROJETO VENDAS — DASHBOARD & CONCLUSÃO (PARTE 3) — MACROS, BOTÕES E ENTREGA DO PROJETO",
          heading: "13.0 FASE 0 — Antes de Começar: O que vamos fazer e como vamos fazer",
          content: `Última etapa do Sistema de Controle de Vendas! 🏁 Você vai preparar a impressão, automatizar o painel com macros no VBA (atualizar e imprimir com um clique), adicionar botões ao Dashboard, salvar tudo como .xlsm e, ao final, fazer a entrega ao Professor Marcos Rangel — com direito à mensagem de parabéns pela conclusão do módulo! 🎓\n\nO caminho tem 6 passos — cada passo é uma fase da finalização:\n1. Configurar a impressão do Dashboard\n2. Criar a macro AtualizarDados para a Tabela Dinâmica\n3. Criar a macro VerImprimir no Editor VBA (código manual)\n4. Criar os botões no Dashboard\n5. Salvar o projeto como .xlsm\n6. ENTREGAR AO PROFESSOR + Parabéns pela jornada 🎉\n\nCada degrau tem um check no fim da fase — marque como concluído só depois de terminar a leitura e os exercícios daquela fase. O passo 6 é a entrega.`,
          html: `<div class="fun-highlight">
            <strong>🎯 MISSÃO DA AULA 13:</strong> finalizar o projeto — impressão configurada, macros VBA, botões no painel, arquivo .xlsm e entrega ao professor com a celebração da conclusão de todo o módulo Excel.
          </div>
          <div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Sistema_Controle_Vendas.xlsm</div>
            <table class="mini-sheet">
              <tr><td>🖨️ Impressão</td><td>Configurada em 1 página</td></tr>
              <tr><td>⚡ Macros</td><td>AtualizarDados + VerImprimir</td></tr>
              <tr><td>🔘 Botões</td><td>Atualizar / Imprimir no Dashboard</td></tr>
              <tr><td>✅ Entregável</td><td>.xlsm anexado ao professor</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 13,
          heading: "13.1 Configuração de Impressão — Um Relatório em Uma Página",
          content: `O entregável precisa imprimir bonito e compacto. Vamos ajustar o Dashboard para caber numa página, com orientação paisagem.\n\nPASSO A PASSO:\n1. Esteja na aba Dashboard.\n2. Pressione Ctrl+P para abrir a visualização de impressão.\n3. Defina Orientar página → Paisagem.\n4. Em Dimensionar → Ajustar a Planilha na Página (1 página de largura × 1 página de altura).\n5. Em Margens → Personalizar, marque Centralizar na página: horizontal e vertical.\n6. Observe o Visualizar impressão: painel completo com título, cartões, resumo e gráfico.\n\n🖨️ DICA:\no mesmo VerImprimir que vamos criar como macro no Tópico 3 usará justamente essa configuração. Imprimir = apresentar seu trabalho!`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Configurações de impressão</div>
            <table class="mini-sheet">
              <tr><th>Opção</th><th>Valor</th></tr>
              <tr><td>Orientar página</td><td>Paisagem</td></tr>
              <tr><td>Dimensionar</td><td>Ajustar a planilha na página (1×1)</td></tr>
              <tr><td>Margens</td><td>Centralizar horizontal + vertical</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 13,
          heading: "13.2 Macro AtualizarDados — O Painel que Se Atualiza Sozinho",
          content: `Tabelas Dinâmicas precisam ser atualizadas quando novos dados entram (elas não "veem" a mudança sozinhas). Vamos gravar uma macro que renova todos os dados com um clique. A aba Desenvolvedor foi ativada na Aula 09 — vamos usá-la agora!\n\nPASSO A PASSO:\n1. Vá à aba Desenvolvedor → Gravar Macro.\n2. Nomeie AtualizarDados (sem espaços).\n3. Clique em OK — a gravação começou.\n4. Clique dentro da Tabela Dinâmica (aba Analise_Vendedor) e, na aba Análise de Tabela Dinâmica, clique em Atualizar (ou pressione Alt+F5).\n5. Volte ao Dashboard e clique em Desenvolvedor → Parar Gravação.\n6. Teste: altere um dado na base, depois Desenvolvedor → Macros → AtualizarDados → Executar. Os indicadores e a Tabela Dinâmica recalculam.\n\n⚡ POR QUE ISSO IMPORTA?\nSem atualizar, a Tabela Dinâmica "congela" os números antigos. A macro AtualizarDados garante que o painel sempre reflita a última venda lançada.`,
          html: `<div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Gravação da macro</div>
            <table class="mini-sheet">
              <tr><td>Nome da Macro:</td><td>AtualizarDados</td></tr>
              <tr><td>Ação gravada:</td><td>Atualizar Tabela Dinâmica (Alt+F5)</td></tr>
              <tr><td>Onde fica:</td><td>Esta Pasta de Trabalho</td></tr>
              <tr><td>Executar:</td><td>Desenvolvedor → Macros → Executar</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 13,
          heading: "13.3 Macro VerImprimir — Código VBA na Prática",
          content: `Agora vamos escrever VBA de verdade. A macro VerImprimir abre a visualização de impressão da planilha ativa — o passo final do nosso código-manual.\n\nPASSO A PASSO:\n1. Abra o Editor VBA: Alt+F11 (ou Desenvolvedor → Visual Basic).\n2. No painel esquerdo (Project Explorer), Inserir → Módulo.\n3. Digite o código (ou cole) no módulo:\n\nSub VerImprimir()\n    ActiveWindow.SelectedSheets.PrintPreview\nEnd Sub\n\n4. Posicione o cursor dentro do código e pressione F5 para testar (abre a pré-visualização de impressão).\n5. Pressione Esc para fechar a visualização e salve o módulo (Ctrl+S).\n\n🔬 O QUE O CÓDIGO FAZ?\n• Sub VerImprimir() → inicia a sub-rotina (nomeada como a macro).\n• ActiveWindow.SelectedSheets.PrintPreview → exibe a Visualização da Impressão da planilha selecionada.\n• End Sub → finaliza. Rodou com F5.`,
          html: `<div class="es-sheet-box" style="max-width:560px;">
            <div class="es-sheet-titlebar">Módulo 1 — Código VBA da macro VerImprimir</div>
            <div style="padding:10px 14px;font-family:'Courier New',monospace;font-size:0.9em;background:#F8FAFC;line-height:1.7;">
              Sub VerImprimir()<br>
              &nbsp;&nbsp;&nbsp;&nbsp;ActiveWindow.SelectedSheets.PrintPreview<br>
              End Sub
            </div>
          </div>`
        },
        {
          lessonNum: 13,
          heading: "13.4 Botões de Ação no Dashboard",
          content: `Ninguém quer abrir o menu de Macros toda vez. Vamos criar botões clicáveis no Dashboard ligados às macros — a interface final do sistema.\n\nPASSO A PASSO:\n1. No Dashboard, vá em Inserir → Formas e escolha um Retângulo arredondado (ou Botão de Ação: Inserir → Botão de Ação).\n2. Desenhe o botão abaixo do título.\n3. Botão direito sobre a forma → Atribuir Macro → escolha VerImprimir → OK.\n4. Digite o texto do botão: 🖨️ Imprimir Dashboard.\n5. Crie um 2º botão 📊 Atualizar Dados e atribua a macro AtualizarDados.\n6. Estilize ambos com a cor verde da marca e texto branco centralizado.\n\n🔘 DICA:\ndepois de atribuir a macro, clique fora da forma para sair do modo edição. Um clique simples passa a disparar a macro.`,
          html: `<div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Botões do Dashboard</div>
            <table class="mini-sheet">
              <tr><th>Botão</th><th>Macro atribuída</th><th>O que faz</th></tr>
              <tr><td>🖨️ Imprimir Dashboard</td><td>VerImprimir</td><td>Abre a visualização impressão</td></tr>
              <tr><td>📊 Atualizar Dados</td><td>AtualizarDados</td><td>Atualiza indicadores e a TD</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 13,
          heading: "13.5 Salvando o Projeto como .xlsm",
          content: `Macros exigem um formato especial de arquivo. Vamos salvar o sistema no formato certo para não perder a automação.\n\nPASSO A PASSO:\n1. Clique em Arquivo → Salvar Como.\n2. Escolha o local e, em Tipo, selecione Pasta de Trabalho Habilitada para Macros (*.xlsm).\n3. Nomeie o arquivo: Sistema_Controle_Vendas.xlsm.\n4. Clique em Salvar. Confirme que o arquivo tem o ícone e a extensão .xlsm.\n5. Feche e reabra o arquivo para garantir que as macros e os botões voltam a funcionar no abrir.\n\n⚠️ ATENÇÃO:\nse salvar como .xlsx, o Excel descarta as macros (elas só vivem em .xlsm). Este é o arquivo que você vai enviar ao professor!`,
          html: `<div class="es-sheet-box" style="max-width:520px;">
            <div class="es-sheet-titlebar">Salvar como...</div>
            <table class="mini-sheet">
              <tr><th>Campo</th><th>Valor</th></tr>
              <tr><td>Nome do arquivo</td><td>Sistema_Controle_Vendas.xlsm</td></tr>
              <tr><td>Tipo</td><td>Pasta de Trabalho Habilitada para Macros (*.xlsm)</td></tr>
              <tr><td>Motivo</td><td>Preservar as macros VBA</td></tr>
            </table>
          </div>`
        },
        {
          lessonNum: 13,
          heading: "13.6 Entrega ao Professor & Parabéns pela Jornada 🎓",
          content: `Seu Sistema de Controle de Vendas está pronto! Agora vem o passo mais importante: entregar o arquivo para o professor auditar e, depois, receber os parabéns pela conclusão do módulo.\n\nPASSO A PASSO:\n1. Confira as 4 planilhas: Dados_Vendas, Dashboard, Analise_Vendedor e Configuracoes.\n2. Rode o botão 📊 Atualizar Dados e depois 🖨️ Imprimir Dashboard para o ensaio final.\n3. Salve mais uma vez o arquivo Sistema_Controle_Vendas.xlsm.\n4. ANEXE o arquivo .xlsm na mensagem para o professor Marcos Rangel (WhatsApp (19) 99130-6907 ou e-mail), com um texto como o modelo abaixo.\n\n🔎 PARA O PROFESSOR AUDITAR:\no arquivo será verificado quanto a — 4 planilhas organizadas, validação de dados, fórmulas automáticas (LIN e F2*G2), SOMASE, gráfico, Tabela Dinâmica, macros AtualizarDados e VerImprimir e botões do Dashboard. Depois de enviar, marque o check!`,
          html: `<div class="es-sheet-box" style="max-width:600px;">
            <div class="es-sheet-titlebar">Modelo de mensagem para envio ao professor</div>
            <div style="padding:10px 14px;font-family:'Inter',sans-serif;font-size:0.92em;background:#F8FAFC;line-height:1.7;">
              Prof. Marcos Rangel, estou entregando o <strong>Projeto Final — Sistema de Controle de Vendas (Tech Solutions)</strong> em anexo (.xlsm).<br>
              Concluí a estruturação, o Dashboard com indicadores e o gráfico, a Tabela Dinâmica, as macros e os botões. Aguardo sua auditoria. Obrigado! 🙌
            </div>
          </div>
          <div class="fun-highlight">
            <strong>🎉 ENTREGA CONCLUÍDA =</strong> mensagem de parabéns pela conclusão das 13 aulas do Módulo Excel da WR Capacitação Profissional — do primeiro clique no Excel ao sistema completo com macros!
          </div>`
        },
        {
          lessonNum: 13,
          heading: "13.7 Resumo da Aula — O Fim da Jornada do Módulo Excel",
          content: `PARA FIXAR O APRENDIZADO:\n• Impressão: orientação paisagem, Ajustar a Planilha na Página (1×1) e centralizar na página transformam o Dashboard num relatório profissional de uma página.\n• Gravar Macro (Aula 09 + 13): Desenvolvedor → Gravar Macro → nomear AtualizarDados → clicar em Atualizar (ou Alt+F5) na Tabela Dinâmica → Parar Gravação. Agora um clique atualiza o painel inteiro.\n• Código VBA manual: Alt+F11 → Inserir → Módulo → Sub VerImprimir() / ActiveWindow.SelectedSheets.PrintPreview / End Sub → testar com F5.\n• Atribuir Macro a uma forma: botão direito na forma → Atribuir Macro → escolher VerImprimir ou AtualizarDados → clicar fora para ativar.\n• Salvamento: .xlsx não guarda macros; é preciso Pasta de Trabalho Habilitada para Macros (*.xlsm).\n• Entrega: anexar Sistema_Controle_Vendas.xlsm em mensagem ao Prof. Marcos Rangel (WhatsApp (19) 99130-6907).\n\n🔒 REGRA DE OURO:\nO Projeto Vendas da Tech Solutions reuniu as 13 aulas: planilhas organizadas, validação de dados, fórmulas e funções, Tabelas Dinâmicas, gráficos e a automação com macros VBA. Você saiu do básico e chegou a um sistema funcional — essa é a jornada completa do Microsoft Excel! 🚀`
        }
      ]
    },
    powerpoint: {
      title: "Módulo 4: Microsoft PowerPoint — Apresentações Visuais Impactantes",
      subtitle: "Apostila Didática Oficial Completa — Prof. Marcos Rangel",
      moduleName: "Microsoft PowerPoint",
      sections: [
        {
          chapter: "UNIDADE 1: CRIAÇÃO E APRESENTAÇÃO DE SLIDES",
          heading: "1.1 Conceito de Comunicação Visual em Slides",
          content: "O PowerPoint possibilita a estruturação de ideias, relatórios e aulas em sequências visuais dinâmicas compostas por slides."
        },
        {
          heading: "1.2 Layouts e Estrutura de Conteúdo",
          content: "Escolha layouts adequados para cada slide (Título, Título e Conteúdo, Comparação) para garantir clareza na transmissão da mensagem."
        },
        {
          heading: "1.3 Transições de Slides e Animações",
          content: "• Transição de Slides: Efeitos visuais na passagem entre um slide e outro (ex: Esmaecer, Suave).\n• Animação de Objetos: Ordem e forma como textos, gráficos e imagens surgem dentro de um mesmo slide."
        },
        {
          heading: "1.4 Teclas de Atalho de Apresentação",
          content: `• Tecla F5: Inicia a apresentação a partir do primeiro slide.\n• Shift + F5: Inicia a apresentação a partir do slide atual.\n• Tecla ESC: Interrompe a apresentação e retorna à edição.`
        },
        {
          heading: "1.5 Boas Práticas para Apresentações Profissionais",
          content: "Utilize textos concisos em tópicos, mantenha alto contraste entre o texto e o fundo da tela e utilize imagens de alta definição que complementem a fala do apresentador."
        }
      ]
    }
  };

  function resolveImagePath(path) {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) return path;
    try {
      return new URL(path, window.location.href).href;
    } catch (e) {
      return path;
    }
  }

  function downloadLessonPDF(moduleId, subLessonId) {
    const data = LESSONS[moduleId] || LESSONS.internet;
    const lessonNum = (subLessonId && !isNaN(parseInt(subLessonId, 10))) ? parseInt(subLessonId, 10) : null;

    let targetSections = data.sections;
    let pdfTitle = data.title;
    let pdfSubtitle = data.subtitle;

    const lessonTitles = {
      1: "Aula 01: Introdução à Internet e Navegação Segura",
      2: "Aula 02: Navegando na Internet & História do HTML",
      3: "Aula 03: Dominando o Google e Produtividade na Nuvem"
    };

    // Títulos específicos por módulo (para não sobrescrever com títulos da Internet)
    const moduleLessonTitles = {
      internet: lessonTitles,
      windows: {
        1: "Aula 01: A História e o Funcionamento dos Computadores",
        2: "Aula 02: Área de Trabalho e Barra de Tarefas",
        3: "Aula 03: Gerenciamento de Arquivos e Pastas",
        4: "Aula 04: Configurações de Sistema e Painel de Controle",
        5: "Aula 05: Acessórios Nativos do Windows",
        6: "Aula 06: Personalização e Acessibilidade",
        7: "Aula 07: Segurança e Antivírus no Windows",
        71: "Complemento 7A — Backup Automático com Arquivo .BAT",
        81: "Complemento 8A — Tutorial: Como Criar Pendrive/DVD de Instalação do Windows",
        8: "Aula 08: Diagnóstico de Memória, Restauração do Sistema e Mídia de Instalação"
      },
      excel: {
        1: "Aula 01: Introdução ao Excel, Interface, Tipos de Dados e Navegação",
        2: "Aula 02: Operações Básicas & Fórmulas Simples",
        3: "Aula 03: Funções de Cálculo — SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM",
        4: "Aula 04: Funções Lógicas Avançadas — SE, E, OU, NÃO, SE Aninhado e Formatação Condicional",
        5: "Aula 05: Funções de Pesquisa e Referência — PROCV, PROCH, ÍNDICE, CORRESP",
        6: "Aula 06: Datas e Horas no Excel — HOJE, AGORA, DATA, DIA, MÊS, ANO, DIAS360, DIAS.ÚTEIS",
        7: "Aula 07: Contas Pessoais & Tabela Dinâmica — Planilha Base, Campos, Filtros e Estrutura de Tópicos",
        8: "Aula 08: Controle de Estoque com a Função SOMASE — Tabelas, Validação de Dados, Fórmulas, Totais e Tabela Dinâmica",
        9: "Aula 09: Macros & Introdução ao VBA — Aventura Capiberica: Aprendendo Lógica de Programação no Excel",
         10: "Aula 10: VBA Avançado — Objetos, Variáveis, Condicionais, Loops e Mini-Projeto",
         11: "Aula 11: Projeto Vendas — Estruturação (Parte 1) — O Sistema de Controle de Vendas da Tech Solutions",
         12: "Aula 12: Projeto Vendas — Automação & Regras (Parte 2) — Dashboard e Tabela Dinâmica",
         13: "Aula 13: Projeto Vendas — Dashboard & Conclusão (Parte 3) — Macros, Botões e Entrega do Projeto"
      }
    };

    if (lessonNum) {
      targetSections = data.sections.filter(sec => sec.lessonNum === null || sec.lessonNum === undefined || sec.lessonNum === lessonNum);
      const titlesForModule = moduleLessonTitles[moduleId] || {};
      const resolvedTitle = titlesForModule[lessonNum];
      if (resolvedTitle) {
        pdfTitle = `${data.moduleName} • ${resolvedTitle}`;
        pdfSubtitle = `Apostila Didática Exclusiva — ${resolvedTitle} — Prof. Marcos Rangel`;
      }
    }
    
    const printWin = window.open("", "_blank", "width=900,height=980");
    if (!printWin) {
      alert("Por favor, permita pop-ups no seu navegador para visualizar e baixar o PDF completo da aula.");
      return;
    }

    // Figura com legenda. Aceita string (imagem sem legenda) ou { src, caption }.
    // Toda imagem da apostila precisa de uma frase explicando o que o aluno deve olhar.
    const figure = (item) => {
      const src = typeof item === 'string' ? item : (item && item.src);
      const caption = typeof item === 'string' ? '' : ((item && item.caption) || '');
      if (!src) return '';
      const captionBlock = caption
        ? `<p class="pdf-img-caption">📷 <em>${caption}</em></p>`
        : '';
      return `<div class="pdf-img-container">
          <img src="${resolveImagePath(src)}" alt="${caption || 'Ilustração Didática'}">
          ${captionBlock}
        </div>`;
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>${pdfTitle} — Apostila Didática Completa</title>
        <style>
          @page {
            size: A4;
            margin: 16mm 14mm 16mm 14mm;
          }
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            color: #20130B;
            line-height: 1.7;
            margin: 0;
            padding: 20px;
            background: #FFFFFF;
            font-size: 13.5px;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .btn-print {
            position: fixed;
            top: 16px;
            right: 16px;
            background: #EA580C;
            color: #FFFFFF;
            border: none;
            padding: 12px 24px;
            border-radius: 99px;
            font-weight: 700;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(234, 88, 12, 0.4);
            z-index: 9999;
            transition: all 0.2s ease;
          }
          .btn-print:hover {
            background: #8E2C07;
            transform: translateY(-2px);
          }
          .header-banner {
            background: linear-gradient(135deg, #1E130B 0%, #321F12 100%);
            border-bottom: 4px solid #EA580C;
            border-radius: 12px;
            padding: 18px 24px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            color: #FFFFFF;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
          }
          .header-profile {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .header-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 3px solid #FB923C;
            object-fit: cover;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
            background: #FFF7F0;
            flex-shrink: 0;
          }
          .header-title h1 {
            font-size: 20px;
            color: #FB923C;
            margin: 0 0 4px 0;
            font-weight: 700;
            line-height: 1.3;
          }
          .header-title p {
            font-size: 13px;
            color: #F4E8DC;
            margin: 0;
            opacity: 0.9;
          }
          .badge-institution {
            background: rgba(251, 146, 60, 0.15);
            border: 1.5px solid #FB923C;
            color: #FB923C;
            font-weight: 700;
            font-size: 10.5px;
            padding: 6px 14px;
            border-radius: 99px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            white-space: nowrap;
            flex-shrink: 0;
          }
          .chapter-title {
            background: #120B06;
            color: #FB923C;
            border-left: 5px solid #EA580C;
            padding: 10px 18px;
            border-radius: 8px;
            font-size: 14.5px;
            font-weight: 700;
            margin-top: 26px;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            page-break-after: avoid;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          }
          .section-block {
            background: #FFF9F2;
            border: 1px solid #E6D2C1;
            border-left: 4px solid #EA580C;
            border-radius: 10px;
            padding: 18px 22px;
            margin-bottom: 18px;
            page-break-inside: avoid;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          }
          .section-block h3 {
            font-size: 15px;
            color: #8E2C07;
            margin-top: 0;
            margin-bottom: 10px;
            font-weight: 700;
            border-bottom: 1px dashed #E6D2C1;
            padding-bottom: 6px;
          }
          .section-block p {
            font-size: 14px;
            color: #20130B;
            margin: 0;
            white-space: pre-line;
            line-height: 1.7;
          }
          kbd {
            background-color: #2D251E;
            color: #FFFDF9;
            border: 1px solid #422A1A;
            border-radius: 5px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.88em;
            padding: 3px 7px;
            display: inline-block;
            white-space: nowrap;
          }
          .pdf-img-container {
            text-align: center;
            margin: 20px 0 14px 0;
            page-break-inside: avoid;
          }
          .pdf-img-container img {
            max-width: 96%;
            max-height: 480px;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 10px;
            border: 1.5px solid #E6D2C1;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            background: #FFFFFF;
            padding: 4px;
          }
          .pdf-img-caption {
            margin: 6px 0 0 0;
            font-size: 11.5px;
            color: #6B4E3D;
            text-align: center;
            font-style: italic;
          }
          .pdf-img-grid {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            margin: 20px 0 14px 0;
            page-break-inside: avoid;
          }
          /* dentro do grid cada item ja e um .pdf-img-container, entao zera a margem externa */
          .pdf-img-grid > .pdf-img-container {
            margin: 0;
            width: 48%;
            min-width: 240px;
          }
          /*imagesWide: uma imagem por linha, para-printed quando a captura tem
            texto pequeno (ex.: caixas de dialogo do Excel e do VBA). */
          .pdf-img-grid-wide {
            flex-direction: column;
            align-items: center;
          }
          .pdf-img-grid-wide > .pdf-img-container {
            width: 100%;
          }
          .pdf-img-grid-wide > .pdf-img-container img {
            max-width: 100%;
            max-height: 620px;
          }
          .pdf-img-grid img {
            max-width: 48%;
            max-height: 380px;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 10px;
            border: 1.5px solid #E6D2C1;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            background: #FFFFFF;
            padding: 4px;
          }
          .box-callout {
            border-radius: 8px;
            padding: 14px 18px;
            margin-top: 14px;
            font-size: 13px;
            line-height: 1.6;
          }
          .box-tip {
            background: #E6F4F1;
            border: 1.5px solid #2E8B6F;
            color: #1A5241;
          }
          .box-warning {
            background: #FBE8E4;
            border: 1.5px solid #C0392B;
            color: #7A241B;
          }
          .box-code {
            background: #120B06;
            color: #FB923C;
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            border: 1.5px solid #422A1A;
          }
          .box-academic {
            background: #F3E8FF;
            border: 1.5px solid #9333EA;
            color: #5B21B6;
          }
          .box-callout strong {
            display: block;
            margin-bottom: 4px;
            font-size: 13.5px;
          }
          .student-signature-box {
            margin-top: 32px;
            padding: 20px 24px;
            border: 2px dashed #EA580C;
            border-radius: 12px;
            background: linear-gradient(135deg, #FAF2EA 0%, #FFF9F2 100%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            page-break-inside: avoid;
          }
          .signature-info {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .signature-avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 2px solid #EA580C;
            object-fit: cover;
          }
          .signature-line {
            width: 45%;
            border-top: 1.5px solid #422A1A;
            text-align: center;
            padding-top: 6px;
            font-size: 11.5px;
            color: #422A1A;
            font-weight: 600;
          }
          .footer-pdf {
            margin-top: 24px;
            padding-top: 12px;
            border-top: 1px solid #E6D2C1;
            font-size: 11px;
            color: #A38470;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          /* ═══ Ilustrações HTML embutidas no PDF (mini-planilhas, mapas mentais e diagramas) ═══ */
          .pdf-html-illustration {
            margin: 16px 0;
            page-break-inside: avoid;
          }
          .mini-sheet {
            width: 100%;
            border-collapse: collapse;
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 12px;
            background: #FFFFFF;
          }
          .mini-sheet th {
            background: #E2E8F0;
            color: #475569;
            border: 1px solid #CBD5E1;
            padding: 6px;
            text-align: center;
          }
          .mini-sheet td {
            border: 1px solid #E2E8F0;
            padding: 6px 9px;
          }
          .fun-highlight {
            background: #F0FDF4;
            border: 1.5px solid #86EFAC;
            border-radius: 10px;
            padding: 12px 16px;
            margin: 14px 0;
            page-break-inside: avoid;
          }
          .es-sheet-box {
            border: 1px solid #CBD5E1;
            border-radius: 8px;
            overflow: hidden;
            background: #FFFFFF;
            margin: 12px 0;
            page-break-inside: avoid;
          }
          .es-sheet-titlebar {
            background: #217346;
            color: #FFFFFF;
            font-weight: 700;
            padding: 9px 14px;
            font-family: Arial, sans-serif;
            font-size: 13px;
            text-align: left;
          }
          @media print {
            .btn-print { display: none !important; }
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <button class="btn-print" onclick="window.print()">🖨️ Salvar como PDF / Imprimir Apostila Completa</button>
        
        <div class="header-banner">
          <div class="header-profile">
            <img class="header-avatar" src="${resolveImagePath('../../assets/img/professor-rangel.png')}" alt="Prof. Marcos Rangel">
            <div class="header-title">
              <h1>${pdfTitle}</h1>
              <p>${pdfSubtitle}</p>
            </div>
          </div>
          <div class="badge-institution">🎓 WR CAPACITAÇÃO PROFISSIONAL</div>
        </div>

        ${targetSections.map(sec => `
          ${sec.chapter ? `<div class="chapter-title">${sec.chapter}</div>` : ''}
          <div class="section-block">
            <h3>${sec.heading}</h3>
            ${sec.content ? `<p style="font-size:14px; color:#20130B; margin-bottom:14px;">${sec.content}</p>` : ''}
            ${sec.html ? `<div class="pdf-html-illustration">${sec.html}</div>` : ''}
            
            ${sec.steps && sec.steps.length ? `
              <div class="steps-container">
                ${sec.steps.map(st => `
                  <div class="step-item-block" style="margin-top:14px; margin-bottom:18px; padding-bottom:12px; border-bottom:1px dashed #E6D2C1; page-break-inside:avoid;">
                    <p style="font-size:13.5px; color:#20130B; margin-bottom:8px; line-height:1.6;">${st.text}</p>
                    ${st.image ? `
                      <div class="pdf-img-container">
                        <img src="${resolveImagePath(st.image)}" alt="${st.caption || 'Ilustração Didática'}">
                        ${st.caption ? `<p class="pdf-img-caption">📷 <em>${st.caption}</em></p>` : ''}
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${sec.images && sec.images.length ? `
              <div class="pdf-img-grid${sec.imagesWide ? ' pdf-img-grid-wide' : ''}">
                ${sec.images.map(img => figure(img)).join('')}
              </div>
            ` : sec.image ? `
              ${figure({ src: sec.image, caption: sec.imageCaption || sec.caption || '' })}
            ` : ''}

            ${sec.boxTitle ? `
              <div class="box-callout box-${sec.boxType || 'tip'}">
                <strong>${sec.boxTitle}</strong>
                <span>${sec.boxText}</span>
              </div>
            ` : ''}
          </div>
        `).join('')}

        <div class="student-signature-box">
          <div class="signature-info">
            <img class="signature-avatar" src="${resolveImagePath('../../assets/img/professor-rangel.png')}" alt="Prof. Marcos Rangel">
            <div>
              <span style="font-weight:700; font-size:12.5px; color:#8E2C07;">Comprovante de Estudo & Frequência</span><br>
              <span style="font-size:11px; color:#A38470;">Portal Didático de Informática Básica • Prof. Marcos Rangel</span>
            </div>
          </div>
          <div class="signature-line">
            Assinatura do Aluno(a) / Data
          </div>
        </div>

        <div class="footer-pdf">
          <span>👨‍🏫 Prof. Marcos Rangel — okcomputer.use.linux@gmail.com</span>
          <span>🎓 WR Capacitação Profissional • WhatsApp: (19) 99130-6907</span>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 500);
          };
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(htmlContent);
    printWin.document.close();
  }

  return {
    downloadLessonPDF: downloadLessonPDF
  };
})();
