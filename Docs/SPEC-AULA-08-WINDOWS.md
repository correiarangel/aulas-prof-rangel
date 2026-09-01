# 🏛️ SPEC-008 — Especificação Técnica e Pedagógica da Aula 8 (Windows)
### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 8 do Módulo Windows** é um módulo de aprendizado **Prático Orientado ("Mão na Massa")**, desenvolvido para execução presencial em ambiente de laboratório. O aluno lê as instruções na tela e executa simultaneamente no computador real.

### Core Topics (5 Tópicos Didáticos):
1. **Diagnóstico de Memória RAM do Windows**: Verificação de falhas físicas e congelamentos via ferramenta nativa.
2. **Restauração do Windows 11**: Recuperação de sistema com opção de manutenção vs remoção total de arquivos pessoais.
3. **Restauração do Windows 10 e Windows 7 (Pontos de Restauração)**: Reversão para estados anteriores funcionais via Painel de Controle e comando `rstrui`.
4. **Criando Pendrive de Instalação do Windows (10 e 11)**: Criação de mídia de boot oficial via Media Creation Tool da Microsoft.
5. **Solução de Erros & Formatação do Pendrive**: Preparação do pendrive no sistema de arquivos FAT32 (Padrão).

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 1 / Aula 08** | Diagnóstico de Memória, Restauração do Sistema e Criação de Mídia de Instalação no Windows | `wr0926` | 🔒 Oculta (Acesso Restrito) |

---

## 🖼️ 3. Mapeamento das 28 Imagens Ilustrativas

As imagens estão localizadas na pasta `assets/img/windows/Aula8/`:

| Tópico | Nome do Arquivo | Função Pedagógica / Tela Exibida |
| :--- | :--- | :--- |
| **Tópico 1** | `image7.jpg` | Janela "Diagnóstico de Memória do Windows" com opção de reiniciar |
| **Tópico 2** | `image21.jpg` | Menu Configurações do Windows 11 (Sistema > Recuperação) |
| **Tópico 2** | `image16.jpg` | Opção "Restaurar o computador" nas Configurações do Windows 11 |
| **Tópico 2** | `image19.jpg` | Menu de recuperação do Windows 10 (Processo equivalente ao Windows 11) |
| **Tópico 2** | `image18.jpg` | Tela "Manter meus arquivos" vs "Remover tudo" |
| **Tópico 3** | `image26.jpg` | Painel de Controle do Windows 7 (Sistema e Segurança) |
| **Tópico 3** | `image20.jpg` | Central de Ações > Restaurar um estado anterior do computador |
| **Tópico 3** | `image4.jpg` | Assistente de Restauração do Sistema (Janela Principal) |
| **Tópico 3** | `image13.jpg` | Assistente de Restauração do Sistema (Clique em Avançar) |
| **Tópico 3** | `image25.jpg` | Lista de Pontos de Restauração por Data e Hora |
| **Tópico 4** | `image24.png` | Site oficial de download do Windows 10 (Microsoft) |
| **Tópico 4** | `image12.png` | Botão "Baixar Agora" na seção de criação de mídia do Windows 10 |
| **Tópico 4** | `image15.png` | Site oficial de download do Windows 11 (Assistente de Instalação) |
| **Tópico 4** | `image8.png` | Arquivo `MediaCreationTool.exe` na pasta Downloads |
| **Tópico 4** | `image22.png` | Menu de contexto (Botão direito > Executar como administrador) |
| **Tópico 4** | `image27.png` | Tela de Termos de Licença do Windows |
| **Tópico 4** | `image3.png` | Pergunta "O que você deseja fazer?" > Criar mídia de instalação |
| **Tópico 4** | `image6.png` | Tela de seleção de idioma, edição e arquitetura (32/64 bits) |
| **Tópico 4** | `image5.png` | Opção marcada "Usar as opções recomendadas para este computador" |
| **Tópico 4** | `image9.png` | Escolha entre Unidade flash USB e Arquivo ISO |
| **Tópico 4** | `image14.png` | Detalhe da seleção de mídia |
| **Tópico 4** | `image11.png` | Seleção da unidade flash USB conectada |
| **Tópico 4** | `image23.png` | Progresso "Fazendo alguns preparativos" |
| **Tópico 4** | `image28.png` | Progresso "Baixando o Windows" com porcentagem |
| **Tópico 4** | `image17.png` | Mensagem de conclusão: "Sua unidade flash USB está pronta" |
| **Tópico 5** | `image2.png` | Menu de contexto do ícone do pendrive no Explorador de Arquivos |
| **Tópico 5** | `image10.png` | Opção "Formatar..." destacada no menu |
| **Tópico 5** | `image1.png` | Janela de formatação com Sistema de arquivos FAT32 (Padrão) |

