//Mostrar puntuacion
import { MAXIMA_PUNTUACION, partida } from './modelo'
import {
  actualizarPuntuacion,
  cartaAleatoria,
  dameNumeroCarta,
  obtenerPuntuacionCarta,
  obtenerUrlCarta,
  sumarPuntuacion
} from './motor'

export const muestraPuntuacion = (): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Tienes ${partida.puntuacion} puntos`;
  }
};

export const gestionarUrlCarta = (carta: number) => {
    const urlCarta = obtenerUrlCarta(carta);
    mostrarCarta(urlCarta);
}
export const dameCarta = (): void => {
    const numeroAleatorio = cartaAleatoria();
    const carta = dameNumeroCarta(numeroAleatorio);
    const puntosCarta = obtenerPuntuacionCarta(carta);
    const puntosSumados = sumarPuntuacion(puntosCarta);
    actualizarPuntuacion(puntosSumados);
    muestraPuntuacion();
    gestionarUrlCarta(carta)
    gestionarPartida();
};
  
export const mostrarCarta = (urlCarta: string): void => {
    const elementoCarta = document.getElementById("carta");
    if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
      elementoCarta.src = urlCarta;
    }
};

export const mostrarMensaje = (mensaje: string) => {
    const elementoTexto = document.getElementById("texto");
    if (elementoTexto) {
      elementoTexto.innerHTML = mensaje;
    }
};
const botonNuevaPartida = document.getElementById("nueva-partida");
const botonDameCarta = document.getElementById("dame-carta");
  
export const desactivarBotones = (): void => {
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
  
export const gestionarPartida = (): void => {
    if (partida.puntuacion > MAXIMA_PUNTUACION) {
      desactivarBotones();
      mostrarMensaje("Has superado la puntuacion total.");
    }
    if (partida.puntuacion === MAXIMA_PUNTUACION) {
      desactivarBotones();
      mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
    }
};
  
export const mensajeSiMePlanto = (): string => {
    let mensaje = "";
    if (partida.puntuacion < 4) {
      mensaje = "Has sido muy conservador";
    }
    if (partida.puntuacion === 5) {
      mensaje = "Te ha entrado el canguelo eh?";
    }
    if (partida.puntuacion === 6 || partida.puntuacion === 7) {
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
export const mePlanto = (): void => {
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

export const activarBotones = (): void => {
    if (
      botonDameCarta instanceof HTMLButtonElement &&
      botonPlantarse instanceof HTMLButtonElement &&
      botonNuevaPartida instanceof HTMLButtonElement
    ) {
      botonDameCarta.disabled = false;
      botonPlantarse.disabled = false;
      botonNuevaPartida.style.display = "none";
      mostrarMensaje('')
    }
};
  
export const mostrarCataBocaAbajo = (): void => {
    const url =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    mostrarCarta(url);
  };
  
  export const reiniciarPuntuacion = () => {
    partida.puntuacion = 0;
    muestraPuntuacion();
};
  
export const nuevaPartida = (): void => {
    reiniciarPuntuacion();
    estadoBotonMostrarCartaSiHubieraSeguido(false);
    activarBotones();
    mostrarCataBocaAbajo();
};
  
// Mostrar carta si no se hubiera plantado
export const mensajeSiHubierasSeguido = (): string => {
    let mensaje = "";
    mensaje =
      partida.puntuacion > MAXIMA_PUNTUACION
        ? "Hubieras perdido si pedias otra carta."
        : "Hubieras seguido!!";
  
    if (partida.puntuacion === MAXIMA_PUNTUACION) {
      mensaje = "NOO!! te hubieras arriesgado!";
    }
    return mensaje;
};
  
export const gestionarAccionSiHubieraSeguido = (): void => {
    dameCarta();
    mostrarMensaje(mensajeSiHubierasSeguido());
    estadoBotonMostrarCartaSiHubieraSeguido(false);
  };