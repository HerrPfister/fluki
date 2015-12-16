import fluky from '../lib';
import {expect} from 'chai';

describe('fluky', function () {
    describe('string', function () {
        let randomString;

        describe('default', function () {
            beforeEach(function () {
                randomString = fluky.string();
            });

            it('should return a random string', function () {
                expect(randomString).to.be.a('string');
            });
        });

        describe('when the string length is provided', function () {
            let stringSize;

            beforeEach(function () {
                stringSize = Math.floor(Math.random() * (10 - 5) + 5);
                randomString = fluky.string(stringSize);
            });

            it('should return a random string of specific size', function () {
                expect(randomString).to.be.a('string');
                expect(randomString).to.have.length(stringSize);
            });
        });
    });

    describe('integer', function () {
        describe('default', function () {
            let randomInteger;

            beforeEach(function () {
                randomInteger = fluky.integer();
            });

            it('should return a random integer from 0 to 100', function () {
                expect(randomInteger).to.be.most(100);
                expect(randomInteger).to.be.least(0)
            });
        });

        describe('when the min and max values are provided', function () {
            let randomInteger, min, max;

            beforeEach(function () {
                min = Math.floor(Math.random() * 100);
                max = Math.floor(Math.random() * ((min + 100) - min) + min;

                randomInteger = fluky.integer(min, max);
            });

            it('should return a random integer in between the provided values', function () {
                expect(randomInteger).to.be.most(max);
                expect(randomInteger).to.be.least(min)
            });
        });
    });
});
