import {GestureResponderEvent, ScrollView} from 'react-native';
import {AppTheme} from '../../../themes/theme';
import ArrowCardView from './ArrowCardView';
import BaseContainer from '../../../components/BaseContainer';
import EmphasisTitleItem from '../EmphasisTitleItem';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import {ImageSelector} from '../../../components/Image';
import LoadingView from '../../../components/View/LoadingView';
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
  // total: number;
  btnDisabled: boolean;
  images: Image[];
  firstImage?: Image;
  secondImage?: Image;
  thirdImage?: Image;
  goPayment: (event: GestureResponderEvent) => void;
  // addImage: (image: Image) => void;
  addFirstImage: (image: Image) => void;
  addSecondImage: (image: Image) => void;
  addThirdImage: (image: Image) => void;
  deleteFirstImage: () => void;
  deleteSecondImage: () => void;
  deleteThirdImage: () => void;
  deleteImage: (index: number) => void;
  okPress: (event: GestureResponderEvent) => void;
}

function WorkingDonePresenter({
  loading,
  item,
  // total,
  btnDisabled,
  images,
  firstImage,
  secondImage,
  thirdImage,
  goPayment,
  // addImage,
  addFirstImage,
  addSecondImage,
  addThirdImage,
  deleteFirstImage,
  deleteSecondImage,
  deleteThirdImage,
  deleteImage,
  okPress,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.done')}
          onPress={okPress}
          // disabled={total < 3}
          disabled={btnDisabled}
        />
      }>
      {loading ? (
        <LoadingView />
      ) : (
        <ScrollView scrollIndicatorInsets={{right: 0.1}}>
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
              // pendingImage={images[0]}
              pendingImage={firstImage}
              desc={I18n.t('Image.first_upload')}
              // onAdd={addImage}
              onAdd={addFirstImage}
              // onDelete={() => {
              //   deleteImage(0);
              // }}
              onDelete={deleteFirstImage}
            />
            <NextImageSelector
              // pendingImage={images[1]}
              pendingImage={secondImage}
              desc={I18n.t('Image.second_upload')}
              // onAdd={addImage}
              onAdd={addSecondImage}
              // onDelete={() => {
              //   deleteImage(1);
              // }}
              onDelete={deleteSecondImage}
            />
            <NextImageSelector
              // pendingImage={images[2]}
              pendingImage={thirdImage}
              desc={I18n.t('Image.third_upload')}
              // onAdd={addImage}
              onAdd={addThirdImage}
              // onDelete={() => {
              //   deleteImage(2);
              // }}
              onDelete={deleteThirdImage}
            />
          </ContentContainer>
        </ScrollView>
      )}
    </Container>
  );
}

export default WorkingDonePresenter;
