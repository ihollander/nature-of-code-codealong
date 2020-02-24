import PVector from "./PVector.js"

export default class Mouse {
  constructor(canvas) {
    this.vector = new PVector(0, 0)
    canvas.addEventListener("mousemove", this.handleMove)
  }

  handleMove = ({ offsetX, offsetY }) => {
    this.vector = new PVector(offsetX, offsetY)
  }
}