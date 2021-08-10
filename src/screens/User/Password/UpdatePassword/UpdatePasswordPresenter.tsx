import {BasicInput, ErrorViewInput} from '../../../../components/Input';
import BaseContainer from '../../../../components/BaseContainer';
import {GestureResponderEvent} from 'react-native';
import {PrimaryButton} from '../../../../components/Button';
import React from 'react';
import {TitleItem} from '../../../../components/Item';
import UpdateNoticeCardView from './UpdateNoticeCardView';
import styled from 'styled-components/native';

const CONTAINER_TOP_PADDING = 24;
const BOTTOM_PADDING = 100;
const COMPONENT_GAP = 16;

const Container = styled(BaseContainer)`
  padding: ${CONTAINER_TOP_PADDING}px
    ${(props: any) => props.theme.size.standardPadding}px ${BOTTOM_PADDING}px;
  background: ${(props: any) => props.theme.colors.background};
`;

const Title = styled(TitleItem)`
  margin-top: ${COMPONENT_GAP}px;
`;

const Divider = styled.View`
  margin-top: ${COMPONENT_GAP}px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[2]};
`;

interface Props {
  update: (event: GestureResponderEvent) => void;
}

function UpdatePasswordPresenter({update}: Props): JSX.Element {
  return (
    <Container
      button={<PrimaryButton title={'비밀번호 변경'} onPress={update} />}>
      <UpdateNoticeCardView />
      <Title mainText={'현재 비밀번호'} />
      <BasicInput placeholder={'현재 비밀번호를 입력해주세요'} secure={true} />
      <Divider />
      <Title mainText={'새 비밀번호'} />
      <ErrorViewInput placeholder={'영문/숫자 6자 이상 입력해주세요'} />
      <TitleItem mainText={'새 비밀번호 확인'} />
      <ErrorViewInput placeholder={'비밀번호를 다시 입력해주세요'} />
    </Container>
  );
}

export default UpdatePasswordPresenter;
