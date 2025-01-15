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

//Pedir carta
const cartaAleatoria = (): number => {
  let carta: number = Math.floor(Math.random() * 11);
  return carta;
};

const dameNumeroCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio === 0) {
    return numeroAleatorio + 1;
  }
  if (numeroAleatorio === 8) {
    return numeroAleatorio + 2;
  }
  if (numeroAleatorio === 9) {
    return numeroAleatorio + 1;
  }
  return numeroAleatorio;
};

const dameCarta = (): void => {
  const numeroAleatorio = cartaAleatoria();
  const carta = dameNumeroCarta(numeroAleatorio);
  const puntosCarta = obtenerPuntuacionCarta(carta);
  const puntosSumados = sumarPuntuacion(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion();
  const urlCarta = obtenerUrlCarta(carta);
  mostrarCarta(urlCarta);
  gestionarPartida();
};

const botonDameCarta = document.getElementById("dame-carta");
if (botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", dameCarta);
}

//Mostrar carta

const obtenerUrlCarta = (carta: number): string => {
  let urlCarta = "";
  switch (carta) {
    case 1:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      urlCarta =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      console.log("Error");
      break;
  }
  return urlCarta;
};

const mostrarCarta = (urlCarta: string): void => {
  const elementoCarta = document.getElementById("carta");
  if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
    elementoCarta.src = urlCarta;
  }
};

const obtenerPuntuacionCarta = (carta: number): number => {
  return carta > 7 ? 0.5 : carta;
};

const sumarPuntuacion = (puntosCarta: number): number => {
  return puntosCarta + puntuacion;
};

const actualizarPuntuacion = (puntosAActuilizar: number) => {
  puntuacion = puntosAActuilizar;
};

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

const gestionarPartida = (): void => {
  if (puntuacion > MAXIMA_PUNTUACION) {
    desactivarBotones();
    mostrarMensaje("Has superado la puntuacion total.");
  }
  if (puntuacion === MAXIMA_PUNTUACION) {
    desactivarBotones();
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
  }
};
//Me planto
const mensajeSiMePlanto = (): string => {
  let mensaje = "";
  if (puntuacion < 4) {
    mensaje = "Has sido muy conservador";
  }
  if (puntuacion === 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  }
  if (puntuacion === 6 || puntuacion === 7) {
    mensaje = "Casi casi...";
  }

  return mensaje;
};

const botonMostrarCartaSiHubieraSeguido = document.getElementById(
  "boton-supuesta-siguiente-carta"
);
const estadoBotonMostrarCartaSiHubieraSeguido = (estado: boolean): void => {
  if (
    estado &&
    botonMostrarCartaSiHubieraSeguido instanceof HTMLButtonElement
  ) {
    botonMostrarCartaSiHubieraSeguido.style.display = "block";
  }
  if (
    !estado &&
    botonMostrarCartaSiHubieraSeguido instanceof HTMLButtonElement
  ) {
    botonMostrarCartaSiHubieraSeguido.style.display = "none";
  }
};

const mePlanto = (): void => {
  estadoBotonMostrarCartaSiHubieraSeguido(true);
  mostrarMensaje(mensajeSiMePlanto());
};

const botonPlantarse = document.getElementById("plantarse");

if (botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", () => {
    desactivarBotones();
    mePlanto();
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
const mostrarCataBocaAbajo = (): void => {
  const url =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  mostrarCarta(url);
};

const reiniciarPuntuacion = () => {
  puntuacion = 0;
  muestraPuntuacion();
};

//Nueva partida
const nuevaPartida = (): void => {
  reiniciarPuntuacion();
  estadoBotonMostrarCartaSiHubieraSeguido(false);
  activarBotones();
  mostrarCataBocaAbajo();
};
if (botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}

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

const gestionarAccionSiHubieraSeguido = (): void => {
  dameCarta();
  mostrarMensaje(mensajeSiHubierasSeguido());
  estadoBotonMostrarCartaSiHubieraSeguido(false);
};

if (botonMostrarCartaSiHubieraSeguido instanceof HTMLButtonElement) {
  botonMostrarCartaSiHubieraSeguido.addEventListener(
    "click",
    gestionarAccionSiHubieraSeguido
  );
}
