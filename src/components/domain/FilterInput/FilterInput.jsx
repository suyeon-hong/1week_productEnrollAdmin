import PropTypes from 'prop-types'
import { Box, Button, Modal } from '@components/base'
import { TagSearchModal } from '@components/domain'
import { useModal } from '@hooks'

const FilterInput = ({ setTags, selectedTags, removeTag }) => {
  const { isShowing, toggle } = useModal()

  return (
    <div onClick={toggle}>
      <Box
        width={'100%'}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: `5px 12px`,
        }}
      >
        <div>필터태그를 검색해 주세요.</div>
        <Button width={70} height={35}>
          검색
        </Button>
      </Box>
      <Modal isShowing={isShowing} close={toggle}>
        <TagSearchModal
          setTags={setTags}
          selectedTags={selectedTags}
          removeTag={removeTag}
        />
      </Modal>
    </div>
  )
}

FilterInput.propTypes = {
  setTags: PropTypes.func,
  selectedTags: PropTypes.array,
  removeTag: PropTypes.func,
}

export default FilterInput
