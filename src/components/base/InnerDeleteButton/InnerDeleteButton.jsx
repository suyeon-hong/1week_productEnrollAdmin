import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const InnerDeleteButton = ({ images }) => {
  const [state, setState] = useState({
    images,
  })

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      images: images.filter((image) => image.id !== id),
    })
  }
  return (
    <S.DeleteButtonWrapper>
      {images.map((image) => (
        <S.Content>
          <S.DeleteButton
            type="button"
            onClick={() => handleClickDeleteTask(image.id)}
          >
            {image.title}
            <S.XText>X</S.XText>
          </S.DeleteButton>
        </S.Content>
      ))}
    </S.DeleteButtonWrapper>
  )
}

InnerDeleteButton.propTypes = {
  images: PropTypes.object,
}

InnerDeleteButton.defaultProps = {
  images: [],
}

export default InnerDeleteButton
