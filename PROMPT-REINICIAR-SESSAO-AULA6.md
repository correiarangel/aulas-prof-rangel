# PROMPT PARA REINICIAR SESSÃO – AULA 06 DO WINDOWS (WordPad)

Copie e cole TODO este conteúdo na próxima sessão para continuar exatamente de onde paramos.

---

## CONTEXTO ATUAL
- Repositório: /home/rangel/git-dev/aulas (git repo)
- Últimos commits (já enviados): 
  4a85fc9 docs: atualiza o CONTINUACAO com o status da Aula 5
  6bcda2a docs: adiciona a spec da Aula 5 do Windows
  b79f350 feat: gera a apostila PDF da Aula 5 do Windows com as 9 secoes
  e03e0c1 feat: implementa a Aula 5 do Windows (FASE 0, 8 fases, quiz e hub)
  08b01bb feat: adiciona as 14 imagens da Aula 5 do Windows
- Aula 05 já implementada, validada tecnicamente e commitada. 
- SDD da Aula 06 criado: `Docs/SPEC-AULA-06-WINDOWS.md`
- Material fonte da Aula 06: `AulaOrigem/windows/Aula 6 - WordPad/` (Aula6WordPad.html + 8 imagens em images/)

## OBJETIVO DA PRÓXIMA SESSÃO
Implementar a **AULA 06 – WordPad – Editor de Texto do Windows** seguindo EXATAMENTE o padrão das Aulas 01–05 e todas as regras do `AGENTS.md`.

## PRIMEIROS PASSOS (OBRIGATÓRIOS)
1. Ler `AGENTS.md` (regras persistentes) – especialmente: FASE 0 sempre presente, checks distribuídos por fase, imagens reais no PDF, regra mobile global, regra 7 (quiz persistente + "Recomeçar o exercício"), regra 8 (lessonNum por seção, guardas de apostila), regra 12 (harness não detecta erros de conteúdo).
2. Ler `Docs/SPEC-AULA-06-WINDOWS.md` (SDD completo da Aula 6)
3. Ler `Docs/SPEC-AULA-05-WINDOWS.md` (padrão-modelo para espelhar)
4. Ler `Docs/CONTINUACAO.md` (§"COMO REINICIAR O AMBIENTE" + status atual)
5. Ler `modules/windows/index.html` – visualizar estrutura das telas `screen-lesson-5` e `screen-lesson-4` (FASE 0, fases, tabs, checks, quiz, hub)
6. Ler `assets/js/pdf-lessons.js` – visualizar como foram adicionadas as seções `lessonNum: 5`

## ARQUIVOS QUE DEVEM SER MODIFICADOS/CRIADOS
| Item | Ação | Observação |
|:---|:---|:---|
| `assets/img/windows/Aula6/` | CRIAR + COPIAR | Copiar `image1.png`..`image8.png` de `AulaOrigogem/windows/Aula 6 - WordPad/images/` (corrigir caminho exato) para `assets/img/windows/Aula6/` |
| `modules/windows/index.html` | MODIFICAR | Criar `screen-lesson-6`, atualizar hub, rotas, `OPEN_LESSONS`, `TOTAL_TOPICS[6]=9`, `SEQUENTIAL_LESSONS[6]=true`, `PASSWORD_A6="wr0626"`, `QUESTIONS_LESSON_6`, `QUIZ_CFG[6]`, bindings de leitura/quiz. |
| `assets/js/pdf-lessons.js` | MODIFICAR | Adicionar título em `moduleLessonTitles.windows[6]` e 9 seções com `lessonNum: 6` (6.0–6.8) entre `lessonNum: 5` e `lessonNum: 7`. Usar imagens reais e classes HTML para ilustrações quando cabível. |
| `Docs/CONTINUACAO.md` | ATUALIZAR | Registrar início/conclusão da Aula 6 ao final da sessão (conforme instrução do AGENTS.md). |

## REQUISITOS CRÍTICOS
- **FASE 0** obrigatória com objetivo + roteiro numerado em passo a passo. Checks distribuídos por fase (NUNCA agrupados).
- **Imagens reais** no PDF (regra 2). Sem "🖼️ Referência de imagem: ...". Paths `../../assets/img/windows/Aula6/imageX.png`. Resolver via `resolveImagePath`/padrão já usado.
- **PDF renderizado** com `<div class="pdf-html-illustration">` quando usar `sec.html`.
- **Mobile global** – NÃO criar `@media` por aula. Se mexer em regras, usar apenas o bloco global existente em `assets/css/style.css`.
- **Quiz com persistência (Regra 7)** – gravar com `QuizEngine.saveState`, restaurar com `QuizEngine.loadState`, botão "↺ Recomeçar o exercício" que limpa a chave `windows-aula-6:<nome>`. Validar gravação ao responder/navegar/assinar e restauração ao abrir.
- **lessonNum correto (Regra 8)** – seções da Aula 6 com `lessonNum: 6`. Não misturar com seções genéricas.
- **Senhas** – manter integridade das demais aulas. Adicionar `PASSWORD_A6 = "wr0626"` (candidata).
- **Sem duplicados** – checar IDs, classes e funções.
- **Validação antes de concluir** – `node --check assets/js/pdf-lessons.js` e checar script inline do HTML. Também balanceamento de tags se editar muito o HTML.

## DIVISÃO SUGERIDA (seguindo SPEC)
FASE 0 + FASES 1–8, 9 checks (`check-read-6-1..9`), 8 abas + fixação, TOTAL_TOPICS[6]=9, SEQUENTIAL_LESSONS[6]=true.
Conteúdo: O que é WordPad → Abrir (Win7/10/11) → Faixa de Opções (Transferência/Fonte/Parágrafo) → Inserir/Exibir/Menu Arquivo → Salvar x Salvar Como → Exercício Relatório do PC (Propriedades + ipconfig) → Estrutura de pastas em Documentos → Fixação.

## AMBIENTE DE TESTE
Se precisar validar, reiniciar conforme `Docs/CONTINUACAO.md` §"INSTRUÇÕES PARA O PRÓXIMO AGENTE – COMO REINICIAR O AMBIENTE":
- Servidor HTTP: `python3 -m http.server 8077 > /tmp/opencode/pdftest/server.log 2>&1 &`
- Chrome headless com CDP: porta 9333 com `--disable-popup-blocking` OBRIGATÓRIO
- Harness em `/tmp/opencode/pdftest/` (validado com 173 asserções em 01/10/2026)

## COMANDO PARA INICIAR
"Implemente a Aula 06 do Windows (WordPad) seguindo estritamente `Docs/SPEC-AULA-06-WINDOWS.md`, `Docs/SPEC-AULA-05-WINDOWS.md` e `AGENTS.md`. Copie as 8 imagens para `assets/img/windows/Aula6/`, crie `screen-lesson-6` em `modules/windows/index.html` com FASE 0 + 8 fases e 9 checks, adicione rotas/hub/senha/quiz/persistência, e gere as 9 seções `lessonNum: 6` em `assets/js/pdf-lessons.js`. Valide com `node --check` e atualize `Docs/CONTINUACAO.md` ao final."
