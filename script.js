var inputedNumbers = [];

// 4 operations
function addicion(num1, num2) {
    let result = num1 + num2;
    console.log(result);
};

function subtraction(num1, num2) {
    let result = num1 - num2;
    console.log(result);
};

function multiplication(num1, num2) {
    let result = num1 * num2;
    console.log(result);
};

function division(num1, num2) {
    let result = num1 / num2;
    console.log(result);
};

//main function
function operate(operator, num1, num2) {

    if (operator == "+") {
        addicion(num1, num2);
    }
    if (operator == "-") {
        subtraction(num1, num2);
    }
    if (operator == "*") {
        multiplication(num1, num2);
    }
    if (operator == "/") {
        division(num1, num2);
    }
};


function validator(num) {
    const display = document.getElementById('numbers-display');
    var total = [];
    if (num == "1") {
        inputedNumbers.push("1");
        total = [parseInt(inputedNumbers.join(''))]
        console.log(total)
        display.innerHTML = total;
        return total;
    }
    else if (num === "2") {
        inputedNumbers.push("2");
        total = [parseInt(inputedNumbers.join(''))]
        display.innerHTML = total;
        return total;
    }
    else if (num === "3") {
        inputedNumbers.push("3")
        total = [parseInt(inputedNumbers.join(''))];
        display.innerHTML = total;
        return 3;
    }
    else if (num === "4") {
        inputedNumbers.push("4");
        total = [parseInt(inputedNumbers.join(''))]
        display.innerHTML = total;
        return 4;
    }
    else if (num === "5") {
        inputedNumbers.push("5");
        total = [parseInt(inputedNumbers.join(''))]
        display.innerHTML = total;
        return 5;
    }
    else if (num === "6") {
        inputedNumbers.push("6");
        total = [parseInt(inputedNumbers.join(''))]
        display.innerHTML = total;
        return 6;
    }
    else if (num === "7") {
        inputedNumbers.push("7");
        total = [parseInt(inputedNumbers.join(''))]
        display.innerHTML = total;
        return 7;
    }
    else if (num === "8") {
        inputedNumbers.push("8");
        total = [parseInt(inputedNumbers.join(''))]
        display.innerHTML = total;
        return 8;
    }
    else if (num === "9") {
        inputedNumbers.push("9");
        total = [parseInt(inputedNumbers.join(''))]
        display.innerHTML = total;
        return 9;
    }
    else if (num === "0") {
        inputedNumbers.push("0");
        total = [parseInt(inputedNumbers.join(''))]
        display.innerHTML = total;
        return 0;
    }
};


const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btn0 = document.getElementById('0');

btn1.addEventListener('click', () => validator("1"));
btn2.addEventListener('click', () => validator("2"));
btn3.addEventListener('click', () => validator("3"));
btn4.addEventListener('click', () => validator("4"));
btn5.addEventListener('click', () => validator("5"));
btn6.addEventListener('click', () => validator("6"));
btn7.addEventListener('click', () => validator("7"));
btn8.addEventListener('click', () => validator("8"));
btn9.addEventListener('click', () => validator("9"));
btn0.addEventListener('click', () => validator("0"));





/*
var defaultValue = 0;

if (selected != null){
   defaultValue = selected
}

console.log(defaultValue)
*/
