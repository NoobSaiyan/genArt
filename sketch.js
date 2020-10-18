const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, 300, 0, Math.PI*2, false);
    context.fillStyle = 'red';
    context.fill();
    context.lineWidth = 20
    context.strokeStyle = 'green'
    context.stroke()
  };
};

canvasSketch(sketch, settings);
