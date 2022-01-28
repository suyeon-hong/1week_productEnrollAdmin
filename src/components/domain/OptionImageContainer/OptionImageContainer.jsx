import { useState, useEffect, useReducer } from 'react'
import { ImageUploadButton } from '@components/base'
import * as S from './Style'
import {
  initialValue,
  reducer,
  ADD_OPTION_IMAGE,
} from '../../../reducer/optionReducer'

const OptionImageContainer = ({ initialImageInfo, setOptions, index }) => {
  const [imageInfo, setImageInfo] = useState({ ...initialImageInfo })
  const [options, dispatch] = useReducer(reducer, [])
  useEffect(() => {
    dispatch({ type: ADD_OPTION_IMAGE, payload: { ...imageInfo, index } })
  }, [imageInfo])

  useEffect(() => {
    console.log(options, 'options')
  }, [options])

  return (
    <S.OptionImageWrapper>
      <ImageUploadButton isImage upload={setImageInfo} />
      <S.ImageArea src={imageInfo?.src} alt={imageInfo?.name} />
    </S.OptionImageWrapper>
  )
}

export default OptionImageContainer
