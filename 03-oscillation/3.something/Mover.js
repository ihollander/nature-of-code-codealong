import PVector from "../../p/PVector.js";
import { random, constrain } from '../../p/utils/math.js'

export default class Mover {
  constructor(p) {
    this.p = p
    this.location = new PVector(
      random(this.p.width),
      random(this.p.height),
    )
    this.velocity = new PVector(1, 1)
    this.acceleration = new PVector(1, 0)

    this.r = random(255)
    this.g = random(255)
    this.b = random(255)

    this.mass = random(16) + 20

    this.angle = 0
    this.aVelocity = 0
    this.aAcceleration = 0.001
  }


  update() {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)

    this.aAcceleration = this.acceleration.x / 10
    this.aVelocity += this.aAcceleration
    this.aVelocity = constrain(this.aVelocity, -0.1, 0.1)
    this.angle += this.aVelocity

    this.acceleration.mult(0)
  }

  display() {
    let angle = this.velocity.heading()

    this.p.stroke(this.r, this.g, this.b)
    this.p.fill(this.r, this.g, this.b, 0.5)

    this.p.context.save()
    this.p.translate(this.location.x, this.location.y)
    this.p.rotate(angle)
    this.p.centerRectangle(0, 0, this.mass, this.mass)
    this.p.context.restore()
  }

  checkEdges() {
    if (this.location.x > this.p.width) {
      this.location.x = this.p.width
      this.velocity.x = -this.velocity.x
    } else if (this.location.x < 0) {
      this.location.x = 0
      this.velocity.x = -this.velocity.x
    }

    if (this.location.y > this.p.height) {
      this.location.y = this.p.height
      this.velocity.y = -this.velocity.y
    } else if (this.location.y < 0) {
      this.location.y = 0
      this.velocity.y = -this.velocity.y
    }
  }
}