/* import class */
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

import { Director } from "./Empleados/Director.js";

const cliente = new Cliente("Leonardo", "123456", "123321");
const cliente2 = new Cliente("Maria", "123142", "89899");

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "001");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, "9985", "001", 0);

const empleado = new Empleado("Juan Perez", "123342", 10000);
empleado.asignarClave('12323')
const gerente = new Gerente("David Luiz", "1231212", 12000);
const director = new Director("Oscar Gomez", "9877632", 15000);

console.log(empleado.verBonifiacion())
console.log(gerente.verBonifiacion())
console.log(director.verBonifiacion())

console.log(SistemaAutenticacion.login(empleado, '12323'))