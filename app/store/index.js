import React, { useReducer } from 'react'
import { userReducer, initialState, getThemeOverrides } from './reducers';

const userContext = React.createContext({})

export const Provider = userContext.Provider;
export const Consumer = userContext.Consumer;

const UserProvider = (props) => {
  const userStateWithDispatcher = useReducer(userReducer, initialState)
  return (
    <Provider value={userStateWithDispatcher}>
      {props.children}
    </Provider>
  )
}
export { UserProvider, getThemeOverrides, userContext}
