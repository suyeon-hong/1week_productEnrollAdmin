import PropTypes from 'prop-types'
import * as S from './Style'

const TagList = ({ tags }) => {
  return (
    <>
      지정된 필터 태그
      <S.TagListWrapper>
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </S.TagListWrapper>
    </>
  )
}

TagList.propTypes = {
  tags: PropTypes.array,
}

export default TagList
