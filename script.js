var inputedNumbers = [];
var inputedAuxNumb = [];
var totalDisplayed = [];
var contador = 0;
var operator = 'op';
var total = [];
var aux = [];
var totDisplayed = [];
var display_total = 0;

//Select the id's of the numbers buttons
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

//Select the id of the display
const display = document.getElementById('numbers-display');

//Select the id's of the operators buttons
const additionBtn = document.getElementById('addition');
const subtractionBtn = document.getElementById('subtraction');
const multiplicationBtn = document.getElementById('multiplication');
const divisionBtn = document.getElementById('division');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear')

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

additionBtn.addEventListener('click', () => operator = "+");
subtractionBtn.addEventListener('click', () => operator = "-");
multiplicationBtn.addEventListener('click', () => operator = "x");
divisionBtn.addEventListener('click', () => operator = "/");

clearBtn.addEventListener('click', () => clearAll());

equalsBtn.addEventListener('click', () => equals());


function equals() {
    if (display_total === 0){
        operate(operator, ...total, ...aux);
        return display_total;
    }
    else if (display_total !== 0) {
        operate(operator, display_total, ...totDisplayed);
        return display_total;
    }
};

function clear() {
    inputedNumbers.length = 0;
    inputedAuxNumb.length = 0;
    aux.length = 0;
    total.lenght = 0;
    operator = 'op'
    totDisplayed.length = 0;
    totalDisplayed.length = 0;
    contador = 0
};

function clearAll() {
    inputedNumbers.length = 0;
    inputedAuxNumb.length = 0;
    aux.length = 0;
    total.lenght = 0;
    operator = 'op';
    totDisplayed.length = 0;
    totalDisplayed.length = 0;
    contador = 0;
    display_total = 0;
    display.innerHTML = display_total;
};

//Execute the 4 operations and display the result on the UI
function addition(num1, num2) {
    display_total = num1 + num2;
    display.innerHTML = display_total;
    clear();
    return display_total;
};

function subtraction(num1, num2) {
    display_total = num1 - num2;
    display.innerHTML = display_total;
    clear();
    return display_total;
};

function multiplication(num1, num2) {
    display_total = num1 * num2;
    display.innerHTML = display_total;
    clear();
    return display_total;
};

function division(num1, num2) {
    if (num1 === 0 && num2 === 0) {
        alert("Please, don't try to crash me!");
        clear();
    }
    else {
        display_total = num1 / num2;
        display.innerHTML = display_total;
        clear();
        return display_total;
    }
};


function operate(operator, num1, num2) {
    if (operator == "+") {
        addition(num1, num2);
    }
    if (operator == "-") {
        subtraction(num1, num2);
    }
    if (operator == "x") {
        multiplication(num1, num2);
    }
    if (operator == "/") {
        division(num1, num2);
    }
};

//Validates the numbers inputed by the user in the UI and add them to the respective arrays
//This method work's with two arrays, one is used before the operator is selected and the other after the selection
function validator(num) {
    if (contador < 10) {
        if (contador < 5 && operator === 'op') {
            if (num == "1") {
                inputedNumbers.push("1");
                total = [parseInt(inputedNumbers.join(''))]
                display.innerHTML = total;
                return total, contador++;
            }
            else if (num === "2") {
                inputedNumbers.push("2");
                total = [parseInt(inputedNumbers.join(''))]
                display.innerHTML = total;
                return total, contador++;
            }
            else if (num === "3") {
                inputedNumbers.push("3")
                total = [parseInt(inputedNumbers.join(''))];
                display.innerHTML = total;
                return total, contador++;
            }
            else if (num === "4") {
                inputedNumbers.push("4");
                total = [parseInt(inputedNumbers.join(''))]
                display.innerHTML = total;
                return total, contador++;
            }
            else if (num === "5") {
                inputedNumbers.push("5");
                total = [parseInt(inputedNumbers.join(''))]
                display.innerHTML = total;
                return total, contador++;
            }
            else if (num === "6") {
                inputedNumbers.push("6");
                total = [parseInt(inputedNumbers.join(''))]
                display.innerHTML = total;
                return total, contador++;
            }
            else if (num === "7") {
                inputedNumbers.push("7");
                total = [parseInt(inputedNumbers.join(''))]
                display.innerHTML = total;
                return total, contador++;
            }
            else if (num === "8") {
                inputedNumbers.push("8");
                total = [parseInt(inputedNumbers.join(''))]
                display.innerHTML = total;
                return total, contador++;
            }
            else if (num === "9") {
                inputedNumbers.push("9");
                total = [parseInt(inputedNumbers.join(''))]
                display.innerHTML = total;
                return total, contador++;
            }
            else if (num === "0") {
                inputedNumbers.push("0");
                total = [parseInt(inputedNumbers.join(''))]
                display.innerHTML = total;
                return total, contador++;
            }
        }

        else if (operator !== 'op' && contador < 10 && display_total === 0) {
            if (num == "1") {
                inputedAuxNumb.push("1");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
            if (num == "2") {
                inputedAuxNumb.push("2");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
            if (num == "3") {
                inputedAuxNumb.push("3");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
            if (num == "4") {
                inputedAuxNumb.push("4");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
            if (num == "5") {
                inputedAuxNumb.push("5");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
            if (num == "6") {
                inputedAuxNumb.push("6");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
            if (num == "7") {
                inputedAuxNumb.push("7");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
            if (num == "8") {
                inputedAuxNumb.push("8");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
            if (num == "9") {
                inputedAuxNumb.push("9");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
            if (num == "0") {
                inputedAuxNumb.push("0");
                aux = [parseInt(inputedAuxNumb.join(''))]
                display.innerHTML = aux;
                return aux, contador++;
            }
        }
        else if ((operator !== 'op' || operator === 0) && display_total !== 0 && contador < 5) {
            if (num === "1") {
                totalDisplayed.push("1");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
            if (num === "2") {
                totalDisplayed.push("2");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
            if (num === "3") {
                totalDisplayed.push("3");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
            if (num === "4") {
                totalDisplayed.push("4");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
            if (num === "5") {
                totalDisplayed.push("5");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
            if (num === "6") {
                totalDisplayed.push("6");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
            if (num === "7") {
                totalDisplayed.push("7");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
            if (num === "8") {
                totalDisplayed.push("8");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
            if (num === "9") {
                totalDisplayed.push("9");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
            if (num === "0") {
                totalDisplayed.push("0");
                totDisplayed = [parseInt(totalDisplayed.join(''))]
                display.innerHTML = totDisplayed;
                return totDisplayed, contador++;
            }
        }
        else if (operator === 'op' && contador === 5) {
            alert("Select an operator");
            if ((operator !== 'op' || operator === 0) && display_total !== 0) {
                return totDisplayed;
            }
            else {
                return total;
            }
        }
    }
};