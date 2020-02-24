import { random } from './utils/math.js'

export default class PVector {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  add(vector) {
    this.x += vector.x
    this.y += vector.y
  }

  sub(vector) {
    this.x -= vector.x
    this.y -= vector.y
  }

  mult(scale) {
    this.x *= scale
    this.y *= scale
  }

  div(scale) {
    this.x = this.x / scale
    this.y = this.y / scale
  }

  limit(max) {
    if (this.mag > max) {
      this.normalize()
      this.mult(max)
    }
  }

  // return a copy
  get() {
    return new PVector(this.x, this.y)
  }

  mag() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  normalize() {
    const mag = this.mag()
    if (mag !== 0) {
      this.div(mag)
    }
  }

  // angle maths
  heading() {
    return Math.atan2(this.y, this.x)
  }

  static random2D() {
    const vec = new PVector(random(-1, 1), random(-1, 1))
    vec.normalize()
    return vec
  }

  static add(vec1, vec2) {
    return new PVector(vec1.x + vec2.x, vec1.y + vec2.y)
  }

  static sub(vec1, vec2) {
    return new PVector(vec1.x - vec2.x, vec1.y - vec2.y)
  }

  static mult(vec, scale) {
    return new PVector(vec.x * scale, vec.y * scale)
  }

  static div(vec, scale) {
    return new PVector(vec.x / scale, vec.y / scale)
  }
}