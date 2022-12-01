let n = Number(prompt('Enter your number: '));
let count = 0;

while (n > 0) {
  count++;
  n = Math.round(n / 10);
}

console.log(count);
