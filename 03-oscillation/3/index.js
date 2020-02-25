import Drawing from '../../p/Drawing.js'
import Mover from './Mover.js.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

const mover = new Mover(p)

let r = 75
let theta = 0

p.setup(() => {
  p.size(640, 360)
  p.background(220)
})

p.draw(frames => {
  let x = r * Math.cos(theta)
  let y = r * Math.sin(theta)

  p.fill(0)

  p.circle(x + p.width / 2, y + p.height / 2, 8)

  theta += 0.01
})
