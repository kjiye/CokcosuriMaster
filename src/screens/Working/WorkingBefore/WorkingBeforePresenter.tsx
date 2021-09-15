import {GestureResponderEvent, ScrollView} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import BaseContainer from '../../../components/BaseContainer';
import EmphasisTitleItem from '../EmphasisTitleItem';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import {ImageSelector} from '../../../components/Image';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import WorkingNoticeView from '../WorkingNoticeView';
import {getWorkDetail_getWorkDetail_work} from '../../../../__generated__/getWorkDetail';

const IMG_MARGIN_TOP = 12;
const BOTTOM_PADDING = 100;

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  ${(props: any) => `
padding: ${props.theme.size.standardPadding}px ${props.theme.size.standardPadding}px ${BOTTOM_PADDING}px ${props.theme.size.standardPadding}px`}
`;

const NextImageSelector = styled(ImageSelector)`
  margin-top: ${IMG_MARGIN_TOP}px;
`;

interface Props {
  item: getWorkDetail_getWorkDetail_work;
  total: number;
  addImage: (image: Image) => void;
  deleteImage: (index: number) => void;
  okPress: (event: GestureResponderEvent) => void;
}

function WorkingBeforePresenter({
  item,
  total,
  addImage,
  deleteImage,
  okPress,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('ok')}
          disabled={total < 3}
          onPress={okPress}
        />
      }>
      <ScrollView scrollIndicatorInsets={{right: 0.1}}>
        <ContentContainer>
          <WorkingNoticeView
            itemInfo={item}
            status={I18n.t('WorkingBefore.status')}
            endingWord={I18n.t('WorkingBefore.ending_word')}
            message={I18n.t('WorkingBefore.message')}
            middleTitle={I18n.t('WorkingBefore.middleTitle')}
          />
          <EmphasisTitleItem
            status={I18n.t('before')}
            color={theme.colors.primary}
          />
          <ImageSelector
            desc={I18n.t('Image.first_upload')}
            onAdd={addImage}
            onDelete={() => {
              deleteImage(0);
            }}
          />
          <NextImageSelector
            desc={I18n.t('Image.second_upload')}
            onAdd={addImage}
            onDelete={() => {
              deleteImage(1);
            }}
          />
          <NextImageSelector
            desc={I18n.t('Image.third_upload')}
            onAdd={addImage}
            onDelete={() => {
              deleteImage(2);
            }}
          />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default WorkingBeforePresenter;
