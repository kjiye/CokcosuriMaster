import React, {useCallback, useLayoutEffect} from 'react';
import {
  basicHeader,
  commonHeaderOption,
} from '../components/Header/HeaderOption';
import {useMutation, useReactiveVar} from '@apollo/client';
import HeaderButton from '../components/Header/HeaderButton';
import I18n from '../utils/i18nHelpers';
import MainTab from './MainTab';
import PaymentScreen from '../screens/Working/Payment';
import {Platform} from 'react-native';
import {REG_PUSH_TOKEN} from '../screens/Main/main.queries';
import WorkDetailScreen from '../screens/Detail/WorkDetail';
import WorkingBeforeScreen from '../screens/Working/WorkingBefore';
import WorkingDoneScreen from '../screens/Working/WorkingDone';
import WorkingImpossibleScreen from '../screens/Working/WorkingImpossible';
import {createStackNavigator} from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';
import {tokenVar} from '../apollo';

const Stack = createStackNavigator();

function MainStack(): JSX.Element {
  const isLoggedIn = !!useReactiveVar(tokenVar);
  const [regPushToken] = useMutation(REG_PUSH_TOKEN);

  const sendToken = useCallback(async () => {
    const pushToken = await messaging().getToken();
    regPushToken({
      variables: {
        deviceType: Platform.OS === 'ios' ? 'APNS' : 'GCM',
        deviceToken: pushToken,
      },
    });
  }, []);

  useLayoutEffect(() => {
    const checkAlarmPermission = async () => {
      const currentStatus = await messaging().hasPermission();
      if (currentStatus === 1) {
        sendToken();
      } else if (currentStatus === -1) {
        const requestStatus = await messaging().requestPermission();
        if (requestStatus === 1) {
          sendToken();
        }
      }
    };
    isLoggedIn && checkAlarmPermission();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        ...commonHeaderOption,
        headerLeft: () => {
          return <HeaderButton isBack={false} buttonType={'drawer'} />;
        },
      }}>
      <Stack.Screen
        name={'MainTab'}
        component={MainTab}
        options={basicHeader({
          isTitleLogo: true,
          isBack: false,
          buttonType: 'drawer',
        })}
      />
      <Stack.Screen
        name={'WorkDetail'}
        component={WorkDetailScreen}
        options={basicHeader({
          title: '',
        })}
      />
      <Stack.Screen name={'WorkingBefore'} component={WorkingBeforeScreen} />
      <Stack.Screen
        name={'WorkingImpossible'}
        component={WorkingImpossibleScreen}
        options={basicHeader({
          title: I18n.t('Header.working_impossible'),
        })}
      />
      <Stack.Screen
        name={'WorkingDone'}
        component={WorkingDoneScreen}
        options={basicHeader({
          title: I18n.t('Header.working_done'),
        })}
      />
      <Stack.Screen
        name={'Payment'}
        component={PaymentScreen}
        options={basicHeader({
          title: I18n.t('Header.payment'),
        })}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
