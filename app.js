// ===== STATE =====
let state = {
  mode: 'practice',
  order: 'fixed',
  shuffleChoices: false,
  questions: [],
  current: 0,
  answers: {},      // MCQ: { idx: ['A','C'] }  DragDrop: { idx: { item: category } }
  flags: new Set(),
  timerSeconds: 0,
  timerInterval: null,
  sidebarOpen: true,
  confirmCallback: null,
  ddSelected: null,  // currently selected drag-drop item chip
};

// ===== PROGRESS (Resume) =====
const PROGRESS_KEY = 'cis-quiz-progress';

function saveProgress() {
  try {
    const progress = {
      questions: state.questions,
      current: state.current,
      answers: state.answers,
      flags: [...state.flags],
      mode: state.mode,
      order: state.order,
      shuffleChoices: state.shuffleChoices,
      timerSeconds: state.timerSeconds,
      savedAt: Date.now()
    };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch(e) {}
}

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)); }
  catch { return null; }
}

function clearProgress() {
  localStorage.removeItem(PROGRESS_KEY);
}

function resumeQuiz() {
  const progress = loadProgress();
  if (!progress) return;
  state.questions    = progress.questions;
  state.current      = progress.current;
  state.answers      = progress.answers || {};
  state.flags        = new Set(progress.flags || []);
  state.mode         = progress.mode;
  state.order        = progress.order;
  state.shuffleChoices = progress.shuffleChoices;
  state.timerSeconds = progress.timerSeconds || 0;
  state.ddSelected   = null;
  clearInterval(state.timerInterval);
  showScreen('quiz');
  buildQuestionGrid();
  renderQuestion();
  startTimer();
}

function renderResume() {
  const progress = loadProgress();
  const section = document.getElementById('resume-section');
  if (!section) return;
  if (!progress || !progress.questions || !progress.questions.length) {
    section.style.display = 'none';
    return;
  }
  const answered = Object.keys(progress.answers || {}).length;
  const total = progress.questions.length;
  const modeLabel = progress.mode === 'practice' ? '📖 Practice' : '🎯 Exam';
  const qNum = progress.current + 1;
  section.style.display = 'block';
  section.innerHTML = `
    <div class="resume-card">
      <div class="resume-info">
        <div class="resume-title">📌 Continue where you left off</div>
        <div class="resume-detail">Q${qNum} of ${total} &nbsp;·&nbsp; ${answered} answered &nbsp;·&nbsp; ${modeLabel}</div>
      </div>
      <button class="btn-resume" onclick="resumeQuiz()">Resume →</button>
    </div>
  `;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  populateSectionFilter();
  document.getElementById('total-q-count').textContent = QUESTIONS.length;
  applyTheme(localStorage.getItem('cis-theme') || 'dark');
  renderResume();
  renderHistory();
});

function populateSectionFilter() {
  const sections = [...new Set(QUESTIONS.map(q => q.section))].sort();
  const sel = document.getElementById('section-filter');
  sections.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = s;
    sel.appendChild(opt);
  });
}

