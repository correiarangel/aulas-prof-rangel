# SPEC-001 — Especificação Técnica e Pedagógica da Aula 1 (Windows)
### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: ✅ IMPLEMENTADA E VALIDADA (30/09/2026) — checklist §9 integralmente marcado; PDF conferido
> Conferido em 04/10/2026: senha `wr0126`, 7 checks em 6 fases, termômetro interativo, quiz 5/5 com persistência real (regra 7) e "Recomeçar o exercício", **leitura persistente com "↺ Recomeçar a leitura" (L-01)**, guarda de apostila vazia (L-04), Windows 29/29 seções ilustradas e 70/70 imagens legendadas no PDF, painel "Saiba mais: o Linux" como filho direto de `<body>` (regra 10). Pendências residuais em `Docs/CONTINUACAO.md` (sessão de 04/10/2026).

---

## 🎯 1. Análise da Base de Informação (material de origem)

### 1.1 Arquivos analisados

| Arquivo | Tamanho | Papel |
| :--- | :--- | :--- |
| `AulaOrigem/windows/Aula1_Historia_e_Funcionamento_dos_Computadores/Aula1_Historia_e_Funcionamento_dos_Computador.html` | 29.656 B (1 linha) | **Apostila da aula** — 128 parágrafos, 12 tabelas, 7 imagens, 3 separadores |
| `AulaOrigem/windows/Aula1_Historia_e_Funcionamento_dos_Computadores/images/image1..7.png` | 105 KB – 525 KB | 7 figurasdidáticas |
| `AulaOrigem/windows/Aula1_Historia_e_Funcionamento_dos_Computadores/Informatica Básica Aula 1.txt` | 1.166 B | Roteiro do autor (links e textos de apoio) |
| `AulaOrigem/windows/Aula1_Historia_e_Funcionamento_dos_Computadores/Informatica Básica Aula 1.odp` | 7,5 MB | Arquivo-fonte OpenOffice (equivalente do HTML — **não usado**, o HTML traz o mesmo conteúdo em texto puro) |

### 1.2 Título e subtítulo da apostila de origem

> **INFORMÁTICA PARA TODOS — AULA 1**
> **A História e o Funcionamento dos Computadores**
> *Da Segunda Guerra Mundial ao computador que você usa hoje*

### 1.3 Estrutura do conteúdo (5 blocos temáticos + abertura)

| # | Bloco | Conteúdo extraído | Tabelas |
|:--|:---|:---|:--:|
| 0 | **Abertura** | Capa + imagem de destaque das programadoras do ENIAC (ARL Technical Library / U.S. Army) | — |
| 1 | **A História dos Computadores** | 2ª Guerra Mundial (1939-1945) como origem da necessidade de cálculo; Alan Turing e a máquina Enigma; linha do tempo com **1975 Bill Gates funda a Microsoft** (1985 → Windows 1.0) e **1976 Steve Jobs cofunda a Apple** (Apple I; interface gráfica; iPhone em 2007) | 1 (linha do tempo) |
| 2 | **Como Funcionam os Computadores** | Computador = "grande calculadora"; informação em apenas **2 estados** → código binário (1 ligado / 0 desligado); **3 etapas**: Entrada → Processamento → Saída | 2 (binário + etapas) |
| 3 | **Hardware e Software** | Duas partes: o que se toca × o que só se vê na tela | 1 (5 linhas × Hardware/Software) |
| 4 | **Componentes Principais** | Placa-mãe · Processador (CPU) · Memória RAM · HD/SSD (SSD = 2008) · Placa de vídeo · Fonte de alimentação | 1 (6 linhas) |
| 5 | **Introdução aos Sistemas Operacionais** | Definição de SO; linha do tempo (1971 Unix · 1981 IBM PC · 1985 Windows 1.0 · 1991 Linux/Linus Torvalds · 2007 iOS · 2008 Android); tipos atuais: Windows · Linux · macOS · Android/iOS | 2 (linha do tempo + tipos) |

### 1.4 Inventário das 7 imagens e o que elas mostram

| Arquivo | Onde entra | O que a figura mostra (pela legenda/posição na apostila) | Legenda didática a usar |
| :--- | :--- | :--- | :--- |
| `image6.png` | Abertura (1º contato) | Programadoras operando o primeiro computador eletrônico da história, o **ENIAC** · Foto: ARL Technical Library / U.S. Army | *Programadoras operam o ENIAC, apresentado em fevereiro de 1946 — o primeiro computador eletrônico da história (Foto: ARL Technical Library / U.S. Army).* |
| `image1.png` | Bloco 1 — História | **Alan Turing e a máquina Enigma** | *Alan Turing e a máquina Enigma, usada pelos alemães na Segunda Guerra Mundial para codificar mensagens.* |
| `image7.png` | Bloco 1 — História | **Bill Gates** (com o logo do Windows 1.0 ao fundo) e **Steve Jobs** (com o Macintosh) | *Bill Gates (fundador da Microsoft, 1975) e Steve Jobs (cofundador da Apple, 1976): dois lados da mesma revolução dos computadores pessoais.* |
| `image5.png` | Bloco 2 — Funcionamento | Teclado/mouse (**Entrada**) → ícone de processador (**Processamento**) → monitor (**Saída**) | *O caminho de toda informação: você digita no teclado (entrada), a CPU processa (processamento) e o monitor mostra o resultado (saída).* |
| `image4.png` | Bloco 3 — Hardware × Software | Relação entre as duas partes (legenda original no material: apenas "Imagem 5") | *Hardware é a parte física (teclado, mouse, monitor, CPU, RAM) e software é a parte lógica (sistema operacional, navegadores, antivírus) — um não funciona sozinho sem o outro.* |
| `image2.png` | Bloco 4 — Componentes | Placa-mãe de PC (Gigabyte Z17X-GAMING G1) e os componentes que ela reúne | *Plaça-mãe é o "esqueleto" do computador: conecta processador, memória RAM, HD/SSD, placa de vídeo e fonte.* |
| `image3.png` | Bloco 5 — Sistemas Operacionais | Logotipos de Unix, IBM PC, Windows, Linux, iOS e Android | *De Unix a Android: os sistemas operacionais que organizam o computador e o celular — Windows, Linux, macOS, Android e iOS.* |

