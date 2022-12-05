const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]);

for (let i = 0; i < itCompanies.length; i++) console.log(itCompanies[i]);

for (let i = 0; i < itCompanies.length; i++) console.log(itCompanies[i].toUpperCase());

let sentence = '';
for (let i = 0; i < itCompanies.length; i++) sentence += itCompanies[i] + ', ';

sentence += 'зэрэг мэдээллийн технологийн томоохон компаниуд.';

console.log(sentence);
