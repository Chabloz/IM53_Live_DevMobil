import Circle from "./Circle.js";

export default class CircleInFlatTorus extends Circle {

  update(dt, width) {
    super.update(dt);
    if (this.pos.x - this.radius > width) {
      this.pos.x = -this.radius;
    }
  }
}