import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta {
  
  static cantidadCuentas = 0;

 

  constructor(cliente, numero, agencia, saldo) {
    super(cliente, numero, agencia, saldo)
    // CuentaCorriente.cantidadCuentas++;
  }


}
