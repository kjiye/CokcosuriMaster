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
  };
  return <SelectionModalPresenter {...props} />;
}

export default SelectionModalContainer;
