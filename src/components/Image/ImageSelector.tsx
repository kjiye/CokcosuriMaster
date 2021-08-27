import {
  Dimensions,
  Platform,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {ImageData, ImageSelectorOption} from '../../models/common';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import React, {useCallback, useEffect, useState} from 'react';
import DeleteSvg from '../../../assets/svg/ic_delete_img.svg';
import I18n from '../../utils/i18nHelpers';
import PhotoSvg from '../../../assets/svg/ic_photo.svg';
import {callBackAlert} from '../../utils/alert';
import {setImageUrl} from '../../utils/commonUtils';
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
  currentImage?: ImageData | Image;
  currentDelete?: () => void;
  desc: string;
  useOption?: boolean;
  showOption?: () => void;
  option?: ImageSelectorOption;
  onAdd: (image: Image) => void;
  onDelete: () => void;
}

function ImageSelector({
  style,
  currentImage,
  currentDelete,
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
      if (!e.code.includes('CANCELLED')) {
        callBackAlert(I18n.t('Permission.status.blocked'), () => {
          return;
        });
      }
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
      // console.log(e.code);
      return;
    }
  }, []);

  useEffect(() => {
    if (option && !image && !currentImage) {
      switch (option) {
        case 'picker':
          picker();
          break;
        case 'camera':
          camera();
          break;
      }
    }
  }, [option, image, currentImage]);

  return (
    <View style={style as StyleProp<ViewProps>}>
      {currentImage ? (
        <>
          <ImageView
            style={{width: '100%', height: IMG_HEIGHT}}
            resizeMode={'cover'}
            source={setImageUrl(currentImage.path)}
          />
          <DeleteButton
            onPress={() => {
              currentDelete && currentDelete();
            }}>
            <DeleteSvg />
          </DeleteButton>
        </>
      ) : image ? (
        <>
          <ImageView
            style={{width: '100%', height: IMG_HEIGHT}}
            resizeMode={'cover'}
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
            if (useOption && showOption) {
              showOption();
            } else {
              // picker();
              camera();
            }
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
