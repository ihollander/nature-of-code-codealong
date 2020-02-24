import Walker from './Walker.js'
import { randomTo } from './utils.js'

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

context.fillStyle = "#0066AA"
context.fillRect(0, 0, canvas.width, canvas.height)

const walker = new Walker(context)

function loop() {
  walker.step()

  walker.display()

  requestAnimationFrame(loop)
}
loop()