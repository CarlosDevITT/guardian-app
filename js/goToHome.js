document.addEventListener('DOMContentLoaded', function() {
    const goToHomeButton = document.getElementById('goToHomeButton');
    goToHomeButton.addEventListener('click', function() {
        window.location.href = '../frontend/home.html'; // Altere 'home.html' para o caminho da sua página home
    });
});
