function add(op1, op2) {
    return op1 + op2;
}

function subtract(op1, op2) {
    return op1 - op2;
}

function multiply(op1, op2) {
    return op1 * op2;
}

function divide(op1, op2) {
    return op1 / op2;
}

function operate(operation, op1, op2) {
    switch (operation) {
        case '+':
            return add(op1, op2);
            break;

        case '-':
            return subtract(op1, op2);
            break;

        case '*':
            return multiply(op1, op2);
            break;

        case '/':
            return divide(op1, op2);
            break;

        default:
            break;
    }
}

const display = document.querySelector('#display');

var displayString = "0";

function updateDisplay() {
    display.textContent = displayString;
}

const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.getAttribute('id') === '=') {
            // run operation(s)
        } else if (e.target.getAttribute('id') === 'clear') {
            displayString = "0";
        } else {
            if (displayString === "0") {
                displayString = e.target.getAttribute('id');
            } else {
                displayString += e.target.getAttribute('id');
            }
        }
        updateDisplay();
    });
});

updateDisplay();