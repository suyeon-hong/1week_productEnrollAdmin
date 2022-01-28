import PropTypes from 'prop-types'
import * as S from './Style'
import { Input, Box } from '@components/base'
import { useEffect, useState } from 'react'

const TagSearchModal = ({ addTag, selectedTags }) => {
  const [tags, setTags] = useState([])
  const [keyword, setKeyword] = useState('')

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

  useEffect(async () => {
    const response = await fetch('tags.json')
    const { tags } = await response.json()
    setTags(tags)
  }, [])

  return (
    <S.TagSearchModalWrapper>
      <Input width={'95%'} height={30} placeholder={'검색어를 입력하세요.'} />
      <Box width={'95%'} height={'250px'}>
        <S.TagList>
          {tags.map((tag) => (
            <li key={tag} onClick={handleClick}>
              {tag}
            </li>
          ))}
        </S.TagList>
      </Box>
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
