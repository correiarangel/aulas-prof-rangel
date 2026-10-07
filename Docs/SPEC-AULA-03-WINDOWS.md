### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: ✅ IMPLEMENTADA E VALIDADA (07/10/2026) — Aula 03: Medidas de Armazenamento no Computador
### Harness: `/tmp/opencode/a3_harness.py` (Python/CDP) — **66/66 checks OK** (tela, gating, quiz, persistência, PDF 3.0–3.9 e simulador)

---

## 1. IDENTIFICAÇÃO DA AULA
- **Módulo**: Windows
- **Número da Aula**: `3`
- **Título da Aula**: `Aula 03: Medidas de Armazenamento no Computador`
- **Rota no app**: `screen-lesson-3` (a criar)
- **Senha candidata**: `wr0326` (sugerida; aguarda confirmação do professor)
- **Origem**: `/home/rangel/git-dev/aulas/AulaOrigem/windows/Aula3_Medidas_Armazenamento/Aula3_Medidas_Armazenamento.html`
- **Imagens**: 7 arquivos em `assets/img/windows/Aula3/`

---

## 2. OBJETIVO DA AULA
Ao final desta aula, o aluno será capaz de:
- Explicar o que é o sistema binário (bits, bytes e representação 0/1).
- Conhecer e diferenciar as unidades de medida de armazenamento (Byte, KB, MB, GB, TB).
- Compreender a Tabela ASCII e a conversão de caracteres para binário.
- Realizar a conversão decimal→binário (método das divisões por 2).
- Localizar e visualizar o Disco Local (C:) no Explorador de Arquivos.
- Verificar erros, otimizar e desfragmentar discos (com distinção correta entre HDD e SSD).
- Ajustar data e hora no Windows.
- Executar o exercício prático no WordPad e salvar `Resumo_Aula3.rtf` seguindo as instruções de formatação.

---

## 3. FASE 0 + ESTRUTURA DE FASES (Checks distribuídos)
**Regra obrigatória**: FASE 0 sempre presente. Checks distribuídos no fim de cada fase (cada passo = um check). Sem agrupar todos os checks num único lugar.

**TOTAL_TOPICS[3] = 8** (8 fases: 0..7)

| Fase | ID | Título | Objetivo do passo (check) |
|---|---|---|---|
| **FASE 0** | `l3-fase-0` | Introdução e Roteiro da Aula 3 | Apresenta objetivo + roteiro numerado (passo a passo). **Check 0/8** ao marcar leitura/conclusão da introdução. |
| **FASE 1** | `l3-phase-1` | 3.1 O que é o Sistema Binário? | Compreende bits/bytes, base binária, exemplo 5=101 e conversão decimal→binário (13→1101). **Check 1/8**. |
| **FASE 2** | `l3-phase-2` | 3.2 Medidas de Armazenamento | Conhece Byte, KB, MB, GB, TB (fator 1024) e exemplos práticos. **Check 2/8**. |
| **FASE 3** | `l3-phase-3` | 3.3 O que é a Tabela ASCII? | Entende ASCII, código decimal/binário de caracteres (A, espaço). **Check 3/8**. |
| **FASE 4** | `l3-phase-4` | 3.4 Exemplo Prático: "Rangel" em Binário | Visualiza a conversão letra→ASCII→binário (6 bytes = 48 bits). **Check 4/8**. |
| **FASE 5** | `l3-phase-5` | 3.5 Como Acessar o Disco C: no Explorador | Sabe abrir Explorador (Win+E), ir em Este Computador → Disco Local (C:). **Check 5/8**. |
| **FASE 6** | `l3-phase-6` | 3.6 Como Acessar as Ferramentas do HD/SSD | Conhece Propriedades → Ferramentas: Verificar erros, Otimizar/Desfragmentar. **Distingue HDD vs SSD** (crucial). **Check 6/8**. |
| **FASE 7** | `l3-phase-7` | 3.7 Data e Hora do Windows | Sabe ajustar data/hora (automático recomendado) e ajuste manual. **Check 7/8**. |
| **FASE 8** | `l3-phase-8` | 3.8 Exercício Prático — WordPad | Executa o exercício: abre WordPad (Win+R → wordpad), escreve resumo com os 8 itens, aplica formatação exigida (Arial 16 negrito no título, palavras-chave itálico+negrito, Times New Roman 12 no corpo), salva `Resumo_Aula3.rtf`. **Check 8/8** (libera quiz). |

