export default class AutomatonRenderer2D {

  constructor({ctx, automaton, colorAlive = 'tomato', colorDead = 'black', cellSize = 10}) {
    this.ctx = ctx;
    this.automaton = automaton;
    this.colorAlive = colorAlive;
    this.colorDead = colorDead;
    this.cellSize = cellSize;
  }

  draw() {
    this.automaton.getMatrix2D().forEach((row, col) => {
      const x = col * this.cellSize;
      const y = row * this.cellSize;
      const isAlive = this.automaton.isAlive(row, col);
      this.ctx.fillStyle = isAlive ? this.colorAlive : this.colorDead;
      this.ctx.fillRect(x + 1, y + 1, this.cellSize - 1, this.cellSize - 1);
    });
  }
}