//1. Imprime por consola el string 'Hello World'.
//primera solución
console.log("Hello World");
//segunda solución
const greeting = "Hello World";
console.log(greeting);

//2.Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
let greeting1 = "Hi people";
const greeting2 = "Bye people";
console.log(greeting1 + " " + greeting2);
//que es igual que decir
let finish = "Ciao";
console.log(greeting1, greeting2, finish);

//3. Cambia ahora el valor de una de las dos variables e imprime por consola.
let greeting3 = "Hi people"; //era lo mismo de antes
const greeting4 = "Bye people"; //era lo mismo de antes
greeting3 = "Hi again"; //con solo cambiar greetin3 funciona
console.log(greeting3, greeting4);

//4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
const a = 2;
const b = 3;
console.log(a + b); //se espera 5

//5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
const firstName = "Pepe";
const surname = "Pérez";
console.log(firstName, surname);

//6. Crea una función que imprima por consola el string 'Hello World'
function printGreeting() {
    console.log("Hello world");
}
printGreeting();

//segunda solución
function render(value) {
    console.log(value);
}
render("Hello world...");

//7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros

// segunda función en clase, nos piden una función impura de cálculo que salga por pantalla
//primera solución
function multiply() {
    const x = 5;
    const y = 4;
    console.log(x * y);
}
multiply();

// segunda función en clase, nos piden una función impura de cálculo que salga por pantalla
function multiplication(a, b) {
    console.log(a * b);
}
multiplication(12, 5); // Llamar a la función con dos números como argumentos

//7b.
function multi(a, b) {
    return a * b;
}
console.log(multi(2, 4)); //espero que me devuelva 8
// invócala e imprime por consola el resultado usando la función del ejercicio 6
function multi(a, b) {
    return a * b;
}
render(multi(2, 4)); // le digo que me devuelva por pantalla la funcion multi y los valores son 2 y 4

//8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro
//resuelto en clase y devuelve el resultado
function cube(a) {
    const result = a ** 3;
    return result;
}
render(cube(3)); //espero un 27
//yo creo también esta otra solución
function cube(a) {
    return a ** 3;
}
render(cube(3));

//9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)
function rectangleArea(b, h) {
    return b * h;
}
console.log(rectangleArea(1, 9)); //espero 9

//corregido en clase
function rectangleArea(b, h) {
    const area = b * h;
    return area;
}
render(rectangleArea(3, 4)); //espero 12

//si lo complico preguntando cuál es el área de un rectángulo ode un triángulo
function areaRectangleOrTriangle(b, h, isRectangle) {
    let area;
    if (isRectangle === true) {
        area = b * h;
    } else {
        area = (b * h) / 2;
    }
    return area; //esparamos que dvuelva 7,5
}
render(areaRectangleOrTriangle(3, 5, false));

//vamos a mejorarlo
function areaRectangleOrTriangle1(b, h, isRectangle) {
    if (isRectangle) {
        return b * h;
    }
    return (b * h) / 2; //esperamos que devuelva 7,5
}
render(areaRectangleOrTriangle1(3, 5, false)); //7,5
render(areaRectangleOrTriangle1(3, 5, true)); //15

//vamos a mejorarlo con un operador ternario
function areaRectangleOrTriangle2(b, h, isRectangle) {
    return isRectangle ? b * h : (b * h) / 2;
}

function calcularAreaRectangulo(base, altura) {
    const area = base * altura;
    console.log(area);
} // Llamar a la función con las dimensiones del rectángulo
calcularAreaRectangulo(5, 3);

//10. Crea una función que imprima por consola un número al azar entre 0 y 10.
// corregido en clase
//Math.random() número pseudo aleatorio entre 0 y 1
function randomNumberOnetoTen() {
    //const r = Math.random() * 10
    //Math.trunc(r)
    //return r;
    return Math.trunc(Math.random() * 10);
    //si no quiero que aparezca el 0
    //return Math.trunc(Math.random() * 9 + 1);
}
render(randomNumberOnetoTen());

// 11. Adivina el número (Ejecútalo en la consola del navegador)
// Crea una función que primero guarde en una variable un número aleatorio del 1 al 10.
// Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números.
//Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
// Mejora: utiliza una función independiente para el render

