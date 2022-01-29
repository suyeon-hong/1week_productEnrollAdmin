import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'
import { Box } from '@components/base'
import { debounceGenerator } from '@utils/functions'
import useFetch from '@hooks/useFetch'
import { useTableDispatch } from '@contexts/TableContext/TableProvider'
import { CHANGE_PRODUCTION_INFORMATION } from '@contexts/TableContext/types'

const TagSearchModal = ({ selectedTags, removeTag }) => {
  const { tags } = useFetch('tags.json')
  const [keyword, setKeyword] = useState('')
  const [filteredTags, setFilteredTags] = useState([])
  const debounce = useCallback(debounceGenerator(400), [])
  const dispatch = useTableDispatch()

  useEffect(() => {
    if (!tags) {
      return
    }
    if (!keyword.length) {
      setFilteredTags(tags)
      return
    }
    debounce(() => {
      setFilteredTags(() => tags.filter((tag) => tag.includes(keyword)))
    })
  }, [tags, keyword])

  const addTag = (e) => {
    const nextTag = e.target.innerHTML
    if (~selectedTags.findIndex((tag) => tag === nextTag)) {
      dispatch({
        type: CHANGE_PRODUCTION_INFORMATION,
        payload: { selectedTags },
      })
      return
    }
    dispatch({
      type: CHANGE_PRODUCTION_INFORMATION,
      payload: { tags: [...selectedTags, nextTag] },
    })
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <S.TagSearchModalWrapper>
      <S.Input
        placeholder={'검색어를 입력하세요.'}
        value={keyword}
        onChange={handleChange}
      />
      <Box width={'95%'} height={'250px'}>
        <S.TagList>
          {filteredTags.length ? (
            filteredTags.map((tag, index) => (
              <S.TagItem key={tag + index} onClick={addTag}>
                {tag}
              </S.TagItem>
            ))
          ) : (
            <div>검색 결과가 없습니다.</div>
          )}
        </S.TagList>
      </Box>
      <S.Title>
        <span>선택된 태그</span>
      </S.Title>
      <Box width={'95%'} height={'250px'}>
        <S.TagList>
          {selectedTags.map((tag) => (
            <S.TagItem className={'selected'} key={tag} onClick={removeTag}>
              {tag}
            </S.TagItem>
          ))}
        </S.TagList>
      </Box>
    </S.TagSearchModalWrapper>
  )
}

TagSearchModal.propTypes = {
  addTag: PropTypes.func,
  selectedTags: PropTypes.array,
  removeTag: PropTypes.func,
}

export default TagSearchModal
