describe("Date helper ", function() {
    var assert = require('chai').assert;
    var dateParser = new require("../dev/dateParser")();

    it("will return correct date", function() {
        var date = dateParser.parseToDate("12/02/2016", "DD/MM/YYYY")
        assert.equal(date.getDate(), 12);
        assert.equal(date.getMonth(), 1);
        assert.equal(date.getFullYear(), 2016);
    });

    it("will return correct date for different format", function() {
        var date = dateParser.parseToDate("2016/12/02", "YYYY/DD/MM")
        assert.equal(date.getDate(), 12);
        assert.equal(date.getMonth(), 1);
        assert.equal(date.getFullYear(), 2016);
    });

    it("will return correct date for no zero prepend format", function() {
        var date = dateParser.parseToDate("12/2/2016", "DD/M/YYYY")
        assert.equal(date.getDate(), 12);
        assert.equal(date.getMonth(), 1);
        assert.equal(date.getFullYear(), 2016);
    });
});
