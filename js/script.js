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