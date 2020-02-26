import Drawing from '../../p/Drawing.js'
import PVector from '../../p/PVector.js';
import ParticleSystem from './ParticleSystem.js';

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let systems = [];

p.setup(() => {
  p.size(640, 320)
})

p.draw(frameCount => {
  p.background(220)


  for (let ps of systems) {
    ps.run()
  }
  systems = systems.filter(ps => !ps.isDead())
})

canvas.addEventListener("click", ({ offsetX, offsetY }) => {
  systems.push(
    new ParticleSystem(
      p,
      new PVector(offsetX, offsetY)
    )
  )
})