import Drawing from '../../p/Drawing.js'
import Vehicle from './Vehicle.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let v = new Vehicle(p, 10, 10)
let v2 = new Vehicle(p, 300, 300)

p.setup(() => {
  p.size(640, 320)
})

p.draw(frameCount => {
  p.background(220)

  v.arrive(v2.location)
  v.update()
  v.display()
  v2.display()
})