import React from 'react';
import WorkDetailPresenter from './WorkDetailPresenter';
import {useNavigation} from '@react-navigation/native';

function WorkDetailContainer(): JSX.Element {
  const navigation = useNavigation();
  return <WorkDetailPresenter />;
}

export default WorkDetailContainer;
