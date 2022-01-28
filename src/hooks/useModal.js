import { useState } from 'react'

const useModal = (initShow = false) => {
  const [isShowing, setIsShowing] = useState(initShow)

  const toggle = (eventOrBool) => {
    if (typeof eventOrBool === 'boolean') {
      setIsShowing(eventOrBool)
      return
    }

    const target = eventOrBool.target

    if (target.closest('.close')) {
      setIsShowing(!isShowing)
      return
    }
    if (target.closest('.contents')) {
      return
    }
    setIsShowing(!isShowing)
  }

  return { isShowing, toggle }
}

export default useModal
