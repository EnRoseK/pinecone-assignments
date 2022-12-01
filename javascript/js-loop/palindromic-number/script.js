let n = 101,
  nCopy = n;

let copyNumber = 0;

while (n > 0) {
  copyNumber = copyNumber * 10 + (n % 10);
  n = Math.round(n / 10);
}

copyNumber === nCopy ? console.log('True') : console.log('False');
