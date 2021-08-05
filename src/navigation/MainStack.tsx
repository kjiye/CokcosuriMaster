import {
  basicHeader,
  commonHeaderOption,
} from '../components/Header/HeaderOption';
import {DrawerActions} from '@react-navigation/native';
import DrawerMenuSvg from '../../assets/svg/ic_back.svg'; // 임시로 넣은 drawer
import MainTab from './MainTab';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import WorkDetailScreen from '../screens/Detail/WorkDetail';
import WorkingBeforeScreen from '../screens/Working/WorkingBefore';
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
      {/* header 처리 container로 변경 */}
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
          title: '작업 진행중',
          isRight: true,
          buttonType: 'text',
          buttonText: '작업불가',
          buttonTextColor: '#b4b4b4',
          buttonPress: () => {
            navigation.navigate('WorkingImpossibleScreen');
          },
        })}
      />
      <Stack.Screen
        name={'WorkingImpossible'}
        component={WorkingImpossibleScreen}
        options={basicHeader({
          title: '작업불가',
        })}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
