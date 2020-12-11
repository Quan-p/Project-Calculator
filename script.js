var num1;
var num2;

function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    var diff = num1 - num2;
    return diff;
}

function multiply(num1, num2) {
    var prod = num1 * num2;
    return prod;
}

function divide(num1, num2) {
    var quot = num1 / num2;
    return quot;
}
var operator;

function operate(operator) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);  
    }
}

function clearContent() {
    document.getElementById('display').innerText = "";
}

function displayVal(value) {
    document.getElementById('display').innerHTML += value;
}