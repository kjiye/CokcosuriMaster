import BaseContainer from '../../../components/BaseContainer';
import {ButtonInput} from '../../../components/Input';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {TitleItem} from '../../../components/Item';
import UpdateNoticeCardView from './UpdateNoticeCardView';
import styled from 'styled-components/native';
import {MaskInputPhone} from '../../../models/common';
import {VerifyInput} from '../../../../__generated__/globalTypes';

const CONTAINER_TOP_PADDING = 24;
const COMPONENT_GAP = 16;

const Container = styled(BaseContainer)`
  padding: ${CONTAINER_TOP_PADDING}px
    ${(props: any) => props.theme.size.standardPadding}px;
  background: ${(props: any) => props.theme.colors.background};
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
          title={'전화번호 변경'}
          onPress={updatePress}
          disabled={updateBtnDisabled}
        />
      }>
      <UpdateNoticeCardView text={currentPhone} />
      <Title mainText={'전화번호'} />
      <ButtonInput
        buttonDisabled={reqVerifyBtnDisabled}
        placeholder={I18n.t('Placeholder.phone_ex')}
        value={phone}
        buttonName={'인증받기'}
        onChange={onChangePhone}
        onPress={reqVerifyBtnPress}
        mask={MaskInputPhone}
      />
      {requested && (
        <AdditionalButtonInput
          buttonDisabled={verifyCodeBtnDisabled}
          value={verifyInfo?.code || ''}
          buttonName={'인증번호 확인'}
          onChange={onChangeVerificationCode}
          onPress={verifyCodeBtnPress}
        />
      )}
    </Container>
  );
}

export default UpdatePhonePresenter;
