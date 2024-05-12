const container = document.getElementById('container')

function showImage(container){
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(respone => respone.json())
    .then(data => {
        const image = data[0];
        container.innerHTML = `<img src="${image.url}" alt="Gato Imagen"/>`
        setTimeout(() => {
            showImage(container);
        }, 4000)
    })
    .catch(error => {
        console.error('Error al obtener la imagen:', error)
        setTimeout(() => {
            showImage(container);
        }, 9000)
    })
}

showImage(container)

