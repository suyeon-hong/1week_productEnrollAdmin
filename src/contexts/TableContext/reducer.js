import {
  CHANGE_OTHER_SETTING,
  CHANGE_PERIOD,
  CHANGE_PRODUCTION_BENEFIT,
  CHANGE_PRODUCTION_IMAGES,
  CHANGE_PRODUCTION_INFORMATION,
} from './types'

export const initialValue = {
  productionInformation: {
    categories: [
      { name: '카테고리1', checked: false },
      { name: '카테고리2', checked: false },
      { name: '카테고리3', checked: false },
      { name: '카테고리4', checked: false },
      { name: '카테고리5', checked: false },
      { name: '카테고리6', checked: false },
      { name: '카테고리7', checked: false },
      { name: '카테고리8', checked: false },
      { name: '카테고리9', checked: false },
    ],
    tags: [],
    productionName: '',
    productionDescribe: '',
    productionCode: Date.now(),
    thumbnail: [],
    mainImages: [],
  },
  period: {
    expose: {
      type: 'false',
      startDate: '',
      endDate: '',
    },
    sell: {
      type: 'false',
      startDate: '',
      endDate: '',
    },
  },
  productionImages: {
    productionImages: [],
  },
  recommendImages: {
    recommendImages: [],
  },
  productionDelivery: {},
  productionBenefit: false,
  otherSetting: false,
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_PRODUCTION_INFORMATION: {
      return {
        ...state,
        productionInformation: { ...state.productionInformation, ...payload },
      }
    }
    case CHANGE_PRODUCTION_IMAGES: {
      return {
        ...state,
        productionImages: { ...state.productionImages, ...payload },
      }
    }
    case CHANGE_PRODUCTION_BENEFIT: {
      return { ...state, productionBenefit: payload }
    }
    case CHANGE_OTHER_SETTING: {
      return { ...state, otherSetting: payload }
    }
    case CHANGE_PERIOD: {
      return { ...state, period: { ...state.period, ...payload } }
    }
    default: {
      throw new Error('type is inValid')
    }
  }
}
