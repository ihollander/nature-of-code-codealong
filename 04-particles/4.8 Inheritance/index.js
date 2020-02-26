import Drawing from '../../p/Drawing.js'
import PVector from '../../p/PVector.js';
import ParticleSystem from './ParticleSystem.js';
import Repeller from './Repeller.js';

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let repeller;
let systems = [];
let gravity = new PVector(0, 0.1)

p.setup(() => {
  p.size(640, 320)
  repeller = new Repeller(p, p.width / 2, p.height / 2)
})

p.draw(frameCount => {
  p.background(220)

  for (let ps of systems) {
    ps.applyForce(gravity)
    ps.applyRepeller(repeller)
    ps.run()
  }

  repeller.display()

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