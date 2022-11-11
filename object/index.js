/* import class */
import { CuentaCorriente } from './CuentaCorriente.js';


const cuentaDeLeonardo = new CuentaCorriente();
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
