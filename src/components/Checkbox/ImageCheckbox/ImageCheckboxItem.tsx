import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import CheckActiveSvg from '../../../../assets/svg/ic_check_big_active.svg';
import CheckInactiveSvg from '../../../../assets/svg/ic_check_big_inactive.svg';
import {ImageData} from '../../../models/common';
import React from 'react';
import {setImageUrl} from '../../../utils/commonUtils';
import styled from 'styled-components/native';

const IMG_HEIGHT = 235;
const ICON_WRAPPER_SIZE = 45;
const ICON_WIDTH = 38;
const ICON_HEIGHT = 28;

const ImageWrapper = styled.TouchableOpacity`
  flex: 1;
  height: ${IMG_HEIGHT}px;
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
`;

const CheckIconWrapper = styled.View`
  width: ${ICON_WRAPPER_SIZE}px;
  height: ${ICON_WRAPPER_SIZE}px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.21);
  border-top-right-radius: 10px;
  align-items: center;
  justify-content: center;
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  imageValue?: ImageData;
  checked: boolean;
  onPress: (item: any) => void;
}

function ImageCheckboxItem({
  style,
  imageValue,
  checked,
  onPress,
}: Props): JSX.Element {
  return (
    <ImageWrapper style={style as StyleProp<ViewProps>} onPress={onPress}>
      <Image
        resizeMethod={'resize'}
        resizeMode={'cover'}
        source={setImageUrl(imageValue?.path || null)}
      />
      <CheckIconWrapper>
        {checked ? (
          <CheckActiveSvg width={ICON_WIDTH} height={ICON_HEIGHT} />
        ) : (
          <CheckInactiveSvg width={ICON_WIDTH} height={ICON_HEIGHT} />
        )}
      </CheckIconWrapper>
    </ImageWrapper>
  );
}

export default ImageCheckboxItem;
