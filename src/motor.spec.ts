import { vi } from "vitest";
import { partida, Estado, MAXIMA_PUNTUACION } from "./modelo";
import {
  gestionarEstado,
  dameNumeroCarta,
  cartaAleatoria,
  obtenerPuntuacionCarta,
} from "./motor";

describe("gestionarEstado", () => {
  it("Debe devolver PARTIDA_PERDIDA  si la puntuacion supera la MAXIMA_PUNTUACION", () => {
    //Arrange
    const resultadoEsperado: Estado = "PARTIDA_PERDIDA";
    const puntuacion: number = 8;
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacion);
    //Act
    const resultado = gestionarEstado();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Deberia devolver PARTIDA_GANADA si la puntuacion es igual a MAXIMA_PUNTUACION", () => {
    //Arrange
    const resultadoEsperado: Estado = "PARTIDA_GANADA";
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(MAXIMA_PUNTUACION);
    //Act
    const resultado = gestionarEstado();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("dameNumeroCarta", () => {
  //Para seguir practicando vamos a añadir dos casos más:

  //Habrás tenido que generar una función que genere un número aleatorio entre 0 y 10 y en
  // el caso de que este número sea mayor que 7, sume 2 al resultado final.
  // Para asegurarnos de que la función se comporta como se espera,
  // se van a realizar sus pruebas unitarias correspondientes.
  it("Debe sumar +2 si el valor de cartaAleatoria es igual a 8", () => {
    //Arrange
    const resultadoEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.8);
    //Act
    const resultado = dameNumeroCarta(cartaAleatoria());
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
    
  //En el caso de que el jugador haya obtenido una carta, debemos de haber creado
  // una función que devuelva el valor de esa carta. Al igual que en el caso anterior,
  // se van a realizar pruebas unitarias para comprobar que la función se comporta como
  // se espera en diferentes situaciones.

  it("Si la cartaAleatoria es 3 deberia devolver el valor 3", () => {
    //Arrange
    const resultadoEsperado: number = 3;
    vi.spyOn(global.Math, "random").mockReturnValue(0.3);
    //Act
    const resultado = obtenerPuntuacionCarta(cartaAleatoria());
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Si la cartaAleatoria es 7 deberia devolver el valor 7", () => {
    //Arrange
    const resultadoEsperado: number = 7;
    vi.spyOn(global.Math, "random").mockReturnValue(0.7);
    //Act
    const resultado = obtenerPuntuacionCarta(cartaAleatoria());
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Si la cartaAleatoria es >= 10 deberia devolver el valor 0.5", () => {
    //Arrange
    const resultadoEsperado: number = 0.5;
    vi.spyOn(global.Math, "random").mockReturnValue(0.99);
    //Act
    const resultado = obtenerPuntuacionCarta(cartaAleatoria());
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
