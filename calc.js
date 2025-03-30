function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
// console.log(divide(10,2));

let a = "";
let operator = "";
let b = "";

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);

        case "-":
            return subtract(a, b);

        case "*":
            return multiply(a, b);

        case "/":
            return divide(a, b);
    }
}
// console.log(operate("+", 1, 2));


// const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const btnAdd = document.querySelector(".btnAdd");
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

    if (display.textContent == 0) {
        a = btn9.textContent;
        console.log(a);
        display.textContent = a;
    }

    if (a != "" && operator != "") {
        b += btn9.textContent;
        console.log(b);
        display.textContent = b;
    }

});

btnAdd.addEventListener("click", () => {
    if (a != "") {
        operator = btnAdd.textContent;
        console.log(operator);
    }
});

btnEqual.addEventListener("click", () => {
    display.textContent =
        operate(operator, Number(a), Number(b));
    console.log
        (operate(operator, Number(a), Number(b)))
});

btn8.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = btn8.textContent;
        a = display.textContent
        console.log(a);
    }
    else {
        display.textContent += btn8.textContent;
        a = display.textContent
        console.log(a);
    }
});

btn7.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = btn7.textContent;
        a = display.textContent
        console.log(a);
    }
    else {
        display.textContent += btn7.textContent;
        a = display.textContent
        console.log(a);
    }
});

btn6.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = btn6.textContent;
        a = display.textContent
        console.log(a);
    }
    else {
        display.textContent += btn6.textContent;
        a = display.textContent
        console.log(a);
    }
});

btn5.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = btn5.textContent;
        a = display.textContent
        console.log(a);
    }
    else {
        display.textContent += btn5.textContent;
        a = display.textContent
        console.log(a);
    }
});

btn4.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = btn4.textContent;
        a = display.textContent
        console.log(a);
    }
    else {
        display.textContent += btn4.textContent;
        a = display.textContent
        console.log(a);
    }
});

btn3.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = btn3.textContent;
        a = display.textContent
        console.log(a);
    }
    else {
        display.textContent += btn3.textContent;
        a = display.textContent
        console.log(a);
    }
});

btn2.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = btn2.textContent;
        a = display.textContent
        console.log(a);
    }
    else {
        display.textContent += btn2.textContent;
        a = display.textContent
        console.log(a);
    }
});

btn1.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = btn1.textContent;
        a = display.textContent
        console.log(a);
    }
    else {
        display.textContent += btn1.textContent;
        a = display.textContent
        console.log(a);
    }
});

btn0.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = btn0.textContent;
        a = display.textContent
        console.log(a);
    }
    else {
        display.textContent += btn0.textContent;
        a = display.textContent
        console.log(a);
    }
});

