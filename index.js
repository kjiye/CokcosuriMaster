/**
 * @format
 */

import 'dayjs/locale/ko';
import {AppRegistry, Platform} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
import App from './App';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {name as appName} from './app.json';
import dayjs from 'dayjs';
dayjs.locale('ko');
import messaging from '@react-native-firebase/messaging';

PushNotification.createChannel(
  {
    channelId: 'cokcosuri_master', // (required)
    channelName: '코코수리마스터', // (required)
    channelDescription: '코코수리 마스터 채널', // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  onNotification: function (notification) {
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: false,
  requestPermissions: false,
});

messaging().setBackgroundMessageHandler(async remoteMessage => {
  if (Platform.OS === 'android') {
    if (remoteMessage?.data?.content) {
      PushNotification.localNotification({
        channelId: 'cokcosuri_master',
        message: remoteMessage.data.content,
        title: '코코수리 마스터',
      });
    }
  } else {
    if (remoteMessage?.data?.content) {
      PushNotification.localNotification({
        title: '코코수리 마스터',
        message: remoteMessage.data.content,
      });
    }
  }
});

AppRegistry.registerComponent(appName, () => App);
