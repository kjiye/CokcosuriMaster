import {
  basicHeader,
  commonHeaderOption,
} from '../components/Header/HeaderOption';
import {DrawerActions} from '@react-navigation/native';
import DrawerMenuSvg from '../../assets/svg/ic_back.svg';
import I18n from '../utils/i18nHelpers';
import MainTab from './MainTab';
import PaymentScreen from '../screens/Working/Payment';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import WorkDetailScreen from '../screens/Detail/WorkDetail';
import WorkingBeforeScreen from '../screens/Working/WorkingBefore';
import WorkingDoneScreen from '../screens/Working/WorkingDone';
import WorkingImpossibleScreen from '../screens/Working/WorkingImpossible';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';

const Stack = createStackNavigator();

function MainStack(): JSX.Element {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        ...commonHeaderOption,
        // headerBackImage: () => <DrawerMenuSvg width={20} height={20} />,
        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}>
              <DrawerMenuSvg width={20} height={20} />
            </TouchableOpacity>
          );
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
      {/* header container 에서 처리 */}
      <Stack.Screen
        name={'WorkDetail'}
        component={WorkDetailScreen}
        options={basicHeader({
          title: '[고양]전등 갈아주세요',
        })}
      />
      <Stack.Screen
        name={'WorkingBefore'}
        component={WorkingBeforeScreen}
        options={basicHeader({
          title: I18n.t('Header.working'),
          isRight: true,
          buttonType: 'text',
          buttonText: I18n.t('Header.button.working_impossible'),
          buttonTextColor: '#b4b4b4',
          buttonPress: () => {
            navigation.navigate('WorkingImpossible');
          },
        })}
      />
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
