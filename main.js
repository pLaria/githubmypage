const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

window.addEventListener('load',() =>{
    this.document.getElementById('loader').classList.toggle('loader2')
})
// Agrega desplazamiento suave cuando se hace clic en un enlace del menú
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Previene el comportamiento predeterminado

        const targetId = this.getAttribute('href'); // Obtiene el ID del destino
        const targetSection = document.querySelector(targetId); // Busca la sección con ese ID

        // Realiza el desplazamiento suave
        window.scrollTo({
            top: targetSection.offsetTop, // Desplaza hacia la posición de la sección
            behavior: 'smooth' // Animación suave
        });

        // Cierra el menú de hamburguesa después del clic
        var menu = document.getElementById("menu");
        menu.classList.remove("show");
    });
});
