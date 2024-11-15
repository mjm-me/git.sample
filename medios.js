// 1. Crea una función que elimine el primer y último carácter de un string recibido por parámetros.
// las funciones son objetos y se pueden escribir function nmbrefunción()

const removeLastFirst = function (value = "") {
    let result = "";
    for (let i = 1; i < value.length - 1; i++) {
        result += value[i];
    }
    return result;

    //const r = value.slice(1, value.length -1); //hace lo mismo
};
console.log(removeLastFirst("Patata"));

// 2. Escribe una función que reciba una palabra y revise si es un palíndromo.
function isPalindrome(value) {
    // Eliminar espacios, eliminar acentos y convertir a minúsculas
    let cleanStrings = value
        .replace(/\s+/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    // Invertir la palabra
    let revertStrings = cleanStrings.split("").reverse().join("");
    // Comprobar si la palabra original es igual a la invertida
    return cleanStrings === revertStrings;
}
// Ejemplo de uso
console.log(isPalindrome("Anita lava la tina")); // true
console.log(isPalindrome("Dábale arroz a la zorra el abad")); // true
console.log(isPalindrome("Son Robos o Sobornos")); // true
console.log(isPalindrome("Hola Pepe")); // false

// 3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.
const countVocals = function (value = "") {
    const lowerValue = value;
    let accumulator = 0;
    const vocals = "aeiouáéíóúü";
    for (let i = 0; i < lowerValue.length; i++) {
        const item = lowerValue[i]; //es cada una de las letras en cada vuelta
        accumulator += vocals.includes(item); //la coerción ya me suma el 1 y 0 los strings (vocals.) ya iteran
    }
    return accumulator;
};
console.log(countVocals("El murciélago es verde")); //me devuelve 9 que son las 9 vocales

const countVocals1 = function (value = "") {
    let accumulator = 0;
    const vocals = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "ü"]; //sirve para el ejemplo del if
    for (let i = 0; i < value.length; i++) {
        const item = value[i].toLocaleLowerCase(); //es cada una de las letras en cada vuelta
        if (vocals.includes(item)) {
            accumulator++;
        }
    }
    return accumulator;
};
console.log(countVocals1("Murciélago")); //me devuelve 5 que son las 5 vocales

console.log("ejercicio 4");
// 4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).
function containAlphabet(value) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const letras = new Set(value.toLowerCase().replace(/[^a-z]/g, ""));
    return alphabets.split("").every((letra) => letras.has(letra));
}
// Ejemplo de uso
console.log(
    containAlphabet(
        "Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol"
    )
); // true
console.log(containAlphabet("zapato")); // false

/**
 * Función que indica si una cadena es Pangrama en JavaScript
 * (método corto)
 * @author parzibyte
 */

const esPangrama = (cadena) => {
    const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxy";
    // Convertir a minúsculas
    cadena = cadena.toLowerCase();
    return Array.from(ALFABETO_MINUSCULAS).every((letra) =>
        cadena.includes(letra)
    );
};

// Probar método
const CADENAS_PARA_PROBAR = [
    "El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo", //  No
    "Hola", //  No
    "aeiou", //  No
    "parzibyte", //  No
    "abcdefghijklmnñopqrstuvwxyz", //  Sí
    "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja", //  Sí,
    "abcdefghijklmnopqrstuvwxyz", // No, porque no lleva ñ
    "Mi hijo degustó en el festival de bayas una extraña pizza de kiwi con queso", // Sí
];

CADENAS_PARA_PROBAR.forEach((cadena) => {
    console.log(`¿'${cadena}' es pangrama? ${esPangrama(cadena)}`);
});

// 5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

// 6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

// 7. Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

// 8. Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.

// 9. Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

// 10. Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

// 11. Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

// 12. La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.

// 13. Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

// 14. Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

// 15. Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.
