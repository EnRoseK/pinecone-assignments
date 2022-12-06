const prices = [3000, 27500, 100000];

const findTax = (price) => {
    return price >= 5000 && price <= 30000 ? 0.15 : 0.2;
};

const totalPrice = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let tax = findTax(arr[i]);
        result[result.length] = arr[i] * (1 + tax);
    }

    return result;
};

const taxPrice = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let tax = findTax(arr[i]);
        result[result.length] = arr[i] * tax;
    }

    return result;
};

const averagePrice = (totalPrice) => {
    let sum = 0;
    for (let i = 0; i < totalPrice.length; i++) sum += totalPrice[i];

    return sum / totalPrice.length;
};

const totalPrices = totalPrice(prices),
    taxPrices = taxPrice(prices),
    averagePrices = averagePrice(totalPrices);

console.log(totalPrices, taxPrices, averagePrices);
