document.getElementById("btnMenu").addEventListener("click", () => {
    document.body.classList.add("sidebar-abierto");
});

document.getElementById("btnCerrar").addEventListener("click", () => {
    document.body.classList.remove("sidebar-abierto");
});
