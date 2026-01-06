//Variable declarations
let operand1 = null;
let operand2 = null;
let operator = null;
let currentValue = 0;
let completeOperation = "";

//Display selectors

const currentNumber = document.querySelector('#currentNumber');
const completeOperationDisplay = document.querySelector('#completeOperation');

//Number buttons
const zeroBtn = document.querySelector('#zero');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');

//Function and operation buttons
const decimalBtn = document.querySelector('#decimal');
const addBtn = document.querySelector('#addition');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const posNegBtn = document.querySelector('#posNeg');
const deleteBtn = document.querySelector('#delete');
const modulusBtn = document.querySelector('#modulus');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const functionButtons = document.querySelectorAll('.function');

//Operation functions
function addition(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}
function modulus(a,b) {
    return a%b;
}
function operate(operator, operand1, operand2){
    switch (operator){
        case "addition": 
            return addition(operand1,operand2);
            break;
        case "subtract": 
            return subtract(operand1,operand2);
            break;
        case "divide":
            return divide(operand1,operand2);
            break;
        case "multiply":
            return multiply(operand1,operand2);
            break;
        case "modulus":
            return modulus(operand1,operand2);
    }
}

//Update display
function updateCurrentNumber() {
    if (isNaN(currentValue)){currentValue=0};
    currentNumber.textContent = currentValue;
}
function updateCompleteOperation() {
    completeOperationDisplay.textContent = completeOperation;
}

numberButtons.forEach((button) => {
    
    button.addEventListener('click', (e) => {
        if (currentValue === 0) { //First entry or first entry after operator
        currentValue = e.target.textContent;
    }   else if (e.target.textContent === '.' && currentValue.includes('.')) { //prevent multiple decimals
        return;
    }   else {
        currentValue += e.target.textContent; //Any entry but the first or second decimal
    }
        updateCurrentNumber();
    })
})

//Operator event listeners
operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (operand1 === null) {
            if (e.target.textContent == "=") {
                return
            }
            operand1 = parseFloat(currentValue);
            completeOperation += currentValue + " " + e.target.textContent + " ";
            updateCompleteOperation();
            currentValue = 0;
            updateCurrentNumber();
            operator = e.target.id;
        }
        if (operand1 !== null && e.target.textContent == "=") {
            operand2 = parseFloat(currentValue);
            completeOperation += operand2 + " = ";
            updateCompleteOperation();
            currentValue = operate(operator,operand1,operand2)
            updateCurrentNumber();
        }
    })
})


//Calculator function event listeners
functionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {
            case "delete":
                currentValue = parseFloat(currentValue.toString().slice(0,-1));
                break;
            case "clear":
                operand1 = null;
                operand2 = null;
                operator = null;
                currentValue = 0;
                completeOperation ="";
                updateCompleteOperation() 
                break;
            case "posNeg":
                currentValue *= -1;
                break;
        }
        updateCurrentNumber();
    })
})