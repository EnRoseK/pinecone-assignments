const register = 'СЦ90091819',
    alphs = register.substring(0, 2),
    numbers = register.substring(2, 10);

register.length === 10 && !Number(alphs) && Number(numbers) ? console.log('Зөв оруулсан байна') : console.log('Буруу оруулсан байна');
