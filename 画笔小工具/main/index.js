function baseViewSetting(node) {
  node.width = document.documentElement.clientWidth;
  node.height = document.documentElement.clientHeight;
}

let painting = false;
let lastPoint = {
  x: null,
  y: null,
}

window.onload = function () {
  const draw = document.getElementById('painting');
  // 如果不支持，则给出提示，并返回
  if (!draw.getContext) {
    window.alert('您的浏览器暂时不支持canvas呦，请升级浏览器版本，或者更换其他浏览器🐶');
    return;
  }
  const ctx = draw.getContext('2d');
  baseViewSetting(draw);

  function drawCircle (x, y, radius) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawLine (x1, y1, x2, y2) {
    ctx.lineWidth = 3;
    ctx.linecap = 'round';
    ctx.lineJoin = 'round';
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
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

}