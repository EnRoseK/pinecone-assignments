const a = 99,
  b = 25,
  c = 77;

let max = a,
  min = a;

if (b >= max) max = b;
if (c >= max) max = c;

if (b <= min) min = b;
if (c <= min) min = c;

console.log("Max: " + max);
console.log("Min: " + min);
