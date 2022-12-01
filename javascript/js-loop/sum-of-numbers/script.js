const n = Number(prompt('Enter your number: '));

let sum = 0,
  i = 1;

while (i <= n) {
  sum += i;
  i++;
}

console.log(sum);