---

## 4. QUESTÕES DO QUIZ (5 questões) — `QUESTIONS_LESSON_3`
Seguir padrão (múltipla escolha, 1 correta). Cobrir pontos-chave: binário, fator 1024, ASCII, HDD×SSD, Disco C:.

| # | Pergunta | Alternativas (A–E) | Correta |
|---|---|---|---|
| 1 | O computador representa as informações utilizando qual sistema numérico? | A) Decimal B) Hexadecimal C) Binário (0 e 1) D) Octal E) Romano | C |
| 2 | Quantos bytes formam 1 Megabyte (MB), segundo a convenção usada em informática? | A) 1000 B) 1024 C) 1010 D) 100 E) 512 | B |
| 3 | A Tabela ASCII serve para: | A) Desfragmentar o disco B) Atribuir códigos numéricos a letras, números e símbolos C) Ajustar data e hora D) Converter imagens E) Compactar arquivos | B |
| 4 | Em relação a HD (HDD) e SSD, qual a afirmação CORRETA? | A) SSD precisa ser desfragmentado com frequência B) HDD nunca precisa de verificação C) SSD **não** precisa de desfragmentação (usa-se Otimizar) D) Ambos usam o mesmo processo de desfragmentação pesada E) Desfragmentar SSD aumenta muito sua vida útil | C |
| 5 | Onde encontramos o Disco Local (C:) no Windows? | A) Painel de Controle B) Explorador de Arquivos → Este Computador C) Bloco de Notas D) Calculadora E) Gerenciador de Tarefas | B |

`QUIZ_CFG[3] = { moduleId: "windows-aula-3", passing: 70, attempts: 3, timeLimitMin: 10 }`

---

## 5. SEÇÕES DO PDF (`assets/js/pdf-lessons.js`) — `lessonNum: 3`
Criar 9 seções (3.0 → 3.8). Usar imagens com legendas corretas. Para `image5.png` (escala Byte→TB) e `image7.png` ("Rangel" em binário) aplicar `imagesWide: true`.

| Seção | heading | Conteúdo resumido | Imagens (src `../../assets/img/windows/Aula3/...`) + captions |
|---|---|---|---|
| **3.0** | `3.0 Introdução à Aula 3 — Medidas de Armazenamento` | Expõe objetivo, importância de entender bits/bytes, unidades e como o PC armazena dados. FASE 0. | _(nenhuma)_ |
| **3.1** | `3.1 O que é o Sistema Binário?` | Bits/bytes, base 2, 0/1. Exemplos: 5=101, método divisões por 2 (13→1101). Dica RapidTables. | `image3.png` — "Representação binária: o computador entende apenas 0 e 1." |
| **3.2** | `3.2 Medidas de Armazenamento` | Byte, KB (1024), MB (1024 KB), GB (1024 MB), TB (1024 GB). Exemplos práticos. | `image5.png` (imagesWide: true) — "Escala de medidas de armazenamento: cada unidade equivale a 1024 vezes a anterior." |
| **3.3** | `3.3 O que é a Tabela ASCII?` | Definição, função (caracteres→códigos). Exemplos A=65 (01000001), espaço 32 (00100000). | `image4.png` — "Tabela ASCII: cada caractere é convertido em código numérico e depois em binário." |
| **3.4** | `3.4 Exemplo Prático: "Rangel" em Binário` | Conversão letra a letra (R, a, n, g, e, l) → ASCII → binário. Total 6 bytes (48 bits). Resultado apresentado. | `image7.png` (imagesWide: true) — "Representação binária do nome 'Rangel': cada caractere ocupa 1 byte (8 bits), totalizando 6 bytes." |
| **3.5** | `3.5 Como Acessar o Disco C: no Explorador de Arquivos` | Passos: Win+E (ou pasta), Este Computador → Disco Local (C:). | `image6.png` — "Acesso ao Disco Local (C:) pelo Explorador de Arquivos (Este Computador)." |
| **3.6** | `3.6 Como Acessar as Ferramentas do HD/SSD` | Propriedades → Ferramentas: Verificação de erros (Verificar). Otimizar/Desfragmentar: HDD → Desfragmentar/Otimizar; **SSD → apenas Otimizar (não desfragmentar)**. Nota: notebooks/PCs recentes usam SSD. | `image2.png` — "Guia de Ferramentas do disco: Verificar erros e Otimizar (diferenciando HDD e SSD)." |
| **3.7** | `3.7 Como Acessar e Corrigir Data e Hora do Windows` | Clique direito no relógio → Ajustar data e hora. Ativar "Definir horário automaticamente" (recomendado). Ajuste manual se necessário. | `image1.png` — "Ajuste de data e hora no Windows: ativar a sincronização automática é o recomendado." |
| **3.8** | `3.8 Exercício Prático — WordPad (Resumo da Aula 3)` | Enunciado completo (8 itens do resumo), formatação exigida (título Arial 16 negrito, palavras-chave itálico+negrito, Times New Roman 12), nome do arquivo `Resumo_Aula3.rtf`, instrução de entrega. Box de entrega (verde). | _(nenhuma)_ |

