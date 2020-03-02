import Drawing from '../../p/Drawing.js'
import Vehicle from './Vehicle.js'
import { random } from '../../p/utils/math.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let vehicles = []

p.setup(() => {
  p.size(640, 320)
  for (let i = 0; i < 100; i++) {
    vehicles.push(new Vehicle(p, random(p.width), random(p.height)))
  }
})

p.draw(frameCount => {
  p.background(220)

  for (let v of vehicles) {
    v.separate(vehicles)
    v.run()
  }
})