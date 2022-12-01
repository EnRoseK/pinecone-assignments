const row = 10;

let i = 1;
let stars = '';

while (i <= row) {
  let j = 1,
    k = 1;

  while (k <= row - i) {
    stars += ' ';
    k++;
  }

  while (j <= i * 2 - 1) {
    stars += '*';
    j++;
  }

  stars += '\n';

  i++;
}

console.log(stars);
