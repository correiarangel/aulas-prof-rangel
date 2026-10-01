# Prompt — Sessão: corrigir as pendências do módulo Excel

> Prompt pronto para colar no início da próxima sessão. Foi escrito com base no estado
> real do repositório em 30/09/2026 (P-01 concluída e validada, P-12 em aberto).

---

## Prompt

Preciso corrigir as pendências do módulo Excel (`/home/rangel/git-dev/aulas`).

### Contexto obrigatório — leia antes de mexer

1. `AGENTS.md` — as 11 regras persistentes do repositório (FASE 0, checks distribuídos, PDF, mobile, `lessonNum`, overlay, etc.). A regra 1 e a regra 6 são as que mais pesam aqui.
2. `Docs/PENDENCIAS-EXCEL.md` — o backlog completo (P-01 a P-12). O P-01 já foi resolvido; o que está aberto está descrito abaixo.
3. `Docs/CONTINUACAO.md` — a seção "SESSÃO ATUAL" no topo descreve o que a P-01 entregou e como reexecutar os harnesses.
4. `Docs/SPEC-EXCEL-MASTER.md` §6.1 — as normas obrigatórias de toda aula.

### O que já está pronto (não refazer, não regredir)

A **P-01 foi concluída em 30/09/2026** e validada. Estado atual:

- FASE 0 (`#lN-fase-0`) presente nas **13 aulas** do módulo, incluindo as 5 que faltavam (1, 4, 5, 6 e 7).
- **37 checks** distribuídos no fim de cada fase nas Aulas 1/4/5/6/7 (7/7/7/7/9). Nenhum checkbox dentro da FASE 0.
- `assets/js/pdf-lessons.js` com as seções `1.0`, `4.0`, `5.0`, `6.0`, `7.0` e o `chapter` migrado de `X.1` para `X.0`. Os 13 PDFs do Excel têm FASE 0.
- `stepCheckbox(lessonNum, topicNum)` foi corrigido para resolver o check por **ID** (`#lN-check-M`, com fallback `input.lN-check`) em vez de pegar "o primeiro checkbox da fase". Sem isso a Aula 7 parava em 7/9, porque os 5 quadradinhos do Pivot Lab (`pl-field-*`) vêm antes de `l7-check-8` dentro de `l7-phase-8`. **Não reverta isso.**
- O restore só aplica checks liberados: `if(box && !box.disabled && !box.checked)`. Não reverta.
- `.nav-container` do cabeçalho com `flex-wrap`, `max-width:100%`, `min-width:0` nos filhos e 4px de padding lateral, dentro do bloco `/* REGRAS MOBILE GLOBAIS */` de `assets/css/style.css`. **Proibido** criar `@media` por aula.
- Correções didáticas já feitas: Aula 4 (Carlos tem frequência suficiente mas **nota** insuficiente, `5,0 < 7`) e Aula 5 (PROCV/PROCH retornam o **conteúdo** da célula; o índice é entrada; lookup e fórmula em `E2`).

### Pendências para corrigir, por prioridade

**1. 🔴 P-12 — `l8-check-1` e `l8-check-2` estão dentro de `l7-phase-9`** (`modules/excel/index.html`)

Falta um `</section></article>` entre a Aula 7 e a Aula 8, então os dois primeiros checks da Aula 8 ficam dentro da última fase da Aula 7. Já confirmei com `git show HEAD:modules/excel/index.html` que é **defeito pré-existente**, não regressão da P-01 — mas agora precisamos corrigir.

Efeito atual: o mapeamento 1 check ↔ 1 fase está deslocado na Aula 8 (`l8-check-3` mora em `l8-phase-1`, `l8-check-4` em `l8-phase-2`, …, `l8-check-9` em `l8-phase-9`), então marcar o check da fase 1 grava o tópico 9 e vice-versa. A contagem e a barra de progresso não fecham — o reload fica em **6/9**. Além disso a FASE 0 da Aula 8 nunca habilitou esses 2 checks (ela consulta `.l8-check` dentro do próprio `article`).

Correção sugerida: fechar `</section></article>` antes de `l8-fase-0` e reposicionar `l8-check-1`/`l8-check-2` em `l8-phase-1`/`l8-phase-2`. Confirme primeiro se as fases 7 e 8 da Aula 8 são mesmo 9 fases com 9 checks antes de escolher entre reposicionar e renumerar.

Aceite: marcar os 9 checks da Aula 8 um a um → contagem 9/9, barra 100%, `readStatus[8] = [true×9]` após reload, e o checkbox intruso `sl-min-total` da `l8-phase-6` **permanece** desmarcado.

**2. 🟠 Inconsistência didática na fase 7.3 da Aula 7** (`modules/excel/index.html` e o PDF)

