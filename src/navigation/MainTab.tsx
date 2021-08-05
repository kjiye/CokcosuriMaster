import React, {useState} from 'react';
import CancelScreen from '../screens/Main/Cancel';
import DoneScreen from '../screens/Main/Done';
import {LogBox} from 'react-native';
import WaitScreen from '../screens/Main/Wait';
import WorkingScreen from '../screens/Main/Working';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createMaterialTopTabNavigator();

function MainTab(): JSX.Element {
  const [radiusType, setRadiusType] = useState<'left' | 'right' | undefined>();

  const props = {
    sideRadiusType: (type: 'left' | 'right' | undefined) => {
      setRadiusType(type);
    },
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          borderBottomLeftRadius: 23,
          borderBottomRightRadius: 23,
        },
        tabStyle: {},
        labelStyle: {
          paddingVertical: 5,
          fontSize: 18,
          fontWeight: '600',
        },
        indicatorStyle: {
          backgroundColor: '#eb7203',
          height: '100%',
          borderBottomLeftRadius:
            !!radiusType && radiusType === 'left' ? 23 : 0,
          borderBottomRightRadius:
            !!radiusType && radiusType === 'right' ? 23 : 0,
        },
        inactiveTintColor: '#b4b4b4',
        activeTintColor: '#ffffff',
      }}>
      <Tab.Screen
        options={{tabBarLabel: '대기'}}
        name={'WaitScreen'}
        component={WaitScreen}
        initialParams={{...props}}
      />
      <Tab.Screen
        options={{tabBarLabel: '진행'}}
        name={'WorkingScreen'}
        component={WorkingScreen}
        initialParams={{...props}}
      />
      <Tab.Screen
        options={{tabBarLabel: '완료'}}
        name={'DoneScreen'}
        component={DoneScreen}
        initialParams={{...props}}
      />
      <Tab.Screen
        options={{tabBarLabel: '취소'}}
        name={'CancelScreen'}
        component={CancelScreen}
        initialParams={{...props}}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
