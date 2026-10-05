import Circle from "./class/Circle.js";
import Vector2 from "./class/Vector2.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const TAU = 2 * Math.PI;

const circles = [];
for (let nbCircles=0; nbCircles<100; nbCircles++) {
  circles.push(new Circle({
    radius: 10,
    velocity: Vector2.fromAngle(TAU/(Math.random()*9))
  }));
}

ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;

let lastTime = 0;

function tick(time) {
  frame++;
  requestAnimationFrame(tick);

  const dt = time - lastTime;
  lastTime = time;

  // World update
  circles.forEach(c => c.update(dt));

  // Erase all
  ctx.canvas.width = ctx.canvas.clientWidth;
  ctx.canvas.height = ctx.canvas.clientHeight;

  // World rendering
  circles.forEach(c => c.draw(ctx));
}

requestAnimationFrame(tick);