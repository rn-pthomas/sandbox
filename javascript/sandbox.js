var clearRect = function (rectCtx) {
  rectCtx.clearRect(0, 0, canvas.height, canvas.width);
};
var canvas = document.getElementById('myCanvas'),
  ctx      = canvas.getContext('2d'),
  centerX  = canvas.width / 2,
  centerY  = canvas.height / 2;

ctx.fillStyle = '#FF0000';

var drawCircle = function(circleCtx, xOffset, yOffset, radius) {
  circleCtx.beginPath();
  circleCtx.arc(centerX + xOffset, centerY + yOffset, radius, Math.PI*2, false);
  circleCtx.fill();
};

socket_ = new WebSocket('ws://literature.uncontext.com:80');
socket_.onmessage = function (data) {
  var parsedData = JSON.parse(data.data);
  clearRect(ctx);
  drawCircle(
    ctx,
    parsedData.a,
    parsedData.b,
    80
  );
};
