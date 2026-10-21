/* =========================================================
   SCRIPT.JS — navegación, práctica por tema y simulador
   ========================================================= */
const app = document.getElementById("app");
const STORE_KEY = "sn_progress_v1";

/* ---------- utilidades ---------- */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const loadProgress = () => {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch (e) { return {}; }
};
const saveProgress = () => {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) { /* sin almacenamiento */ }
};
let progress = loadProgress();
let timerId = null;
const stopTimer = () => { if (timerId) { clearInterval(timerId); timerId = null; } };

/* Prepara una pregunta (baraja opciones y recuerda la correcta) */
function prepare(q, topicTitle) {
  if (q.t === "mc") {
    const opts = shuffle(q.o.map((text, i) => ({ text, ok: i === q.a })));
    return { ...q, opts, topic: topicTitle };
  }
  return { ...q, topic: topicTitle };
}

/* ---------- vistas ---------- */
function goHome() {
  stopTimer();
  const total = TOPICS.reduce((n, t) => n + t.quiz.length, 0);
  app.innerHTML = `
    <section class="hero">
      <h2>Guía de estudio</h2>
      <p>Apuntes, presentaciones y videos en un solo lugar. Estudia por tema, practica y luego haz el simulador.</p>
    </section>
    <div class="exam-card">
      <div>
        <h3>📝 Simulador de examen</h3>
        <p>${total} preguntas de todos los temas, en orden aleatorio.</p>
      </div>
      <button class="btn light" id="goExam">Empezar</button>
    </div>
    <div class="grid" id="grid"></div>`;
  const grid = document.getElementById("grid");
  TOPICS.forEach((t) => {
    const best = progress[t.id];
    const b = document.createElement("button");
    b.className = "topic-card";
    b.innerHTML = `
      <div class="ic">${t.icon}</div>
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.intro)}</p>
      <span class="badge ${best === 100 ? "ok" : ""}">${best != null ? "Mejor: " + best + "%" : t.quiz.length + " preguntas"}</span>`;
    b.onclick = () => openTopic(t.id, "estudio");
    grid.appendChild(b);
  });
  document.getElementById("goExam").onclick = examConfig;
  window.scrollTo(0, 0);
}

function openTopic(id, tab) {
  stopTimer();
  const t = TOPICS.find((x) => x.id === id);
  app.innerHTML = `
    <button class="back" id="back">← Todos los temas</button>
    <div class="topic-head"><h2>${t.icon} ${esc(t.title)}</h2><p>${esc(t.intro)}</p></div>
    <div class="tabs">
      <button class="tab ${tab === "estudio" ? "active" : ""}" id="tStudy">📖 Estudio</button>
      <button class="tab ${tab === "practica" ? "active" : ""}" id="tPractice">✍️ Práctica (${t.quiz.length})</button>
    </div>
    <div id="panel"></div>`;
  document.getElementById("back").onclick = goHome;
  document.getElementById("tStudy").onclick = () => openTopic(id, "estudio");
  document.getElementById("tPractice").onclick = () => openTopic(id, "practica");
  const panel = document.getElementById("panel");
  if (tab === "estudio") renderStudy(t, panel);
  else startQuiz(panel, t.quiz.map((q) => prepare(q, t.title)), {
    exam: false,
    onFinish: (score, total) => {
      const pct = Math.round((score / total) * 100);
      if (progress[t.id] == null || pct > progress[t.id]) { progress[t.id] = pct; saveProgress(); }
    },
    retry: () => openTopic(id, "practica"),
    exit: () => openTopic(id, "estudio"),
    exitLabel: "Volver al estudio"
  });
  window.scrollTo(0, 0);
}

