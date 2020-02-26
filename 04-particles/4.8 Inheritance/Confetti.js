import Particle from "./Particle.js";
import { map } from "../../p/utils/math.js";

export default class Confetti extends Particle {
  constructor(p, location) {
    super(p, location)
  }

  display() {
    let theta = map(this.location.x, 0, this.p.width / 2, 0, Math.PI * 4)
    this.p.fill(175, this.lifespan)
    this.p.stroke(0, this.lifespan)

    this.p.pushMatrix()
    this.p.translate(this.location.x, this.location.y)
    this.p.rotate(theta)
    this.p.centerRectangle(0, 0, 8, 8)
    this.p.popMatrix()
  }
}