# 📘 SPEC-AULA-04-WORD — Especificação Técnica e Pedagógica da Aula 04 (Word)
### Módulo 2: Microsoft Word | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: ✅ IMPLEMENTADA E VALIDADA (checagem estática)

---

## 🎯 1. Análise da Base de Informação (Material de Origem)

### 1.1 Arquivos Analisados
| Arquivo | Tamanho | Papel no Projeto |
| :--- | :--- | :--- |
| `AulaOrigem/word/Aula 4  USANDO FIGURAS BORDAS NO WORD 2010-2013/AULA4USANDOFIGURASBORDASNOWORD20102013.html` | 65.696 bytes | **Apostila original da aula** — Configuração de página paisagem, bordas de arte, formas geométricas, personalização visual e cartazes práticos |
| `AulaOrigem/word/Aula 4  USANDO FIGURAS BORDAS NO WORD 2010-2013/images/image1.png` | 38.211 bytes | Imagem-modelo do Cartaz 1 (cartaz com formas, setas e borda decorativa) |
| `AulaOrigem/word/Aula 4  USANDO FIGURAS BORDAS NO WORD 2010-2013/images/image2.png` | 46.564 bytes | Imagem-modelo do Cartaz 2 (layout paisagem ocupando folha inteira) |

### 1.2 Estrutura do Conteúdo Original
1. **Configuração de Página para Material Visual**:
   - Orientação Retrato (para cartas e relatórios) vs Paisagem (para certificados, cartazes e tabelas largas).
2. **Bordas da Página**:
   - Caixa de diálogo Bordas e Sombreamento: aba *Bordas da Página*.
   - Tipos de bordas: Linhas simples, linhas duplas, linhas decorativas estilizadas e **Bordas de Arte** (molduras gráficas clássicas).
   - Escopo de aplicação: No documento inteiro, apenas na primeira página (capa), ou em todas exceto a primeira página.
   - Opções de margem da borda: medir a partir da "Borda da Página" vs "Texto" (essencial para não ser cortado na impressora).
3. **Formas Geométricas (Shapes)**:
   - Inserção de retângulos arredondados, elipses, setas de bloco, estrelas, faixas e balões.
   - Adicionar texto diretamente dentro de formas.
   - Ferramentas de Desenho (Guia Formatar): Preenchimento da Forma (cores sólidas, gradientes ou texturas), Contorno da Forma (espessura e estilo de traço) e Efeitos de Forma (Sombra e Bisel).
4. **Alinhamento e Organização de Objetos**:
   - Opções de sobreposição: *Avançar / Trazer para a Frente* e *Recuar / Enviar para Trás*.
   - Recurso de **Agrupar (`Ctrl` + selecionar formas > Botão direito > Agrupar)** para mover múltiplos desenhos como um único bloco.
5. **Oficina Prática**: Recriação dos cartazes didáticos 1 e 2 em modo Paisagem.

---

## 📐 2. Definição da Aula no Portal

| Item | Decisão Técnica / Pedagógica |
| :--- | :--- |
| **Título Oficial** | **Aula 04: Bordas Decorativas, Formas & Quebra de Texto** |
| **Subtítulo** | *Orientação paisagem, molduras de página, formas geométricas, efeitos 3D e cartazes* |
| **ID da Seção no Portal** | `<section id="screen-lesson-4" class="screen-view">` |
| **Senha de Acesso** | `wd004` |
| **Estrutura de Fases** | **FASE 0** (Tutorial com 5 passos e chips) + **5 Fases de Leitura** com checks distribuídos |
| **Checks Distribuídos** | `l4-check-1` a `l4-check-5` (1 no fim de cada fase, nunca agrupados) |
| **Progresso Gamificado** | `#gamify-fill-4`, `#gamify-label-4` (0% a 100%), `#gamify-badge-box-4` |
| **Persistência LocalStorage** | Leitura: `word_lesson_4_progress` \| Quiz: `word_lesson_4_quiz` |

