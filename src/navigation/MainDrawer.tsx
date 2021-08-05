import AlarmScreen from '../screens/Alarm';
import DrawerMenuView from '../screens/Drawer';
import GuideScreen from '../screens/Guide/GuidePresenter';
import MainStack from './MainStack';
import NoticeScreen from '../screens/Notice';
import QnAScreen from '../screens/QnA/QnATab';
import React from 'react';
import TermsDetailScreen from '../screens/Terms/TermsDetail';
import TermsMenuScreen from '../screens/Terms/TermsMenu';
import UpdatUserInfoScreen from '../screens/User/UpdateUserInfo';
import UpdatePasswordScreen from '../screens/User/Password/UpdatePassword';
import UpdatePhoneScreen from '../screens/User/UpdatePhone';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MainDrawer(): JSX.Element {
  return (
    <Drawer.Navigator
      drawerContent={() => {
        return <DrawerMenuView />;
      }}
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
      <Drawer.Screen name={'UpdateUserInfo'} component={UpdatUserInfoScreen} />
      <Drawer.Screen name={'UpdatePassword'} component={UpdatePasswordScreen} />
      <Drawer.Screen name={'UpdatePhone'} component={UpdatePhoneScreen} />
      <Drawer.Screen name={'QnA'} component={QnAScreen} />
      <Drawer.Screen name={'Alarm'} component={AlarmScreen} />
      <Drawer.Screen name={'Notice'} component={NoticeScreen} />
      <Drawer.Screen name={'Guide'} component={GuideScreen} />
      <Drawer.Screen name={'TermsMenu'} component={TermsMenuScreen} />
      <Drawer.Screen name={'TermsDetail'} component={TermsDetailScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawer;
