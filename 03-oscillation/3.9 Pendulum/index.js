import Drawing from '../../p/Drawing.js'
import Pendulum from './Pendulum.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let pendulum;

p.setup(() => {
  p.size(640, 320)
  pendulum = new Pendulum(p)
})

p.draw(frameCount => {
  p.background(220)

  pendulum.update()
  pendulum.display()
})
