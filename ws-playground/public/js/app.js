var App = (function () {
  var self    = {};
  self.socket = new WebSocket("ws://localhost:8080/");

  self.openSocket = function () {
    try {
      self.socket.onopen = function () {
        console.log("successfully opened web socket");
        console.log("socket status: " + self.socket.readyState);
      };
    } catch (exception) {
      console.error("exception loading web socket");
      console.log(exception);
    }

    self.socket.onmessage = function (msg) {
      console.log(msg);
    };

    self.socket.onclose = function (msg) {
      console.log("socket was closed");
      console.log("socket status: " + self.socket);
    }
  }

  self.makeClickHandler = function (selector, handler) {
    $(selector).click(function (e) {
      e.preventDefault();
      handler(e);
    });
  }

  self.getOctaveOffset = function (e) {
    var drumBtnIndex = $(e.currentTarget).parent().index(),
      optionsRow     = $("#options-container .options-row")[drumBtnIndex],
      optionsButtons = $(optionsRow).children(),
      selectedButton = _.find(optionsButtons, function (btn) {
        return $(btn).hasClass("active");
      }, this);
    if (selectedButton === undefined) {
      return 0;
    }
    return $(selectedButton).index();
  };

  self.drumButtonHandler = function (e) {
    var target = $(e.currentTarget),
      pitchIdx = target.index(),
      octaveOffset = self.getOctaveOffset(e),
      dataMap  = {pitchIdx: pitchIdx, octave: octaveOffset};
    _.each(target.siblings(), function (el) {
      $(el).removeClass("colored");
    }, this);
    $(e.currentTarget).toggleClass("colored");
    self.socket.send(JSON.stringify(dataMap));
  };

  self.optionButtonHandler = function (e) {
    var btn = $(e.currentTarget);
    _.each(btn.siblings(), function (el) {
      $(el).removeClass("colored");
      $(el).removeClass("active");
    }, this);
    btn.toggleClass("colored");
    btn.toggleClass("active");
  };

  self.initialize = function () {
    self.openSocket();
    self.makeClickHandler(".drum-btn",   self.drumButtonHandler);
    self.makeClickHandler(".option-btn", self.optionButtonHandler);
  };

  return self;
})();

$(document).ready(function () {
  App.initialize();
});
