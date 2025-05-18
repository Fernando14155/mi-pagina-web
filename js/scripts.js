document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleSidebarBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function openDrawer() {
    sidebar.classList.add('open');
    overlay.classList.remove('hidden');
    sidebar.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    sidebar.classList.remove('open');
    overlay.classList.add('hidden');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  toggleBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Cerrar drawer si clicas en el overlay
  overlay.addEventListener('click', closeDrawer);

  // También cerrar con Escape para accesibilidad
  document.addEventListener('keydown', e => {
    if (e.key === "Escape" && sidebar.classList.contains('open')) {
      closeDrawer();
    }
  });

  console.log("Drawer listo y funcional.");
});
