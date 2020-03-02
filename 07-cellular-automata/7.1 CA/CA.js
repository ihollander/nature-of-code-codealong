export default class CA {
  constructor(p) {
    this.p = p
    this.w = 5
    this.generation = 0

    this.ruleset = [0, 1, 0, 1, 1, 0, 1, 0]

    this.cells = []
    for (let i = 0; i < p.width / this.w; i++) {
      this.cells[i] = 0
    }

    this.cells[this.cells.length / 2] = 1
  }

  display() {
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i] === 1) {
        this.p.fill(0)
      } else {
        this.p.fill(255)
      }

      this.p.rectangle(i * this.w, this.generation * this.w, this.w, this.w)
    }
  }

  generate() {
    let newCells = [...this.cells]
    for (let i = 1; i < this.cells.length - 1; i++) {
      let left = this.cells[i - 1]
      let middle = this.cells[i]
      let right = this.cells[i + 1]
      newCells[i] = this.rules(left, middle, right)
    }
    this.cells = newCells
    this.generation++
    if (this.generation * this.w > this.p.height) {
      this.generation = 0
      this.generateRuleset()
    }
  }

  rules(a, b, c) {
    let index = parseInt(`${a}${b}${c}`, 2)
    return this.ruleset[index]
  }

  generateRuleset() {
    for (let i = 0; i < this.ruleset.length; i++) {
      this.ruleset[i] = Math.round(Math.random())
    }
  }
}