document.addEventListener('DOMContentLoaded', function () {
    
    const imagenes = [
        { src: '../img/galeria/imagen1.jpg', texto: 'Nuestra Maquina' },
        { src: '../img/galeria/imagen2.jpg', texto: 'Productos Personalizados' },
        { src: '../img/galeria/imagen3.jpg', texto: 'Restratos y fotos en madera' },
        { src: '../img/galeria/imagen4.jpg', texto: 'Llaveros Personalizados' },
        { src: '../img/galeria/imagen5.jpg', texto: 'Posavasos Personalizados' },
        { src: '../img/galeria/imagen6.jpg', texto: 'Llaveros para Empresas' }
    ];


    
    const galeriaContainer = document.getElementById('imagenes-galeria');

    
    imagenes.forEach(imagen => {
        const imagenElement = document.createElement('div');
        imagenElement.className = 'imagen-container';
        imagenElement.innerHTML = `
            <img src="${imagen.src}" alt="Grabado láser en madera" class="imagen-galeria">
            <p class="texto-imagen">${imagen.texto}</p>
        `;
        galeriaContainer.appendChild(imagenElement);
    });
});