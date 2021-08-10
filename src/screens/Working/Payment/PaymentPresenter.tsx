import AdditionalInputView from './AdditionalInputView';
import BaseContainer from '../../../components/BaseContainer';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import {LimitTextArea} from '../../../components/Input';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SelectionView} from '../../../components/View';
import {TitleItem} from '../../../components/Item';
import WorkingNoticeView from '../WorkingNoticeView';
import styled from 'styled-components/native';

const VIEW_BETWEEN_GAP = 12;
const CONTAINER_BOTTOM_PADDING = 90;

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  ${(props: any) => `
  padding: ${props.theme.size.standardPadding}px  ${props.theme.size.standardPadding}px
  ${CONTAINER_BOTTOM_PADDING}px
`}
`;

const AdditionalAmountInput = styled(AdditionalInputView)`
  margin-top: ${VIEW_BETWEEN_GAP}px;
`;

const Title = styled(TitleItem)`
  margin-top: ${VIEW_BETWEEN_GAP}px;
`;

interface Props {
  showSelectionModal: (event: GestureResponderEvent) => void;
  okPress: (event: GestureResponderEvent) => void;
}

function PaymentPresenter({showSelectionModal, okPress}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton title={I18n.t('Button.done')} onPress={okPress} />
      }>
      <ScrollView>
        <ContentContainer>
          <WorkingNoticeView
            status={I18n.t('Payment.status')}
            endingWord={I18n.t('Payment.ending_word')}
            message={I18n.t('Payment.message')}
            middleTitle={I18n.t('Payment.work_now')}
          />
          <AdditionalAmountInput />
          <Title mainText={I18n.t('Payment.reason')} />
          <SelectionView
            placeholder={I18n.t('Payment.reason_select')}
            onPress={showSelectionModal}
          />
          <Title
            mainText={I18n.t('Payment.etc')}
            desc={I18n.t('Payment.etc_desc')}
          />
          <LimitTextArea
            placeholder={I18n.t('Payment.reason_placeholder')}
            limit={300}
            currentCount={0}
          />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default PaymentPresenter;
