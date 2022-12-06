import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const email = document.querySelector("[data-email]");
  const nombre = document.querySelector("[data-nombre]");

  try {
    const perfil = await clientServices.detalleCliente(id)
    console.log(perfil)
    if(perfil.nombre && perfil.email) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    } else {
      throw new Error()
    }

  } catch(error){
    window.location.href = "/screens/error.html"
  }

};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const email = document.querySelector("[data-email]").value;
  const nombre = document.querySelector("[data-nombre]").value;

  console.log(nombre, "-", email);
  clientServices.actulizarCliente(nombre, email, id).then(() => {
    window.location.href = "/screens/edicion_concluida.html";
  });
});