---

## 6. IMPLEMENTAÇÃO NO CÓDIGO

### 6.1 `modules/windows/index.html`
- Adicionar card "Aula 03" no hub (`showScreen('hub-windows')`) com `onclick="promptLessonPassword(3, 'Medidas de Armazenamento no Computador')"`
- Criar `<section id="screen-lesson-3">` com FASE 0 + 8 fases, checks distribuídos por fase (botões "Marcar Leitura Concluída"), barra de progresso 0→100% (8 checks), navegação sequencial entre fases.
- `PASSWORD_A3 = "wr0326"` (constante)
- `TOTAL_TOPICS[3] = 8`
- Adicionar `3: "screen-lesson-3"` em mapeamento de rotas
- Incluir Aula 3 em `OPEN_LESSONS`/sequência conforme padrão (Windows: 1,2,3,7,8,71,81)
- `QUESTIONS_LESSON_3` (5 questões) + `QUIZ_CFG[3]` com `moduleId:"windows-aula-3"`

### 6.2 `assets/js/pdf-lessons.js`
- Adicionar objeto `windows` → entrada `3` em `moduleLessonTitles.windows`:
  ```js
  3: "Aula 03: Medidas de Armazenamento no Computador"
  ```
- Adicionar 9 seções com `lessonNum: 3` conforme §5. Aplicar `imagesWide: true` para seções 3.2 (image5) e 3.4 (image7).
- Garantir paths relativos `../../assets/img/windows/Aula3/...`

### 6.3 `assets/img/windows/Aula3/`
- Criar diretório
- Copiar os 7 PNGs de `AulaOrigem/windows/Aula3_Medidas_Armazenamento/images/` para cá (nomes mantidos: image1.png–image7.png)

### 6.4 `assets/css/style.css`
- Sem alteração necessária (usa bloco global mobile). Se necessário, apenas seguir regra existente.

---

