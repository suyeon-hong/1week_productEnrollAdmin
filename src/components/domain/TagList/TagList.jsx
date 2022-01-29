import PropTypes from 'prop-types'
import * as S from './Style'
import { TagItem } from '../TagSearchModal/Style'

const TagList = ({ tags, removeTag }) => {
  return (
    <S.TagListWrapper>
      지정된 필터 태그
      <S.TagList>
        {tags.map((tag) => (
          <TagItem className={'selected'} key={tag} onClick={removeTag}>
            {tag}
          </TagItem>
        ))}
      </S.TagList>
    </S.TagListWrapper>
  )
}

TagList.propTypes = {
  tags: PropTypes.array,
}

export default TagList
