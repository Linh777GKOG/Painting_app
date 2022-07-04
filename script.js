const colorCircle = document.querySelectorAll('.color-circle');

let penSize = 10;
let isDrawing;
let x;
let y;

var canvas = document.querySelector('canvas');
c = canvas.getContext('2d');

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (event) => {
  draw(event.offsetX, event.offsetY);
});

c.fillStyle = 'hotpink';
c.strokeStyle = c.fillStyle;
