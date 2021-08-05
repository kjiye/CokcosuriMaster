import {
  Dimensions,
  Platform,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {GRAY_1, GRAY_5} from '../../constants/color';
import {IMG_HEIGHT, MEDIUM, MINI} from '../../constants/size';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import React, {useState} from 'react';
import PhotoSvg from '../../../assets/svg/ic_photo.svg';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

const Selector = styled.TouchableOpacity`
  height: ${IMG_HEIGHT}px;
  background: ${GRAY_1};
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
  style?: StyleProp<ViewStyle>;
  desc: string;
}

// 임시 작동 불가 처리
function ImageSelector({style, desc}: Props): JSX.Element {
  const [image, setImage] = useState<Image | undefined>();
  return (
    <View style={style as StyleProp<ViewProps>}>
      {image ? (
        <ImageView
          source={{uri: Platform.OS === 'ios' ? image.sourceURL : image.path}}
        />
      ) : (
        <Selector
        // onPress={async () => {
        //   const result: Image = await ImagePicker.openPicker({
        //     width: width,
        //     height: IMG_HEIGHT,
        //     mediaType: 'photo',
        //   });
        //   setImage(result);
        // }}
        >
          <NoImageView>
            <PhotoSvg />
            <Description>{desc}</Description>
          </NoImageView>
        </Selector>
      )}
    </View>
  );
}

export default ImageSelector;
