var App = (function () {
  var self    = {};
  self.socket = new WebSocket("ws://localhost:8080/");

  return self;
})();

$(document).ready(function () {

  toggleButtonColor = function (target) {
    $(target).toggleClass("colored");
  };

  $(".drum-btn").click(function (e) {
    e.preventDefault();
    toggleButtonColor(e.currentTarget);
  });

  try {
    App.socket.onopen = function () {
      console.log("successfully opened web socket");
      console.log("socket status: " + App.socket.readyState);
    };
  } catch (exception) {
    console.error("exception loading web socket");
    console.log(exception);
  }
});
