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
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "Jose"
cliente1.dniCliente = "543216"
cliente1.rutCliente = "RT2345"

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "34528769"
cuentaCorriente1.saldo = 3000
cuentaCorriente1.agencia = 1001

console.log(cliente1)


console.log(cuentaCorriente1)
console.log(cuentaCorriente1.saldo)
cuentaCorriente1.depositoEnCuenta(1000)
console.log(cuentaCorriente1.saldo)
cuentaCorriente1.depositoEnCuenta(2000)
console.log(cuentaCorriente1.saldo)
cuentaCorriente1.depositoEnCuenta(5000)
console.log(cuentaCorriente1.saldo)