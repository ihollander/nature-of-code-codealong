import { random } from './utils/math.js'

export default class PVector {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  add(vector) {
    this.x += vector.x
    this.y += vector.y
    return this
  }

  sub(vector) {
    this.x -= vector.x
    this.y -= vector.y
    return this
  }

  mult(scale) {
    this.x *= scale
    this.y *= scale
    return this
  }

  div(scale) {
    this.x = this.x / scale
    this.y = this.y / scale
    return this
  }

  dot(vector) {
    return this.x * vector.x + this.y * vector.y
  }


  limit(max) {
    if (this.mag > max) {
      this.normalize()
      this.mult(max)
    }
  }

  copy() {
    return new PVector(this.x, this.y)
  }

  mag() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  setMag(len) {
    return this.normalize().mult(len)
  }

  normalize() {
    const mag = this.mag()
    if (mag !== 0) {
      this.div(mag)
    }
    return this
  }

  dist(v) {
    return v.copy().sub(this).mag()
  }

  heading() {
    return Math.atan2(this.y, this.x)
  }

  static fromAngle(angle, length = 1) {
    return new PVector(length * Math.cos(angle), length * Math.sin(angle))
  }

  static random2D() {
    return PVector.fromAngle(Math.random() * Math.PI * 2)
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

  static angleBetween(v1, v2) {
    let dot = v1.dot(v2)
    return Math.acos(dot / (v1.mag() * v2.mag()))
  }

  static dist(v1, v2) {
    return v1.dist(v2)
  }
}