import { createContext, useContext, useReducer } from 'react'
import { initialValue, reducer } from './reducer'

const InformationContext = createContext(initialValue)
const { Provider } = InformationContext

const InformationProvider = ({ children }) => {
  const [informations, dispatch] = useReducer(reducer, [])

  return <Provider value={{ informations, dispatch }}>{children}</Provider>
}

export { InformationContext, InformationProvider }
