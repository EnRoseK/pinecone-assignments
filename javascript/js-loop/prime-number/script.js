const n = 100;

let i = 2,
  isPrime = true;

while (i <= n / 2) {
  if (n % i === 0) isPrime = false;
  i++;
}

isPrime === true ? console.log('True') : console.log('False');
