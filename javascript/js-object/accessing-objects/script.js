const students = [
    {
        name: 'Сэд-Эрдэнэ',
        age: 19,
        gender: 'male',
    },
    {
        name: 'Индра',
        age: 19,
        gender: 'female',
    },
    {
        name: 'Хатнаа ',
        age: 21,
        gender: 'male',
    },
    {
        name: 'Тэмүүлэн',
        age: 24,
        gender: 'male',
    },
    {
        name: 'Намуун',
        age: 23,
        gender: 'female',
    },
    {
        name: 'Гэрэл',
        age: 23,
        gender: 'female',
    },
];

const getAgeAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].age;
    }

    return sum / arr.length;
};

const ageAverage = getAgeAverage(students);
console.log(ageAverage);

const getGenderCount = (arr) => {
    const counts = { male: 0, female: 0 };
    for (let i = 0; i < arr.length; i++) {
        arr[i].gender.toLowerCase() === 'male' ? counts.male++ : counts.female++;
    }

    return counts;
};

const genderCounts = getGenderCount(students);
console.log(genderCounts);

const addLastName = (student, lastName) => {
    student.lastName = lastName;
};

addLastName(students[0], 'Одгэрэл');
console.log(students[0]);

const getStudentsWithSameAge = (arr) => {
    let searchValue = [];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].age === arr[j].age) count++;
        }
        if (count >= 2) {
            if (!searchValue.includes(arr[i].age)) searchValue.push(arr[i].age);
            continue;
        }
    }

    for (let j = 0; j < searchValue.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].age === searchValue[j]) result.push(arr[i]);
        }
    }
    return result;
};

const studentsWithSameAge = getStudentsWithSameAge(students);
console.log(studentsWithSameAge);
