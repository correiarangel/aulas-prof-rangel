/**
 * Portal Didático — Prof. Marcos Rangel
 * Motor Reutilizável de Provas, Persistência, Assinatura Digital (SHA-256) e Canais de Comunicação
 */

window.QuizEngine = (function() {
  "use strict";

  const TEACHER_EMAIL = "okcomputer.use.linux@gmail.com";
  const TEACHER_PHONE = "5519991306907";
  const SECRET_SALT = "WR-CAPACITACAO-PROF-RANGEL-2026-AUTHENTICITY-KEY";

  /**
   * Gera uma Assinatura Digital SHA-256 determinística para evitar fraudes no comprovante.
   */
  async function generateDigitalSignature(studentName, moduleName, score, totalQuestions, timestamp) {
    const rawString = `${studentName.toLowerCase().trim()}|${moduleName}|${score.toFixed(1)}|${totalQuestions}|${timestamp}|${SECRET_SALT}`;
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(rawString);
    const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
    
    // Código formatado em blocos amigáveis (ex: WR-8F9A-4B2C-7E1D-90FF)
    const shortCode = `WR-${hashHex.substring(0, 4)}-${hashHex.substring(4, 8)}-${hashHex.substring(8, 12)}-${hashHex.substring(12, 16)}`;
    
    return {
      fullHash: hashHex,
      authCode: shortCode,
      timestamp: timestamp
    };
  }

  /**
   * Salva o estado atual no LocalStorage.
   */
  function saveState(storageKey, state) {
    if (!state || !state.name) return;
    const key = `${storageKey}:${state.name.toLowerCase().trim()}`;
    localStorage.setItem(key, JSON.stringify(state));
  }

  /**
   * Carrega o estado do LocalStorage.
   */
  function loadState(storageKey, studentName) {
    if (!studentName || !studentName.trim()) return null;
    const key = `${storageKey}:${studentName.toLowerCase().trim()}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  /**
   * Gera o texto limpo do Comprovante TXT contendo a Assinatura Digital.
   */
  function buildReportText(data) {
    const { studentName, moduleTitle, correct, total, score, passed, signature, answers, questions } = data;
    const now = signature ? new Date(signature.timestamp) : new Date();

    const lines = [
      "====================================================================",
      "   WR CAPACITAÇÃO PROFISSIONAL — PROFESSOR MARCOS RANGEL",
      "   COMPROVANTE OFICIAL DE AVALIAÇÃO DIDÁTICA INTERATIVA",
      "====================================================================",
      `Aluno(a): ${studentName}`,
      `Módulo: ${moduleTitle}`,
      `Data e Hora: ${now.toLocaleDateString("pt-BR")} às ${now.toLocaleTimeString("pt-BR")}`,
      `Acertos: ${correct} de ${total} questões`,
      `Nota Final: ${score.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} / 10,0`,
      `Situação: ${passed ? "APROVADO(A)" : "REPROVADO(A) (Nota mínima: 7,0)"}`,
      "--------------------------------------------------------------------",
      "🔒 ASSINATURA DIGITAL ANTI-FRAUDE (VERIFICAÇÃO DE AUTENTICIDADE):",
      `Código de Autenticidade: ${signature ? signature.authCode : "N/A"}`,
      `Hash SHA-256: ${signature ? signature.fullHash : "N/A"}`,
      "--------------------------------------------------------------------",
      "DETALHAMENTO DA PROVA:"
    ];

    if (questions && answers) {
      questions.forEach((q, i) => {
        const isOk = answers[i] === q.correct;
        const selectedOpt = answers[i] !== null ? q.options[answers[i]] : "Não respondida";
        lines.push(`  Questão ${i + 1}: ${isOk ? "[CORRETA ✓]" : "[INCORRETA ✗]"}`);
        lines.push(`  Pergunta: ${q.q}`);
        lines.push(`  Resposta Assinalada: ${selectedOpt}`);
        lines.push("");
      });
    }

    lines.push("--------------------------------------------------------------------");
    lines.push("Professor Responsável: Marcos Rangel");
    lines.push(`Contato/E-mail: ${TEACHER_EMAIL}`);
    lines.push("WhatsApp Oficial: (19) 99130-6907");
    lines.push("Portal de Aulas: WR Capacitação Profissional (Hospedado via GitHub Pages)");
    lines.push("====================================================================");

    return lines.join("\n");
  }

  /**
   * Dispara o download do arquivo .TXT do comprovante.
   */
  function downloadTxtReport(data) {
    const text = buildReportText(data);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    const safeName = data.studentName.toLowerCase().trim().replace(/\s+/g, "-");
    a.href = URL.createObjectURL(blob);
    a.download = `comprovante-${data.moduleId}-${safeName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /**
   * Gera a URL do WhatsApp contendo o resultado e a Assinatura Digital.
   */
  function buildWhatsAppUrl(data) {
    const { studentName, moduleTitle, correct, total, score, passed, signature } = data;
    const fmtScore = score.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    
    const msg = 
`🎓 *COMPROVANTE DE AVALIAÇÃO — WR CAPACITAÇÃO*
*Prof. Marcos Rangel*

👤 *Aluno(a):* ${studentName}
📚 *Módulo:* ${moduleTitle}
📊 *Acertos:* ${correct}/${total} (Nota: ${fmtScore}/10,0)
${passed ? "✅ *Situação:* APROVADO(A)" : "📘 *Situação:* REFAZER (Nota mínima: 7,0)"}

🔒 *Assinatura Digital Anti-Fraude:*
\`${signature ? signature.authCode : "N/A"}\`

📅 *Data:* ${new Date(signature ? signature.timestamp : Date.now()).toLocaleDateString("pt-BR")} ${new Date(signature ? signature.timestamp : Date.now()).toLocaleTimeString("pt-BR")}`;

    return `https://wa.me/${TEACHER_PHONE}?text=${encodeURIComponent(msg)}`;
  }

  /**
   * Gera a URL para envio via Gmail/Mailto para okcomputer.use.linux@gmail.com
   */
  function openGmailComposer(data) {
    const { studentName, moduleTitle, correct, total, score, passed, signature } = data;
    const fmtScore = score.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

    const subject = `[COMPROVANTE AVALIAÇÃO] ${moduleTitle} - Aluno: ${studentName}`;
    const body = 
`Prezado Professor Marcos Rangel,

Segue o comprovante da minha avaliação realizada no Portal Didático da WR Capacitação Profissional.

Aluno(a): ${studentName}
Módulo: ${moduleTitle}
Acertos: ${correct}/${total}
Nota Final: ${fmtScore} / 10,0
Situação: ${passed ? "APROVADO(A)" : "REPROVADO(A)"}

----------------------------------------------------
ASSINATURA DIGITAL ANTI-FRAUDE (SHA-256):
Código de Autenticidade: ${signature ? signature.authCode : "N/A"}
Hash SHA-256: ${signature ? signature.fullHash : "N/A"}
----------------------------------------------------

Em anexo (ou baixado em meu computador) encontra-se o comprovante em texto (.txt).

Atenciosamente,
${studentName}`;

    // Dispara também o download do TXT para o aluno anexar
    downloadTxtReport(data);

    const webmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${TEACHER_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(webmailUrl, "_blank");
  }

  return {
    generateDigitalSignature: generateDigitalSignature,
    saveState: saveState,
    loadState: loadState,
    buildReportText: buildReportText,
    downloadTxtReport: downloadTxtReport,
    buildWhatsAppUrl: buildWhatsAppUrl,
    openGmailComposer: openGmailComposer
  };
})();
