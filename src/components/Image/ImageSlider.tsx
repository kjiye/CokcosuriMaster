import {Dimensions, FlatList} from 'react-native';
import {IMG_HEIGHT, MEDIUM, MINI, STANDARD} from '../../constants/size';
import React from 'react';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

const SliderFlatList = styled(FlatList)`
  background: red;
`;

const SlideView = styled.Image`
  margin-right: ${MEDIUM}px;
  width: ${width - (STANDARD * 2) / 0.8}px;
  height: ${IMG_HEIGHT}px;
  border-radius: ${MINI}px;
`;

interface Props {
  imageList: any[];
}

function ImageSlider({imageList}: Props): JSX.Element {
  return (
    <SliderFlatList
      data={imageList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, i: number) => i.toString()}
      renderItem={({item, idx}: any) => (
        <SlideView
          resizeMode={'cover'}
          source={require('../../../assets/image/default.png')}
        />
      )}
    />
  );
}

export default ImageSlider;
