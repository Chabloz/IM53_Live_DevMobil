export default class Matrix2D {

  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];
    for (let row = 0; row < rows; row++) {
      const columns = [];
      for (let col = 0; col < cols; col++) {
        columns.push(0);
      }
      this.matrix.push(columns);
    }
  }

  set(row, col, val) {
    // if (!this.isIndexValid(row, col)) throw new Error('Invialid row col');
    this.matrix[row][col] = val;
  }

  get(row, col) {
    return this.matrix[row][col];
  }

  isIndexValid(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  getNeighborhoodIndexes(row, col) {
    const indexes = [];
    for (let dRow = -1; dRow <= 1; dRow++) {
      for (let dCol = -1; dCol <= 1; dCol++) {
        if (dCol == 0 && dRow == 0) continue;
        indexes.push([row + dRow, col + dCol]);
      }
    }
    return indexes.filter(([row, col]) => this.isIndexValid(row, col));
  }

  count(indexes, val) {
    let count = 0;
    for (const [row, col] of indexes) {
      if (this.get(row, col) === val) count++;
    }
    return count;
  }

  forEach(callback) {
    for (let row=0; row<this.rows; row++){
      for (let col=0; col<this.cols; col++) {
        callback(row, col , this.get(row, col));
      }
    }
  }

}