// 1
const findMax = (a, b) => {
    return a >= b ? a : b;
};

// 2
const findIndex = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return -1;
};

// 3
const findChar = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
};

// 4
const generateRandomNumber = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 5
const findAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];

    return sum / arr.length;
};

// 6
const findSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];

    return sum;
};

// 7
const isPrime = (num) => {
    let isPrime = true;

    for (let i = 0; i <= num / 2; i++) isPrime = num % i !== 0;

    return isPrime;
};

// 8
const upper = (str) => {
    return str.toUpperCase();
};

// 9
const lower = (str) => {
    return str.toLowerCase();
};

console.log(findMax(20, 100));
console.log(findIndex([10, 20, 23, 44, 1, 66, 92], 92));
console.log(findChar('Hello', 'e'));
console.log(generateRandomNumber(200, 150));
console.log(findAverage([10, 20, 30, 40, 50]));
console.log(findSum([10, 20, 30, 40, 50, 60]));
console.log(isPrime(13));
console.log(upper('Hello World'));
console.log(lower('JavaScript'));
