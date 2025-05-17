<script>
  const btnMenu = document.getElementById("btnMenu");
  const btnCerrar = document.getElementById("btnCerrar");

  btnMenu.addEventListener("click", () => {
    document.body.classList.add("sidebar-abierto");
  });

  btnCerrar.addEventListener("click", () => {
    document.body.classList.remove("sidebar-abierto");
  });
</script>
