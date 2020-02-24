import Mover from './Mover.js'
import Mouse from './Mouse.js'

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

context.fillStyle = "#0066AA"
context.fillRect(0, 0, canvas.width, canvas.height)

let movers = []

for (let i = 0; i < 50; i++) {
  movers.push(new Mover(context))
}

const mouse = new Mouse(canvas)

function loop() {
  context.fillStyle = "#0066AA"
  context.fillRect(0, 0, canvas.width, canvas.height)

  movers.forEach(ball => {
    ball.moveToMouse(mouse)

    ball.update()

    ball.draw()
  })

  requestAnimationFrame(loop)
}
loop()