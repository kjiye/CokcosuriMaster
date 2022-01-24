import {AppTheme} from '../../themes/theme';
import {Dimensions} from 'react-native';
import React from 'react';
import {setImageUrl} from '../../utils/commonUtils';
import styled from 'styled-components/native';

const {size}: any = AppTheme;
const {width} = Dimensions.get('screen');
const IMAGE_SIZE = width - size.standardPadding * 2;

const ImageWrapper = styled.View`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  background-color: yellow;
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
  margin-top: ${(props: any) => props.theme.size.standardPadding}px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
`;

function ImageView(): JSX.Element {
  return (
    <ImageWrapper>
      <Image
        resizeMethod={'resize'}
        resizeMode={'cover'}
        source={setImageUrl(null)}
      />
    </ImageWrapper>
  );
}

export default ImageView;
