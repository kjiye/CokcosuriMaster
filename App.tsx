import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {ApolloProvider} from '@apollo/client';
import AppContainer from './src/AppContainer';
import {AppTheme} from './src/themes/theme';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {ThemeProvider} from 'styled-components/native';
import client from './src/apollo';
import messaging from '@react-native-firebase/messaging';

function App(): JSX.Element {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (Platform.OS === 'ios') {
        if (remoteMessage?.data?.content) {
          PushNotification.localNotification({
            title: '코코수리 마스터',
            message: remoteMessage.data.content,
          });
        }
      } else {
        if (remoteMessage?.data?.content) {
          PushNotification.localNotification({
            channelId: 'cokcosuri_master',
            message: remoteMessage.data.content,
            title: '코코수리 마스터',
          });
        }
      }
    });
    return unsubscribe;
  }, []);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={AppTheme}>
        <AppContainer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
