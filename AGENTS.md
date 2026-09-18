# AGENTS.md — Regras Persistentes do Repositório

Regras obrigatórias para qualquer agente/assistente que edite código neste repositório. Estas regras foram gravadas para nunca mais serem esquecidas ("gravar e aprender").

## Ao editar aulas e gerar PDFs (todas as aulas)

1. **FASE 0 sempre presente**: toda aula começa com um bloco introdutório tutorial (objetivo + **roteiro numerado em passo a passo**). Os **checks ficam distribuídos** — posicionados no fim de cada fase, exatamente onde está a instrução de executar aquele passo (cada passo é um check e só libera o próximo). **Proibido agrupar todos os checks num único lugar.** Sem glossário extenso nem lista de materiais desnecessária. Ver `docs` da Aula 08 como padrão de referência.
2. **Imagens/ilustrações reais obrigatórias no PDF**: o PDF gerado por `assets/js/pdf-lessons.js` (`downloadLessonPDF`) deve conter imagens ou ilustrações HTML **reais** nas seções. Proibido deixar apenas texto do tipo "🖼️ Referência de imagem: ...".
3. **Ilustração HTML vai no campo `sec.html`** da seção, renderizado como `<div class="pdf-html-illustration">${sec.html}</div>`, usando as classes `.mini-sheet`, `.fun-highlight`, `.es-sheet-box`, `.es-sheet-titlebar` (CSS já portado para o `<style>` do popup).
4. **Imagens de arquivo**: usar paths relativos `../../assets/img/excel/aN/...` (resolvidos via `resolveImagePath`/`new URL`).
5. **Validar antes de concluir**: rodar `node --check assets/js/pdf-lessons.js` e checar o script inline do HTML após qualquer edição.

## Referências
- `Docs/SPEC-EXCEL-MASTER.md` → seção 6.1 "Normas Obrigatórias de Toda Aula".
- `Docs/SDD-AULA-08-SIMPLIFICACAO.md` → seções "Requisitos Obrigatórios" e "Auditoria da Geração de PDF".

## Continuidade
- `Docs/CONTINUACAO.md` → anexo de continuidade: estado do trabalho (concluído/pendente), localizadores e validações. **Atualizar ao fim de cada sessão.**