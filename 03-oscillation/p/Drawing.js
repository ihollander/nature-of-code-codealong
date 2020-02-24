import { rgbaToString } from './utils/color.js'

export default class Drawing {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext("2d")

    this.width = canvas.width
    this.height = canvas.height
    this.frames = 0
  }

  // allow setup to run from main
  setup = callback => {
    callback()
  }

  // main drawing loop
  draw = callback => {
    this.frames++
    callback(this.frames)

    this.context.resetTransform()
    requestAnimationFrame(() => this.draw(callback))
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

  circle(x, y, radius) {
    this.context.beginPath()
    this.context.arc(x, y, radius, 0, 2 * Math.PI)
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