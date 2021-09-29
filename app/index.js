import React from 'react';

import { UserProvider } from './store'
import { ThemeProvider } from './theme';
import { Container } from './components'
import Nav from './nav'

export default App = () => (
  <UserProvider>
    <ThemeProvider>
      <Container>
        <Nav />
      </Container>
    </ThemeProvider>
  </UserProvider>
)