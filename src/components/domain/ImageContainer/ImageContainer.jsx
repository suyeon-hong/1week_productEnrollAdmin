import { useState } from 'react'
import { ImageUploadButton, ImageItemList } from '@components/base'
import * as S from './Style'

const ImageContainer = () => {
  const [itemList, setItemList] = useState([])

  return (
    <S.ImageContainerWrapper>
      <ImageUploadButton upload={setItemList} />
      <ImageItemList itemList={itemList} upload={setItemList} />
    </S.ImageContainerWrapper>
  )
}

export default ImageContainer
