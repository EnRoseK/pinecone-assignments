const student = {
    firstName: 'Sed-Erdene',
    lastName: 'Odgerel',
    age: 17,
    hobby: ['Video Games', 'Watching Streams', 'Anime', 'Panda'],
};

// console.log(`${student.lastName} овогтой ${student.firstName} нэртэй ${student.age} настай`);

const studentCopy = { ...student };
studentCopy.age = 23;
// console.log(student['age']);
// console.log(studentCopy.age);

const data = [
    { gender: 'male', firstName: 'Dorj', lastName: 'Bat', point: 80, age: 19 },
    { gender: 'female', firstName: 'Nawchaa', lastName: 'Gonchigsumlai', point: 68, age: 99 },
    { gender: 'male', firstName: 'Bold', lastName: 'Balbar', point: 75, age: 29 },
    { gender: 'female', firstName: 'Tsetsgee', lastName: 'Hatnaa', point: 55, age: 89 },
    { gender: 'male', firstName: 'Bat', lastName: 'Sed-Erdene', point: 23, age: 39 },
    { gender: 'female', firstName: 'Sed-Erdene', lastName: 'Dorj', point: 81, age: 79 },
    { gender: 'male', firstName: 'Balbar', lastName: 'Gonchigsumlai', point: 44, age: 49 },
    { gender: 'female', firstName: 'Hatnaa', lastName: 'Saraa', point: 90, age: 69 },
    { gender: 'male', firstName: 'Gonchigsumlai', lastName: 'Nawchaa', point: 85, age: 59 },
    { gender: 'female', firstName: 'Saraa', lastName: 'Tsetsgee', point: 99, age: 15 },
];

const getGenderCount = (data, gender) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].gender === gender.toLowerCase()) count++;
    }

    return count;
};

const femaleCount = getGenderCount(data, 'Female'),
    maleCount = getGenderCount(data, 'Male');

console.log(`Эрэгтэй: ${maleCount}, Эмэгтэй: ${femaleCount}`);

const getCountByFieldValueRange = (data, min, max, key) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i][key] >= min && data[i][key] < max) count++;
    }

    return count;
};

const childrenCount = getCountByFieldValueRange(data, 0, 18, 'age'),
    youthCount = getCountByFieldValueRange(data, 18, 30, 'age'),
    adultCount = getCountByFieldValueRange(data, 30, 55, 'age'),
    elderCount = getCountByFieldValueRange(data, 55, 200, 'age');

console.log(childrenCount, youthCount, adultCount, elderCount);

const totalA = getCountByFieldValueRange(data, 90, 101, 'point'),
    totalB = getCountByFieldValueRange(data, 80, 90, 'point'),
    totalC = getCountByFieldValueRange(data, 70, 80, 'point'),
    totalD = getCountByFieldValueRange(data, 60, 70, 'point'),
    totalF = getCountByFieldValueRange(data, 0, 60, 'point');

console.log(totalA, totalB, totalC, totalD, totalF);

const searchStudent = (data, key, str) => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][key].toLowerCase().includes(str.toLowerCase())) result.push(data[i]);
    }

    return result;
};

const search = searchStudent(data, 'firstName', 'hat');
console.log(search);

const DigitSum = (n) => {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
};

const SubtractSum = (n) => {
    n -= DigitSum(n);
    if (n <= 100) {
        
    } else return SubtractSum(n);
};

console.log(SubtractSum(325));
