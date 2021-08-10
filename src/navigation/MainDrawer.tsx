import {
  basicHeader,
  commonHeaderOption,
} from '../components/Header/HeaderOption';
import AlarmScreen from '../screens/Alarm';
import DrawerMenuView from '../screens/Drawer';
import GuideScreen from '../screens/Guide/GuidePresenter';
import I18n from '../utils/i18nHelpers';
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
      screenOptions={{headerShown: true, headerTitleAlign: 'center'}}>
      <Drawer.Screen
        name={'MainStack'}
        options={{
          headerShown: false,
        }}
        component={MainStack}
      />
      <Drawer.Screen
        name={'UpdateUserInfo'}
        component={UpdatUserInfoScreen}
        options={basicHeader({
          title: I18n.t('Header.update_user_info'),
        })}
      />
      <Drawer.Screen
        name={'UpdatePassword'}
        component={UpdatePasswordScreen}
        options={basicHeader({
          title: I18n.t('Header.update_password'),
        })}
      />
      <Drawer.Screen
        name={'UpdatePhone'}
        component={UpdatePhoneScreen}
        options={basicHeader({
          title: I18n.t('Header.update_phone'),
        })}
      />
      <Drawer.Screen
        name={'QnA'}
        component={QnAScreen}
        options={basicHeader({
          title: I18n.t('Header.qna'),
        })}
      />
      <Drawer.Screen
        name={'Alarm'}
        component={AlarmScreen}
        options={basicHeader({
          title: I18n.t('Header.alarm'),
        })}
      />
      <Drawer.Screen
        name={'Notice'}
        component={NoticeScreen}
        options={basicHeader({
          title: I18n.t('Header.notice'),
        })}
      />
      <Drawer.Screen
        name={'Guide'}
        component={GuideScreen}
        options={basicHeader({
          title: I18n.t('Header.guide'),
        })}
      />
      <Drawer.Screen
        name={'TermsMenu'}
        component={TermsMenuScreen}
        options={basicHeader({
          title: I18n.t('Header.terms'),
        })}
      />
      <Drawer.Screen name={'TermsDetail'} component={TermsDetailScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawer;
