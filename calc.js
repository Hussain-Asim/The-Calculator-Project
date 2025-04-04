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
    return a / b;
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

/*
(9 + 9) + 
display first pair output 18 
and consider 18 as first number, with along operator +
*/

btnPlus.addEventListener("click", () => {

    if (a != "" && operator == "" && b == "") {
        operator = btnPlus.textContent;
        console.log(operator);
    }

    if (a != "" && operator != "" && b != "") {
        a = operate(Number(a), operator, Number(b));
        display.textContent = a;
        console.log(a);
        operator = btnPlus.textContent;
        console.log(operator);
        b = "";
        console.log(b);
        
    }

});

//When Equal pressed, show output, then consider it as first operator
//if display.textContent !="" then store it a .
// 


btnEqual.addEventListener("click", () => {

    if (a != "" && operator != "" && b != "") {

        a = operate(Number(a), operator, Number(b));
        display.textContent = a;
        console.log(a);
        operator = "";
        console.log(operator);
        b = "";
        console.log(b);
        

    }

});

