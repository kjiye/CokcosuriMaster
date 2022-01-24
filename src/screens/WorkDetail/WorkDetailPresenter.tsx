import {AppTheme} from '../../themes/theme';
import BaseContainer from '../../components/BaseContainer';
import {ContentTextView} from '../../components/View';
import CustomerInfoItem from './CustomerInfoItem';
import CustomerPurchaseProductItem from './CustomerPurchaseProductItem';
import I18n from '../../utils/i18nHelpers';
import {ImageSlider} from '../../components/Image';
import LoadingView from '../../components/View/LoadingView';
import MapView from '../../components/View/MapView';
import {PrimaryButton} from '../../components/Button';
import React from 'react';
import {ScrollView} from 'react-native';
import {TitleItem} from '../../components/Item';
import {WorkState} from '../../../__generated__/globalTypes';
import {coordsFormatting} from '../../utils/commonUtils';
import {getWorkDetail_getWorkDetail_work} from '../../../__generated__/getWorkDetail';
import {stateBottomButtonName} from '../../utils/workUtils';
import styled from 'styled-components/native';

const {size}: any = AppTheme;

const BOTTOM_PADDING = 100;
const MAP_HEIGHT = 330;

const Container = styled(BaseContainer)`
  flex: 1;
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${size.standardPadding}px ${size.standardPadding}px
    ${BOTTOM_PADDING}px;
`;

const MidTitleItem = styled(TitleItem)`
  margin-top: ${(props: any) => props.theme.fonts.big}px;
`;

interface Props {
  loading: boolean;
  work: getWorkDetail_getWorkDetail_work;
  bottomBtnPress: (item: getWorkDetail_getWorkDetail_work) => void;
  copyAddress: (address: string) => void;
  call: (phone: string) => void;
  goProductDetail: () => void;
}

function WorkDetailPresenter({
  loading,
  work,
  bottomBtnPress,
  copyAddress,
  call,
  goProductDetail,
}: Props): JSX.Element {
  return loading ? (
    <LoadingView />
  ) : (
    <Container
      button={
        work.state !== WorkState.CANCEL && work.state !== WorkState.DONE ? (
          <PrimaryButton
            title={stateBottomButtonName(work?.state)}
            onPress={() => {
              bottomBtnPress(work);
            }}
          />
        ) : (
          <></>
        )
      }>
      <ScrollView scrollIndicatorInsets={{right: 0.1}}>
        {work.address?.coordinate && (
          <MapView
            coords={coordsFormatting(work.address.coordinate)}
            markerImage={require('../../../assets/image/map_marker.png')}
            mapViewHeight={MAP_HEIGHT}
          />
        )}
        <ContentContainer>
          <TitleItem mainText={I18n.t('Title.customer_info')} />
          <CustomerInfoItem
            item={work}
            leftBtnPress={copyAddress}
            rightBtnPress={call}
          />
          <MidTitleItem mainText={'고객구매 상품'} />
          <CustomerPurchaseProductItem onPress={goProductDetail} />
          <MidTitleItem mainText={I18n.t('Title.customer_message')} />
          <ContentTextView value={work.content || ''} />
          <MidTitleItem mainText={I18n.t('Title.customer_place')} />
          <ImageSlider imageList={work.requestImage || []} />
          {work.state === WorkState.WORKING && (
            <>
              <MidTitleItem mainText={I18n.t('Title.before_work_image')} />
              <ImageSlider imageList={work.beforeImage || []} />
            </>
          )}
          {work.state === WorkState.DONE && (
            <>
              <MidTitleItem mainText={I18n.t('Title.before_work_image')} />
              <ImageSlider imageList={work.beforeImage || []} />
              <MidTitleItem mainText={I18n.t('Title.after_work_image')} />
              <ImageSlider imageList={work.afterImage || []} />
            </>
          )}
          {work.state === WorkState.CANCEL && (
            <>
              <MidTitleItem mainText={I18n.t('Title.cancel_reason')} />
              <ContentTextView value={work.cancelReason || ''} />
              <MidTitleItem mainText={I18n.t('Title.cancel_image')} />
              <ImageSlider imageList={work.cancelImage || []} />
            </>
          )}
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default WorkDetailPresenter;
