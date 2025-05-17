const btnMenu = document.getElementById("btnMenu");
const sidebar = document.getElementById("sidebar");
const btnCerrar = document.getElementById("btnCerrar");

btnMenu.addEventListener("click", () => {
  sidebar.classList.add("abierto");
});

btnCerrar.addEventListener("click", () => {
  sidebar.classList.remove("abierto");
});
