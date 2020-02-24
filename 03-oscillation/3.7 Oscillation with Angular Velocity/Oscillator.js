import PVector from "../../p/PVector.js";
import { random } from "../../p/utils/math.js";

export default class Oscillator {
  constructor(p) {
    this.p = p
    this.angle = new PVector()
    this.velocity = new PVector(
      random(-0.05, 0.05),
      random(-0.05, 0.05),
    )

    this.amplitude = new PVector(
      random(this.p.width / 2),
      random(this.p.height / 2),
    )
  }

  oscillate() {
    this.angle.add(this.velocity)
  }

  display() {
    let x = Math.sin(this.angle.x) * this.amplitude.x
    let y = Math.sin(this.angle.y) * this.amplitude.y

    this.p.pushMatrix()

    this.p.translate(this.p.width / 2, this.p.height / 2)
    this.p.stroke(0)
    this.p.fill(175)
    this.p.line(0, 0, x, y)
    this.p.circle(x, y, 16)

    this.p.popMatrix()
  }
}