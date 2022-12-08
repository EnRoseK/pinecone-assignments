const data = [
    { productName: 'Bakery', unitPrice: 5000, amount: 100, totalPrice: 500_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Chocolate', unitPrice: 3000, amount: 18, totalPrice: 54_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Soda', unitPrice: 2500, amount: 150, totalPrice: 375_000, casherId: 2, date: '2022-11-01' },
    { productName: 'Bread', unitPrice: 2800, amount: 60, totalPrice: 168_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Biscuit', unitPrice: 4500, amount: 45, totalPrice: 202_500, casherId: 1, date: '2022-11-01' },
    { productName: 'Toilet Paper', unitPrice: 2600, amount: 20, totalPrice: 52_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Notebook', unitPrice: 3500, amount: 19, totalPrice: 66_500, casherId: 1, date: '2022-11-01' },
    { productName: 'Ice Cream', unitPrice: 2400, amount: 50, totalPrice: 120_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Milk', unitPrice: 2700, amount: 56, totalPrice: 151_200, casherId: 1, date: '2022-11-01' },
    { productName: 'Energy Drink', unitPrice: 3600, amount: 29, totalPrice: 104_400, casherId: 1, date: '2022-11-01' },
    { productName: 'Potato', unitPrice: 2600, amount: 49, totalPrice: 127_400, casherId: 1, date: '2022-11-01' },
    { productName: 'Carrot', unitPrice: 3600, amount: 47, totalPrice: 169_200, casherId: 1, date: '2022-11-01' },
    { productName: 'Cabbage', unitPrice: 1500, amount: 34, totalPrice: 51_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Coffee', unitPrice: 2900, amount: 68, totalPrice: 197_200, casherId: 1, date: '2022-11-01' },
    { productName: 'Sweets', unitPrice: 3700, amount: 99, totalPrice: 366_300, casherId: 1, date: '2022-11-01' },
    { productName: 'Pet Foods', unitPrice: 9000, amount: 21, totalPrice: 189_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Ramen', unitPrice: 5700, amount: 150, totalPrice: 855_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Juice', unitPrice: 3900, amount: 124, totalPrice: 483_600, casherId: 1, date: '2022-11-01' },
    { productName: 'Jam', unitPrice: 5400, amount: 59, totalPrice: 318_600, casherId: 1, date: '2022-11-01' },
    { productName: 'Towel', unitPrice: 15000, amount: 41, totalPrice: 615_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Kimchi', unitPrice: 9800, amount: 65, totalPrice: 637_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Burger', unitPrice: 5800, amount: 75, totalPrice: 435_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Banana', unitPrice: 8900, amount: 23, totalPrice: 204_700, casherId: 1, date: '2022-11-01' },
    { productName: 'Apples', unitPrice: 9500, amount: 27, totalPrice: 256_500, casherId: 1, date: '2022-11-01' },
    { productName: 'Strawberry', unitPrice: 12500, amount: 17, totalPrice: 212_500, casherId: 1, date: '2022-11-01' },
    { productName: 'Sweater', unitPrice: 70000, amount: 14, totalPrice: 980_000, casherId: 1, date: '2022-11-01' },
    { productName: 'T-Shirt', unitPrice: 25000, amount: 12, totalPrice: 300_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Socks', unitPrice: 10000, amount: 25, totalPrice: 250_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Pants', unitPrice: 75000, amount: 10, totalPrice: 750_000, casherId: 1, date: '2022-11-01' },
    { productName: 'Alcohol', unitPrice: 65000, amount: 55, totalPrice: 3_575_000, casherId: 1, date: '2022-11-01' },
];

const sortArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let temp;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
};

const getTotal = (data, key) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) sum += data[i][key];

    return sum;
};

const getMostOrLeast = (data, key, str, num) => {
    const result = [];
    let keyValues = [];
    for (let i = 0; i < data.length; i++) keyValues.push(data[i][key]);
    sortArray(keyValues);
    keyValues = str === 'most' ? keyValues.reverse().slice(0, num) : keyValues.slice(0, num);

    for (let i = 0; i < keyValues.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (keyValues[i] === data[j][key] && !result.includes(data[j])) {
                result.push(data[j]);
                break;
            }
        }
    }

    return result;
};

const getPercentage = (data, arr) => {
    const totalPrice = getTotal(data, 'totalPrice');
    const total2 = getTotal(arr, 'totalPrice');

    return (total2 * 100) / totalPrice;
};

const totalPrice = getTotal(data, 'totalPrice');
console.log(totalPrice);

const totalAmount = getTotal(data, 'amount');
console.log(totalAmount);

const mostByPrice = getMostOrLeast(data, 'totalPrice', 'most', 5);
console.log(mostByPrice);

const mostByAmount = getMostOrLeast(data, 'amount', 'most', 5);
console.log(mostByAmount);

const leastByPrice = getMostOrLeast(data, 'totalPrice', 'least', 5);
console.log(leastByPrice);

const leastByAmount = getMostOrLeast(data, 'amount', 'least', 5);
console.log(leastByAmount);

const mostByPriceTen = getMostOrLeast(data, 'totalPrice', 'most', 10);

const mostTenByPricePercentage = Math.round(getPercentage(data, mostByPriceTen));
console.log(mostTenByPricePercentage);

const mostFiveByAmountPercentage = Math.round(getPercentage(data, mostByAmount));
console.log(mostFiveByAmountPercentage);

const leastFiveByPricePercentage = Math.round(getPercentage(data, leastByPrice));
console.log(leastFiveByPricePercentage);

const leastFiveByAmountPercentage = Math.round(getPercentage(data, leastByAmount));
console.log(leastFiveByAmountPercentage);
