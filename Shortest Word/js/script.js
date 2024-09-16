const string1 = "Simple, given a string of words, return the length of the shortest word(s)";
const string2 = "turns out random test cases are easier than writing out basic ones";
const string3 = "Let's travel abroad shall we";

const arrayString = [string1, string2, string3];


// for(let i = 0; i < arrayString.length; i ++) {
//    let min = arrayString[0];
//    let minElem = arrayString[i] < min;
//    console.log(minElem);
//    if(arrayString[i] < min) {
//      min = arrayString[i]
//      console.log(min)
//    }
// }

// Siegazione esercizio
/*
  dato un array di stringhe devo trovare la stringa più corta 
  salvo in una variabile il primo elemento dell array con indice 0
  poi nella condizione dico che l elemento corrente è minore del primo elemento
  il ciclo itera finchè questa condizione non diventa vera, trovando l elemento 
  più piccolo dell array che salverò a questo punto nella variabile min
*/ 

function shortString(array) {
    for(let i = 0; i < array.length; i++) {
        let min = array[0];        // prendo come riferimento il primo elemento del array
        if(array[i] < min) {       // se l elemento iesimo è minore di min 
            return min = array[i]; // in min salva l elemento più piccolo
        }
    }
}

const result = shortString(arrayString);

console.log("Stringa più corta:", result)