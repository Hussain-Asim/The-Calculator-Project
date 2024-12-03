// add
// subtract
// multiply
// divide   

let num1;
let operator;
let num2;

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


let display = document.querySelector(".display");
const digit9 = document.querySelector(".a9");
const digit8 = document.querySelector(".a8");
const digit7 = document.querySelector(".a7");
const digit6 = document.querySelector(".a6");
const digit5 = document.querySelector(".a5");
const digit4 = document.querySelector(".a4");
const digit3 = document.querySelector(".a3");
const digit2 = document.querySelector(".a2");
const digit1 = document.querySelector(".a1");
const digit0 = document.querySelector(".a0");

// if any button clicked of numbers then replace that box over 0


digit9.addEventListener("click", () => {
    // display.textContent+=digit9.textContent;

        if (display.textContent == 0) {
            display.textContent = digit9.textContent;
        }
        else {
            display.textContent += digit9.textContent;
        }

});

digit8.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = digit8.textContent;
    }
    else {
        display.textContent += digit8.textContent;
    }
});

digit7.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = digit7.textContent;
    }
    else {
        display.textContent += digit7.textContent;
    }
});

digit6.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = digit6.textContent;
    }
    else {
        display.textContent += digit6.textContent;
    }
});

digit5.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = digit5.textContent;
    }
    else {
        display.textContent += digit5.textContent;
    }
});

digit4.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = digit4.textContent;
    }
    else {
        display.textContent += digit4.textContent;
    }
});

digit3.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = digit3.textContent;
    }
    else {
        display.textContent += digit3.textContent;
    }
});

digit2.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = digit2.textContent;
    }
    else {
        display.textContent += digit2.textContent;
    }
});

digit1.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = digit1.textContent;
    }
    else {
        display.textContent += digit1.textContent;
    }
});

digit0.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = digit0.textContent;
    }
    else {
        display.textContent += digit0.textContent;
    }
});

// You should store the content of the display (the number) in a variable for use in the next step.

//When empty shows 0 otherwise when clicked replace.
// user input n + n (=press) value shown 
// calculator should shown input value or after result at a time.
// user input now n + n - n and so on , first pair value solve show when next operator (- pressed) will input. 


// any operator will be less light in css so u know which operator is selected.
// Round the answers with long decimals for not overflowing display.
// Pressing = before entering operator or number cause nothing.
// Pressing Clear remove all previous shits.
// Divide n by 0 shows Error in dislay. 
// Disable the . button if there’s already a decimal separator in the display. 
// Add X remove button so user can remove last n.
// Add keyboard support to digits, operators, . , clear .....etc