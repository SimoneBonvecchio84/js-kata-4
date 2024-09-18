let string1 = "Welcome";
let string2 = "Hey fellow warriors";
let string3 = "This is a test";
let string4 = "This is another test";
let string5 = "You are almost to the last test";
let string6 = "Just kidding there is still one more";
let string7 = "Seriously this is the last one";

const array = string4.split(" ");
const arrayRev = [];

for(let i = 0; i < array.length; i++) {
    const currElem = array[i];
    let elemInvert = '';

    if(currElem.length >= 5) {
        for(let j = currElem.length -1; j >= 0; j--) {
           elemInvert += currElem[j];
        }
        arrayRev.push(elemInvert);
    }
    if(currElem.length < 5) {
        arrayRev.push(currElem);
    }
    
}

arrayRev.push();
const newString = arrayRev.join(" ");
console.log(newString);


