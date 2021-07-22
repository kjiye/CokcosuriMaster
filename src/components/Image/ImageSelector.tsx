import {Dimensions, Platform} from 'react-native';
import {IMG_HEIGHT, MEDIUM, MINI} from '../../constants/size';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import React, {useState} from 'react';
import {GRAY_5} from '../../constants/color';
import PhotoSvg from '../../../assets/svg/ic_photo.svg';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

// background:${GRAY_1};
const Selector = styled.TouchableOpacity`
  flex: 1;
  height: ${IMG_HEIGHT}px;
  background: yellow;
  border-radius: ${MINI}px;
`;

const NoImageView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Description = styled.Text`
  margin-top: 8px;
  font-size: ${MEDIUM}px;
  font-weight: 500;
  color: ${GRAY_5};
`;

const ImageView = styled.Image`
  flex: 1;
  height: ${IMG_HEIGHT}px;
  background: red;
  border-radius: ${MINI}px;
`;

interface Props {
  desc: string;
}

function ImageSelector({desc}: Props): JSX.Element {
  const [image, setImage] = useState<Image | undefined>();
  return (
    <>
      {image ? (
        <ImageView
          source={{uri: Platform.OS === 'ios' ? image.sourceURL : image.path}}
        />
      ) : (
        <Selector
          onPress={async () => {
            // 모듈 테스트용
            const result: Image = await ImagePicker.openPicker({
              width: width,
              height: IMG_HEIGHT,
              mediaType: 'photo',
            });
            setImage(result);
          }}>
          <NoImageView>
            <PhotoSvg />
            <Description>{desc}</Description>
          </NoImageView>
        </Selector>
      )}
    </>
  );
}

export default ImageSelector;
