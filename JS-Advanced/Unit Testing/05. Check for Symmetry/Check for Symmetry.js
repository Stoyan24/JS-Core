describe("is array symmetric", function () {
    it("should return true for [1,2,1]", function () {
        expect(isSymmetric([1, 2, 1])).equal(true);
    });

    it("should return true for []", function () {
        expect(isSymmetric([])).equal(true);
    });

    it("should return false for [1,2,3]", function () {
        expect(isSymmetric([1, 2, 3])).equal(false);
    });

    it("should return false for 'this is not an array' ", function () {
        expect(isSymmetric('this is not an array')).equal(false);
    });
    it("should return false for [о,o] ", function () {
        expect(isSymmetric(['о','o'])).equal(false);
    });
    it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5] ", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5] )).equal(false);
    });

    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });

    it("should return false for 1,2,1 ", function () {
        expect(isSymmetric(1, 2, 1)).equal(false);
    });

    it("should return false for true ", function () {
        expect(isSymmetric(true)).equal(false);
    });

});