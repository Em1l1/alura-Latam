export class Empleado {
  
  #nombre;
  #dni;
  #salario;

  constructor(nombre, dni, salario) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
  }

  verBonifiacion() {
    return this.#salario
  }

  _verBonifiacion(bono) {
    return this.#salario + this.#salario*bono/100
  }
}