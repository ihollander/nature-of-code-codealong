import { random } from '../../p/utils/math.js'

export default class GameOfLife {
  constructor(p) {
    this.p = p
    this.w = 20

    this.generating = false

    this.columns = this.p.width / this.w
    this.rows = this.p.height / this.w

    this.board = new Array(this.columns)
    for (let i = 0; i < this.columns; i++) {
      this.board[i] = new Array(this.rows).fill(0)
    }

    this.next = new Array(this.columns)
    for (let i = 0; i < this.columns; i++) {
      this.next[i] = new Array(this.rows)
    }
  }

  init() {

  }

  flip(mouseX, mouseY) {
    let x = Math.floor((mouseX * this.columns) / this.p.width)
    let y = Math.floor((mouseY * this.rows) / this.p.height)
    this.board[x][y] = this.board[x][y] === 0 ? 1 : 0
  }

  display() {
    for (let i = 0; i < this.columns; i++) {
      for (let j = 0; j < this.rows; j++) {
        if (this.board[i][j] === 1) {
          this.p.fill(0)
        } else {
          this.p.fill(255)
        }

        this.p.rectangle(i * this.w, j * this.w, this.w, this.w)
      }
    }
  }

  generate() {
    if (this.generating) {
      for (let x = 1; x < this.columns - 1; x++) {
        for (let y = 1; y < this.rows - 1; y++) {

          let neighbors = 0
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              neighbors += this.board[x + i][y + j]
            }
          }

          neighbors -= this.board[x][y]

          if ((this.board[x][y] === 1) && (neighbors < 2)) {
            this.next[x][y] = 0 // death
          } else if ((this.board[x][y] === 1) && (neighbors > 3)) {
            this.next[x][y] = 0 // death
          } else if ((this.board[x][y] === 0) && (neighbors === 3)) {
            this.next[x][y] = 1 // birth
          } else {
            this.next[x][y] = this.board[x][y] // stasis
          }
        }
      }

      let temp = this.board
      this.board = this.next
      this.next = temp
    }
  }

}