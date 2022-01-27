export const checkTypeOfCss = (property) =>
  typeof property === 'string' ? property : `${property}px`
