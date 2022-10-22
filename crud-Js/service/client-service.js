// Abrir http (metodo, url)
// CRUD   - Metodos http
// create - POST
// read   - GET
// update - PUT/PATCH
// delete - DELETE

// Fetch API
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

export const clientServices = {
  listaClientes,
};
