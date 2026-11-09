import Matrix2D from "./Matrix2D.js";

export default class Automaton {

  constructor({cols, rows, aliveProb = 0}) {
    this.aliveProb = aliveProb;
    this.matrix = new Matrix2D(rows, cols);
  }

  getMatrix2D() {
    return this.matrix;
  }

  isAlive(row, col) {
    return this.matrix.get(row,col) === 1;
  }

  randomize() {
    this.matrix.forEach((row, col) => {
      const isalive = Math.random() < this.aliveProb;
      this.matrix.set(row, col, isalive ? 1 : 0);
    })
  }

}