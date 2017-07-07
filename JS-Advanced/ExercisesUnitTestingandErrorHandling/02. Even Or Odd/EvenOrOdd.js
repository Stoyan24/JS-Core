function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
describe("Test result" ,function () {
    it("Should return undefined for 6",function () {
        expect(isOddOrEven(6)).to.equal(undefined);
    });
    it("Should return undefined for 'pesho'",function () {
        expect(isOddOrEven({name: 'pesho'})).to.equal(undefined);
    });

    it("Should return undefined for '' ",function () {
        expect(isOddOrEven()).to.equal(undefined);
    });
    it("Should return odd for '1'",function () {
        expect(isOddOrEven('1')).to.equal('odd');
    });

    it("Should return even for '33' ",function () {
        expect(isOddOrEven('33')).to.equal('even');
    });


    it("Should return odd for 'pesho' ",function () {
        expect(isOddOrEven('pesho')).to.equal('odd');
    });
});