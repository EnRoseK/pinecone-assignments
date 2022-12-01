// 1
const n1 = 10;
let i1 = 1;

while (i1 <= n1) {
  console.log(i1);
  i1++;
}

// 2
const n2 = 10;
let i2 = 1;

while (i2 <= n2) {
  console.log(i2);
  i2 += 2;
}

// 3
const n3 = 10;
let i3 = 2;

while (i3 <= n3) {
  console.log(i3);
  i3 += 2;
}

// 4
const n4 = 100;
let i4 = 1,
  sum = 0;

while (i4 <= n4) {
  sum += i4;
  i4++;
}

console.log(sum);

// 5
const n5 = 100;
let i5 = 1,
  sum1 = 0;

while (i5 <= n5) {
  console.log(i5);
  sum1 += i5;
  i5++;
}

console.log(sum1);

// 6
const n = 7919;

let i = 2,
  isPrime = true;

while (i <= n / 2) {
  if (n % i === 0) isPrime = false;
  i++;
}

isPrime === true ? console.log('Yes') : console.log('No');

// 7
const n7 = 10;
let i7 = 1;

while (i7 <= n7) {
  let j = 2,
    isPrime = true;

  while (j <= i7 / 2) {
    if (i7 % j === 0) isPrime = false;
    j++;
  }

  if (isPrime) console.log(i7);

  i7++;
}

// 8
const n8 = 10;
let factorial = 1,
  i8 = 1;

while (i8 <= n8) {
  factorial *= i8;
  i8++;
}

console.log(factorial);

// 9
const n9 = 4587;
let str = n9 + '',
  i9 = 0,
  sum9 = 0;

while (i9 < str.length) {
  sum9 += Number(str.charAt(i9));
  i9++;
}

console.log(sum9);

// 10
const n10 = 10;
let sum10 = 0,
  i10 = 1;

while (i10 <= n10) {
  console.log(i10);
  sum10 += i10;
  i10 += 2;
}

console.log(sum10);

// 11
const n11 = 10;
let sum11 = 0,
  i11 = 2;

while (i11 <= n11) {
  console.log(i11);
  sum11 += i11;
  i11 += 2;
}

console.log(sum11);

// 12
let n12 = 1234;
let reverseNumber = 0;

while (n12 > 0) {
  reverseNumber = reverseNumber * 10 + (n12 % 10);
  n12 = Math.floor(n12 / 10);
}

console.log(reverseNumber);

// 13
let n13 = 1234,
  result13 = '';

let str13 = n13 + '',
  i13 = 0;

while (i13 < str13.length) {
  switch (str13.charAt(i13)) {
    case '1':
      result13 += 'нэг ';
      break;
    case '2':
      result13 += 'хоёр ';
      break;
    case '3':
      result13 += 'гурав ';
      break;
    case '4':
      result13 += 'дөрөв ';
      break;
    case '5':
      result13 += 'тав ';
      break;
    case '6':
      result13 += 'зургаа ';
      break;
    case '7':
      result13 += 'долоо ';
      break;
    case '8':
      result13 += 'найм ';
      break;
    case '9':
      result13 += 'ес ';
      break;
    case '0':
      result13 += 'тэг ';
      break;
    default:
      break;
  }

  i13++;
}

console.log(result13);
