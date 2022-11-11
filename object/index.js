/* Definicion de clases */
class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente
}

class CuentaCorriente {
  numero;
  saldo;
  agencia;

  depositoEnCuenta(valor) {
    this.saldo += valor;
  }

  retirarDeCuenta(valor) {
    this.saldo -= valor;
  }
}

cuentaDeLeonardo = new CuentaCorriente();
console.log(cuentaDeLeonardo)
