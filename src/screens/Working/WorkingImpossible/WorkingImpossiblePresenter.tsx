import {GestureResponderEvent, ScrollView} from 'react-native';
import {AppTheme} from '../../../themes/theme';
import I18n from 'i18n-js';
import {Image} from 'react-native-image-crop-picker';
import {ImageSelector} from '../../../components/Image';
import KeyboardBaseContainer from '../../../components/KeyboardBaseContainer';
import {LimitTextArea} from '../../../components/Input';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {TitleItem} from '../../../components/Item';
import WorkingNoticeView from '../WorkingNoticeView';
import {getWorkDetail_getWorkDetail_work} from '../../../../__generated__/getWorkDetail';
import styled from 'styled-components/native';

const {colors}: any = AppTheme;

const IMG_MARGIN_TOP = 12;
const BOTTOM_PADDING = 100;

const Container = styled(KeyboardBaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  ${(props: any) => `
  padding: ${props.theme.size.standardPadding}px ${props.theme.size.standardPadding}px ${BOTTOM_PADDING}px ${props.theme.size.standardPadding}px`}
`;

const Title = styled(TitleItem)`
  margin-top: ${(props: any) => props.theme.size.standardPadding}px;
`;

const marginTop = {
  marginTop: IMG_MARGIN_TOP,
};

interface Props {
  item: getWorkDetail_getWorkDetail_work;
  reason: string;
  imageTotal: number;
  onChangeReason: (text: string) => void;
  addImage: (image: Image) => void;
  deleteImage: (index: number) => void;
  okPress: (event: GestureResponderEvent) => void;
}

function WorkingImpossiblePresenter({
  item,
  reason,
  imageTotal,
  onChangeReason,
  addImage,
  deleteImage,
  okPress,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('ok')}
          onPress={okPress}
          disabled={!(imageTotal > 2 && reason.length > 0)}
        />
      }>
      <ScrollView scrollIndicatorInsets={{right: 0.1}}>
        <ContentContainer>
          <WorkingNoticeView
            itemInfo={item}
            status={I18n.t('WorkingImpossible.status')}
            statusColor={colors.errorDark}
            endingWord={I18n.t('WorkingImpossible.ending_word')}
            message={I18n.t('WorkingImpossible.message')}
            middleTitle={I18n.t('WorkingImpossible.middleTitle')}
          />
          <Title mainText={I18n.t('WorkingImpossible.reason')} />
          <LimitTextArea
            value={reason}
            placeholder={I18n.t('WorkingImpossible.reason_placeholder')}
            limit={300}
            currentCount={reason.length}
            onChange={onChangeReason}
          />
          <Title
            mainText={I18n.t('WorkingImpossible.image')}
            desc={'3장 필수'}
          />
          <ImageSelector
            desc={I18n.t('Image.first_upload')}
            onAdd={addImage}
            onDelete={() => {
              deleteImage(0);
            }}
          />
          <ImageSelector
            style={{...marginTop}}
            desc={I18n.t('Image.second_upload')}
            onAdd={addImage}
            onDelete={() => {
              deleteImage(0);
            }}
          />
          <ImageSelector
            style={{...marginTop}}
            desc={I18n.t('Image.third_upload')}
            onAdd={addImage}
            onDelete={() => {
              deleteImage(0);
            }}
          />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default WorkingImpossiblePresenter;
