import { deepCopy } from '@utils/functions'
import {
  ADD_OPTION_SET,
  DELETE_OPTION_SET,
  ADD_OPTION_IMAGE,
  DELETE_OPTION,
} from './types'

export const initialValue = {
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
  addOptions: [{ index: 0, addOptionName: '', addOptionNormalPrice: 0 }],
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_OPTION_SET: {
      // NOTE: index 초기값이 1이므로 -1씩 비교해야 함
      return [...state, { index: state.length + 1, ...payload }]
    }
    case DELETE_OPTION_SET: {
      return state.filter((option) => option.index - 1 !== +payload)
    }
    case ADD_OPTION_IMAGE: {
      const newState = deepCopy(state)
      newState[payload.index] = payload
      return newState
    }
    case DELETE_OPTION: {
      const { optionsIndex, deletedOptionInfo } = payload
      const newState = deepCopy(state)
      newState[+optionsIndex].optionInfo = deletedOptionInfo
      return newState
    }
    default: {
      throw new Error('type is inValid')
    }
  }
}
