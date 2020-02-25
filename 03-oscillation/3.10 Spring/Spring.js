import PVector from "../../p/PVector.js"

export default class Spring {
  constructor(p, x, y, length) {
    this.p = p

    this.anchor = new PVector(x, y)
    this.length = length

    this.k = 0.1
  }

  connect(bob) {
    let force = PVector.sub(bob.position, this.anchor)
    let d = force.mag()
    let stretch = d - this.length

    force.normalize()
    force.mult(-1 * this.k * stretch)

    bob.applyForce(force)
  }

  display() {
    this.p.fill(100)
    this.p.centerRectangle(this.anchor.x, this.anchor.y, 10, 10)
  }

  displayLine(bob) {
    this.p.stroke(255)
    this.p.line(bob.position.x, bob.position.y, this.anchor.x, this.anchor.y)
  }
}