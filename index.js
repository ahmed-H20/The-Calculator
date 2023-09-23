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

let firstNum,operator;
let current_num = '';
let secondNum = '';
let result = 0;
let operator_check;
let display_num = document.querySelector(".display #current-input");
let display_result = document.querySelector(".display #result");

function operate(x,y,operator) {
    if (operator == '+') return add(x,y);
    if (operator == '-') return subtract(x,y);
    if (operator == '*') return multiply(x,y);
    if (operator == '/') return divide(x,y);    
}

display_result.textContent = result;

function display(x) {    
    if (result != 0 && current_num == ''){
        current_num += `${result}`;
        result = 0;       
    }
    
    

    if (display_num.textContent.length == 17 || display_result.textContent.length == 17) {        
        alert("Max digits is (17) digits");
        delete_num();
        return;
    }   

    current_num += x;
    
    while (operator_check) {        
        if ( x == '+' || x == '-' || x == '*' || x == '/') return; // To enter only one operator
        secondNum += x;
        display_result.textContent = secondNum;
        return;
    }  
    
    display_num.textContent = current_num;

    if ( x == '+' || x == '-' || x == '*' || x == '/'){
        operator = x;
        operator_check = true;
        firstNum = current_num.split("").slice(0,current_num.length-1).join("");        
    }           
}

function calculate() {
    if(firstNum == '' || secondNum == '' || operator == '') return;
    result = operate(+firstNum,+secondNum,operator);
    current_num = '';
    secondNum = '';
    firstNum = '';
    operator_check = false;
    display_num.textContent = current_num;   
    display_result.textContent = `${result}`;
}

function delete_num() {    
    if(operator_check){
        secondNum = secondNum.split("").slice(0,secondNum.length-1).join("");
        display_result.textContent = secondNum;
    }
    else{
        current_num = current_num.split("").slice(0,current_num.length-1).join("");
        display_num.textContent = current_num;
    }
    
}

function clear_all() {
    current_num = '';
    secondNum = '';
    firstNum = '';
    operator_check = false;
    result = 0;
    display_num.textContent = current_num;
    display_result.textContent = result;
}