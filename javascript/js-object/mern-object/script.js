const users = [
    {
        name: 'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30,
    },
    {
        name: 'Job',
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    {
        name: 'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50,
    },
    {
        name: 'Daniel',
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40,
    },
    {
        name: 'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    {
        name: 'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40,
    },
    {
        name: 'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40,
    },
];

const getValues = (user) => {
    return Object.values(user);
};

console.log(getValues(users[0]));

const getMostSkilledUser = (users) => {
    let index,
        max = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].skills.length > max) {
            index = i;
            max = users[i].skills.length;
        }
    }

    return users[index];
};

const mostSkilledUser = getMostSkilledUser(users);
console.log(mostSkilledUser);

const getCount = (users) => {
    let count = {
        logged: 0,
        points: 0,
    };

    for (let i = 0; i < users.length; i++) {
        if (users[i].isLoggedIn) {
            count.logged++;
            if (users[i].points >= 50) count.points++;
        }
    }

    return count;
};

const counts = getCount(users);
console.log(counts);

const getMERNUser = (users) => {
    const result = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].skills.includes('MongoDB') && users[i].skills.includes('Express') && users[i].skills.includes('React') && users[i].skills.includes('Node')) result.push(users[i]);
    }

    return result;
};

const mernUsers = getMERNUser(users);
console.log(mernUsers);

const getMaxThreeNums = (arr) => {
    const arrCopy = [...arr];

    for (let i = 0; i < arrCopy.length; i++) {
        let temp;
        for (let j = i + 1; j < arrCopy.length; j++) {
            if (arrCopy[i] > arrCopy[j]) {
                temp = arrCopy[j];
                arrCopy[j] = arrCopy[i];
                arrCopy[i] = temp;
            }
        }
    }

    return arrCopy.reverse().slice(0, 3);
};

const getOldestPeople = (users) => {
    const ages = [];
    const result = [];
    for (let i = 0; i < users.length; i++) {
        ages.push(users[i].age);
    }

    const maxAges = getMaxThreeNums(ages);
    for (let i = 0; i < maxAges.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (maxAges[i] === users[j].age) {
                result.push(users[j]);
                break;
            }
        }
    }

    return result;
};

const oldestPeople = getOldestPeople(users);
console.log(oldestPeople);
