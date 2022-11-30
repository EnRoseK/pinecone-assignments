const str1 = 'Hello';
const str2 = "My name's";
const str3 = `Javkhlant`;

const message = str1.concat(', ', str2);
const message1 = `${str1} everyone, ${str2} ${str3}`;

// console.log(message, message1);

const fullString = 'JavaScript is programming language';

// console.log(fullString.substr(14, 2));
// console.log(fullString.substring(14, 25));

const iof = `This is string`;
const newIof = iof.substr(0, iof.indexOf('is'));
const newIof1 = iof.substr(7);

const result = newIof.concat(newIof1);

// console.log(result);

const rawString = `  Hi  `;

// console.log(rawString.trim());

// let yourName = prompt('Your name?', 'Bold');

// console.log(yourName);

// const prompt1 = prompt('Enter number: ');
// const number1 = Number(prompt1);

// console.log(number1);

const number3 = 123.456123;

// console.log(number3.toFixed(2));

const budget = 1_000_000_000;
// console.log(budget);

const PI = Math.PI;

// console.log(PI);

let a = 5,
  b = 9;
const diff = Math.abs(a - b);

// console.log(diff);

// console.log(Math.ceil(7.00004));

// console.log(Math.floor(5.95));

// console.log(Math.round(0.9));

// console.log(Math.max(1, 3, 2));

// console.log(Math.min(2, 3, 1));

// console.log(Math.pow(7, 3));

// console.log(Math.floor(Math.random() * 10) + 1);

const randNumber = Math.floor(Math.random() * 6) + 5;

console.log(randNumber);

// const min = Number(prompt('Min number'));
// const max = Number(prompt('Max number'));

// const result1 = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(result1);
