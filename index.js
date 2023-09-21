// x => first number
// y => second number
function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

let firstNum,secondNum,operator;
let current_num = '';
let result = '';

function operate(x,y,operator) {
    if (operator == '+') return add(x,y);
    if (operator == '-') return subtract(x,y);
    if (operator == '*') return multiply(x,y);
    if (operator == '/') return divide(x,y);    
}

let display_num = document.querySelector(".display #current-input");
let display_result = document.querySelector(".display #result");
function display(x) {    
    current_num += x;
    display_num.textContent = current_num;
    if ( x == '+' || x == '-' || x == '*' || x == '/'){
        operator = x;
        firstNum = current_num;                
        current_num = '';
    }    
}

function calculate() {
    result = operate(+firstNum,+current_num,operator);
    display_result.textContent = `${result}`;
}