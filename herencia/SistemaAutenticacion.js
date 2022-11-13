export class SistemaAutenticacion {
  // static login(empleado, clave) {
  //   return empleado.clave == clave;
  // }
  static login(usuario, clave) {
    return usuario.clave == clave;
  }
}