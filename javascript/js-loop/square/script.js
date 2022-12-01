const n = Number(prompt('Enter your number: '));
let i = 1,
  stars = '';

while (i <= n) {
  let j = 1;

  if (i === 1 || i === n) {
    while (j <= n) {
      stars += '* ';
      j++;
    }
  } else {
    stars += '* ';
    while (j < n - 1) {
      stars += '  ';
      j++;
    }
    stars += '* ';
  }

  stars += '\n';
  i++;
}

console.log(stars);
