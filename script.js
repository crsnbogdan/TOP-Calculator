const numberBtns = document.querySelectorAll('.number-button');
const operatorBtns = document.querySelectorAll('.operator-button');
let displayVal = document.querySelector(`#display`);

displayVal.textContent = '';
let aVal = '';
let bVal = '';
let operatorVal = null;


numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let btnVal = Number(btn.textContent);
        updateOperandVal(btnVal);
        updateDisplayValue();
    });
});


operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        operatorVal = btn.textContent;
    });
});

function updateOperandVal(btnVal) {
    if (aVal === '0') {
        aVal = '';
    }
    if (bVal === '0') {
        bVal = '';
    }

    if (aVal === '' || !operatorVal) {
        aVal += String(btnVal);
    } else if (aVal && operatorVal) {
        bVal += String(btnVal);

    }
}

function updateDisplayValue() {
    if (aVal && bVal === '') {
        displayVal.textContent = aVal;
    } else if (aVal && bVal) {
        displayVal.textContent = bVal;

    }
}

function executeOperation() {
    aVal = Number(aVal);
    bVal = Number(bVal);

    if (aVal === '' && bVal === '') {}
    let result = null;
    if (aVal && bVal && operatorVal) {
        if (operatorVal == '/') {
            result = divide(aVal, bVal);
            aVal = String(result);
            bVal = '';
        } else if (operatorVal == '*') {
            result = multiply(aVal, bVal);
            aVal = String(result);
            bVal = '';
        } else if (operatorVal == '-') {
            result = subtract(aVal, bVal);
            aVal = String(result);
            bVal = '';
        } else {
            result = add(aVal, bVal);
            aVal = String(result);
            bVal = '';
        }
    }
}


function divide(a, b) {
    return parseFloat((a / b).toFixed(1));
}

function multiply(a, b) {
    return parseFloat((a * b).toFixed(1));
}

function subtract(a, b) {
    return parseFloat((a - b).toFixed(1));
}

function add(a, b) {
    return parseFloat((a + b).toFixed(1));
}

let clear = document.querySelector('#C');
let clearEntry = document.querySelector('#CE');

clear.addEventListener(`click`, () => {
    aVal = '';
    bVal = '';
    operatorVal = null;
    displayVal.textContent = '';
})

clearEntry.addEventListener(`click`, () => {
    if (aVal && bVal === '') {
        aVal = null;
        displayVal.textContent = '';
    } else if (aVal && bVal) {
        bVal = '';
        updateDisplayValue();
    }
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (!operatorVal && !aVal && bVal) return;
    executeOperation();
    updateDisplayValue();
    operatorVal = null;
})