---

## 🧱 3. Roteiro Passo a Passo & Fases Didáticas

### FASE 0: Bloco Tutorial Obrigatório
- **Objetivo**: Aprender a construir peças gráficas, certificados e comunicados visuais elegantes dentro do Word, dominando bordas artísticas de página, formas geométricas vetoriais e organização em camadas.
- **Roteiro em 5 Passos (Chips)**:
  1. Alterar a Orientação da página para Paisagem (horizontal).
  2. Aplicar Bordas de Página (linhas duplas e bordas de arte).
  3. Inserir Formas Geométricas e digitar texto interno.
  4. Personalizar Preenchimento, Contorno e Efeitos visuais.
  5. Dominar a ordem das camadas (Trazer para Frente / Enviar para Trás) e Agrupar.
- **Contador**: `#l4-checklist-status` ("▢ 0 / 5 Passos Concluídos").
- **Botão**: `btn-start-l4` ("▶ ENTENDI! QUERO COMEÇAR A AULA ↓").

### FASE 1: Orientação da Página (Retrato vs Paisagem)
- Diferença entre Retrato (folha em pé) e Paisagem (folha deitada).
- Onde alterar: Guia `Layout da Página` (ou `Layout`) > grupo Configurar Página > `Orientação` > `Paisagem`.
- Dica de design: Paisagem é a escolha ideal para certidões, diplomas, cartazes de avisos e fluxogramas largos.
- *Check 1*: `[ ] Passo 1: Configurei a orientação da página para modo Paisagem (horizontal).`

### FASE 2: Molduras e Bordas de Página (Estilo e Arte)
- Acessando o painel de Bordas da Página:
  - No Word 2010/2013: Guia `Layout da Página` > grupo Plano de Fundo > `Bordas da Página`.
  - Em versões recentes: Guia `Design` > `Bordas da Página`.
- Tipos de bordas:
  - Estilo Clássico: Linhas duplas ou triplas com espessura ajustável (ex: 1,5 pt ou 3 pt).
  - Estilo Arte: Seleção de molduras prontas no menu suspenso *Arte* (estrelas, laços, cantoneiras clássicas).
- Ajuste de margem da borda: Clicar no botão `Opções...` e mudar "Medir a partir de" para `Texto` (evita que a borda seja cortada pela margem física da impressora).
- *Check 2*: `[ ] Passo 2: Apliquei uma borda decorativa na página e ajustei a margem para não cortar na impressão.`

### FASE 3: Inserindo Formas Geométricas e Escrevendo Dentro Delas
- Localização: Guia `Inserir` > grupo Ilustrações > botão `Formas`.
- Desenhando na tela: Clicar na forma desejada (retângulo com cantos arredondados, seta, balão) e arrastar com o botão esquerdo pressionado.
- Escrevendo dentro da forma: Basta clicar na forma com o botão direito e escolher **Adicionar Texto** (ou simplesmente começar a digitar com ela selecionada). O texto fica automaticamente vinculado à forma!
- *Check 3*: `[ ] Passo 3: Inseri uma forma geométrica no documento e digitei texto diretamente no interior dela.`

### FASE 4: Cores, Contornos e Efeitos de Forma
- Com a forma selecionada, abre-se a guia contextual **Ferramentas de Desenho > Formatar**:
  - **Preenchimento da Forma**: Cor sólida, gradiente suave ou sem preenchimento.
  - **Contorno da Forma**: Cor da linha externa e espessura (largura em pt).
  - **Efeitos de Forma**: Aplicação de Sombra suave, Brilho ou Bisel (efeito de relevo tridimensional).
- *Check 4*: `[ ] Passo 4: Personalizei o preenchimento, a cor do contorno e adicionei efeito de sombra na forma.`

### FASE 5: Camadas de Objetos e Agrupamento
- Como controlar qual desenho fica por cima ou por baixo:
  - Clicar com botão direito na forma > `Trazer para a Frente` ou `Enviar para Trás`.
