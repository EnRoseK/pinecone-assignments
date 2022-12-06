// 1
const fullName = () => {
    console.log('Javkhlant Altankhuyag');
};

// 2
const fullName1 = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};

// 3
const sum = (num1, num2) => {
    return num1 + num2;
};

// 4
const area = (width, length) => {
    return width * length;
};

// 5
const perimeter = (width, length) => {
    return 2 * (width + length);
};

fullName();
console.log(fullName1('Javkhlant', 'Altankhuyag'));
console.log(sum(10, 44));
console.log(area(3, 5));
console.log(perimeter(3, 5));
