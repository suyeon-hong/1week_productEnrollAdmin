export const checkTypeOfCss = (property) =>
  typeof property === 'string' ? property : `${property}px`

export const deepCopy = (value) => {
  return JSON.parse(JSON.stringify(value))
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

export const calculateDiscount = (normalPrice, price) => {
  if (+normalPrice === 0 || +price === 0) return '할인율 없음'
  return Math.floor(((+normalPrice - +price) / +normalPrice) * 100)
}

export const getArrangedIndexArray = (array) =>
  array.map((element, newIndex) => ({
    ...element,
    index: newIndex,
  }))

export const checkValidation = (
  productionInformation,
  optionInfo,
  informations,
) => {
  const { categories, productionName, productionDescribe } =
    productionInformation
  if (!Object.values(categories).some(({ checked }) => checked)) {
    console.log('카테고리 필수')
    return false
  }
  if (!productionName.length) {
    console.log('이름 필수')
    return false
  }
  if (!productionDescribe.length) {
    console.log('설명 필수')
    return false
  }

  if (!optionInfo?.optionName.length) {
    console.log('옵션 이름')
    return false
  }
  if (!optionInfo?.normalPrice) {
    console.log('가격')
    return false
  }
  if (!optionInfo?.price) {
    console.log('판매가')
    return false
  }
  if (!optionInfo?.stock) {
    console.log('옵션 재고')
    return false
  }
  return true
}
