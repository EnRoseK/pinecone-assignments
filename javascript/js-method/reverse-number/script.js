const input = 45361;

const reverseNumber = (num) => {
    num += '';
    return Number(num.split('').reverse().join(''));
};

console.log(reverseNumber(input));
