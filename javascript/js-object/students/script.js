const students = [
    { name: 'Гончигсумлай', birthOfYear: 1995, hobby: 'морь', single: false },
    { name: 'Сэд-Эрдэнэ', birthOfYear: 2005, hobby: 'тоглох', single: true },
    { name: 'Хатнаа', birthOfYear: 2002, hobby: 'аялах', single: false },
    { name: 'Индра', birthOfYear: 1997, hobby: 'ууланд алхах', single: true },
    { name: 'Биндэрьяа', birthOfYear: 2000, hobby: 'код бичих', single: true },
    { name: 'Жавхлант', birthOfYear: 1999, hobby: 'спорт', single: true },
    { name: 'Тэмүүлэн', birthOfYear: 1993, hobby: 'спорт', single: false },
];

const getStudentAge = (student) => {
    return 2022 - student.birthOfYear;
};

const getStudentsOlderThanTwenty = (students) => {
    const result = [];
    for (let i = 0; i < students.length; i++) {
        if (getStudentAge(students[i]) >= 20) result.push(students[i]);
    }

    return result;
};

const getSingleStudents = (students) => {
    const result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].single) result.push(students[i]);
    }

    return result;
};

const firstStudentAge = getStudentAge(students[0]);
console.log(firstStudentAge);

const studentsOlderThanTwenty = getStudentsOlderThanTwenty(students);
console.log(studentsOlderThanTwenty);

const singleStudents = getSingleStudents(students);
console.log(singleStudents);
