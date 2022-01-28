import PropTypes from 'prop-types'
import { Box, Button, Modal } from '@components/base'
import { TagSearchModal } from '@components/domain'
import { useModal } from '@hooks'

const FilterInput = ({ addTag, selectedTags }) => {
  const { isShowing, toggle } = useModal()

  return (
    <div onClick={toggle}>
      <Box
        width={500}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>필터태그를 검색해 주세요.</div>
        <Button width={150} height={25}>
          검색
        </Button>
      </Box>
      <Modal isShowing={isShowing} close={toggle}>
        <TagSearchModal addTag={addTag} selectedTags={selectedTags} />
      </Modal>
    </div>
  )
}

FilterInput.propTypes = {
  addTag: PropTypes.func,
  selectedTags: PropTypes.array,
}

export default FilterInput
