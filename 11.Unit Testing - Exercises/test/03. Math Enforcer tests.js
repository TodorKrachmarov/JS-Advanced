let expect = require('chai').expect;
let mathEnforcer = require('../04. Math Enforcer').mathEnforcer;

describe('Test mathEnforcer', function () {
    describe('addFive Tests', function () {
        it('with string parameter should return undefined', function () {
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined, "Function did not return the correct result!");
        });
        it('with integer parameter should return corect answer', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10, "Function did not return the correct result!");
        });
        it('with integer parameter should return corect answer', function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0, "Function did not return the correct result!");
        });
        it('with double parameter should return corect answer', function () {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5, "Function did not return the correct result!");
        });
    });
    describe('subtractTen Tests', function () {
        it('with string parameter should return undefined', function () {
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined, "Function did not return the correct result!");
        });
        it('with integer parameter should return corect answer', function () {
            expect(mathEnforcer.subtractTen(10)).to.equal(0, "Function did not return the correct result!");
        });
        it('with integer parameter should return corect answer', function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20, "Function did not return the correct result!");
        });
        it('with double parameter should return corect answer', function () {
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5, "Function did not return the correct result!");
        });
    });
    describe('sum Tests', function () {
        it('with string parameter should return undefined', function () {
            expect(mathEnforcer.sum('pesho', 5)).to.equal(undefined, "Function did not return the correct result!");
        });
        it('with string parameter should return undefined', function () {
            expect(mathEnforcer.sum(5, 'pesho')).to.equal(undefined, "Function did not return the correct result!");
        });
        it('with integer parameter should return corect answer', function () {
            expect(mathEnforcer.sum(10, 10)).to.equal(20, "Function did not return the correct result!");
        });
        it('with double parameter should return corect answer', function () {
            expect(mathEnforcer.sum(10.5, 10.5)).to.equal(21, "Function did not return the correct result!");
        });
        it('with double parameter should return corect answer', function () {
            expect(mathEnforcer.sum(10.5, 10)).to.equal(20.5, "Function did not return the correct result!");
        });
        it('with double parameter should return corect answer', function () {
            expect(mathEnforcer.sum(10, 10.5)).to.equal(20.5, "Function did not return the correct result!");
        });
    });
});