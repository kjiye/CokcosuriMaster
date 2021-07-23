import {DrawerActions} from '@react-navigation/native';
import DrawerMenuSvg from '../../assets/svg/ic_back.svg';
import MainTab from './MainTab';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';

const Stack = createStackNavigator();

function MainStack(): JSX.Element {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackImage: () => <DrawerMenuSvg width={20} height={20} />,
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
      <Stack.Screen name={'MainTab'} component={MainTab} />
    </Stack.Navigator>
  );
}

export default MainStack;
