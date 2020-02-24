import Drawing from '../p/Drawing.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let amplitude = 100
let period = 120

p.setup(() => {
  p.size(640, 360)
})

p.draw(frameCount => {
  p.background(220)

  let x = amplitude * Math.cos(Math.PI * 2 * frameCount / period)

  p.stroke(0)
  p.fill(175)
  p.translate(p.width / 2, p.height / 2)
  p.line(0, 0, x, 0)
  p.circle(x, 0, 20)
})
