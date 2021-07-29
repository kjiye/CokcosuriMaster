import LoginStack from './LoginStack';
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
        // <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        <Stack.Screen name={'LoginStack'} component={LoginStack} />
        // 약관 동의
        // 회원 가입
      )}
      {/* <Stack.Screen name={'PricacyDetail'} component={LoginScreen} /> // 약관 상세 팝업 스타일로 */}
      {/* <Stack.Screen name={'asdfasdf'} component={LoginScreen} /> // 개인정보보호 상세 */}
    </Stack.Navigator>
  );
}
export default RootStack;
