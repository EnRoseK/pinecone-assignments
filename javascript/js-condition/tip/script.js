const price1 = 3000;
const price2 = 27500;
const price3 = 100000;

const tax1 = price1 >= 5000 && price1 <= 30000 ? 0.15 : 0.2;
const tax2 = price2 >= 5000 && price2 <= 30000 ? 0.15 : 0.2;
const tax3 = price3 >= 5000 && price3 <= 30000 ? 0.15 : 0.2;

const totalPrice1 = price1 + price1 * tax1;
const totalPrice2 = price2 + price2 * tax2;
const totalPrice3 = price3 + price3 * tax3;

console.log(totalPrice1, totalPrice2, totalPrice3);
