var num1;
var num2;

function clearContent() {
    document.getElementById('display').innerText = "";
    num1 = undefined;
    num2 = undefined;
}

var clicked = false;  
var numCap = false;

function displayVal(value) {
    if (document.getElementById('display').innerHTML.length < 11) {
        document.getElementById('display').innerHTML += value;
    } else if (!clicked) {
        alert ("Number limit reached");
        //if operator has not been clicked, give alert
        //prevents multiple alerts from happening right after the display is cleared
    }

    if (clicked) {
        document.getElementById('display').innerText = "";
        document.getElementById('display').innerHTML += value;
        clicked = false;
    }
}

var equalClicked = false;

function numSave(value) {
    if(typeof(num1) == 'undefined') {
        num1 = document.getElementById('display').textContent;
        num1 = parseFloat(num1);
        
    } else if (equalClicked){
        equalClicked = false;
    } else {
        num2 = document.getElementById('display').textContent;
        num2 = parseFloat(num2);
        operate();
    }
    opClicked = value;
    clicked = true;
}

var opClicked;

function percentKey() {
    num2 = document.getElementById('display').textContent;
    num2 = parseFloat(num2);
    
    var perCalc = num1 * num2 / 100      
    num2 = perCalc;
}

function equal() {
    if (typeof(num1) == 'number') {
        num2 = document.getElementById('display').textContent;
        num2 = parseFloat(num2);
        equalClicked = true;
    } else {
        
    }
    operate();
}

function add(num1, num2) {
    var sum = num1 + num2;
    var numString = sum.toString();
    var numArray = numString.split(".");
    if (numString.length > 11) {
        var postDec = 10 - numArray[0].length;
        sum = parseFloat(numString).toFixed(postDec);
    }
    document.getElementById('display').innerHTML = sum;
    this.num1 = sum;
}

function subtract(num1, num2) {
    var diff = num1 - num2;
    var numString = diff.toString();
    var numArray = numString.split(".");
    if (numString.length > 11) {
        var postDec = 10 - numArray[0].length;
        diff = parseFloat(numString).toFixed(postDec);
    }
    document.getElementById('display').innerHTML = diff;
    this.num1 = diff;    
}

function multiply(num1, num2) {
    var prod = num1 * num2;
    var numString = prod.toString();
    var numArray = numString.split(".");
    if (numString.length > 11) {
        var postDec = 10 - numArray[0].length;
        prod = parseFloat(numString).toFixed(postDec);
    }
    document.getElementById('display').innerHTML = prod;
    this.num1 = prod;  
}

function divide(num1, num2) {
    var quot = num1 / num2;
    var numString = quot.toString();
    var numArray = numString.split(".");
    if (numString.length > 11) {
        var postDec = 10 - numArray[0].length;
        quot = parseFloat(numString).toFixed(postDec);
    }
    document.getElementById('display').innerHTML = quot;
    this.num1 = quot;  
}

function operate() {
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

function symChange() {
    var strStore = document.getElementById('display').innerText;
    if (strStore.includes("-")) {
        var posString = strStore.split("-").pop();
        document.getElementById('display').innerText = posString;
        //pop removes the everything after negative sign from array and returns that element
    } else {
        strStore = "-" + strStore;
        document.getElementById('display').innerText = strStore;
    }
}



