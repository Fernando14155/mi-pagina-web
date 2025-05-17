const btnMenu = document.getElementById("btnMenu");
const btnCerrar = document.getElementById("btnCerrar");
const sidebar = document.getElementById("sidebar");

// Abrir sidebar
btnMenu.addEventListener("click", () => {
  document.body.classList.add("sidebar-abierto");
  // Bloquear scroll cuando está abierto (solo en móvil)
  document.body.style.overflow = "hidden";
});

// Cerrar sidebar con botón
btnCerrar.addEventListener("click", () => {
  cerrarSidebar();
});

// Cerrar sidebar al hacer click fuera del sidebar (en el main o cualquier parte fuera del menú)
document.addEventListener("click", (e) => {
  // Si el sidebar está abierto, y el click NO está dentro del sidebar ni en el botón menú, cerramos
  if (
    document.body.classList.contains("sidebar-abierto") &&
    !sidebar.contains(e.target) &&
    !btnMenu.contains(e.target)
  ) {
    cerrarSidebar();
  }
});

function cerrarSidebar() {
  document.body.classList.remove("sidebar-abierto");
  // Quitar bloqueo de scroll
  document.body.style.overflow = "";
}
