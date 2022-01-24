import React, {useEffect} from 'react';
import InventActioModalPresenter from './InventActionModalPresenter';
import {useNavigation} from '@react-navigation/native';

/**
 * dispatching action 발생 후 중복 호출을 막기 위해 사용하는 화면
 */
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
