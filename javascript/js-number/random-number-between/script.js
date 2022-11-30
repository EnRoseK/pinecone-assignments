const a = Number(prompt('Enter first number: '));
const b = Number(prompt('Enter second number: '));

const max = a > b ? a : b,
  min = a < b ? b : a;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);
