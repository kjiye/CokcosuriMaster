import React, {useEffect} from 'react';
import InventActioModalPresenter from './InventActionModalPresenter';
import {useNavigation} from '@react-navigation/native';

function InventActionModalContainer({
  route: {
    params: {isShow},
  },
}: any): JSX.Element {
  const navigation = useNavigation();

  useEffect(() => {
    if (!isShow) {
      navigation.goBack();
    }
  }, [isShow, navigation]);

  const props = {
    isShow,
  };

  return <InventActioModalPresenter {...props} />;
}

export default InventActionModalContainer;
