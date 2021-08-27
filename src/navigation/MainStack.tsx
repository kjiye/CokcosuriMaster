import {
  basicHeader,
  commonHeaderOption,
} from '../components/Header/HeaderOption';
import HeaderButton from '../components/Header/HeaderButton';
import I18n from '../utils/i18nHelpers';
import MainTab from './MainTab';
import PaymentScreen from '../screens/Working/Payment';
import React from 'react';
import WorkDetailScreen from '../screens/Detail/WorkDetail';
import WorkingBeforeScreen from '../screens/Working/WorkingBefore';
import WorkingDoneScreen from '../screens/Working/WorkingDone';
import WorkingImpossibleScreen from '../screens/Working/WorkingImpossible';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainStack(): JSX.Element {
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
