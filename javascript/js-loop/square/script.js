const row = 10;

let i = 1;

while (i <= row) {
  let stars = '',
    j = 1;

  if (i === 1 || i === row) {
    while (j <= row) {
      stars += '*';
      j++;
    }
  } else {
    stars += '*';
    while (j < row - 1) {
      stars += ' ';
      j++;
    }
    stars += '*';
  }

  console.log(stars);

  i++;
}
