import PropTypes from 'prop-types'
import * as S from './Style'

const ImageUploadButton = ({ isMultiple = true, upload }) => {
  const handleChange = (e) => {
    const addFiles = [...e.target.files].map((file) => file.name)
    if (isMultiple) {
      upload((files) => [...files, ...addFiles])
      return
    }
    upload([...addFiles])
  }

  return (
    <S.ImageUploadButtonWrapper>
      + 이미지 첨부
      <S.FileInput
        type="file"
        multiple={isMultiple}
        onChange={handleChange}
        accept={'image/*'}
      />
    </S.ImageUploadButtonWrapper>
  )
}

ImageUploadButton.propTypes = {
  isMultiple: PropTypes.bool,
  upload: PropTypes.func,
}

export default ImageUploadButton
