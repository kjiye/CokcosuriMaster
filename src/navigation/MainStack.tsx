import MainTab from './MainTab';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainStack(): JSX.Element {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={'MainTab'} component={MainTab} />
    </Stack.Navigator>
  );
}

export default MainStack;
