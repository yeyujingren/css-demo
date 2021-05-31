import {color} from './modules/ui.js';

const draw = document.getElementById('painting');
const ctx = draw.getContext('2d');
let painting = false;
let lastPoint = {
  x: null,
  y: null,
}

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

draw.onmousedown = function (e) {
  painting = true;
  const x = e.clientX;
  const y = e.clientY;
  lastPoint.x = x;
  lastPoint.y = y;
  drawCircle(x, y, 1);
}

draw.onmousemove = function (e) {
  if (painting) {
    const newPoint = {
      x: null,
      y: null
    }
    const x = e.clientX;
    const y = e.clientY;
    newPoint.x = x;
    newPoint.y = y;
    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
    lastPoint = newPoint;
  }
}

draw.onmouseup = function (e) {
  painting = false;
}

// 浏览器刷新或者关闭当前页面时给出tips
window.onbeforeunload = function (e) {
  e.preventDefault();
  e.returnValue = '';
}