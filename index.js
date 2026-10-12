import Circle from "./class/Circle.js";
import Vector2 from "./class/Vector2.js";
import Keyboard from "./class/Keyboard.js";

const keyManager = new Keyboard();

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


function tickUpdate(dt) {
  console.log(dt);
  // if (keyManager.isKeyDown("KeyF")) {
    circles.forEach(c => c.update(dt));
  // }
}

function tickDraw() {
  ctx.canvas.width = ctx.canvas.clientWidth;
  ctx.canvas.height = ctx.canvas.clientHeight;
  circles.forEach(c => c.draw(ctx));
}
MainLoop.setSimulationTimestep(1000/30);
MainLoop
  .setUpdate(tickUpdate)
  .setDraw(tickDraw)
  .start()