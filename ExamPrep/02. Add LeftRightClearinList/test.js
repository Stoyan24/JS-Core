let expect = require('chai').expect;
let makeList = require('./list-add-left-right-clear');

describe('Test list-add-left-right-clearl', function () {
    let myList = {};

    beforeEach(function () {
        myList = makeList();

    });


    describe('Test properties', function () {
        it("should contain all properties", function () {
            expect(myList.addLeft).to.exist;
            expect(myList.addRight).to.exist;
            expect(myList.clear).to.exist;
            expect(myList.toString).to.exist;
        });
    });

    describe('Test functions', function () {
        it('Test add-left', function () {
            myList.addLeft('item');
            myList.addLeft('beer');
            expect(myList.toString()).to.equal('beer, item', 'Big mistake');
        });
        it('Test add-right', function () {
            myList.addRight('item');
            myList.addRight('beer');
            expect(myList.toString()).to.equal('item, beer', 'Big mistake');
        });
        it('Test clear', function () {
            myList.addRight('item');
            myList.addRight('beer');
            myList.clear();
            expect(myList.toString()).to.equal('', 'Big mistake');
        });
        it('Test toString', function () {
            expect(myList.toString()).to.equal('', 'Big mistake');
        });
    });
});