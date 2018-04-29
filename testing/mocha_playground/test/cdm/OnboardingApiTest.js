var
  assert = require("assert"),
  RnHttp = require("../../src/lib/RnHttp");

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      var resp = RnHttp.cdm.onboard_user("dash", "the-pat-thomas");
      console.log(resp);
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
