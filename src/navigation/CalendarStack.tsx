import CalendarDetailScreen from '../screens/Calendar/CalendarDetail';
import CalendarMainScreen from '../screens/Calendar/CalendarMain';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function CalendarStack(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'CalendarMain'} component={CalendarMainScreen} />
      <Stack.Screen name={'CalendarDetail'} component={CalendarDetailScreen} />
    </Stack.Navigator>
  );
}

export default CalendarStack;
