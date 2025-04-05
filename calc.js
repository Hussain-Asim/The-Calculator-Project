function plus(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        display.textContent = "lmao";
    }
    else {
        return a / b;
    }
}
// console.log(divide(10,2));

let a = "";
let operator = "";
let b = "";

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return plus(a, b);

        case "-":
            return subtract(a, b);

        case "*":
            return multiply(a, b);

        case "/":
            return divide(a, b);
    }
}
// console.log(operate(1, "+", 6));


// const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

const btnPlus = document.querySelector(".btnPlus");
const btnSubtract = document.querySelector(".btnSubtract");
const btnMul = document.querySelector(".btnMul");
const btnDivide = document.querySelector(".btnDivide");

const btnClear = document.querySelector(".btnClear");

const btnEqual = document.querySelector(".btnEqual");

const btn9 = document.querySelector(".btn9")
const btn8 = document.querySelector(".btn8")
const btn7 = document.querySelector(".btn7")
const btn6 = document.querySelector(".btn6")
const btn5 = document.querySelector(".btn5")
const btn4 = document.querySelector(".btn4")
const btn3 = document.querySelector(".btn3")
const btn2 = document.querySelector(".btn2")
const btn1 = document.querySelector(".btn1")
const btn0 = document.querySelector(".btn0")

//First number

/*operator
 if first a(number) is there from pair, then plus sign works, if not then not.
*/

//2nd number only works if there is first number in the pair and operator also set.

/*press =, call operate function and update display with the output. 

*/

btn9.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn9.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn9.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn9.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn9.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btn8.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn8.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn8.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn8.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn8.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btn7.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn7.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn7.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn7.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn7.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btn6.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn6.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn6.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn6.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn6.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btn5.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn5.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn5.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn5.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn5.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btn4.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn4.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn4.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn4.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn4.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btn3.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn3.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn3.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn3.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn3.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btn2.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn2.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn2.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn2.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn2.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btn1.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn1.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn1.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn1.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn1.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btn0.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        a += btn0.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a == "" && operator == "" && b == "") {
        a = btn0.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "" && b != "") {
        b += btn0.textContent;
        console.log(b);
        display.textContent = b;
    }

    if (a != "" && operator != "" && b == "") {
        b = btn0.textContent;
        console.log(b);
        display.textContent = b;
    }
});

btnPlus.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        operator = btnPlus.textContent;
        console.log(operator);
    }

    if (a != "" && operator != "" && b != "") {
        a = operate(Number(a), operator, Number(b));
        display.textContent = parseFloat(a.toFixed(2));
        console.log(a); 
        operator = btnPlus.textContent;
        console.log(operator);
        b = "";
        console.log(b);

    }

});

//when pressing "-" if a and operator and b is "", it should be add as a.

btnSubtract.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        operator = btnSubtract.textContent;
        console.log("Operator", operator);
    }

    if (a == "" && operator == "" && b == "") {
        a = "-";
        console.log("Part of a", a);
    }

    if (a != "" && operator != "" && b != "") {
        a = operate(Number(a), operator, Number(b));
        display.textContent = a;
        console.log(a);
        operator = btnSubtract.textContent;
        console.log(operator);
        b = "";
        console.log(b);

    }

});

btnMul.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        operator = btnMul.textContent;
        console.log(operator);
    }

    if (a != "" && operator != "" && b != "") {
        a = operate(Number(a), operator, Number(b));
        display.textContent = a;
        console.log(a);
        operator = btnMul.textContent;
        console.log(operator);
        b = "";
        console.log(b);

    }

});

btnDivide.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        operator = btnDivide.textContent;
        console.log(operator);
    }

    if (a != "" && operator != "" && b != "") {
        a = operate(Number(a), operator, Number(b));
        display.textContent = a;
        console.log(a);
        operator = btnDivide.textContent;
        console.log(operator);
        b = "";
        console.log(b);

    }

});

btnClear.addEventListener("click", () => {

    display.textContent = 0;
    a = "";
    console.log(a);
    operator = "";
    console.log(operator);
    b = "";
    console.log(b);

});

btnEqual.addEventListener("click", () => {

    if (a != "" && operator != "" && b != "") {

        a = operate(Number(a), operator, Number(b));
        display.textContent = parseFloat(a.toFixed(2));
        console.log(a);
        a = "";
        console.log(a);
        operator = "";
        console.log(operator);
        b = "";
        console.log(b);
    }

});
// parseFloat(a.toFixed(2))