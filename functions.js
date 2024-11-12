//Declaración de una función
//Si solo declaro funciones y no la uso, no hago nada

function add(a, b) {
  // paramwetros: a y b
  //console.log(a+b) //es un efecto, una cosa que pasa pero no me devuelve nada
  return a + b; //resultado, lo que devuelve, puede devolver un undefined
}

const x = add(2, 4); //los argumentos son 2 y 4
// x = 6

//esto tiene 3 variables locales
function add(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}

const w = 12;
const k = 2;
add(w, k); //no hay diferencia, la función recibe un 12 y un 2
add(12, 2);

// Mal
const f = 2;
function foo() {
  return f;
}

console.log(foo()); //nos devolvería el 2
