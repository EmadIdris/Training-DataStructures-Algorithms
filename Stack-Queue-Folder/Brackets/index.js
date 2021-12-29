'use strict';

const Stack = require('../S-Q-PSEUDO/stack')
const bracketStack = new Stack();


function validateBrackets(string){
    let stringArray = string.replace(/[a-zA-Z/s]/g, '').spilt(''); // array
    if(!stringArray.length){return false} // if no array
    stringArray.map(char =>{ // make a new array with 
        if(char === '(' || char === '[' || char === '{'){
            bracketStack.push(char)
        }else if (char === ')'){
            bracketStack.top.value === '(' ? bracketStack.pop() : null;
        }else if (char === ']'){
            bracketStack.top.value === '[' ? bracketStack.pop() : null;
        } else if(char === '}'){
            bracketsStack.top.value === '{' ? bracketsStack.pop() : null;
        }
    })
    if(bracketStack.isEmpty()){
        return true;
    }
    else return false
}
module.exports = validateBrackets

// Algorithm
// 1. remove a;; the unwanted char from the string
// 2. conver string into array , each ch is an array element
// ----------------------------------------------------------------