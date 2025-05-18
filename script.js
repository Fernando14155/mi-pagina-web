document.getElementById("btnMenu").addEventListener("click", () => {
  document.body.classList.add("sidebar-abierto");
});

document.getElementById("btnCerrar").addEventListener("click", () => {
  document.body.classList.remove("sidebar-abierto");
});

// Filtro de búsqueda
document.getElementById("busqueda").addEventListener("keyup", function () {
  const filtro = this.value.toLowerCase();
  const items = document.querySelectorAll("#menuItems li");

  items.forEach((item) => {
    const texto = item.textContent.toLowerCase();
    item.style.display = texto.includes(filtro) ? "block" : "none";
  });
});

// Cierra si haces clic en cualquier enlace
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("sidebar-abierto");
  });
});
