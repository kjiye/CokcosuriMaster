import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import I18n from '../utils/i18nHelpers';
import MainScreen from '../screens/Main';
import React from 'react';
import {WorkState} from '../../__generated__/globalTypes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTheme} from 'styled-components';

const TAB_RADIUS = 23;
const TAB_VERTICAL_PADDING = 5;

const Tab = createMaterialTopTabNavigator();

function MainTab(): JSX.Element {
  const route: any = useRoute();
  const theme: any = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={'WaitScreen'}
      tabBarOptions={{
        style: {
          borderBottomLeftRadius: TAB_RADIUS,
          borderBottomRightRadius: TAB_RADIUS,
        },
        tabStyle: {},
        labelStyle: {
          paddingVertical: TAB_VERTICAL_PADDING,
          fontSize: theme.fonts.large,
          fontWeight: 'bold',
        },
        indicatorStyle: {
          backgroundColor: theme.colors.primary,
          height: '100%',
          borderBottomLeftRadius: (() => {
            const screenName = getFocusedRouteNameFromRoute(route);
            if (!screenName || screenName === 'WaitScreen') {
              return TAB_RADIUS;
            }
            return 0;
          })(),
          borderBottomRightRadius: (() => {
            const screenName = getFocusedRouteNameFromRoute(route);
            if (screenName === 'CancelScreen') {
              return TAB_RADIUS;
            }
            return 0;
          })(),
        },
        inactiveTintColor: theme.colors.grey[5],
        activeTintColor: theme.colors.grey[0],
      }}>
      <Tab.Screen
        options={{tabBarLabel: I18n.t('Tab.wait')}}
        name={'WaitScreen'}
        component={MainScreen}
        initialParams={{state: [WorkState.WAIT]}}
      />
      <Tab.Screen
        options={{tabBarLabel: I18n.t('Tab.working')}}
        name={'WorkingScreen'}
        component={MainScreen}
        initialParams={{
          state: [WorkState.RESERVE, WorkState.WORKING],
        }}
      />
      <Tab.Screen
        options={{tabBarLabel: I18n.t('Tab.done')}}
        name={'DoneScreen'}
        component={MainScreen}
        initialParams={{state: [WorkState.DONE]}}
      />
      <Tab.Screen
        options={{tabBarLabel: I18n.t('Tab.cancel')}}
        name={'CancelScreen'}
        component={MainScreen}
        initialParams={{state: [WorkState.CANCEL]}}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
