import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado {
  constructor(nombre, dni, salario) {
    super(nombre, dni, salario);
  }

  verBonifiacion() {
    const bono = 5;
    return super._verBonifiacion(bono);
  }
}
