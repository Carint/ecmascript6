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

// PARAMETROS DE OBJETOS MEJORADO
// --------------------------------------------------------------------
let marca = 'toyota'
let year = 2006

// ES5
obj = { marca: marca, year: year }

// ES6
obj2 = { marca, year }

console.log(obj)
console.log(obj2)

// ARROW FUNCTIONS
// --------------------------------------------------------------------
const cars = [
    { marca: 'toyota', year: 2006 },
    { marca: 'nissan', year: 2007 }  
]

// ES5
let listOfCars = cars.map(function (item) {
    console.log(item.marca)
})

let listOfCars2 = cars.map(item => console.log(item.marca))

const listOfCars3 = (marca, year) => {
    // FUNCIONALIDAD NECESARIA
}

const listOfCars4 = year => {
    // FUNCIONALIDAD NECESARIA
}

const square = num => num * num

// PROMESAS
// --------------------------------------------------------------------
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Verdadero')
        } else {
            reject('Falso')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error))

// CLASES
// --------------------------------------------------------------------
class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB

        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2, 2))

// MODULOS
// --------------------------------------------------------------------
import { hello } from './module'

hello()

// GENERADORES
// --------------------------------------------------------------------
function* helloWorld() { // EL ASTERISCO MARCA EL QUE ES UN GENERADOR
    if (true) {
        yield 'Hello, '
    }

    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)