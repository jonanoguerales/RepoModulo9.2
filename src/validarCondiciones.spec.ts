import { ValidacionClave } from "./model";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
} from "./validarCondiciones";

describe("validarCondiciones", () => {
  it("Debería devolver un objeto con esValida: false y un error si la clave no tiene mayúsculas o minúsculas", () => {
    // Arrange
    const palabra: string = "sssa";
    // Act
    const resultado: ValidacionClave = tieneMayusculasYMinusculas(palabra);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    });
  });
  it("Deberia devolver true si la clave contiene mayusculas y minusculas", () => {
    // Arrange
    const palabra: string = "aaaAA";
    // Act
    const resultado: ValidacionClave = tieneMayusculasYMinusculas(palabra);
    // Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
  it("Deberia devolver un objeto con esValida: false y un error si la clave no tiene ningun numero", () => {
    // Arrange
    const palabra: string = "aaaa";
    // Act
    const resultado: ValidacionClave = tieneNumeros(palabra);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener números",
    });
  });
  it("Deberia devolver true si la clave contiene algun numero", () => {
    // Arrange
    const palabra: string = "aaaa12";
    // Act
    const resultado: ValidacionClave = tieneNumeros(palabra);
    // Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
  it("Deberia devolver un objeto con esValida: false y un error si la clave no contiene ningun caracter especial", () => {
    // Arrange
    const palabra: string = "sad";
    // Act
    const resultado: ValidacionClave = tieneCaracteresEspeciales(palabra);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    });
  });
  it("Deberia devolver true si la clave contiene algun caracter especial", () => {
    // Arrange
    const palabra: string = "sad_!";
    // Act
    const resultado: ValidacionClave = tieneCaracteresEspeciales(palabra);
    // Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
  it("Deberia devolver un objeto con esValida: false y un error si la clave no tiene una longitud minima", () => {
    // Arrange
    const palabra: string = "asdas";
    // Act
    const resultado: ValidacionClave = tieneLongitudMinima(palabra);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    });
  });
  it("Deberia devolver true si la clave contiene una longitud minima", () => {
    // Arrange
    const palabra: string = "asdassdasd";
    // Act
    const resultado: ValidacionClave = tieneLongitudMinima(palabra);
    // Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
  it("Deberia devolver un objeto con esValida: false y un error si la clave contiene el nombre del usuario", () => {
    // Arrange
    const palabra: string = "jona";
    const nombreUsuario: string = "jona";
    // Act
    const resultado: ValidacionClave = tieneNombreUsuario(
      nombreUsuario,
      palabra
    );
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    });
  });
  it("Deberia devolver true si la clave no contiene el nombre del usuario", () => {
    // Arrange
    const palabra: string = "asdassdasd";
    const nombreUsuario: string = "jona";
    // Act
    const resultado: ValidacionClave = tieneNombreUsuario(
      nombreUsuario,
      palabra
    );
    // Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
  it("Deberia devolver un objeto con esValida: false y un error si la clave contiene palabras comunes", () => {
    // Arrange
    const palabra: string = "shadow";
    const palabraComun: string = "shadow";
    // Act
    const resultado: ValidacionClave = tieneNombreUsuario(
      palabraComun,
      palabra
    );
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    });
  });
  it("Deberia devolver true si la clave no contiene palabras comunes", () => {
    // Arrange
    const palabra: string = "asdassdasd";
    const palabraComun: string = "shadow";
    // Act
    const resultado: ValidacionClave = tieneNombreUsuario(
      palabraComun,
      palabra
    );
    // Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
});
