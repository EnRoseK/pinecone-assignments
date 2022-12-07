const queueLine = ['Бат', 'Дорж', 'Пунцаг', 'Готов', 'Баяраа', 'Болд', 'Навчаа', 'Гончигсумлай', 'Цэцгээ', 'Нэргүй', 'Бальбийгомбо', 'Баатар', 'Сүхээ'];

const addToQueue = (person1, person2) => {
    const index = queueLine.indexOf('Гончигсумлай');
    queueLine.splice(index + 1, 0, person1, person2);
};

const firstTen = () => {
    queueLine.splice(10);
};

addToQueue('Эгч 1', 'Эгч 2');
firstTen();

console.log(queueLine);
