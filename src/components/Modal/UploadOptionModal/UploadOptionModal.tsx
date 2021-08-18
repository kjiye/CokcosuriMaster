import CameraSvg from '../../../../assets/svg/ic_camera.svg';
import GallerySvg from '../../../../assets/svg/ic_gallery.svg';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import React from 'react';
import styled from 'styled-components/native';

const VIEW_HEIGHT = 200;

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BackDimmer = styled.TouchableOpacity`
  flex: 1;
  background: ${(props: any) => props.theme.colors.grey[6]};
  opacity: 0.5;
`;

const ModalWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${VIEW_HEIGHT}px;
  background: ${(props: any) => props.theme.colors.background};
`;

const ModalView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const IconButton = styled.TouchableOpacity`
  padding: 10px;
`;

const IconName = styled.Text`
  margin-top: 6px;
  font-size: ${(props: any) => props.theme.fonts.large}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  text-align: center;
`;

interface Props {
  onGalleryPress: (event: GestureResponderEvent) => void;
  onCameraPress: (event: GestureResponderEvent) => void;
  close: (event: GestureResponderEvent) => void;
}

function UploadOptionModal({
  onGalleryPress,
  onCameraPress,
  close,
}: Props): JSX.Element {
  return (
    <Container>
      <BackDimmer onPress={close} />
      <ModalWrapper>
        <ModalView>
          <IconButton onPress={onGalleryPress}>
            <GallerySvg />
            <IconName>{I18n.t('Button.gallery')}</IconName>
          </IconButton>
          <IconButton onPress={onCameraPress}>
            <CameraSvg />
            <IconName>{I18n.t('Button.camera')}</IconName>
          </IconButton>
        </ModalView>
      </ModalWrapper>
    </Container>
  );
}

export default UploadOptionModal;
