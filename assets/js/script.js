function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
    var openFull = document.getElementById('DarkMode');
    openFull.style.display = 'none';

    var exitFull = document.getElementById('LightMode');
    exitFull.style.display = 'block';
  } else {
    setTheme('theme-dark');
    var openFull = document.getElementById('LightMode');
    openFull.style.display = 'none';

    var exitFull = document.getElementById('DarkMode');
    exitFull.style.display = 'block';
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
    var openFull = document.getElementById('DarkMode');
    openFull.style.display = 'none';

    var exitFull = document.getElementById('LightMode');
    exitFull.style.display = 'block';
  } else {
    setTheme('theme-dark');
    var openFull = document.getElementById('LightMode');
    openFull.style.display = 'none';

    var exitFull = document.getElementById('DarkMode');
    exitFull.style.display = 'block';
  }
})();