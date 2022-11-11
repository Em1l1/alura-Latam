/* import class */
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

const cliente = new Cliente("Leonardo", "123456", "123321");
const cliente2 = new Cliente("Maria", "123142", "89899");

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "001");

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(800);
console.log(`El saldo actual ${saldo}`);

console.log(cuentaDeLeonardo.cliente);
console.log(cuentaDeMaria.cliente);
