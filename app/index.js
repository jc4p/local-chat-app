import React from 'react';

import { UserProvider } from './store'
import { ThemeProvider } from './theme';
import { Container } from './components'
import { HomeScreen } from './screens'

export default App = () => (
  <UserProvider>
    <ThemeProvider>
      <Container>
        <HomeScreen />
      </Container>
    </ThemeProvider>
  </UserProvider>
)