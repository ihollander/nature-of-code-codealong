export function rgbaToString(r, g, b, a) {
  switch (arguments.length) {
    case 1:
      return `rgb(${r}, ${r}, ${r})`
    case 3:
      return `rgb(${r}, ${g}, ${b})`
    case 4:
      return `rgba(${r}, ${g}, ${b}, ${a})`
    default:
      return `rgb(255,255,255)`
  }
}