function app() {
    const expected = randomNumberOneToTen();
    const userOption = prompt("Dime un número del 1 al 10");
    const isCorrect = expected === Number(userOption);
    const result = isCorrect
        ? "Has acertado"
        : `No acertaste, en número era ${expected}`;
    render(result);
}

// 12. Crea una función que reciba un número como parámetro y devuelva de alguna manera si el número dado es par o impar.
// Invócala e imprime por consola el resultado usando la función del ejercicio 6.
console.log("empieza ejercicio 12");

function eveOrOdd(num) {
    let result;
    if (num % 2 === 0) {
        result = "Par";
    } else {
        result = "Impar";
    }
    return result;
}
render("23 es " + eveOrOdd(23)); //pasamos el valor 23 porque he querido

//corregido por el profe
function oddOrEven(num) {
    // Si no es entero
    //programación defensiva, primero compruebo si el nº no es entero
    if (!Number.isInteger(num)) {
        return "El número no es entero";
    }
    let result = "Impar";
    if (num % 2 === 0) {
        result = "Par";
    }
    return result;
}
const value = 0.5;
render(`${value} es ${oddOrEven(value)}`); //pasamos el valor 23 porque he querido

//15. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.
//function checkNumber(num) {
//if (... isPrimo) return true
//else return false
//para saber si es primo:
///17
//17%2 !== 0;
//...
//17%16 !==0;
//}
console.log("empieza ejercicio 15");

function isPrime(num) {
    if (!Number.isInteger(num) || num < 0) {
        return "El valor es no válido";
    }

    if (num < 2) isPrime = false;

    //let isPrime = true; //lo puedo quitar si al final le digo return true

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true; //return isPrime;
}

function renderPrime(n) {
    let result = isPrime(n);
    if (typeof result === "boolean") {
        result = result ? "Es primo" : "no es primo";
    }
    console.log(n, result);
}

renderPrime(-1);
renderPrime(0);
renderPrime(1);
renderPrime(2);
renderPrime(9);

//console.log(-1, isPrime(-1) ? "Es primo" : "no es primo");
//console.log(0, isPrime(0) ? "Es primo" : "no es primo");
//console.log(1, isPrime(1) ? "Es primo" : "no es primo");
//console.log(2, isPrime(2) ? "Es primo" : "no es primo");
//console.log(9, isPrime(9) ? "Es primo" : "no es primo");

// cuando sea primo te devuelvo un true
function rollDiceN(n) {
    let accumlator = 0;
    for (let i = 0; i < n; i++) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log("Valor del dado:", dice);
        //accumulator = accumulator + dice
        accumlator += dice;
    }
    console.log("Total:", accumlator);
}
rollDiceN(10);

console.log("empieza ejercicio para Texto");

// cuando sea primo te devuelvo un true
const cad = "Hola que tal";
console.log(cad.length); //le estoy preguntando que me de cuántas posiciones tiene esta cadena. Espero 12
console.log(cad[3]); //espero letra a
//como recorrer la cadena, con un bucle
for (let i = 0; i < cad.length; i++) {
    const element = cad[i];
    console.log(element);
}

// 13. Crea una función que reciba un parámetro de tipo string y devuelva  el string revertido. (ejemplo: 'casa' => 'asac).
// Invócala e imprime por consola el resultado usando la función del ejercicio 6.

function revertString(value) {
    let accumulator = "";
    for (let i = value.length - 1; i >= 0; i--) {
        const iterator = value[i];
        // console.log(element);
        accumulator += iterator;
    }
    return accumulator;
}

console.log(revertString("perro"));

// 14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
// Mejora: utiliza una función independiente para el render
function createMultiplicationTable (num) {
    let accumulator = '';
    for (let i = 0; i <= 10; i++) {
        accumulator += `${num}` por `${i}` es `${num*i}
        `;
    }
    return accumulator;
}
    
console.table(createMultiplicationTable(5));

//Tirar
function rollDiceU ntil(value)
    let accumlator = 0;
    for (let i = 0; true; i++) {
        if(i===3) {
            break;
        }

        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log("Valor del dado:", dice);
        //accumulator = accumulator + dice
        accumlator += dice;
    }
    console.log("Total:", accumlator);