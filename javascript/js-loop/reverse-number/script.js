let n = 12345,
  reverseNum = '';

n = n.toString();
for (let i = n.length - 1; i >= 0; i--) reverseNum += n[i];
reverseNum = Number(reverseNum);

console.log(reverseNum);
