import { useState, useContext } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { ADD_OPTION_IMAGE } from '@contexts/OptionContext/types'
import { ImageUploadButton } from '@components/base'
import * as S from './Style'

const OptionImageContainer = ({
  initialImageInfo,
  setOptions,
  optionsIndex,
}) => {
  const { _, dispatch } = useContext(OptionContext)
  const [imageInfo, setImageInfo] = useState({})

  const onChange = (newImageInfo) => {
    setImageInfo(newImageInfo)

    dispatch({
      type: ADD_OPTION_IMAGE,
      payload: { index: optionsIndex, ...newImageInfo },
    })
  }

  return (
    <S.OptionImageWrapper>
      <ImageUploadButton isImage upload={onChange} />
      <S.ImageArea src={imageInfo?.src} alt={imageInfo?.name} />
    </S.OptionImageWrapper>
  )
}

export default OptionImageContainer
