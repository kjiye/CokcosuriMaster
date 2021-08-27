import {CategoryType} from '../../../models/common';
import React from 'react';
import SelectionModalPresenter from './SelectionModalPresenter';
import {useNavigation} from '@react-navigation/native';

function SelectionModalContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const props = {
    title: route.params.title,
    typeList: route.params.typeList,
    close: () => {
      navigation.goBack();
    },
    onSelect: (selected: CategoryType) => {
      navigation.navigate(route.params.path, {selected});
    },
  };
  return <SelectionModalPresenter {...props} />;
}

export default SelectionModalContainer;
