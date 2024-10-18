const readline = require("readline");

// 1. Configurate readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Clear console
console.clear();

// 3. FizzBuzz function main logic with custom ranges and divisors

console.log("Welcome to the FizzBuzz Challenge!");

function fizzBuzz(start, end, fizzDivisor, buzzDivisor) {
    for (let i = start; i <= end; i++) {
        if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
            console.log("FizzBuzz");
        } else if (i % fizzDivisor === 0) {
            console.log("Fizz");
        } else if (i % buzzDivisor === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// 4. Function to measure execution time
function trackExecutionTime(callback) {
    const startTime = Date.now();
    callback();
    const endTime = Date.now();
    console.log(`Execution time: ${endTime - startTime} ms`);
}

// 5. Ask the user for the ranges and divisors
rl.question("Enter the start of the range: ", (start) => {
    rl.question("Enter the end of the range: ", (end) => {
        rl.question("Enter the divisor for Fizz: ", (fizzDivisor) => {
            rl.question("Enter the divisor for Buzz: ", (buzzDivisor) => {

                // 6. Convert the answers to numbers
                start = parseInt(start);
                end = parseInt(end);
                fizzDivisor = parseInt(fizzDivisor);
                buzzDivisor = parseInt(buzzDivisor);

                // 7. Call trackExecutionTime with the values entered by the user
                trackExecutionTime(() => fizzBuzz(start, end, fizzDivisor, buzzDivisor));

                // 8. Close readline to finish
                rl.close();
            });
        });
    });
});
