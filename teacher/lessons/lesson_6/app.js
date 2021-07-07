console.log(new Date().getHours());

console.log(Math.floor(-4.3));
console.log(Math.trunc(-4.3));


const getRandom = (numbers) => {
    return numbers[Math.floor(Math.random() * numbers.length)];
};

const getRandomList = (arr, count) => {
    let result = [];
    while (result.length < count) {
        const random = getRandom(arr);
        if (!result.includes(random)) {
            result.push(random);
        }
    }
    return result;
};

console.log(getRandomList([3, 45, 67, 893, 0, -45], 3));