//Initialize
let operand1 = null;
let operand2 = null;
let operator = null;
let currentValue = "";
let completeOperation = "";
const currentNumber = document.querySelector('#currentNumber');
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
const decimalBtn = document.querySelector('#decimal');
const addBtn = document.querySelector('#addition');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const numberButtons = document.querySelectorAll('.number');
const posNegBtn = document.querySelector('#posNeg');
const deleteBtn = document.querySelector('#delete');
const modulusBtn = document.querySelector('#modulus');

//Operation functions
function add(a,b) {
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
function operate(operator, operand1, operand2){
    return operator(operand1, operand2);
}

//Update display
function updateCurrentNumber() {
    currentNumber.textContent = currentValue;
}
numberButtons.forEach((button) => {
    
    button.addEventListener('click', (e) => {
        if (currentValue === "") { //First entry
        currentValue = e.target.textContent;
    }   else if (e.target.textContent === '.' && currentValue.includes('.')) { //prevent multiple decimals
        return;
    }   else {
        currentValue += e.target.textContent; //Any entry but the first or second decimal
    }
        updateCurrentNumber();
    })
})