// ===== THEME =====
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  const label = isDark ? '🌙 Dark' : '☀️ Light';
  const btnLabel = isDark ? '🌙' : '☀️';
  const landBtn = document.getElementById('theme-btn');
  const quizBtn = document.getElementById('quiz-theme-btn');
  if (landBtn) landBtn.textContent = label;
  if (quizBtn) quizBtn.textContent = btnLabel;
  localStorage.setItem('cis-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ===== LANDING =====
function selectMode(mode) {
  state.mode = mode;
  document.getElementById('mode-practice').classList.toggle('selected', mode === 'practice');
  document.getElementById('mode-exam').classList.toggle('selected', mode === 'exam');
}

function selectOrder(order) {
  state.order = order;
  document.getElementById('order-fixed').classList.toggle('selected', order === 'fixed');
  document.getElementById('order-random').classList.toggle('selected', order === 'random');
}

// ===== START QUIZ =====
function startQuiz() {
  state.shuffleChoices = document.getElementById('shuffle-choices').checked;
  const filter = document.getElementById('section-filter').value;
  let pool = filter === 'all' ? [...QUESTIONS] : QUESTIONS.filter(q => q.section === filter);
  if (!pool.length) return alert('No questions found for this section.');

  if (state.order === 'random') {
    pool = pool.sort(() => Math.random() - 0.5);
  } else {
    pool = pool.slice().sort((a, b) => (a.question_number || 0) - (b.question_number || 0));
  }

  state.questions = pool.map(q => buildQuestion(q));
  state.current = 0;
  state.answers = {};
  state.flags = new Set();
  state.timerSeconds = 0;
  state.ddSelected = null;
  clearInterval(state.timerInterval);
  clearProgress();

  showScreen('quiz');
  buildQuestionGrid();
  renderQuestion();
  startTimer();
}

function buildQuestion(q) {
  // Drag-drop questions: just pass through (optionally shuffle items)
  if (q.type === 'dragdrop') {
    const items = [...q.items];
    if (state.shuffleChoices) items.sort(() => Math.random() - 0.5);
    return { ...q, items };
  }

  // MCQ: shuffle choices if requested
  const letters = Object.keys(q.options).filter(k => q.options[k]);
  let displayLetters = [...letters];
  if (state.shuffleChoices) displayLetters = displayLetters.sort(() => Math.random() - 0.5);

  const displayMap = {};
  const reverseMap = {};
  const newOptions = {};
  const positions = ['A','B','C','D','E'];
  displayLetters.forEach((origLetter, idx) => {
    const pos = positions[idx];
    displayMap[pos] = origLetter;
    reverseMap[origLetter] = pos;
    newOptions[pos] = q.options[origLetter];
  });

  const correctOrig = q.correct_answer.split('');
  const correctDisplay = correctOrig.map(l => reverseMap[l] || l).sort().join('');

  return { ...q, options: newOptions, correct_answer: correctDisplay, _displayMap: displayMap, _reverseMap: reverseMap };
}

// ===== TIMER =====
function startTimer() {
  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    const m = Math.floor(state.timerSeconds / 60).toString().padStart(2,'0');
    const s = (state.timerSeconds % 60).toString().padStart(2,'0');
    document.getElementById('timer').textContent = `${m}:${s}`;
  }, 1000);
}

// ===== SIDEBAR =====
function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  document.getElementById('sidebar').classList.toggle('collapsed', !state.sidebarOpen);
}

function buildQuestionGrid() {
  const grid = document.getElementById('question-grid');
  grid.innerHTML = '';
  state.questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'grid-btn';
    btn.textContent = i + 1;
    btn.onclick = () => jumpTo(i);
    grid.appendChild(btn);
  });
}

function updateGridBtn() {
  const btns = document.querySelectorAll('.grid-btn');
  btns.forEach((btn, i) => {
    btn.className = 'grid-btn';
    const q = state.questions[i];
    if (i === state.current) {
      btn.classList.add('is-current');
    } else if (state.answers[i] !== undefined) {
      if (state.mode === 'exam') {
        btn.classList.add('is-answered');
      } else {
        const isDD = q.type === 'dragdrop';
        if (isDD) {
          const placed = state.answers[i] || {};
          const allCorrect = isDragDropCorrect(q, placed);
          btn.classList.add(allCorrect ? 'is-answered' : 'is-wrong');
        } else {
          const selected = (state.answers[i] || []).slice().sort().join('');
          const correct = q.correct_answer.split('').sort().join('');
          btn.classList.add(selected === correct ? 'is-answered' : 'is-wrong');
        }
      }
    }
    if (state.flags.has(i)) btn.classList.add('is-flagged');
  });
}

function isDragDropCorrect(q, placed) {
  const cm = q.correct_mapping;
  if (!placed || Object.keys(placed).length !== q.items.length) return false;
  return q.items.every(item => placed[item] === cm[item]);
}

// ===== RENDER QUESTION (router) =====
function renderQuestion() {
  const q = state.questions[state.current];
  if (q.type === 'dragdrop') {
    renderDragDropQuestion(q, state.current);
  } else {
    renderMCQQuestion(q, state.current);
  }
  // Nav
  const idx = state.current;
  const total = state.questions.length;
  document.getElementById('btn-prev').disabled = idx === 0;
  document.getElementById('btn-next').textContent = idx === total - 1 ? 'Finish →' : 'Next →';
  // Flag
  const flagBtn = document.getElementById('btn-flag');
  flagBtn.classList.toggle('flagged', state.flags.has(idx));
  flagBtn.textContent = state.flags.has(idx) ? '🚩 Flagged' : '🚩 Flag';
  updateGridBtn();
}

