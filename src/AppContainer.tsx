import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './navigation/RootStack';
import SplashScreen from 'react-native-splash-screen';
import {getToken} from './utils/storageUtils';
import {tokenVar} from './apollo';
import {useCallback} from 'react';
import {useEffect} from 'react';

function AppContainer(): JSX.Element {
  const init = useCallback(async () => {
    tokenVar(await getToken());
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    init();
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default AppContainer;
