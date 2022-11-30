// 1
const firstName = 'Javkhlant',
  lastName = 'Altankhuyag';

const result = firstName.length > lastName.length ? 'Нэр илүү их үсэгтэй' : 'Овог их үсэгтэй';
console.log(result);

// 2
console.log(firstName.toLowerCase(), lastName.toLowerCase());

// 3
console.log(firstName.toUpperCase(), lastName.toUpperCase());

// 4
const str1 = 'Pinecone academy-н',
  str2 = 'leap хөтөлбөрт тавтай морилно уу?';
const rslt = str1.concat(' ', str2);
console.log(rslt);

// 5
const firstName1 = 'Хатнаа',
  lastName1 = 'Мөнхбат',
  country = 'Монгол',
  city = 'Улаанбаатар',
  age = '21',
  job = 'Ажилгүй';

console.log(`${lastName1} овогтой ${firstName1} миний бие одоогоор ${age} настай бөгөөд ${country} улсын ${city} хотод ${job} амьдарч байна.`);

// 6
console.log('\t1 2 3 4 5\n\t2 3 4 5 1\n\t3 4 5 1 2\n\t4 5 1 2 3\n\t5 1 2 3 4');
