import { increaseIndexByOne } from '@utils/functions'
import { ADD_INFORMATION_SET, DELETE_INFORMATION_SET } from './types'

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
    case ADD_INFORMATION_SET: {
      return [...state, { ...payload, index: increaseIndexByOne(state) }]
    }
    case DELETE_INFORMATION_SET: {
      return state.filter((option) => option.index !== +payload)
    }
    default: {
      throw new Error('type is inValid')
    }
  }
}
