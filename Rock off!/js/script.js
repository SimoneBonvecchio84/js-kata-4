// Confronto elementi di due array

const alicePoints = [20, 32, 18];
const bobPoints   = [48, 25, 40];

function solve(a,b) {
    for(let i = 0; i < 3; i++) {
        if(a[i] > b[i]) {
            message = "3, 0: Alice made Kurt proud!";
        } else if(a[i] < b[i]) {
            message = "1, 2: Bob made Jeff proud!";
        } else {
            message = "0, 0: that looks like a draw! Rock on!";
        }
    }
    return message;
}

const result = solve(alicePoints, bobPoints);

console.log(result)