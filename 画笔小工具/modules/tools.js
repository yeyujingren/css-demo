export class Erase {
  // ctx: CanvasRenderingContext2D;
  constructor (ctx) {
    this.ctx = ctx;
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
  }
  setSize (size) {
    this.ctx.lineWidth = size;
  }
  
  erase (x1, y1, x2, y2) {
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.clip();
    this.ctx.clearRect(0, 0 ,100, 100);
    this.ctx.stroke();
  }
};