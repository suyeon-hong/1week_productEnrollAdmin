import {
  deepCopy,
  increaseIndexByOne,
  getArrangedIndexArray,
} from '@utils/functions'
import {
  ADD_INFORMATION_SET,
  UPDATE_INFORMATION_SET,
  DELETE_INFORMATION_SET,
  ADD_ADDITORY_INFO,
  DELETE_ADDITORY_INFO,
} from './types'

export const initialValue = {
  index: 0,
  productName: '',
  origin: '',
  quality: 0,
  storage: '',
  type: '',
  additoryInfos: [],
}

export const additoryInfosElement = {
  index: 0,
  freeName: '',
  content: '',
}

export const informationKey = {
  productName: 'productName',
  origin: 'origin',
  quality: 'quality',
  storage: 'storage',
  type: 'type',
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_INFORMATION_SET: {
      return [...state, { ...initialValue, index: increaseIndexByOne(state) }]
    }
    case UPDATE_INFORMATION_SET: {
      const newState = deepCopy(state)
      newState[payload.parentIndex] = {
        ...newState[payload.parentIndex],
        ...payload,
      }
      return newState
    }
    case DELETE_INFORMATION_SET: {
      return state.filter((option) => option.index !== +payload)
    }
    case ADD_ADDITORY_INFO: {
      const newState = deepCopy(state)
      const additoryElement = newState[payload].additoryInfos
      newState[payload].additoryInfos.push({
        ...additoryInfosElement,
        index: increaseIndexByOne(additoryElement),
      })
      return newState
    }
    case DELETE_ADDITORY_INFO: {
      const newState = deepCopy(state)
      const filteredAdditoryInfos = newState[
        payload.parentIndex
      ]?.additoryInfos.filter(
        (additoryInfo) => additoryInfo.index !== payload.clickedIndex,
      )

      // @NOTE: 삭제하면 map에서 data-index를 다시 재조정해서 넣음(0, 1, 2...)
      // @NOTE: 그러므로 기존 additoryInfo의 index들도 재조정해주는 작업
      const arrangedIndexAdditoryInfos = getArrangedIndexArray(
        filteredAdditoryInfos,
      )

      newState[payload.parentIndex].additoryInfos = arrangedIndexAdditoryInfos

      return newState
    }
    default: {
      throw new Error('type is inValid')
    }
  }
}
