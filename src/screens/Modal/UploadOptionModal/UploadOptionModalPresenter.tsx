import {GestureResponderEvent} from 'react-native';
import React from 'react';
import UploadOptionModal from '../../../components/Modal/UploadOptionModal/UploadOptionModal';

interface Props {
  onGalleryPress: (event: GestureResponderEvent) => void;
  onCameraPress: (event: GestureResponderEvent) => void;
  close: (event: GestureResponderEvent) => void;
}

function UploadOptionModalPresenter({
  onGalleryPress,
  onCameraPress,
  close,
}: Props): JSX.Element {
  return (
    <UploadOptionModal
      onGalleryPress={onGalleryPress}
      onCameraPress={onCameraPress}
      close={close}
    />
  );
}

export default UploadOptionModalPresenter;
