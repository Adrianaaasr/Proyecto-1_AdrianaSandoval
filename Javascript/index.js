        // Espera a que el documento esté completamente cargado
        document.addEventListener('DOMContentLoaded', function() {
            // Obtén una referencia al botón
            var button = document.querySelector('button');
            
            // Agrega un evento de clic al botón
            button.addEventListener('click', function() {
                // Acciones a realizar cuando se hace clic en el botón
                alert('¡Botón clickeado!');
            });
        });