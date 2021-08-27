import React, {useEffect} from 'react';
import QnAListScreen from './QnAList';
import QnARegScreen from './QnAReg';
import {categoryVar} from '../../apollo';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTheme} from 'styled-components';

const Tab = createMaterialTopTabNavigator();

function QnATab({route}: any): JSX.Element {
  const theme: any = useTheme();

  useEffect(() => {
    if (route.params?.selected) {
      const {selected} = route.params;
      categoryVar(selected);
    }
  }, [route.params]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: theme.fonts.large,
          fontWeight: '500',
        },
        indicatorStyle: {
          height: 4,
          backgroundColor: theme.colors.black[1],
        },
      }}>
      <Tab.Screen
        name={'QnARegScreen'}
        component={QnARegScreen}
        options={{tabBarLabel: '문의하기'}}
      />
      <Tab.Screen
        name={'QnAListScreen'}
        component={QnAListScreen}
        options={{tabBarLabel: '문의내역'}}
      />
    </Tab.Navigator>
  );
}

export default QnATab;
