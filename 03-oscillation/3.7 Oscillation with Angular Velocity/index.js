import Drawing from '../p/Drawing.js'
import Oscillator from './Oscillator.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let oscillators = []
for (let i = 0; i < 10; i++) {
  oscillators.push(new Oscillator(p))
}

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
