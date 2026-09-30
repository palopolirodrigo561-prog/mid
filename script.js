document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburger');
  const menu = document.querySelector('nav.menu');
  if (!btn || !menu) return;

  // en las páginas de contenido el menú arranca oculto
  if (document.body.classList.contains('pagina-contenido')){
    menu.classList.add('oculto');
  }

  btn.addEventListener('click', () => {
    menu.classList.toggle('oculto');
    menu.classList.toggle('abierto');
  });
});
