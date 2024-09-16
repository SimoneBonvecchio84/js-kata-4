const string1 = "Simple, given a string of words, return the length of the shortest word(s)";
const string2 = "turns out random test cases are easier than writing out basic ones";
const string3 = "Let's travel abroad shall we";

const arrayString = [];
arrayString.push(string1,string2,string3);

// for(let i = 0; i < arrayString.length; i ++) {
//    let min = arrayString[0];
//    let minElem = arrayString[i] < min;
//    console.log(minElem);
//    if(arrayString[i] < min) {
//      min = arrayString[i]
//      console.log(min)
//    }
// }

function shortString(array) {
    for(let i = 0; i < array.length; i++) {
        let min = array[0];
        if(array[i] < min) {
            return min = array[i];
        }
    }
}

const result = shortString(arrayString);

console.log("Stringa più corta:", result)