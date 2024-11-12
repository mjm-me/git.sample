//coercion

let v1 = 3;
let v2 = "4";
// Coercion a number de la variable v2
console.log(v1 * v2);
console.log(typeof v2); //string
//Coerción a string de la variable v1
console.log(v1 + v2);
console.log(typeof v1); //number

// Casting a number de la variable v2
console.log(v1 + Number(v2)); //espero 7
console.log(true + false); //1

//Casting a number der la variable v2
console.log(v1 + Number(v2)); //devuelve 7
console.log(true + false);

//Booleanos falsies
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(NaN));

function multi(a, b) {
    console.log(a * b);
}

//se queja porque está declarada igual dos veces la misma variable, dentro del mismo bloque
// let a = 4;
// let a = 5;

//no se queja porque está en distintos bloques aunque esté declarada igual

let a = 4;

function foo() {
    let a = 5;
    console.log("Desde foo", a); //devuelve 5
}

function foo() {
    let a = 5;
    console.log("Desde el bloque", a); //devuelve 5
}

console.log("Global", a); //4
foo();

// If / else

//const age = 10, name = 'Pepe', gender = 'male' //se puede hacer porque lleva comas pero es una mala práctica
// la edad es un valor continuo, no se suele emplear el switch
const age = 10;
const name = "Pepe";
const gender = "male";

if (age <= 10) {
    console.log("Los niños no pueden entrar");
} else if (age < 18) {
    console.log("Los menores tienen que ir acompañados");
} else if (gener === "male") {
    console.log("Bienvenido");
}

console.log("Fin");

// Caso de switch, no hay combinaciones, son casos continuos
const languaje = "Sp";
let greeting;
switch (languaje) {
    case "En":
        greeting = "Hello friend";
        break;
    case "Sp":
        greeting = "Hola amigo";
        break;
    case "De":
        greeting = "Hallo Freund";
        break;
}
console.log(greeting);
