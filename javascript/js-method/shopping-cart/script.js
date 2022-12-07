const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (shoppingCart[0] !== 'Meat') shoppingCart.unshift('Meat');
if (shoppingCart[shoppingCart.length - 1] !== 'Sugar') shoppingCart.push('Sugar');

const honey = shoppingCart.indexOf('Honey');
shoppingCart.splice(honey, 1);

const tea = shoppingCart.indexOf('Tea');
shoppingCart[tea] = 'Green Tea';

console.log(shoppingCart);
