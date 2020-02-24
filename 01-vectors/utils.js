export function randomTo(max) {
  return Math.floor(Math.random() * max)
}

export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export function monteCarlo() {
  while (true) {
    let r1 = Math.random()
    let probability = r1
    let r2 = Math.random()

    if (r2 < probability) {
      return r1
    }
  }
}