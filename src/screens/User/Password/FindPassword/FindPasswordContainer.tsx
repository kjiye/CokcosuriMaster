import FindPasswordPresenter from './FindPasswordPresenter';
import I18n from '../../../../utils/i18nHelpers';
import React from 'react';
import {callBackAlert} from '../../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function FindPasswordContainer(): JSX.Element {
  const navigation = useNavigation();
  const props = {
    ok: () => {
      callBackAlert(I18n.t('Alert.send_temp_password'), () => {
        navigation.goBack();
      });
    },
  };
  return <FindPasswordPresenter {...props} />;
}

export default FindPasswordContainer;
