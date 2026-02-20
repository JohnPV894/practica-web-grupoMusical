/* Menu Hamburgesa */

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.nav');

  // Abrir/cerrar menú al hacer click en el hamburguesa
  hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Cerrar menú al hacer click en cualquier enlace
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburgerMenu.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // Cerrar menú al hacer click fuera de él
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = hamburgerMenu.contains(event.target) || nav.contains(event.target);
    
    if (!isClickInsideMenu && nav.classList.contains('active')) {
      hamburgerMenu.classList.remove('active');
      nav.classList.remove('active');
    }
  });

  // Cerrar menú al cambiar el tamaño de la ventana
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      hamburgerMenu.classList.remove('active');
      nav.classList.remove('active');
    }
  });
});
