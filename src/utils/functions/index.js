export const checkTypeOfCss = (property) =>
  typeof property === 'string' ? property : `${property}px`

export const deepCopy = (value) => {
  return JSON.parse(JSON.stringify(value))
}

export const debounce = (callback, delay) => {
  let timer = null

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

export const increaseIndexByOne = (element) =>
  element.length === 0 ? 0 : element.length

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
