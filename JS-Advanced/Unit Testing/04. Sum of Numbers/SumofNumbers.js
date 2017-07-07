function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}
describe("Test result" ,function () {
    it("Should return 3 for [1,2]",function () {
        expect(3).to.equal(sum([1,2]))
    });

    it("Should return 1 for [1]",function () {
        expect(1).to.equal(sum([1]))
    });

    it("Should return 0 for []",function () {
        expect(0).to.equal(sum([]))
    });

    it("Should return 3 for [1.5, 2.5, -1]",function () {
        expect(3).to.equal(sum([1.5, 2.5, -1]))
    });

    it("Should return NaN for ['invalid input']",function () {
        expect(sum('invalid input')).to.be.NaN;
    })
});
