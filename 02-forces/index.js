import Mover from './Mover.js'
import Mouse from './Mouse.js'
import PVector from './PVector.js'
import Liquid from './Liquid.js'
import Attractor from './Attractor.js'

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

context.fillStyle = "#0066AA"
context.fillRect(0, 0, canvas.width, canvas.height)

let movers = []

for (let i = 0; i < 10; i++) {
  movers.push(new Mover(context))
}

function loop() {
  context.fillStyle = "#0066AA"
  context.fillRect(0, 0, canvas.width, canvas.height)

  movers.forEach(mover => {
    movers
      .forEach(otherMover => {
        if (otherMover !== mover) {
          let force = otherMover.attract(mover)
          // console.log(force)
          mover.applyForce(force)
        }
      })

    mover.update()

    mover.display()
  })

  requestAnimationFrame(loop)
}

loop()


// const mouse = new Mouse(canvas)
// const liquid = new Liquid(context, 0, canvas.height / 2, canvas.width, canvas.height / 2, 0.1)

// function loop() {
//   context.fillStyle = "#0066AA"
//   context.fillRect(0, 0, canvas.width, canvas.height)

//   liquid.draw()

//   let wind = new PVector(0.01, 0)

//   movers.forEach(ball => {

//     if (ball.isInside(liquid)) {
//       ball.drag(liquid)
//     }

//     let gravity = new PVector(0, 0.1 * ball.mass)

//     ball.applyForce(wind)
//     ball.applyForce(gravity)

//     ball.update()

//     ball.display()

//     ball.checkEdges()
//   })

//   requestAnimationFrame(loop)
// }
// loop()