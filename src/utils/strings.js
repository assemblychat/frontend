export const capitalize = str => {
  if (!str) return str

  return str
    .split()
    .map(word => {
      const first = word.substring(0, 1)
      const rest = word.substring(1)

      return `${first.toUpperCase()}${rest}`
    })
    .join(' ')
}