- Como evitar que desenhos se desmontem ao mexer no texto:
  - Segurar a tecla `Ctrl` e clicar em todas as formas que compõem o cartaz.
  - Clicar com botão direito > `Agrupar` > `Agrupar`. Agora todos os elementos movem-se juntos como uma única figura!
- *Check 5*: `[ ] Passo 5: Ordenei as formas em camadas e pratiquei o agrupamento de objetos.`

---

## 📝 4. Exercício de Fixação da Aula 04 (`QUIZ_CFG[4]`)

5 Questões de múltipla escolha com persistência no `QuizEngine`:
1. **Em qual guia do Microsoft Word fica localizada a ferramenta de inserção de FORMAS geométricas (retângulos, círculos, setas)?**
   - a) Guia Inserir. *(Correta)*
   - b) Guia Revisão.
   - c) Guia Exibição.
   - d) Guia Referências.
   - *Dica*: Formas e imagens são 'inseridas' na página.
2. **Como se deve proceder para escrever um texto diretamente no interior de uma forma geométrica inserida no Word?**
   - a) Não é possível escrever dentro de formas.
   - b) Clicar com o botão direito na forma e escolher 'Adicionar Texto' (ou simplesmente começar a digitar). *(Correta)*
   - c) Colar uma imagem por cima da forma.
   - d) Apagar a forma e digitar normalmente.
   - *Dica*: O Word aceita digitação direta no interior de qualquer forma geométrica.
3. **Qual orientação de página deixa a folha 'deitada' (horizontal), ideal para certificados e cartazes?**
   - a) Orientação Retrato.
   - b) Orientação Paisagem. *(Correta)*
   - c) Orientação Panorâmica.
   - d) Orientação Diagonal.
   - *Dica*: Paisagem remete à vista horizontal do horizonte.
4. **Para que serve o recurso 'Agrupar' quando selecionamos duas ou mais formas geométricas no documento?**
   - a) Excluir todas as formas de uma só vez.
   - b) Unir as formas para que se movam e sejam redimensionadas juntas como um único bloco. *(Correta)*
   - c) Mudar a cor de todas para preto e branco.
   - d) Imprimir apenas as formas selecionadas.
   - *Dica*: Agrupar cria um bloco único, impedindo que os elementos se desalinhem.
5. **Na caixa de diálogo de Bordas da Página, onde é possível escolher molduras decorativas prontas como estrelas, cantoneiras e artes?**
   - a) No campo 'Cor da Linha'.
   - b) No menu suspenso 'Arte'. *(Correta)*
   - c) Na régua superior.
   - d) No botão de Zoom.
   - *Dica*: Fica na base da janela com a legenda 'Arte'.

---

## 📑 5. Especificação para a Apostila em PDF (`assets/js/pdf-lessons.js`)

Seções com `lessonNum: 4`:
- **Seção 4.1**: *Orientação de Página e Planejamento Visual de Cartazes*
  - Diretrizes para documentos em modo Retrato vs Paisagem.
- **Seção 4.2**: *Bordas de Página: Linhas Técnicas e Molduras de Arte*
  - Ilustração HTML (`sec.html`): Cartão com moldura de borda decorativa dupla com cantos trabalhados.
- **Seção 4.3**: *Desenho Vetorial com Formas Geométricas e Formatação*
  - Tabela com catálogo de formas mais utilizadas (retângulo arredondado, setas, caixas de diálogo) e paletas de cores sóbrias.
- **Seção 4.4**: *Camadas, Sobreposição e o Poder do Agrupamento*
  - Passo a passo de seleção múltipla com `Ctrl` e agrupamento de objetos para transporte seguro no documento.

---

## ✅ 6. Registro de Implementação (02/11/2026)

