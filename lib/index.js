import _ from 'lodash';
import moment from 'moment';

let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numberOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function anyInteger(min = 1, max = 100) {
    return (min > max) ? -1 : Math.floor(Math.random() * (max - min) + min);
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

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
        } else {
            return true;
        }
    }

    return false;
}

function getDay(month, year) {
    var isLeapYear = isLeapYear(year),
        days = numberOfDaysInMonth[month];

    return (isLeapYear && month === 1) ? days + 1 : days;
}

function anyDate(formatString = 'MM/DD/YYYY', isRandom = false) {
    var date;

    if (isRandom) {
        let month = anyInteger(0, 12);
        let year = anyInteger(1980, 9999);
        let day = getDay(month, year);

        date = moment(year, day, month);
    } else {
        date = moment();
    }

    return date.format(formatString);
}

export default {
    date: anyDate,
    integer: anyInteger,
    string: anyString,
    object: anyObject,
    array: anyArray
};
