import Drawing from '../../p/Drawing.js'
import Particle from './Particle.js'
import PVector from '../../p/PVector.js';

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let part;

p.setup(() => {
  p.size(640, 320)
  part = new Particle(p, new PVector(p.width / 2, p.height / 2))
})

p.draw(frameCount => {
  p.background(220)

  part.run()
})
