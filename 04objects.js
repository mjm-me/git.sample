//Objetos literales

name = "Pepe";
age = 22;

//JSON
const user = {
    name: "Pepe",
    age: 22,
    color: "white",
};

console.log(user, name);

// Primitivos son inmutables
// const es lo mismo que decir constante

const x = 22;
//imposible x = 1

// En los objetos que sí son mutables
// const es lo mismo que decir NO re-asignable
const student = {
    name: "Pepe",
    age: 22,
};

student.age = 23;
student.course = "web";
delete student.color;

console.log(student);

//ARRAYS
//Strings son inmutables, son iterables sólo de lectura, los puedo recorrer pero no cambiar
const userName = "Pepe Pérez";
console.log(userName[0]); // espero que devuelve Pepe, el primer valor
//userName[0] = 'Z' no se puede hacer, nunca se puede cambiar un  string

const data = ["Pepe", "Juan", "Rosa", "Mariola"];
console.log(data[0]); //espero que me devuelva Pepe
data[0] = "Jose";
console.log(data[0]);
console.log(data.length); //mi array qué longitud tiene
data[data.length] = "Francisco"; //para añadir a la siguiente posición (los 4 anteriores) añade a Francisco
console.log(data.length);
console.log(data);
data.length = 2;
console.log(data);
data.length = 5;
console.log(data);
console.log(data.length);

//Concepto de tener MÉTODOS para STRINGS
const course = "Web Developer";
course.includes("Web"); // devuelve true porque sabrá que el texto Web sí está incluido
console.log(course.toUpperCase()); //al verlo en consola me lo devuelve todo en may aunque no lo modifica en el objeto

//Concepto de tener MÉTODOS para ARRAY, como un array siempre más de uno se escribe en plural (los singulares son para funciones)
const numbers = [1, 2, 4, 3, 6, 8];
numbers.includes;

//tienen una particularidad: INMUTABLES y MUTABLES
console.log("arrays mutables");

//Mutables: el más usado push
let l = numbers.push(45, 56); //añade a mi array anterior 2 números al final de la cadena
console.log(l, numbers);
let number = numbers.pop();
console.log(number, numbers);
l = numbers.unshift(45);
console.log(l, numbers);
number = numbers.shift();
console.log(number, numbers);

console.log("arrays immutables");

//Inmutables
const numString = numbers.join(" - "); //me han pedido que se pare los números con un espacio guión espacio
console.log(numString);
const sortedNumbers = numbers.toSorted(); //coloca de forma ordenada alfabéticamente pero no modifica el array original
console.log(numbers);
console.log(sortedNumbers);

console.log("arrays multidimensionales");

//Dimensiones, matrices
const matrix = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400],
];

const rows = matrix.length;
const cols = matrix[0].length;

console.log(rows); //devuelve 3
console.log(cols); //devuelve 4
console.log(matrix[1][1]); //para sacar el número 20

for (let i = 0; i < rows; i++) {
    const row = matrix[i];
    for (let j = 0; j < cols; j++) {
        const element = matrix[i][j];
        accumulator += element; //para sumar la suma total de todos los valores
        console.log(element);
    }
}
console.log(accumulator);

//console.log(matrix.length); //devuelve 3
//console.log(matrix[0].length); //devuelve 4
//console.log(matrix[1][1]); //para sacar el número 20
