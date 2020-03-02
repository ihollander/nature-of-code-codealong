import Drawing from '../../p/Drawing.js'
import CA from './GameOfLife.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)
let ca;

p.setup(() => {
  p.size(1000, 500)
  p.background(220)
  // p.noStroke()
  p.fps = 10

  ca = new CA(p)
})

p.draw(frameCount => {
  ca.display()
  ca.generate()
})

canvas.addEventListener("click", ({ offsetX, offsetY }) => {
  ca.flip(offsetX, offsetY)
})

document.addEventListener("keypress", ({ code }) => {
  if (code === "Space") {
    ca.generating = !ca.generating
  }
})