### 1.5 Conteúdo extra do `.txt` (aproveitável como "bônus do professor")

- Link de apoio: **"Quem foi Alan Turing? Conheça as contribuições do cientista na computação" (Tecnoblog)**.
- **Filme recomendado: *O Jogo da Imitação*** — conta a história de Alan Turing.
- **ENIAC**: "em fevereiro de 1946 foi apresentado — primeiro computador eletrônico da história".
- **Placa mãe**: "PC Gigabyte Z17X-GAMING G1" (exemplo concreto de placa-mãe real).
- **Definição de SO** (texto do autor): *"O Sistema Operacional gerencia todos os recursos de hardware e software do dispositivo, funcionando como uma ponte de comunicação entre o usuário, os aplicativos e os componentes físicos da máquina."*

> 💡 **Regra de paráfrase** (mesma do `Docs/SDD-AULA-10-VBA-AVANCADO.md` §5): o texto da apostila de origem **não pode ser copiado literalmente** para o portal/PDF. Todo conteúdo acima foi reescrito como texto próprio do professor, mantendo os fatos e as datas.

### 1.6 Diagnóstico: o que já existe no portal para esta aula

| Item | Estado atual | Conflito |
| :--- | :--- | :--- |
| Card do hub | `modules/windows/index.html:212` → `promptLessonPassword(1, 'Conceito e Estrutura do Sistema Operacional')`, nome visível **"Introdução ao Windows & Interface"**, marcado **"🚧 Em Construção"** | ⚠️ O material de origem é **História + Funcionamento dos Computadores**, não "Interface". O card precisa ser renomeado. |
| Senha | `promptLessonPassword` barra tudo fora de `OPEN_LESSONS = [7, 8, 71, 81]` (`index.html:2578`) | Precisa incluir `1` + senha própria. |
| Tela | **não existe** `screen-lesson-1` | Criar. |
| Fases/gating | `TOTAL_TOPICS = {7:7, 8:5, 71:4, 81:6}` e `SEQUENTIAL_LESSONS = {7,71,81}` (`index.html:2646-2647`) | Adicionar `1`. |
| Quiz | `QUIZ_CFG` tem `7`, `71`, `81` (`index.html:2861`); renderer genérico `renderQuestionGen`/`renderResultGen`/`getReportDataGen` **já é reutilizável** | Adicionar `QUESTIONS_LESSON_1` + `QUIZ_CFG[1]` + wiring no forEach `[7, 71, 81]` → `[1, 7, 71, 81]`. |
| PDF | `LESSONS.windows` **não tem nenhuma seção `lessonNum: 1`** (só 7→7, 8→5, 71→4, 81→6) | Criar as seções 1.0–1.5. |
| Título do PDF | `moduleLessonTitles.windows[1] = "Aula 01: Conceito e Estrutura do Sistema Operacional (Windows)"` (`pdf-lessons.js:2221`) | Atualizar para o novo título. |
| Imagens | `assets/img/windows/` tem `Aula7`, `Aula7ComplementoBackup`, `Aula8`, `Aula8TutorialMidia` — **nenhuma pasta da Aula 1** | Criar `assets/img/windows/Aula1/` com as 7 PNGs. |

---

## 📐 2. Definição da Aula (decisões de projeto)

| Item | Decisão |
| :--- | :--- |
| **Título na apostila** | **A História e o Funcionamento dos Computadores** — *Da Segunda Guerra Mundial ao computador que você usa hoje* |
| **Nome no card do hub** | `AULA 01` · **A História e o Funcionamento dos Computadores** |
| **Título no `promptLessonPassword`** | `'A História e o Funcionamento dos Computadores'` |
| **Título no PDF** | `Aula 01: A História e o Funcionamento dos Computadores` |
| **Rota** | `screen-lesson-1` (nova) · botão "← Voltar ao Menu" → `showScreen('screen-hub')` |
| **Senha secreta** | **`wr0126`** ⚠️ *decisão do professor* — segue o padrão `wr0726` (Aula 7) / `wr0926` (Aula 8); o modal nunca mostra a senha |
| **Fases** | **6** (uma por bloco temático da origem) + **FASE 0** introdutória + quiz — a 6ª fase é a **Consolidação** (revisão + Termômetro do Hardware) |
| **Checks** | **7** (`check-read-1-1..7`): 1 no fim da FASE 0 + 1 ao fim de cada uma das 6 fases, **gating sequencial** (`SEQUENTIAL_LESSONS[1] = true`) |
| **Quiz** | 5 questões de múltipla escolha, aprovação ≥ **7,0** (`PASS_SCORE`), hash SHA-256 + TXT/WhatsApp/Gmail, **persistência real em `localStorage`** (`windows-aula-1:aluno(a)`) com botão **↺ Recomeçar o exercício** |
| **Imagens** | As **7** PNGs reais em `assets/img/windows/Aula1/`, todas com legenda (`{src, caption}`) no PDF |
| **Simulador** | Não se aplica (aula teórica). No lugar: **"Termômetro do Hardware"** — lista interativa "toque / não toque" para o aluno classificar hardware e software (§7) |

