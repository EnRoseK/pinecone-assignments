const arr1 = [3, 45, 23, 78, 34],
  arr2 = [4, 2, 34, 4, 12, 1];

const multiply = [],
  length = arr1.length >= arr2.length ? arr1.length : arr2.length;

for (let i = 0; i < length; i++) {
  if (!arr1[i]) multiply[multiply.length] = arr2[i];
  else if (!arr2[i]) multiply[multiply.length] = arr2[i];
  else multiply[multiply.length] = arr1[i] * arr2[i];
}

console.log(multiply);
