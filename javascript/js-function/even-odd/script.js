const oddNumbers = (num1, num2) => {
    const arr = [];
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) arr[arr.length] = i;
    }

    return arr;
};

const evenNumbers = (num1, num2) => {
    const arr = [];
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) arr[arr.length] = i;
    }

    return arr;
};

console.log(oddNumbers(1, 10));
console.log(evenNumbers(1, 10));
