const readline = require("readline");

// 1. Configurando readline para recibir entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Limpiar la consola antes de comenzar la interacción
console.clear();

// 3. Función fizzBuzz: lógica principal del FizzBuzz con rangos y divisores personalizados
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

// 4. Función para medir el tiempo de ejecución
function trackExecutionTime(callback) {
    const startTime = Date.now();
    callback();
    const endTime = Date.now();
    console.log(`Execution time: ${endTime - startTime} ms`);
}

// 5. Preguntamos al usuario por los rangos y divisores
rl.question("Enter the start of the range: ", (start) => {
    rl.question("Enter the end of the range: ", (end) => {
        rl.question("Enter the divisor for Fizz: ", (fizzDivisor) => {
            rl.question("Enter the divisor for Buzz: ", (buzzDivisor) => {

                // 6. Convertimos las respuestas a números enteros
                start = parseInt(start);
                end = parseInt(end);
                fizzDivisor = parseInt(fizzDivisor);
                buzzDivisor = parseInt(buzzDivisor);

                // 7. Llamamos a trackExecutionTime que ejecuta fizzBuzz con los valores ingresados por el usuario
                trackExecutionTime(() => fizzBuzz(start, end, fizzDivisor, buzzDivisor));

                // 8. Cerramos readline para finalizar la interacción
                rl.close();
            });
        });
    });
});
