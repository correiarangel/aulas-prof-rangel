# 🏛️ SPEC-010 — Especificação Técnica e Pedagógica da Aula 10 (Windows)
### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 10 do Módulo Windows — "Ferramentas Básicas do Windows (7, 10 e 11)"** é um módulo de aprendizado **Prático Orientado ("Mão na Massa")**, desenvolvido para execução presencial em ambiente de laboratório. O aluno lê as instruções na tela e executa simultaneamente no computador real (Windows 7 / 10 / 11).

### Objetivo Geral
Apresentar e praticar as principais **ferramentas básicas** do Windows utilizadas no dia a dia: ferramentas administrativas, utilitários de sistema, atalhos práticos e recursos para diagnóstico/auxílio, com foco em aplicabilidade imediata.

### Objetivos Específicos
Ao final desta aula, o aluno deverá ser capaz de:
1. Identificar e acessar as **Ferramentas do Windows** (Menu Iniciar / Painel de Controle / Executar).
2. Utilizar o **Executar (`Win + R`)** para abrir utilitários comuns.
3. Conhecer e aplicar o **Prompt de Comando** e o **Windows PowerShell** em comandos básicos.
4. Utilizar ferramentas como **Calculadora**, **Bloco de Notas**, **Paint**, **Captura e Recorte**.
5. Compreender o uso do **Gerenciador de Tarefas**, **Painel de Controle** e **Configurações** conforme a versão.
6. Conhecer utilitários como **msconfig**, **regedit** (apenas noção/conscientização de segurança), **dxdiag** e demais ferramentas básicas.
7. Realizar práticas "mão na massa" seguindo roteiro numerado e marcar checks distribuídos.

### Core Topics (Tópicos Didáticos)
1. **Apresentação da Aula** — Objetivo, roteiro e importância
2. **Acessando as Ferramentas do Windows** — Menu, Executar, Painel
3. **Principais Utilitários** — Bloco de Notas, Calculadora, Paint, Captura e Recorte
4. **Ferramentas Administrativas / de Diagnóstico** — Gerenciador de Tarefas, msinfo32, dxdiag
5. **Executar (`Win + R`) e Comandos Úteis** — atalhos prontos
6. **Prompt de Comando e PowerShell (noções)** — uso básico
7. **Práticas "Mão na Massa"** — exercícios guiados
8. **Exercício de Fixação** — revisão e verificação

---

## 2. Análise da Base de Informação (material de origem)

### 2.1 Arquivos analisados
| Arquivo | Papel |
|:---|:---|
| `AulaOrigem/windows/Aula 10 – Ferramentas Básicas do Windows (7, 10 e 11)/Aula10FerramentasBsicasdoWindows_710e11_.html` | Apostila de origem (Google Docs export HTML) |
| `AulaOrigem/windows/Aula 10 – Ferramentas Básicas do Windows (7, 10 e 11)/images/` (9 PNG) | Capturas de tela reais utilizadas na aula |

### 2.2 Título e rótulos
- **Título no hub (card):** `Aula 10: Ferramentas Básicas do Windows (7, 10 e 11)`
- **Entrada via `promptLessonPassword`:** `Ferramentas Básicas do Windows (7, 10 e 11)`
- **Título no PDF (`moduleLessonTitles.windows[10]`):** `Aula 10: Ferramentas Básicas do Windows (7, 10 e 11)`
- **Senha candidata:** `wr1026`

---

## 3. Estrutura Obrigatória (conforme AGENTS.md)

### 3.1 Requisitos Invioláveis
1. **FASE 0 sempre presente** — bloco introdutório com objetivo + roteiro numerado em passo a passo. Checks distribuídos no fim de cada fase/tópico.
2. **Imagens reais no PDF** — usar ilustrações reais copiadas para `assets/img/windows/Aula10/` (9 imagens) e referenciadas com paths relativos `../../assets/img/windows/Aula10/...`
3. **lessonNum obrigatório** — todas as seções do PDF para esta aula devem ter `lessonNum: 10` quando forem específicas dela
4. **Mobile global** — não criar @media por aula
5. **Persistência do quiz** — se usar exercícios de fixação com motor genérico, garantir gravação/restauração + botão "↺ Recomeçar o exercício"
6. **Overlay correto** — se houver overlays, seguir regras do AGENTS.md

### 3.2 Estrutura da Tela `screen-lesson-10`
Seguir padrão das aulas 7, 8, 9:
- Cabeçalho com botões "Voltar ao Menu", "Imprimir Aula Completa", "Baixar Apostila PDF"
- Painel gamificado de progresso (`gamify-header-bar`) com `gamify-bar-10`, `gamify-percent-10`, `gamify-badge-box-10` e botão "↺ Recomeçar a leitura"
- `article.lesson-reading-card` com FASE 0
- Navegação por abas/tópicos com `switchTopicPhase(10, n)`
- Seções `#l10-phase-n.topic-phase-section`
- Checks `#check-read-10-n` com `markTopicRead(10, n)`
- Exercício de Fixação (5 perguntas) se aplicável

### 3.3 Configurações
- `TOTAL_TOPICS[10]` = número de checks (distribuídos)
- `SEQUENTIAL_LESSONS[10] = true`
- Adicionar ao `routes` em `promptLessonPassword` (já adicionado)
- Adicionar ao `OPEN_LESSONS` (já adicionado)
- `QUIZ_CFG[10]` com `QUESTIONS_LESSON_10` se houver exercício de fixação

---

## 4. Plano de Implementação

### Passo 1: Preparação
- [ ] Copiar imagens de `AulaOrigem/windows/Aula 10 – Ferramentas Básicas do Windows (7, 10 e 11)/images/` para `assets/img/windows/Aula10/`
- [ ] Atualizar `assets/js/pdf-lessons.js`: adicionar `moduleLessonTitles.windows[10] = "Aula 10: Ferramentas Básicas do Windows (7, 10 e 11)"`

### Passo 2: Estrutura base
- [ ] Adicionar `TOTAL_TOPICS[10]` e `SEQUENTIAL_LESSONS[10]` em `modules/windows/index.html`
- [ ] Criar `screen-lesson-10` com FASE 0, índice de tópicos, seções, checks distribuídos
- [ ] Mapear conteúdo do HTML de origem para seções práticas "mão na massa"

### Passo 3: Quiz/Exercício (se existir)
- [ ] Criar `QUESTIONS_LESSON_10` com 5 questões baseadas no conteúdo
- [ ] Adicionar `QUIZ_CFG[10]`

### Passo 4: Validação
- [ ] `node --check assets/js/pdf-lessons.js`
- [ ] Verificar estrutura, imagens, checks distribuídos
- [ ] Testar navegação e PDF

---

## 5. Critérios de Aceite
- [ ] Aula 10 acessível pelo hub sem mensagem "Em Construção"
- [ ] FASE 0 presente com objetivo e roteiro numerado
- [ ] Checks distribuídos ao final de cada fase
- [ ] Todas as imagens reais presentes
- [ ] PDF gera com seções de lessonNum 10 e imagens reais
- [ ] TOTAL_TOPICS[10] e SEQUENTIAL_LESSONS[10] configurados
- [ ] Persistência de leitura funcional (botão "↺ Recomeçar a leitura")
- [ ] Senha `wr1026` aceita

---

**Data:** 28/10/2026  
**Status:** EM IMPLEMENTAÇÃO
