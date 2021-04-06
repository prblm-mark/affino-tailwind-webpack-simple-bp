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
});
