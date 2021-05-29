// METODO flat
// ---------------------------------------------------------
let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat(2))

// METODO flatMap
// ---------------------------------------------------------
let array = [1,2,3,4,5]

console.log(array.flatMap(value => [value, value * 2]))

// METODO trimStart y trimEnd
// ---------------------------------------------------------
let hello = '            hello world'
console.log(hello)
console.log(hello.trimStart())

let hello2 = 'hello world                        '
console.log(hello2)
console.log(hello2.trimEnd())

// METODO fromEntries (de un arreglo a un objeto)
// ---------------------------------------------------------
let entries = [["name", "oscar"], ["age", 32]]
console.log(Object.fromEntries(entries))
