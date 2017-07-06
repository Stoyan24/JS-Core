describe("is colour correct", function () {
    it("should return true for 255, 158, 170", function () {
        expect(rgbToHexColor(255, 158, 170)).equal('#FF9EAA');
    });

    it("should return true for 0, 0, 0", function () {
        expect(rgbToHexColor(0, 0, 0)).equal('#000000');
    });

    it("should return true for 12, 13, 14", function () {
        expect(rgbToHexColor(12, 13, 14)).equal('#0C0D0E');
    });

    it("should return undefined for 0/-1 0/-1 0/-1", function () {
        expect(rgbToHexColor(-1, 0, 0)).equal(undefined);
        expect(rgbToHexColor(0, -1, 0)).equal(undefined);
        expect(rgbToHexColor(0, 0, -1)).equal(undefined);
    });

    it("should return undefined for 256?, 256?, 256?", function () {
        expect(rgbToHexColor(256, 0, 0)).equal(undefined);
        expect(rgbToHexColor(0, 256, 0)).equal(undefined);
        expect(rgbToHexColor(0, 0, 256)).equal(undefined);
    });

    it("should return undefined for double?, double?, double?", function () {
        expect(rgbToHexColor(1.2, 0, 0)).equal(undefined);
        expect(rgbToHexColor(0, 1.2, 0)).equal(undefined);
        expect(rgbToHexColor(0, 0, 1.2)).equal(undefined);
    });

    it("should return undefined for ('5', [3], {8:9}), ", function () {
        expect(rgbToHexColor('5', [3], {8:9})).equal(undefined);
    });

    it("should return undefined for (), ", function () {
        expect(rgbToHexColor()).equal(undefined);
    });

});