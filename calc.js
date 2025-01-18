// // add
// // subtract
// // multiply
// // divide   

// let num1 = "";
// let operator;
// let num2;

// function sum(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return num1 / num2;
// }
// // console.log(multiply(1, 2));


// function operate(operator, num1, num2) {
//     switch (operator) {
//         case "+":
//             return sum(num1, num2);
//         case "-":
//             return subtract(num1, num2);
//         case "*":
//             return multiply(num1, num2);
//         case "/":
//             return divide(num1, num2);
//         default:
//             return "Error!"

//     }
// }
// // console.log(operate("-",8, 3));


// let display = document.querySelector(".display-content");
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

// const clear = document.querySelector(".clear");

// // if any button clicked of numbers then replace that box over 0
// // function addNumbersToNum1(digitNo) {
// //     num1 += digitNo.textContent;
// //     console.log(num1);
// // }



// digit9.addEventListener("click", () => {
//     // display.textContent+=digit9.textContent;

//     if (display.textContent == 0) {
//         display.textContent = digit9.textContent;
//         num1 += digit9.textContent;
//         // console.log(num1);
//         // addNumbersToNum1(digit9);
//     }
//     else {
//         display.textContent += digit9.textContent;
//         num1 += digit9.textContent;
//         // console.log(num1);
//         // addNumbersToNum1(digit9);
//     }

// });
// // console.log(num1);


// digit8.addEventListener("click", () => {
//     if (display.textContent == 0) {
//         display.textContent = digit8.textContent;
//         num1 += digit8.textContent;
//         // console.log(num1);
//     }
//     else {
//         display.textContent += digit8.textContent;
//         num1 += digit8.textContent;
//         // console.log(num1);
//     }
// });

// digit7.addEventListener("click", () => {
//     if (display.textContent == 0) {
//         display.textContent = digit7.textContent;
//         num1 += digit7.textContent;

//     }
//     else {
//         display.textContent += digit7.textContent;
//         num1 += digit7.textContent;

//     }
// });

// digit6.addEventListener("click", () => {
//     if (display.textContent == 0) {
//         display.textContent = digit6.textContent;
//         num1 += digit6.textContent;

//     }
//     else {
//         display.textContent += digit6.textContent;
//         num1 += digit6.textContent;

//     }
// });

// digit5.addEventListener("click", () => {
//     if (display.textContent == 0) {
//         display.textContent = digit5.textContent;
//         num1 += digit5.textContent;

//     }
//     else {
//         display.textContent += digit5.textContent;
//         num1 += digit5.textContent;

//     }
// });

// digit4.addEventListener("click", () => {
//     if (display.textContent == 0) {
//         display.textContent = digit4.textContent;
//         num1 += digit4.textContent;

//     }
//     else {
//         display.textContent += digit4.textContent;
//         num1 += digit4.textContent;

//     }
// });

// digit3.addEventListener("click", () => {
//     if (display.textContent == 0) {
//         display.textContent = digit3.textContent;
//         num1 += digit3.textContent;

//     }
//     else {
//         display.textContent += digit3.textContent;
//         num1 += digit3.textContent;

//     }
// });

// digit2.addEventListener("click", () => {
//     if (display.textContent == 0) {
//         display.textContent = digit2.textContent;
//         num1 += digit2.textContent;

//     }
//     else {
//         display.textContent += digit2.textContent;
//         num1 += digit2.textContent;

//     }
// });

// digit1.addEventListener("click", () => {
//     if (display.textContent == 0) {
//         display.textContent = digit1.textContent;
//         num1 += digit1.textContent;

//     }
//     else {
//         display.textContent += digit1.textContent;
//         num1 += digit1.textContent;
//     }
// });

// digit0.addEventListener("click", () => {
//     if (display.textContent == 0) {
//         display.textContent = digit0.textContent;
//         num1 += digit0.textContent;
//         console.log(num1);
//     }
//     else {  
//         display.textContent += digit0.textContent;
//         num1 += digit0.textContent;
//         console.log(num1);

//     }
// });
// // console.log(num1);

// //when click operator then the operator button value should send into the function.

// const plus = document.querySelector(".plus");
// plus.addEventListener("click", ()=>{
// operate("+",num1);
// });

// ...........


// function add(num1, num2) {
//     return num1 + num2;
// }
// // console.log(add(24214,24124));

// function subtract(num1, num2) {
//     return num1 - num2;
// }
// // console.log(subtract(22,2));

// function multiply(num1, num2) {
//     return num1 * num2;
// }
// // console.log(multiply(1,2));

// function divide(num1, num2) {
//     return num1 / num2;
// }
// // console.log(divide(22, 22));

