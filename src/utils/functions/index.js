export const checkTypeOfCss = (property) =>
  typeof property === 'string' ? property : `${property}px`

export const debounceGenerator = (ms) => {
  let id
  return (cb) => {
    if (id) {
      clearTimeout(id)
    }
    id = setTimeout(() => {
      cb()
      id = null
    }, ms)
  }
}
