import ContentViewModal from '../screens/Modal/ContentViewModal';
import LoginStack from './LoginStack';
import MainDrawer from './MainDrawer';
import React from 'react';
import SelectionModal from '../screens/Modal/SelectionModal';
import {createStackNavigator} from '@react-navigation/stack';
import {isLoggedInVar} from '../apollo';
import {useReactiveVar} from '@apollo/client';

const Stack = createStackNavigator();

function RootStack(): JSX.Element {
  // const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isLoggedIn = false;
  return (
    <Stack.Navigator
      mode={'modal'}
      headerMode={'none'}
      screenOptions={{
        // gestureEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
        // cardOverlayEnabled: true,
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
                inputRange: [0, 0],
                outputRange: [0, 0.4],
                extrapolate: 'clamp',
              }),
            },
          };
        },
      }}>
      {/* <Stack.Screen name={'MainStack'} component={MainStack} /> */}
      {/* 아래 임시 주석처리 */}
      {/* {isLoggedIn ? (
        <Stack.Screen name={'MainDrawer'} component={MainDrawer} />
      ) : (
        // <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        <Stack.Screen name={'LoginStack'} component={LoginStack} />
        // 약관 동의
        // 회원 가입
      )} */}
      {/* <Stack.Screen name={'PricacyDetail'} component={LoginScreen} /> // 약관 상세 팝업 스타일로 */}
      {/* <Stack.Screen name={'asdfasdf'} component={LoginScreen} /> // 개인정보보호 상세 */}
      <Stack.Screen name={'LoginStack'} component={LoginStack} />
      <Stack.Screen name={'MainDrawer'} component={MainDrawer} />
      <Stack.Screen name={'SelectionModal'} component={SelectionModal} />
      <Stack.Screen name={'ContentViewModal'} component={ContentViewModal} />
    </Stack.Navigator>
  );
}
export default RootStack;
