const input = '123321';

const isPalindrome = (num) => {
    return num === num.split('').reverse().join('');
};

console.log(isPalindrome(input));
