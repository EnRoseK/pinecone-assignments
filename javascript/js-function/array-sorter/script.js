const arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];

const arraySorter = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let temp;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
};

console.log(arraySorter(arr));