---

## 🎓 3. Estrutura Pedagógica da Aula (FASE 0 + 6 fases)

### 3.1 FASE 0 — O que vamos fazer (objetivo + roteiro numerado)

- 🎯 **Objetivo**: entender **de onde vieram os computadores**, **como eles pensam por dentro** (0 e 1) e **de que são feitos** (hardware e software), para nunca mais olhar para a sua máquina como algo mágico.
- 🗺️ **Roteiro numerado (chips, sem checkbox)** — 6 passos:
  1. Voltar no tempo: a Guerra e o primeiro computador (ENIAC)
  2. Os nomes que mudaram tudo: Turing, Gates e Jobs
  3. Como o computador "pensa": o código binário (0 e 1)
  4. O caminho da informação: Entrada → Processamento → Saída
  5. Hardware × Software: o que se toca e o que se vê
  6. As peças do computador e o Sistema Operacional
- 🏁 **O que você vai conseguir no final**: apontar para qualquer computador e dizer **qual peça faz o quê** e **por que a tela só funciona se existir um sistema operacional**.
- ⚙️ **Faixa de preparação**: "Nenhum programa é necessário — é só leitura. Se quiser, abra o seu PC e fique com ele do lado."
- Botão "▶ ENTENDI! QUERO COMEÇAR ↓" → rola até `l1-phase-1` (sempre habilitado, como nas Aulas 2/3/8).

### 3.2 As 6 fases (uma por bloco da apostila de origem)

| Fase | ID | Título didático | Conteúdo (paráfrase própria) | Figura |
| :--|:---|:---|:---|:---|
| 1 | `l1-phase-1` | **1.1 A História dos Computadores** | Os computadores não nasceram prontos: a 2ª Guerra Mundial (1939-1945) exigia cálculos impossíveis para o papel. **Fev/1946: ENIAC**, primeiro computador eletrônico da história — as **programadoras** (mulheres que programavam à mão) que aparecem na capa. Alan Turing e a **máquina Enigma**. Caixa 💡: *"filme recomendado: O Jogo da Imitação"*. | `image6.png` (ENIAC) + `image1.png` (Turing/Enigma) |
| 2 | `l1-phase-2` | **1.2 Os Nomes que Mudaram Tudo** | Linha do tempo: **1975 Bill Gates funda a Microsoft** → **1985 lança o Windows 1.0** (populariza o SO no computador pessoal) · **1976 Steve Jobs cofunda a Apple** → Apple I e, décadas depois, a interface gráfica e o **iPhone (2007)**. Frase-chave: *"dois lados da mesma moeda"*. | `image7.png` (Gates e Jobs) |
| 3 | `l1-phase-3` | **1.3 Como o Computador "Pensa": o Código Binário** | Computador = **grande calculadora**. Toda informação (texto, foto, vídeo, som) vira apenas **2 estados: 1 ligado / 0 desligado**. É essa combinação de zeros e uns que forma o **código binário**, a única linguagem que a máquina entende. Caixa ⚠️: *"1 bit = 1 dígito; 8 bits = 1 byte — é assim que um arquivo de 1 MB cabe em um disquete"*. | — |
| 4 | `l1-phase-4` | **1.4 O Caminho da Informação: Entrada → Processamento → Saída** | Os **3 passos** de todo processamento: **Entrada** (teclado, mouse, microfone, câmera) → **Processamento** (a **CPU**, que calcula e decide) → **Saída** (monitor, som, impressora). Caixa 💡: *"é exatamente o mesmo caminho do seu dedo no teclado até a letra aparecer na tela"*. | `image5.png` (entrada→CPU→saída) |
| 5 | `l1-phase-5` | **1.5 Hardware × Software e as Peças do Computador** | **Hardware** = o que se toca (teclado, mouse, monitor, processador, RAM) · **Software** = o que se vê funcionando (navegador, editor de texto, **sistema operacional**, aplicativos, jogos, antivírus). Tabela comparativa de 5 linhas. Depois as **6 peças**: placa-mãe, CPU, RAM, HD/SSD, placa de vídeo, fonte. | `image4.png` (hardware×software) + `image2.png` (componentes) |
| 6 | `l1-phase-6` | **1.6 O Sistema Operacional: o "Gerente" do Computador** | O SO **gerencia todo o hardware e os outros programas** e funciona como **ponte entre o usuário, os aplicativos e as peças físicas** (texto do autor). Linha do tempo: **1971 Unix** · **1981 IBM PC** · **1985 Windows 1.0** · **1991 Linux (Linus Torvalds, gratuito e aberto)** · **2007 iOS** · **2008 Android**. Tipos atuais: Windows (o mais popular no PC), Linux (servidores e programadores), macOS (exclusivo Apple), Android/iOS (celulares e tablets). | `image3.png` (logos dos SOs) |

| 7 | `l1-phase-6` | **1.7 Consolidação: Hardware × Software e Revisão** | Revisão relâmpago dos 6 blocos (mini-tabela "o que você aprendeu"), recordatório das 6 peças e do SO, e o **Termômetro do Hardware** (10 itens "é hardware / é software" com placar e "↺ Recomeçar"). Fecha com o check final, que **libera a aba do quiz**. | — |

### 3.2.1 Aba extra "Saiba Mais: o Linux" (fora da avaliação)

Além das 7 abas, a `l1-phase-6` traz um bloco destacado com o botão **🐧 Saiba mais sobre o Linux →**, que abre um **overlay dedicado** (`#linux-panel`) com 4 subabas: **1. O que é** · **2. Como funciona** · **3. Vantagens** · **4. Praticar**.

