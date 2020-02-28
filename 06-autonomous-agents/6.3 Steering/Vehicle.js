import PVector from '../../p/PVector.js'
import { map } from '../../p/utils/math.js'

export default class Vehicle {

  constructor(p, x, y) {
    this.p = p
    this.location = new PVector(x, y)
    this.velocity = new PVector(0, 0)
    this.acceleration = new PVector(0, 0)

    this.maxspeed = 4
    this.maxforce = 0.1
    this.r = 30
  }

  applyForce(force) {
    this.acceleration.add(force)
  }

  seek(target) {
    let desired = PVector.sub(target, this.location)
    desired.normalize()
    desired.mult(this.maxspeed)

    let steer = PVector.sub(desired, this.velocity)
    steer.limit(this.maxforce)
    this.applyForce(steer)
  }

  arrive(target) {
    let desired = PVector.sub(target, this.location)

    let d = desired.mag()
    desired.normalize()
    if (d < 100) {
      let m = map(d, 0, 100, 0, this.maxspeed)
      desired.mult(m)
    } else {
      desired.mult(this.maxspeed)
    }
    let steer = PVector.sub(desired, this.velocity)
    steer.limit(this.maxforce)
    this.applyForce(steer)
  }

  update() {
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxspeed)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
  }

  display() {
    let theta = this.velocity.heading() + Math.PI / 2

    this.p.fill(175)
    this.p.stroke(0)
    this.p.pushMatrix()
    this.p.translate(this.location.x, this.location.y)
    this.p.rotate(theta)
    this.p.rectangle(0, 0, this.r, this.r)
    this.p.popMatrix()
  }

}