const input = 'This Is Where I Begin';

const parameterizeStr = (str) => {
    return str.toLowerCase().split(' ').join('-');
};

console.log(parameterizeStr(input));
