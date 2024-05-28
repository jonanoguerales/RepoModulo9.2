import { ValidacionClave } from "./model";
import { separaClave } from "./validar.consiciones.helper";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("La clave es requerida");
  }
  const tieneMayuscula = separaClave(clave).some(
    (letra) => letra === letra.toUpperCase() && letra !== letra.toLowerCase()
  );
  console.log(tieneMayuscula);
  const tieneMinuscula = clave
    .split("")
    .some(
      (letra) => letra === letra.toLowerCase() && letra !== letra.toUpperCase()
    );
  console.log(tieneMinuscula);
  if (!tieneMayuscula || !tieneMinuscula) {
    console.log("no tiene mayuscula ni minuscula");
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  }

  return {
    esValida: true,
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  const contieneNumero = separaClave(clave).some((numero) => /\d/.test(numero));
  if (!contieneNumero) {
    return {
      esValida: false,
      error: "La clave debe de tener números",
    };
  }
  return {
    esValida: true,
  };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const contieneCaracterEspecial = separaClave(clave).some((caracterEspecial) =>
    /[^a-zA-Z0-9]/.test(caracterEspecial)
  );
  console.log(contieneCaracterEspecial);
  if (!contieneCaracterEspecial) {
    console.log("no tiene caracteres especiales");
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
  }
  return {
    esValida: true,
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  const tieneLongitud = clave.length >= 8;
  console.log(tieneLongitud);
  if (!tieneLongitud) {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }
  return {
    esValida: true,
  };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const contieneNombreUsuario = clave.includes(nombreUsuario);
  console.log(contieneNombreUsuario);
  if (contieneNombreUsuario) {
    console.log("contiene el nombre de usuario");
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }
  return {
    esValida: true,
  };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const contieePalabrasComunes = commonPasswords.includes(clave);
  console.log(contieePalabrasComunes);
  if (contieePalabrasComunes) {
    console.log("contiene palabras comunes");
    return {
      esValida: false,
      error: "La clave no debe tener palabras comunes",
    };
  }
  return {
    esValida: true,
  };
};
