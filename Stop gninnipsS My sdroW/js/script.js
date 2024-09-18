

const inputElem = document.getElementById('input-elem');
const btnElem   = document.getElementById('btn-elem');
const h3Elem    = document.getElementById('print-string');

btnElem.addEventListener('click', reverseWords);

function reverseWords() {
    const valueElem = inputElem.value.trim();
    const array =valueElem.split(" ");
    let arrayRevers = [];
    for(let i = 0; i < array.length; i++) {
        currElem = array[i];
        let reverseWords = '';
        if(currElem.length >= 5) {
            for(let j = currElem.length -1; j >= 0; j--) {
                reverseWords += currElem[j];
            }
        }
        arrayRevers.push(reverseWords);
        if(currElem.length < 5) {
            arrayRevers.push(currElem);
        }
    }
    console.log(arrayRevers);
    const showMeString = arrayRevers.join(" ");
    h3Elem.innerHTML = showMeString;
}

