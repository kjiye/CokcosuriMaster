import ContentViewModal from '../screens/Modal/ContentViewModal';
import InventActionModal from '../screens/Modal/InventActionModal';
import LoginStack from './LoginStack';
import MainDrawer from './MainDrawer';
import PermissionModal from '../screens/Permission';
import React from 'react';
import SelectionModal from '../screens/Modal/SelectionModal';
import UploadOptionModal from '../screens/Modal/UploadOptionModal';
import WarnNetworkScreen from '../screens/WarnNetwork';
import {createStackNavigator} from '@react-navigation/stack';
import {tokenVar} from '../apollo';
import {useNetInfo} from '@react-native-community/netinfo';
import {useReactiveVar} from '@apollo/client';

const Stack = createStackNavigator();

function RootStack(): JSX.Element {
  const netInfo = useNetInfo();
  const isLoggedIn = !!useReactiveVar(tokenVar);

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
      {netInfo.isConnected ? (
        isLoggedIn ? (
          <Stack.Screen name={'MainDrawer'} component={MainDrawer} />
        ) : (
          <Stack.Screen name={'LoginStack'} component={LoginStack} />
        )
      ) : (
        <Stack.Screen
          name={'WarnNetworkScreen'}
          component={WarnNetworkScreen}
        />
      )}
      <Stack.Screen name={'PermissionModal'} component={PermissionModal} />
      <Stack.Screen name={'SelectionModal'} component={SelectionModal} />
      <Stack.Screen name={'ContentViewModal'} component={ContentViewModal} />
      <Stack.Screen name={'UploadOptionModal'} component={UploadOptionModal} />
      <Stack.Screen name={'InventActionModal'} component={InventActionModal} />
    </Stack.Navigator>
  );
}
export default RootStack;
