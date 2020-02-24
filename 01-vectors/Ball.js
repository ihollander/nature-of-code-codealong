import PVector from './PVector.js'

export default class Ball {
  constructor(context) {
    this.context = context
    this.location = new PVector(100, 100)
    this.velocity = new PVector(1, 3.3)
  }

  draw() {
    this.context.fillStyle = "#000"
    this.context.beginPath()
    this.context.arc(this.location.x, this.location.y, 16, 0, Math.PI * 2)
    this.context.fill()
  }

  update() {
    this.location.add(this.velocity)
    if (this.location.x > this.context.canvas.width || this.location.x < 0) {
      this.velocity.x = -this.velocity.x
    }
    if (this.location.y > this.context.canvas.height || this.location.y < 0) {
      this.velocity.y = -this.velocity.y
    }
  }

}