import PVector from "./PVector.js";
import { randomTo, randomNumber } from './utils.js'
import { constrain } from './utils.js'

export default class Mover {
  constructor(context) {
    this.context = context
    this.location = new PVector(
      randomTo(context.canvas.width),
      randomTo(context.canvas.height),
    )
    this.velocity = new PVector(0, 1)
    this.acceleration = new PVector(0, 0)

    this.r = randomTo(255)
    this.g = randomTo(255)
    this.b = randomTo(255)

    this.mass = randomTo(16)
    this.g = 0.4
  }

  isInside(liquid) {
    return (this.location.x > liquid.x && this.location.x < liquid.x + liquid.w && this.location.y > liquid.y && this.location.y < liquid.y + liquid.h)
  }

  drag(liquid) {
    let speed = this.velocity.mag
    let dragMagnitude = liquid.c * speed * speed

    let drag = this.velocity.get()
    drag.mult(-1)
    drag.normalize()
    drag.mult(dragMagnitude)

    this.applyForce(drag)
  }

  moveToMouse(mouse) {
    this.acceleration = PVector.sub(mouse.vector, this.location)
    this.acceleration.normalize()
    this.acceleration.mult(0.5)
  }

  attract(mover) {
    let force = PVector.sub(this.location, mover.location)
    let distance = force.mag
    distance = constrain(distance, 5, 25)

    force.normalize()
    let strength = (this.g * this.mass * mover.mass) / (distance * distance)
    force.mult(strength)

    return force
  }

  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = PVector.div(force, this.mass)
    this.acceleration.add(f)
  }

  update() {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
  }

  display() {
    this.context.strokeStyle = `rgb(${this.r},${this.g},${this.b})`
    this.context.fillStyle = `rgba(${this.r},${this.g},${this.b},0.7)`
    this.context.beginPath()
    this.context.arc(this.location.x, this.location.y, this.mass, 0, Math.PI * 2)
    this.context.stroke()
    this.context.fill()
  }

  checkEdges() {
    if (this.location.x > this.context.canvas.width) {
      this.location.x = this.context.canvas.width
      this.velocity.x = -this.velocity.x
    } else if (this.location.x < 0) {
      this.location.x = 0
      this.velocity.x = -this.velocity.x
    }

    if (this.location.y > this.context.canvas.height) {
      this.location.y = this.context.canvas.height
      this.velocity.y = -this.velocity.y
    } else if (this.location.y < 0) {
      this.location.y = 0
      this.velocity.y = -this.velocity.y
    }
  }
}