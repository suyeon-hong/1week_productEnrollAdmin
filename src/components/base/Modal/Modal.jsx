import PropTypes from 'prop-types'
import * as S from './Style'
import * as ReactDOM from 'react-dom'

const $portal = document.querySelector('#modal-root')

const Modal = ({ children, isShowing, close }) => {
  return isShowing && $portal
    ? ReactDOM.createPortal(
        <S.ModalWrapper className={'modal-container'} onClick={close}>
          <div className={'contents'}>{children}</div>
        </S.ModalWrapper>,
        $portal,
      )
    : null
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isShowing: PropTypes.bool,
  close: PropTypes.func,
}

export default Modal
