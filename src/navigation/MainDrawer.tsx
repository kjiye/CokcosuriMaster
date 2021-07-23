import MainStack from './MainStack';
import NoticeScreen from '../screens/Notice';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MainDrawer(): JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen
        name={'MainStack'}
        options={{
          headerShown: false,
        }}
        component={MainStack}
      />
      <Drawer.Screen name={'NoticeScreen'} component={NoticeScreen} />
      {
        // 개인 정보 수정
        // 1:1 문의
        // 공지 사항
        // 앱 사용법
      }
    </Drawer.Navigator>
  );
}

export default MainDrawer;
