/* Definicion de clases */
class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente;
}

class CuentaCorriente {
  numero;
  saldo;
  agencia;

  constructor() {
    this.numero = '';
    this.saldo = 0;
    this.agencia = '';
  }

  depositoEnCuenta(valor) {
    this.saldo += valor;
  }

  retirarDeCuenta(valor) {
    this.saldo -= valor;
  }
}

cuentaDeLeonardo = new CuentaCorriente();
// cuentaDeLeonardo.saldo = 0;

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(25);
console.log(cuentaDeLeonardo);
