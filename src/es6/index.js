// DECLARACION Y VALOR POR DEFECTO
// --------------------------------------------------------------------

function newFunction(name, age, country) {
    var name = name || 'carlos'
    var age = age || 36
    var country = country || 'HND'

    console.log(name, age, country)
}

// CAMBIO EN ECMASCRIP 6
// Declaracion de los valores por defecto en los parametro de la funcion
function newFunction2(name = 'carlos', age = 36, country = 'HND') {
    console.log(name, age, country)
}

// LLAMADO A LA FUNCION
newFunction2() // Sin parametros
newFunction2('Natalio', 34, 'HND') // Con parametros

// CONCATENACION o TEMPLATE LITERALS
// --------------------------------------------------------------------
let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world

console.log(epicPhrase)

// CAMBIO EN ECMASCRIP 6
let epicPhrase2 = `${hello} ${world}`

console.log(epicPhrase2)


// STRING MULTILINEA
// --------------------------------------------------------------------
let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n"
+ "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

// CAMBIO EN ECMASCRIP 6
let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

console.log(lorem)
console.log(lorem2)

// DESESTRUCTURACION
// --------------------------------------------------------------------
let person = {
    'nombre': 'carlos',
    'edad': '32',
    'pais': 'MX'
}

console.log(person.nombre, person.edad)

// CAMBIO EN ECMASCRIP 6
let { nombre, edad, pais } = person

console.log(nombre, edad, pais)

// OPERADOR DE PROPAGACION
// --------------------------------------------------------------------
let team1 = [ 'Oscar', 'Julian', 'Ricardo' ]
let team2 = [ 'Valeria', 'Yesica', 'Camila' ]

let education = [ 'David', 'Oscar', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila' ]

console.log(education)

// CAMBIO EN ECMASCRIP 6
let education2 = [ 'David', ...team1, ...team2 ]

console.log(education2)

// LET y CONST
// --------------------------------------------------------------------
const a = 'b'
// a = 'a' // Un valor que no se puede modificar

{
    var globalVar = 'Global var'
}

{
    let globalLet = 'Global let'
    console.log(globalLet)
}

console.log(globalVar)  // Se puede llamar fuera del scope de la declaracion
// console.log(globalLet) // No se puede llamar fuera del scop de la declaracion