## 7. CRITÉRIOS DE ACEITE (Definition of Done) — ✅ todos atendidos em 07/10/2026
- [x] Hub Windows exibe "Aula 03" e abre prompt com senha `wr0326` (senha errada mantém o modal; aula fechada dispara alerta).
- [x] Tela `screen-lesson-3` carrega com FASE 0 + 9 fases, **10 checks distribuídos** (FASE 0 conta como check 1), gating sequencial correto (só libera próximo após marcar check).
- [x] Progresso 0% → 100% em passos de 10% (10 checks), badge `🎉 LEITURA COMPLETA!` (padrão do módulo) e persistência após reload.
- [x] Quiz 3: 5/5 questões corretas → nota 10,0, assinatura SHA (`WR-…`), breakdown de 5 linhas; botão "↺ Recomeçar o exercício" zera estado e apaga a chave do `localStorage`.
- [x] Persistência: leitura (`wrWindowsReadTopics`) e estado do quiz (`QuizEngine.saveState/loadState` com `moduleId:"windows-aula-3"`) funcionam após reload (quiz volta na questão 5 com a opção selecionada).
- [x] PDF Aula 3: gerado via `downloadLessonPDF('windows', 3)`. Título correto, **10 seções 3.0–3.9** (§10.6 acrescentou a 3.9), **7 imagens** de `Aula3/` com legendas (mais o logo do professor no cabeçalho/rodapé = 9 `<img>`), `image5` e `image7` em **grid wide** (2 wide), sem `JSTOR`, sem placeholder "🖼️ Referência de imagem".
- [x] Mobile 375px: `scrollWidth == 375`, zero elementos estourando — tela **e** simulador.
- [x] `node --check assets/js/pdf-lessons.js` OK e script inline do `index.html` OK.
- [x] Console limpo (sem erros de JS no load, durante a navegação, no PDF e no simulador).
- [x] Fato HDD×SSD correto (SSD = apenas "Otimizar", não desfragmentar) — validado em tela e PDF.

---

## 12. RESULTADO DA IMPLEMENTAÇÃO (07/10/2026) — deviações registradas

1. **`TOTAL_TOPICS[3] = 10` (não 8 nem 9)** — a FASE 0 virou check 1 e as fases 1–9 viraram os checks 2–10; o progresso anda de 10 em 10%. Mantém a Regra 1 (checks distribuídos, um por fase). A §6.1/§10.5/§10.7 desta spec diziam 8/9 — desvio documentado aqui e em `Docs/CONTINUACAO.md`.
2. **PDF com 10 seções (3.0–3.9)** — §5 pedia 9 (3.0–3.8) e a §10.6, depois, exigiu a seção 3.9 do simulador. Prevaleceu a versão mais recente: 3.9 criada com `boxType:"tip"`, o mini-sheet dos 4 conversores e a instrução "Módulo Windows → Aula 03 → Fase 9".
3. **`QUESTIONS_LESSON_3` com 4 alternativas** (não 5): o módulo Windows inteiro usa `a)–d)`; seguiu-se o padrão real do código.
4. **Questão 2 corrigida** — o enunciado original ("Quantos bytes formam 1 MB? → 1024") estava factualmente errado (1 MB = 1.048.576 bytes). Reescrita para "Quantos Kilobytes (KB) formam 1 Megabyte (MB)?" (resposta 1024). Regra anti-Conversion Bug.
5. **Badge de leitura** = `🎉 LEITURA COMPLETA!` (padrão do módulo Windows), não "Leitura Concluída – Aula 03".
6. **Senha** `wr0326` segue como candidata — aguarda confirmação do professor (assim como `wr0226` da Aula 2).
7. **Harness** virou Python (`/tmp/opencode/a3_harness.py`) em vez do sugerido `.js`: reusa o cliente CDP `/tmp/opencode/cdplib.py` (auto-dismiss de dialogs). **66/66 checks**; relatório em `/tmp/opencode/a3_report.json`.

---

## 8. TESTES SUGERIDOS (harness leve)
Criar `/tmp/opencode/a3-harness.js` (baseado em `a2-harness.js`):
- Senha errada → não navega; senha `wr0326` → abre `screen-lesson-3`
- 8 checks, gating, barra 0→100%, hash/estabilidade, 7 imagens visíveis
- Quiz 5/5 → aprovado (10,0), reinício zera estado
- Persistência leitura+quiz após reload

Criar `/tmp/opencode/a3-pdfgen.js`:
- Gera PDF Aula 3: título, 9 seções, 7 imagens (todas de `Aula3/`), seções 3.0–3.8 presentes, `imagesWide` aplicado em 3.2 e 3.4, zero `JSTOR`.

