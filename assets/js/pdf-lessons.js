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
          chapter: "UNIDADE 1: CONCEITO E ESTRUTURA DO WINDOWS",
          heading: "1.1 O que é o Sistema Operacional?",
          content: "O Sistema Operacional (S.O.) é o software fundamental que gerencia o hardware do computador (processador, memória RAM, disco rígido/SSD) e possibilita a execução de aplicativos e a interação do usuário através de uma interface gráfica amigável."
        },
        {
          heading: "1.2 Área de Trabalho, Janelas e Barra de Tarefas",
          content: "A Área de Trabalho (Desktop) organiza os ícones de atalho e arquivos principais. A Barra de Tarefas exibe o Menu Iniciar, os programas fixados e a área de notificação com relógio e conexões."
        },
        {
          heading: "1.3 Gerenciamento de Arquivos e Pastas (Explorador de Arquivos)",
          content: "O Explorador de Arquivos (Tecla Windows + E) permite criar, renomear, mover, copiar e organizar pastas e documentos. Utilize nomes claros e estrutura em subpastas para manter seus arquivos organizados."
        },
        {
          heading: "1.4 Guia Completo de Atalhos de Teclado",
          content: `• Ctrl + C: Copiar item selecionado\n• Ctrl + V: Colar item copiado\n• Ctrl + X: Recortar (mover) item\n• Ctrl + Z: Desfazer a última ação\n• Alt + Tab: Alternar entre janelas abertas\n• Tecla Windows + D: Exibir ou ocultar a Área de Trabalho\n• Tecla Windows + E: Abrir o Explorador de Arquivos\n• Tecla Windows + L: Bloquear a estação de trabalho imediatamente\n• Alt + F4: Fechar o programa ativo`
        },
        {
          heading: "1.5 Lixeira, Segurança e Manutenção Preventiva",
          content: "Arquivos excluídos com a tecla Delete vão para a Lixeira e podem ser restaurados. Para apagar permanentemente, utilize Shift + Delete. Mantenha o Windows Defender ativo e o Windows Update atualizado."
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
          heading: "4.1 Revisão Rápida da Função SE()",
          content: `A função SE() é a base de tudo nesta aula. Ela faz uma pergunta ao Excel e devolve um resultado dependendo da resposta: VERDADEIRO ou FALSO.\n\nPense assim: é como perguntar ao Excel — Se isso for verdade, faça X; caso contrário, faça Y.\n\nSINTAXE: =SE( teste_lógico ; valor_se_verdadeiro ; valor_se_falso ) — 3 partes separadas por ponto e vírgula.\n\nEXEMPLO — Aluno aprovado ou reprovado: =SE(B2>=7; "Aprovado"; "Reprovado"). Se a nota em B2 for >= 7, escreve "Aprovado". Senão, "Reprovado".\n\nPLANILHA — Aprovação de Alunos (Função SE):\n<div style="margin:10px 0; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden; font-family:'Helvetica Neue',Arial,sans-serif;">\n  <div style="background:#217346; color:#FFFFFF; font-weight:bold; padding:8px 14px;">Planilha — Aprovação de Alunos (Função SE)</div>\n  <table style="width:100%; border-collapse:collapse; font-size:12.5px;">\n    <tr>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Aluno</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Nota</td>\n      <td style="background:#D9EAF7; text-align:center; border:1px solid #CBD5E1; padding:6px; color:#475569;">Resultado</td>\n    </tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Ana</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">8,5</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Aprovado</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Carlos</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">5,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Reprovado</td></tr>\n    <tr><td style="border:1px solid #E2E8F0; padding:6px;">Maria</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">7,0</td><td style="border:1px solid #E2E8F0; padding:6px; text-align:center;">Aprovado</td></tr>\n  </table>\n</div>`,
          boxType: "tip",
          boxTitle: "💡 O SE faz uma pergunta",
          boxText: "O Excel testa a condição e escolhe entre dois caminhos: o valor se for verdadeiro ou o valor se for falso. É a base de todas as análises lógicas."
        },
        {
          lessonNum: 5,
          chapter: "AULA 05: FUNÇÕES DE PESQUISA E REFERÊNCIA — PROCV, PROCH, ÍNDICE E CORRESP",
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
      excel: {
        1: "Aula 01: Introdução ao Excel, Interface, Tipos de Dados e Navegação",
        2: "Aula 02: Operações Básicas & Fórmulas Simples",
        3: "Aula 03: Funções de Cálculo — SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM",
        4: "Aula 04: Funções Lógicas Avançadas — SE, E, OU, NÃO, SE Aninhado e Formatação Condicional",
        5: "Aula 05: Funções de Pesquisa e Referência — PROCV, PROCH, ÍNDICE, CORRESP"
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
          .pdf-img-grid {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            margin: 20px 0 14px 0;
            page-break-inside: avoid;
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
            
            ${sec.steps && sec.steps.length ? `
              <div class="steps-container">
                ${sec.steps.map(st => `
                  <div class="step-item-block" style="margin-top:14px; margin-bottom:18px; padding-bottom:12px; border-bottom:1px dashed #E6D2C1; page-break-inside:avoid;">
                    <p style="font-size:13.5px; color:#20130B; margin-bottom:8px; line-height:1.6;">${st.text}</p>
                    ${st.image ? `
                      <div class="pdf-img-container" style="text-align:center; margin:14px 0 10px 0;">
                        <img src="${resolveImagePath(st.image)}" alt="${st.caption || 'Ilustração Didática'}" style="max-width:96%; max-height:480px; width:auto; height:auto; object-fit:contain; border-radius:10px; border:1.5px solid #E6D2C1; box-shadow:0 4px 12px rgba(0,0,0,0.1); background:#FFFFFF; padding:4px;">
                        ${st.caption ? `<p style="margin-top:6px; font-size:11.5px; color:#6B4E3D; text-align:center; font-style:italic;">📷 <em>${st.caption}</em></p>` : ''}
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${sec.images && sec.images.length ? `
              <div class="pdf-img-grid">
                ${sec.images.map(img => `<img src="${resolveImagePath(img)}" alt="Ilustração Didática">`).join('')}
              </div>
            ` : sec.image ? `
              <div class="pdf-img-container">
                <img src="${resolveImagePath(sec.image)}" alt="Ilustração Didática">
              </div>
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
