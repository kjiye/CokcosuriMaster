import BaseContainer from '../../../components/BaseContainer';
import {ButtonInput} from '../../../components/Input';
import {GestureResponderEvent} from 'react-native';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {TitleItem} from '../../../components/Item';
import UpdateNoticeCardView from './UpdateNoticeCardView';
import styled from 'styled-components/native';

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
  requested?: boolean;
  requestPress: (event: GestureResponderEvent) => void;
  confirmPress: (event: GestureResponderEvent) => void;
  updatePress: (event: GestureResponderEvent) => void;
}

function UpdatePhonePresenter({
  requested = false,
  requestPress,
  confirmPress,
  updatePress,
}: Props): JSX.Element {
  return (
    <Container
      button={<PrimaryButton title={'전화번호 변경'} onPress={updatePress} />}>
      <UpdateNoticeCardView />
      <Title mainText={'전화번호'} />
      <ButtonInput
        placeholder={'010-1234-1234'}
        buttonName={'인증받기'}
        onPress={requestPress}
      />
      {requested && (
        <AdditionalButtonInput
          buttonName={'인증번호 확인'}
          onPress={confirmPress}
        />
      )}
    </Container>
  );
}

export default UpdatePhonePresenter;
