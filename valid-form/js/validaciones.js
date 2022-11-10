export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-container--invalid").innerHTML = ""
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
  }
}

const tiposDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError"
]

const mensajeDeError = {
  nombre: {
    valueMissing: "Este campo nombre no puede estar vacion",
  },
  email: {
    valueMissing: "Este campo email no puede estar vacion",
    typeMissing: "El correo no es valido",
  },
  password: {
    valueMissing: "Este campo password no puede estar vacion",
    patternMissmatch: "Al menos 6 caracteres, maximo 12, debe contener una letra minuscula, una letra mayuscula, un numero y no puede contener caracteres especiales"
  },
  nacimiento: {
    valueMissing: "Este campo fecha de nacimiento no puede estar vacion",
    customError: "Debes tener al menos 18 years old"
  },
  numero: {
    valueMissing: "Este campo no puede estar vacion",
    patternMissmatch: "El formato requerido es XXXXXXXXXX 10 numeros"
  }
};

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = ""
  tiposDeErrores.forEach(error => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error)
      console.log(input.validity[error])
      console.log(mensajeDeError[tipoDeInput][error])
      mensaje = mensajeDeError[tipoDeInput][error]
    }
  })
  return mensaje
}

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 19 years old";
  }

  input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}
