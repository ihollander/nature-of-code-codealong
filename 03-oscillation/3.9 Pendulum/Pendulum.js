import PVector from '../../p/PVector.js'

export default class Pendulum {
  constructor(p) {
    this.p = p

    this.origin = new PVector(this.p.width / 2, 10)
    this.location = new PVector()

    this.armLength = 125
    this.angle = Math.PI / 4

    this.aVelocity = 0.0
    this.aAcceleration = 0.0
    this.damping = 0.995
  }

  update() {
    let gravity = 0.4
    this.aAcceleration = (-1 * gravity / this.armLength) * Math.sin(this.angle)

    this.aVelocity += this.aAcceleration
    this.angle += this.aVelocity

    this.aVelocity *= this.damping
  }

  display() {
    this.location = new PVector(
      this.armLength * Math.sin(this.angle),
      this.armLength * Math.cos(this.angle)
    )
    this.location.add(this.origin)

    this.p.stroke(0)
    this.p.line(this.origin.x, this.origin.y, this.location.x, this.location.y)
    this.p.fill(175)
    this.p.circle(this.location.x, this.location.y, 16)
  }
}