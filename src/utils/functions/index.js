export const checkTypeOfCss = (property) =>
  typeof property === 'string' ? property : `${property}px`

export const deepCopy = (value) => {
  return JSON.parse(JSON.stringify(value))
}
