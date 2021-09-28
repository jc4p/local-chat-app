import React, { useContext } from 'react'
import { SafeAreaView, View } from 'react-native'

import { useTheme } from '../theme'
import { userContext, getThemeOverrides } from '../store/index'

const Container = ({ children }) => {
  const [userSettings] = useContext(userContext)  
  const theme = useTheme(getThemeOverrides(userSettings))

  return (
    <SafeAreaView style={theme.views.container}>
      { children }
    </SafeAreaView>
  )
}

const Page = ({ children }) => {
  const theme = useTheme()

  // uses a View not a SafeAreaView since it's already wrapped in one
  return (
    <View style={theme.views.page}>
      { children }
    </View>
  )
}

export { Container as default, Page };
