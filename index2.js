//console.log('Index2 loaded')

//function greeting() {
    //const question = '¿Cómo te llamas?'
    //const name = prompt (question) 
    //if(name !== null || name === ``) {
        //const response = `Hola, ${name}, qué tal estás`
        //alert(response)
    //}
//}

//const button = document.querySelector('button')
//button.addEventListener('click', greeting)

//1. Imprime por consola el string 'Hello World'

//primera solución
console.log('Hello World')
//segunda solución
const greeting = 'Hello World'
console.log(greeting)


//2.Declara una variable de las dos formas posibles, e imprime por consola los dos valores
// Declarar una variable usando 'let'
//let greeting1 = 'Hello World!'
//console.log(saludo1)
//Declarar una variable usando 'const'
//const greeting2 = 'Bye, World!'
//console.log(greeting1 + '' + greeting2)  
//que es igual que decir 
console.log(greeting1,greeting2)

//3. Cambia ahora el valor de una de las dos variables e imprime por consola
// Declarar una variable usando 'let'
let greeting1 = '¡Hola mundo!'
console.log(greeting1)
// Cambiar el valor de la variable 'saludo1'
greeting1 = '¡Hola de nuevo mundo!'
console.log(greeting1)
// Declarar una variable usando 'const'
const greeting2 = 'Hello world!'
console.log(greeting2)

//4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola
//let var1 = 2 //si cambiara sería let
//let var2 = 3

const a = 2
const b = 3
console.log(a + b)

//5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas
//primera solución
const questionName = '¿Cómo te llamas?'
let yourName = 'Soy María Jesús'
let completeGreeting = questionName + ' ' + yourName
console.log(completeGreeting)
//segunda solución 
const questionSurName = '¿Y tu apellido?'
let yourSurName = 'Martín'
let completeGreeting2 = `${questionSurName} ${yourSurName}`
console.log(completeGreeting2)

//6. Crea una función que imprima por consola el string 'Hello World'
function printGreeting() {
    console.log('Hello World')
}
// tengo que llamar a la función para que imprima el mensaje
printGreeting()

//7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros
//primera solución
const x = 2
const y = 5
function multiply() {
    console.log(x * y)
}
multiply()

//segunda solución
function multiply2(a, b) {
    console.log(a * b)
}
// Llamar a la función con dos números como argumentos
multiply2(5, 3)

//8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro
//primera solución
const c = 3;
function riseNumber() {
    console.log(c ** 3)
} 
riseNumber()

//segunda solución
function riseNumber1(numero) { 
    console.log(numero ** 3)

 }
 riseNumber1(4);  // Llamar a la función con un número como argumento 

//9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)
function calcularAreaRectangulo(base, altura) {
    const area = base * altura
    console.log(area)
} // Llamar a la función con las dimensiones del rectángulo
calcularAreaRectangulo(5, 3) 

//10. Crea una función que imprima por consola un número al azar entre 0 y 10
function numeroAlAzar() { 
    let numero = Math.floor(Math.random() * 11)
    console.log(numero);
} 
numeroAlAzar();

//11. Adivina el número y Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
function adivinaElNumero() {
    // Guardar un número aleatorio del 1 al 10 en una variable
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1
    // Pedir al usuario que adivine un número del 1 al 10
    const numeroUsuario = parseInt(prompt('Adivina el número (del 1 al 10):'))
    // Comparar los números y mostrar el resultado 
    if (numeroUsuario === numeroAleatorio) { 
        console.log('¡Has acertado! El número era ' + numeroAleatorio); 
    } 
        else { 
            console.log('Has fallado. El número correcto era ' + numeroAleatorio); }
        } 
    adivinaElNumero();

    //11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto
    function adivinaElNumero() {
        // Guardar un número aleatorio del 1 al 10 en una variable
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1
        // Pedir al usuario que adivine un número del 1 al 10 
        const numeroUsuario = parseInt(prompt('Adivina el número (del 1 al 10):'))
        // Comparar los números y mostrar el resultado 
        if (numeroUsuario === numeroAleatorio) { 
            console.log('¡Has acertado! El número era ' + numeroAleatorio); 
        } else { 
            console.log('Has fallado. El número correcto era ' + numeroAleatorio); } 
        }
    adivinaElNumero();


//12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.

//13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

//14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
    
//15. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.