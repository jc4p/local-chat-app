import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { userContext, getThemeOverrides } from './store';
import { useTheme } from './theme'
import { HomeScreen } from './screens';

const Stack = createNativeStackNavigator();

export default Nav = () => {
  const [userSettings] = useContext(userContext)
  const theme = useTheme(getThemeOverrides(userSettings))

  const headerStyleOptions = {
    headerStyle: {
      backgroundColor: theme.backgroundColor
    },
    headerTitleStyle: theme.text.heading
  }

  return (
    <NavigationContainer theme={{ colors: { backgroundColor: null } }}>
      <Stack.Navigator screenOptions={headerStyleOptions}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ header: () => null }} />
        <Stack.Screen name='SetColor' component={HomeScreen} />
        <Stack.Screen name='SetFont' component={HomeScreen} />
        <Stack.Screen name='Login' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}