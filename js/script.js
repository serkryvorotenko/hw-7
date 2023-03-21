const reverse = (source) => {
    let result = '';

    for (let i = 0; i < source.length; i++) {
        result = source[i] + result;
    }
    return result;
};

const getMin = (source) => {
    let result = 0;

    for (let i = 0; i < source.length; i++) {
        if (result > source[i]) {
            result = source[i];
        }
    }
    return result;
};

const verifyNumbers = (source) => {
    let result = [];

    for (let i = 0; i < source.length; i++) {
        if (!isNaN(source[i])) {
            result[result.length] = source[i];
        }
    }
    return result;
};

const getAverage = (source) => {
    let sum = 0;

    for (let i = 0; i < source.length; i++) {
        sum = sum + source[i];
    }
    return sum / source.length;
};

const getMaxString = (source) => {
    let result = '';

    for (let i = 0; i < source.length; i++) {
        if (result.length < source[i].length) {
            result = source[i];
        }
    }
    return result;
};

const utils = {
    reverse: reverse,
    getMin: getMin,
    verifyNumbers: verifyNumbers,
    getAverage: getAverage,
    getMaxString: getMaxString,
};

console.log(utils.reverse('кобан упал и лапу набок'));

console.log(utils.reverse([1, 2, 3, 345,]));

console.log(utils.getMin([1, 23, 45, -3, 456, 46]));

console.log(utils.verifyNumbers(['hello', 34, 1, 4, 5, 89, undefined]));

console.log(utils.getAverage([23, 45, 65, 2, 3, 0, 1, 45, 9, 0, 6, 5, 43]));

console.log(utils.getMaxString(['Реве та стогне Дніпр широкий,',
    'Сердитий вітер завива,',
    'Додолу верби гне високі',
    'Горами хвилю підійма.']));
