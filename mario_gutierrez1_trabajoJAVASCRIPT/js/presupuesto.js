document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('presupuestoForm');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;

        
        if (!/^[A-Za-z]{1,15}$/.test(nombre)) {
            alert('El nombre solo puede contener letras y tener un máximo de 15 caracteres.');
            return;
        }

        
        if (!/^[A-Za-z]{1,40}$/.test(apellidos)) {
            alert('Los apellidos solo pueden contener letras y tener un máximo de 40 caracteres.');
            return;
        }

        
        if (!/^\d{9}$/.test(telefono)) {
            alert('El teléfono solo puede contener números y tener un máximo de 9 dígitos.');
            return;
        }

        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        alert('Formulario enviado correctamente.');
    });
});