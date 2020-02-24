import Drawing from '../../p/Drawing.js'

const canvas = document.querySelector("canvas")
const p = new Drawing(canvas)

let angle = 0;
let angleVel = 0.2;
let amplitude = 100;

p.setup(() => {
  p.size(400, 200)
})

p.draw(frameCount => {
  p.background(220)

  for (let x = 0; x < p.width; x += 24) {
    let y = amplitude * Math.sin(angle)

    p.circle(x, y + (p.height / 2), 24)

    angle += angleVel
  }
})
