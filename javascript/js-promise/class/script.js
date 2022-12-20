const getEgg = () => {
    const eggCount = 12;
    const promise = new Promise((res, rej) => {
        eggCount > 0
            ? setTimeout(() => {
                  res(true);
              }, 1000)
            : rej('Out of eggs');
    });
    return promise;
};

const pickPot = () => {
    const isPotInUse = false;
    const promise = new Promise((res, rej) => {
        !isPotInUse
            ? setTimeout(() => {
                  res(true);
              }, 1000)
            : rej('Pot is in use');
    });

    return promise;
};

const fillWater = () => {
    const isWaterRunning = true;
    const promise = new Promise((res, rej) => {
        isWaterRunning
            ? setTimeout(() => {
                  res(true);
              }, 1000)
            : rej('Pay your water bill!!!');
    });

    return promise;
};

const startStove = () => {
    const isStoveWorking = true;
    return new Promise((res, rej) => {
        isStoveWorking
            ? setTimeout(() => {
                  res(true);
              }, 1000)
            : rej('Fix your stove!');
    });
};

const boilEgg = () => {
    const timer = 10;
    return new Promise((res, rej) => {
        timer >= 10
            ? setTimeout(() => {
                  res('Cooked egg');
              }, 3000)
            : rej('You failed!');
    });
};

const cookedEgg = getEgg()
    .then(() => {
        console.log('Picked an egg');
        return pickPot();
    })
    .then(() => {
        console.log('Picked an pot');
        return fillWater();
    })
    .then(() => {
        console.log('Filled water');
        return startStove();
    })
    .then(() => {
        console.log('Started the stove');
        return boilEgg();
    })
    .then((res) => {
        console.log('Boiled an egg');
        console.log(res);
    })
    .catch((err) => console.log(err));
