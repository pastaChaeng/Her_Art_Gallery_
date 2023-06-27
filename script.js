document.addEventListener('DOMContentLoaded', (event) => {
    const themeButton = document.getElementById('theme-button');

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
