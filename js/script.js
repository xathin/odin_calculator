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

        case '-':
            return subtract(op1, op2);

        case '*':
            return multiply(op1, op2);

        case '/':
            if (op2 == 0) {
                alert("Cannot divide by zero!");
                clearDisplay();
                return null;
            } else {
                return divide(op1, op2);
            }

        default:
            break;
    }
}

const display = document.querySelector('#display');

let displayString = "0";

const values = [];

function updateDisplay() {
    if (displayString) {
        display.textContent = Math.round(parseFloat(displayString) * 1000000 + Number.EPSILON) / 1000000;
    }
}

function clearDisplay() {
    displayString = "0";
    values.splice(0, values.length);
}

const btns = document.querySelectorAll('button');

let total = 0;

function validInput(input) {
    switch (input) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '*':
        case '-':
        case '+':
        case '/':
        case '=':
        case 'c':
        case 'backspace':
        case '.':
        case 'enter':
            return true;

        default:
            break;
    }
    return false;
}

function keyListener(press) {
    let key;
    if (press.target === document.body) {
        key = press.key.toLowerCase();
    } else {
        key = press.target.getAttribute('id');
    }
    if (!validInput(key)) {
        return;
    }
    if (key === '=' || key === 'enter') {
        if (values.length < 2) {
            return;
        }
        values.push(parseFloat(displayString));
        console.log(values.toString());
        // run operation(s)
        total = values.shift();
        while (values.length > 0 && total) {
            let operation = values.shift();
            let op2 = values.shift();
            total = operate(operation, total, op2);
            console.log(String(total));
        }
        displayString = String(total);
        updateDisplay();
        clearDisplay();
        total = 0;
        return;
    } else if (key === 'c') {
        clearDisplay();
    } else if (key === 'backspace') {
        if (displayString.length > 1) {
            displayString = displayString.slice(0, -1);
        } else {
            displayString = "0";
        }
    } else {
        if (displayString === "0") {
            if (key == '+' || key == '-' || key == '*' || key == '/') {
                return;
            } else {
                displayString = key;
            }
        } else {
            if (key == '+' || key == '-' || key == '*' || key == '/') {
                values.push(parseFloat(displayString));
                values.push(key);
                displayString = "";
                console.log(values.toString());
                return;
            } else {
                displayString += key;
            }
        }
    }
    updateDisplay();
}

const body = document.body;
body.addEventListener('keydown', keyListener);

btns.forEach((btn) => {
    if (!parseInt(btn.getAttribute('id')) && btn.getAttribute('id') != "0") {
        btn.classList.add("operation");
    }
    btn.addEventListener('click', keyListener);
});

updateDisplay();