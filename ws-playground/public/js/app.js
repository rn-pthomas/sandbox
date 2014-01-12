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

  self.buttonHandler = function (e) {
    e.preventDefault();
    var dataMap = {pitch: $(e.currentTarget).attr("data-pitch")};
    self.socket.send(JSON.stringify(dataMap));
  };

  self.initializeButtonHandler = function () {
    $(".drum-btn").click(function (e) {
      self.buttonHandler(e);
    });
  };

  self.initialize = function () {
    self.openSocket();
    self.initializeButtonHandler();
  };

  return self;
})();

$(document).ready(function () {
  App.initialize();
});
