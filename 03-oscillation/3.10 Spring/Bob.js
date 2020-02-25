import PVector from "../../p/PVector.js"
import { dist } from '../../p/utils/trig.js'

export default class Bob {
  constructor(p, x, y) {
    this.p = p

    this.position = new PVector(x, y)
    this.velocity = new PVector()
    this.acceleration = new PVector()

    this.mass = 24
    this.damping = 0.98

    this.dragOffset = new PVector()
    this.dragging = false
  }

  update() {
    this.velocity.add(this.acceleration)
    this.velocity.mult(this.damping)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }

  applyForce(force) {
    let f = force.copy()
    f.div(this.mass)
    this.acceleration.add(f)
  }

  display() {
    this.p.stroke(255)
    this.p.strokeWeight(2)
    this.p.fill(127)

    if (this.dragging) {
      this.p.fill(200)
    }

    this.p.circle(this.position.x, this.position.y, this.mass)
  }

  handleClick(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y)
    if (d < this.mass) {
      this.dragging = true
      this.dragOffset.x = this.position.x - mx
      this.dragOffset.y = this.position.y - my
    }
  }

  stopDragging() {
    this.dragging = false
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      console.log(mx, my)
      this.position.x = mx + this.dragOffset.x
      this.position.y = my + this.dragOffset.y
    }
  }
}