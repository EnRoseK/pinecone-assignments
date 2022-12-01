const input = 'This Is STRING!';
let output = '',
  i = 0;

while (i < input.length) {
  if (input[i].toUpperCase() === input[i]) {
    output += input[i].toLowerCase();
  } else {
    output += input[i].toUpperCase();
  }

  i++;
}

console.log(output);
