// add
// subtract
// multiply
// divide   

let num1 ;
let operator;
let num2 ;

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
// console.log(multiply(1, 2));


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
// console.log(operate("-",8, 3));


// let display = document.querySelector(".display");
// const digit9 = document.querySelector(".a9");
// const digit8 = document.querySelector(".a8");
// const digit7 = document.querySelector(".a7");
// const digit6 = document.querySelector(".a6");
// const digit5 = document.querySelector(".a5");
// const digit4 = document.querySelector(".a4");
// const digit3 = document.querySelector(".a3");
// const digit2 = document.querySelector(".a2");
// const digit1 = document.querySelector(".a1");
// const digit0 = document.querySelector(".a0");


// digit9.addEventListener("click", () => {
//     display.innerHTML=digit9.innerText;
// });

// digit8.addEventListener("click", () => {
//     display.innerHTML=digit8.innerText;
// });

// digit7.addEventListener("click", () => {
//     display.innerHTML=digit7.innerText;
// });

// digit6.addEventListener("click", () => {
//     display.innerHTML=digit6.innerText;
// });

// digit5.addEventListener("click", () => {
//     display.innerHTML=digit5.innerText;
// });

// digit4.addEventListener("click", () => {
//     display.innerHTML=digit4.innerText;
// });

// digit3.addEventListener("click", () => {
//     display.innerHTML=digit3.innerText;
// });

// digit2.addEventListener("click", () => {
//     display.innerHTML=digit2.innerText;
// });
// let displayContentSave;
// digit1.addEventListener("click", () => {
//     display.innerHTML=digit1.innerText;
//     displayContentSave = display.innerHTML;
// });

// digit0.addEventListener("click", () => {
//     display.innerHTML=digit0.innerText;
//     displayContentSave = display.innerHTML;

// });
// console.log(displayContentSave);

// You should store the content of the display (the number) in a variable for use in the next step.

// user input n + n (=press) value shown 
// calculator should shown input value or after result at a time.
// user input now n + n - n and so on , first pair value solve show when next operator (- pressed) will input. 
// any operator will be less light in css so u know which operator is selected.
// Round the answers with long decimals for not overflowing display.
// Pressing = before entering operator or number cause nothing.
// Pressing Clear remove all previous shits.
// Divide n by 0 shows Error in dislay. 
//
// Disable the . button if there’s already a decimal separator in the display. 
// Add X remove button so user can remove last n.
// Add keyboard support to digits, operators, . , clear .....etc