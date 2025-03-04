document.addEventListener('DOMContentLoaded', function () {
    
    const ubicacionEmpresa = [40.57511262006383, -3.926513140316583];

    
    const mapa = L.map('mapa').setView(ubicacionEmpresa, 15);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapa);

    
    const marcadorEmpresa = L.marker(ubicacionEmpresa).addTo(mapa)
        .bindPopup('PrintLaserStudio<br>Dirección: Calle Real 33, Torrelodones, Madrid')
        .openPopup();

    
    const origenInput = document.getElementById('origen');
    const calcularRutaBtn = document.getElementById('calcular-ruta');

    calcularRutaBtn.addEventListener('click', function () {
        const origen = origenInput.value;

        if (!origen) {
            alert('Por favor, ingresa tu ubicación.');
            return;
        }

        
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(origen)}`)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    alert('No se pudo encontrar la ubicación. Intenta con una dirección más específica.');
                    return;
                }

                const origenCoords = [data[0].lat, data[0].lon];

                
                const marcadorOrigen = L.marker(origenCoords).addTo(mapa)
                    .bindPopup('Tu ubicación');

                
                const ruta = L.polyline([origenCoords, ubicacionEmpresa], { color: 'blue' }).addTo(mapa);

                
                mapa.fitBounds([origenCoords, ubicacionEmpresa]);
            })
            .catch(error => {
                console.error('Error al calcular la ruta:', error);
                alert('Hubo un error al calcular la ruta. Intenta de nuevo.');
            });
    });
});