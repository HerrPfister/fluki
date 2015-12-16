import _ from 'lodash';

let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function anyInteger(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function anyString(stringSize) {
    let randomString = '';

    _.times(stringSize, () => {
        let index = Math.floor(Math.random() * alphabet.length);

        randomString += alphabet[index];
    });

    return randomString;
}

export default {
    string: anyString,
    integer: anyInteger
};
