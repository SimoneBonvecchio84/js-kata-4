const pangram = "Il falco azzurro e il bisonte che ha un grande zaino volano molto vicino piano qui.";
const alphabet = "abcdefghilmnopqrstuvz"; // Nota: hai saltato 'w', 'x', 'y'
const arrayAlphabet = alphabet.split("");
let pangramYesOrNot;

// Converto la stringa in minuscolo e rimuovo tutto ciò che non è una lettera
const normalizedPangram = pangram.toLowerCase().replace(/[^a-z]/g, "");
for(let i = 0; i < arrayAlphabet.length; i++) {
    if (normalizedPangram.includes(arrayAlphabet[i])) {
        pangramYesOrNot = true;
    } else {
        pangramYesOrNot = false;
    }
}

console.log(pangramYesOrNot);