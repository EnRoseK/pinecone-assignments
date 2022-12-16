const row = 10;
let result = '';

for (let i = 1; i <= row - 1; i++) result += ' ';

result += '1\n';

for (let i = 2; i <= row; i++) {
    for (let j = 1; j <= row - i; j++) result += ' ';

    for (let k = 1; k <= Math.floor(i / 2); k++) {
        result += k + ' ';

        if (k === Math.floor(i / 2) && i % 2 !== 0) result += k + 1 + ' ';
    }

    for (let l = Math.floor(i / 2); l >= 1; l--) {
        result += l + ' ';
    }

    result += '\n';
}

console.log(result);

// const row = 7;
// let heart = '';

// for (let i = Math.floor(row / 2); i <= row; i += 2) {
//   for (let j = 1; j < row - i; j += 2) heart += '  ';

//   for (let j = 1; j <= i; j++) heart += '* ';

//   for (let j = 1; j <= row - i; j++) heart += '  ';

//   for (let j = 1; j <= i; j++) heart += '* ';
//   heart += '\n';
// }

// for (let i = row; i >= 1; i--) {
//   for (let j = i; j < row; j++) heart += '  ';

//   for (let j = 1; j <= i * 2 - 1; j++) heart += '* ';

//   heart += '\n';
// }

// console.log(heart);
