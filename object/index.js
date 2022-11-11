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
  }

  retirarDeCuenta(valor) {
    if (valor <= this.#saldo)
      this.#saldo -= valor;
  }
}

cuentaDeLeonardo = new CuentaCorriente();
// cuentaDeLeonardo.saldo = 0;

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(-100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(250);
console.log(cuentaDeLeonardo);
