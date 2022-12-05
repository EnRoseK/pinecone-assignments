const studentNames = [
  'irmuun',
  'temuulen',
  'usukhbayr',
  'sukhbat',
  'temuulen',
  'ganbold',
  'amur',
  'dulguun',
  'namuunbaigal',
  'baljinnyam',
  'anand',
  'odbayr',
  'narantsetseg',
  'aimergen',
  'tengisbold',
  'sed-erdene',
  'binderiya',
  'indra',
  'javkhlant',
  'dalaikhuu',
];

// let index = 0;

// for (let i = 1; i < studentNames.length; i++) {
//   if (studentNames[i].length < studentNames[index].length) {
//     index = i;
//   }
// }

// console.log(studentNames[index]);

// let count = 0;

// for (let i = 0; i < studentNames.length; i++) {
//   if (studentNames[i][0] === 't') count++;
// }

// console.log(count++);

const results = [60, 70, 80, 90, 95, 92, 70, 76];
// let sum = 0,
//   average;

// for (let i = 0; i < results.length; i++) {
//   sum += results[i];
// }

// average = sum / results.length;

// console.log(average);

// const grades = [];

// for (let i = 0; i < results.length; i++) {
//   if (results[i] < 60) grades[grades.length] = 'F';
//   if (results[i] >= 60 && results[i] < 70) grades[grades.length] = 'D';
//   if (results[i] >= 70 && results[i] < 80) grades[grades.length] = 'C';
//   if (results[i] >= 80 && results[i] < 90) grades[grades.length] = 'B';
//   if (results[i] >= 90 && results[i] <= 100) grades[grades.length] = 'A';
// }

// console.log(grades);

const tictac = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let isOver = false,
  space = 9;

while (!isOver) {
  let xx = prompt('Enter index through x-axis for X');
  let xy = prompt('Enter index through y-axis for X');

  tictac[xx][xy] = 'X';
  space--;

  if (space === 0) {
    isOver = true;
    break;
  }

  if ((xx === 0 && xy === 0) || (xx === 2 && xy === 0) || (xx === 2 && xy === 2) || (xx === 0 && xy === 2) || (xx === 2 && xy === 2)) {
    let count = 0;
    for (let i = 0; i < 3; i++) if (tictac[i][i] === 'X') count++;
    if (count === 3) {
      isOver = true;
      break;
    }
  }

  let count = 0;
  for (let i = 0; i < 3; i++) if (tictac[xx][i] === 'X') count++;
  if (count === 3) {
    isOver = true;
    break;
  }

  count = 0;
  for (let i = 0; i < 3; i++) if (tictac[i][xy] === 'X') count++;
  if (count === 3) {
    isOver = true;
    break;
  }
  console.clear();
  for (let i = 0; i < 3; i++) {
    const res = tictac[i].join('-');
    console.log(res);
  }

  let yx = prompt('Enter index through x-axis for Y');
  let yy = prompt('Enter index through y-axis for Y');

  tictac[yx][yy] = 'Y';
  space--;

  if (space === 0) {
    isOver = true;
    break;
  }

  if ((yx === 0 && yy === 0) || (yx === 2 && yy === 0) || (yx === 2 && yy === 2) || (yx === 0 && yy === 2) || (yx === 2 && yy === 2)) {
    let count = 0;
    for (let i = 0; i < 3; i++) if (tictac[i][i] === 'X') count++;
    if (count === 3) {
      isOver = true;
      break;
    }
  }

  count = 0;
  for (let i = 0; i < 3; i++) if (tictac[yx][i] === 'X') count++;
  if (count === 3) isOver = true;

  count = 0;
  for (let i = 0; i < 3; i++) if (tictac[i][yy] === 'X') count++;
  if (count === 3) isOver = true;

  console.clear();
  for (let i = 0; i < 3; i++) {
    const res = tictac[i].join('-');
    console.log(res);
  }
}

console.clear();
for (let i = 0; i < 3; i++) {
  const res = tictac[i].join('-');
  console.log(res);
}
