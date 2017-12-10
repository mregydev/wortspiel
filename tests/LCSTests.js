const should = require('chai').should();
const LCS = require('../src/LCS');


describe("LCS test cases", () => {
    it("should return 0 in cases either of the passed arguments is undefined", (done) => {
        let lcs = LCS(undefined, undefined);
        lcs.should.equals(0);
        done();
    });

    it("should return 0 in cases either of the passed arguments is null", (done) => {
        let lcs = LCS(undefined, undefined);
        lcs.should.equals(0);
        done();
    });

    it("should return 0 in cases no arguments passed", (done) => {
        let lcs = LCS(undefined, undefined);
        lcs.should.equals(0);
        done();
    });

    it("should work in normal case", (done) => {
        let lcs = LCS("mregydev", "mregydev1");
        lcs.should.equals(8);
        done();
    });
});