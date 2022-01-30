import { createContext, useReducer } from 'react'
import { initialValue, reducer } from './reducer'

const InformationContext = createContext(initialValue)
const { Provider } = InformationContext

const InformationProvider = ({ children }) => {
  const [informations, dispatch] = useReducer(reducer, [{ ...initialValue }])
  // @NOTE: reducer 초기값이 날아옴

  return <Provider value={{ informations, dispatch }}>{children}</Provider>
}

export { InformationContext, InformationProvider }
