export default class Keyboard {
  keyPressed = new Set();

  constructor() {
    window.addEventListener('keydown', e => this.onKeyDown(e));
    window.addEventListener('keyup', e => this.onKeyup(e));
  }

  onKeyDown(e) {
    this.keyPressed.add(e.code);
    console.log(this.keyPressed);
  }

  onKeyup(e) {
    this.keyPressed.delete(e.code);
  }

  isKeyDown(code) {
    return this.keyPressed.has(code);
  }

}