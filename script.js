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

function numSave(value) {
    num1 = document.getElementById('display').textContent;
    num1 = parseInt(num1);

    opClicked = value;

    clicked = true;

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
    sum = num1;
}

function subtract(num1, num2) {
    var diff = num1 - num2;
    document.getElementById('display').innerHTML = diff;
    diff = num1;
}

function multiply(num1, num2) {
    var prod = num1 * num2;
    document.getElementById('display').innerHTML = prod;
    prod = num1;
}

function divide(num1, num2) {
    var quot = num1 / num2;
    document.getElementById('display').innerHTML = quot;
    prod = num1;
}

function operate(opClicked) {
    switch (opClicked) {
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