| Subaba | Conteúdo |
|:---|:---|
| 1. O que é | GNU/Linux = **kernel Linux** (fala com o hardware) + **projeto GNU** (ferramentas) + **distribuição** (o kit completo: Ubuntu, Debian, Linux Mint, Fedora, openSUSE) · definição de *software livre* (usar, estudar, modificar, compartilhar) |
| 2. Como funciona | **repositório** e gerenciador de pacotes (instalar/atualizar/remover) · **usuários e permissões** (a proteção vem por desenho, não depois) · **interfaces** GNOME / KDE Plasma / XFCE intercambiáveis · **terminal** (`ls`, `cd`, `cp`, `sudo`) · teste seguro em máquina virtual ou pendrive live |
| 3. Vantagens | Tabela comparativa de 7 linhas (licença, instalação, segurança, velocidade, estabilidade, controle, interface) + **"resumo honesto"**: o Linux não serve para tudo, mas é ótima escolha para navegar, estudar, trabalhar com documentos e manter a máquina leve e segura |
| 4. Praticar | Fonte citada (**Viva o Linux**), aviso sobre o vídeo `.flv` de 2009 (formato que o navegador atual não reproduz; baixar e abrir no VLC) e desafio de curiosidade `uname -o` |

- **Por que overlay e não 8ª fase**: não pode virar fase porque quebraria o gating de `TOTAL_TOPICS[1] = 7` e o aluno teria de marcar um check para conteúdo que não é avaliado. O botão é declarado como *"Só conhecimento — não entra na prova"*.
- **Tom**: explicativo e factual, mostrando as vantagens do Linux **sem depreciar o Windows** — a tabela da subaba 3 é comparativa, não um "versus"hostil.
- **Fonte**: <https://www.vivaolinux.com.br/linux/> (comunidade GNU/Linux da América Latina, no ar desde 2002).
- **Acessibilidade**: `role="dialog"`, `aria-modal`, `aria-selected` nas abas, fechamento por botão **✕ Fechar** e pela tecla **Esc**.
- **Mobile**: o overlay é filho direto de `<body>` (fora do `.lesson-reading-card`, que tem `transform` e capturaria o `position: fixed`) e tem regras **no bloco global mobile de `assets/css/style.css`** (regra 6 do AGENTS.md), sem `@media` por aula.

> Cada fase termina com: (a) caixa de destaque (💡 dica / ⚠️ atenção / ⌨️ atalho), (b) **tabela-resumo** (`es-sheet-box`/`mini-sheet` no PDF), (c) **`☑ Leitura Concluída!`** = `check-read-1-K` (botão "read-check-btn", igual às Aulas 7/8), (d) linha "← Voltar ao Tópico" / "Ir para o Próximo Tópico →".

### 3.3 Mapa de checks distribuídos (regra de ouro — proibido agrupar)

```
FASE 0 ......................... [ ✔ check-read-1-1 理解 o roteiro ]   (libera o 2)
1.1 História .................... [ ✔ check-read-1-2 ]
1.2 Gates e Jobs ................ [ ✔ check-read-1-3 ]
1.3 Código binário .............. [ ✔ check-read-1-4 ]
1.4 Entrada/Processamento/Saída .. [ ✔ check-read-1-5 ]
1.5 Hardware × Software ......... [ ✔ check-read-1-6 ]
1.6 Sistemas Operacionais ....... [ ✔ check-read-1-7 ]   (libera a tab do quiz)
```

> Nota: a estrutura do módulo Windows usa **um check por fase** (`TOTAL_TOPICS`), em que o check da FASE 0 é o passo 1 do roteiro. Como a aula tem **FASE 0 + 6 fases**, são `TOTAL_TOPICS[1] = 7` e ids `check-read-1-1..7`: **check 1 na FASE 0** e **checks 2..7 no fim de cada uma das 6 fases** (7 abas na `topic-tabs-bar`: 6 de conteúdo + `tab-btn-1-fix` do quiz).

---

## 🔒 4. Autenticação e Senha

| Módulo / Aula | Nome Temático | Senha Secreta | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 1 / Aula 01** | A História e o Funcionamento dos Computadores | **`wr0126`** ⚠️ confirmar com o professor | 🔒 Oculta (Acesso Restrito) |
| Módulo 1 / Aula 07 | Segurança e Antivírus | `wr0726` | 🔒 Oculta |
| Módulo 1 / Aula 08 + Complemento 8A | Diagnóstico de Memória e Mídia de Instalação | `wr0926` | 🔒 Oculta |

Alterações de código: `const PASSWORD_A1 = "wr0126";` (ao lado de `PASSWORD_WR`/`PASSWORD_A7`, `index.html:2254-2319`) e incluir `typed === PASSWORD_A1` na condição de desbloqueio (`index.html:2602`). As senhas de teste `a001/b002/c003/d004/h008/wr2026` continuam funcionando.

---

## 📝 5. Quiz de Fixação (5 questões)

Formato do módulo Windows: `{ q, options[4], correct, hint }`, aprovação ≥ 7,0 (4 acertos), valor 2,0 pts/questão.

