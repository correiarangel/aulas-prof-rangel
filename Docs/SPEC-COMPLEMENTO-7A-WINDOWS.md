# 🏛️ SPEC-007A — Especificação Técnica e Pedagógica do Complemento 7A (Windows)
### Módulo 1: Sistema Operacional Windows | Prof. Marcos Rangel — WR Capacitação Profissional
### Complemento 7A: Backup Automático com Arquivo .BAT

---

## 🎯 1. Visão Geral e Objetivos Pedagógicos

O **Complemento 7A — "Backup Automático com Arquivo .BAT"** é um laboratório **Prático Orientado ("Mão na Massa")** em que o aluno cria do zero um script de backup usando apenas o **Bloco de Notas** e o comando **`xcopy`** do Prompt de Comando. O resultado é um pendrive com cópia de segurança da pasta de documentos.

### Core Topics (4 Tópicos Didáticos):
1. **O que é um arquivo .BAT**: Arquivo de texto com comandos que o Prompt de Comando executa em sequência.
2. **Primeiro Script: "Olá, Mundo!"**: Criação e execução de um `.bat` simples com `echo` e `pause`.
3. **Script de Backup do Pendrive (comando xcopy)**: Montagem do `backup.bat` com as linhas `ORIGEM` e `DESTINO` ajustadas pelo aluno.
4. **Executando e Conferindo o Backup**: Execução do script e verificação dos arquivos copiados no pendrive.

---

## 🔒 2. Autenticação e Senha de Acesso

| Módulo / Aula | Nome Temático | Senha Secreta de Liberação | Exibição na Interface |
| :--- | :--- | :--- | :--- |
| **Módulo 1 / Complemento 7A** | Backup Automático com Arquivo .BAT | `wr0726` | 🔒 Oculta (Acesso Restrito) |

> Compartilha a senha da Aula 7 (`wr0726`). Desbloqueio via modal portal padrão; senhas de teste `a001/b002/c003/d004/h008/wr2026` também aceitas.

---

## 🖼️ 3. Mapeamento das Imagens Ilustrativas

As imagens estão localizadas na pasta `assets/img/windows/Aula7ComplementoBackup/`:

| Tópico | Nome do Arquivo | Função Pedagógica / Tela Exibida |
| :--- | :--- | :--- |
| **Tópico 1** | `image3.png` | O arquivo .bat guarda os comandos executados pelo Prompt de Comando |
| **Tópico 2** | `image5.png` | Script `echo Ola, Mundo!` + `pause` digitado no Bloco de Notas |
| **Tópico 2** | `image4.png` | Resultado da execução: janela preta com a mensagem exibida |
| **Tópico 3** | `image7.png` | Explicação visual do `xcopy` copiando origem → destino |
| **Tópico 3** | `image6.png` | Localizando a letra da unidade do pendrive no Explorador de Arquivos |
| **Tópico 3** | `image2.png` | Script `backup.bat` com linhas ORIGEM e DESTINO destacadas para ajuste |
| **Tópico 4** | `image1.png` | Execução do backup.bat: arquivos copiados + mensagem de conclusão |

---

## ➡️ 4. Fluxo de Aprendizagem (FASE 0 + Checks Distribuídos)

- **FASE 0 (Bloco Introdutório Tutorial)**: objetivo + roteiro numerado em **4 passos** no topo do complemento, com "Resultado esperado" em caixa tracejada.
- **Checks distribuídos**: cada um dos 4 tópicos possui `check-read-71-N` ao FINAL da fase correspondente.
- **Trava sequencial**: `SEQUENTIAL_LESSONS[71] = true`, `TOTAL_TOPICS[71] = 4`; apenas `check-read-71-1` inicia liberado.

**Código-fonte do script (usado no Tópico 3 do complemento e no PDF):**

```bat
@echo off
REM ==== Aluno: ajuste as duas linhas abaixo ====
set ORIGEM="C:\Usuarios\SeuNome\Documentos"
set DESTINO=E:\Backup
echo Iniciando backup...
xcopy %ORIGEM% %DESTINO% /E /I /Y
echo Backup concluido!
pause
```

> **Significado das flags do `xcopy`:** `/E` copia também as subpastas; `/I` trata o destino como pasta; `/Y` substitui arquivos existentes sem perguntar.

---

## 📝 5. Especificação do Quiz de Fixação (5 Questões × 2,0 pts = 10,0)

1. **Questão 1 (Definição .bat)**:
   - *Pergunta*: O que é um arquivo .BAT?
   - *Alternativas*:
     - a) É um arquivo de texto com comandos que o Windows executa em sequência automaticamente [Correta]
     - b) É um arquivo de imagem compactada
     - c) É um malware obrigatório do Windows
     - d) É um tipo de planilha
   - *Dica*: Funciona como uma "receita" de tarefas repetitivas para o computador.

2. **Questão 2 (Comando `pause`)**:
   - *Pergunta*: Qual é a função do comando `pause` no script?
   - *Alternativas*:
     - a) Desliga o computador
     - b) Deixa a janela aberta e espera o aluno apertar uma tecla [Correta]
     - c) Apaga todos os arquivos
     - d) Abre o navegador
   - *Dica*: Sem ele a janela fecharia instantaneamente ao terminar a execução.

3. **Questão 3 (Comando de cópia)**:
   - *Pergunta*: Qual comando é usado no script para copiar os arquivos da pasta de origem para o pendrive?
   - *Alternativas*:
     - a) `del`
     - b) `md`
     - c) `xcopy` [Correta]
     - d) `date`
   - *Dica*: Ele copia pastas inteiras, incluindo as subpastas.

4. **Questão 4 (Flag `/Y`)**:
   - *Pergunta*: O que a flag `/Y` faz no comando xcopy?
   - *Alternativas*:
     - a) Deleta arquivos sem aviso
     - b) Substitui os arquivos existentes no destino sem perguntar [Correta]
     - c) Formata o pendrive
     - d) Aumenta a velocidade da cópia
   - *Dica*: Evita que o script fique travado perguntando a cada arquivo repetido.

5. **Questão 5 (Extensão do arquivo)**:
   - *Pergunta*: Qual extensão o arquivo do script de backup deve receber?
   - *Alternativas*:
     - a) `.txt`
     - b) `.docx`
     - c) `.bat` [Correta]
     - d) `.exe`
   - *Dica*: É essa extensão que diz ao Windows que o arquivo é um lote de comandos (batch).

---

## 🎨 6. Regras de Design e Ergonomia de Tela

- **Botão de PDF no Início**: `📑 Baixar Apostila PDF` (`downloadLessonPDF('windows', 71)`) no topo do cartão e em `btn-download-pdf-71` do painel resultado.
- **Código-fonte em caixa `<kbd>`/bloco**: os scripts aparecem como blocos de código colados e passíveis de leitura (sem comentários extras).
- **Mobile**: regulado apenas pelo bloco `/* REGRAS MOBILE GLOBAIS */` do `assets/css/style.css`.