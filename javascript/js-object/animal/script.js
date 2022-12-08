let animals = [
    { type: 'dog', sound: 'woof' },
    { type: 'cow', sound: 'moo' },
    { type: 'cat', sound: 'meow' },
];

const animalSound = (animal) => {
    return `${animal.sound}-${animal.sound}-${animal.sound}`;
};

console.log(animalSound(animals[0]));
