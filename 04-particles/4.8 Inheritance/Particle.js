import PVector from '../../p/PVector.js'
import { random } from '../../p/utils/math.js'

export default class Particle {
  constructor(p, location) {
    this.p = p

    this.location = location.copy()

    this.acceleration = new PVector(0, 0)
    this.velocity = new PVector(
      random(-1.01, 1.01),
      random(-2.01, 0.01)
    )
    this.mass = 1
    this.lifespan = 255
  }

  isDead() {
    return this.lifespan < 0
  }

  // F = M * A
  applyForce(force) {
    let f = force.copy()
    f.div(this.mass)
    this.acceleration.add(f)
  }

  run() {
    this.update()
    this.display()
  }

  update() {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
    this.lifespan -= 2
  }

  display() {
    this.p.stroke(0, this.lifespan)
    this.p.fill(175, this.lifespan)
    this.p.circle(this.location.x, this.location.y, 8)
  }
}