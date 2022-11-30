// 1
const year = 2022,
  month = 11,
  date = 30;

let strMonth = month >= 10 ? month : '0' + month;

console.log(`${year}-${strMonth}-${date}`);

// 2
const phone = '88001234',
  firstTwo = Number(phone.substring(0, 2));

switch (firstTwo) {
  case 99:
    console.log('Mobicom');
    break;
  case 88:
    console.log('Unitel');
    break;
  case 98:
    console.log('Skytel');
    break;
  case 91:
    console.log('G-Mobile');
    break;
  default:
    console.log('Мэдэхгүй юм байнөөөөөөөө.........');
}
