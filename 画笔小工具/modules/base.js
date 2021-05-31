import {color} from './ui.js';

const draw = document.getElementById('painting');
const ctx = draw.getContext('2d');
// init
draw.width = document.documentElement.clientWidth;
draw.height = document.documentElement.clientHeight;

function drawCircle(x, y, radius) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.lineWidth = 3;
  ctx.linecap = 'round';
  ctx.lineJoin = 'round';
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.strokeStyle = color;
  ctx.closePath();
}


export {drawCircle, drawLine, draw, ctx};