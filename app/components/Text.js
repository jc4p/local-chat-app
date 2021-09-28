import React, { useContext } from 'react'
import { Text as RNText } from 'react-native'

import { useTheme } from '../theme'
import { userContext, getThemeOverrides } from '../store/index'

export default Text = ({ children, centered, fontFamily, extraStyles }) => {
  const [userSettings] = useContext(userContext)  
  const theme = useTheme(getThemeOverrides(userSettings))

  return (
    <RNText style={[theme.text.body,
      centered && { textAlign: 'center' },
      fontFamily && { fontFamily: fontFamily },
      extraStyles && { ...extraStyles }
    ]}>
      { children }
    </RNText>
  )
}
