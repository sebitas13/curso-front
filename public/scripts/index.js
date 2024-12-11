window.addEventListener("load", () => {
  const usuario = document.getElementById("Bienvenido");

  const data = localStorage.getItem("usuario") || "usuario";
  usuario.textContent = `Bienvenido ${data}`;
});
