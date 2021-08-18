import {
  Dimensions,
  GestureResponderEvent,
  Platform,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import React, {useCallback, useEffect, useState} from 'react';
import DeleteSvg from '../../../assets/svg/ic_delete_img.svg';
import {ImageSelectorOption} from '../../models/common';
import PhotoSvg from '../../../assets/svg/ic_photo.svg';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');
const IMG_HEIGHT = 235;
const VIEW_RADIUS = 10;

const Selector = styled.TouchableOpacity`
  height: ${IMG_HEIGHT}px;
  background: ${(props: any) => props.theme.colors.grey[1]};
  border-radius: ${VIEW_RADIUS}px;
`;

const NoImageView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Description = styled.Text`
  margin-top: 8px;
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: 500;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

const ImageView = styled.Image`
  flex: 1;
  height: ${IMG_HEIGHT}px;
  background: red;
  border-radius: ${VIEW_RADIUS}px;
`;

const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: ${VIEW_RADIUS}px;
  background: ${(props: any) => props.theme.colors.black[0]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  desc: string;
  useOption?: boolean;
  showOption?: () => void;
  option?: ImageSelectorOption;
  onAdd: (image: Image) => void;
  onDelete: () => void;
}

function ImageSelector({
  style,
  desc,
  useOption = false,
  showOption,
  option,
  onAdd,
  onDelete,
}: Props): JSX.Element {
  const [image, setImage] = useState<Image | undefined>();

  const picker = useCallback(async () => {
    try {
      const result: Image = await ImagePicker.openPicker({
        width: width,
        height: IMG_HEIGHT,
        mediaType: 'photo',
      });
      setImage(result);
      onAdd(result);
    } catch (e) {
      return;
    }
  }, []);

  const camera = useCallback(async () => {
    try {
      const result: Image = await ImagePicker.openCamera({
        width: width,
        height: IMG_HEIGHT,
        mediaType: 'photo',
      });
      setImage(result);
      onAdd(result);
    } catch (e) {
      return;
    }
  }, []);

  useEffect(() => {
    if (option && !image) {
      switch (option) {
        case 'picker':
          picker();
          break;
        case 'camera':
          camera();
          break;
      }
    }
  }, [option, image]);

  return (
    <View style={style as StyleProp<ViewProps>}>
      {image ? (
        <>
          <ImageView
            source={{uri: Platform.OS === 'ios' ? image.sourceURL : image.path}}
          />
          <DeleteButton
            onPress={() => {
              onDelete();
              setImage(undefined);
            }}>
            <DeleteSvg />
          </DeleteButton>
        </>
      ) : (
        <Selector
          onPress={() => {
            useOption && showOption && showOption();
          }}>
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
