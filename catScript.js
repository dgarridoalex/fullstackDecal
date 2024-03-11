const catButton = document.getElementById('catButton');
const catImage = document.getElementById('catImage');
const apiKey = 'live_5nZIWiAue89BVTz4OeH1i19Iuxe1pXIXrrIVmMaq544jKoG3wZ8IiCVL7jFcLxm5';

catButton.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=1', {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
          let imageData = data[0];
            catImage.src = imageData.url;
            catImage.alt = 'Random Cat Image';
        })
        .catch(error => {
            console.error('There was a problem fetching the cat image:', error);
        });
});