// ===== MCQ RENDER =====
function renderMCQQuestion(q, idx) {
  const total = state.questions.length;
  const isMulti = q.correct_answer.length > 1;

  document.getElementById('q-section-tag').textContent = q.section || '';
  document.getElementById('q-number').textContent = `Question ${idx + 1}`;
  document.getElementById('q-counter').textContent = `${idx + 1} / ${total}`;
  document.getElementById('progress-bar').style.width = `${((idx + 1) / total) * 100}%`;
  document.getElementById('q-text').textContent = q.question;

  const badge = document.getElementById('multi-badge');
  if (isMulti) {
    badge.style.display = '';
    badge.textContent = `Choose ${q.correct_answer.length} answers`;
    badge.className = 'multi-badge';
  } else {
    badge.style.display = 'none';
  }

  const optList = document.getElementById('options-list');
  optList.innerHTML = '';
  optList.className = 'options-list';

  const prevAnswers = state.answers[idx];
  Object.entries(q.options).forEach(([letter, text]) => {
    if (!text) return;
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.letter = letter;

    const letterSpan = document.createElement('span');
    letterSpan.className = 'option-letter';
    letterSpan.textContent = letter;

    const textSpan = document.createElement('span');
    textSpan.className = 'option-text';
    textSpan.textContent = text;

    const iconSpan = document.createElement('span');
    iconSpan.className = 'option-result-icon';

    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);
    btn.appendChild(iconSpan);
    btn.onclick = () => selectAnswer(letter);
    optList.appendChild(btn);
  });

  if (prevAnswers !== undefined) {
    if (state.mode === 'practice') {
      applyAnswerUI(prevAnswers, q.correct_answer);
      showExplanation(q.explanation);
    } else {
      applyExamUI(prevAnswers);
    }
  } else {
    document.getElementById('explanation-box').style.display = 'none';
  }

  rebuildMultiConfirm();
}

