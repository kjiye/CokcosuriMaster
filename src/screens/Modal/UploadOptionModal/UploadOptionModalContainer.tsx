import React from 'react';
import UploadOptionModalPresenter from './UploadOptionModalPresenter';
import {useNavigation} from '@react-navigation/native';

function UploadOptionModalContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  const props = {
    onGalleryPress: () => {
      const {path} = route.params;
      navigation.navigate(path, {imageOption: 'picker'});
    },
    onCameraPress: () => {
      const {path} = route.params;
      navigation.navigate(path, {imageOption: 'camera'});
    },
    close: () => {
      navigation.goBack();
    },
  };
  return <UploadOptionModalPresenter {...props} />;
}

export default UploadOptionModalContainer;
