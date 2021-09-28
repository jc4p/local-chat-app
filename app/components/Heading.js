import React, { useContext } from 'react'
import { Text } from 'react-native'

import { useTheme } from '../theme'
import { userContext, getThemeOverrides } from '../store/index'

export default Heading = ({ children }) => {
  const [userSettings] = useContext(userContext)  
  const theme = useTheme(getThemeOverrides(userSettings))

  return (
    <Text style={theme.text.heading}>
      { children }
    </Text>
  )
}
