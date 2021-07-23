import LoginScreen from '../screens/User/Login';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function LoginStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={'LoginScreen'}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
