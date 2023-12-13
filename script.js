const canvas = document.getElementById('digitCanvas');
const ctx = canvas.getContext('2d');
const recognizedDigitDiv = document.getElementById('recognizedDigit');
const accuracyIndicator = document.getElementById('accuracyIndicator');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

let isDrawing = false;

function startDrawing(e) {
  isDrawing = true;
  draw(e);
}

function draw(e) {
  if (!isDrawing) return;

  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function stopDrawing() {
  isDrawing = false;
  ctx.beginPath();
}


function recognizeDigit() {
  const recognizedDigit = Math.floor(Math.random() * 10);
  const confidenceLevel = Math.floor(Math.random() * 80) + 20;

  recognizedDigitDiv.innerText = recognizedDigit;
  accuracyIndicator.innerText = `Confidence Level: ${confidenceLevel}%`;
}
