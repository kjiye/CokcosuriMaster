import {Dimensions} from 'react-native';
import NextArrowSvg from '../../../assets/svg/ic_next_arrow.svg';
import PrevArrowSvg from '../../../assets/svg/ic_prev_arrow.svg';
import React from 'react';
import Swiper from 'react-native-swiper';
import {setImageUrl} from '../../utils/commonUtils';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components/native';

const {width} = Dimensions.get('screen');
const IMG_HEIGHT = 235;

const SliderWrapper = styled(Swiper)`
  height: ${IMG_HEIGHT}px;
  background: ${(props: any) => props.theme.colors.grey[2]};
`;

const Slide = styled.View`
  flex: 1;
  height: ${IMG_HEIGHT}px;
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
`;

const EmptyImage = styled.Image`
  width: ${(props: any) => width - props.theme.size.standardPadding * 2}px;
  height: ${IMG_HEIGHT}px;
`;

interface Props {
  imageList: any[];
}

function ImageSlider({imageList}: Props): JSX.Element {
  const theme: any = useTheme();
  return imageList.length > 0 ? (
    <SliderWrapper
      showsButtons={imageList.length > 1 ? true : false}
      showsPagination={true}
      prevButton={<PrevArrowSvg />}
      nextButton={<NextArrowSvg />}
      dotColor={theme.colors.grey[0]}
      activeDotColor={theme.colors.primaryLight}>
      {imageList.map((v, i) => {
        return (
          <Slide key={i.toString()}>
            <SlideImage
              resizeMethod={'resize'}
              resizeMode={'cover'}
              source={setImageUrl(v.path)}
            />
          </Slide>
        );
      })}
    </SliderWrapper>
  ) : (
    <EmptyImage resizeMode={'cover'} source={setImageUrl(null)} />
  );
}

export default ImageSlider;
