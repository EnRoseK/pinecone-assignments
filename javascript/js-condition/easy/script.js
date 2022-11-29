// 1
const grade = 75;

if (grade >= 0 && grade < 60) console.log("F");
else if (grade >= 60 && grade < 70) console.log("D");
else if (grade >= 70 && grade < 80) console.log("C");
else if (grade >= 80 && grade < 90) console.log("B");
else if (grade >= 90 && grade <= 100) console.log("A");
else console.log("Wrong Input!");

// 2
const month = 10;

if (month === 2) console.log("28 or 29");
else if (month === 4 || month === 6 || month === 9 || month === 11) console.log("30");
else console.log("31");

// 3
const randomNumber = 21;

if (randomNumber % 3 === 0 || randomNumber % 7 === 0) console.log("Yes");
else console.log("No");

// 4
const n = -35;

if (n === 0) console.log("Neither of them");
else if (n > 0) console.log("Positive");
else console.log("Negative");

// 5
const weight = 90,
  height = 1.75;

const bmi = weight / (height * height);

if (bmi <= 18.4) console.log("Жингийн дутагдалтай");
else if (bmi >= 18.5 && bmi <= 24.9) console.log("Эрүүл");
else if (bmi >= 25 && bmi <= 39.9) console.log("Илүүдэл жинтэй");
else if (bmi >= 40) console.log("Хэт таргаллалттай");

// 6
const radnNmbr = 47;

if (radnNmbr % 2 === 0) console.log("Even");
else console.log("Odd");

// 7
const n1 = -35;

if (n1 === 0) console.log("Neither of them");
else if (n1 > 0) console.log("Positive");
else console.log("Negative");

// 8
const yearOfBirth = 1999;
const old = 2022 - yearOfBirth;

if (old >= 0 && old <= 1) console.log("Infant");
else if (old > 1 && old <= 3) console.log("Toddler");
else if (old > 3 && old <= 5) console.log("Preschool");
else if (old > 5 && old <= 12) console.log("Gradeschooler");
else if (old > 12 && old <= 18) console.log("Teen");
else if (old > 18 && old <= 21) console.log("Young adult");
else if (old > 21) console.log("Adult");
