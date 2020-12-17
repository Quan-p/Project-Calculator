function add() {
    
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

var clicked = false;

// document.getElementById('addition').onclick = function() {
//     clicked = true;
// }

// document.getElementById('subtract').onclick = function() {
//     clicked = true;
// }

// document.getElementById('multiply').onclick = function() {
//     clicked = true;
// }

// document.getElementById('divide').onclick = function() {
//     clicked = true;
// }
  

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

    var opClicked = value;
    console.log(opClicked);
    
    clicked = true;
}
