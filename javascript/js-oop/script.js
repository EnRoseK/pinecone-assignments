const Student = class {
    name;
    birthYear;
    weight;
    height;

    constructor(name, birthYear, weight, height) {
        this.name = name;
        this.birthYear = birthYear;
        this.weight = weight;
        this.height = height;
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    getBMI() {
        return this.weight / this.height ** 2;
    }
};

const thisYear = new Date().getFullYear();
const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const students = [];

const generateStudents = () => {
    for (let i = 1; i <= 20; i++) {
        students.push(
            new Student(
                'Gotov' + i,
                generateNumber(1970, thisYear),
                generateNumber(40, 120),
                generateNumber(1.4, 2.2)
            )
        );
    }
};

let averageBMI;
let averageAge;
let studentWithMaxBMI;
let studentWithMinBMI;
let youngestStudent;
let oldestStudent;

// 1. Calculate BMI average
// 2. Calculate age average
// 3. Person with highest BMI
// 4. Person with lowest BMI
// 5. Youngest Person
// 6. Oldest Person

const calculate = () => {
    let totalBMI = 0;
    let totalAge = 0;

    studentWithMaxBMI = students[0];
    studentWithMinBMI = students[0];

    youngestStudent = students[0];
    oldestStudent = students[0];

    for (let i = 0; i < students.length; i++) {
        totalBMI += students[i].getBMI();
        totalAge += students[i].getAge();

        if (students[i].getBMI() > studentWithMaxBMI.getBMI()) studentWithMaxBMI = students[i];
        if (students[i].getBMI() < studentWithMinBMI.getBMI()) studentWithMinBMI = students[i];

        if (students[i].getAge() > oldestStudent.getAge()) oldestStudent = students[i];
        if (students[i].getAge() < youngestStudent.getAge()) youngestStudent = students[i];
    }

    averageBMI = totalBMI / students.length;
    averageAge = totalAge / students.length;
};

generateStudents();
calculate();

console.log(`Average BMI ${averageBMI}`);
console.log(`Average age ${averageAge}`);
console.log(`Student with Max BMI: `);
console.log(studentWithMaxBMI);
console.log(`Student with Min BMI: `);
console.log(studentWithMinBMI);
console.log(`Youngest Student: `);
console.log(youngestStudent);
console.log(`Oldest Student: `);
console.log(oldestStudent);
