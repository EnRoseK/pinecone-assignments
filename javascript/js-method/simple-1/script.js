const array = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

array.sort();
array.reverse();
array.shift();
array.splice(Math.round(array.length / 2), 1);
array.pop();
array.splice(0);

console.log(array);
