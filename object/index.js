/* Definicion de clases */
class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente;
}

class CuentaCorriente {
  numero;
  #saldo;
  agencia;

  constructor() {
    this.numero = '';
    this.#saldo = 0;
    this.agencia = '';
  }

  depositoEnCuenta(valor) {
    if (valor > 0)
      this.#saldo += valor;
    return this.#saldo;
  }

  retirarDeCuenta(valor) {
    if (valor <= this.#saldo)
      this.#saldo -= valor;
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }
}



cuentaDeLeonardo = new CuentaCorriente();
// cuentaDeLeonardo.saldo = 0;

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es ${saldo}`)
// console.log(cuentaDeLeonardo);
saldo = cuentaDeLeonardo.depositoEnCuenta(500);
console.log(`El saldo actual es ${saldo}`)

// console.log(cuentaDeLeonardo);
saldo = cuentaDeLeonardo.retirarDeCuenta(502);
console.log(`El saldo actual es ${saldo}`)
// console.log(cuentaDeLeonardo);
