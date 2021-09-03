import {AppTheme} from '../../../themes/theme';
import BaseContainer from '../../../components/BaseContainer';
import {ContentTextView} from '../../../components/View';
import CustomerInfoItem from './CustomerInfoItem';
import I18n from '../../../utils/i18nHelpers';
import {ImageSlider} from '../../../components/Image';
import LoadingView from '../../../components/View/LoadingView';
import MapView from '../../../components/View/MapView';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {ScrollView} from 'react-native';
import {TitleItem} from '../../../components/Item';
import {WorkState} from '../../../../__generated__/globalTypes';
import {coordsFormatting} from '../../../utils/commonUtils';
import {getWorkDetail_getWorkDetail_work} from '../../../../__generated__/getWorkDetail';
import {stateBottomButtonName} from '../../../utils/workUtils';
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
}

const a = {
  afterImage: [],
  beforeImage: [
    {id: 9, path: '/images/94BapzIzDQANyjPzsw8L.jpg'},
    {id: 10, path: '/images/b101CiGhk6OY89UCZGWa.jpg'},
    {id: 11, path: '/images/HAlm95Qhycd4jUfuSd4Y.jpg'},
  ],
  cancelImage: [],
  cancelReason: null,
  content: '실평수 45평형 단독주택 옥상에 방수페인트 처리 하고싶어요 ',
  customer: {
    address: {
      coordinate: [Object],
      detail: '202동 707호',
      postalCode: '16507',
      roadAddress: '경기도 수원시 영통구 센트럴타운로 85',
    },
    name: '홍길동',
    phone: '01064173203',
  },
  hasParts: {code: 'D002', name: '미보유'},
  id: 1,
  payment: {id: 1, price: 320000},
  requestImage: [{id: 1, path: '/images/JUWY63Td4AAO0DKAreJG.jpg'}],
  state: 'CANCEL',
  title: '옥상 바닥 방수페인트 처리 요청합니다',
  visitDate: '1630800000000',
  workCategory: {code: 'A008', name: '페인트/방수'},
};

function WorkDetailPresenter({
  loading,
  work,
  bottomBtnPress,
  copyAddress,
  call,
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
      <ScrollView>
        {work.address?.coordinate && (
          <MapView
            coords={coordsFormatting(work.address.coordinate)}
            markerImage={require('../../../../assets/image/map_marker.png')}
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
          <MidTitleItem mainText={I18n.t('Title.customer_message')} />
          <ContentTextView value={work.content || ''} />
          <MidTitleItem mainText={I18n.t('Title.customer_place')} />
          <ImageSlider imageList={work.requestImage || []} />
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
