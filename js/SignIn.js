document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const crp = document.getElementById('icrp').value;
        const senha = document.getElementById('isenha').value;

        // Verifica se as credenciais são válidas
        if (crp === 'adm123' && senha === '1234') {
            // Redireciona para a tela home.html
            window.location.href = 'frontend/home.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });
    
});document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const crp = document.getElementById('icrp').value;
        const senha = document.getElementById('isenha').value;

        // Verifica se as credenciais são válidas
        if (crp === 'adm123' && senha === '1234') {
            // Redireciona para a tela home.html
            window.location.href = 'frontend/home.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });
});