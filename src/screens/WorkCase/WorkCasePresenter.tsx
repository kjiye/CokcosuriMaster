/* eslint-disable @typescript-eslint/no-unused-vars */
import {BasicInput, LimitTextArea} from '../../components/Input';
import {TitleItem, WorkListItem} from '../../components/Item';
import I18n from '../../utils/i18nHelpers';
import {ImageCheckboxItem} from '../../components/Checkbox/ImageCheckbox';
import {ImageData} from '../../models/common';
import KeyboardBaseContainer from '../../components/KeyboardBaseContainer';
import LoadingView from '../../components/View/LoadingView';
import {PrimaryButton} from '../../components/Button';
import React from 'react';
import RequiredTitleItem from '../QnA/QnAReg/RequiredTitleItem';
import {ScrollView} from 'react-native';
import {getWorkDetail_getWorkDetail_work} from '../../../__generated__/getWorkDetail';
import styled from 'styled-components/native';

const TOP_PADDING = 24;
const BOTTOM_PADDING = 100;
const COMPONENT_GAP = 16;

const Container = styled(KeyboardBaseContainer)`
  background: ${(props: any) => props.theme.colors.grey_background};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${TOP_PADDING}px
    ${(props: any) => props.theme.size.standardPadding}px ${BOTTOM_PADDING}px;
`;

const RequiredTitle = styled(RequiredTitleItem)`
  margin-top: ${COMPONENT_GAP}px;
`;

const OptionalTitle = styled(TitleItem)`
  margin-top: ${COMPONENT_GAP}px;
`;

const Explain = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.tiny}px;
  color: ${(props: any) => props.theme.colors.primary};
`;

const ImageCheckbox = styled(ImageCheckboxItem)`
  margin-top: ${(props: any) => props.theme.size.margin}px;
`;

const InputStyle = {
  borderWidth: 0,
};

interface Props {
  workLoading: boolean;
  work: getWorkDetail_getWorkDetail_work;
  title: string;
  content?: string;
  thumbImage?: ImageData;
  btnDisabled: boolean;
  onChangeTitle: (text: string) => void;
  onChangeContent: (text: string) => void;
  selectThumbImage: (item: ImageData) => void;
  okPress: () => void;
}

function WorkCasePresenter({
  workLoading,
  work,
  title,
  content = '',
  thumbImage,
  btnDisabled,
  onChangeTitle,
  onChangeContent,
  selectThumbImage,
  okPress,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.done')}
          onPress={okPress}
          disabled={btnDisabled}
        />
      }>
      <ScrollView scrollIndicatorInsets={{right: 0.1}}>
        <ContentContainer>
          {workLoading ? (
            <LoadingView />
          ) : (
            <WorkListItem
              item={work}
              useWriteCaseBtn={false}
              cardPressDisabled={true}
            />
          )}
          <RequiredTitle title={I18n.t('Title.case_title')} />
          <BasicInput
            style={{...InputStyle}}
            placeholder={I18n.t('Placeholder.title')}
            value={title}
            onChange={onChangeTitle}
          />
          <OptionalTitle mainText={I18n.t('Title.case_content')} />
          <LimitTextArea
            placeholder={I18n.t('Placeholder.case_content')}
            limit={300}
            currentCount={content.length}
            value={content}
            onChange={onChangeContent}
          />
          <RequiredTitle title={I18n.t('Title.thumbnail')} />
          <Explain>{I18n.t('WorkCase.thumbnail_explain')}</Explain>
          {work?.afterImage &&
            work.afterImage.length > 0 &&
            work.afterImage.map((v: any, i: number) => {
              return (
                <ImageCheckbox
                  key={i.toString()}
                  checked={thumbImage?.id === v.id}
                  imageValue={v}
                  onPress={() => {
                    selectThumbImage(v);
                  }}
                />
              );
            })}
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default WorkCasePresenter;
