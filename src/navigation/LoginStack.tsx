import {
  basicHeader,
  commonHeaderOption,
} from '../components/Header/HeaderOption';
import FindPasswordScreen from '../screens/User/Password/FindPassword';
import I18n from '../utils/i18nHelpers';
import JoinScreen from '../screens/User/Join';
import LoginScreen from '../screens/User/Login';
import React from 'react';
import TermsAgreementScreen from '../screens/User/TermsAgreement';
import UpdatePasswordScreen from '../screens/User/Password/UpdatePassword';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// status bar 추가
function LoginStack(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{...commonHeaderOption}}>
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'TermsAgreementScreen'}
        component={TermsAgreementScreen}
        options={basicHeader({
          isBack: true,
        })}
      />
      <Stack.Screen
        name={'JoinScreen'}
        component={JoinScreen}
        options={basicHeader({
          title: I18n.t('Header.join'),
        })}
      />
      <Stack.Screen
        name={'FindPasswordScreen'}
        component={FindPasswordScreen}
        options={basicHeader({
          title: I18n.t('Header.find_password'),
        })}
      />
      <Stack.Screen
        name={'UpdatePasswordScreen'}
        component={UpdatePasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
