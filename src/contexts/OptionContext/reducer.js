import { deepCopy, increaseIndexByOne } from '@utils/functions'
import {
  ADD_OPTION_SET,
  DELETE_OPTION_SET,
  ADD_OPTION_IMAGE,
  ADD_OPTION,
  DELETE_OPTION,
  UPDATE_OPTION_INFO,
  ADD_ADDITORY_OPTION,
  UPDATE_ADDITORY_OPTION,
  DELETE_ADDITORY_OPTION,
} from './types'

export const initialValue = {
  index: 0,
  imageInfo: {},
  optionInfo: [
    {
      index: 0,
      optionName: '',
      normalPrice: 0,
      price: 0,
      discount: 0,
      stock: 0,
      isVAT: true,
      VAT: 0,
    },
  ],
  totalStock: 0,
  additoryOptions: [],
}

export const optionInfoElement = {
  index: 0,
  optionName: '',
  normalPrice: 0,
  price: 0,
  discount: 0,
  stock: 0,
  isVAT: true,
  VAT: 0,
}

export const additoryOptionsElement = {
  index: 0,
  addOptionName: '',
  addOptionNormalPrice: 0,
}

export const optionInfoKey = {
  optionName: 'optionName',
  normalPrice: 'normalPrice',
  price: 'price',
  discount: 'discount',
  stock: 'stock',
  isVAT: 'isVAT',
}

export const additoryOptionsKey = {
  addOptionName: 'addOptionName',
  addOptionNormalPrice: 'addOptionNormalPrice',
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_OPTION_SET: {
      return [...state, { ...payload, index: increaseIndexByOne(state) }]
    }
    case DELETE_OPTION_SET: {
      return state.filter((option) => option.index !== +payload)
    }
    case ADD_OPTION_IMAGE: {
      const newState = deepCopy(state)
      newState[payload.index].imageInfo = payload
      return newState
    }
    case ADD_OPTION: {
      const newState = deepCopy(state)
      newState[+payload].optionInfo.push({
        ...optionInfoElement,
        index: increaseIndexByOne(newState[+payload].optionInfo),
      })

      return newState
    }
    case DELETE_OPTION: {
      const { optionsIndex, deletedOptionInfo } = payload
      const newState = deepCopy(state)
      newState[+optionsIndex].optionInfo = deletedOptionInfo
      return newState
    }
    case UPDATE_OPTION_INFO: {
      const newState = deepCopy(state)
      const current =
        newState[+payload.optionsIndex].optionInfo[payload.optionInfoIndex]
      Object.entries(payload).forEach(([key, value]) => (current[key] = value))

      // @NOTE: 과세로 지정될 경우, 입력된 판매가의 10% 부과세로 저장
      if (!!payload.isVAT) {
        newState[+payload.optionsIndex].optionInfo[
          payload.optionInfoIndex
        ].VAT =
          +newState[+payload.optionsIndex].optionInfo[payload.optionInfoIndex]
            .price * 0.1
      }

      // @NOTE: 총 재고 수량 업데이트
      if (payload.stock) {
        const total = newState[+payload.optionsIndex].optionInfo.reduce(
          (acc, cur) => acc + +cur.stock,
          0,
        )
        newState[+payload.optionsIndex].totalStock = total
      }

      return newState
    }
    case ADD_ADDITORY_OPTION: {
      const { optionsIndex, optionInfoIndex } = payload
      const newState = deepCopy(state)
      const additoryOptionsArray = newState[+optionsIndex].additoryOptions

      if (!additoryOptionsArray[optionInfoIndex]) {
        additoryOptionsArray[optionInfoIndex] = []
      }
      additoryOptionsArray[optionInfoIndex].push({
        ...additoryOptionsElement,
        index: increaseIndexByOne(additoryOptionsArray[optionInfoIndex]),
      })
      return newState
    }
    case UPDATE_ADDITORY_OPTION: {
      const newState = deepCopy(state)
      const { index, value } = payload

      const current =
        newState[+index.optionsIndex].additoryOptions[index.optionInfoIndex][
          index.currentIndex
        ]

      Object.entries(value).forEach(([key, value]) => (current[key] = value))

      return newState
    }
    case DELETE_ADDITORY_OPTION: {
      const { optionsIndex, optionInfoIndex, currentIndex } = payload
      const newState = deepCopy(state)
      const additoryOptionsArrayElement =
        newState[+optionsIndex].additoryOptions[optionInfoIndex]
      const deleteAdditoryOptionsArrayElement =
        additoryOptionsArrayElement.filter(
          (element) => element.index !== currentIndex,
        )
      newState[+payload.optionsIndex].additoryOptions[optionInfoIndex] =
        deleteAdditoryOptionsArrayElement

      return newState
    }
    default: {
      throw new Error('type is inValid')
    }
  }
}
