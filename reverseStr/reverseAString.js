// Exercício Reverse a string


let newStr = '';

function reverseAString(str) {
    for(let i = str.length - 1; i>=5 ; i--) {
        newStr += str[i];
        console.log(newStr);
    }

}

let resultado = reverseAString('Hello Gama Academy')