import PVector from "./PVector.js";
import { randomTo, randomNumber } from './utils.js'

export default class Mover {
  constructor(context) {
    this.context = context
    this.location = new PVector(
      randomTo(this.context.canvas.width),
      randomTo(this.context.canvas.height)
    )
    this.velocity = new PVector(
      randomNumber(-3, 2),
      randomNumber(-3, 2)
    )
    this.acceleration = PVector.random2D()

    this.r = randomTo(255)
    this.g = randomTo(255)
    this.b = randomTo(255)
  }

  moveToMouse(mouse) {
    this.acceleration = PVector.sub(mouse.vector, this.location)
    this.acceleration.normalize()
    this.acceleration.mult(0.5)

  }

  update() {
    this.velocity.add(this.acceleration)
    this.velocity.limit(7)
    this.location.add(this.velocity)
    this.checkEdges()
  }

  draw() {
    this.context.strokeStyle = `rgb(${this.r},${this.g},${this.b})`
    this.context.fillStyle = `rgba(${this.r},${this.g},${this.b},0.7)`
    this.context.beginPath()
    this.context.arc(this.location.x, this.location.y, 16, 0, Math.PI * 2)
    this.context.stroke()
    this.context.fill()
  }

  checkEdges() {
    if (this.location.x > this.context.canvas.width) {
      this.location.x = 0
    } else if (this.location.x < 0) {
      this.location.x = this.context.canvas.width
    }

    if (this.location.y > this.context.canvas.height) {
      this.location.y = 0
    } else if (this.location.y < 0) {
      this.location.y = this.context.canvas.height
    }
  }
}