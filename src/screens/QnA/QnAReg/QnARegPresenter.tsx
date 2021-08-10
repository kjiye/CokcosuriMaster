import {BasicInput, LimitTextArea} from '../../../components/Input';
import BaseContainer from '../../../components/BaseContainer';
import {GestureResponderEvent} from 'react-native';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import RequiredTitleItem from './RequiredTitleItem';
import {ScrollView} from 'react-native-gesture-handler';
import {SelectionView} from '../../../components/View';
import styled from 'styled-components/native';

const COMPONENT_GAP = 16;

const Container = styled(BaseContainer)`
  flex: 1;
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: 0 ${(props: any) => props.theme.size.standardPadding}px;
`;

const Title = styled(RequiredTitleItem)`
  margin-top: ${COMPONENT_GAP}px;
`;

interface Props {
  showSelectionModal: (event: GestureResponderEvent) => void;
  ok: (event: GestureResponderEvent) => void;
}

function QnARegPresenter({showSelectionModal, ok}: Props): JSX.Element {
  return (
    <Container button={<PrimaryButton title={'확인'} onPress={ok} />}>
      <ScrollView>
        <ContentContainer>
          <Title title={'제목'} />
          <BasicInput placeholder={'제목을 입력해주세요'} />
          <Title title={'문의사유'} />
          <SelectionView
            placeholder={'문의 유형을 선택해주세요'}
            onPress={showSelectionModal}
          />
          <Title title={'문의사유 입력'} />
          <LimitTextArea
            placeholder={'문의사유를 입력해주세요'}
            limit={300}
            currentCount={0}
          />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default QnARegPresenter;
