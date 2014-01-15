var App = (function () {
  var self = {};

  /* Web socket connectivity --> */
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
  /* <-- Web socket connectivity */


  /* DOM accessors --> */
  self.getOctaveOffset = function (e) {
    var drumBtnIndex = $(e.currentTarget).parent().index(),
    optionsRow       = $("#options-container .options-row")[drumBtnIndex],
    optionsButtons   = $(optionsRow).children(),
    selectedButton   = _.find(optionsButtons, function (btn) {
      return $(btn).hasClass("active");
    }, this);
    if (selectedButton === undefined) {
      return 0;
    }
    return $(selectedButton).index();
  };

  self.getActivePlaybackBox = function () {
    return $('div.playback-drum-row div.playback-drum-btn.active');
  };

  self.highlightNextPlaybackBox = function () {
    var numOfPlaybackBoxes = 8,
      activePlaybackBox    = self.getActivePlaybackBox(),
      currentIdx           = activePlaybackBox.index(),
      targetIdx            = currentIdx + 1;
      if (currentIdx >= numOfPlaybackBoxes-1) {
        targetIdx = 0;
      }
      $($("div.playback-drum-row div.playback-drum-btn")[currentIdx]).toggleClass("active");
      $($("div.playback-drum-row div.playback-drum-btn")[targetIdx]).toggleClass("active");
  };

  self.initializePlaybackLoop = function () {
    setInterval(function () {
      self.highlightNextPlaybackBox();
    }, 1000);
  };
  /* <-- DOM accessors */


  /* Click handlers --> */
  self.makeClickHandler = function (selector, handler) {
    $(selector).click(function (e) {
      e.preventDefault();
      handler(e);
    });
  };

  self.drumButtonHandler = function (e) {
    var target   = $(e.currentTarget),
    pitchIdx     = target.index(),
    octaveOffset = self.getOctaveOffset(e),
    dataMap      = {pitchIdx: pitchIdx, octave: octaveOffset};
    target.toggleClass("colored");
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

  self.playPauseButtonHandler = function (e) {
    console.log("this doesn't do anything yet");
  };
  /* <-- Click handlers */


  /* App initializer --> */
  self.initialize = function () {
    self.openSocket();
    $($("div.playback-drum-row div.playback-drum-btn")[0]).toggleClass("active");
    self.makeClickHandler(".drum-btn",       self.drumButtonHandler);
    self.makeClickHandler(".option-btn",     self.optionButtonHandler);
    self.makeClickHandler("#play-pause-btn", self.playPauseButtonHandler);
    self.initializePlaybackLoop();
  };
  /* <-- App initializer */

  return self;
})();

$(document).ready(function () {
  App.initialize();
});
