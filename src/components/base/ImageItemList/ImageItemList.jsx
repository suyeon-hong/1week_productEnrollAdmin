import PropTypes from 'prop-types'
import * as S from './Style'

const ImageItemList = ({ itemList, upload }) => {
  const images = itemList.map((txt, index) => ({ id: index, title: txt }))

  const handleClick = (id) => {
    const changeArray = []
    const list = images.filter((image) => Object.values(image)[0] !== id)
    list.map((t) => changeArray.push(Object.values(t)[1]))
    upload(changeArray)
  }

  return (
    <S.ImageItemListWrapper>
      {images.map((image) => (
        <S.ImageItem
          key={Object.values(image)[0]}
          onClick={() => handleClick(Object.values(image)[0])}
        >
          {Object.values(image)[1]}
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
