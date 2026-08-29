const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function isSubpage() {
  return location.pathname.includes('/modules/') || location.pathname.includes('/weeks/');
}

function rootPrefix() {
  return isSubpage() ? '../' : '';
}

function setupNav() {
  const toggle = $('.mobile-toggle');
  const nav = $('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

function fillNav() {
  const nav = $('.nav');
  if (!nav || !window.COURSE_DATA) return;

  const modules = COURSE_DATA.modules
    .map((module) => `<a href="${rootPrefix()}modules/module.html?id=${module.id}">${module.code}</a>`)
    .join('');

  nav.innerHTML = `<a href="${rootPrefix()}index.html">首頁</a>${modules}`;
}

function renderHome() {
  const root = $('#module-grid');
  if (!root || !window.COURSE_DATA) return;

  root.innerHTML = COURSE_DATA.modules.map((module, index) => `
    <a class="card module-card" href="modules/module.html?id=${module.id}">
      <div>
        <div class="num">0${index + 1}</div>
        <h3>${module.title}</h3>
        <p>${module.description}</p>
        <p class="muted">${module.weeks.map((week) => `W${String(week).padStart(2, '0')}`).join(' · ')}</p>
      </div>
      <strong>查看 Module →</strong>
    </a>
  `).join('');
}

function getParam(key) {
  return new URLSearchParams(location.search).get(key);
}

function renderModule() {
  const host = $('#module-page');
  if (!host || !window.COURSE_DATA) return;

  const id = getParam('id') || 'm1';
  const module = COURSE_DATA.modules.find((item) => item.id === id) || COURSE_DATA.modules[0];

  $('#module-code').textContent = module.code;
  $$('.module-code-text').forEach((element) => { element.textContent = module.code; });
  $('#module-title').textContent = module.title;
  $('#module-description').textContent = module.description || '';
  document.title = `${module.code}｜${module.title}｜資料科學與大數據分析`;

  $('#module-weeks').innerHTML = module.weeks.map((week) => {
    const weekNo = String(week).padStart(2, '0');
    const data = COURSE_DATA.weeks[weekNo];
    return `
      <a class="card" href="../weeks/week.html?w=${weekNo}">
        <div class="num">WEEK ${weekNo}</div>
        <h3>${data.title}</h3>
        <p class="muted">${data.term || data.question}</p>
        <strong>進入本週 →</strong>
      </a>
    `;
  }).join('');
}

function officeViewerUrl(relativePath) {
  const fileUrl = new URL(relativePath, window.location.href);

  // Microsoft Office Online Viewer can only fetch publicly reachable HTTP/HTTPS files.
  // This is exactly how the course will run after deployment to GitHub Pages.
  if (fileUrl.protocol === 'http:' || fileUrl.protocol === 'https:') {
    return `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(fileUrl.href)}`;
  }

  // During local file:// testing, keep the relative file target so path correctness can
  // still be checked. Browsers do not natively render PPTX/DOCX; full online preview
  // becomes available after GitHub Pages deployment.
  return relativePath;
}

function materialCard(kind, weekNo) {
  const base = `../materials/week${weekNo}/`;
  const meta = {
    slides: {
      title: '教師授課 PPT',
      format: 'PowerPoint（PPTX）',
      path: `${base}slides.pptx`,
      label: '線上開啟 PowerPoint ↗',
      office: true
    },
    worksheet: {
      title: '學生空白學習單',
      format: 'Word（DOCX）',
      path: `${base}worksheet.docx`,
      label: '線上開啟 Word 學習單 ↗',
      office: true
    },
    dataset: {
      title: '本週資料',
      format: 'CSV',
      path: `${base}dataset.csv`,
      label: '開啟資料集 ↗',
      office: false
    }
  }[kind];

  if (!meta) return '';

  const href = meta.office ? officeViewerUrl(meta.path) : meta.path;

  return `
    <div class="resource-card">
      <h3>${meta.title}</h3>
      <p class="muted">${meta.format}</p>
      <div class="actions">
        <a class="btn secondary" href="${href}" target="_blank" rel="noopener noreferrer">${meta.label}</a>
      </div>
    </div>
  `;
}

function renderWeek() {
  const host = $('#week-page');
  if (!host || !window.COURSE_DATA) return;

  const weekNo = getParam('w') || '01';
  const data = COURSE_DATA.weeks[weekNo];
  if (!data) return;

  $('#week-no').textContent = `WEEK ${weekNo}`;
  $$('.week-no-text').forEach((element) => { element.textContent = `WEEK ${weekNo}`; });
  $('#week-title').textContent = data.title;
  $('#week-term').textContent = data.term || '';
  $('#week-question').textContent = data.question;
  document.title = `Week ${Number(weekNo)}｜${data.title}｜資料科學與大數據分析`;

  $('#week-goals').innerHTML = (data.goals || []).map((goal, index) => `
    <div class="card">
      <div class="num">${String(index + 1).padStart(2, '0')}</div>
      <h3>${goal}</h3>
    </div>
  `).join('');

  $('#ai-role').textContent = data.aiRole;
  $('#human-list').innerHTML = (data.human || []).map((item) => `<li>${item}</li>`).join('');
  $('#materials').innerHTML = (data.materials || ['slides', 'worksheet'])
    .map((kind) => materialCard(kind, weekNo))
    .join('');

  const links = [
    ['Google Forms', data.form],
    ['Google Colab', data.colab],
    ['NotebookLM', data.notebooklm],
    ['延伸資源', data.extra]
  ].filter((item) => item[1]);

  const resourceList = $('#external-links');
  if (links.length) {
    resourceList.innerHTML = links.map((item) => `
      <a class="resource-card" href="${item[1]}" target="_blank" rel="noopener noreferrer">
        <h3>${item[0]} ↗</h3>
      </a>
    `).join('');
  } else {
    $('#tools-section').classList.add('hidden');
  }

  const current = Number(weekNo);
  const previous = current > 1 ? String(current - 1).padStart(2, '0') : null;
  const next = current < 18 ? String(current + 1).padStart(2, '0') : null;
  const weekNav = $('#week-nav');

  if (weekNav) {
    weekNav.innerHTML = `
      ${previous ? `<a class="card week-nav-card" href="week.html?w=${previous}"><span class="muted">← PREVIOUS</span><strong>Week ${Number(previous)}｜${COURSE_DATA.weeks[previous].title}</strong></a>` : '<span></span>'}
      ${next ? `<a class="card week-nav-card next" href="week.html?w=${next}"><span class="muted">NEXT →</span><strong>Week ${Number(next)}｜${COURSE_DATA.weeks[next].title}</strong></a>` : ''}
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  fillNav();
  renderHome();
  renderModule();
  renderWeek();
});
