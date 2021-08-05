import QnAListScreen from './QnAList';
import QnARegScreen from './QnAReg';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';

const Tab = createMaterialTopTabNavigator();

function QnATab(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'QnARegScreen'} component={QnARegScreen} />
      <Tab.Screen name={'QnAListScreen'} component={QnAListScreen} />
    </Tab.Navigator>
  );
}

export default QnATab;
