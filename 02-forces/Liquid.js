export default class Liquid {
  constructor(context, x, y, w, h, c) {
    this.context = context
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = c
  }

  draw() {
    this.context.fillStyle = "#3322dd"
    this.context.fillRect(this.x, this.y, this.w, this.h)
  }
}