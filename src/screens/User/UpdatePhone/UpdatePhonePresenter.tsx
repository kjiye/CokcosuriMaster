import {GestureResponderEvent, ScrollView} from 'react-native';
import {ButtonInput} from '../../../components/Input';
import I18n from '../../../utils/i18nHelpers';
import KeyboardBaseContainer from '../../../components/KeyboardBaseContainer';
import {MaskInputPhone} from '../../../models/common';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {TitleItem} from '../../../components/Item';
import UpdateNoticeCardView from './UpdateNoticeCardView';
import {VerifyInput} from '../../../../__generated__/globalTypes';
import styled from 'styled-components/native';

const CONTAINER_TOP_PADDING = 24;
const BOTTOM_PADDING = 100;
const COMPONENT_GAP = 16;

const Container = styled(KeyboardBaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${CONTAINER_TOP_PADDING}px
    ${(props: any) => props.theme.size.standardPadding}px ${BOTTOM_PADDING}px;
`;

const Title = styled(TitleItem)`
  margin-top: ${COMPONENT_GAP}px;
`;

const AdditionalButtonInput = styled(ButtonInput)`
  margin-top: 6px;
`;

interface Props {
  verifyInfo?: VerifyInput;
  currentPhone: string;
  phone: string;
  requested: boolean;
  reqVerifyBtnDisabled: boolean;
  verifyCodeBtnDisabled: boolean;
  updateBtnDisabled: boolean;
  timerMs: number;
  playTimer: boolean;
  onTimerStop: (ms: number) => void;
  onChangePhone: (text: string) => void;
  onChangeVerificationCode: (text: string) => void;
  reqVerifyBtnPress: (event: GestureResponderEvent) => void;
  verifyCodeBtnPress: (event: GestureResponderEvent) => void;
  updatePress: (event: GestureResponderEvent) => void;
}

function UpdatePhonePresenter({
  verifyInfo,
  currentPhone,
  phone,
  requested,
  reqVerifyBtnDisabled,
  verifyCodeBtnDisabled,
  updateBtnDisabled,
  timerMs,
  playTimer,
  onTimerStop,
  onChangePhone,
  onChangeVerificationCode,
  reqVerifyBtnPress,
  verifyCodeBtnPress,
  updatePress,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.bottom.update_phone')}
          onPress={updatePress}
          disabled={updateBtnDisabled}
        />
      }>
      <ScrollView scrollIndicatorInsets={{right: 0.1}}>
        <ContentContainer>
          <UpdateNoticeCardView text={currentPhone} />
          <Title mainText={I18n.t('Title.phone')} />
          <ButtonInput
            buttonDisabled={reqVerifyBtnDisabled}
            placeholder={I18n.t('Placeholder.phone_ex')}
            value={phone}
            buttonName={I18n.t('Button.auth_request')}
            onChange={onChangePhone}
            onPress={reqVerifyBtnPress}
            mask={MaskInputPhone}
            keyboardType={'number-pad'}
          />
          {requested && (
            <AdditionalButtonInput
              buttonDisabled={verifyCodeBtnDisabled}
              placeholder={I18n.t('Placeholder.auth_confirm')}
              value={verifyInfo?.code || ''}
              buttonName={I18n.t('Button.auth_confirm')}
              onChange={onChangeVerificationCode}
              onPress={verifyCodeBtnPress}
              keyboardType={'number-pad'}
              millisecond={timerMs}
              usingTimer={true}
              playTimer={playTimer}
              timerStop={onTimerStop}
            />
          )}
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default UpdatePhonePresenter;
