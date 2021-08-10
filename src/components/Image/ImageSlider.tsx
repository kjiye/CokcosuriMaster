import {Dimensions, FlatList} from 'react-native';
import {IMG_HEIGHT, MEDIUM, MINI, STANDARD} from '../../constants/size';
import {AppTheme} from '../../themes/theme';
import NextArrowSvg from '../../../assets/svg/ic_next_arrow.svg';
import PrevArrowSvg from '../../../assets/svg/ic_prev_arrow.svg';
import React from 'react';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');
const {colors}: any = AppTheme;
const IMAGE_HEIGHT = 235;

const SliderFlatList = styled(FlatList)``;

// const SlideView = styled.Image`
//   margin-right: ${MEDIUM}px;
//   width: ${width - (STANDARD * 2) / 0.8}px;
//   height: ${IMG_HEIGHT}px;
//   border-radius: ${MINI}px;
// `;

const SliderWrapper = styled(Swiper)`
  height: ${IMAGE_HEIGHT}px;
`;

const Slide = styled.Image`
  width: ${width}px;
  height: ${IMAGE_HEIGHT}px;
  border-radius: 10px;
`;

interface Props {
  imageList: any[];
}

function ImageSlider({imageList}: Props): JSX.Element {
  return (
    <SliderWrapper
      showsButtons={true}
      showsPagination={true}
      prevButton={<PrevArrowSvg />}
      nextButton={<NextArrowSvg />}
      dotColor={colors.grey[0]}
      activeDotColor={colors.primaryLight}>
      {imageList.map((v, i) => {
        return (
          <Slide
            key={i.toString()}
            resizeMode={'cover'}
            source={require('../../../assets/image/sample.png')}
          />
        );
      })}
    </SliderWrapper>
    // <SliderFlatList
    //   data={imageList}
    //   horizontal={true}
    //   showsHorizontalScrollIndicator={false}
    //   keyExtractor={(_, i: number) => i.toString()}
    //   renderItem={({item, idx}: any) => (
    //     <SlideView
    //       resizeMode={'cover'}
    //       source={require('../../../assets/image/sample.png')}
    //     />
    //   )}
    // />
  );
}

export default ImageSlider;
