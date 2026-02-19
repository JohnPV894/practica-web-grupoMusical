document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-filtros");
  const abrirModal = document.getElementById("boton-filtros");
  const cerrarModal = document.getElementById("cerrar-modal");

  // Abrir modal
  abrirModal.addEventListener("click", () => {
    modal.classList.remove("oculto");
  });

  // Cerrar modal con botón (×)
  cerrarModal.addEventListener("click", () => {
    modal.classList.add("oculto");
  });

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("oculto");
    }
  });
});
