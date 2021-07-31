import {color} from './ui.js';

const downloadBtn = document.getElementById('download');
const draw = document.getElementById('painting');
const ctx = draw.getContext('2d');
// init
draw.width = document.documentElement.clientWidth;
draw.height = document.documentElement.clientHeight;

// TODO move
// const img = new Image();
// img.src = './images/oxxw29.jpg';
// img.onload = function () {
//   ctx.drawImage(img, 0, 0, draw.width, draw.height);
// }

downloadBtn.onclick = function (e) {
  e.preventDefault();
  console.log(draw.toDataURL('image/jpg'));
  let imgUrl = draw.toDataURL('image/jpg');
  const download = document.createElement('a');
  download.href = imgUrl;
  download.setAttribute('download', 'painting');
  download.click();
  download = null;
}

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