| # | Pergunta | Alternativas | Correta | Dica |
|:--|:---|:---|:--:|:---|
| 1 | O que significa a palavra **binário** no computador? | a) Que ele usa dois números: 0 e 1 · b) Que ele só trabalha com números pares · c) Que ele tem dois botões · d) Que ele é rápido | **a** | Todo computador entende apenas dois estados: ligado (1) e desligado (0). |
| 2 | Qual destas peças **fornece a energia** para o computador funcionar? | a) Placa de vídeo · b) Monitor · c) **Fonte de alimentação** · d) Memória RAM | **c** | Ela alimenta todas as outras peças — sem energia nada liga. |
| 3 | Quando o ENIAC, primeiro computador eletrônico da história, foi apresentado? | a) 1946 · b) 1975 · c) 1985 · d) 2007 | **a** | Fevereiro de 1946, ainda no contexto da Segunda Guerra Mundial. |
| 4 | **Teclado e mouse** são exemplos de qual etapa do processamento? | a) Saída · b) Processamento · c) **Entrada** · d) Armazenamento | **c** | Entrada é o que o computador **recebe** de você. |
| 5 | Qual programa é responsável por **gerenciar o hardware** e permitir que você use o computador? | a) O antivírus · b) O navegador de internet · c) **O sistema operacional** · d) O paint | **c** | Ele é a ponte entre você, os aplicativos e as peças físicas. |

**Persistência (obrigatória)**: o rodapé do quiz exibe "✓ Salvo automaticamente", logo o estado tem de ser gravado de verdade (o mesmo contrato de `QuizEngine.saveState/loadState` já usado por Word e PowerPoint):

- chave: `windows-aula-1:aluno(a)` (`${moduleId}:${name.toLowerCase()}`);
- grava em: resposta marcada, `btn-prev`/`btn-next` e geração da assinatura;
- lê em: `openFixationPanel(1)` (restaura `answers`, `current` e `signature`; se não houver nada gravado, **recomeça limpo**);
- `↺ Recomeçar o exercício` (`btn-restart-1`): apaga a chave do `localStorage`, zera o `QUIZ_CFG[1]` e volta à 1ª pergunta.

**Wiring**: `const QUESTIONS_LESSON_1 = [...]` (ao lado de `QUESTIONS_LESSON_7/71/81`) · `QUIZ_CFG[1] = { questions: QUESTIONS_LESSON_1, name: "Aluno(a)", answers: new Array(5).fill(null), current: 0, signature: null, moduleId: "windows-aula-1", title: "Módulo 1 — Aula 1: A História e o Funcionamento dos Computadores", sig: "Módulo 1 - Aula 1 (Windows)" }` · botão `tab-btn-1-fix` com `onclick="openFixationPanel(1)"` · `fixation-panel-1` + `result-panel-1` copiados do Complemento 7A (`index.html:1770-1837`) com todos os ids trocados de `-71` para `-1` · incluir `1` no forEach de eventos `index.html:2983`.

---

## 📄 6. Apostila em PDF (`assets/js/pdf-lessons.js`)

### 6.1 Seções a criar em `LESSONS.windows`

| Seção | `heading` | `chapter` | Ilustração |
|:--|:---|:---|:---|
| 1.0 | `1.0 FASE 0 — O que vamos aprender hoje` | `AULA 01: A HISTÓRIA E O FUNCIONAMENTO DOS COMPUTADORES` (só na 1.0) | `html` com roteiro numerado em chips + tabela "🏁 o que você vai conseguir" |
| 1.1 | `1.1 A História dos Computadores (da Guerra ao ENIAC)` | — | `image6.png` + `image1.png` com legendas |
| 1.2 | `1.2 Os Nomes que Mudaram Tudo: Bill Gates e Steve Jobs` | — | `image7.png` |
| 1.3 | `1.3 Como o Computador "Pensa": o Código Binário` | — | tabela HTML `es-sheet-box` (0 × 1, ligado/desligado) |
| 1.4 | `1.4 Entrada → Processamento → Saída` | — | `image5.png` |
| 1.5 | `1.5 Hardware × Software e as Peças do Computador` | — | `image4.png`, `image2.png` + tabela comparativa |
| 1.6 | `1.6 O Sistema Operacional: o Gerente do Computador` | — | `image3.png` + tabela da linha do tempo |

> ⚠️ **Cuidado na porta de entrada**: `LESSONS.windows` guardava 5 seções genéricas de "UNIDADE 1: CONCEITO E ESTRUTURA DO WINDOWS" **sem `lessonNum`**, que eram injetadas em *todas* as apostilas do módulo (Aulas 7, 8, 71 e 81) e ainda repetiam o assunto da Aula 1. Elas foram removidas; a apostila da Aula 1 tem exatamente as 7 seções da tabela acima.

### 6.2 Regras do PDF (obrigatórias)

1. **Toda seção precisa de ilustração real** — imagem (`{src, caption}`) ou HTML (`html` no campo da seção). **Proibido** "🖼️ Referência de imagem".
2. Caminho **relativo**: `../../assets/img/windows/Aula1/imageN.png` (resolvido por `resolveImagePath`).
3. Classes de mini-planilha já portadas no `<style>` do popup: `.mini-sheet`, `.fun-highlight`, `.es-sheet-box`, `.es-sheet-titlebar` — reutilizar, não inventar.
4. Título: `moduleLessonTitles.windows[1]` → `"Aula 01: A História e o Funcionamento dos Computadores"`.
5. Botão no topo da aula: `onclick="window.PDFLessons.downloadLessonPDF('windows', 1)"`.
6. Validar com `node --check assets/js/pdf-lessons.js` **antes** de dar a aula por concluída.

---

## 🛠️ 7. Componente Interativo — "Termômetro do Hardware"

Lista interativa (reaproveita o estilo dos simuladores do Excel, sem dependências): 10 itens (teclado, mouse, monitor, processador, RAM, placa de vídeo, sistema operacional, navegador de internet, antivírus, jogo) em que o aluno clica em **"É hardware"** ou **"É software"**; o jogo conta acertos e mostra a placa de motherboard com as 5 peças de hardware acesas ao acertar.

