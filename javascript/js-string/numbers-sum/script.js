const n = 839;

const a = Math.floor(n / 100),
  b = Math.floor((n % 100) / 10),
  c = n % 10;

const sum = a + b + c;

console.log(sum);
