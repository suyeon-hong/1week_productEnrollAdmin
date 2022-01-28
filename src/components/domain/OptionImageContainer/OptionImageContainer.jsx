import { useState } from 'react'
import { ImageUploadButton } from '@components/base'
import * as S from './Style'

const OptionImageContainer = () => {
  const [imageInfo, setImageInfo] = useState({})

  return (
    <S.OptionImageWrapper>
      <ImageUploadButton isImage upload={setImageInfo} />
      <S.ImageArea src={imageInfo.src} alt={imageInfo.name} />
    </S.OptionImageWrapper>
  )
}

export default OptionImageContainer
