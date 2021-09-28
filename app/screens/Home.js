import React, { useContext } from 'react'

import { userContext } from '../store'
import { setBackgroundColor, setBaseFontFamily } from '../store/actions'

import { Page, Title, Text, ColorPicker, FontPicker } from '../components'
import { View } from 'react-native'

export default HomeScreen = () => {
  const [user, userDispatch] = useContext(userContext)

  return (
    <Page>
      <Title>Local Chat App</Title>
      <Text>Hi love, how are you feeling today?</Text>
      <View>
        <ColorPicker onPress={(c) => { userDispatch(setBackgroundColor(c)) } } />
      </View>
      {user.backgroundColor &&
        <Text centered>Your chosen background color: { user.backgroundColor }</Text>
      }
      {!user.backgroundColor &&
        <Text centered>Using default background color</Text>
      }
      <View>
        <FontPicker onPress={(f) => { userDispatch(setBaseFontFamily(f) )} } />
      </View>
    </Page>
  )
}
