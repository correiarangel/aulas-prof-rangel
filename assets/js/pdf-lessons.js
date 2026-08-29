/**
 * Portal Didático — Prof. Marcos Rangel
 * Gerador e Conteúdo Didático das Aulas em PDF (Print-Friendly PDF Generator)
 */

window.PDFLessons = (function() {
  "use strict";

  const LESSONS = {
    windows: {
      title: "Módulo 1: Sistema Operacional Windows",
      subtitle: "Material Didático Oficial — Prof. Marcos Rangel",
      sections: [
        {
          heading: "1. O que é o Sistema Operacional?",
          content: "O Sistema Operacional (S.O.) é o programa principal do computador. Ele gerencia o hardware (processador, memória, disco) e fornece a interface visual para o usuário interagir com programas e arquivos. O Windows é o S.O. mais utilizado no mundo em computadores pessoais e corporativos."
        },
        {
          heading: "2. Área de Trabalho e Explorador de Arquivos",
          content: "A Área de Trabalho (Desktop) é a tela principal do Windows onde ficam os ícones de atalho e a Barra de Tarefas na parte inferior. O Explorador de Arquivos (File Explorer) permite organizar pastas, documentos, fotos e programas. Atalho para abrir o Explorador: Tecla Windows + E."
        },
        {
          heading: "3. Principais Atalhos de Teclado no Windows",
          content: `• Ctrl + C: Copiar item ou texto selecionado\n• Ctrl + V: Colar item ou texto copiado\n• Ctrl + X: Recortar (mover) item selecionado\n• Ctrl + Z: Desfazer a última ação realizada\n• Alt + Tab: Alternar rapidamente entre janelas abertas\n• Tecla Windows + D: Mostrar ou ocultar a Área de Trabalho\n• Alt + F4: Fechar a janela ou programa ativo\n• Tecla Windows + L: Bloquear o computador imediatamente`
        },
        {
          heading: "4. Lixeira e Exclusão de Arquivos",
          content: "Ao apagar um arquivo com a tecla Delete, ele é movido para a Lixeira, onde pode ser restaurado caso necessário. Para apagar permanentemente sem passar pela Lixeira, utiliza-se Shift + Delete (atenção: não há como desfazer)."
        },
        {
          heading: "5. Boas Práticas e Segurança Básica",
          content: "Mantenha o Windows Update sempre atualizado, utilize antivírus ativo (Windows Defender) e nunca compartilhe senhas de acesso. Sempre bloqueie o computador (Win + L) ao se ausentar do seu posto de trabalho."
        }
      ]
    },
    word: {
      title: "Módulo 2: Microsoft Word — Editor de Textos",
      subtitle: "Material Didático Oficial — Prof. Marcos Rangel",
      sections: [
        {
          heading: "1. Introdução ao Microsoft Word",
          content: "O Microsoft Word é o processador de texto mais utilizado para a criação de documentos profissionais, relatórios, cartas, currículos e trabalhos acadêmicos."
        },
        {
          heading: "2. Formatação de Fonte e Parágrafos",
          content: `Principais estilos de texto:\n• Negrito (Ctrl + N): Destaca palavras importantes.\n• Itálico (Ctrl + I): Utilizado para termos estrangeiros ou citações.\n• Sublinhado (Ctrl + S): Passa uma linha sob o texto.\n\nAlinhamentos de Parágrafo:\n• Alinhar à Esquerda (Ctrl + Q)\n• Centralizado (Ctrl + E)\n• Alinhar à Direita (Ctrl + G)\n• Justificado (Ctrl + J): Alinha margem esquerda e direita simultaneamente (padrão profissional e ABNT).`
        },
        {
          heading: "3. Inserção de Tabelas, Imagens e Quebras",
          content: "Na guia 'Inserir', você pode adicionar tabelas para organizar dados em linhas e colunas, imagens com ajuste de texto automático e Quebra de Página (Ctrl + Enter) para iniciar novos capítulos sem pressionar Enter repetidamente."
        },
        {
          heading: "4. Pincel de Formatação e Estilos",
          content: "O Pincel de Formatação (guia Página Inicial) permite copiar rapidamente a cor, fonte e tamanho de um trecho de texto e aplicar em outro com um único clique."
        },
        {
          heading: "5. Normas ABNT Básicas",
          content: "Fonte Arial ou Times New Roman tamanho 12 para o corpo do texto, espaçamento entre linhas de 1,5 cm e margens: Superior 3cm, Esquerda 3cm, Inferior 2cm e Direita 2cm."
        }
      ]
    },
    excel: {
      title: "Módulo 3: Microsoft Excel — Planilhas Eletrônicas",
      subtitle: "Material Didático Oficial — Prof. Marcos Rangel",
      sections: [
        {
          heading: "1. Estrutura Fundamental da Planilha",
          content: "O Excel organiza os dados em Colunas (identificadas por letras: A, B, C...) e Linhas (identificadas por números: 1, 2, 3...). O encontro de uma coluna com uma linha forma uma Célula (exemplo: A1, B5, C10)."
        },
        {
          heading: "2. Fórmulas e Operadores Matemáticos",
          content: `Toda fórmula no Excel DEVE obrigatoriamente iniciar com o sinal de igual (=).\n• Adição: + (Ex: =A1+B1)\n• Subtração: - (Ex: =A1-B1)\n• Multiplicação: * (Ex: =A1*B1)\n• Divisão: / (Ex: =A1/B1)\n• Exponenciação: ^ (Ex: =A1^2)`
        },
        {
          heading: "3. Funções Fundamentais do Excel",
          content: `• =SOMA(A1:A10): Soma todos os valores no intervalo de A1 até A10.\n• =MÉDIA(A1:A10): Calcula a média aritmética dos valores.\n• =MÁXIMO(A1:A10): Retorna o maior valor encontrado no intervalo.\n• =MÍNIMO(A1:A10): Retorna o menor valor encontrado no intervalo.\n• =CONT.SE(A1:A10; ">=7"): Conta quantas células atendem ao critério especificado.`
        },
        {
          heading: "4. Função Lógica =SE()",
          content: `A função SE realiza um teste lógico e retorna um valor se for VERDADEIRO e outro se for FALSO.\nSintaxe: =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)\nExemplo: =SE(B2>=7; "APROVADO"; "REPROVADO")`
        },
        {
          heading: "5. Gráficos e Formatação Condicional",
          content: "Gráficos de Colunas e Pizza transformam números em dados visuais de fácil compreensão. A Formatação Condicional altera automaticamente a cor da célula (ex: vermelho para notas baixas, verde para notas altas) de acordo com regras pré-definidas."
        }
      ]
    },
    powerpoint: {
      title: "Módulo 4: Microsoft PowerPoint — Apresentações Visuais",
      subtitle: "Material Didático Oficial — Prof. Marcos Rangel",
      sections: [
        {
          heading: "1. Conceito e Objetivo do PowerPoint",
          content: "O PowerPoint é a ferramenta de criação de apresentações de slides utilizada para expor ideias, projetos, aulas e relatórios de forma visualmente atraente e dinâmica."
        },
        {
          heading: "2. Estrutura de Slides e Layouts",
          content: "Cada apresentação é composta por uma sequência de Slides. Na guia 'Página Inicial' -> 'Novo Slide', é possível escolher layouts específicos como Slide de Título, Título e Conteúdo ou Duas Partes de Conteúdo."
        },
        {
          heading: "3. Transições e Animações",
          content: `• Transição de Slides: Efeito visual aplicado quando se passa de um slide para o outro (ex: Esmaecer, Empurrar, Transição suave).\n• Animação de Objetos: Efeito aplicado a textos, imagens ou gráficos dentro de um mesmo slide para controlar a ordem de aparecimento dos elementos.`
        },
        {
          heading: "4. Modo de Exibição e Atalhos",
          content: `• F5: Inicia a apresentação de slides desde o primeiro slide.\n• Shift + F5: Inicia a apresentação a partir do slide selecionado atualmente.\n• Tecla ESC: Encerra a exibição da apresentação a qualquer momento.`
        },
        {
          heading: "5. Boas Práticas para Apresentações Profissionais",
          content: "Evite blocos de texto muito longos; prefira tópicos curtos (bullet points). Use bom contraste entre o fundo e a cor do texto e escolha imagens de alta qualidade para ilustrar os conceitos abordados."
        }
      ]
    },
    internet: {
      title: "Módulo 5: Internet, Nuvem e Navegação Segura",
      subtitle: "Material Didático Oficial — Prof. Marcos Rangel",
      sections: [
        {
          heading: "1. O que é a Internet e a World Wide Web",
          content: "A Internet é uma rede mundial de computadores conectada globalmente. A World Wide Web (WWW), criada por Tim Berners-Lee em 1989, é o sistema de páginas e hiperlinks que navegamos diariamente."
        },
        {
          heading: "2. Tipos de Redes de Computadores",
          content: `• LAN (Local Area Network): Rede local (ex: Wi-Fi da sua casa ou escritório).\n• MAN (Metropolitan Area Network): Rede metropolitana abrangendo uma cidade.\n• WAN (Wide Area Network): Rede de longa distância conectando países e continentes.`
        },
        {
          heading: "3. Navegadores (Browsers) e Atalhos",
          content: `Programas como Google Chrome, Microsoft Edge e Mozilla Firefox permitem acessar sites.\nAtalhos úteis:\n• Ctrl + T: Abre uma nova guia de navegação.\n• Ctrl + W: Fecha a guia atual.\n• Ctrl + Shift + N: Abre uma janela em Modo Anônimo (não salva histórico local).\n• Ctrl + D: Adiciona a página atual aos Favoritos.`
        },
        {
          heading: "4. Prevenção Contra Golpes Virtuais",
          content: `• Phishing: E-mails ou mensagens falsas que se passam por bancos para roubar senhas.\n• Boleto Falso: Confira sempre o beneficiário e o CNPJ antes de efetuar o pagamento.\n• Sites Falsos: Verifique se o endereço possui o cadeado de segurança (https://) e evite ofertas absurdamente baratas.`
        },
        {
          heading: "5. Computação em Nuvem (Cloud Computing)",
          content: "Serviços como Google Drive, OneDrive e Dropbox armazenam seus arquivos com segurança na nuvem, permitindo acessá-los de qualquer computador ou celular com internet."
        }
      ]
    }
  };

  function downloadLessonPDF(moduleId) {
    const data = LESSONS[moduleId] || LESSONS.windows;
    
    const printWin = window.open("", "_blank", "width=850,height=950");
    if (!printWin) {
      alert("Por favor, permita pop-ups no seu navegador para visualizar e baixar o PDF da aula.");
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>${data.title} — PDF Didático</title>
        <style>
          @page { size: A4; margin: 20mm; }
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            color: #1a1a1a;
            line-height: 1.6;
            margin: 0;
            padding: 24px;
            background: #fff;
          }
          .header-pdf {
            border-bottom: 3px solid #EA580C;
            padding-bottom: 14px;
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          .header-pdf h1 {
            font-size: 24px;
            color: #8E2C07;
            margin: 0 0 6px 0;
          }
          .header-pdf p {
            font-size: 14px;
            color: #666;
            margin: 0;
          }
          .badge-wr {
            background: #FFE4C7;
            color: #8A5A17;
            font-weight: bold;
            font-size: 12px;
            padding: 6px 12px;
            border-radius: 6px;
            text-transform: uppercase;
          }
          .section-box {
            background: #FAFAFA;
            border: 1px solid #E5E5E5;
            border-left: 4px solid #EA580C;
            border-radius: 8px;
            padding: 16px 20px;
            margin-bottom: 18px;
            page-break-inside: avoid;
          }
          .section-box h2 {
            font-size: 17px;
            color: #20130B;
            margin-top: 0;
            margin-bottom: 8px;
          }
          .section-box p {
            font-size: 14px;
            color: #333;
            margin: 0;
            white-space: pre-line;
          }
          .footer-pdf {
            margin-top: 30px;
            padding-top: 14px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #777;
            display: flex;
            justify-content: space-between;
          }
          .btn-print {
            position: fixed;
            top: 16px;
            right: 16px;
            background: #EA580C;
            color: #fff;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }
          @media print {
            .btn-print { display: none; }
          }
        </style>
      </head>
      <body>
        <button class="btn-print" onclick="window.print()">🖨️ Salvar como PDF / Imprimir</button>
        
        <div class="header-pdf">
          <div>
            <h1>${data.title}</h1>
            <p>${data.subtitle}</p>
          </div>
          <div class="badge-wr">WR CAPACITAÇÃO</div>
        </div>

        ${data.sections.map(sec => `
          <div class="section-box">
            <h2>${sec.heading}</h2>
            <p>${sec.content}</p>
          </div>
        `).join('')}

        <div class="footer-pdf">
          <span>Prof. Marcos Rangel — okcomputer.use.linux@gmail.com</span>
          <span>WR Capacitação Profissional • WhatsApp: (19) 99130-6907</span>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 400);
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
