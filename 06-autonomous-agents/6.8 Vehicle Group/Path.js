import PVector from "../../p/PVector.js"

export default class Path {
  constructor(p) {
    this.p = p

    this.radius = 20
    this.points = []
  }

  addPoint(x, y) {
    this.points.push(new PVector(x, y))
  }

  display() {
    this.p.stroke(0)
    this.p.beginShape()
    this.points.forEach(v => {
      this.p.vertex(v.x, v.y)
    })
    this.p.endShape()
  }
}