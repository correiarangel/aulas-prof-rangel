# 🗺️ ROADMAP — Portal de Aulas de Informática Básica
### Prof. Marcos Rangel | WR Capacitação Profissional

---

## 📌 Status Geral dos Módulos

### 💻 Módulo 1: Sistema Operacional Windows
- [x] Catálogo Geral do Módulo em **12 Aulas** (Aulas 1-7 e 9-11 com selo `🔒 Em Construção`, Aula 08 `🔓 Liberada` e Aula 12 `📝 Prova Final`)
- [x] **Aula 08**: Diagnóstico de Memória, Restauração do Sistema e Criação de Mídia de Instalação no Windows (Leitura Prática "Mão na Massa" em 5 Tópicos com 28 imagens ilustrativas)
- [x] **Aula 08**: Exercício de Fixação em Formato Quiz (5 Questões) com Dicas, Validação de Nota e Assinatura Digital SHA-256 (Senha `wr0926`)
- [x] **Interface Ergonomicamente Ajustada**: Botão `📑 Baixar Apostila Didática em PDF` posicionado no início/topo das aulas em todos os módulos (Windows e Internet)
- [x] Emissão de Comprovantes TXT, Apostila PDF, WhatsApp e E-mail com SHA-256


### 📝 Módulo 2: Microsoft Word
- [x] Material Didático Interativo por Fases
- [x] Exercício de Fixação Interativo
- [x] Prova Final com Senha de Liberação (`b002`)
- [x] Emissão de Comprovante TXT, PDF, WhatsApp e E-mail com SHA-256

### 📊 Módulo 3: Microsoft Excel
- [x] **Especificação SDD Mestre**: Arquitetura do Módulo Excel em 13 Aulas, Design Tokens Verde Excel, Matriz de Senhas (`xa001`-`xm013`) e Simulador Interativo (`Docs/SPEC-EXCEL-MASTER.md`)
- [x] **Especificação SDD Aula 01**: Introdução ao Excel, Interface, Tipos de Dados, Navegação e Quiz de 5 Questões (`Docs/SPEC-EXCEL-AULA-01.md`)
- [x] **Auditoria SDD Pré-Implementação**: 12 achados corrigidos (senhas, quizzes de 5 questões em todas as aulas, nota 7.0, hierarquia documental)
- [x] **Material Didático Interativo Aula 01**: Implementação HTML/JS do Hub de 13 Aulas, Conteúdo Didático da Aula 01, Simulador Grid Inspector e Quiz de 5 Questões (`modules/excel/index.html`)
- [ ] Exercícios de Fixação e Quizzes das Aulas 02 a 13




### 📊 Módulo 4: Microsoft PowerPoint
- [x] Material Didático Interativo por Fases
- [x] Exercício de Fixação Interativo
- [x] Prova Final com Senha de Liberação (`d004`)
- [x] Emissão de Comprovante TXT, PDF, WhatsApp e E-mail com SHA-256

### 🌐 Módulo 5: Internet & Segurança
- [x] **Aula 01**: Introdução à Internet e Navegação Segura (Leitura em 6 Tópicos)
- [x] **Aula 01**: Exercício de Fixação (5 Questões) com Validação e Assinatura Digital SHA-256
- [x] **Aula 01**: Botões Finais Integrados (📄 TXT, 📑 PDF, 📱 WhatsApp `19 99130-6907`, ✉️ E-mail `okcomputer.use.linux@gmail.com`)
- [x] **Aula 01**: Remoção de botão de PDF redundante no cabeçalho superior do Hub
- [x] **Especificação SDD Geral**: Especificação da Arquitetura e Regras do Projeto (`Docs/SPEC-PROJECT-ARCHITECTURE.md`)
- [x] **Especificação SDD Aula 02**: Navegando na Internet & História do HTML (`Docs/SPEC-AULA-02.md`) com 18 imagens mapeadas
- [x] **Especificação SDD Aula 03**: Dominando o Google & Produtividade na Nuvem (`Docs/SPEC-AULA-03.md`) com Waffle e operadores
- [x] **Gerador de PDF Apostila Individual por Aula**: Reestruturação do `assets/js/pdf-lessons.js` com suporte a filtragem dinâmica por aula (`lessonNum`) e imagens ilustrativas dedicadas.
- [x] **Aula 02 (Implementação HTML)**: Navegando na Internet & História do HTML (6 Tópicos, Atividade do Bloco de Notas, 5 Questões e SHA-256 com senha `b002`)
- [x] **Aula 02 (Formulário & IA)**: Formulário interativo gerador de HTML com botões de copiar/baixar + Atividade prática de Inteligência Artificial e Prompts didáticos com referências (UNESCO, MEC, W3C)
- [x] **Aula 03 (Implementação HTML, Imagens `a3/` & Google Drive)**: Dominando o Google & Produtividade na Nuvem (7 Tópicos, Waffle 9 Pontinhos, Docs/Sheets/Slides/Drive, Passo a Passo Guiado de Criação e Upload de Pastas/Docs do PC, 12 imagens ilustrativas e SHA-256 com senha `c003`)
- [x] **Aula 04**: Prova Final de Avaliação (`prova-internet.html`) com Senha (`d004`) e Assinatura Digital SHA-256

---

## 🔒 Diretrizes de Manutenção e Servidores de Teste
- [x] Encerrar imediatamente qualquer servidor HTTP local (`python3 -m http.server`) após a realização de testes e capturas no navegador.
- [x] Manter a Tríade de Documentação SDD (`ROADMAP.md`, `INDEX.md`, `DOCUMENTATION.md`) 100% atualizada a cada modificação.
