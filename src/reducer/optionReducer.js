import { deepCopy } from '@utils/functions'

export const ADD_OPTION_IMAGE = 'ADD_OPTION_IMAGE'
export const ADD_OPTION = 'ADD_OPTION'

export const initialValue = {
  imageInfo: {},
  optionInfo: {
    optionName: '',
    normalPrice: 0,
    price: 0,
    stock: 0,
    isTax: true,
  },
  addOptions: [{ addOptionName: '', addOptionNormalPrice: 0 }],
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_OPTION: {
      return [...state, payload]
    }
    case ADD_OPTION_IMAGE: {
      const newState = deepCopy(state)
      newState[payload.index] = payload
      return newState
    }
  }
}
