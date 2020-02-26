import PVector from '../../p/PVector.js'
import { random } from '../../p/utils/math.js'

export default class Particle {
  constructor(p, location) {
    this.p = p

    this.location = location.copy()

    this.acceleration = new PVector(0, 0.05)
    this.velocity = new PVector(
      random(-1, 1),
      random(-2, 0)
    )

    this.lifespan = 255
  }

  isDead() {
    return this.lifespan < 0
  }

  run() {
    this.update()
    this.display()
  }

  update() {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.lifespan -= 2
  }

  display() {
    this.p.stroke(0, this.lifespan)
    this.p.fill(175, this.lifespan)
    this.p.circle(this.location.x, this.location.y, 8)
  }
}