const datos = [
  {
    'ciudad': 'Bogota',
    'precio': 500 
  },
  {
    'ciudad': 'Lima',
    'precio': 400 
  },
  {
    'ciudad': 'Santiago',
    'precio': 500 
  },
  {
    'ciudad': 'Montevideo',
    'precio': 200 
  },
]

const presupuestoDisponible = 400

// do
let ciudadSeleccionada = ''

for (let i = 0; i < datos.length && ciudadSeleccionada == ''; i++) {
  // const element = array[index]
  if (datos[i].precio <= presupuestoDisponible) {
    ciudadSeleccionada = datos[i].ciudad
    break
  }
}

if (ciudadSeleccionada == '')
  console.log("No tenemos pasajes disponibles")
else
  console.log("Puedes comprar pasaje para: " + ciudadSeleccionada)