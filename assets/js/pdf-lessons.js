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
          content: "O Excel reconhece o tipo de dado digitado e ajusta o alinhamento automaticamente para evitar erros de cálculo:\n\n• Texto (Rótulos/Nomes): Alinhado automaticamente à ESQUERDA da célula.\n• Números e Moeda: Alinhados automaticamente à DIREITA da célula.\n• Datas e Horas: Alinhadas automaticamente à DIREITA da célula (ex: 15/09/2026).",
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

    if (lessonNum) {
      targetSections = data.sections.filter(sec => sec.lessonNum === null || sec.lessonNum === undefined || sec.lessonNum === lessonNum);
      if (lessonTitles[lessonNum]) {
        pdfTitle = `${data.moduleName} • ${lessonTitles[lessonNum]}`;
        pdfSubtitle = `Apostila Didática Exclusiva — ${lessonTitles[lessonNum]} — Prof. Marcos Rangel`;
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
