/* eslint-disable no-useless-escape */
export function validateEmail(email) {
  if (email.trim() == "") {
    return false;
  }
  const val = /^\S+@\S+\.\S+$/;
  return val.test(String(email).toLowerCase());
}
export function validatePassword(password) {
  if (password.trim() == "") {
    return false;
  }

  var minLongitud = 5;
  var maxLongitud = 20;
  var tieneMayuscula = false;
  var tieneMinuscula = false;
  var tieneDigito = false;
  var tieneEspecial = false;
  var characteresEspeciales = "$@$!%*?&";

  // Comprobar la longitud de la contraseña
  if (password.length < minLongitud || password.length > maxLongitud) {
    return true;
  }

  // Recorrer cada carácter de la contraseña
  for (var i = 0; i < password.length; i++) {
    var character = password[i];

    // Comprobar si es una letra mayúscula
    if (character >= "A" && character <= "Z") {
      tieneMayuscula = true;
    }

    // Comprobar si es una letra minúscula
    if (character >= "a" && character <= "z") {
      tieneMinuscula = true;
    }

    // Comprobar si es un dígito
    if (character >= "0" && character <= "9") {
      tieneDigito = true;
    }

    // Comprobar si es un carácter especial
    if (characteresEspeciales.indexOf(character) !== -1) {
      tieneEspecial = true;
    }
  }
  return tieneMayuscula && tieneMinuscula && tieneDigito && tieneEspecial;
}
export function validateLetters(w) {
  for (let i = 0; i < w.length; i++) {
    const character = w[i];
    if (
      character !== " " &&
      (character < "A" ||
        (character > "Z" && character < "a") ||
        character > "z")
    ) {
      return false;
    }
  }
  return true;
}

export function NoSpacesAndNull(w) {
  if (w.trim() === "" || w.includes(" ")) {
    return false;
  }
  return true;
}

export function NoNull(w) {
  if (w.trim() === "") {
    return false;
  }
  return true;
}
function validateJustNumbers(n) {
  for (let i = 0; i < n.length; i++) {
     var character = n[i];
     if (isNaN(parseInt(character))) {
        return false;
     }
  }
  return true;
}


export function validateMeasureId(Id) {
  return validateJustNumbers(Id) && NoSpacesAndNull(Id);
}
export function validateMeasureAmount(amount) {
  return validateJustNumbers(amount) && NoSpacesAndNull(amount);
}
export function validateMeasureDate(date) {
  return NoSpacesAndNull(date);
}
export function validateMeasureMeasuredby(measuredby) {
  return validateLetters(measuredby) && NoNull(measuredby);
}

export function validateMeasureUserId(userId) {
  return validateJustNumbers(userId);
}
