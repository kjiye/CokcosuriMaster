import ContentViewModal from '../screens/Modal/ContentViewModal';
import I18n from '../utils/i18nHelpers';
import InventActionModal from '../screens/Modal/InventActionModal';
import LoginStack from './LoginStack';
import MainDrawer from './MainDrawer';
import PermissionModal from '../screens/Permission';
import React from 'react';
import SelectionFullScreenModal from '../screens/Modal/SelectionFullScreenModal';
import SelectionModal from '../screens/Modal/SelectionModal';
import {StatusBar} from 'react-native';
import UploadOptionModal from '../screens/Modal/UploadOptionModal';
import WarnNetworkScreen from '../screens/WarnNetwork';
import {basicHeader} from '../components/Header/HeaderOption';
import {createStackNavigator} from '@react-navigation/stack';
import {tokenVar} from '../apollo';
import {useNetInfo} from '@react-native-community/netinfo';
import {useReactiveVar} from '@apollo/client';

const Stack = createStackNavigator();

/**
 * 최상단 스택
 * (각종 모달, 로딩 화면 등)
 */
function RootStack(): JSX.Element {
  const netInfo = useNetInfo();
  const isLoggedIn = !!useReactiveVar(tokenVar);

  return (
    <>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'white'}
      />
      <Stack.Navigator
        mode={'modal'}
        // headerMode={'none'}
        screenOptions={{
          headerTitleAlign: 'center',
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
            <Stack.Screen
              name={'MainDrawer'}
              component={MainDrawer}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name={'LoginStack'}
              component={LoginStack}
              options={{
                headerShown: false,
              }}
            />
          )
        ) : (
          <Stack.Screen
            name={'WarnNetworkScreen'}
            component={WarnNetworkScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
        <Stack.Screen
          name={'PermissionModal'}
          component={PermissionModal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'SelectionModal'}
          component={SelectionModal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'SelectionFullScreenModal'}
          component={SelectionFullScreenModal}
          options={basicHeader({
            title: I18n.t('Header.select_store'),
            isBack: true,
          })}
        />
        <Stack.Screen
          name={'ContentViewModal'}
          component={ContentViewModal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'UploadOptionModal'}
          component={UploadOptionModal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'InventActionModal'}
          component={InventActionModal}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}
export default RootStack;
