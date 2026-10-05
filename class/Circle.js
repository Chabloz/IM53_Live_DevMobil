import Vector2 from "./Vector2.js";

export default class Circle {

  constructor({
    pos = new Vector2(),
    radius = 100,
    color = "hsl(0, 100%, 48%)",
    velocity = Vector2.fromAngle(0),
  } = {}) {
    this.pos = pos;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  update(dt) {
    this.pos.add(this.velocity);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

}