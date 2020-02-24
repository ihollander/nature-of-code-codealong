import Drawing from '../p/Drawing.js'
import Oscillator from './Oscillator.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let angle = 0
let angleVel = 0.2
let amplitude = 100

p.setup(() => {
  p.size(640, 360)
})

p.draw(frameCount => {
  p.background(220)

  oscillators.forEach(o => {
    o.oscillate()
    o.display()
  })

})
