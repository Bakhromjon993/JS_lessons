const median = (numbers) => {
    return numbers.reduce((sum, item) => sum += item, 0) / numbers.length;
};

median([2, 5, 7, 56.7, -23]);