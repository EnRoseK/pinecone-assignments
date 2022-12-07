// const input = '12321';

// function isPalindrome(data) {
//     return data === data.split('').reverse().join('');
// }

// console.log(isPalindrome(input));

const queueLine = ['Бат', 'Дорж', 'Пунцаг', 'Готов', 'Баяраа', 'Болд', 'Навчаа', 'Гончигсумлай', 'Цэцгээ', 'Нэргүй', 'Бальбийгомбо', 'Баатар', 'Сүхээ'];

const getFirstTen = (arr) => {
    arr.splice(10, arr.length - 10);
};

const addToQueue = (person1, person2, arr, afterPerson) => {
    arr.splice(arr.indexOf('Гончигсумлай') + 1, 0, person1, person2);
    getFirstTen(arr);
};

addToQueue('эгч1', 'эгч2', queueLine, 'Гончигсумлай');
console.log(queueLine);
