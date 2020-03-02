import Drawing from '../../p/Drawing.js'
import Vehicle from './Vehicle.js'
import FlowField from './FlowField.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let v = new Vehicle(p, 10, 10)
let ff = new FlowField(p)

p.setup(() => {
  p.size(640, 320)
})

p.draw(frameCount => {
  p.background(220)

  v.follow(ff)
  v.update()
  v.display()
})