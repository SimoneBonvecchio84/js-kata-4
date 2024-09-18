/*
  Riceverai un array a e un valore x: dovrai verificare se l'array fornito contiene il valore specificato.
  L array può contenere numeri o stringhe e il valore x può essere di entrambi i tipi.
  Restituisci true se il valore è nell array altrimenti false
*/

const array = ["pippo", "pluto", "paperino"];
const value = "pippo";
let isTrue = false;


function checkValueInArray (array, value, isTrue) {
    if(array.includes(value)) {
        return isTrue = true;     
    } else {
        return isTrue = false;  
    }    
}

const result = checkValueInArray(array, value, isTrue);

console.log(result);