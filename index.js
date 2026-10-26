import Circle from "./class/CircleInFlatTorus.js";
import Vector2 from "./class/Vector2.js";
import Keyboard from "./class/Keyboard.js";
import Tweens from "./class/Tweens.js";

const keyManager = new Keyboard();
const tweensManager = new Tweens();

tweensManager.create({from: 0, to: 360, dur: 10000, animate : val => {
  circles[0].color = `oklch(0.75 0.5 ${Math.round(val)})`;
}});
tweensManager.create({ease: 'quad', from: 300, to: 100, dur: 1000, animate : val => {
  circles[0].pos.y = val;
}});

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const TAU = 2 * Math.PI;

const circles = [];
for (let nbCircles=0; nbCircles<1; nbCircles++) {
  circles.push(new Circle({
    pos: new Vector2({x: 300, y: 300}),
    radius: 30,
    velocity: Vector2.fromAngle(0, 0)
  }));
}

function tickUpdate(dt) {
  tweensManager.update(dt);
  circles.forEach(c => c.update(dt, ctx.canvas.width));
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