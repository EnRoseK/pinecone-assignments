// 1

// const n = 10;

// let sum = 0,
//   i = 0;

// while (i <= n) {
//   sum += i;
//   i++;
// }

// console.log(sum);

// 2
// const n = 20;

// let sum = 0,
//   i = 0;

// while (i <= n) {
//   sum += i;
//   i += 2;
// }

// console.log(sum);

// 3
// const n = 7919;

// let i = 2,
//   isPrime = true;

// while (i <= n / 2) {
//   if (n % i === 0) isPrime = false;
//   i++;
// }

// isPrime === true ? console.log('Yes') : console.log('No');

// 4
// const n = 100;
// let stars = '',
//   i = 0;

// while (i < n) {
//   stars += '*';
//   i++;
// }

// console.log(stars);

// 5
// const n = 10;
// let i = 0,
//   stars = '';

// while (i < n) {
//   let j = 0;
//   while (j < n) {
//     stars += '* ';
//     j++;
//   }

//   stars += '\n';

//   i++;
// }

// console.log(stars);

// 6
// const n = 10;
// let i = 1,
//   stars = '';

// while (i <= n) {
//   let j = 1;

//   if (i === 1 || i === n) {
//     while (j <= n) {
//       stars += '* ';
//       j++;
//     }
//   } else {
//     stars += '* ';
//     while (j < n - 1) {
//       stars += '  ';
//       j++;
//     }
//     stars += '* ';
//   }

//   stars += '\n';
//   i++;
// }

// console.log(stars);

// 7
// const n = 10;
// let multiply = 1,
//   i = 1;

// while (i <= n) {
//   multiply *= i;
//   i++;
// }

// console.log(multiply);

// 8
// const n = 10;
// let count = 1,
//   f1 = 1,
//   f2 = 1,
//   fcurrent,
//   result = '';

// while (count <= n) {
//   if (count === 1) result += ' ' + f1;
//   else if (count === 2) result += ' ' + f2;
//   else {
//     fcurrent = f1 + f2;
//     result += ' ' + fcurrent;
//     f1 = f2;
//     f2 = fcurrent;
//   }

//   count++;
// }

// console.log(result);

// 9
// let n = 101,
//   nCopy = n;

// let copyNumber = 0;

// while (n > 0) {
//   copyNumber = copyNumber * 10 + (n % 10);
//   n = Math.round(n / 10);
// }

// copyNumber === nCopy ? console.log('Palindrome number') : console.log('Not a palindrome number');

// 10
// let n = 1234567890,
//   count = 0;

// while (n > 0) {
//   n = Math.round(n / 10);
//   count++;
// }

// console.log(count);
