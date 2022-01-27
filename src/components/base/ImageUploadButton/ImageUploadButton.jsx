import PropTypes from 'prop-types'
import * as S from './Style'

const ImageUploadButton = ({ isMultiple = true, upload }) => {
  const handleChange = (e) => {
    const addFiles = [...e.target.files].map((file) => file.name)
    upload((files) => [...files, ...addFiles])
  }

  return (
    <S.ImageUploadButtonWrapper>
      + 이미지 첨부
      <S.FileInput type="file" multiple={isMultiple} onChange={handleChange} />
    </S.ImageUploadButtonWrapper>
  )
}

ImageUploadButton.propTypes = {
  isMultiple: PropTypes.bool,
  upload: PropTypes.func,
}

export default ImageUploadButton
