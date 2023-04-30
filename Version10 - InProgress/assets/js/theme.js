/* Used to switch the theme using a toggle button */
// const toggleButton = document.querySelector('.toggle-button');
// toggleButton.addEventListener('change', toggleTheme, false);

window.onload = function() {
  useTheme('dark');
};

const theme = {
  dark: {
    '--primary-background-color': '#000013',
    '--secondary-background-color': '#ffffff',
    '--primary-text-color': '#ffffff',
    '--primary-color': '#325b97',
    '--secondary-color': '#9cafeb',
    '--font-color': '#e1e1ff',
    '--bg-color': '#000013',
    '--heading-color': '#818cab'
  },
  light: {
    '--primary-background-color': '#ffffff',
    '--secondary-background-color': '#ffffff',
    '--primary-text-color': '#000013',
    '--primary-color': '#0d0b52',
    '--secondary-color': '#3458b9',
    '--font-color': '#424242',
    '--bg-color': '#ffffff',
    '--heading-color': '#292922'
  }
};

function toggleTheme(e) {
  if (e.target.checked) {
    useTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    useTheme('light');
    localStorage.setItem('theme', 'light');
  }
}

function useTheme(themeChoice) {
  document.documentElement.style.setProperty('--primary-background-color', theme[themeChoice]['--primary-background-color']);
  document.documentElement.style.setProperty('--secondary-background-color', theme[themeChoice]['--secondary-background-color']);
  document.documentElement.style.setProperty('--primary-text-color', theme[themeChoice]['--primary-text-color']);
  document.documentElement.style.setProperty('--primary-color', theme[themeChoice]['--primary-color']);
  document.documentElement.style.setProperty('--secondary-color',theme[themeChoice]['--secondary-color']);
  document.documentElement.style.setProperty('--font-color', theme[themeChoice]['--font-color']);
  document.documentElement.style.setProperty('--bg-color',theme[themeChoice]['--bg-color']);
  document.documentElement.style.setProperty('--heading-color',theme[themeChoice]['--heading-color']);
}

const preferredTheme = localStorage.getItem('theme');
if (preferredTheme === 'dark') {
  useTheme('dark');
  /* Used to switch the theme using a toggle button */
  // toggleButton.checked = true;
} else {
  useTheme('light');
  /* Used to switch the theme using a toggle button */
  // toggleButton.checked = false;
}

/**
 * Blog (Currently used only for blog but can be adapted for whole website)
 */
const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})
