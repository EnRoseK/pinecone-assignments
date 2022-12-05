const data = [4, 2, 34, 4, 1, 12, 1, 4],
  output = [];

for (let i = 0; i < data.length; i++) {
  let count = 0;
  for (let j = 0; j < data.length; j++) {
    if (data[i] === data[j]) count++;
  }

  if (count >= 2) output[output.length] = data[i];
}

console.log(output);
