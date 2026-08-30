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

function materialMeta(kind, weekNo) {
  const base = `../materials/week${weekNo}/`;

  return {
    slides: {
      title: '上課投影片',
      format: 'PowerPoint（PPTX）',
      path: `${base}slides.pptx`,
      label: '線上開啟 PowerPoint ↗',
      office: true
    },
    worksheet: {
      title: '學習單',
      format: 'Word（DOCX）',
      path: `${base}worksheet.docx`,
      label: '線上開啟 Word 學習單 ↗',
      office: true
    },
    plus: {
      title: 'Plus｜AI 視覺補充教材',
      format: 'PDF',
      path: `${base}plus.pdf`,
      label: '開啟 Plus 補充教材 ↗',
      office: false
    },
    data: {
      title: '練習資料',
      format: 'CSV',
      path: `${base}data.csv`,
      label: '開啟練習資料 ↗',
      office: false
    }
  }[kind];
}

function materialCard(kind, weekNo) {
  const meta = materialMeta(kind, weekNo);
  if (!meta) return '';

  const href = meta.office ? officeViewerUrl(meta.path) : meta.path;

  return `
    <div class="resource-card" data-material-kind="${kind}">
      <h3>${meta.title}</h3>
      <p class="muted">${meta.format}</p>
      <div class="actions">
        <a class="btn secondary"
           href="${href}"
           target="_blank"
           rel="noopener noreferrer"
           data-source-path="${meta.path}">${meta.label}</a>
      </div>
    </div>
  `;
}

async function updateMaterialAvailability() {
  const cards = $$('#materials .resource-card');

  await Promise.all(cards.map(async (card) => {
    const link = card.querySelector('a[data-source-path]');
    if (!link) return;

    const sourcePath = link.dataset.sourcePath;
    try {
      const response = await fetch(sourcePath, { method: 'HEAD', cache: 'no-store' });
      if (!response.ok) throw new Error('File not found');
    } catch (error) {
      link.removeAttribute('href');
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.setAttribute('aria-disabled', 'true');
      link.textContent = '尚無補充';
      link.style.opacity = '0.55';
      link.style.cursor = 'default';
      link.style.pointerEvents = 'none';
    }
  }));
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
  const fixedMaterials = ['slides', 'worksheet', 'plus', 'data'];
  $('#materials').innerHTML = fixedMaterials
    .map((kind) => materialCard(kind, weekNo))
    .join('');

  updateMaterialAvailability();

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
