import React, { useState } from 'react'
import PropTypes from 'prop-types'
import theme from '@style/theme'
import * as S from './Style'

const DeleteButton = () => {
  const [state, setState] = useState({
    newId: 100,
    imageTitle: '',
    images: [],
  })

  const { newId, imageTitle, images } = state

  function handleChangeTitle(event) {
    setState({
      ...state,
      imageTitle: event.target.value,
    })
  }

  function handleClickAddTask() {
    setState({
      ...state,
      newId: newId + 1,
      imageTitle: '',
      images: [...images, { id: newId, title: imageTitle }],
    })
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      images: images.filter((image) => image.id !== id),
    })
  }
  return (
    <S.DeleteButtonWrapper>
      <S.Content>
        <input
          type="text"
          placeholder="+이미지 첨부"
          value={imageTitle}
          onChange={handleChangeTitle}
        />
        <button type="button" onClick={handleClickAddTask}>
          추가
        </button>
      </S.Content>
      <S.Content>
        <ol>
          {images.map((image) => (
            <li>
              {image.title}
              <S.XButton
                type="button"
                onClick={() => handleClickDeleteTask(image.id)}
              >
                ❎
              </S.XButton>
            </li>
          ))}
        </ol>
      </S.Content>
    </S.DeleteButtonWrapper>
  )
}

DeleteButton.propTypes = {
  newId: PropTypes.number,
  imageTitle: PropTypes.string,
  images: PropTypes.object,
}

DeleteButton.defaultProps = {
  newId: 100,
  imageTitle: '',
  images: [],
}

export default DeleteButton
