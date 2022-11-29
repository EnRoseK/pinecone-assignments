const a = 120,
  b = 33,
  c = 10,
  d = 12;

let min = a;

if (b <= min) min = b;
if (c <= min) min = c;
if (d <= min) min = d;

console.log(min);
