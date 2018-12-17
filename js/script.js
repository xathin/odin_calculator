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

let displayString = "0";

const values = [];

function updateDisplay() {
    display.textContent = displayString;
}

function clearDisplay() {
    displayString = "0";
    values.splice(0, values.length);
}

const btns = document.querySelectorAll('button');

let total = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let key = e.target.getAttribute('id');
        if (key === '=') {
            if (values.length == 0) {
                return;
            }
            values.push(parseInt(displayString));
            console.log(values.toString());
            // run operation(s)
            total = values.shift();
            while (values.length > 0) {
                let operation = values.shift();
                let op2 = values.shift();
                total = operate(operation, total, op2);
                console.log(total.toString());
            }
            displayString = total.toString();
            updateDisplay();
            clearDisplay();
            total = 0;
            return;
        } else if (key === 'clear') {
            clearDisplay();
        } else {
            if (displayString === "0") {
                if (key == '+' || key == '-' || key == '*' || key == '/') {
                    return;
                } else {
                    displayString = key;
                }
            } else {
                if (key == '+' || key == '-' || key == '*' || key == '/') {
                    values.push(parseInt(displayString));
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
    });
});

updateDisplay();