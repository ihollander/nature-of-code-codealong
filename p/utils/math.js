export function random(num1, num2) {
  if (arguments.length === 0) {
    return Math.random()
  }

  if (arguments.length === 1) {
    if (Number.isInteger(num1)) {
      return Math.floor(Math.random() * num1)
    } else {
      return Math.random() * num1
    }
  }

  if (Number.isInteger(num1)) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1
  } else {
    return Math.random() * (num2 - num1) + num1
  }
}

export function constrain(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value
}