function renderStudy(t, panel) {
  let html = "";
  t.blocks.forEach((b) => {
    html += `<div class="block"><h3>${esc(b.h)}</h3><ul>${b.items.map((i) => `<li>${fmt(i)}</li>`).join("")}</ul></div>`;
  });
  (t.tables || []).forEach((tb) => {
    html += `<div class="table-wrap"><h4>${esc(tb.title)}</h4><table>
      <thead><tr>${tb.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${tb.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  });
  html += `<div class="row"><button class="btn" id="toPractice">Practicar este tema →</button></div>`;
  panel.innerHTML = html;
  document.getElementById("toPractice").onclick = () => openTopic(t.id, "practica");
}

/* ---------- motor de preguntas ---------- */
/* opts: { exam, onFinish(score,total), retry(), exit(), exitLabel, timeLimit } */
function startQuiz(panel, questions, opts) {
  let idx = 0;
  const answers = []; // {q, correct, given}

  function render() {
    const q = questions[idx];
    const pct = Math.round((idx / questions.length) * 100);
    panel.innerHTML = `
      <div class="quiz-top"><span>Pregunta ${idx + 1} de ${questions.length}</span><span id="timerBox" class="timer"></span></div>
      <div class="progress"><span style="width:${pct}%"></span></div>
      <div class="qcard">
        ${opts.exam ? `<div class="tag">${esc(q.topic)}</div>` : ""}
        <h3>${fmt(q.q)}</h3>
        <div id="qbody"></div>
        <div id="fb"></div>
        <div class="row" style="margin-top:12px"><button class="btn" id="next" disabled>${idx === questions.length - 1 ? "Ver resultado" : "Siguiente"}</button></div>
      </div>`;
    document.getElementById("next").onclick = () => { idx++; idx < questions.length ? render() : finish(); };
    if (q.t === "mc") renderMC(q); else renderOrder(q);
    updateTimer();
  }

  function record(q, correct, given) {
    answers.push({ q, correct, given });
    document.getElementById("next").disabled = false;
  }

  function renderMC(q) {
    const body = document.getElementById("qbody");
    q.opts.forEach((o, i) => {
      const b = document.createElement("button");
      b.className = "opt";
      b.textContent = o.text;
      b.onclick = () => {
        const btns = body.querySelectorAll(".opt");
        btns.forEach((x) => (x.disabled = true));
        if (opts.exam) {
          b.classList.add("sel");
        } else {
          btns.forEach((x, k) => { if (q.opts[k].ok) x.classList.add("right"); });
          if (!o.ok) b.classList.add("wrong");
          showFeedback(o.ok, q.w);
        }
        record(q, o.ok, o.text);
      };
      body.appendChild(b);
    });
  }

  function renderOrder(q) {
    const body = document.getElementById("qbody");
    const picked = [];
    const pool = shuffle(q.items.map((text, i) => ({ text, i })));
    body.innerHTML = `
      <p class="tag">Toca los pasos en el orden correcto.</p>
      <div class="order-zone" id="zone"><span class="hint">Tu orden aparecerá aquí</span></div>
      <div class="pool" id="pool"></div>
      <div class="row"><button class="btn ghost" id="reset">Reiniciar</button><button class="btn" id="check" disabled>Comprobar</button></div>`;
    const zone = body.querySelector("#zone");
    const poolEl = body.querySelector("#pool");
    const checkBtn = body.querySelector("#check");
    const resetBtn = body.querySelector("#reset");

    function draw() {
      zone.innerHTML = picked.length ? "" : `<span class="hint">Tu orden aparecerá aquí</span>`;
      picked.forEach((p, n) => {
        const c = document.createElement("div");
        c.className = "chip placed";
        c.textContent = `${n + 1}. ${p.text}`;
        zone.appendChild(c);
      });
      poolEl.innerHTML = "";
      pool.filter((p) => !picked.includes(p)).forEach((p) => {
        const c = document.createElement("button");
        c.className = "chip";
        c.textContent = p.text;
        c.onclick = () => { picked.push(p); draw(); };
        poolEl.appendChild(c);
      });
      checkBtn.disabled = picked.length !== pool.length;
    }
    resetBtn.onclick = () => { picked.length = 0; draw(); };
    checkBtn.onclick = () => {
      const ok = picked.every((p, n) => p.i === n);
      resetBtn.disabled = true; checkBtn.disabled = true;
      poolEl.innerHTML = "";
      if (!opts.exam) {
        zone.innerHTML = "";
        picked.forEach((p, n) => {
          const c = document.createElement("div");
          c.className = "chip " + (p.i === n ? "right" : "wrong");
          c.textContent = `${n + 1}. ${p.text}`;
          zone.appendChild(c);
        });
        const answerKey = q.items.map((t, n) => `${n + 1}. ${t}`).join(" → ");
        showFeedback(ok, ok ? q.w : `Orden correcto: ${answerKey}`);
      }
      record(q, ok, picked.map((p) => p.text).join(" → "));
    };
    draw();
  }

  function showFeedback(ok, why) {
    const fb = document.getElementById("fb");
    fb.innerHTML = `<div class="feedback ${ok ? "ok" : "bad"}">${ok ? "✅ ¡Correcto!" : "❌ Incorrecto."} ${why ? fmt(why) : ""}</div>`;
  }

  /* temporizador (solo simulador) */
  let remaining = opts.timeLimit || 0;
  function updateTimer() {
    const box = document.getElementById("timerBox");
    if (!box || !opts.timeLimit) return;
    const m = Math.floor(remaining / 60), s = remaining % 60;
    box.textContent = `⏱ ${m}:${String(s).padStart(2, "0")}`;
  }
  if (opts.timeLimit) {
    stopTimer();
    timerId = setInterval(() => {
      remaining--;
      updateTimer();
      if (remaining <= 0) { stopTimer(); finish(true); }
    }, 1000);
  }

  function finish(timeout) {
    stopTimer();
    // las no contestadas por tiempo cuentan como incorrectas
    for (let i = answers.length; i < questions.length; i++) answers.push({ q: questions[i], correct: false, given: "(sin responder)" });
    const score = answers.filter((a) => a.correct).length;
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    if (opts.onFinish) opts.onFinish(score, total);
    const wrong = answers.filter((a) => !a.correct);
    const msg = pct >= 90 ? "¡Excelente! 🎉" : pct >= 70 ? "¡Buen trabajo! 💪" : pct >= 50 ? "Vas bien, repasa lo fallado 📖" : "Hay que repasar un poco más 📚";
    panel.innerHTML = `
      <div class="result">
        <div class="score">${pct}%</div>
        <h3>${score} de ${total} correctas — ${msg}</h3>
        ${timeout ? "<p class='tag'>Se terminó el tiempo.</p>" : ""}
        <div class="row" style="justify-content:center;margin:14px 0 20px">
          ${wrong.length ? `<button class="btn" id="retryWrong">Repetir solo las falladas (${wrong.length})</button>` : ""}
          <button class="btn ghost" id="again">Intentar de nuevo</button>
          <button class="btn ghost" id="exit">${opts.exitLabel || "Salir"}</button>
        </div>
      </div>
      <h3>Revisión</h3>
      <div id="review"></div>`;
    const review = document.getElementById("review");
    answers.forEach((a) => {
      const q = a.q;
      let correctText;
      if (q.t === "mc") correctText = q.opts.find((o) => o.ok).text;
      else correctText = q.items.map((t, n) => `${n + 1}. ${t}`).join(" → ");
      const div = document.createElement("div");
      div.className = "review-item " + (a.correct ? "good" : "");
      div.innerHTML = `
        <p><b>${fmt(q.q)}</b> ${opts.exam ? `<span class="tag">· ${esc(q.topic)}</span>` : ""}</p>
        ${a.correct ? `<p class="correct">✅ ${esc(a.given)}</p>` : `<p class="you">❌ Tu respuesta: ${esc(a.given)}</p><p class="correct">✔ Correcta: ${esc(correctText)}</p>`}
        ${q.w && q.t === "mc" ? `<p class="tag">${fmt(q.w)}</p>` : ""}`;
      review.appendChild(div);
    });
    const rw = document.getElementById("retryWrong");
    if (rw) rw.onclick = () => startQuiz(panel, shuffle(wrong.map((a) => prepare(a.q, a.q.topic))), { ...opts, timeLimit: 0, onFinish: null, exam: false });
    document.getElementById("again").onclick = () => (opts.retry ? opts.retry() : goHome());
    document.getElementById("exit").onclick = () => (opts.exit ? opts.exit() : goHome());
    window.scrollTo(0, 0);
  }

  render();
}

/* ---------- simulador de examen ---------- */
function examConfig() {
  stopTimer();
  const total = TOPICS.reduce((n, t) => n + t.quiz.length, 0);
  const options = [10, 20, 30, 50].filter((n) => n < total).concat([total]);
  app.innerHTML = `
    <button class="back" id="back">← Inicio</button>
    <div class="topic-head"><h2>📝 Simulador de examen</h2><p>Sin ayudas: la corrección aparece al final.</p></div>
    <div class="config">
      <label for="num">Número de preguntas</label>
      <select id="num">${options.map((n) => `<option value="${n}" ${n === 30 ? "selected" : ""}>${n === total ? "Todas (" + n + ")" : n}</option>`).join("")}</select>
      <label for="scope">Temas</label>
      <select id="scope">
        <option value="all">Todos los temas</option>
        <option value="nervioso">Solo sistema nervioso (temas 1–5)</option>
        <option value="musculo">Solo sinapsis y contracción (temas 6–7)</option>
        <option value="sentidos">Solo sentidos (temas 8–11)</option>
      </select>
      <label><input type="checkbox" id="timed"> Con tiempo (1 min por pregunta)</label>
      <div class="row" style="margin-top:16px"><button class="btn" id="go">Comenzar</button></div>
    </div>`;
  document.getElementById("back").onclick = goHome;
  document.getElementById("go").onclick = () => {
    const n = parseInt(document.getElementById("num").value, 10);
    const scope = document.getElementById("scope").value;
    const ranges = { all: [0, TOPICS.length], nervioso: [0, 5], musculo: [5, 7], sentidos: [7, TOPICS.length] };
    const [a, b] = ranges[scope];
    const pool = [];
    TOPICS.slice(a, b).forEach((t) => t.quiz.forEach((q) => pool.push(prepare(q, t.title))));
    const qs = shuffle(pool).slice(0, Math.min(n, pool.length));
    const timed = document.getElementById("timed").checked;
    app.innerHTML = `<div id="panel"></div>`;
    startQuiz(document.getElementById("panel"), qs, {
      exam: true,
      timeLimit: timed ? qs.length * 60 : 0,
      retry: examConfig,
      exit: goHome,
      exitLabel: "Ir al inicio"
    });
  };
}

document.getElementById("homeBtn").onclick = goHome;
goHome();