---

## 📝 4. Especificação do Quiz de Fixação (5 Questões)

1. **Questão 1 (Diagnóstico de RAM)**:
   - *Pergunta*: Qual ferramenta nativa do Windows é utilizada para testar a memória RAM em busca de falhas físicas e travamentos?
   - *Alternativas*:
     - a) Limpeza de Disco
     - b) Diagnóstico de Memória do Windows [Correta]
     - c) Gerenciador de Dispositivos
     - d) Desfragmentador de Unidades
   - *Dica*: É acessada digitando seu nome na busca do Windows (Win + S) e exige reiniciar a máquina.

2. **Questão 2 (Restauração do Windows 11)**:
   - *Pergunta*: Ao restaurar o Windows 11 no menu Configurações (Win + I), qual opção exclui os programas instalados, mas PRESERVA os documentos e arquivos pessoais?
   - *Alternativas*:
     - a) "Remover tudo"
     - b) "Manter meus arquivos" [Correta]
     - c) "Formatação Profunda"
     - d) "Limpeza Total de Disco"
   - *Dica*: É a primeira opção recomendada para resolver problemas no sistema sem perder seus trabalhos.

3. **Questão 3 (Comando `rstrui`)**:
   - *Pergunta*: Qual comando pode ser digitado na caixa Executar (Win + R) ou no Prompt de Comando (cmd) para abrir diretamente o assistente de Restauração do Sistema?
   - *Alternativas*:
     - a) `rstrui` [Correta]
     - b) `format`
     - c) `chkdsk`
     - d) `cleanmgr`
   - *Dica*: O nome é uma abreviação em inglês de "Restore User Interface" (rstrui).

4. **Questão 4 (Capacidade Mínima Mídia USB)**:
   - *Pergunta*: Qual a capacidade mínima de armazenamento recomendada para o Pendrive ao criar uma mídia de instalação do Windows 10 ou 11 através da Media Creation Tool?
   - *Alternativas*:
     - a) 2 GB
     - b) 4 GB
     - c) 8 GB [Correta]
     - d) 64 GB
   - *Dica*: A imagem do sistema Windows exige um pendrive com pelo menos 8 Gigabytes de espaço livre.

5. **Questão 5 (Formatação FAT32)**:
   - *Pergunta*: Se a ferramenta de criação de mídia apresentar erro ao tentar gravar no pendrive, qual sistema de arquivos padrão é recomendado selecionar ao formatar o pendrive?
   - *Alternativas*:
     - a) NTFS
     - b) FAT32 (Padrão) [Correta]
     - c) exFAT
     - d) EXT4
   - *Dica*: É o formato universal de arquivos reconhecido por quase todas as ferramentas de boot e placas-mãe.

---

## 🎨 5. Regras de Design e Ergonomia de Tela (Botão de PDF no Topo)

- **Botão de PDF na Barra Superior / Início da Aula**: O botão `📑 Baixar Apostila Didática em PDF` fica visível no início do cartão da aula (ao lado dos badges de identificação e botões de navegação), permitindo que o aluno baixe a apostila completa antes de iniciar a leitura ou prática.
- **Acessibilidade & Atalhos Visuais**: Teclas de atalho apresentadas em estilo `<kbd>` de alta legibilidade (ex: `<kbd>Win</kbd> + <kbd>S</kbd>`).
