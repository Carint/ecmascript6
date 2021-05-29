// OBJECTS ENTRIES
// -----------------------------------------------------
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

// Objeto -> Matriz
const matriz = Object.entries(data)
console.log(matriz)
console.log(`El tamaño de la matriz es: ${matriz.length}`)

// OBJECTS VALUES
// -----------------------------------------------------
const values = Object.values(data) // GUARDA EN ARREGLO LOS VALORES DEL OBJETO

console.log(values)
console.log(`El tamaño del arreglo es: ${values.length}`)

// PADDING
// -----------------------------------------------------
const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' --------'))


// ASYNC AWAIT
// -----------------------------------------------------
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) ? setTimeout(() => resolve('Hello world'), 3000) : reject(new Error('Test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()

// MANEJO DE ERROR CON ASYNC AWAIT
const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()