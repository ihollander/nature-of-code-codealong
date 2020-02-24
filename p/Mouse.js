import PVector from "./PVector.js"

export default class Mouse {
  constructor(canvas) {
    this.vector = new PVector(0, 0)
    this.pressed = false

    canvas.addEventListener("mousemove", this.handleMove)
    canvas.addEventListener("mousedown", this.handleDown)
    canvas.addEventListener("mouseup", this.handleUp)
  }

  handleMove = ({ offsetX, offsetY }) => {
    this.vector = new PVector(offsetX, offsetY)
  }

  handleDown = () => {
    this.pressed = true
  }

  handleUp = () => {
    this.pressed = false
  }
}