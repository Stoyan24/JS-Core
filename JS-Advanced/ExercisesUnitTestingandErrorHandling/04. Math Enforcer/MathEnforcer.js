let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
let expect = require('chai').expect;

describe('Math Enforcer Unit Tests', function () {
   describe('addFive', function () {
       it('with a string(should return undefined)', function () {
           let result = mathEnforcer.addFive('nakov');
           expect(result).to.be.undefined;
       });
       it('with positive number', function () {
           let result = mathEnforcer.addFive(4);
           expect(result).to.be.equal(9, 'Add five function did not work correct!');
       });
       it('with negative number', function () {
           let result = mathEnforcer.addFive(-4);
           expect(result).to.be.equal(1, 'Add five function did not work correct!');
       });it('with floating point number', function () {
           let result = mathEnforcer.addFive(3.14);
           expect(result).to.be.closeTo(8.14, 0.01, 'Add five function did not work correct!');
       });
   });
    describe('subtractTen', function () {
        it('with a string(should return undefined)', function () {
            let result = mathEnforcer.subtractTen('nakov');
            expect(result).to.be.undefined;
        });
        it('with positive number', function () {
            let result = mathEnforcer.subtractTen(14);
            expect(result).to.be.equal(4, 'SubtractTen function did not work correct!');
        });
        it('with negative number', function () {
            let result = mathEnforcer.subtractTen(-4);
            expect(result).to.be.equal(-14, 'SubtractTen function did not work correct!');
        });it('with floating point number', function () {
            let result = mathEnforcer.subtractTen(15.14);
            expect(result).to.be.closeTo(5.14, 0.01, 'SubtractTen function did not work correct!');
        });
    });
    describe('sum', function () {
        it('first num as a string', function () {
            expect(mathEnforcer.sum('pesho', 2)).to.be.undefined;
        });
        it('second num as a string', function () {
            expect(mathEnforcer.sum(2, 'pesho')).to.be.undefined;
        });
        it('with two positive numbers', function () {
            expect(mathEnforcer.sum(2,2)).to.be.equal(4);
        });
        it('with two negative numbers', function () {
            expect(mathEnforcer.sum(-2,-2)).to.be.equal(-4);
        });
        it('with two floating point numbers', function () {
            expect(mathEnforcer.sum(3.14, 3.14)).to.be.closeTo(6.28, 0.01);
        });
    })
});