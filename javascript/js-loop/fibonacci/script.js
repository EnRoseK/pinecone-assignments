const n = Number(prompt('Enter your number: '));
let count = 1,
  f1 = 1,
  f2 = 1,
  fcurrent,
  result = '';

while (count <= n) {
  if (count === 1) result += ' ' + f1;
  else if (count === 2) result += ' ' + f2;
  else {
    fcurrent = f1 + f2;
    result += ' ' + fcurrent;
    f1 = f2;
    f2 = fcurrent;
  }

  count++;
}

console.log(result);
