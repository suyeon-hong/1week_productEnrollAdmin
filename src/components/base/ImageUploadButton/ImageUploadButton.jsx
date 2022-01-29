import PropTypes from 'prop-types'
import * as S from './Style'

const ImageUploadButton = ({
  isImage = false,
  isMultiple = true,
  upload,
  itemList,
}) => {
  const handleChange = (e) => {
    if (isImage) {
      const imageFileInfo = e.target.files[0]
      upload({
        name: imageFileInfo.name,
        src: URL.createObjectURL(imageFileInfo),
      })
    } else {
      const addFiles = [...e.target.files].map((file) => file.name)
      if (isMultiple) {
        upload([...itemList, ...addFiles])
        return
      }
      upload([...addFiles])
    }
  }

  return (
    <S.ImageUploadButtonWrapper>
      + 이미지 첨부
      <S.FileInput
        type="file"
        accept={isImage ? 'image/*' : '*'}
        multiple={isMultiple}
        onChange={handleChange}
      />
    </S.ImageUploadButtonWrapper>
  )
}

ImageUploadButton.propTypes = {
  isImage: PropTypes.bool,
  isMultiple: PropTypes.bool,
  upload: PropTypes.func,
}

export default ImageUploadButton
