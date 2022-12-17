const data = [
    'Засгийн',
    'газарт',
    '6.4',
    'сая',
    'тонн',
    'нүүрс',
    'алдагдсан',
    'гэх',
    'мэдээлэл',
    'ирээгүй',
    'байна.',
    'Бодит',
    'байдалд',
    'ийм',
    'их',
    'хэмжээний',
    'нүүрс',
    'алдагдсан',
    'гэх',
    'асуудал',
    'эргэлзээтэй',
    'байна.',
    'Хууль',
    'хяналтын',
    'байгууллага',
    'хяналт',
    'шалгалтын',
    'ажил',
    'явуулж',
    'байна',
];

const input = 'нүүрс';
let count = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i].toLowerCase() === input.toLowerCase()) count++;
}

console.log(`${input} гэдэг үг ${count} орсон байна.`);
