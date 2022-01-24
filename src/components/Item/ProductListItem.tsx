import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import I18n from '../../utils/i18nHelpers';
import React from 'react';
import {setImageUrl} from '../../utils/commonUtils';
import styled from 'styled-components/native';

const THUMB_IMAGE_SIZE = 110;
const THUMB_IMAGE_RADIUS = 8;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ThumbnailView = styled.View`
  width: ${THUMB_IMAGE_SIZE}px;
  height: ${THUMB_IMAGE_SIZE}px;
  border-radius: ${THUMB_IMAGE_RADIUS}px;
`;

const ThumbImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${THUMB_IMAGE_RADIUS}px;
`;

const InfoWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: ${(props: any) => props.theme.size.innerMargin}px;
`;

const InfoItem = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoTitle = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.large}px;
  color: ${(props: any) => props.theme.colors.grey[6]};
  font-weight: bold;
`;

const InfoContent = styled.Text`
  max-width: 50%;
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
}

function ProductListItem({style}: Props): JSX.Element {
  return (
    <>
      <Wrapper style={style as StyleProp<ViewProps>}>
        <ThumbnailView>
          <ThumbImage
            resizeMethod={'resize'}
            resizeMode={'cover'}
            source={setImageUrl(null)}
          />
        </ThumbnailView>
        <InfoWrapper>
          <InfoItem>
            <InfoTitle>{I18n.t('Product.name')}</InfoTitle>
            <InfoContent numberOfLines={1}>제품명 출력란</InfoContent>
          </InfoItem>
          <InfoItem>
            <InfoTitle>{I18n.t('Product.code')}</InfoTitle>
            <InfoContent numberOfLines={1}>2100003006707</InfoContent>
          </InfoItem>
          <InfoItem>
            <InfoTitle>{I18n.t('Product.quantity')}</InfoTitle>
            <InfoContent numberOfLines={1}>1{I18n.t('ea')}</InfoContent>
          </InfoItem>
        </InfoWrapper>
      </Wrapper>
    </>
  );
}

export default ProductListItem;
