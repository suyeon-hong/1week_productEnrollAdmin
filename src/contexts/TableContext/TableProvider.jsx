import { createContext, useContext, useReducer } from 'react'
import { initialValue, reducer } from './reducer'

const TableStateContext = createContext(null)
const TableDispatchContext = createContext(null)

export const TableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <TableDispatchContext.Provider value={dispatch}>
      <TableStateContext.Provider value={state}>
        {children}
      </TableStateContext.Provider>
    </TableDispatchContext.Provider>
  )
}

export const useTableState = () => {
  const state = useContext(TableStateContext)
  if (!state) {
    throw new Error('table state context error')
  }
  return state
}

export const useTableDispatch = () => {
  const dispatch = useContext(TableDispatchContext)
  if (!dispatch) {
    throw new Error('table dispatch context error')
  }
  return dispatch
}
