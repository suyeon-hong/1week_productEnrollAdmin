import { createContext, useContext, useReducer } from 'react'
import { initialValue, reducer } from './reducer'

const OptionContext = createContext(initialValue)
const { Provider } = OptionContext

const OptionProvider = ({ children }) => {
  const [options, dispatch] = useReducer(reducer, [])

  return <Provider value={{ options, dispatch }}>{children}</Provider>
}

export { OptionContext, OptionProvider }