// ===== DRAG-DROP RENDER =====
function renderDragDropQuestion(q, idx) {
  const total = state.questions.length;

  document.getElementById('q-section-tag').textContent = q.section || '';
  document.getElementById('q-number').textContent = `Question ${idx + 1}`;
  document.getElementById('q-counter').textContent = `${idx + 1} / ${total}`;
  document.getElementById('progress-bar').style.width = `${((idx + 1) / total) * 100}%`;
  document.getElementById('q-text').textContent = q.question;

  const badge = document.getElementById('multi-badge');
  badge.style.display = '';
  badge.textContent = '🔀 Drag & Match';
  badge.className = 'multi-badge dd-badge';

  document.getElementById('explanation-box').style.display = 'none';

  const optList = document.getElementById('options-list');
  optList.innerHTML = '';
  optList.className = 'options-list dd-mode';

  const currentPlaced = state.answers[idx] || {}; // { item: category }
  const isRevealed = state.ddRevealed && state.ddRevealed[idx];
  state.ddSelected = null;

  // Build UI
  const wrap = document.createElement('div');
  wrap.className = 'dd-wrap';

  // ---- Items Bank ----
  const bankSection = document.createElement('div');
  bankSection.className = 'dd-bank-section';
  const bankLabel = document.createElement('div');
  bankLabel.className = 'dd-section-label';
  bankLabel.textContent = 'Available Items';
  bankSection.appendChild(bankLabel);

  const bank = document.createElement('div');
  bank.className = 'dd-bank';
  bank.id = 'dd-bank';

  q.items.forEach(item => {
    const isPlaced = Object.keys(currentPlaced).includes(item);
    if (!isPlaced) {
      bank.appendChild(createItemChip(item, q, idx, isRevealed));
    }
  });
  bankSection.appendChild(bank);
  wrap.appendChild(bankSection);

  // ---- Categories ----
  const catSection = document.createElement('div');
  catSection.className = 'dd-categories-section';
  const catLabel = document.createElement('div');
  catLabel.className = 'dd-section-label';
  catLabel.textContent = 'Answer Area';
  catSection.appendChild(catLabel);

  q.categories.forEach(cat => {
    const row = document.createElement('div');
    row.className = 'dd-category-row';

    // Find item placed in this category
    const placedItem = Object.keys(currentPlaced).find(item => currentPlaced[item] === cat);

    // Slot (left side)
    const slot = document.createElement('div');
    slot.className = 'dd-slot';
    slot.dataset.category = cat;

    if (placedItem) {
      const chip = createItemChip(placedItem, q, idx, isRevealed, cat);
      if (isRevealed) {
        const isCorrect = q.correct_mapping[placedItem] === cat;
        chip.classList.add(isCorrect ? 'chip-correct' : 'chip-wrong');
      }
      slot.appendChild(chip);
    } else {
      if (isRevealed) {
        // Show what should have been here
        const correctItem = q.items.find(item => q.correct_mapping[item] === cat);
        if (correctItem) {
          const hint = document.createElement('div');
          hint.className = 'dd-missing-hint';
          hint.textContent = `✓ ${correctItem}`;
          slot.appendChild(hint);
        }
      }
    }

    if (!isRevealed) {
      slot.onclick = () => ddDropOnSlot(slot, cat, q, idx);
    }

    // Category label (right side)
    const catDiv = document.createElement('div');
    catDiv.className = 'dd-category-label';
    catDiv.textContent = cat;

    row.appendChild(slot);
    row.appendChild(catDiv);
    catSection.appendChild(row);
  });

  wrap.appendChild(catSection);
  optList.appendChild(wrap);

  // Submit button for practice mode (before reveal)
  if (state.mode === 'practice' && !isRevealed) {
    const allPlaced = Object.keys(currentPlaced).length === q.items.length;
    if (allPlaced) {
      const submitBtn = document.createElement('button');
      submitBtn.className = 'multi-confirm-btn';
      submitBtn.textContent = 'Submit Answer';
      submitBtn.onclick = () => revealDragDrop(q, idx);
      optList.appendChild(submitBtn);
    }
  }

  // Show explanation if revealed
  if (isRevealed && q.explanation) {
    showExplanation(q.explanation);
  }

  // Attach HTML5 drag-and-drop listeners after DOM is built
  setTimeout(attachSlotDragListeners, 0);
}

function createItemChip(item, q, idx, isRevealed, inCategory) {
  const chip = document.createElement('div');
  chip.className = 'dd-chip';
  chip.dataset.item = item;
  chip.textContent = item;

  if (!isRevealed) {
    chip.onclick = (e) => {
      e.stopPropagation();
      if (inCategory) {
        // Return chip to bank
        ddReturnToBank(item, q, idx);
      } else {
        // Select chip from bank
        ddSelectChip(chip, item, idx);
      }
    };

    // Drag support
    chip.draggable = true;
    chip.ondragstart = (e) => {
      e.dataTransfer.setData('text/plain', item);
      chip.classList.add('dragging');
      state.ddSelected = item;
    };
    chip.ondragend = () => chip.classList.remove('dragging');
  }

  return chip;
}

function ddSelectChip(chip, item, idx) {
  state.ddSelected = item;
  // Highlight only this chip
  document.querySelectorAll('#dd-bank .dd-chip').forEach(c => c.classList.remove('chip-selected'));
  chip.classList.add('chip-selected');
}

function ddDropOnSlot(slot, category, q, idx) {
  // Only handle click-to-place (drag is handled by attachSlotDragListeners)
  if (state.ddSelected === null) return;

  const item = state.ddSelected;
  const currentPlaced = state.answers[idx] || {};

  // Build fresh placed object
  const newPlaced = { ...currentPlaced };
  // Remove item from its current category (if already placed elsewhere)
  for (const k in newPlaced) { if (k === item) delete newPlaced[k]; }
  // Remove whatever was in the target slot
  for (const k in newPlaced) { if (newPlaced[k] === category) delete newPlaced[k]; }
  // Place the item
  newPlaced[item] = category;

  state.answers[idx] = newPlaced;
  state.ddSelected = null;
  renderDragDropQuestion(q, idx);
  updateGridBtn();
}

