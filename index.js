const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const TAU = 2 * Math.PI;

// console.log(canvas);
// console.log(ctx);

ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;

let x = 0;

function draw() {
  ctx.beginPath();
  ctx.fillStyle = "tomato"
  ctx.arc(x, 75, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

let lastTime = 0;
let frame = 0;

function tick(time) {
  frame++;
  requestAnimationFrame(tick);

  const dt = time - lastTime;
  lastTime = time;
  x += 0.1 * dt;

  console.log(dt)

  // if (frame%2==0)  {
    // une manière de faire le "nettoyage"
    //ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    // une autre plus reponsive :
    ctx.canvas.width = ctx.canvas.clientWidth;
    ctx.canvas.height = ctx.canvas.clientHeight;
    draw()
  // }
}

requestAnimationFrame(tick)