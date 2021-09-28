import React, { useContext } from 'react'
import { Text } from './index'
import { useTheme, fontOptions } from '../theme'
import { userContext, getThemeOverrides } from '../store/index'
import { View, TouchableOpacity } from 'react-native'

export default ColorPicker = ({ onPress }) => {
  const [userSettings] = useContext(userContext)
  const theme = useTheme(getThemeOverrides(userSettings))

  const borderColor = theme.textColor

  return (
    <View
      style={{ marginVertical: 20 }}
    >
      {fontOptions.map(f => (
        <View key={`font-option${f.regular.toLowerCase()}`}
          style={{ 
            borderBottomColor: borderColor,
            borderBottomWidth: 1
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => { onPress(f) }}
            style={{ paddingVertical: 12 }}>
            <Text fontFamily={f.regular}>
              {f.label}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}