var m = require('mocha');
var j = require('path').join;
var should = require('should');

var cronCalc = require(j(__dirname, '..', 'index.js'));

m.describe('nextRun()', function() {
  m.it('Should return correct date', function(done) {
    var d = cronCalc.nextRun('0 4 * * *');
    d.should.be.ok.and.be.a.Date;

    var shouldBe = new Date();
    shouldBe.setDate(shouldBe.getDate() + 1);
    shouldBe.setHours(4,0,0,999);

    d.getDate().should.equal(shouldBe.getDate());
    d.getHours().should.equal(shouldBe.getHours());

    done();
  });
});
