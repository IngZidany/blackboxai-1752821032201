// Archivo: js/main.js
// Descripción: Script principal para la interactividad del sitio Skillsoft Clone.
// Modulariza aquí cualquier funcionalidad JS adicional para futuras páginas.

// Smooth scrolling para enlaces internos (anclas)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Cierra la barra de alerta superior al hacer clic en la X
document.querySelector('.float-right').addEventListener('click', function() {
    this.parentElement.style.display = 'none';
});

// Efecto de sombra en el header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
}); 