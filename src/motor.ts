import { partida, Estado, MAXIMA_PUNTUACION } from "./modelo";
//Pedir carta
export const cartaAleatoria = (): number => {
  let carta: number = Math.floor(Math.random() * 11);
  return carta;
};

export const dameNumeroCarta = (numeroAleatorio: number): number => {
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
export const gestionarEstado = (): Estado => {
  if (partida.puntuacion > MAXIMA_PUNTUACION) {
    return "PARTIDA_PERDIDA";
  }
  if (partida.puntuacion === MAXIMA_PUNTUACION) {
    return "PARTIDA_GANADA";
  }
  return "EN_CURSO";
};
export const obtenerUrlCarta = (carta: number): string => {
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

export const obtenerPuntuacionCarta = (carta: number): number => {
  return carta > 7 ? 0.5 : carta;
};

export const sumarPuntuacion = (puntosCarta: number): number => {
  return puntosCarta + partida.puntuacion;
};

export const actualizarPuntuacion = (puntosAActuilizar: number) => {
  partida.puntuacion = puntosAActuilizar;
};
