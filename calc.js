// add
// subtract
// multiply
// divide   

let num1 = 3;
let operator = '+';
let num2 = 5;


function sum(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
// console.log(divide(1, 2));


function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return sum(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Error!"

    }
}
// console.log(operate("+",num1, num2));