function ddReturnToBank(item, q, idx) {
  const newPlaced = { ...(state.answers[idx] || {}) };
  delete newPlaced[item];
  state.answers[idx] = Object.keys(newPlaced).length ? newPlaced : undefined;
  state.ddSelected = null;
  renderDragDropQuestion(q, idx);
  updateGridBtn();
}

function revealDragDrop(q, idx) {
  if (!state.ddRevealed) state.ddRevealed = {};
  state.ddRevealed[idx] = true;
  renderDragDropQuestion(q, idx);
  updateGridBtn();
}

// Attach drag-over listeners to slots after render
function attachSlotDragListeners() {
  document.querySelectorAll('.dd-slot').forEach(slot => {
    const cat = slot.dataset.category;
    const idx = state.current;
    const q = state.questions[idx];
    slot.ondragover = (e) => { e.preventDefault(); slot.classList.add('dd-slot-hover'); };
    slot.ondragleave = () => slot.classList.remove('dd-slot-hover');
    slot.ondrop = (e) => {
      e.preventDefault();
      slot.classList.remove('dd-slot-hover');
      const item = e.dataTransfer.getData('text/plain');
      if (!item) return;
      const currentPlaced = state.answers[idx] || {};
      // Remove from old category if already placed
      const newPlaced = { ...currentPlaced };
      for (const k in newPlaced) { if (k === item) delete newPlaced[k]; }
      // Remove item that was in target slot
      for (const k in newPlaced) { if (newPlaced[k] === cat) delete newPlaced[k]; }
      newPlaced[item] = cat;
      state.answers[idx] = newPlaced;
      renderDragDropQuestion(q, idx);
      updateGridBtn();
    };
  });
  // Also handle bank drops (returning items)
  const bank = document.getElementById('dd-bank');
  if (bank) {
    bank.ondragover = (e) => { e.preventDefault(); bank.classList.add('bank-hover'); };
    bank.ondragleave = () => bank.classList.remove('bank-hover');
    bank.ondrop = (e) => {
      e.preventDefault();
      bank.classList.remove('bank-hover');
      const item = e.dataTransfer.getData('text/plain');
      if (!item) return;
      const idx = state.current;
      const q = state.questions[idx];
      ddReturnToBank(item, q, idx);
    };
  }
}

// ===== MCQ ANSWER LOGIC =====
function selectAnswer(letter) {
  const idx = state.current;
  const q = state.questions[idx];
  if (q.type === 'dragdrop') return;
  const isMulti = q.correct_answer.length > 1;

  if (state.mode === 'practice' && state.answers[idx] !== undefined) {
    const submitted = (state.answers[idx] || []).slice().sort().join('');
    const correct = q.correct_answer.split('').sort().join('');
    if (submitted === correct) return;
  }

  if (!isMulti) {
    state.answers[idx] = [letter];
    if (state.mode === 'practice') {
      applyAnswerUI([letter], q.correct_answer);
      showExplanation(q.explanation);
    } else {
      applyExamUI([letter]);
    }
  } else {
    let sel = [...(state.answers[idx] || [])];
    const alreadySubmitted = state.mode === 'practice' && isFullyAnswered(idx);
    if (alreadySubmitted) return;
    if (sel.includes(letter)) sel = sel.filter(l => l !== letter);
    else sel.push(letter);
    state.answers[idx] = sel.length ? sel : undefined;
    applyExamUI(sel);
    rebuildMultiConfirm();
  }
  saveProgress();
  updateGridBtn();
}

function isFullyAnswered(idx) {
  const q = state.questions[idx];
  if (q.type === 'dragdrop') {
    const placed = state.answers[idx] || {};
    return Object.keys(placed).length === q.items.length;
  }
  const ans = state.answers[idx];
  if (!ans || !ans.length) return false;
  const submitted = ans.slice().sort().join('');
  const correct = q.correct_answer.split('').sort().join('');
  return state.mode === 'exam' || submitted === correct || ans.length >= q.correct_answer.length;
}

