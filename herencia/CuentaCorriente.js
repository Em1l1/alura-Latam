import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
  #cliente;
  numero;
  agencia;
  #saldo;
  
  static cantidadCuentas = 0;

  // set the client
  set cliente(valor) {
    if (valor instanceof Cliente)
      this.#cliente = valor;
  }

  // get the cliente
  get cliente() {
    return this.#cliente;
  }

  constructor(cliente, numero, agencia) {
    this.cliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.#saldo = 0;
    CuentaCorriente.cantidadCuentas++;
  }


}
