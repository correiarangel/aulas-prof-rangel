# 🏛️ SPEC-007 — Especificação Técnica e Pedagógica da Aula 7 (Windows)
### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

A **Aula 7 do Módulo Windows — "Segurança e Antivírus"** é um módulo de aprendizado **Prático Orientado ("Mão na Massa")**, desenvolvido para execução presencial em ambiente de laboratório. O aluno lê as instruções na tela e executa simultaneamente no computador real (Windows 7 / 10 / 11).

### Core Topics (7 Tópicos Didáticos):
1. **Central de Segurança do Windows**: Painel único que reúne proteção contra vírus, firewall, atualizações e manutenção (Windows 7 e Windows 10/11).
2. **Antivírus do Windows (Windows Defender)**: Proteção nativa e gratuita em tempo real; remoção de ameaças detectadas.
3. **Atualizações de Segurança**: Correção de falhas via Windows Update; importância de manter o sistema atualizado.
4. **Firewall do Windows**: "Muro de proteção" que bloqueia acessos não autorizados pela rede.
5. **Ferramenta de Backup**: Cópias de segurança dos arquivos (Backup e Restauração / Histórico de Arquivos).
6. **Criar um Ponto de Restauração**: "Fotografia" do sistema para voltar a um estado funcional anterior (comando `rstrui`).
7. **Os Riscos da Pirataria**: Virus no "crack", ausência de atualizações e ilegalidade do software pirata.

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 1 / Aula 07** | Segurança e Antivírus no Windows | `wr0726` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 1 / Complemento 7A** | Backup Automático com Arquivo .BAT | `wr0726` | 🔒 Oculta (Acesso Restrito) |
| **Módulo 1 / Complemento 7B** | Tutorial: Como Criar Pendrive/DVD de Instalação | `wr0726` | 🔒 Oculta (Acesso Restrito) |

> A mesma senha `wr0726` libera a Aula 7 e os dois complementos vinculados (7A e 7B). A Aula 8 continua com `wr0926`, e as senhas de teste `a001/b002/c003/d004/h008/wr2026` também desbloqueiam a Aula 7 e complementos no ambiente de desenvolvimento.

---

## 🖼️ 3. Mapeamento das Imagens Ilustrativas

As imagens estão localizadas na pasta `assets/img/windows/Aula7/`:

| Tópico | Nome do Arquivo | Função Pedagógica / Tela Exibida |
| :--- | :--- | :--- |
| **Tópico 1** | `image13.png` | Central de Segurança do Windows 7 (todos os itens de proteção reunidos) |
| **Tópico 1** | `image2.png` | Segurança do Windows 10/11 (painel moderno de proteção) |
| **Tópico 2** | `image14.png` | Windows Defender no Windows 7 (proteção contra vírus ativa) |
| **Tópico 2** | `image16.png` | Windows Defender no Windows 10/11 (proteção em tempo real) |
| **Tópico 2** | `image17.png` | Defender após encontrar ameaça (ataque removido / histórico de proteção) |
| **Tópico 4** | `image1.png` | Firewall do Windows 7 ativo indicado pela Central de Segurança |
| **Tópico 4** | `image11.png` | Firewall e proteção de rede no Windows 10/11 por tipo de rede |
| **Tópico 6** | `image9.png` | Criando um Ponto de Restauração no Windows 7 |
| **Tópico 6** | `image15.png` | Painel de Proteção do Sistema no Windows 10/11 |

> **Tópicos 3 (Atualizações), 5 (Backup) e 7 (Pirataria)** não possuem captura de tela específica: no PDF a ilustração é gerada via HTML (`sec.html` → `.pdf-html-illustration`), usando as classes `.fun-highlight`/`.mini-sheet`/`.es-sheet-box`/`.es-sheet-titlebar`.

### Exemplo de Ilustração HTML embutida (Tópico 3 — Atualizações):
```html
<div class="fun-highlight">
  <h4>🛡️ Por que atualizar é tão importante?</h4>
  <ul>
    <li>Corrige vulnerabilidades conhecidas (falhas de segurança).</li>
    <li>Atualiza as definições de vírus do Windows Defender.</li>
    <li>Melhora a estabilidade e o desempenho do sistema.</li>
  </ul>
</div>
```

