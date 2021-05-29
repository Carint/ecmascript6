// OPERADOR DE REPOSO
// ---------------------------------------------------------
const obj = {
    name: 'carlos',
    age: 36,
    country: 'HND'
}
// SE EXRAE LA PROPIEDAD QUE SE DESEA Y EL RESTO DEL OBJETO SE ENCAPSULA EN all
let { country, ...all } = obj
console.log(country, all)

// ESTRUCTURACION DEL OBJETO
const person = {
    name: 'Oscar',
    age: 32
}

const cargo = {
    ...person,
    cargo: 'Gerente'
}

console.log(cargo)

// FUNCION AL FINALIZAR UNA PROMESA
// ---------------------------------------------------------
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Hello world'), 3000)  : reject(new Error('Test error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))

// REGEX
// ---------------------------------------------------------
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
