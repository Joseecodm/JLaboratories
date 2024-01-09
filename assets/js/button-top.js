
 <!-- Volver arriba boton -->

    
        document.addEventListener('DOMContentLoaded', function () {
        var scrollToTopButton = document.getElementById('scrollToTopBtn');

        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        };
            scrollToTopButton.addEventListener('click', function () {
            document.body.scrollTop = 0; // Para Safari
            document.documentElement.scrollTop = 0; // Para otros navegadores
            });
        });