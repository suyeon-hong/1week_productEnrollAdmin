import { ImageUploadButton, ImageItemList } from '@components/base'
import * as S from './Style'
import PropTypes from 'prop-types'

const ImageContainer = ({ isMultiple = true, itemList, setItemList }) => {
  return (
    <S.ImageContainerWrapper>
      <ImageUploadButton
        isMultiple={isMultiple}
        upload={setItemList}
        itemList={itemList}
      />
      <ImageItemList itemList={itemList} upload={setItemList} />
    </S.ImageContainerWrapper>
  )
}

ImageContainer.propTypes = {
  isMultiple: PropTypes.bool,
}

export default ImageContainer
