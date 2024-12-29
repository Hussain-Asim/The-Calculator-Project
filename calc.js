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


