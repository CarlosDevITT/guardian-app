document.addEventListener('DOMContentLoaded', function() {
    const emergencyButton = document.getElementById('emergencyButton');
    
    emergencyButton.addEventListener('click', function() {
        // Simular o envio da localização do usuário
        const userLocation = 'Latitude: 123, Longitude: 456';

        // Abrir uma tela para receber uma ligação de emergência
        alert(`Sua localização foi enviada: ${userLocation}. Aguarde o atendimento de um profissional.`);
    });
});
