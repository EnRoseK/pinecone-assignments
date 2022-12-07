const removeArrayElement = (arr, el) => {
    while (arr.includes(el)) {
        const index = arr.indexOf(el);
        arr.splice(index, 1);
    }

    return arr;
};

console.log(removeArrayElement([2, 1, 6, 5, 8], 6));
