import { Empleado } from "./Empleado.js";

export class Director extends Empleado {

  constructor(nombre, dni, salario) {
    super(nombre, dni, salario);
  }
  verBonifiacion() {
    const bono = 10;
    return super._verBonifiacion(bono);
  }
}