| Peça | Onde | Estado |
| :--- | :--- | :--- |
| Tela da aula | `modules/word/index.html` → `#screen-lesson-4` | ✅ `<section class="screen-view">` como irmã das demais telas |
| FASE 0 | `#l4-fase-0` | ✅ Objetivo + roteiro em 5 chips + contador `#l4-checklist-status` |
| Fases 1–5 | `#tab-btn-4-1..5` | ✅ Orientação, Bordas de Página, Formas & Texto (com Quebra de Texto), Cores/Efeitos, Camadas/Agrupar |
| Checks distribuídos | `#l4-check-1..5` + `#check-read-4-1..5` | ✅ Um check no fim de cada fase, com trava sequencial |
| Simuladores | `l4SetOrientation()`, `l4SetBorder()`, `l4SetShape()`, `l4SetFill()`, `l4SetOutline()`, `l4ToggleShadow()`, `l4SetLayer()`, `l4ToggleGroup()` | ✅ Página girando, moldura, catálogo de formas, cores/contorno/sombra e camadas/grupo |
| Fixação | `QUESTIONS_LESSON_4` + `QUIZ_CFG[4]` | ✅ 5 questões; `moduleId: "word_lesson_4_quiz"`; gabarito `[2, 1, 3, 0, 2]` (posições corretas variadas) |
| Roteamento | `TOTAL_TOPICS`, `SEQUENTIAL_LESSONS`, `promptLessonPassword`, `routes` | ✅ Aula 4 liberada com senha `wd004` |
| Apostila PDF | `assets/js/pdf-lessons.js` → `LESSONS.word.sections` | ✅ Seções 4.0–4.5 com `lessonNum: 4` e `html` ilustrado |

**Validações estáticas executadas:** `node --check assets/js/pdf-lessons.js` OK; script inline de `modules/word/index.html` extraído e checado OK; conferência estrutural (5 fases, 5 checks, 5 botões de leitura, 6 abas, 6 seções da Aula 04 com `lessonNum: 4`, zero placeholders "🖼️ Referência de imagem", tags `<section>/<article>/<div>/<nav>/<table>` balanceadas).

**Pendente de validação em navegador:** bateria CDP automatizada (desbloqueio `wd004`, checks sequenciais, simuladores, quiz 5/5 com SHA-256, PDF da Aula 4 e auditoria mobile 375/390 px). Não havia Playwright/Puppeteer disponível na sessão de implementação.

---

## 🖼️ 7. Correção de Imagens (16/11/2026 — pedido do usuário)

**Defeito detectado:** as 2 imagens do acervo original (`images/image1.png`, `image2.png`) **existiam no material de origem mas nunca tinham sido copiadas nem usadas** — a tela e o PDF da Aula 04 estavam com zero imagens (violava a Regra 2 do `AGENTS.md`).

**Correção aplicada:**

| Peça | Onde | O que foi feito |
| :--- | :--- | :--- |
| Acervo de imagens | `assets/img/word/Aula4/` (nova pasta) | Cópia de `image1.png` (cartaz "Vende-se Geladinho") e `image2.png` (cartaz de alerta de alta tensão) |
| Tela da aula | `#screen-lesson-4`, Fase 5 (antes do Checklist de Auditoria) | Vitrine "🖼️ Exemplos reais: cartazes montados com o que você aprendeu" com as 2 imagens (`.img-showcase` + `.img-caption`, numeração 1/2 e 2/2) |
| Apostila PDF | `assets/js/pdf-lessons.js` → seção 4.5 | Campo `images` (array) com os 2 cartazes, `wide: true` e legendas descritivas |

**Conteúdo das imagens:** `image2.png` = cartaz de alerta de alta tensão com moldura de borda de página (moldura vermelha) e formas de raio; `image1.png` = cartaz de venda com formas, setas e texto estilizado em **folha em modo paisagem** (resultado final dos tópicos 4.1–4.5).

**Validação:** `node --check` OK nos 2 arquivos; contagem por seção confirma 2 imagens na 4.5; sem seções órfãs. Status geral da aula permanece ✅ IMPLEMENTADA (aguardando CDP + commit).