- **Por que uma lista e não uma planilha**: a aula não é de Excel; o Master Blueprint §7.5 aceita "prática guiada" quando não há simulador natural.
- **IDs**: `w1-thermo`, `w1-thermo-score`, `w1-thermo-board`.
- **Onde fica**: na fase `l1-phase-6` (Consolidação), que revisa Hardware × Software e as 6 peças antes do check final.
- **Inicialização**: `window.buildThermometer()` + `updateThermometerScore()` no fim do IIFE da aula.

---

## ⚙️ 8. Alterações no Código Fonte

### 8.1 `assets/img/windows/Aula1/` (novo)

Copiar as 7 PNGs:
```bash
mkdir -p assets/img/windows/Aula1
cp "AulaOrigem/windows/Aula1_Historia_e_Funcionamento_dos_Computadores/images/image"{1,2,3,4,5,6,7}.png assets/img/windows/Aula1/
```

### 8.2 `modules/windows/index.html`

| Onde | Alteração |
|:---|:---|
| Card do hub (linha ~212) | `onclick="promptLessonPassword(1, 'A História e o Funcionamento dos Computadores')"` · nome visível novo · `🔓 Aula Liberada (Senha \`wr0126\`)` · classe `active-lesson` · `id="badge-lesson-1"` com `🔒` |
| `promptLessonPassword` (linha ~2578) | `OPEN_LESSONS = [1, 7, 8, 71, 81]` e ajustar o texto do alerta ("apenas as Aulas 07 e 08") |
| Desbloqueio (linha ~2602) | aceitar `PASSWORD_A1`; `routes[1] = "screen-lesson-1"` |
| Nova `<section id="screen-lesson-1">` | topo (Voltar/Imprimir/PDF) · barra `gamify-percent-1` + `gamify-bar-1` + `gamify-badge-box-1` · FASE 0 · `<nav class="topic-tabs-bar">` com `tab-btn-1-1..6` + `tab-btn-1-fix` · `l1-phase-1..6` · Termômetro (`#w1-thermo`) · `fixation-panel-1` + `result-panel-1` |
| JS (linhas ~2646-2687) | `TOTAL_TOPICS[1] = 7` · `SEQUENTIAL_LESSONS[1] = true` · `[1]` no `initSequentialGating` |
| JS (linhas ~2861) | `QUESTIONS_LESSON_1` + `QUIZ_CFG[1]` |
| JS (linha ~2983) | `[1, 7, 71, 81].forEach(...)` nos eventos do quiz · `persistQuizGen` / `restoreQuizGen` / `restartQuizGen` (persistência em `localStorage`) |
| Botão do quiz | `btn-restart-1` — "↺ Recomeçar o exercício" (zera memória + `localStorage`) |
| **Persistência da leitura (L-01, 04/10/2026)** | `READ_STORAGE_KEY = "wrWindowsReadTopics"` · `loadReadTopics()` (valida a faixa 1..6 e descarta chave adulterada) · `saveReadTopics()` · `captureReadLabels()` guarda o rótulo original em `dataset.readLabel` · `paintReadLesson()` **fonte única** do estado (check, trava sequencial, %, barra, badge) · `restartReading()` + botão "↺ Recomeçar a leitura" nas 6 fases |
| Bloco extra na `l1-phase-6` | Caixa "Curiosidade da aula: e o Linux, como é?" com o botão `btn-saiba-mais-linux` |
| Overlay `#linux-panel` (filho de `<body>`, após `#password-modal`) | 4 subabas (`linux-tab-body-1..4` / `linux-tab-btn-1..4`), tabela comparativa, link da fonte e aviso sobre o `.flv`; marcado `no-print` |
| CSS do painel (topo de `modules/windows/index.html`) | `.linux-panel`, `.linux-panel-card`, `.linux-tab-bar`, `.linux-tab-btn`, `.linux-tab-body`, `.linux-fact`, `.linux-card`, `.linux-term` |
| JS | `window.openLinuxPanel()` · `window.closeLinuxPanel()` · `window.switchLinuxTab(k)` + `Esc` fecha · trava `document.body.style.overflow` enquanto aberto |
| `assets/css/style.css` (bloco `/* REGRAS MOBILE GLOBAIS */`) | Regras do `#linux-panel` em ≤767px: `padding: 4px`, card `18px 8px`, abas em `flex: 1 1 auto` |

> **IDs do módulo Windows** (≠ Excel!): `tab-btn-{N}-{K}`, `l{N}-phase-{K}`, `check-read-{N}-{K}`, `fixation-panel-{N}`, `result-panel-{N}`, `quiz-trail-{N}`, `q-text-{N}`, `options-{N}`, `btn-{hint,prev,next,download-txt,download-pdf,whatsapp,email,open-gmail}-{N}`, `signature-code-{N}`, `breakdown-{N}`, `gamify-{bar,percent,badge-box}-{N}`.

### 8.3 `assets/js/pdf-lessons.js`

Adicionar as 7 seções `lessonNum: 1` em `LESSONS.windows` (antes das da Aula 7, mantendo a ordem das aulas) e atualizar `moduleLessonTitles.windows[1]`.

> A caixa **"SAIBA MAIS — O LINUX"** entra dentro do `html` da **seção 1.6** (como `es-sheet-box` + duas `mini-sheet` + `fun-highlight`), e **não** como 8ª seção: a apostila continua com as mesmas 7 seções e 7 imagens. A caixa é exclusiva da Aula 1 porque está dentro de uma seção `lessonNum: 1`, então as apostilas 7/8/71/81 não a herdam.

