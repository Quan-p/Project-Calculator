function clearContent() {
    document.getElementById('display').innerText = "";
}

var clicked = false;  

function displayVal(value) {
    if (document.getElementById('display').innerHTML.length < 11) {
        document.getElementById('display').innerHTML += value;
    } else {
        alert ("Number limit reached");
    }

    if (clicked) {
        clearContent();
        document.getElementById('display').innerHTML += value;
        clicked = false;
    }
}

var num1;
var num2;

function numSave(value) {
    // num1 = document.getElementById('display').textContent;
    // num1 = parseInt(num1);

    opClicked = value;
    clicked = true;

    if(typeof(num1) == 'undefined') {
        num1 = document.getElementById('display').textContent;
        num1 = parseInt(num1);
    } else {
        num2 = document.getElementById('display').textContent;
        num2 = parseInt(num2);
        operate(opClicked);
    }
    // if (typeof(num1) == 'number') {
    //     num2 = document.getElementById('display').textContent;
    //     num2 = parseInt(num2);
    // }
}

var opClicked;

function equal() {
    if (typeof(num1) == 'number') {
        num2 = document.getElementById('display').textContent;
        num2 = parseInt(num2);
    }
    operate(opClicked);
}

function add(num1, num2) {
    var sum = num1 + num2;
    document.getElementById('display').innerHTML = sum;
    this.num1 = sum;
}

function subtract(num1, num2) {
    var diff = num1 - num2;
    document.getElementById('display').innerHTML = diff;
    this.num1 = diff;    
}

function multiply(num1, num2) {
    var prod = num1 * num2;
    document.getElementById('display').innerHTML = prod;
    this.num1 = prod;  
}

function divide(num1, num2) {
    var quot = num1 / num2;
    document.getElementById('display').innerHTML = quot;
    this.num1 = quot;  
}

function operate(opClicked) {
    switch (opClicked) {
        case "+":
            add(num1, num2);
            //num2 = null;
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