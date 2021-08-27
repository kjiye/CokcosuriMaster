import {GestureResponderEvent, ScrollView} from 'react-native';
import {AppTheme} from '../../../themes/theme';
import ArrowCardView from './ArrowCardView';
import BaseContainer from '../../../components/BaseContainer';
import EmphasisTitleItem from '../EmphasisTitleItem';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import {ImageSelector} from '../../../components/Image';
import LoadingView from '../../../components/View/LoadingView';
import {PaymentState} from '../../../../__generated__/globalTypes';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import WorkingNoticeView from '../WorkingNoticeView';
import {getWorkDoneDetail_getWorkDetail_work} from '../../../../__generated__/getWorkDoneDetail';
import styled from 'styled-components/native';

const {colors}: any = AppTheme;
const VIEW_BETWEEN_GAP = 12;
const IMG_MARGIN_TOP = 12;
const BOTTOM_PADDING = 100;

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  ${(props: any) => `
padding: ${props.theme.size.standardPadding}px  ${props.theme.size.standardPadding}px
${BOTTOM_PADDING}px
`}
`;

const ArrowCard = styled(ArrowCardView)`
  margin-top: ${VIEW_BETWEEN_GAP}px;
`;

const NextImageSelector = styled(ImageSelector)`
  margin-top: ${IMG_MARGIN_TOP}px;
`;

interface Props {
  loading: boolean;
  item: getWorkDoneDetail_getWorkDetail_work;
  total: number;
  goPayment: (event: GestureResponderEvent) => void;
  addImage: (image: Image) => void;
  deleteImage: (index: number) => void;
  okPress: (event: GestureResponderEvent) => void;
}

const a = {
  hasParts: {code: 'D002', name: '미보유'},
  id: 1,
  payment: {
    desc: null,
    id: 1,
    price: 320000,
    reason: {code: 'B001', name: '후불결제'},
    state: 'WAIT',
  },
  state: 'WORKING',
  title: '옥상 바닥 방수페인트 처리 요청합니다',
  workCategory: {code: 'A008', name: '페인트/방수'},
};

function WorkingDonePresenter({
  loading,
  item,
  total,
  goPayment,
  addImage,
  deleteImage,
  okPress,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.done')}
          onPress={okPress}
          disabled={total < 3}
        />
      }>
      {loading ? (
        <LoadingView />
      ) : (
        <ScrollView>
          <ContentContainer>
            <WorkingNoticeView
              itemInfo={item}
              status={I18n.t('WorkingDone.status')}
              endingWord={I18n.t('WorkingDone.ending_word')}
              message={I18n.t('WorkingDone.message')}
              middleTitle={I18n.t('WorkingDone.work_now')}
            />
            {item?.payment ? (
              <ArrowCard
                pointedText={`${item.payment.price}${I18n.t('won')} `}
                sideText={'후불결제 등록'}
                desc={`사유 : ${item.payment?.reason?.name || ''}\n${I18n.t(
                  'Payment.etc',
                )} : ${item.payment?.desc || ''}`}
                onPress={goPayment}
              />
            ) : (
              <ArrowCard
                pointedText={I18n.t('WorkingDone.payment')}
                sideText={I18n.t('WorkingDone.payment_ask')}
                desc={I18n.t('WorkingDone.payment_desc')}
                onPress={goPayment}
              />
            )}
            <EmphasisTitleItem
              status={I18n.t('after')}
              color={colors.secondaryLight}
            />
            <ImageSelector
              desc={I18n.t('Image.first_upload')}
              onAdd={addImage}
              onDelete={() => {
                deleteImage(0);
              }}
            />
            <NextImageSelector
              desc={I18n.t('Image.second_upload')}
              onAdd={addImage}
              onDelete={() => {
                deleteImage(1);
              }}
            />
            <NextImageSelector
              desc={I18n.t('Image.third_upload')}
              onAdd={addImage}
              onDelete={() => {
                deleteImage(2);
              }}
            />
          </ContentContainer>
        </ScrollView>
      )}
    </Container>
  );
}

export default WorkingDonePresenter;
