import {AppTheme} from '../../themes/theme';
import QnAListScreen from './QnAList';
import QnARegScreen from './QnAReg';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const {colors, fonts}: any = AppTheme;

function QnATab(): JSX.Element {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: fonts.large,
          fontWeight: '500',
        },
        indicatorStyle: {
          height: 4,
          backgroundColor: colors.black[1],
        },
      }}>
      <Tab.Screen
        name={'QnARegScreen'}
        component={QnARegScreen}
        options={{tabBarLabel: '문의하기'}}
      />
      <Tab.Screen
        name={'QnAListScreen'}
        component={QnAListScreen}
        options={{tabBarLabel: '문의내역'}}
      />
    </Tab.Navigator>
  );
}

export default QnATab;
