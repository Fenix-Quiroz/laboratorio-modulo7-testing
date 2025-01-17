//Mostrar puntuacion
import {
  dameCarta,
  gestionarAccionSiHubieraSeguido,
  muestraPuntuacion,
  nuevaPartida,
} from "./ui";
const botonNuevaPartida = document.getElementById("nueva-partida");

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const botonDameCarta = document.getElementById("dame-carta");
if (botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", dameCarta);
}

if (botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}
const botonMostrarCartaSiHubieraSeguido = document.getElementById(
  "boton-supuesta-siguiente-carta"
);
if (botonMostrarCartaSiHubieraSeguido instanceof HTMLButtonElement) {
  botonMostrarCartaSiHubieraSeguido.addEventListener(
    "click",
    gestionarAccionSiHubieraSeguido
  );
}
