const phone = '+97699119911';

let areaCode = phone.substring(0, 4);

if (Number(phone) && areaCode === '+976' && phone.length === 12) console.log('Зөв дугаар');
else console.log('Буруу дугаар');
