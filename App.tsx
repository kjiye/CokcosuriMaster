import 'react-native-gesture-handler';
import {ApolloProvider} from '@apollo/client';
import AppContainer from './src/AppContainer';
import {AppTheme} from './src/themes/theme';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import client from './src/apollo';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={AppTheme}>
        <AppContainer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