---

## 9. NOTAS DE IMPLEMENTAÇÃO
- Seguir estritamente **Regra 6 (mobile global)**: não criar media queries por aula; ajustes apenas no bloco global de `style.css` se necessário.
- **FASE 0 obrigatória** com roteiro numerado; checks distribuídos por fase (Regra 1).
- Imagens em HTML vão no `sec.html` apenas se houver ilustração HTML complexa; aqui usamos `images[]` (padrão).
- Distinção HDD×SSD está explícita na seção 3.6 (tela + PDF) — ponto importante para evitar erro didático.
- Exercício com WordPad (`.rtf`) é prático e compatível com Windows padrão (não exige instalação extra).

## 10. SIMULADOR INTERATIVO (Novo) — Conversor Binário/ASCII
**Objetivo**: reforçar o aprendizado com prática interativa (Decimal↔Binário e Letra↔Binário/ASCII), seguindo o padrão didático da aula (FASE 0 + checks distribuídos). Será incluído como **FASE 9** opcional/prática ou como **subfase prática** dentro da 3.4/atividade extra, com salvamento de estado.

### 10.1 Localização e Arquivos
- **HTML/JS do simulador**: `modules/windows/simulador-binario.html` (página standalone leve, responsiva mobile-first)
- **CSS (se necessário)**: pode reutilizar variáveis/classes existentes (`assets/css/style.css`) — preferir classes já existentes (`.card-quiz`, `.btn`, `.fixation-panel`, `.img-showcase`)
- **Inclusão na aula**: inserir botão "Abrir Simulador Binário ↔ ASCII" na **FASE 4 (3.4)** ou criar **FASE 9: Praticando com o Simulador** (com check 9/9). Recomenda-se **FASE 9** para não quebrar `TOTAL_TOPICS[3]=8` atual — criar `TOTAL_TOPICS[3]=9` e atualizar checks (0–9 = 10 checks). Ver decisão abaixo.

> **Decisão de integração**: Incluir como **FASE 9** (Prática Interativa). Assim `TOTAL_TOPICS[3]=9`, checks 0/9 → 9/9, badge aparece ao 100%. Não altera a parte teórica obrigatória.

### 10.2 Funcionalidades do Simulador
O simulador terá **4 conversores independentes**, com validação, exemplos, passo-a-passo e histórico:

| # | Conversor | Entrada | Saída | Explicação (passo-a-passo) |
|---|---|---|---|---|
| **1** | **Decimal → Binário** | Número inteiro (0–65535) | Binário (8/16 bits sugeridos) | Mostra divisões sucessivas por 2, restos lidos de baixo p/ cima (igual ao exemplo 13→1101). Exibe tabela de divisões. |
| **2** | **Binário → Decimal** | Sequência binária (ex.: `01010010`) | Decimal | Cálculo por potências de 2 (posição × 2^n) com decomposição visual. |
| **3** | **Letra → Binário/ASCII** | Caractere único (A–Z, a–z, 0–9, espaço, símbolos) | Código ASCII (Decimal) + Binário (8 bits) | Usa tabela ASCII. Exibe "Letra → ASCII → Binário". Suporta maiúsc/minúsc. |
| **4** | **Binário → Letra** | Binário 8 bits (ex.: `01010010`) | Caractere + ASCII Decimal | Converte binário→decimal (ASCII)→caractere. Valida 8 bits (preenchimento com zeros à esquerda). |

### 10.3 Regras e UX
- **Responsivo**: mobile-first (até 4px laterais). Usa classes `.card-quiz`, `.btn`, `.fixation-panel`.
- **Validação em tempo real**: apenas dígitos 0/1 no campo binário; apenas números no decimal; 1 caractere no campo letra.
- **Preenchimento com zeros**: binário sempre exibido com 8 bits (ex.: `01010010`), com opção "Mostrar 8/16 bits".
- **Exemplos prontos**: botões rápidos (`R`, `A`, `13→1101`, `01010010→R`, `65→01000001`).
- **Passo-a-passo visível**: mostra o cálculo (divisões/restos OU potências de 2) para reforçar raciocínio (não só resultado).
- **Tema consistente**: segue paleta do portal (marrom/âmbar/teal). Sem CSS inline excessivo.
- **Sem dependências externas**: Vanilla JS puro.
- **Salvamento de estado**: `localStorage` com chave `wrWindowsBinConvState` (últimos valores/tabs). Restaurar ao abrir.

