import {
  tieneCaracteresEspeciales,
  tieneNumeros,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./validarCondiciones";
import { commonPasswords } from "./util";
import { ValidacionClave } from "./model";

const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!clave || !nombreUsuario || !commonPasswords) {
    throw new Error("Faltan datos");
  }
  const validaciones = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

  for (const validacion of validaciones) {
    if (!validacion.esValida) {
      return validacion;
    }
  }

  return {
    esValida: true,
  };
};

console.log(validarClave("jona12", "Msda12_!e", commonPasswords));