function rebuildMultiConfirm() {
  const idx = state.current;
  const q = state.questions[idx];
  if (q.type === 'dragdrop') return;
  const isMulti = q.correct_answer.length > 1;
  const optList = document.getElementById('options-list');
  const existing = optList.querySelector('.multi-confirm-btn');
  if (existing) existing.remove();
  if (!isMulti || state.mode !== 'practice') return;
  const sel = state.answers[idx] || [];
  const alreadyRevealed = state.answers[idx] !== undefined && document.getElementById('explanation-box').style.display !== 'none';
  if (alreadyRevealed) return;
  if (sel.length > 0) {
    const btn = document.createElement('button');
    btn.className = 'multi-confirm-btn';
    btn.textContent = `Submit ${sel.length} answer${sel.length > 1 ? 's' : ''}`;
    btn.onclick = submitMultiAnswer;
    optList.appendChild(btn);
  }
}

function submitMultiAnswer() {
  const idx = state.current;
  const q = state.questions[idx];
  const sel = state.answers[idx] || [];
  applyAnswerUI(sel, q.correct_answer);
  showExplanation(q.explanation);
  const existing = document.querySelector('.multi-confirm-btn');
  if (existing) existing.remove();
  updateGridBtn();
}

function applyAnswerUI(selected, correct) {
  const correctArr = correct.split('');
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    const letter = btn.dataset.letter;
    const icon = btn.querySelector('.option-result-icon');
    const isCorrect = correctArr.includes(letter);
    const isSelected = selected.includes(letter);
    if (isCorrect) { btn.classList.add('correct'); icon.textContent = '✓'; }
    else if (isSelected && !isCorrect) { btn.classList.add('wrong'); icon.textContent = '✗'; }
    if (isSelected) btn.classList.add('selected');
  });
}

function applyExamUI(selected) {
  document.querySelectorAll('.option-btn').forEach(btn => {
    const letter = btn.dataset.letter;
    btn.classList.toggle('pending', selected.includes(letter));
  });
}

function showExplanation(text) {
  const box = document.getElementById('explanation-box');
  document.getElementById('explanation-text').textContent = text || 'No explanation available.';
  box.style.display = 'block';
}

// ===== NAVIGATION =====
function navigate(dir) {
  const next = state.current + dir;
  if (next < 0) return;
  if (next >= state.questions.length) { confirmFinish(); return; }
  state.current = next;
  saveProgress();
  renderQuestion();
  document.querySelector('.quiz-main').scrollTo({ top: 0, behavior: 'smooth' });
}

function jumpTo(i) {
  state.current = i;
  saveProgress();
  renderQuestion();
  document.querySelector('.quiz-main').scrollTo({ top: 0, behavior: 'smooth' });
  if (window.innerWidth < 640) toggleSidebar();
}

function flagQuestion() {
  const idx = state.current;
  if (state.flags.has(idx)) state.flags.delete(idx);
  else state.flags.add(idx);
  renderQuestion();
}

// ===== CONFIRM DIALOG =====
function showConfirm(title, msg, onOk) {
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-msg').textContent = msg;
  state.confirmCallback = onOk;
  document.getElementById('confirm-overlay').style.display = 'flex';
}
function confirmOk() {
  document.getElementById('confirm-overlay').style.display = 'none';
  if (state.confirmCallback) state.confirmCallback();
  state.confirmCallback = null;
}
function confirmCancel() {
  document.getElementById('confirm-overlay').style.display = 'none';
  state.confirmCallback = null;
}
function confirmGoHome() {
  goHome(); // progress is auto-saved, no warning needed
}
function confirmFinish() {
  const answered = Object.keys(state.answers).length;
  const total = state.questions.length;
  const unanswered = total - answered;
  const msg = unanswered > 0
    ? `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Finish and see your result?`
    : 'Submit and see your result?';
  showConfirm('Finish Quiz', msg, submitExam);
}