---

## ➡️ 4. Fluxo de Aprendizagem (FASE 0 + Checks Distribuídos)

- **FASE 0 (Bloco Introdutório Tutorial)**: objetivo + roteiro numerado em **7 passos** no topo da aula, com "Resultado esperado" em caixa tracejada.
- **Checks distribuídos**: cada um dos 7 tópicos possui o bloco `read-check-box` com `check-read-7-N` ao FINAL da fase correspondente (nenhum check agrupado em um único lugar).
- **Trava sequencial**: os botões de check iniciam desabilitados e só o primeiro (`check-read-7-1`) fica liberado; cada `markTopicRead(7, N)` libera o próximo (`SEQUENTIAL_LESSONS[7] = true`, `TOTAL_TOPICS[7] = 7`).
- **Aula 8 preservada**: não participa da trava sequencial (comportamento inalterado).

---

## 📝 5. Especificação do Quiz de Fixação (5 Questões × 2,0 pts = 10,0)

1. **Questão 1 (Central de Segurança)**:
   - *Pergunta*: Qual é a função da Central de Segurança do Windows (Windows 7)?
   - *Alternativas*:
     - a) Abrir jogos instalados no computador
     - b) Reúne em um único painel a proteção contra vírus, firewall, atualizações e manutenção do sistema [Correta]
     - c) Melhorar o desempenho do processador
     - d) Instalar novos navegadores automaticamente
   - *Dica*: Ela avisa quando falta alguma proteção e oferece atalhos para corrigir.

2. **Questão 2 (Windows Defender)**:
   - *Pergunta*: Nos Windows 10 e 11, qual é o programa antivírus NATIVO do sistema que protege o computador em tempo real?
   - *Alternativas*:
     - a) Norton
     - b) McAfee
     - c) Windows Defender (Microsoft Defender Antivírus) [Correta]
     - d) Avast
   - *Dica*: Ele já vem instalado no Windows e não precisa ser comprado.

3. **Questão 3 (Firewall)**:
   - *Pergunta*: Para que serve o Firewall do Windows?
   - *Alternativas*:
     - a) Criar documentos de texto
     - b) Aumentar a velocidade da internet
     - c) Bloquear a passagem de acessos não autorizados entre a internet e o computador [Correta]
     - d) Aumentar o volume do som
   - *Dica*: Funciona como um "muro de proteção" que filtra o trânsito de rede.

4. **Questão 4 (Ponto de Restauração)**:
   - *Pergunta*: O que é um Ponto de Restauração do Sistema (Windows 7)?
   - *Alternativas*:
     - a) Uma cópia de segurança do sistema criada automaticamente, permitindo "voltar no tempo" para corrigir problemas [Correta]
     - b) Um tipo de vírus escondido
     - c) Um formato de arquivo de imagem
     - d) Uma pasta para downloads
   - *Dica*: Permite desfazer mudanças ruins (programas, drivers) sem perder arquivos recentes.

5. **Questão 5 (Pirataria)**:
   - *Pergunta*: Por que usar Windows pirata (crackeado) é perigoso?
   - *Alternativas*:
     - a) Porque consome mais internet
     - b) Porque remove atualizações de segurança e o próprio "crack" pode conter vírus [Correta]
     - c) Porque deixa a tela colorida
     - d) Porque impede o uso do mouse
   - *Dica*: O crack frequentemente desativa o Windows Update, deixando o computador vulnerável.

---

## 🎨 6. Regras de Design e Ergonomia de Tela

- **Botão de PDF no Início da Aula**: botão `📑 Baixar Apostila PDF` (`downloadLessonPDF('windows', 7)`) visível no topo do cartão da aula, junto à barra de navegação (e em `result-panel-7` / `btn-download-pdf-7`).
- **Acessibilidade & Atalhos Visuais**: teclas de atalho em estilo `<kbd>` de alta legibilidade (ex: `<kbd>Win</kbd> + <kbd>I</kbd>`).
- **Mobile**: nenhuma regra específica por aula — o layout mobile é regulado apenas pelo bloco `/* REGRAS MOBILE GLOBAIS */` do `assets/css/style.css`.