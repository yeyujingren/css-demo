import {drawCircle, drawLine, draw} from './modules/base.js';


let painting = false;
let lastPoint = {
  x: null,
  y: null,
}


// 鼠标左键按下去触发
draw.onmousedown = function (e) {
  if (e.button === 0) {
    painting = true;
    const x = e.clientX;
    const y = e.clientY;
    lastPoint.x = x;
    lastPoint.y = y;
    drawCircle(x, y, 1);
  }
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