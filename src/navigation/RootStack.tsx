import LoginScreen from '../screens/User/Login';
import MainDrawer from './MainDrawer';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const isLoggedIn = true;

function RootStack(): JSX.Element {
  return (
    <Stack.Navigator
      mode={'modal'}
      headerMode={'none'}
      screenOptions={{
        gestureEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({current: {progress}}: any) => {
          return {
            cardStyle: {
              // transform: [
              //   {
              //     translateY: progress.interpolate({
              //       inputRange: [0, 1],
              //       outputRange: [height, 0],
              //       extrapolate: 'clamp',
              //     }),
              //   },
              // ],
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          };
        },
      }}>
      {/* <Stack.Screen name={'MainStack'} component={MainStack} /> */}
      {isLoggedIn ? (
        <Stack.Screen name={'MainDrawer'} component={MainDrawer} />
      ) : (
        <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}
export default RootStack;
