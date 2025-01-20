interface Partida {
  puntuacion: number;
}

export type Estado = "EN_CURSO" | "PARTIDA_PERDIDA" | "PARTIDA_GANADA";

export const partida: Partida = {
  puntuacion: 0,
};
export const MAXIMA_PUNTUACION: number = 7.5;
