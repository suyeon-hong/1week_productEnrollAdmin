import PropTypes from 'prop-types'
import * as S from './Style'

const TagList = ({ tags }) => {
  return (
    <S.TagListWrapper>
      지정된 필터 태그
      <S.TagList>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </S.TagList>
    </S.TagListWrapper>
  )
}

TagList.propTypes = {
  tags: PropTypes.array,
}

export default TagList
