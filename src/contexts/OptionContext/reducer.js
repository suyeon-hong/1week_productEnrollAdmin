import { deepCopy, increaseIndexByOne } from '@utils/functions'
import {
  ADD_OPTION_SET,
  DELETE_OPTION_SET,
  ADD_OPTION_IMAGE,
  ADD_OPTION,
  DELETE_OPTION,
  UPDATE_OPTION_INFO,
  ADD_ADDITORY_OPTION,
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
      stock: 0,
      isTax: true,
    },
  ],
  additoryOptions: [],
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
  stock: 'stock',
  isTax: 'isTax',
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
      console.log(payload)

      return state
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
    case DELETE_ADDITORY_OPTION: {
      const { optionsIndex, optionInfoIndex, clickedIndex } = payload
      const newState = deepCopy(state)
      const additoryOptionsArrayElement =
        newState[+optionsIndex].additoryOptions[optionInfoIndex]
      const deleteAdditoryOptionsArrayElement =
        additoryOptionsArrayElement.filter(
          (element) => element.index !== clickedIndex,
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
