// DECLARACION Y VALOR POR DEFECTO
// --------------------------------------------------------------------

function newFunction(name, age, country) {
    var name = name || 'carlos'
    var age = age || 36
    var country = country || 'HND'

    console.log(name, age, country)
}

// es6
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

// es6
let epicPhrase2 = `${hello} ${world}`
