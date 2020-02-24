import PVector from "./PVector.js";
import { constrain } from './utils.js'

export default class Attractor {
  constructor(context) {
    this.context = context
    this.location = new PVector(
      context.canvas.width / 2,
      context.canvas.height / 2
    )
    this.mass = 20
    this.g = 0.4
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

  display() {
    this.context.fillStyle = "rgb(200,0,0)"
    this.context.beginPath()
    this.context.arc(this.location.x, this.location.y, this.mass * 2, 0, Math.PI * 2)
    this.context.fill()
  }


}