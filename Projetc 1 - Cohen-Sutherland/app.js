var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var lines = [];

function addLine() {
  var p1x = parseInt(document.getElementById('p1x').value);
  var p1y = parseInt(document.getElementById('p1y').value);
  var p2x = parseInt(document.getElementById('p2x').value);
  var p2y = parseInt(document.getElementById('p2y').value);
  
  lines.push({ p1x, p1y, p2x, p2y });
  
  clearCanvas();
  drawLines();
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawLines() {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    context.beginPath();
    context.moveTo(line.p1x, line.p1y);
    context.lineTo(line.p2x, line.p2y);
    context.stroke();
  }
}
