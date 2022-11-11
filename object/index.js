/* import class */
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

const cliente = new Cliente();
cliente.nombreCliente = "Leonardo";
cliente.dniCliente = "123456";
cliente.rutCliente = "123321";

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = "1";
cuentaDeLeonardo.agencia = "001";

cuentaDeLeonardo.cliente = cliente;

console.log(cuentaDeLeonardo)
// cuentaDeLeonardo.saldo = 0;

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es ${saldo}`);
// console.log(cuentaDeLeonardo);
saldo = cuentaDeLeonardo.depositoEnCuenta(500);
console.log(`El saldo actual es ${saldo}`);

// console.log(cuentaDeLeonardo);
saldo = cuentaDeLeonardo.retirarDeCuenta(502);
console.log(`El saldo actual es ${saldo}`);
// console.log(cuentaDeLeonardo);

/* Transferencia entre cuentas*/
const cliente2 = new Cliente();
cliente2.nombreCliente = "Maria"
cliente2.dniCliente = "123142"
cliente2.rutCliente = "89899"

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = "2"
cuentaDeMaria.agencia = "002"
cuentaDeMaria.cliente = cliente2;

cuentaDeLeonardo.transferirParaCuenta(200,cuentaDeMaria)
const saldoMaria = cuentaDeMaria.verSaldo();
console.log(`El saldo actual es ${saldoMaria}`);

console.log(cuentaDeMaria)

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es ${saldoLeonardo}`);
