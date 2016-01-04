import _ from 'lodash';

let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function anyInteger(min = 1, max = 100) {
    return (min > max) ? -1 : Math.floor(Math.random() * (max - min + 1) + min);
}

function anyString(stringSize = 10) {
    var randomString = '';

    _.times(stringSize, () => {
        let index = anyInteger(0, alphabet.length - 1);

    randomString += alphabet[index];
});

return randomString;
}

function anyObject(numberOfKeyValuePairs = 1) {
    var randomObject = {};

    _.times(numberOfKeyValuePairs, (index) => {
        randomObject[ anyString() ] = anyString();
    });

    return randomObject;
}

function buildItem(type) {
    switch (type) {
        case 'int':
        case 'integer':
        case 'num':
        case 'number':
            return anyInteger();

        case 'obj':
        case 'object':
            return anyObject();

        case 'str':
        case 'string':
        default:
            return anyString();
    }
}

function anyArray(numberOfItems = 1, itemType = 'string') {
    var randomArray = [],
        type = itemType.toLowerCase();

    _.times(numberOfItems, () => {
        randomArray.push(buildItem(type));
    });

    return randomArray;
}

export default {
    integer: anyInteger,
    string: anyString,
    object: anyObject,
    array: anyArray
};