// ===== SUBMIT / RESULTS =====
function submitExam() {
  clearProgress(); // quiz done — remove saved progress
  clearInterval(state.timerInterval);
  let correct = 0;
  const total = state.questions.length;
  const answered = Object.keys(state.answers).length;

  state.questions.forEach((q, i) => {
    if (q.type === 'dragdrop') {
      const placed = state.answers[i] || {};
      if (isDragDropCorrect(q, placed)) correct++;
    } else {
      const sel = (state.answers[i] || []).slice().sort().join('');
      const correctStr = q.correct_answer.split('').sort().join('');
      if (sel === correctStr) correct++;
    }
  });

  const wrong = answered - correct;
  const unanswered = total - answered;
  const pct = Math.round((correct / total) * 100);

  document.getElementById('results-emoji').textContent = pct >= 80 ? '🎉' : pct >= 60 ? '📚' : '💪';
  document.getElementById('results-score').textContent = `${correct} / ${total}`;
  document.getElementById('results-pct').textContent = `${pct}% Correct`;
  document.getElementById('results-breakdown').innerHTML = `
    <div class="breakdown-card">
      <span class="breakdown-num" style="color:var(--green)">${correct}</span>
      <span class="breakdown-label">Correct</span>
    </div>
    <div class="breakdown-card">
      <span class="breakdown-num" style="color:var(--red)">${wrong}</span>
      <span class="breakdown-label">Wrong</span>
    </div>
    <div class="breakdown-card">
      <span class="breakdown-num" style="color:var(--text3)">${unanswered}</span>
      <span class="breakdown-label">Skipped</span>
    </div>
  `;
  drawDonut(correct, wrong, unanswered, total);
  saveToHistory({ correct, wrong, unanswered, total, pct });
  showScreen('results');
}

