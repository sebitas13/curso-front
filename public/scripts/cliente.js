"use strict";

const formulario = document.getElementById("Formulario");
const radios = document.querySelectorAll('input[name="tipo"]');
const documento = document.getElementById("DocumentoTxt");
const terminosChk = document.getElementById("terminosChk");
const btnAceptar = document.getElementById("btnAceptar");
const btnCancelar = document.getElementById("btnCancelar");
const nombres = document.getElementById("NombresTxt");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    documento.placeholder = `Ingrese su ${radio.value}`;
  });
});

terminosChk.addEventListener("change", () => {
  btnAceptar.disabled = !terminosChk.checked;
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const nivelSelect = document.getElementById("NivelTxt");

  if (nivelSelect.value === "") {
    alert("Seleccione un nivel de educación");
  } else {
    localStorage.setItem("usuario", nombres.value);

    const mensaje = document.getElementById("Mensaje");
    mensaje.textContent = "Validando informacion...";
    setTimeout(() => {
      alert(`Bienvenido ${nombres.value} al sistema.`);
      mensaje.textContent = "";
    }, 2000);
  }
});

btnCancelar.addEventListener("click", () => {
  window.location.href = "/index.html";
});
