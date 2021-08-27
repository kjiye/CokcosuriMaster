import {BasicInput, LimitTextArea} from '../../../components/Input';
import BaseContainer from '../../../components/BaseContainer';
import {CategoryType} from '../../../models/common';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
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
  title: string;
  content: string;
  selectedCategory?: CategoryType;
  onChangeTitle: (text: string) => void;
  onChangeContent: (text: string) => void;
  showSelectionModal: (event: GestureResponderEvent) => void;
  btnDisabled: boolean;
  okPress: (event: GestureResponderEvent) => void;
}

function QnARegPresenter({
  title,
  content,
  selectedCategory,
  onChangeTitle,
  onChangeContent,
  showSelectionModal,
  btnDisabled,
  okPress,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('ok')}
          onPress={okPress}
          disabled={btnDisabled}
        />
      }>
      <ScrollView>
        <ContentContainer>
          <Title title={I18n.t('QnA.title')} />
          <BasicInput
            placeholder={I18n.t('Placeholder.title')}
            value={title}
            onChange={onChangeTitle}
          />
          <Title title={I18n.t('QnA.reason')} />
          <SelectionView
            placeholder={I18n.t('Placeholder.qna_category')}
            onPress={showSelectionModal}
            selectedValue={selectedCategory}
          />
          <Title title={I18n.t('QnA.reason_content')} />
          <LimitTextArea
            placeholder={I18n.t('Placeholder.qna_reason')}
            limit={300}
            currentCount={content.length}
            value={content}
            onChange={onChangeContent}
          />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default QnARegPresenter;
