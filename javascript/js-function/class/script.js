// function pyramid(rows) {
//     let result = '';
//     for (let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= rows - i; j++) {
//             result += ' ';
//         }
//         for (let j = 1; j <= i; j++) {
//             result += '* ';
//         }
//         result += '\n';
//     }
//     console.log(result);
// }

const results = [];

function findGender(str) {
    let gender = Number(str[0]) % 2 === 0 ? 'Эмэгтэй' : 'Эрэгтэй';
    return gender;
}

function findBirthdate(str) {
    let year = str.substring(0, 2),
        month = str.substring(2, 4),
        date = str.substring(4);

    if (Number(month) > 12) {
        year = '20' + year;
        month = Number(month) - 20 + '';
    } else {
        year = '19' + year;
    }

    return `${year}-${month}-${date}`;
}

function findPlace(str) {
    let place;

    switch (str[0]) {
        case 'А':
            place = 'Архангай';
            break;
        case 'Б':
            place = 'Баян-Өлгий';
            break;
        case 'В':
            place = 'Баянхонгор';
            break;
        case 'Г':
            place = 'Булган';
            break;
        case 'Д':
            place = 'Говь-Алтай';
            break;
        case 'Е':
            place = 'Дорноговь';
            break;
        case 'Ж':
            place = 'Дорнод';
            break;
        case 'З':
            place = 'Дундговь';
            break;
        case 'И':
            place = 'Завхан';
            break;
        case 'Й':
            place = 'Өвөрхангай';
            break;
        case 'К':
            place = 'Өмнөговь';
            break;
        case 'Л':
            place = 'Сүхбаатар';
            break;
        case 'М':
            place = 'Сэлэнгэ';
            break;
        case 'Н':
            place = 'Төв';
            break;
        case 'О':
            place = 'Увс';
            break;
        case 'П':
            place = 'Ховд';
            break;
        case 'Р':
            place = 'Хөвсгөл';
            break;
        case 'С':
            place = 'Хэнтий';
            break;
        case 'Т':
            place = 'Дархан-Уул';
            break;
        case 'Ф':
            place = 'Орхон';
            break;
        case 'Х':
            place = 'Говьсүмбэр';
            break;
        case 'У':
            place = 'Улаанбаатар';
            break;
    }

    return place;
}

function findInfo(register) {
    let alphs = register.substring(0, 2),
        numbers = register.substring(2);

    let gender = findGender(numbers.substring(6)),
        birthdate = findBirthdate(numbers.substring(0, 6)),
        place = findPlace(alphs);

    const arr = [gender, birthdate, place];
    results[results.length] = arr;
}

findInfo('УЮ05281012');

// console.log(results);
