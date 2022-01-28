import { useState } from 'react'

const useModal = (initShow = false) => {
  const [isShowing, setIsShowing] = useState(initShow)

  const toggle = (e) => {
    const target = e.target

    if (target.closest('.close')) {
      setIsShowing(!isShowing)
      return
    }
    if (target.closest('.contents')) {
      return
    }
    setIsShowing(!isShowing)
  }

  return { isShowing, toggle, setIsShowing }
}

export default useModal
