var Lib = (function () {
  var self = {};
  self.toggleButtonColor = function (target) {
    $(target).toggleClass("colored");
  };
  return self;
})();

var App = (function () {
  var self = {};
  self.socket = new WebSocket("ws://localhost:8080/");

  return self;
})();

$(document).ready(function () {
  try {
    App.socket.onopen = function () {
      console.log("successfully opened web socket");
      console.log("socket status: " + App.socket.readyState);
    };
  } catch (exception) {
    console.error("exception loading web socket");
    console.log(exception);
  }

  App.socket.onmessage = function (msg) {
    var parsedMsg = JSON.parse(msg.data);
    console.log(parsedMsg);
  };

  $(".drum-btn").click(function (e) {
    e.preventDefault();
    Lib.toggleButtonColor(e.currentTarget);
  });
});
