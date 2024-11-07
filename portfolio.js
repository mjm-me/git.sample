'use strict'

// sentencias

// expresiones

// variables y datos


console.log("nuevo js para portfolio")

console.log("sabor a jamón")

console.log(22, 'Pepe', true)
console.log (22, typeof 22)
console.log ('Pepe', typeof 'Pepe')
consoile.log (true, typeof true)

// se declaran con var - let - const

let user
let age
let isStudent

// asignacion

user = 'Pepe'
age = 22
isStudent = true


// CONST

const course = `Java Script`

// Da un error
// course = 'Typescript'

let emotionalState = 'sad'
console.log (emotionalState)

let score = 5 + 4
// es igual que si yo escribo esto
score = 9

let newScore = 3 * score
let otherScore = newScore
newScore = 54

console.log(newScore) // espero el valor 54
console.log(otherScore) // espero 27

console.log (newScore > otherScore) // espero true 
console.log (newScore === otherScore) // espero false 

console.log(2 === '2')  // false

// Concatenación

const firstName = 'Pepe'
const surName = 'González'
const fullName = firstName + ' ' + surName // ojo lleva el espacio para separar nombre y apellido
console.log (fullName)

// template
console.log (`Hola, soy ${firstName} ${surName}`)


const a = 2
const b = '2'

console.log (a * b) //4
console.log (+ +a + +b) //devuelve un 8, si le pongo el signo + delante lo convierte en nº