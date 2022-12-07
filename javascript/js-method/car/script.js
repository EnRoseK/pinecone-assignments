const carBrands = [
    ['Aston Martin Lagonda Ltd', 'UK', 2016],
    ['Audi', 'Germany', 2016],
    ['BMW', 'Germany', 2016],
    ['Chevrolet', 'USA', 2016],
    ['Dodge', 'USA', 2016],
    ['Ferrari', 'Italy', 2016],
    ['Honda', 'Japan', 2016],
    ['Jaguar', 'UK', 2016],
    ['Lamborghini', 'Italy', 2016],
];

const searchByLetter = (letter) => {
    const indexes = [];

    for (let i = 0; i < carBrands.length; i++) {
        if (carBrands[i][0][0].toLowerCase() === letter.toLowerCase()) indexes.push(i);
    }

    if (indexes.length === 0) {
        console.log('Олдсонгүй');
    } else {
        for (let i = 0; i < indexes.length; i++) {
            console.log(`Brand: ${carBrands[indexes[i]][0]} \nCountry: ${carBrands[indexes[i]][1]} \nYear: ${carBrands[indexes[i]][2]} \n `);
        }
    }
};

const searchByCountry = (country) => {
    const indexes = [];
    for (let i = 0; i < carBrands.length; i++) {
        if (carBrands[i].includes(country)) {
            indexes.push(i);
        }
    }

    if (indexes.length === 0) console.log('Олдсонгүй');
    else {
        for (let i = 0; i < indexes.length; i++) {
            console.log(`${carBrands[indexes[i]].join(', ')}`);
        }
    }
};

const getDetails = () => {
    const countries = [],
        counts = [];
    let result = `\nНийт ${carBrands.length} мөр дата`;

    for (let i = 0; i < carBrands.length; i++) {
        if (!countries.includes(carBrands[i][1])) {
            countries.push(carBrands[i][1]);
            counts.push(0);
        }
    }

    for (let i = 0; i < countries.length; i++) {
        for (let j = 0; j < carBrands.length; j++) {
            if (countries[i] === carBrands[j][1]) counts[i]++;
        }
    }

    for (let i = 0; i < countries.length; i++) {
        result += `, ${countries[i]}-${counts[i]}`;
    }

    console.log(result);
};

searchByLetter('a');
searchByCountry('USA');
getDetails();
