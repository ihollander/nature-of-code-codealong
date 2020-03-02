import PVector from "../../p/PVector.js"
import { constrain } from "../../p/utils/math.js"

export default class FlowField {
  constructor(p) {
    this.p = p
    this.resolution = 10
    this.cols = p.width / this.resolution
    this.rows = p.height / this.resolution

    this.field = []
    this.init()
  }

  init() {
    for (let i = 0; i < this.cols; i++) {
      this.field.push([])
      for (let j = 0; j < this.rows; j++) {
        this.field[i].push(PVector.random2D())
      }
    }
  }

  lookup(lookup) {
    let column = parseInt(constrain(lookup.x / this.resolution, 0, this.cols - 1))
    let row = parseInt(constrain(lookup.y / this.resolution, 0, this.rows - 1))
    return this.field[column][row]
  }

  display() {
    this.p.stroke(100)
    this.field.forEach((col, i) => {
      col.forEach((field, j) => {

        this.p.line()
      })
    })
  }
}