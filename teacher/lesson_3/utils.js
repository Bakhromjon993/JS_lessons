const randomSort = (arr) => {
    let i = arr.length - 1;
    for (i; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
    }
    return arr;
};