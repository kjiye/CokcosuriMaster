import 'react-native-gesture-handler';
import MainContainer from './screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './navigation/RootStack';

function AppContainer(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default AppContainer;
