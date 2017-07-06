describe("createCalculator() - Simple adding and subtracting calculations",function(){
    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });

    it('should return 10 for add(10)', function(){
        calc.add(10);
        expect(calc.get()).to.be.equal(10)
    });

    it('should return -10 for subtract(10)', function(){
        calc.subtract(10);
        expect(calc.get()).to.be.equal(-10)
    });

    it('should return 5 for add(10) and then subtract(5)', function(){
        calc.add(10);
        calc.subtract(5);
        expect(calc.get()).to.be.equal(5)
    });

    it('should return 10 for 2 x add(10) and then 2x subtract(5)', function(){
        calc.add(10);
        calc.add(10);
        calc.subtract(5);
        calc.subtract(5);
        expect(calc.get()).to.be.equal(10)
    });

    it('add should work correctly with strings', function(){
        calc.add('10');
        expect(calc.get()).to.be.equal(10)
    });

    it('subtract should work correctly with strings', function(){
        calc.subtract('10');
        expect(calc.get()).to.be.equal(-10)
    });

    it('initial value should be 0', function(){
        expect(calc.get()).to.be.equal(0)
    });
});