import PropTypes from 'prop-types'
import * as S from './Style'

const ImageItemList = ({ itemList, upload }) => {
  const handleClick = (e) => {
    upload(itemList.filter((item) => item !== e.target.innerHTML))
  }

  return (
    <S.ImageItemListWrapper>
      {itemList.map((item) => (
        <S.ImageItem key={item} onClick={handleClick}>
          {item}
        </S.ImageItem>
      ))}
    </S.ImageItemListWrapper>
  )
}

ImageItemList.propTypes = {
  itemList: PropTypes.array,
  upload: PropTypes.func,
}

export default ImageItemList
