# 🏛️ SPEC-008A — Especificação Técnica e Pedagógica do Complemento 8A (Windows)
### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional
### Complemento 8A: Tutorial — Como Criar Pendrive/DVD de Instalação do Windows

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

O **Complemento 8A — "Tutorial de Criação de Mídia de Instalação"** é um guia **Prático Orientado ("Mão na Massa")** que ensina a preparar um pendrive ou DVD com os arquivos de instalação do Windows usando a **Media Creation Tool** oficial da Microsoft (mesmo procedimento explorado na Aula 8, agora em formato passo a passo didático).

### Core Topics (6 Tópicos Didáticos):
1. **Introdução e Material Necessário**: O que é uma mídia de instalação e o material exigido (pendrive ≥ 8 GB + internet).
2. **Baixando a Media Creation Tool**: Download **somente do site oficial Microsoft** — nunca de sites piratas.
3. **Executando o Assistente de Instalação**: Telas iniciais, licença e opção "Criar mídia de instalação".
4. **Escolhendo Idioma, Edição e Arquitetura**: Opções recomendadas (PT-BR, 64 bits).
5. **Pendrive USB ou Arquivo ISO?**: Diferença entre gravar direto no pendrive vs baixar ISO (ex.: para DVD).
6. **Resolvendo o Erro de Formatação (FAT32)**: Reformatar o pendrive em FAT32 para resolver falhas de gravação.

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 1 / Complemento 8A** | Tutorial: Como Criar Pendrive/DVD de Instalação do Windows | `wr0926` | 🔒 Oculta (Acesso Restrito) |

> Compartilha a senha da Aula 8 (`wr0926`). Desbloqueio via modal portal padrão; senhas de teste `a001/b002/c003/d004/h008/wr2026` também aceitas.

---

## 🖼️ 3. Mapeamento das Imagens Ilustrativas

As imagens estão localizadas na pasta `assets/img/windows/Aula8TutorialMidia/`:

| Tópico | Nome do Arquivo | Função Pedagógica / Tela Exibida |
| :--- | :--- | :--- |
| **Tópico 1** | `image1.png` | Introdução do tutorial e material necessário (pendrive + internet) |
| **Tópico 2** | `image1.png` | Localizando a Media Creation Tool na página da Microsoft (clique em "Baixar agora") |
| **Tópico 2** | `image3.png` | Download do arquivo `MediaCreationTool.exe` selecionado no navegador |
| **Tópico 2** | `image2.png` | Arquivo da ferramenta salvo na pasta Download |
| **Tópico 3** | `image5.png` | Assistente iniciando as alterações |
| **Tópico 3** | `image4.png` | Tela "Preparando tudo" |
| **Tópico 3** | `image7.png` | Avisos e termos de licença da Microsoft |
| **Tópico 3** | `image6.png` | Seleção da opção "Criar mídia de instalação (pendrive USB, DVD ou arquivo ISO)" |
| **Tópico 4** | `image9.png` | "Usar as opções recomendadas para este computador" |
| **Tópico 4** | `image8.png` | Confirmação do idioma (Português Brasil) |
| **Tópico 4** | `image12.png` | Detalhes finais da instalação (idioma, edição, arquitetura) |
| **Tópico 5** | `image10.png` | Escolha "Unidade flash USB" vs "Arquivo ISO" |
| **Tópico 5** | `image11.png` | Seleção da letra da unidade flash USB conectada |
| **Tópico 5** | `image13.png` | Preparação do pendrive |
| **Tópico 5** | `image14.png` | Progresso do download do Windows |
| **Tópico 5** | `image15.png` | Conclusão: "Sua unidade flash USB está pronta" |
| **Tópico 6** | `image16.png` | Erro "A unidade precisa ter pelo menos 8 GB" |
| **Tópico 6** | `image17.png` | Menu de contexto do pendrive no Explorador de Arquivos → Formatar... |
| **Tópico 6** | `image18.png` | Janela de formatação com Sistema de arquivos FAT32 selecionado |

---

## ➡️ 4. Fluxo de Aprendizagem (FASE 0 + Checks Distribuídos)

- **FASE 0 (Bloco Introdutório Tutorial)**: objetivo + roteiro numerado em **6 passos** no topo do complemento, com "Resultado esperado" em caixa tracejada.
- **Checks distribuídos**: cada um dos 6 tópicos possui `check-read-81-N` ao FINAL da fase correspondente.
- **Trava sequencial**: `SEQUENTIAL_LESSONS[81] = true`, `TOTAL_TOPICS[81] = 6`; apenas `check-read-81-1` inicia liberado.

---

## 📝 5. Especificação do Quiz de Fixação (5 Questões × 2,0 pts = 10,0)

1. **Questão 1 (Ferramenta oficial)**:
   - *Pergunta*: Qual é o nome da ferramenta oficial gratuita da Microsoft usada para criar a mídia de instalação do Windows?
   - *Alternativas*:
     - a) Photoshop Express
     - b) Media Creation Tool [Correta]
     - c) WinRAR
     - d) CCleaner
   - *Dica*: Ela já foi usada na Aula 8 para criar o pendrive.

2. **Questão 2 (Capacidade mínima)**:
   - *Pergunta*: Qual é a capacidade mínima recomendada para o pendrive ao criar a mídia de instalação?
   - *Alternativas*:
     - a) 8 GB [Correta]
     - b) 256 MB
     - c) 1 GB
     - d) 32 MB
   - *Dica*: A imagem do Windows não cabe em pendrives pequenos.

3. **Questão 3 (Origem do download)**:
   - *Pergunta*: De onde o aluno deve baixar a Media Creation Tool?
   - *Alternativas*:
     - a) De qualquer site de download pirata
     - b) De um link enviado no WhatsApp por desconhecido
     - c) Do site oficial da Microsoft (microsoft.com) [Correta]
     - d) De fóruns de jogos
   - *Dica*: Versões falsas da ferramenta podem conter vírus.

4. **Questão 4 (Duas opções de saída)**:
   - *Pergunta*: No passo que pergunta "O que você deseja fazer?", quais são as duas opções de saída oferecidas?
   - *Alternativas*:
     - a) Disquete e CD
     - b) Unidade flash USB e Arquivo ISO [Correta]
     - c) HD interno e SSD
     - d) Cartucho e Nuvem
   - *Dica*: Uma amazonha direto no pendrive; a outra gera uma imagem para DVD.

5. **Questão 5 (Formatação FAT32)**:
   - *Pergunta*: Se aparecer erro ao gravar a mídia, qual sistema de arquivos é recomendado ao formatar o pendrive?
   - *Alternativas*:
     - a) FAT32 [Correta]
     - b) NTFS
     - c) exFAT
     - d) EXT4
   - *Dica*: É o formato universal compatível com a maioria dos programas de criação de mídia.

---

## 🎨 6. Regras de Design e Ergonomia de Tela

- **Botão de PDF no Início**: `📑 Baixar Apostila PDF` (`downloadLessonPDF('windows', 81)`) no topo do cartão e em `btn-download-pdf-81` do painel resultado.
- **Destaque visual da seção "Relembrando"**: o alerta sobre gravação apagar todo o pendrive usa caixa de aviso `warning` destacada.
- **Mobile**: regulado apenas pelo bloco `/* REGRAS MOBILE GLOBAIS */` do `assets/css/style.css`.