//Mostrar puntuacion
let puntuacion: number = 0;
const MAXIMA_PUNTUACION: number = 7.5;
const botonNuevaPartida = document.getElementById("nueva-partida");
const muestraPuntuacion = (): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Tienes ${puntuacion} puntos`;
  }
};
document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const botonMostrarCartaSiHubieraSeguido = document.getElementById(
  "boton-supuesta-siguiente-carta"
);
//Pedir carta
const cartaAleatoria = (): number => {
  let carta: number = Math.floor(Math.random() * 11);
  return carta;
};

const dameNumeroCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio === 0) {
    return numeroAleatorio + 1;
  }
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }
  return numeroAleatorio;
};

const dameCarta = (): void => {
  const numeroAleatorio = cartaAleatoria();
  const CARTA = dameNumeroCarta(numeroAleatorio);
  sumarPuntuacion(CARTA);
  cartas(CARTA);
  gameOver();
  mensajeGanaste();
};
const botonDameCarta = document.getElementById("dame-carta");
botonDameCarta?.addEventListener("click", dameCarta);

//Mostrar carta

const cartas = (carta: number): void => {
  let urlCarta = "";
  let alt = "";
  switch (carta) {
    case 1:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      alt = "Carta As de copas";
      break;
    case 2:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      alt = "Carta 2 de copas";
      break;
    case 3:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      alt = "Carta 3 de copas";
      break;
    case 4:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      alt = "Carta 4 de copas";
      break;
    case 5:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      alt = "Carta 5 de copas";
      break;
    case 6:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      alt = "Carta 6 de copas";
      break;
    case 7:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      alt = "Carta 7 de copas";
      break;
    case 10:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      alt = "Carta 10 de copas";
      break;
    case 11:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      alt = "Carta 11 de copas";
      break;
    case 12:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      alt = "Carta 12 de copas";
      break;
    default:
      console.log("Error");
      break;
  }
  mostrarCarta(urlCarta, alt);
};

const mostrarCarta = (urlCarta: string, alt: string): void => {
  const elementoCarta = document.getElementById("carta");
  if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
    elementoCarta.src = urlCarta;
    elementoCarta.alt = alt;
  }
};

//Sumar puntuacion
const sumarPuntuacion = (carta: number): void => {
  puntuacion = carta >= 10 ? puntuacion + 0.5 : puntuacion + carta;
  muestraPuntuacion();
};

//Game Over
const elementoTexto = document.getElementById("texto");
const mostrarMensaje = (mensaje: string) => {
  if (elementoTexto) {
    elementoTexto.innerHTML = mensaje;
  }
};
const desactivarBotones = (): void => {
  if (
    botonDameCarta instanceof HTMLButtonElement &&
    botonPlantarse instanceof HTMLButtonElement &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonDameCarta.disabled = true;
    botonPlantarse.disabled = true;
    botonNuevaPartida.style.display = "block";
  }
};
const mensajeGanaste = (): void => {
  if (puntuacion === MAXIMA_PUNTUACION) {
    desactivarBotones();
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
  }
};
const gameOver = (): void => {
  if (puntuacion > MAXIMA_PUNTUACION) {
    desactivarBotones();
    mostrarMensaje("Game Over");
  }
};
//Me planto
const mensajePlantarse = (): string => {
  let mensajeSiSePlanta = "";
  if (puntuacion < 4) {
    mensajeSiSePlanta = "Has sido muy conservador";
  }
  if (puntuacion === 5) {
    mensajeSiSePlanta = "Te ha entrado el canguelo eh?";
  }
  if (puntuacion === 6 || puntuacion === 7) {
    mensajeSiSePlanta = "Casi casi...";
  }

  return mensajeSiSePlanta;
};
const plantarse = (): void => {
  if (botonMostrarCartaSiHubieraSeguido instanceof HTMLButtonElement) {
    botonMostrarCartaSiHubieraSeguido.style.display = "block";
  }
  mostrarMensaje(mensajePlantarse());
};

const botonPlantarse = document.getElementById("plantarse");

if (botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", () => {
    desactivarBotones();
    plantarse();
  });
}

const activarBotones = (): void => {
  if (
    elementoTexto &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonPlantarse instanceof HTMLButtonElement &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonDameCarta.disabled = false;
    botonPlantarse.disabled = false;
    botonNuevaPartida.style.display = "none";
    elementoTexto.innerHTML = "";
  }
};
//Nueva partida
const mostrarCataBocaAbajo = (): void => {
  const url =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  const alt = "Carta boca abajo";
  mostrarCarta(url, alt);
};
const nuevaPartida = (): void => {
  if (botonMostrarCartaSiHubieraSeguido instanceof HTMLButtonElement) {
    botonMostrarCartaSiHubieraSeguido.style.display = "none";
    botonMostrarCartaSiHubieraSeguido.disabled = false;
  }
  puntuacion = 0;
  muestraPuntuacion();
  activarBotones();
  mostrarCataBocaAbajo();
};
botonNuevaPartida?.addEventListener("click", nuevaPartida);

// Mostrar carta si no se hubiera plantado
const mensajeSiHubierasSeguido = (): string => {
  let mensaje = "";
  mensaje =
    puntuacion > MAXIMA_PUNTUACION
      ? "Hubieras perdido si pedias otra carta."
      : "Hubieras seguido!!";

  if (puntuacion === MAXIMA_PUNTUACION) {
    mensaje = "NOO!! te hubieras arriesgado!";
  }
  return mensaje;
};

const mostrarCartaSiHubieraseguido = (): void => {
  dameCarta();
  if (botonMostrarCartaSiHubieraSeguido instanceof HTMLButtonElement) {
    botonMostrarCartaSiHubieraSeguido.disabled = true;
  }
  mostrarMensaje(mensajeSiHubierasSeguido());
};
botonMostrarCartaSiHubieraSeguido?.addEventListener(
  "click",
  mostrarCartaSiHubieraseguido
);
