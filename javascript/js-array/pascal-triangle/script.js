const n = 5,
  triangle = [[1]];

let result = '';

for (let i = 2; i <= n; i++) {
  triangle[triangle.length] = [];

  for (let j = 0; j < i; j++) {
    if (!triangle[i - 2][j - 1]) triangle[i - 1][triangle[i - 1].length] = triangle[i - 2][j];
    else if (!triangle[i - 2][j]) triangle[i - 1][triangle[i - 1].length] = triangle[i - 2][j - 1];
    else triangle[i - 1][triangle[i - 1].length] = triangle[i - 2][j - 1] + triangle[i - 2][j];
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) result += ' ';

  for (let j = 0; j < triangle[i].length; j++) result += triangle[i][j] + ' ';

  result += '\n';
}

console.log(result);