// let num1 = "";
// let num2 = "";
// let operand = "";


// function operate(operator, num1, num2) {
//     if (operator === "+") {
//         return add(num1, num2);
//     }
//     if (operator === "-") {
//         return subtract(num1, num2);
//     }
//     if (operator === "*") {
//         return multiply(num1, num2);
//     }
//     if (operator === "/") {
//         return divide(num1, num2);
//     }
// }
// console.log(operate("+", 2, 2));

// const displayContent = document.querySelector(".display-content");

//Step 5 first Half line:
//create functions that populates display when click digits button.
//when i click d9 then it should populate display and in that if displayContent is 0 then replace it, else add it.

//Step 5 next half line:
// You should store the content of the display (the number) in a variable for use in the next step.
//As from step 2: You’ll use these variables to update your display later.
//means before using any operator, save the digits values in num1 variable.
// I am actually using forEach and event listeners instead of writing each button of code. which is a headache offcourse.


//Step 6: You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.
// store num1 (any operator ) store num2 =(when pressed) runs operate and shows only output of that in displayContent.
//After click any operator, whatever digit i click its value should be saved in num2 and only that should be shown in displayContent.
//After num1, When click operator and then click any digit, that secondary digits should only be shown in displayContent.
// when press operator, if any of the digits i.e d8 clicks then it should be only shown in displayContent. and numbers should be saved in num2.
//


// let digits = document.querySelectorAll(".digits");

// const plus = document.querySelector(".plus");
// const minus = document.querySelector(".minus");
// const mul = document.querySelector(".mul");
// const division = document.querySelector(".division");

// let operators = document.querySelectorAll(".operators");

// //if digit is click before operator then first operation executes,
// // if their is operator clicked, then after operator ones executes.

// function firstOperation() {

//     digits.forEach((digit) => {
//         digit.addEventListener("click", () => {
//             if (displayContent.textContent == 0) {
//                 num1 = digit.textContent;
//                 displayContent.textContent = num1;
//             } else {
//                 num1 += digit.textContent;
//                 displayContent.textContent = num1;

//             }
//         })
//     })
// }



// function secondOperation() {

//     operators.forEach((operator) => {
//         operator.addEventListener("click", () => {
//             console.log(num1);
//             operand = operator.textContent;
//             console.log(operand);

//             digits.forEach((digit) => {
//                 digit.addEventListener("click", () => {
//                     num2 += digit.textContent;
//                     displayContent.textContent = num2;
//                     console.log(num2);
//                 })
//             })
//         })
//     })
// }

//Maybe pressing an operator button can toggle some sort of "switch", and the number buttons will just check the value of that switch before deciding which of num1 one and num2 they will affect


// digits.forEach((digit) => {
//     digit.addEventListener("click", () => {
//         if (displayContent.textContent == 0) {
//             num1 = digit.textContent;
//             displayContent.textContent = num1;
//         } else {
//             num1 += digit.textContent;
//             displayContent.textContent = num1;

//         }
//     })
// })

// operators.forEach((operator) => {
//     operator.addEventListener("click", () => {
//         console.log(num1);
//         operand = operator.textContent;
//         console.log(operand);

        
//             for (const digits of digits) {
//                 digits.addEventListener("click", () => {
//                     num2 += digits.textContent;
//                     displayContent.textContent = num2;
//                     console.log(num2);
//                 })
            
//         }
//     })
// })


//

// so u are saying using function name(num1 or num2)


//When i press = then num1, operator which i choose, num2, then it should show that result in displayContent
/*You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.*/
//function or strings textcontent flaws, check the type of the data 

// const equal = document.querySelector(".equal");
// equal.addEventListener("click", () => {
//     displayContent.textContent = operate(operand, num1, num2)
//     console.log(operate(operand, num1, num2));
// })
// console.log(operate(operand,num1,num2));


function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(24214,24124));

function subtract(num1, num2) {
    return num1 - num2;
}
// console.log(subtract(22,2));

function multiply(num1, num2) {
    return num1 * num2;
}
// console.log(multiply(1,2));

function divide(num1, num2) {
    return num1 / num2;
}
// console.log(divide(22, 22));

let num1 = "";
let num2 = "";
let operand = "";


function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
    if (operator === "-") {
        return subtract(num1, num2);
    }
    if (operator === "*") {
        return multiply(num1, num2);
    }
    if (operator === "/") {
        return divide(num1, num2);
    }
}
// console.log(operate("+", 2, 2));

const displayContent = document.querySelector(".display-content");

let digits = document.querySelectorAll(".digits");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const mul = document.querySelector(".mul");
const division = document.querySelector(".division");

let operators = document.querySelectorAll(".operators");