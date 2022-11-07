export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
  } else {
    input.parentElement.classList.add("input-container--invalid");
  }
}

const mensajeDeError = {
  nombre: {
    valueMissing: "Este campo no puede estar vacion",
  },
  email: {
    valueMissing: "Este campo no puede estar vacion",
    typeMissing: "El correo no es valido",
  },
  password: {
    valueMissing: "Este campo no puede estar vacion",
    patternMissmatch: "Al menos 6 caracteres, maximo 12, debe contener una letra minuscula, una letra mayuscula, un numero y no puede contener caracteres especiales"
  },
  nacimiento: {
    valueMissing: "Este campo no puede estar vacion",
    customError: "Debes tener al menos 18 years old"
  }
};

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

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
