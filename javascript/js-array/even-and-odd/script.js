const numbers = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];

let evenCount = 0,
  oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i] % 2 === 0 ? evenCount++ : oddCount++;
}

console.log(`Even: ${evenCount}, Odd: ${oddCount}`);
