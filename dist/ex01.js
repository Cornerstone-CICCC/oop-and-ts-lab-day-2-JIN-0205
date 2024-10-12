"use strict";
// Create a function `transformInput` that accepts either a string or a number.
// - If it's a string, reverse the string.
// - If it's a number, return the factorial of the number.
// - If an unsupported type is passed, throw an error.
// - The function should have overloads for both the string and number types.
// - Return type: string for string inputs, number for number inputs.
function transformInput(x) {
    if (typeof x === "string") {
        console.log(x.split("").reverse().join(""));
    }
    else if (typeof x === "number") {
        let factorialNum = 1;
        for (let i = x; i > 0; i--) {
            factorialNum = factorialNum * i;
        }
        console.log(factorialNum);
    }
}
// Expected output:
transformInput("TypeScript"); // "tpircSepyT"
transformInput(5); // 120
