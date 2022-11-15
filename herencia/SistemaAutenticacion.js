export class SistemaAutenticacion {
  // static login(empleado, clave) {
  //   return empleado.clave == clave;
  // }
  static login(usuario, clave) {
    if ("autenticable" in usuario && usuario.autenticable instanceof Function) 
      return usuario.autenticable(clave);
    else 
      return false;
    // return usuario.clave == clave;
  }
}
