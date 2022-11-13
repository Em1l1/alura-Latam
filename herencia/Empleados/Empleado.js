export class Empleado {
  
  #nombre;
  #dni;
  #salario;
  #clave;

  constructor(nombre, dni, salario) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
    this.#clave = '';
  }

  asignarClave(clave) {
    this.#clave = clave;
  }

  get clave() {
    return this.#clave
  }

  verBonifiacion() {
    return this.#salario
  }

  _verBonifiacion(bono) {
    return this.#salario + this.#salario*bono/100
  }
}