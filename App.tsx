import 'react-native-gesture-handler';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import AppContainer from './src/AppContainer';
import {AppTheme} from './src/themes/theme';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';

const client = new ApolloClient({
  uri: 'http://192.168.1.249:4000/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

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
