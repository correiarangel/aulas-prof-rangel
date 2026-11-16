# SPEC-AULA-09-WINDOWS.md
### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional
### Status: 🟡 **A FAZER** — Aula 09: Prática – Organização e Configuração do Windows
### Padrão: seguir rigorosamente `Docs/SPEC-AULA-06-WINDOWS.md`, regras do `AGENTS.md` e práticas validadas nas Aulas 04–06

---

## 1. Análise da Base de Informação (material de origem)

### 1.1 Arquivos analisados

| Arquivo | Papel |
|:---|:---|
| `AulaOrigem/windows/Aula 09 Pratica_Windows/Aula_09_Pratica_Windows.html` | Apostila prática de origem (Google Docs export HTML). Contém 7 partes integradoras unindo os conteúdos vistos nas Aulas 01–06. |
| `AulaOrigem/windows/Aula 09 Pratica_Windows/images/image1.png` ... `image5.png` | 5 capturas reais utilizadas na prática. Já copiadas para `assets/img/windows/Aula9/`. |

### 1.2 Título e rótulos

- **Título no hub (card):** `Aula 09: Prática – Organização e Configuração do Windows`
- **Entrada via `promptLessonPassword`:** `Prática – Organização e Configuração do Windows`
- **Título no PDF (`moduleLessonTitles.windows[9]`):** `Aula 09: Prática – Organização e Configuração do Windows`
- **Senha candidata:** `wr0926`

### 1.3 Conteúdo extraído da origem

Aula prática integradora com os seguintes blocos:

| Parte | Descrição |
|:---|:---|
| **Parte 1 – Organização de Pastas de uma Empresa** | Criar estrutura `empresa-xyz` na Área de Trabalho com 4 setores (Financeiro, Vendas, TI, RH). Em cada setor, criar arquivo `.txt` com pelo menos 3 nomes de funcionários. |
| **Parte 2 – Organizando Fotos e Imagens** | Na pasta `Imagens/Fotos` do usuário, criar `Astronomia` e `Natureza`. Classificar imagens por assunto e renomear 2 arquivos com nomes descritivos (`F2`). |
| **Parte 3 – Alterando o Papel de Parede** | Alterar o plano de fundo da Área de Trabalho escolhendo uma das imagens organizadas. |
| **Parte 4 – Alterando a Senha do Usuário** | Praticar "Adicionar/Alterar senha" em `Configurações > Contas > Opções de entrada`. Usar `123` **apenas para fins didáticos**, reforçando boas práticas. |
| **Parte 5 – Criando um Ponto de Restauração** | Acessar `Criar um ponto de restauração`, criar ponto com nome `Ultimo Ponto`. |
| **Parte 6 – Diagnóstico do Computador** | Verificar SO, processador, memória RAM, tipo de sistema, hora/data, rede/IP e tráfego. |
| **Parte 7 – Ferramentas de Manutenção do Windows** | Orientações sobre `Redefinir este PC > Manter meus arquivos` (apenas demonstração), `cleanmgr` e verificação do Windows Defender. |

Também contém **quiz prático** ao final com 15 questões (já existente na apostila de origem). Para o portal utilizaremos **5 questões x 4 alternativas** no painel de fixação, seguindo o padrão das demais aulas.

---

## 2. Objetivos da Aula

Ao final desta aula, o aluno deverá ser capaz de:

- Criar e organizar pastas e subpastas para simular uma estrutura empresarial;
- Classificar, mover e renomear arquivos corretamente;
- Alterar o papel de parede da Área de Trabalho;
- Alterar/adicionar senha de usuário com noção de boas práticas;
- Criar um ponto de restauração do sistema;
- Realizar diagnóstico básico do computador (hardware, rede e sistema);
- Identificar e aplicar noções básicas de manutenção do Windows;
- Integrar, na prática, conteúdos vistos nas aulas anteriores.

---

## 3. Mapeamento de Imagens (Tela x PDF)

Copiadas para `assets/img/windows/Aula9/`.

| Imagem | Uso sugerido | Legenda (para tela + PDF) |
|:---|:---|:---|
| `image1.png` | Parte 1 – Estrutura `empresa-xyz` | `Estrutura de pastas a ser criada na Área de Trabalho.` |
| `image2.png` | Parte 3 – Papel de Parede | `Personalizar > Plano de Fundo.` |
| `image3.png` | Parte 2 – Organização de Imagens | `Pastas Astronomia e Natureza dentro de Imagens.` |
| `image4.png` | Parte 5 – Ponto de Restauração | `Criando o ponto de restauração com o nome "Ultimo Ponto".` |
| `image5.png` | Parte 4 – Alterar Senha | `Configurações > Contas > Opções de entrada para alterar a senha.` |

