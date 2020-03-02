import PVector from '../../p/PVector.js'

export default class Vehicle {

  constructor(p, x, y) {
    this.p = p
    this.location = new PVector(x, y)
    this.acceleration = new PVector(0, 0)
    this.velocity = new PVector(0, -2)

    this.r = 4
    this.maxspeed = 4
    this.maxforce = 0.1
  }

  applyForce(force) {
    this.acceleration.add(force)
  }

  follow(path) {
    let predict = this.velocity.copy()
    predict.normalize()
    predict.mult(50)
    let predictLoc = PVector.add(this.location, predict)

    let normal = null;
    let target = null;
    let worldRecord = 1000000;
    for (let i = 0; i < path.points.length - 1; i++) {
      let a = path.points[i]
      let b = path.points[i + 1]
      let normalPoint = this.getNormalPoint(predictLoc, a, b)

      if (normalPoint.x < a.x || normalPoint.x > b.x) {
        normalPoint = b.copy()
      }

      let distance = PVector.dist(predictLoc, normalPoint)
      if (distance < worldRecord) {
        worldRecord = distance

        normal = normalPoint

        let dir = PVector.sub(b, a)
        dir.normalize()
        dir.mult(10)
        target = normalPoint.copy()
        target.add(dir)
      }
    }

    if (worldRecord > path.radius && target !== null) {
      this.seek(target)
    }

  }

  seek(target) {
    let desired = PVector.sub(target, this.location)

    if (desired.mag() === 0) return

    desired.normalize()
    desired.mult(this.maxspeed)

    let steer = PVector.sub(desired, this.velocity)
    steer.limit(this.maxforce)
    this.applyForce(steer)
  }

  getNormalPoint(p, a, b) {
    let ap = PVector.sub(p, a)
    let ab = PVector.sub(b, a)

    ab.normalize()
    ab.mult(ap.dot(ab))

    return PVector.add(a, ab)
  }

  separate(vehicles) {
    let desiredSeparation = this.r * 2

    let sum = new PVector()
    let count = 0

    for (let v of vehicles) {
      let d = PVector.dist(this.location, v.location)
      if ((d > 0) && (d < desiredSeparation)) {
        let diff = PVector.sub(this.location, v.location)
        diff.normalize()
        diff.div(d)
        sum.add(diff)
        count++
      }
    }

    if (count > 0) {
      sum.div(count)
      sum.normalize()
      sum.mult(this.maxspeed)

      let steer = PVector.sub(sum, this.velocity)
      steer.limit(this.maxforce)
      this.applyForce(steer)
    }
  }

  run() {
    this.update()
    this.display()
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
    this.p.stroke(200)
    this.p.strokeWeight(1)

    this.p.pushMatrix()
    this.p.translate(this.location.x, this.location.y)
    this.p.rotate(theta)

    this.p.beginShape()
    this.p.vertex(0, -this.r * 2)
    this.p.vertex(-this.r, this.r * 2)
    this.p.vertex(this.r, this.r * 2)
    this.p.endShape("CLOSE")

    this.p.popMatrix()
  }

}