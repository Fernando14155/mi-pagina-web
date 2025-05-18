document.getElementById("btnMenu").addEventListener("click", () => {
  document.body.classList.add("sidebar-abierto");
});

document.getElementById("btnCerrar").addEventListener("click", () => {
  document.body.classList.remove("sidebar-abierto");
});

// Cierra si haces clic en cualquier enlace
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("sidebar-abierto");
  });
});
