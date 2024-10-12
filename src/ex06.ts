// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.

function addValues(values: number[]): number;
function addValues(values: string[]): string;
function addValues(values: number[] | string[]): any {
  if (typeof values[0] === "number") {
    // console.log(values.reduce((acc, curr) => acc + curr, 0));
    const sum = (values as number[]).reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    return sum;
  } else {
    const concatenated = values.join("");
    console.log(concatenated);
    return concatenated;
  }
}

// Expected output:
addValues([1, 2, 3]); // 6
addValues(["Hello", " ", "World"]); // "Hello World"
