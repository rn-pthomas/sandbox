var AppLib = (function () {
  var self = {};
  self.toggleButtonColor = function (target) {
    $(target).toggleClass("colored");
  };
  return self;
})();
