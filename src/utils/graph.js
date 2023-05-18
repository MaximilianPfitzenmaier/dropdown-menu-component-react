// just drawing no return
// neu schreiben
export const drawFunction = (canvasID, array) => {
  let centeredZero = true;
  let line = true;
  let canvasArray = array;
  let canvas;
  let ctx;
  if (canvasID.current) {
    canvas = canvasID.current;
    ctx = canvas.getContext('2d');
  } else {
    canvas = canvasID;
    ctx = canvasID.getContext('2d');
  }
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  canvas.width = width / 2 - 20;
  canvas.height = height / 2 - 120;

  ctx.translate(0, canvas.height / 2);
  ctx.beginPath();
  ctx.setLineDash([5, 3]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'hsl(176, 72%, 71%)';
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, 0);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'hsl(176, 72%, 71%)';

  if (centeredZero) {
    ctx.moveTo(canvas.width / 2, -canvas.height / 2);
    ctx.lineTo(canvas.width / 2, canvas.height);
  } else {
    ctx.moveTo(0 + canvas.width / (canvasArray.length + 2), -canvas.height / 2);
    ctx.lineTo(0 + canvas.width / (canvasArray.length + 2), canvas.height);
  }

  ctx.stroke();
  ctx.setLineDash([0, 0]);

  let count = 0;
  let yposition = 0;
  let yposition2 = 0;
  canvasArray.unshift(0);
  canvasArray.push(0);

  for (let i = 0; i < canvas.width; i = i + canvas.width / canvasArray.length) {
    yposition = -canvasArray[count]; //* peaks * scale;
    yposition = yposition ? yposition : 0;
    yposition2 = -canvasArray[count + 1]; //* peaks * scale;
    yposition2 = yposition2 ? yposition2 : 0;

    ctx.beginPath();
    ctx.lineWidth = 2;
    let grad = ctx.createLinearGradient(i, 0, i, yposition);
    grad.addColorStop(0, 'hsl(176, 72%, 71%)');
    grad.addColorStop(1, 'hsl(251, 53%, 45%)');
    ctx.strokeStyle = grad;
    ctx.moveTo(i, 0);

    // line to empty circle
    if (yposition > 0) {
      ctx.lineTo(i, yposition - 2);
    } else {
      ctx.lineTo(i, yposition + 2);
    }

    ctx.stroke();
    ctx.closePath();

    if (line) {
      // draw line
      ctx.beginPath();
      ctx.strokeStyle = 'hsl(251, 53%, 45%)';
      ctx.moveTo(i, yposition);
      ctx.lineTo(i + canvas.width / canvasArray.length, yposition2);

      ctx.stroke();
    } else {
      // draw circles
      ctx.beginPath();
      ctx.arc(i, yposition, 3, 0, 2 * Math.PI);
      let centered = centeredZero ? canvasArray.length / 2 : 1;
      // Buffer circles transparent
      if (count == 0 || count == canvasArray.length || count == canvasArray.length - 1) {
        ctx.beginPath();
        ctx.arc(i, yposition, 3, 0, 2 * Math.PI);
        ctx.fillStyle = 'transparent';

        // zero circle not filled
      } else if (count == centered) {
        ctx.beginPath();
        ctx.arc(i, yposition, 3, 0, 2 * Math.PI);
        ctx.fillStyle = 'transparent';
        ctx.strokeStyle = 'hsl(251, 53%, 45%)';
        ctx.stroke();

        // filled circle
      } else {
        ctx.fillStyle = 'hsl(251, 53%, 45%)';
      }
    }

    ctx.fill();
    ctx.closePath();
    count++;
  }

  canvasArray.shift();
  canvasArray.pop();
};

export const drawTest = (canvasID, funcArray) => {
  let canvas;
  let ctx;
  if (canvasID.current) {
    canvas = canvasID.current;
    ctx = canvas.getContext('2d');
  } else {
    canvas = canvasID;
    ctx = canvasID.getContext('2d');
  }

  const canvasWidth = 800; // Breite des Canvas
  const canvasHeight = 400; // Höhe des Canvas
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Skalierungsfaktoren berechnen
  const xMin = -canvasWidth / 2;
  const xMax = canvasWidth / 2;
  const xRange = xMax - xMin;
  const yRange = Math.max(...funcArray) - Math.min(...funcArray);
  const xScale = canvasWidth / xRange;
  const yScale = canvasHeight / yRange;

  // Zeichnen der Achsen
  ctx.beginPath();
  ctx.moveTo(0, canvasHeight / 2);
  ctx.lineTo(canvasWidth, canvasHeight / 2);
  ctx.moveTo(canvasWidth / 2, 0);
  ctx.lineTo(canvasWidth / 2, canvasHeight);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  // Zeichnen der Funktion
  ctx.beginPath();
  ctx.moveTo(0, canvasHeight / 2 - (funcArray[0] - Math.min(...funcArray)) * yScale);
  for (let i = 1; i < canvasWidth; i++) {
    const x = xMin + i / xScale;
    const y = funcArray[i] - Math.min(...funcArray);
    ctx.lineTo(i, canvasHeight / 2 - y * yScale);
  }
  ctx.strokeStyle = 'blue';
  ctx.stroke();
};
