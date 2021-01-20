const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', function() {
    if(this.checked) {
        transition();
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        transition();
        document.documentElement.setAttribute('theme', 'light');
    }
})

let transition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 500);
};

window.location.replace("#");

if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}
