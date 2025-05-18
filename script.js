// Abrir menú
document.getElementById("btnMenu").addEventListener("click", () => {
  document.body.classList.add("sidebar-abierto");
});

// Cerrar menú
document.getElementById("btnCerrar").addEventListener("click", () => {
  document.body.classList.remove("sidebar-abierto");
});

// Cerrar menú si se hace clic en cualquier enlace
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("sidebar-abierto");
  });
});
