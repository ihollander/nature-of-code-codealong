import { randomNumber, monteCarlo } from './utils.js'

export default class Walker {
  constructor(context) {
    this.context = context
    this.x = context.canvas.width / 2
    this.y = context.canvas.height / 2
  }

  get rect() {
    return [this.x, this.y, 1, 1]
  }

  display() {
    this.context.fillStyle = "#000000"
    this.context.fillRect(...this.rect)
  }

  step() {

    this.x += randomNumber(-1, 1)
    this.y += randomNumber(-1, 1)
  }
}