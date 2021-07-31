import {drawCircle, drawLine, draw, ctx} from './modules/base.js';
import {Erase} from './modules/tools.js';
import { STATUS } from './config.js';
const erase = new Erase(ctx);

let status = STATUS.PAINTING;

let painting = false;

let lastPoint = {
  x: null,
  y: null,
}

const eraseBtn = document.getElementById('earse');
eraseBtn.onclick = function () {
  if (status === STATUS.ERASING) {
    status = STATUS.PAINTING;
    return;
  }
  status = STATUS.ERASING;
}


// 鼠标左键按下去触发
draw.onmousedown = function (e) {
  if (e.button === 0) {
    const x = e.clientX;
    const y = e.clientY;
    lastPoint.x = x;
    lastPoint.y = y;
    if (status === STATUS.PAINTING) {
      painting = true;
      drawCircle(x, y, 1);
    } else {
      painting = true;
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      // ctx.fill();
      ctx.clip();
      ctx.clearRect(0, 0 ,ctx.canvas.width, ctx.canvas.height);
      ctx.stroke();
    }
  }
}

draw.onmousemove = function (e) {
  if (painting) {
    console.log(status);
    const newPoint = {
      x: null,
      y: null
    }
    const x = e.clientX;
    const y = e.clientY;
    newPoint.x = x;
    newPoint.y = y;
    if (status === STATUS.PAINTING) {
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
    } else {
      // erase.erase(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.save();
      ctx.beginPath();
      ctx.arc(lastPoint.x, lastPoint.y,
        10, 0, Math.PI * 2);
      // ctx.globalCompositeOperation = 'destination-out';
      // ctx.moveTo(lastPoint.x, lastPoint.y);
      // ctx.lineTo(newPoint.x, newPoint.y);
      // ctx.stroke();
      // ctx.closePath();
      ctx.clip();
      ctx.clearRect(0, 0 ,ctx.canvas.width, ctx.canvas.height);
      ctx.stroke();
    }
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