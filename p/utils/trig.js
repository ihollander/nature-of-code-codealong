export function radians(degrees) {
  return 2 * Math.PI * (degrees / 360)
}

export function dist(x1, y1, x2, y2) {
  let a = Math.abs(x2 - x1)
  let b = Math.abs(y2 - y1)
  return Math.sqrt(a ** 2 + b ** 2)
}