### 8.4 `Docs/`

- `Docs/SPEC-AULA-01-WINDOWS.md` (este arquivo) → status ✅ após a implementação.
- `Docs/SPEC-AULA-08-WINDOWS.md` §4 menciona as senhas do módulo → acrescentar `wr0126`.
- `Docs/CONTINUACAO.md` → registrar a conclusão (regra do repositório).
- `AGENTS.md` / `SPEC-PROJECT-ARCHITECTURE.md` §4 → linha da Aula 01 em `xa…` → `wr0126`.

---

## ✅ 9. Checklist de Validação (pós-implementação)

Status em **30/09/2026** — todos os itens verificados por harness automatizado (Chrome/CDP) contra `http://127.0.0.1:8123`.

- [x] Card da Aula 01 no hub mostra "🔓 Aula Liberada" e abre o modal (nunca mostra a senha).
- [x] `wr0126` destrava `screen-lesson-1`; senha errada mostra o alerta e não navega.
- [x] FASE 0 presente: objetivo + **roteiro numerado** + botão "Começar" (sem lista de materiais, sem glossário).
- [x] **7 checks distribuídos** — 1 na FASE 0 + 1 no fim de cada uma das 6 fases; nenhum bloco agrupado.
- [x] Gating sequencial: `check-read-1-2` só libera após o 1; o 7º completa 100% da barra.
- [x] Barra gamificada sobe de 0% a 100% e o badge vira "🎉 Leitura Completa!".
- [x] Clicar nas 7 abas mostra **só** a fase escolhida (comportamento de `switchTopicPhase`).
- [x] As 7 imagens aparecem na tela com `alt` descritivo (todas com `naturalWidth > 0`).
- [x] Termômetro do Hardware: 10 itens, placar, "↺ Recomeçar" e montagem inicial ao abrir a aula.
- [x] Quiz: 5 questões, `openFixationPanel(1)`, nota 2,0/questão, aprovação em 7,0, hash SHA-256 no formato `WR-XXXX-XXXX-XXXX-XXXX`.
- [x] Nota máxima real: 5/5 acertos → **10,0** com "Parabéns!" e assinatura gerada.
- [x] Persistência: recarregar a página retoma a pergunta salva; "↺ Recomeçar" volta à 1ª e apaga o `localStorage`.
- [x] Comprovante TXT/WhatsApp/Gmail funciona (via `getReportDataGen(1)`).
- [x] PDF: 7 seções, **7 imagens com legenda**, zero "🖼️ Referência de imagem", título correto.
- [x] **Mobile 375px**: hub, leitura e quiz com 4px de margem lateral e **zero overflow horizontal** (fix global em `assets/css/style.css` — regra 6 do AGENTS.md, sem `@media` por aula).
- [x] `node --check assets/js/pdf-lessons.js` + `node --check` de todos os blocos `<script>` inline de `modules/windows/index.html`.
- [x] Aulas 7, 8, 71 e 81 continuam intactas (harness de PDF das 4: 25/25, nenhuma herda as seções da Aula 1).
- [x] Fato corrigido: "1 MB = 1.048.576 bytes" (HTML e PDF).
- [x] **Aba extra "Saiba Mais: o Linux"** na `l1-phase-6`: abre overlay com 4 subabas, fecha por botão e `Esc`, trava a rolagem do fundo e devolve ao fechar.
- [x] Conteúdo do Linux conferido: kernel/GNU/distribuição, repositório, permissões, interfaces, terminal, tabela comparativa de 7 linhas e a "resumo honesto" (limites citados).
- [x] A aba é declarada como **fora da avaliação** e **não** vira fase: `TOTAL_TOPICS[1]` continua 7 e o gating/`tab-btn-1-fix` não mudam.
- [x] `#linux-panel` é filho direto de `<body>` — dentro do `.lesson-reading-card` o `position: fixed` era capturado pelo `transform` do ancestral e o overlay renderizava com **largura 0**.
- [x] Fonte citada e link funcional no PDF; **nenhuma** das apostilas 7/8/71/81 recebe a caixa Linux.
- [x] **Mobile do painel**: 375px sem overflow, card = 367px, 4 abas dentro das bordas e tabela da subaba 3 sem estourar (regra 6 do AGENTS.md, sem `@media` por aula).
- [x] **Leitura persiste (L-01):** `wrWindowsReadTopics` grava `{1:[1..7],7:[],8:[],71:[],81:[]}`; após F5 os 7 checks voltam marcados, a barra fica em 100% e o badge mostra "🎉 Leitura Completa!".
- [x] **"↺ Recomeçar a leitura"** presente nas 6 fases da Aula 1: zera só a fase escolhida, mantém as outras e **destrava** os checks (o check marcado é `disabled`, então sem o botão o estado gravado seria irreversível).
- [x] **Rótulos preservados:** `captureReadLabels()` + `dataset.readLabel` — reiniciar a fase remove o `☑` e devolve o `markTopicRead` (bug corrigido em 04/10/2026: a 1ª versão do `paintReadLesson` só somava o `☑` e o gating ficava travado com a barra zerada).
- [x] `paintReadLesson()` é a **fonte única** do estado: `markTopicRead` e a restauração usam o mesmo caminho, então check, trava, %, barra e badge não podem sair inconsistentes.
- [x] Guarda de apostila vazia (L-04): `downloadLessonPDF('windows', 2..6)` recusa com `alert` informando as aulas existentes — antes gerava um PDF **sem uma única seção** com título de aula que não existe.
- [x] Windows 29/29 seções ilustradas e 70/70 imagens legendadas no PDF.

