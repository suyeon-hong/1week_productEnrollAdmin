import { deepCopy } from '@utils/functions'
import {
  ADD_OPTION_SET,
  DELETE_OPTION_SET,
  ADD_OPTION_IMAGE,
  DELETE_OPTION,
  ADD_OPTION_INFO,
  ADD_ADDITORY_OPTION,
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
  // { index: 0, addOptionName: '', addOptionNormalPrice: 0 }
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
      return [
        ...state,
        { ...payload, index: state.length === 0 ? 0 : state.length },
      ]
    }
    case DELETE_OPTION_SET: {
      return state.filter((option) => option.index !== +payload)
    }
    case ADD_OPTION_IMAGE: {
      const newState = deepCopy(state)
      console.log(payload.index)
      newState[payload.index].imageInfo = payload
      return newState
    }
    case DELETE_OPTION: {
      const { optionsIndex, deletedOptionInfo } = payload
      const newState = deepCopy(state)
      newState[+optionsIndex].optionInfo = deletedOptionInfo
      return newState
    }
    case ADD_OPTION_INFO: {
      const newState = deepCopy(state)
      const current =
        newState[+payload.optionsIndex].optionInfo[payload.optionInfoIndex]
      Object.entries(payload).forEach(([key, value]) => (current[key] = value))
      return state
    }
    // case ADD_ADDITORY_OPTION: {
    // }
    default: {
      throw new Error('type is inValid')
    }
  }
}
