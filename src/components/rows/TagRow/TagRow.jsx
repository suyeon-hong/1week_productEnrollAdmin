import PropTypes from 'prop-types'
import * as S from './Style'
import { FilterInput, TagList } from '@components/domain'
import { useState } from 'react'

const TagRow = ({}) => {
  const [tags, setTags] = useState([])

  return (
    <>
      <FilterInput addTag={setTags} selectedTags={tags} />
      <TagList tags={tags} />
    </>
  )
}

TagRow.propTypes = {}

export default TagRow