A base separa **Tipo de Lançamento** e **Forma de Pagamento** em colunas distintas, mas a fase 7.3 manda cadastrar `BOLETO;DÉBITO;PIX;TRANSFERÊNCIA` como lista de Tipo de Lançamento — esses quatro valores são formas de pagamento, misturados com o tipo. Alinhe o texto da fase, o conteúdo do PDF (`7.3` em `assets/js/pdf-lessons.js`) e a FASE 0 da Aula 7, de modo que o aluno entenda onde cada valor vai. Se precisar, ajuste o `html` da seção do PDF mantendo as 16 imagens canônicas intactas.

**3. 🟠 P-02 — `Docs/SPEC-EXCEL-MASTER.md` desatualizado** (`Docs/SPEC-EXCEL-MASTER.md:32`)

Diz que a Aula 10 está *"implementação agendada para a próxima sessão"*, mas ela já está no ar (`screen-lesson-10`, `l10-phase-1..5`, 7 seções no PDF, senha `xj010`). Marque como implementada, com a mesma redação das Aulas 09 e 11–13.

**4. 🟠 P-03 — 13 checkboxes com `disabled` nas Aulas 2 e 3** (`modules/excel/index.html`)

O quadradinho das fases das Aulas 2 e 3 é decorativo: não pode ser marcado, ao contrário das Aulas 8–13, onde botão e quadradinho são o mesmo estado. Faça a mesma liberação feita nas Aulas 8–13 em 25/09. Aceite: marcar "Marcar Tópico N como Lido" reflete no quadradinho e vice-versa.

Antes de editar, confira quais aulas realmente têm `disabled` agora — há trabalho não commitado anterior que removeu `disabled` de vários checks, e não quero que isso seja sobrescrito por engano.

**5. 🟡 P-04/P-05/P-06 — imagens** (opcional, só se houver tempo)

- P-04: `.img-reduced` limita a 70% (`assets/css/style.css`); a Aula 7 tem 19 caps inline `max-width:420px` e 15 `max-width:520px`; o PDF limita imagens a `max-width:96%; max-height:480px`.
- P-05: as legendas geradas por `figure()` nunca foram conferidas contra as figuras.
- P-06: falta a conferência visual do popup do PDF (regra 2 do AGENTS.md).

**6. ⚪ P-11 — backlog opcional** (só com o professor mandando): conteúdo estendido das Aulas 8 e 9, PNGs reais nas Aulas sem imagem, simulador dedicado.

### Regras de execução

- **Não crie commit.** Trabalhe no working tree; só commitar se eu pedir.
- **Preserve rigorosamente as alterações não commitadas que já existem** (Aulas 10–13, `assets/img/excel/a10/`, `assets/img/windows/Aula1/`, e a remoção prévia de `disabled` nas Aulas 8 e 9). Antes de editar qualquer coisa, confira `git status` e, se precisar comparar com o estado pré-P-01, use o backup `/tmp/opencode/p01/index.html.bak` — mas atenção: ele pode ter sumido se a máquina reiniciou. Se não existir, **não tente reconstruir o baseline**: apenas não quebre o que está lá.
- Qualquer correção mobile vai para o bloco `/* REGRAS MOBILE GLOBAIS */` de `assets/css/style.css`. Nunca `@media` por aula.
- Sempre validar depois de mexer (a lista completa está em `Docs/PENDENCIAS-EXCEL.md`, seção "Como revalidar").

### Como montar o ambiente de teste

```bash
cd /home/rangel/git-dev/aulas
python3 -m http.server 8077 > /tmp/opencode/pdftest/server.log 2>&1 &
```

`file://` bloqueia `localStorage`, então os testes de persistência **precisam** do servidor HTTP. Para Playwright:

```bash
cd /home/rangel/.agents/skills/external/playwright-skill
node run.js /caminho/do/teste.js
```

Harnesses da P-01 (em `/tmp`, somem se a máquina reiniciar — recriar se necessário):
`/tmp/playwright-test-p01-gating.js` (gate/restore/persistência, 85 asserções), `/tmp/playwright-test-p01-overflow.js` (mobile dos 5 módulos), `/tmp/playwright-test-p01-l8.js` (A/B da Aula 8 — **é este que valida o P-12**), `/tmp/opencode/p01/check-pdf.js` (estrutura do PDF).

### Critério de encerramento

Ao final, atualize `Docs/PENDENCIAS-EXCEL.md` (marque o que resolveu, crie item novo se achar outro defeito) e `Docs/CONTINUACAO.md` (seção da sessão no topo, com localizadores e tabela de validações). Me reporte o que mudou, o que ficou pendente e o resultado de cada validação.