import { FilterInput, TagList } from '@components/domain'
import {
  useTableDispatch,
  useTableState,
} from '@contexts/TableContext/TableProvider'
import { CHANGE_PRODUCTION_INFORMATION } from '@contexts/TableContext/types'

const TagRow = ({}) => {
  const { productionInformation } = useTableState()
  const { tags } = productionInformation
  const dispatch = useTableDispatch()

  const removeTag = (e) => {
    const removedTag = e.target.innerHTML
    dispatch({
      type: CHANGE_PRODUCTION_INFORMATION,
      payload: { tags: tags.filter((tag) => tag !== removedTag) },
    })
  }

  return (
    <>
      <FilterInput selectedTags={tags} removeTag={removeTag} />
      <TagList tags={tags} removeTag={removeTag} />
    </>
  )
}
export default TagRow
