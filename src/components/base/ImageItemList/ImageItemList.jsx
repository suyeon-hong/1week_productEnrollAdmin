import PropTypes from 'prop-types'
import * as S from './Style'

const ImageItemList = ({ itemList, upload }) => {
  const handleClick = (id) => {
    const changeArray = itemList.filter((item, index) => index !== id)
    upload(changeArray)
  }

  return (
    <S.ImageItemListWrapper>
      {itemList.map((item, index) => (
        <S.ImageItem key={index}>
          {item}
          <S.XButton type="button" onClick={() => handleClick(index)}>
            ❎
          </S.XButton>
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
