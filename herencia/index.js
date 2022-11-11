/* import class */
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaAhorro } from './CuentaAhorro.js';

const cliente = new Cliente("Leonardo", "123456", "123321");
const cliente2 = new Cliente("Maria", "123142", "89899");

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "001");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '001', 0)
console.log(cuentaDeLeonardo)
console.log(cuentaAhorroLeonardo)