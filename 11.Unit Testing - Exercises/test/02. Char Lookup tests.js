let expect = require('chai').expect;
let lookupChar = require('../03. Char Lookup').lookupChar;

describe('Test lookUpChar', function () {
    it('with a first element is not string should return undefimed', function () {
        expect(lookupChar(13, 13)).to.equal(undefined, "Function did not return the correct result!");
    });
    it('with a second element is string should return undefimed', function () {
        expect(lookupChar('hhhhhhh', 'hhhhhhhh')).to.equal(undefined, "Function did not return the correct result!");
    });
    it('with a second element is not integer should return undefimed', function () {
        expect(lookupChar('hhhhhhh', 2.5)).to.equal(undefined, "Function did not return the correct result!");
    });
    it('if index is negative', function () {
        expect(lookupChar('hhhhhhh', -13)).to.equal("Incorrect index", "Function did not return the correct result!");
    });
    it('if index is outside the string lenght', function () {
        expect(lookupChar('hhh', 13)).to.equal("Incorrect index", "Function did not return the correct result!");
    });
    it('if index is equal to the string lenght', function () {
        expect(lookupChar('hhh', 3)).to.equal("Incorrect index", "Function did not return the correct result!");
    });
    it('with valid data', function () {
        expect(lookupChar('hhh', 1)).to.equal("h", "Function did not return the correct result!");
    });
    it('with valid data', function () {
        expect(lookupChar('pesho', 1)).to.equal("e", "Function did not return the correct result!");
    });
});