import PropTypes from 'prop-types'
import * as S from './Style'

const ImageUploadButton = ({ isMultiple }) => {
  return (
    <S.ImageUploadButtonWrapper>
      + 이미지 첨부
      <S.FileInput type="file" multiple={isMultiple} />
    </S.ImageUploadButtonWrapper>
  )
}

ImageUploadButton.propTypes = {
  isMultiple: PropTypes.bool,
}

ImageUploadButton.defaultProps = {
  isMultiple: true,
}

export default ImageUploadButton
