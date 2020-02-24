import Drawing from '../../p/Drawing.js'
import Mover from './Mover.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

const m = new Mover(p)

p.setup(() => {
  p.size(640, 360)
})

p.draw(frameCount => {
  p.background(220)

  m.update()
  m.display()
  m.checkEdges()
})
