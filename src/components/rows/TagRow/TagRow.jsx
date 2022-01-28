import { FilterInput, TagList } from '@components/domain'
import { useState } from 'react'

const TagRow = ({}) => {
  const [tags, setTags] = useState([])

  const removeTag = (e) => {
    const removedTag = e.target.innerHTML
    setTags((tags) => tags.filter((tag) => tag !== removedTag))
  }

  return (
    <>
      <FilterInput
        setTags={setTags}
        selectedTags={tags}
        removeTag={removeTag}
      />
      <TagList tags={tags} removeTag={removeTag} />
    </>
  )
}
export default TagRow
