import PVector from '../../p/PVector.js'
import { constrain } from '../../p/utils/math.js'

export default class Repeller {
  constructor(p, x, y) {
    this.p = p

    this.location = new PVector(x, y)
    this.r = 10
    this.strength = 100
  }

  repel(particle) {
    let dir = PVector.sub(this.location, particle.location)
    let d = dir.mag()
    dir.normalize()
    d = constrain(d, 5, 100)

    let force = -1 * this.strength / (d * d)
    dir.mult(force)
    return dir
  }

  display() {
    this.p.stroke(255)
    this.p.fill(255)
    this.p.circle(this.location.x, this.location.y, this.r * 2)
  }
}