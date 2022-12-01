const n = Number(prompt('Enter your number: '));
let multiply = 1,
  i = 1;

while (i <= n) {
  multiply *= i;
  i++;
}

console.log(multiply);
