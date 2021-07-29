import {DrawerActions} from '@react-navigation/native';
import DrawerMenuSvg from '../../assets/svg/ic_back.svg';
import MainTab from './MainTab';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import WorkDetailScreen from '../../src/screens/Detail/WorkDetail';
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
      <Stack.Screen name={'WorkDetail'} component={WorkDetailScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
