var fluki = require('../dist/index'),

    _ = require('lodash'),
    expect = require('chai').expect;

describe('fluki', function () {

    describe('string', function () {
        var randomString;

        describe('default', function () {
            beforeEach(function () {
                randomString = fluki.string();
            });

            it('should return a random string', function () {
                expect(randomString).to.be.a('string');
                expect(randomString).to.have.length(10);
            });
        });

        describe('when the string length is provided', function () {
            var stringSize;

            beforeEach(function () {
                stringSize = Math.floor(Math.random() * (10 - 5) + 5);
                randomString = fluki.string(stringSize);
            });

            it('should return a random string of specific size', function () {
                expect(randomString).to.be.a('string');
                expect(randomString).to.have.length(stringSize);
            });
        });
    });

    describe('integer', function () {
        var randomInteger,
            min,
            max;

        describe('default', function () {
            beforeEach(function () {
                randomInteger = fluki.integer();
            });

            it('should return a random integer from 1 to 100', function () {
                expect(randomInteger).to.be.least(1);
                expect(randomInteger).to.be.most(100);
            });
        });

        describe('when the min and max values are provided', function () {

            beforeEach(function () {
                min = Math.floor(Math.random() * 100);
                max = Math.floor(Math.random() * ((min + 100) - min) + min);

                randomInteger = fluki.integer(min, max);
            });

            it('should return a random integer in between the provided values', function () {
                expect(randomInteger).to.be.least(min);
                expect(randomInteger).to.be.most(max);
            });
        });

        describe('when min and max are the same', function () {
            beforeEach(function () {
                min = max = 1;

                randomInteger = fluki.integer(min, max);
            });

            it('should return the passed in number', function () {
                expect(randomInteger).equal(min);
                expect(randomInteger).equal(max);
            });
        });

        describe('when min is greater than max', function () {
            beforeEach(function () {
                max = Math.floor(Math.random() * 100);
                min = max + 1;

                randomInteger = fluki.integer(min, max);
            });

            it('should return the passed in number', function () {
                expect(randomInteger).to.equal(-1);
            });
        });
    });

    describe('array', function () {
        var randomArray;

        describe('default', function () {
            it('should build a randomly generated array', function () {
                randomArray = fluki.array();

                expect(randomArray).to.have.length(1);
                expect(randomArray[0]).to.be.a('string');
            });

            it('should build a randomly generated array of strings if supplied an unsupported type', function () {
                randomArray = fluki.array(1, 'unsupportedType');

                expect(randomArray).to.have.length(1);
                expect(randomArray[0]).to.be.a('string');
            });
        });

        describe('when a different type is passed', function () {
            it('should return a randomly generated array of integers if "int/integer" is passed', function () {
                randomArray = fluki.array(1, 'int');

                expect(randomArray).to.have.length(1);
                expect(randomArray[0]).to.be.a('number');

                randomArray = fluki.array(1, 'integer');

                expect(randomArray).to.have.length(1);
                expect(randomArray[0]).to.be.a('number');
            });

            it('should return a randomly generated array of integers if "num/number" is passed', function () {
                randomArray = fluki.array(1, 'num');

                expect(randomArray).to.have.length(1);
                expect(randomArray[0]).to.be.a('number');

                randomArray = fluki.array(1, 'number');

                expect(randomArray).to.have.length(1);
                expect(randomArray[0]).to.be.a('number');
            });

            it('should return an array of objects if "obj/object" is passed', function () {
                randomArray = fluki.array(1, 'obj');

                expect(randomArray).to.have.length(1);
                expect(randomArray[0]).to.be.a('object');

                randomArray = fluki.array(1, 'object');

                expect(randomArray).to.have.length(1);
                expect(randomArray[0]).to.be.a('object');
            });
        });
    });

    describe('object', function () {
        var randomObject;

        describe('default', function () {
            beforeEach(function () {
                randomObject = fluki.object();
            });

            it('should return a randomly generated object', function () {
                expect(randomObject).to.be.a('object');
                expect(_.keys(randomObject)).to.have.length(1);
                expect(_.values(randomObject)).to.have.length(1);
            });
        });

        describe('when given a set of keys and values', function () {
            var expectedNumberOfKeyValues;

            beforeEach(function () {
                expectedNumberOfKeyValues = fluki.integer();
                randomObject = fluki.object(expectedNumberOfKeyValues);
            });

            it('should return an object with x amount of key value pairs', function () {
                expect(randomObject).to.be.a('object');
                expect(_.keys(randomObject)).to.have.length(expectedNumberOfKeyValues);
                expect(_.values(randomObject)).to.have.length(expectedNumberOfKeyValues);
            });
        });
    });
});
