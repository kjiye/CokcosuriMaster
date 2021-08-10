import {GestureResponderEvent, ScrollView} from 'react-native';
import {AppTheme} from '../../../themes/theme';
import ArrowCardView from './ArrowCardView';
import BaseContainer from '../../../components/BaseContainer';
import EmphasisTitleItem from '../EmphasisTitleItem';
import I18n from '../../../utils/i18nHelpers';
import {ImageSelector} from '../../../components/Image';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import WorkingNoticeView from '../WorkingNoticeView';
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
  goPayment: (event: GestureResponderEvent) => void;
  okPress: (event: GestureResponderEvent) => void;
}

function WorkingDonePresenter({goPayment, okPress}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton title={I18n.t('Button.done')} onPress={okPress} />
      }>
      <ScrollView>
        <ContentContainer>
          <WorkingNoticeView
            status={I18n.t('WorkingDone.status')}
            endingWord={I18n.t('WorkingDone.ending_word')}
            message={I18n.t('WorkingDone.message')}
            middleTitle={I18n.t('WorkingDone.work_now')}
          />
          <ArrowCard
            pointedText={I18n.t('WorkingDone.payment')}
            sideText={I18n.t('WorkingDone.payment_ask')}
            desc={I18n.t('WorkingDone.payment_desc')}
            onPress={goPayment}
          />
          <EmphasisTitleItem status={'후'} color={colors.secondaryLight} />
          <ImageSelector desc={I18n.t('Image.first_upload')} />
          <NextImageSelector desc={I18n.t('Image.second_upload')} />
          <NextImageSelector desc={I18n.t('Image.third_upload')} />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default WorkingDonePresenter;
