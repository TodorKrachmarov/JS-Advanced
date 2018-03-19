let expect = require('chai').expect;
let PaymentPackage = require('../02. Payment Package');

describe('Test PaymentPackage class', function () {
    let builder;
    beforeEach(function () {
        builder = new PaymentPackage('todor', 28);
    });
    describe('Test object inicialization', function () {
        it('should not be initialized whit wrong properties', function () {
            expect(() => {builder = new PaymentPackage(5, 'trr')}).to.throw(Error);
        });
        it('should not be initialized whit one propertie', function () {
            expect(() => {builder = new PaymentPackage(5)}).to.throw(Error);
        });
        it('should not be initialized whit one propertie', function () {
            expect(() => {builder = new PaymentPackage('todor')}).to.throw(Error);
        });
    });
    describe('Test if it is instaled whit all methods', function () {
        beforeEach(function () {
            builder = new PaymentPackage('todor', 28);
        });
        it("It should have initialized all methods", function() {
            expect(Object.getPrototypeOf(builder).hasOwnProperty('name')).to.be.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('value')).to.be.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('VAT')).to.be.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('active')).to.be.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.be.equal(true);
        });
        it('should return right value', function () {
            expect(builder.toString()).to.equal('Package: todor\n- Value (excl. VAT): 28\n- Value (VAT 20%): 33.6');
        });
        it('should return right value', function () {
            builder.active = false;
            expect(builder.toString()).to.equal('Package: todor (inactive)\n- Value (excl. VAT): 28\n- Value (VAT 20%): 33.6');
        });
    });
    describe('test name', function () {
        it('should get the right value', function () {
            expect(builder.name).to.equal('todor');
        });
        it('should throw error', function () {
            expect(() => {builder.name = 5}).to.throw(Error);
        });
        it('should throw error', function () {
            expect(() => {builder.name = ''}).to.throw(Error);
        });
        it('should throw error', function () {
            expect(() => {builder.name = null}).to.throw(Error);
        });
        it('should pass', function () {
            builder.name = 'ivan';
            expect(builder.name).to.equal('ivan');
        });
    });
    describe('test value', function () {
        it('should get the right value', function () {
            expect(builder.value).to.equal(28);
        });
        it('should throw error', function () {
            expect(() => {builder.value = []}).to.throw(Error);
        });
        it('should throw error', function () {
            expect(() => {builder.value = -15}).to.throw(Error);
        });
        it('should throw error', function () {
            expect(() => {builder.value = null}).to.throw(Error);
        });
        it('should pass', function () {
            builder.value = 30;
            expect(builder.value).to.equal(30);
        });
        it('should pass', function () {
            builder.value = 0;
            expect(builder.value).to.equal(0);
        });
    });
    describe('test VAT', function () {
        it('should get the right value', function () {
            expect(builder.VAT).to.equal(20);
        });
        it('should throw error', function () {
            expect(() => {builder.VAT = {}}).to.throw(Error);
        });
        it('should throw error', function () {
            expect(() => {builder.VAT = -15}).to.throw(Error);
        });
        it('should throw error', function () {
            expect(() => {builder.VAT = null}).to.throw(Error);
        });
        it('should pass', function () {
            builder.VAT = 30;
            expect(builder.VAT).to.equal(30);
        });
    });
    describe('test active', function () {
        it('should get the right value', function () {
            expect(builder.active).to.equal(true);
        });
        it('should throw error', function () {
            expect(() => {builder.active = {}}).to.throw(Error);
        });
        it('should throw error', function () {
            expect(() => {builder.active = -15}).to.throw(Error);
        });
        it('should throw error', function () {
            expect(() => {builder.active = null}).to.throw(Error);
        });
        it('should pass', function () {
            builder.active = false;
            expect(builder.active).to.equal(false);
        });
    });
});