### 10.4 Estrutura do Arquivo `modules/windows/simulador-binario.html`
Criar com seções: Header, Abas (Decimal↔Binário / Letra↔Binário), Cards de conversão, Área "Passo-a-Passo", Histórico de conversões (últimas 5), Rodapé com link "Voltar à Aula 3".

### 10.5 Integração na Aula 3 (`modules/windows/index.html`)
Adicionar **FASE 9** após FASE 8:
- ID: `l3-phase-9`
- Título: `3.9 Praticando: Conversor Binário ↔ ASCII`
- Descrição: explica o simulador (decimal↔binário, letra↔binário, ASCII, potências/divisões por 2)
- Botão primário: `Abrir Simulador Binário ↔ Letra/ASCII` → abre `simulador-binario.html` em nova aba (`target="_blank" rel="noopener"`)
- Check 9/9 distribuído no fim da fase
- Atualizar `TOTAL_TOPICS[3] = 9` (antes 8)
- Atualizar mapeamento de fases/checks (0–9 = 10 checks totais)
- Progresso: 0% (0/9) → 100% (9/9)

### 10.6 Atualizações no PDF (`assets/js/pdf-lessons.js`)
Adicionar seção **3.9** com `lessonNum: 3`:
- `heading: "3.9 Praticando: Conversor Binário ↔ ASCII"`
- `content`: explica utilidade do simulador, lista 4 conversores, destaca aprendizagem ativo (prática com passo-a-passo). Incluir instrução: "Acesse o simulador em: Módulo Windows → Aula 03 → Fase 9".
- `boxType: "tip"`, `boxTitle: "💡 Pratique para fixar"`, `boxText: "Use o simulador para testar o exemplo 'Rangel' (letra→binário) e refazer a conversão 13→1101 (decimal→binário) até dominar o método das divisões por 2."`
- **Sem imagem obrigatória** (pode omitir). Seguir padrão (não inventar imagem).

### 10.7 Critérios de Aceite (adicionais)
- [ ] `modules/windows/simulador-binario.html` existe, abre, responsivo mobile (375px), sem erros no console
- [ ] Decimal 13 → Binário 1101 (com passo-a-passo exibindo divisões)
- [ ] Binário `01010010` → Letra `R`, ASCII 82
- [ ] Letra `R` → ASCII 82 → Binário `01010010`
- [ ] Botão "Abrir Simulador..." na FASE 9 abre em nova aba
- [ ] Check 9/9 funciona, progresso 100% com badge
- [ ] `TOTAL_TOPICS[3]=9`, rotas/estado consistentes
- [ ] PDF inclui seção 3.9
- [ ] `localStorage` salva/restaura estado do simulador

---

## 11. ARQUIVOS A CRIAR/COPIAR (Checklist de implementação)
1. `assets/img/windows/Aula3/` (dir) + 7 PNGs copiados
2. `modules/windows/simulador-binario.html` (novo, ~400–600 linhas, standalone)
3. `modules/windows/index.html` — adicionar card Aula 03, `screen-lesson-3` (FASE 0–9), `PASSWORD_A3="wr0326"`, `TOTAL_TOPICS[3]=9`, rotas, `QUESTIONS_LESSON_3`, `QUIZ_CFG[3]`
4. `assets/js/pdf-lessons.js` — título Aula 03 em `windows[3]`, 10 seções (3.0–3.9), paths Aula3, `imagesWide` em 3.2/3.4

**Situado (07/10/2026): todos os 4 itens acima concluídos** — ver §12 (deviações) e `Docs/CONTINUACAO.md`.
