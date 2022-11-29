// let age = 17;

// if (age < 0) {
//   console.log("Буруу нас байна!");
// } else if (age >= 2 && age <= 5) {
//   console.log("Цэцэрлэгийн хүүхэд!");
// } else if (age >= 6 && age <= 18) {
//   console.log("10 жилийн хүүхэд байна!");
// } else {
//   console.log("Том хүн байна!");
// }

// let bataaAge = 15,
//   boldooAge = 12;

// if (bataaAge > boldooAge) console.log("Батаа ах!");
// else if (bataaAge === boldooAge) console.log("Чацуу байна!");
// else console.log("Болдоо ах!");

// let a = 10,
//   b = 12,
//   c = 12;

// if (a >= b && a >= c) console.log(a);
// else if (b >= a && b >= c) console.log(b);
// else if (c >= a && c >= b) console.log(c);

// let num = 19;

// if (num % 2 === 0) console.log("Тэгш");
// else console.log("Сондгой");

// const year = 2022;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not leap year");
// }

const a = 1000,
  b = 300,
  c = 4900,
  d = 59000;

let sum = 0;

if (a > 999 && a <= 9999) sum = sum + a;
if (b > 999 && b <= 9999) sum = sum + b;
if (c > 999 && c <= 9999) sum = sum + c;

console.log(sum);
