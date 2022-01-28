import PropTypes from 'prop-types'
import { Modal, Box, Button } from '@components/base'
import { useModal } from '@hooks'
import theme from '@style/theme'
import * as S from './Style'

const AlertModal = ({ isCancelButton, isValidate, children }) => {
  const { isShowing, toggle } = useModal(true)

  return (
    !isValidate &&
    isShowing && (
      <Modal isShowing={isShowing} close={toggle}>
        <Box
          width={400}
          height={200}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <S.Text>{children}</S.Text>
          <S.ButtonWrapper>
            {' '}
            {isCancelButton && (
              <Button
                color="#fff"
                background={theme.color.borderDarker}
                border="inherit"
                onClick={() => toggle(false)}
              >
                취소
              </Button>
            )}
            <Button
              color="#fff"
              background={theme.color.purple}
              border="inherit"
              onClick={() => toggle(false)}
            >
              확인
            </Button>
          </S.ButtonWrapper>
        </Box>
      </Modal>
    )
  )
}

AlertModal.propTypes = {
  isCancelButton: PropTypes.bool,
}

AlertModal.defaultProps = {
  isCancelButton: true,
}

export default AlertModal
