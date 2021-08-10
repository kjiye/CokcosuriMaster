import {BIG, STANDARD} from '../../../constants/size';
import {GestureResponderEvent, ScrollView} from 'react-native';
import {AppTheme} from '../../../themes/theme';
import BaseContainer from '../../../components/BaseContainer';
import {ContentTextView} from '../../../components/View';
import CustomerInfoItem from './CustomerInfoItem';
import I18n from '../../../utils/i18nHelpers';
import {ImageSlider} from '../../../components/Image';
import MapView from '../../../components/View/MapView';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {TitleItem} from '../../../components/Item';
import {WHITE} from '../../../constants/color';
import styled from 'styled-components/native';

const {size}: any = AppTheme;

const BOTTOM_PADDING = 100;

const Container = styled(BaseContainer)`
  background: ${WHITE};
`;

const ContentContainer = styled.View`
  padding: ${size.standardPadding}px ${size.standardPadding}px
    ${BOTTOM_PADDING}px;
`;

const MidTitleItem = styled(TitleItem)`
  margin-top: ${BIG}px;
`;

interface Props {
  nextPress: (event: GestureResponderEvent) => void;
  copyAddress: (event: GestureResponderEvent) => void;
  status: 'wait' | 'working' | 'done' | 'cancel';
}

function WorkDetailPresenter({
  nextPress,
  copyAddress,
  status,
}: Props): JSX.Element {
  return (
    <Container
      button={
        status === 'wait' || status === 'working' ? (
          <PrimaryButton
            title={status === 'wait' ? '작업 진행' : '작업 완료'}
            onPress={nextPress}
          />
        ) : (
          <></>
        )
      }>
      <ScrollView>
        <MapView />
        <ContentContainer>
          <TitleItem mainText={I18n.t('Title.customer_info')} />
          <CustomerInfoItem leftBtnPress={copyAddress} />
          <MidTitleItem mainText={I18n.t('Title.customer_message')} />
          <ContentTextView
            value={'조명은 깨지고 전선이 뜯어졌어요. 전등은 보유하고 있습니다.'}
          />
          <MidTitleItem mainText={I18n.t('Title.customer_place')} />
          <ImageSlider imageList={[{}, {}, {}]} />
          {status === 'done' && (
            <>
              <MidTitleItem mainText={'작업 전 사진'} />
              <ImageSlider imageList={[{}, {}, {}]} />
              <MidTitleItem mainText={'작업 후 사진'} />
              <ImageSlider imageList={[{}, {}, {}]} />
            </>
          )}
          {status === 'cancel' && (
            <>
              <MidTitleItem mainText={'취소 사유'} />
              <ContentTextView
                value={
                  '현장을 확인해보니 내부 배선 작업까지 들어가는 대규모 공사라 진행하기 어렵습니다 '
                }
              />
              <MidTitleItem mainText={'취소 사진'} />
              <ImageSlider imageList={[{}, {}, {}]} />
            </>
          )}
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default WorkDetailPresenter;
