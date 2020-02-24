import Drawing from '../../p/Drawing.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let angle = 0
let aVelocity = 0
let aAcceleration = 0.001

p.setup(() => {
  p.size(640, 360)
})

p.draw(frameCount => {
  p.background(220)

  p.fill(175)
  p.stroke(0)

  p.translate(p.width / 2, p.height / 2)
  p.rotate(angle)

  p.line(-50, 0, 50, 0)
  p.circle(50, 0, 8)
  p.circle(-50, 0, 8)

  aVelocity += aAcceleration
  angle += aVelocity
})
