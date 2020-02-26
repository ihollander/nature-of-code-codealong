import { rgbaToString } from './utils/color.js'

export default class Drawing {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext("2d")

    this.width = canvas.width
    this.height = canvas.height
    this.frames = 0

    // frame rate limiter
    this.fps = 60
    this.interval = 1000 / this.fps
    this.previousUpdate = performance.now()
    this.fpsCount = 0
  }

  // allow setup to run from main
  setup = callback => {
    callback()
  }

  // main drawing loop
  draw = callback => {
    requestAnimationFrame(() => this.draw(callback))

    let now = performance.now()
    let delta = now - this.previousUpdate

    if (delta > this.interval) {
      this.fpsCount = 1000 / delta
      this.previousUpdate = now - (delta % this.interval)
      this.frames++
      this.context.resetTransform()
      callback(this.frames)
      this.debug()
    }
  }

  debug() {
    this.pushMatrix()
    this.context.fillStyle = "red"
    this.context.font = "16px sans-serif"
    this.context.fillText(`${this.fpsCount.toFixed(2)} fps`, 10, 20)
    this.popMatrix()
  }

  // canvas settings
  size(width, height) {
    this.width = width
    this.height = height

    this.canvas.width = width
    this.canvas.height = height
  }

  background(...args) {
    this.context.save()
    this.context.fillStyle = rgbaToString(...args)
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.restore()
  }

  // context setters
  fill(...args) {
    this.context.fillStyle = rgbaToString(...args)
  }

  stroke(...args) {
    this.context.strokeStyle = rgbaToString(...args)
  }

  strokeWeight(width) {
    this.context.lineWidth = width
  }

  noFill() {
    this.context.fillStyle = `rgba(0,0,0,0)`
  }

  // transforms
  rotate(degrees) {
    this.context.rotate(degrees)
  }

  translate(x, y) {
    this.context.translate(x, y)
  }

  pushMatrix() {
    this.context.save()
  }

  popMatrix() {
    this.context.restore()
  }

  // shapes
  line(x1, y1, x2, y2) {
    this.context.beginPath()
    this.context.moveTo(x1, y1)
    this.context.lineTo(x2, y2)
    this.context.stroke()
  }

  circle(x, y, diameter) {
    this.context.beginPath()
    this.context.arc(x, y, diameter / 2, 0, 2 * Math.PI)
    this.context.stroke()
    this.context.fill()
  }

  rectangle(x, y, w, h) {
    this.context.fillRect(x, y, w, h)
    this.context.strokeRect(x, y, w, h)
  }

  centerRectangle(x, y, w, h) {
    x = x - (w / 2)
    y = y - (h / 2)
    this.context.fillRect(x, y, w, h)
    this.context.strokeRect(x, y, w, h)
  }
}