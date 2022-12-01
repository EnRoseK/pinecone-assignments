const randNumber = Math.floor(Math.random() * 100) + 1;
let isFound = false;

while (!isFound) {
  let input = Number(prompt('Enter your number: '));
  if (input === randNumber) {
    alert('Зөв таалаа!');
    isFound = true;
  } else if (input > randNumber) alert('Бага тоо оруул');
  else alert('Их тоо оруул');
}
