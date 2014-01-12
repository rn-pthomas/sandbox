var App = (function () {
  var self = {};
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

  self.initialize = function () {
    self.openSocket();
    this.$el = $("#container");
    var drumView = new DrumView();
    this.$el.append(drumView.render());
  };

  return self;
})();

$(document).ready(function () {
  App.initialize();
});
