import './styles.css';

// Dark Mode
function setMode() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function switchMode(e) {
  e.stopPropagation();
  const mode = e.currentTarget;
  if (mode.dataset.mode === 'light') {
    mode.dataset.mode = 'dark';
    localStorage.theme = 'dark';
    setMode();
  } else {
    mode.dataset.mode = 'light';
    localStorage.theme = 'light';
    setMode();
  }
}

// Set Breadcrumb
function setBreadcrumbSection() {
  const breadcrumb = document.querySelector('#breadcrumb');
  const { section } = document.body.dataset;
  if (!section) {
    breadcrumb.previousElementSibling.classList.add('hidden');
  }
  breadcrumb.textContent = section;
}

// Expand/collapse accordions
function expandTest(e) {
  const section = e.target.closest('div').parentElement;
  const panels = Array.from(section.children);
  const sectionStatus = section.getAttribute('x-data');
  if (sectionStatus === '{ expanded: false }') {
    panels.forEach((panel) => {
      if (panel.hasAttribute('x-data')) {
        panel.setAttribute('x-data', '{ selected: true }');
      }
    });
    section.setAttribute('x-data', '{ expanded: true }');
  } else {
    panels.forEach((panel) => {
      if (panel.hasAttribute('x-data')) {
        panel.setAttribute('x-data', '{ selected: false }');
      }
    });
    section.setAttribute('x-data', '{ expanded: false }');
  }
}

// TODO: BREAK OUT IN TO SMALLER FUNCTIONS
// CREATE FUNCTION FOR INTERCATION(CLICK) RESIZE FOR MORE BUTTONS
// LIMIT RESIZE CALLS
function expandResize() {
  const allPanels = document.querySelectorAll('[x-ref="panel"]');
  allPanels.forEach((panel) => {
    const panelStatus = panel.parentElement.getAttribute('x-data');
    if (panelStatus === '{ selected: true }') {
      panel.style.setProperty('max-height', `${panel.scrollHeight}px`);
    }
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  // Set theme mode to localStorage
  localStorage.setItem('theme', 'light');

  // Set theme mode to document
  setMode();

  // Get mode toggle and add
  const modeToggle = document.querySelector('#mode');
  modeToggle.addEventListener('click', switchMode);

  // Set breadcrumb name
  setBreadcrumbSection();

  // Expand/collapse all
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach((accordion) => {
    accordion.addEventListener('click', (e) => expandTest(e));
  });

  // Resize panels based on inner interactions
  const moreBtns = document.querySelectorAll('.more');
  moreBtns.forEach((moreBtn) => {
    moreBtn.addEventListener('click', (e) => setTimeout(() => { expandResize(); }, 100));
  });
});

window.addEventListener('resize', (event) => {
  expandResize();
});