**Regra:** Nunca usar "🖼️ Referência de imagem: ...". Ilustrações reais vão no `sec.html` com classes `.mini-sheet`, `.fun-highlight`, `.es-sheet-box`, `.es-sheet-titlebar`.

---

## 4. Estrutura da Aula no Portal (`modules/windows/index.html`)

Seguir o mesmo molde das Aulas 05/06.

| Elemento | Especificação |
|:---|:---|
| **ID da tela** | `screen-lesson-9` |
| **FASE 0** | `#l9-fase-0` com `check-read-9-1`. Objetivo + **Roteiro numerado em passo a passo** + orientações. |
| **Fases** | `#l9-phase-1` até `#l9-phase-8` com `class="topic-phase-section"` |
| **Abas** | `<nav class="topic-tabs-bar">` com `tab-btn-9-1` ... `tab-btn-9-8` + `tab-btn-9-fix` → `openFixationPanel(9)` |
| **Checks distribuídos** | `check-read-9-1` a `check-read-9-9` → `TOTAL_TOPICS[9] = 9` |
| **Gating sequencial** | `SEQUENTIAL_LESSONS[9] = true` |
| **Hub** | Card "Aula 09" ativo com `badge-lesson-9` `"🟢 Disponível"`, `onclick="promptLessonPassword(9, 'Prática – Organização e Configuração do Windows')"` |
| **Rotas/Gates** | `9: "screen-lesson-9"`, `PASSWORD_A9 = "wr0926"`, adicionar `9` em `OPEN_LESSONS` e em `[1,2,3,4,5,6,7,8,9,71,81]` |
| **Quiz** | `QUESTIONS_LESSON_9` (5 questões × 4 alternativas). `QUIZ_CFG[9]` com `moduleId: "windows-aula-9"`, `title: "Módulo 1 — Aula 9: Prática – Organização e Configuração do Windows"`, `sig: "Módulo 1 - Aula 9 (Windows)"` |
| **Persistência** | `QuizEngine.saveState/loadState`, `"↺ Recomeçar o exercício"` limpando `windows-aula-9:<nome>` (Regra 7) |

### Sugestão de divisão por fases

| Fase | Título | Conteúdo | Check |
|:---|:---|:---|:---|
| **FASE 0** | `FASE 0 – Apresentação da Prática` | Objetivo + Roteiro numerado (8 passos) + "ao concluir cada etapa marque o quadradinho" | `check-read-9-1` |
| **FASE 1** | `1. Parte 1 – Organização de Pastas de uma Empresa` | Criar `empresa-xyz`, setores, arquivos `.txt` com funcionários. *(image1)* | `check-read-9-2` |
| **FASE 2** | `2. Parte 2 – Organizando Fotos e Imagens` | Criar `Astronomia`/`Natureza`, classificar, mover e renomear com `F2`. *(image3)* | `check-read-9-3` |
| **FASE 3** | `3. Parte 3 – Alterando o Papel de Parede` | Alterar plano de fundo via Personalizar. *(image2)* | `check-read-9-4` |
| **FASE 4** | `4. Parte 4 – Alterando a Senha do Usuário` | Adicionar/alterar senha em Contas > Opções de entrada. Uso didático `123`. *(image5)* | `check-read-9-5` |
| **FASE 5** | `5. Parte 5 – Criando um Ponto de Restauração` | Criar ponto `Ultimo Ponto`. *(image4)* | `check-read-9-6` |
| **FASE 6** | `6. Parte 6 – Diagnóstico do Computador` | `Este Computador > Propriedades`, `msinfo32`, rede/IP. | `check-read-9-7` |
| **FASE 7** | `7. Parte 7 – Ferramentas de Manutenção` | `Redefinir este PC (demonstração)`, `cleanmgr`, Windows Defender. | `check-read-9-8` |
| **FASE 8** | `8. Revisão da Prática` | Recapitulação + botão para `openFixationPanel(9)` | `check-read-9-9` |

---

## 5. Apostila PDF (`assets/js/pdf-lessons.js`)

