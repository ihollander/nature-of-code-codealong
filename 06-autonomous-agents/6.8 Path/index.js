import Drawing from '../../p/Drawing.js'
import Vehicle from './Vehicle.js'
import Path from './Path.js'
import { random } from '../../p/utils/math.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let v = new Vehicle(p, 110, 110)
let path;

p.setup(() => {
  p.size(640, 320)
  path = new Path(p)
  path.addPoint(-20, p.height / 2)
  path.addPoint(random(0, p.width / 2), random(0, p.height))
  path.addPoint(random(p.width / 2, p.width), random(0, p.height))
  path.addPoint(p.width + 20, p.height / 2)
})

p.draw(frameCount => {
  p.background(220)
  path.display()

  v.follow(path)

  v.update()
  v.display()
})