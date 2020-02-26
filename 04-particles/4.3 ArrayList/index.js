import Drawing from '../../p/Drawing.js'
import Particle from './Particle.js'
import PVector from '../../p/PVector.js';

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let particles = [];

p.setup(() => {
  p.size(640, 320)
})

p.draw(frameCount => {
  p.background(220)
  particles.push(
    new Particle(p, new PVector(p.width / 2, 50))
  )

  particles = particles.filter(p => !p.isDead())

  for (let p of particles) {
    p.run()
  }
})