Adicionar **9 seções com `lessonNum: 9` (9.0–9.8)** entre a última seção `lessonNum: 8` e a primeira `lessonNum: 71`.

| Seção | Título | Observações |
|:---|:---|:---|
| `9.0` | `FASE 0 – Apresentação da Aula 09: Prática – Organização e Configuração do Windows` | Objetivo + roteiro numerado. |
| `9.1` | `9.1 Parte 1 – Organização de Pastas de uma Empresa` | Estrutura `empresa-xyz`, setores e arquivos. `image1`. |
| `9.2` | `9.2 Parte 2 – Organizando Fotos e Imagens` | Mover, classificar e renomear. `image3`. |
| `9.3` | `9.3 Parte 3 – Alterando o Papel de Parede` | Passo a passo. `image2`. |
| `9.4` | `9.4 Parte 4 – Alterando a Senha do Usuário` | Caminho + alerta sobre senha segura. `image5`. |
| `9.5` | `9.5 Parte 5 – Criando um Ponto de Restauração` | Como criar o ponto. `image4`. |
| `9.6` | `9.6 Parte 6 – Diagnóstico do Computador` | Checklist de verificação. |
| `9.7` | `9.7 Parte 7 – Ferramentas de Manutenção do Windows` | Demonstração orientada. |
| `9.8` | `9.8 Revisão e Fixação` | Síntese da prática integradora. |

- **Imagens:** `../../assets/img/windows/Aula9/imageX.png`
- **Ilustrações:** usar `sec.html` com `.mini-sheet`, `.fun-highlight`, `.es-sheet-box`, `.es-sheet-titlebar`
- **Sem placeholders:** Proibido "🖼️ Referência de imagem: ..."
- **Título:** `moduleLessonTitles.windows[9] = "Aula 09: Prática – Organização e Configuração do Windows"`

---

## 6. Quiz da Aula 09 (sugestão)

Elaborar **5 questões x 4 alternativas (A-D)** com base na prática:

| Nº | Enunciado (sugerido) | Gabarito |
|:---|:---|:---|
| **1** | Na prática, para organizar arquivos por setor, o ideal é: | **B)** Criar pastas separadas por setor dentro da pasta da empresa |
| **2** | Para renomear um arquivo rapidamente, utilizamos: | **C)** Tecla F2 |
| **3** | Para alterar o plano de fundo do Windows, o caminho mais direto é: | **B)** Clique direito na Área de Trabalho > Personalizar > Plano de Fundo |
| **4** | Qual a finalidade de um Ponto de Restauração? | **C)** Permitir voltar o sistema a um estado anterior caso ocorra algum problema |
| **5** | Qual das opções representa uma senha mais segura para uso real? | **D)** `R3ceita$2024!` (mistura de letras, números e símbolos) |

*(Ajustar conforme validação com o material exato na hora da implementação.)*

---

## 7. Checklist de Implementação

- [x] Copiar `image1.png`–`image5.png` para `assets/img/windows/Aula9/`
- [ ] Criar `screen-lesson-9` em `modules/windows/index.html` (FASE 0 + 8 fases, 9 checks)
- [ ] Atualizar hub, rotas, `OPEN_LESSONS`, `TOTAL_TOPICS[9]=9`, `SEQUENTIAL_LESSONS[9]=true`
- [ ] Adicionar `PASSWORD_A9="wr0926"`, `QUESTIONS_LESSON_9`, `QUIZ_CFG[9]`
- [ ] Adicionar `moduleLessonTitles.windows[9]` + 9 seções `lessonNum: 9` em `assets/js/pdf-lessons.js`
- [ ] Garantir persistência de leitura e quiz (Regra 7)
- [ ] Validar com `node --check assets/js/pdf-lessons.js` e script inline
- [ ] Rodar harnesses `validate2.mjs` / `validate_pdf.mjs`
- [ ] Conferir mobile (sem overflow horizontal)
- [ ] Aprovação visual humana antes de commitar

---

## 8. Referências

- `Docs/SPEC-AULA-06-WINDOWS.md` — Padrão-base
- `AGENTS.md` — Regras obrigatórias
- `Docs/CONTINUACAO.md` — Histórico
- `modules/windows/index.html` (screen-lesson-6) — Referência exata
- `AulaOrigem/windows/Aula 09 Pratica_Windows/` — Material fonte único
