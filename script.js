document.getElementById("btnMenu").addEventListener("click", () => {
    document.body.classList.add("sidebar-abierto");
});

document.getElementById("btnCerrar").addEventListener("click", () => {
    document.body.classList.remove("sidebar-abierto");
});

// Cerrar al hacer clic en cualquier enlace del sidebar
document.querySelectorAll(".sidebar ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("sidebar-abierto");
    });
});

// Cerrar al hacer clic fuera del sidebar (excepto en el botón de menú)
document.addEventListener("click", (e) => {
    const sidebar = document.getElementById("sidebar");
    const btnMenu = document.getElementById("btnMenu");

    const clickDentroSidebar = sidebar.contains(e.target);
    const clickBotonMenu = btnMenu.contains(e.target);

    if (!clickDentroSidebar && !clickBotonMenu) {
        document.body.classList.remove("sidebar-abierto");
    }
});
