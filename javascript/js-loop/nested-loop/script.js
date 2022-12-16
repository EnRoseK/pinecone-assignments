// 1
const num = 5;
let result = '';

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) result += j + ' ';

    result += '\n';
}

console.log(result);

// 2
const input = 5;
let output = '';

for (let i = 1; i <= input; i++) {
    for (let j = input; j >= i; j--) output += j + ' ';

    output += '\n';
}

console.log(output);
