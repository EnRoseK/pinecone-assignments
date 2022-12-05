let n = 123418765,
  digitsCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

n = n.toString();

for (let i = 0; i < n.length; i++) {
  for (let j = 0; j < digitsCount.length; j++) {
    if (Number(n[i]) === j) {
      digitsCount[j]++;
      break;
    }
  }
}

for (let i = 0; i < digitsCount.length; i++) {
  console.log(`${i}: ${digitsCount[i]}`);
}
