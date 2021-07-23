import CancelScreen from '../screens/Main/Cancel';
import DoneScreen from '../screens/Main/Done';
import React from 'react';
import WaitScreen from '../screens/Main/Wait';
import WorkingScreen from '../screens/Main/Working';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MainTab(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'WaitScreen'} component={WaitScreen} />
      <Tab.Screen name={'WorkingScreen'} component={WorkingScreen} />
      <Tab.Screen name={'DoneScreen'} component={DoneScreen} />
      <Tab.Screen name={'CancelScreen'} component={CancelScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
