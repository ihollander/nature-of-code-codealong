import Drawing from '../../p/Drawing.js'
import PVector from '../../p/PVector.js'
import Mouse from '../../p/Mouse.js'
import Bob from './Bob.js'
import Spring from './Spring.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let bob;
let spring;

p.setup(() => {
  p.size(640, 360)
  spring = new Spring(p, p.width / 2, 10, 100)
  bob = new Bob(p, p.width / 2, 100)
})

p.draw(frameCount => {
  p.background(51)

  let gravity = new PVector(0, 2)
  bob.applyForce(gravity)

  spring.connect(bob)

  bob.update()

  spring.displayLine(bob)
  bob.display()
  spring.display()
})

p.canvas.addEventListener("mousedown", ({ offsetX, offsetY }) => {
  bob.handleClick(offsetX, offsetY)
})

p.canvas.addEventListener("mousemove", ({ buttons, offsetX, offsetY }) => {
  if (buttons > 0) {
    bob.handleDrag(offsetX, offsetY)
  }
})

p.canvas.addEventListener("mouseup", () => {
  bob.stopDragging()
})