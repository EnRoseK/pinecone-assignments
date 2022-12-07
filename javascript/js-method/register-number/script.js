const register = 'УЮ99022018';

const isCorrectReg = (register) => {
    return !Number(register.substr(0, 2)) && Number(register.substr(2, 8)) && register.length === 10;
};

const getGender = (register) => {
    return register[register.length - 2] % 2 === 0 ? 'Эмэгтэй' : 'Эрэгтэй';
};

const getBirthDay = (register) => {
    let year = register.substr(2, 2),
        month = register.substr(4, 2),
        day = register.substr(6, 2);

    if (month[0] === '2' || month[0] === '3') {
        year = '20' + year;
        month = Number(month) - 20;
    } else year = '19' + year;

    return `${year}-${month}-${day}`;
};

const getBirthRegion = (register) => {
    let firstLetter = register.substr(0, 1);
    switch (firstLetter) {
        case 'А':
            return 'Архангай';

        case 'Б':
            return 'Баян-Өлгий';

        case 'В':
            return 'Баянхонгор';

        case 'Г':
            return 'Булган';

        case 'Д':
            return 'Говь-Алтай';

        case 'Е':
            return 'Дорноговь';

        case 'Ж':
            return 'Дорнод';

        case 'З':
            return 'Дундговь';

        case 'И':
            return 'Завхан';

        case 'Й':
            return 'Өвөрхангай';

        case 'К':
            return 'Өмнөговь';

        case 'Л':
            return 'Сүхбаатар';

        case 'М':
            return 'Сэлэнгэ';

        case 'Н':
            return 'Төв';

        case 'О':
            return 'Увс';

        case 'П':
            return 'Ховд';

        case 'Р':
            return 'Хөвсгөл';

        case 'С':
            return 'Хэнтий';

        case 'Т':
            return 'Дархан-Уул';

        case 'Ф':
            return 'Орхон';

        case 'Х':
            return 'Говьсүмбэр';

        case 'У':
            return 'Улаанбаатар';
        default:
            break;
    }
};

const getRegisterInfo = (register) => {
    if (isCorrectReg(register)) {
        const gender = getGender(register),
            birthday = getBirthDay(register),
            birthRegion = getBirthRegion(register);

        console.log(`${gender}, ${birthday}, ${birthRegion}`);
    } else {
        console.log('Буруу регистер оруулсан байна');
    }
};

getRegisterInfo(register);
