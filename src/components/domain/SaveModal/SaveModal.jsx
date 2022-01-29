import PropTypes from 'prop-types'
import { Box, Button } from '../../base'
import theme from '../../../style/theme'
import * as S from './Style'

const SaveModal = ({ close, children }) => {
  return (
    <Box width={250} height={150} sytle={{ background: 'black' }}>
      <S.Wrapper>
        {children}
        <Button
          width={70}
          height={40}
          color="#fff"
          background={theme.color.purple}
          border="inherit"
          onClick={() => close(false)}
          style={{ margin: `50px 0 0 130px` }}
        >
          확인
        </Button>
      </S.Wrapper>
    </Box>
  )
}

SaveModal.propTypes = {
  close: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default SaveModal
