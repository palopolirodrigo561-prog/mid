document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburger');
  const menu = document.querySelector('nav.menu');
  if (!btn || !menu) return;

  const esContenido = document.body.classList.contains('pagina-contenido');
  // celular vertical (pantalla angosta) u horizontal (pantalla baja): menú tipo cajón
  const mqCelular = window.matchMedia('(max-width: 720px), (max-height: 500px)');
  const esCelular = () => mqCelular.matches;

  // fondo oscuro que se toca para cerrar el menú (solo en celular)
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  // un solo lugar que define si el menú está abierto o cerrado
  function setAbierto(abierto){
    menu.classList.toggle('abierto', abierto);
    menu.classList.toggle('oculto', !abierto);
    overlay.classList.toggle('visible', abierto && esCelular());
    btn.setAttribute('aria-expanded', String(abierto));
    document.body.classList.toggle('menu-abierto', abierto);
  }

  // estado inicial: en celular siempre cerrado; en escritorio abierto solo en el inicio
  const estadoInicial = () => setAbierto(!esContenido && !esCelular());
  estadoInicial();

  btn.addEventListener('click', () => {
    setAbierto(!menu.classList.contains('abierto'));
  });

  // cerrar tocando afuera, con Escape, o al elegir un link (en celular)
  overlay.addEventListener('click', () => setAbierto(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setAbierto(false);
  });
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a') && esCelular()) setAbierto(false);
  });

  // al girar el celular o cambiar el tamaño, volver al estado inicial
  mqCelular.addEventListener('change', estadoInicial);
});