function drawDonut(correct, wrong, unanswered, total) {
  const canvas = document.getElementById('donut-chart');
  const ctx = canvas.getContext('2d');
  const cx = 80, cy = 80, r = 60, innerR = 38;
  const segments = [
    { value: correct, color: '#23b26d' },
    { value: wrong, color: '#e33e2b' },
    { value: unanswered, color: '#3e4143' },
  ];
  let start = -Math.PI / 2;
  ctx.clearRect(0, 0, 160, 160);
  segments.forEach(seg => {
    if (!seg.value) return;
    const sweep = (seg.value / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, start + sweep);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();
    start += sweep;
  });
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, 2 * Math.PI);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() || '#1c1d1f';
  ctx.fill();
  const pct = Math.round((correct / total) * 100);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#f7f8fa';
  ctx.font = 'bold 18px system-ui';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${pct}%`, cx, cy);
}

// ===== REVIEW =====
function reviewAnswers() {
  const list = document.getElementById('review-list');
  list.innerHTML = '';

  state.questions.forEach((q, i) => {
    const item = document.createElement('div');
    const isSkipped = state.answers[i] === undefined;

    if (q.type === 'dragdrop') {
      const placed = state.answers[i] || {};
      const isCorrect = !isSkipped && isDragDropCorrect(q, placed);
      item.className = `review-item ${isSkipped ? 'skip-item' : isCorrect ? 'correct-item' : 'wrong-item'}`;
      const badgeCls = isSkipped ? 'badge-skip' : isCorrect ? 'badge-correct' : 'badge-wrong';
      const badgeTxt = isSkipped ? '— Skipped' : isCorrect ? '✓ Correct' : '✗ Wrong';

      // Build drag-drop review table
      const mappingHTML = q.categories.map(cat => {
        const correctItem = q.items.find(it => q.correct_mapping[it] === cat);
        const userItem = Object.keys(placed).find(it => placed[it] === cat) || null;
        const isMatch = userItem === correctItem;
        const rowCls = isSkipped ? '' : isMatch ? 'dd-review-correct' : 'dd-review-wrong';
        return `<tr class="${rowCls}">
          <td class="dd-review-slot">${userItem ? `<span class="dd-review-chip">${userItem}</span>` : '<span class="dd-review-empty">—</span>'}</td>
          <td class="dd-review-cat">${cat}</td>
          ${!isSkipped && !isMatch ? `<td class="dd-review-answer">✓ ${correctItem}</td>` : '<td></td>'}
        </tr>`;
      }).join('');

      item.innerHTML = `
        <div class="review-item-header">
          <span>Q${i + 1} <span class="dd-type-tag">Drag &amp; Match</span></span>
          <span class="review-result-badge ${badgeCls}">${badgeTxt}</span>
          <span style="margin-left:auto;color:var(--text3);font-size:11px">${q.section}</span>
        </div>
        <div class="review-item-body">
          <div class="review-question">${q.question}</div>
          <table class="dd-review-table"><tbody>${mappingHTML}</tbody></table>
          ${q.explanation ? `<div class="review-explanation"><strong>💡 Explanation:</strong> ${q.explanation}</div>` : ''}
        </div>
      `;
    } else {
      const userAns = state.answers[i] || [];
      const correctArr = q.correct_answer.split('');
      const sel = userAns.slice().sort().join('');
      const correctStr = correctArr.slice().sort().join('');
      const isCorrect = sel === correctStr && userAns.length > 0;
      item.className = `review-item ${isSkipped ? 'skip-item' : isCorrect ? 'correct-item' : 'wrong-item'}`;
      const badgeCls = isSkipped ? 'badge-skip' : isCorrect ? 'badge-correct' : 'badge-wrong';
      const badgeTxt = isSkipped ? '— Skipped' : isCorrect ? '✓ Correct' : '✗ Wrong';

      const optionsHTML = Object.entries(q.options).map(([letter, text]) => {
        if (!text) return '';
        const isCorrectOpt = correctArr.includes(letter);
        const isUserOpt = userAns.includes(letter);
        let cls = 'review-option';
        if (isCorrectOpt) cls += ' is-correct';
        else if (isUserOpt && !isCorrectOpt) cls += ' is-wrong';
        const icon = isCorrectOpt ? '✓ ' : (isUserOpt && !isCorrectOpt ? '✗ ' : '');
        return `<div class="${cls}"><strong>${letter}.</strong>&nbsp;${icon}${text}</div>`;
      }).join('');

      item.innerHTML = `
        <div class="review-item-header">
          <span>Q${i + 1}</span>
          <span class="review-result-badge ${badgeCls}">${badgeTxt}</span>
          <span style="margin-left:auto;color:var(--text3);font-size:11px">${q.section}</span>
        </div>
        <div class="review-item-body">
          <div class="review-question">${q.question}</div>
          <div class="review-options">${optionsHTML}</div>
          ${q.explanation ? `<div class="review-explanation"><strong>💡 Explanation:</strong> ${q.explanation}</div>` : ''}
        </div>
      `;
    }
    list.appendChild(item);
  });

  showScreen('review');
}

// ===== MISC =====
function restartQuiz() { startQuiz(); }
function goHome() {
  clearInterval(state.timerInterval);
  state.ddRevealed = {};
  renderResume();
  renderHistory();
  showScreen('landing');
}
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== HISTORY =====
const HISTORY_KEY = 'cis-quiz-history';
const MAX_HISTORY = 20;

function saveToHistory({ correct, wrong, unanswered, total, pct }) {
  const section = document.getElementById('section-filter').value;
  const entry = {
    timestamp: Date.now(),
    mode: state.mode,
    order: state.order,
    section,
    correct,
    wrong,
    unanswered,
    total,
    pct,
    timeTaken: state.timerSeconds,
  };
  const history = getHistory();
  history.unshift(entry);
  if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
  catch { return []; }
}

function clearHistory() {
  if (!confirm('Clear all history?')) return;
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function formatDate(ts) {
  const d = new Date(ts);
  const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
  const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  return `${date} ${time}`;
}

function renderHistory() {
  const history = getHistory();
  const section = document.getElementById('history-section');
  const list = document.getElementById('history-list');
  if (!history.length) { section.style.display = 'none'; return; }

  section.style.display = 'block';
  list.innerHTML = '';

  history.forEach((entry, i) => {
    const pctColor = entry.pct >= 80 ? 'var(--green)' : entry.pct >= 60 ? 'var(--yellow)' : 'var(--red)';
    const modeLabel = entry.mode === 'practice' ? '📖 Practice' : '🎯 Exam';
    const sectionLabel = entry.section === 'all' ? 'All Sections' : entry.section;
    const emoji = entry.pct >= 80 ? '🎉' : entry.pct >= 60 ? '📚' : '💪';

    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
      <div class="history-card-top">
        <span class="history-emoji">${emoji}</span>
        <span class="history-pct" style="color:${pctColor}">${entry.pct}%</span>
        <span class="history-score">${entry.correct}/${entry.total} correct</span>
        <span class="history-time">⏱ ${formatTime(entry.timeTaken)}</span>
      </div>
      <div class="history-card-bottom">
        <span class="history-tag">${modeLabel}</span>
        <span class="history-tag">${sectionLabel}</span>
        <span class="history-date">${formatDate(entry.timestamp)}</span>
      </div>
    `;
    list.appendChild(card);
  });
}
