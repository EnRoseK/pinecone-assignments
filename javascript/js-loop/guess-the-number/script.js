const randNumber = Math.floor(Math.random() * 100) + 1;
let isFound = false;

while (!isFound) {
  let input = Number(prompt('Enter your number: '));
  if (input === randNumber) {
    alert('Зөв таалаа!');
    isFound = true;
  } else if (input > randNumber) alert('Таны оруулсан тоо их байна');
  else alert('Таны оруулсан тоо бага байна');
}
