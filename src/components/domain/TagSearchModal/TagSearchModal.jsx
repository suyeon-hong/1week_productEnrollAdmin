import PropTypes from 'prop-types'
import * as S from './Style'
import { Box } from '@components/base'
import { useCallback, useEffect, useState } from 'react'
import { debounceGenerator } from '../../../utils/functions'
import useFetch from '../../../hooks/useFetch'

const TagSearchModal = ({ addTag, selectedTags }) => {
  const { tags } = useFetch('tags.json')
  const [keyword, setKeyword] = useState('')
  const [filteredTags, setFilteredTags] = useState([])
  const debounce = useCallback(debounceGenerator(400), [])

  useEffect(() => {
    if (!tags) {
      return
    }
    if (!keyword.length) {
      setFilteredTags(tags)
      return
    }
    debounce(() => {
      setFilteredTags(tags.filter((tag) => tag.includes(keyword)))
    })
  }, [tags, keyword])

  const handleClick = (e) => {
    const nextTag = e.target.innerHTML
    addTag((tags) => {
      if (~tags.findIndex((tag) => tag === nextTag)) {
        return tags
      }
      return [...tags, nextTag]
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
              <li key={tag + index} onClick={handleClick}>
                {tag}
              </li>
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
            <li key={tag} onClick={handleClick}>
              {tag}
            </li>
          ))}
        </S.TagList>
      </Box>
    </S.TagSearchModalWrapper>
  )
}

TagSearchModal.propTypes = {
  addTag: PropTypes.func,
  selectedTags: PropTypes.array,
}

export default TagSearchModal
