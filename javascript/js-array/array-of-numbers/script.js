const arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

let sum = 0,
    max = arrayOfNumbers[0],
    min = arrayOfNumbers[0];

for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    max = Math.max(arrayOfNumbers[i], max);
    min = Math.min(arrayOfNumbers[i], min);
}

for (let i = arrayOfNumbers.length - 1; i >= 0; i--) arrayOfNumbers[i + 1] = arrayOfNumbers[i];
arrayOfNumbers[0] = 86;

arrayOfNumbers[arrayOfNumbers.length] = 55;

console.log(`Sum: ${sum}, Max: ${max}, Min: ${min}, New Array: ${arrayOfNumbers}`);
