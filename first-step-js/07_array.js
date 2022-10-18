const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago")
console.log(ciudadesDisponibles)

// abreviada
const paisesDisponibles_new = ["Colomvia", "Peru", "Chile", "Brasil", "Argentina"]
console.log(paisesDisponibles_new)

{
  paisesDisponibles_new.push("Uruguay")
  ciudadesDisponibles.push("Montevideo")
 
  paisesDisponibles_new.unshift('Ecuador')

  ciudadesDisponibles.unshift("Quito")
  console.log(ciudadesDisponibles)
  console.log(paisesDisponibles_new)


}

// Primer elemento
console.log(paisesDisponibles_new[0])
console.log(ciudadesDisponibles[0])

paisesDisponibles_new.splice(1, 2, "Venezuela", "Paraguay")
console.log(paisesDisponibles_new)

// size array
const cantidadCiudades = ciudadesDisponibles.length
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`)
console.log(`En la lista paises tenemos ${paisesDisponibles_new.length} elementos`)

// eliminar
//
ciudadesDisponibles.shift() // primero
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`)

ciudadesDisponibles.pop() // ultimo
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`)
console.log(ciudadesDisponibles)

// filtro
const paisesFiltrados = paisesDisponibles_new.filter((e) => e == 'Brasil')

console.log(paisesFiltrados)
const paisesFiltradosLength = paisesDisponibles_new.filter((e) => e.length > 6)
console.log(paisesFiltradosLength)

// separador de listas
console.log(paisesFiltradosLength.join("-"))

// Ordenar listas
console.log(paisesDisponibles_new.sort())

// conociendo posicion 
console.log(`Peru esta en la posicion: ${paisesDisponibles_new.indexOf("Peru")}`)


// Unificar listas

const listaPaisesYCiudades = paisesDisponibles_new.concat(ciudadesDisponibles)

console.log(listaPaisesYCiudades)
