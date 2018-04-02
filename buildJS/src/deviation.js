const data = [
    1,
    1,
    3,
    2,
    2,
    4,
    2,
    1,
    1,
    1
];

const meanReducer = (accumulator, currentValue, currentIndex, array) => {
    const currentSum = accumulator + currentValue;

    if (currentIndex === array.length - 1) {
        return currentSum / array.length
    }

    return currentSum;
};

const mean = data.reduce(meanReducer, 0);

const standardDeviationReducer = (acc, currentValue, currentIndex, array) => {
    let totalSum = acc + Math.pow((currentValue - mean), 2);

    if(currentIndex === (array.length -1)) {

        return Math.sqrt(totalSum/(array.length-1));

    }
    return totalSum;
};

const deviation = data.reduce(standardDeviationReducer, 0);

module.exports = deviation;
