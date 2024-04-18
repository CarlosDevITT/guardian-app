document.addEventListener('DOMContentLoaded', function() {
    // Referência para o container do feed
    const feedContainer = document.querySelector('.feed');

    // Exemplo de conteúdo do feed (pode adicionar mais conforme necessário)
    const feedItems = [
        {
            type: 'text',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula dui in lacus lacinia gravida.'
        },
        {
            type: 'image',
            content: 'https://via.placeholder.com/500x300'
        },
        {
            type: 'video',
            content: 'https://www.example.com/video.mp4'
        },
        // Adicione mais itens de feed conforme necessário
    ];

    // Função para criar e adicionar itens de feed ao container
    function addFeedItems() {
        feedItems.forEach(item => {
            const feedItem = document.createElement('div');
            feedItem.classList.add('feed-item');

            if (item.type === 'text') {
                feedItem.innerHTML = `<p>${item.content}</p>`;
            } else if (item.type === 'image') {
                feedItem.innerHTML = `<img src="${item.content}" alt="Imagem do Feed">`;
            } else if (item.type === 'video') {
                feedItem.innerHTML = `<video controls><source src="${item.content}" type="video/mp4"></video>`;
            }

            feedContainer.appendChild(feedItem);
        });
    }

    // Adicionar os itens de feed ao carregar a página
    addFeedItems();
});