> ⚠️ **Os harnesses da coluna abaixo só sobrevivem em `/tmp` e são perdidos quando a máquina reinicia.** Os que continuam em uso na sessão de 04/10/2026: `recheck.js` (4 modos), `l04.js`, `l05.js`, `l06.js`, `l08.js`, `pdf-audit.js`, `caption-audit.js` e `check-inline.js`. Se um caminho desta tabela não existir, reescreva a checagem com `cdp2.js` (`open(url)` + `eval`) antes de confiar no item.

### 9.1 Harnesses usados

| Script | Resultado |
|:---|:---|
| `/tmp/opencode/recheck.js windows-read` | **18/18** — persistência da leitura: grava, restaura após reload, recomeça, rótulos, gating, console limpo |
| `/tmp/opencode/recheck.js windows` | **24/24** — hub, senha, 7 abas, FASE 0, checks, Termômetro, quiz |
| `/tmp/opencode/test-aula1.js` | 27/27 (estrutura, senha, gating, abas, Termômetro, quiz, assinatura, console limpo) |
| `/tmp/opencode/test-nota10.js` | 6/6 (5 acertos → 10,0 + assinatura persistida) |
| `/tmp/opencode/test-persistencia.js` | 8/8 (grava, restaura após reload, recomeça limpo) |
| `/tmp/opencode/test-pdf-regressao.js` | 25/25 (Aulas 1, 7, 8, 71, 81) |
| `/tmp/opencode/test-pdf.js` + `layout-audit.js` | PDF sem erro estrutural e sem transbordo; imagens entre 345px e 521px |
| `/tmp/opencode/test-responsive2.js` | 18/18 (1440 / 768 / 375) |
| `/tmp/opencode/test-linux.js` | 25/25 (fluxo real card → senha → aula; botão na fase 6; abre/fecha; 4 abas; conteúdo de cada uma; `Esc`; lição e gating intactos; console limpo) |
| `/tmp/opencode/test-linux-mobile.js` | 12/12 (375 / 768 / 1440 com o overlay aberto: sem overflow, largura aproveitada, 4 abas dentro das bordas, tabela da subaba 3) |
| `/tmp/opencode/check-pdf-linux.js` | 6/6 (caixa Linux só na apostila 1; 7 seções preservadas; fonte e limites presentes) |

> Os harnesses usam `/tmp/opencode/cdp.js`, que abre `about:blank`, **desabilita o cache** e só então navega — sem isso o Chrome serve `style.css`/`index.html` antigos e os testes mentem.

---

## 🔗 10. Dependências & Riscos

| Risco | Mitigação |
|:---|:---|
| Conflito de título com o card atual ("Introdução ao Windows & Interface") | Renomear o card, o `promptLessonPassword` e `moduleLessonTitles.windows[1]` **na mesma entrega** (nunca deixar metade). |
| Senha `wr0126` não confirmada | Item marcado como ⚠️ na §2 e na §4 — confirmar antes de publicar. |
| Cópia literal do texto de origem | Regra de paráfrase (§1.5) + conferência do PDF. |
| Quebrar as Aulas 7/8/71/81 ao editar as estruturas compartilhadas | Toda alteração de estrutura compartida (`TOTAL_TOPICS`, `QUIZ_CFG`, forEach de eventos) é **aditiva**; validar as 4 aulas no harness depois. |
| `switchTopicPhase` do Windows não tem guarda para painel inexistente (`document.getElementById('fixation-panel-N').classList`) |，必然 ter `fixation-panel-1` criado antes de a aula 1 ser liberada — é item do checklist. |

---

## 📌 11. Status

- **30/09/2026**: base de informação analisada (§1) e SPEC escrita. Aguardava aprovação do professor (senha `wr0126` + renomear o card da Aula 01).
- **30/09/2026**: **implementação concluída** — hub/senha, `screen-lesson-1`, FASE 0 + 6 fases, 7 checks, Termômetro do Hardware, quiz de 5 questões com **persistência real** em `localStorage` + "↺ Recomeçar", apostila em PDF com 7 seções e 7 imagens, e correção do fato de megabyte. Validação automatizada: **27/27 + 6/6 + 8/8 + 25/25 + 18/18**, `node --check` limpo.
- **30/09/2026**: **aba "Saiba Mais: o Linux" entregue** — overlay dedicado com 4 subabas (o que é · como funciona · vantagens · praticar) disparado pelo botão da `l1-phase-6`, declarado fora da avaliação; caixa correspondente na seção 1.6 do PDF (sem virar 8ª seção). Origem do texto: <https://www.vivaolinux.com.br/linux/>. Correção aplicada durante a validação: o overlay foi movido para fora do `.lesson-reading-card` (o `transform` do ancestral zerava a largura do `position: fixed`). Validação: **25/25 + 12/12 + 6/6**, além de **27/27 + 6/6 + 8/8 + 25/25 + 18/18** da regressão.
- **Nota sobre o vídeo**: o acervo traz `Historia_Linux.flv` (7min48s, FLV/Sorenson de 2009, 55,2 MB, não versionado). Os navegadores atuais não reproduzem FLV e o ambiente não tem `ffmpeg`; o `flvdemux` do GStreamer também falha. **Não foi convertido** — conforme combinado, a aba 4 apenas informa o arquivo e sugere abrir no VLC, sem fingir player embutido.
- **30/09/2026**: **unico item pendente é humano** — confirmação do título final e da senha `wr0126` pelo professor, além da conferência visual humana do PDF (`/tmp/opencode/aula1-pdf.png` e `pdf-sec-0..6.png`).
