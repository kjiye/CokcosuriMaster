import {AppTheme} from '../../../themes/theme';
import BaseContainer from '../../../components/BaseContainer';
import I18n from 'i18n-js';
import {ImageSelector} from '../../../components/Image';
import {LimitTextArea} from '../../../components/Input';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {GestureResponderEvent, ScrollView} from 'react-native';
import {TitleItem} from '../../../components/Item';
import WorkingNoticeView from '../WorkingNoticeView';
import styled from 'styled-components/native';

const {colors}: any = AppTheme;

const IMG_MARGIN_TOP = 12;
const BOTTOM_PADDING = 100;

const Container = styled(BaseContainer)`
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
  okPress: (event: GestureResponderEvent) => void;
}

function WorkingImpossiblePresenter({okPress}: Props): JSX.Element {
  return (
    <Container button={<PrimaryButton title={'완료'} onPress={okPress} />}>
      <ScrollView>
        <ContentContainer>
          <WorkingNoticeView
            status={I18n.t('WorkingImpossible.status')}
            statusColor={colors.errorDark}
            endingWord={I18n.t('WorkingImpossible.ending_word')}
            message={I18n.t('WorkingImpossible.message')}
            middleTitle={I18n.t('WorkingImpossible.middleTitle')}
          />
          <Title mainText={I18n.t('WorkingImpossible.reason')} />
          <LimitTextArea
            placeholder={I18n.t('WorkingImpossible.reason_placeholder')}
            limit={300}
            currentCount={0}
          />
          <Title mainText={I18n.t('WorkingImpossible.image')} />
          <ImageSelector desc={I18n.t('Image.first_upload')} />
          <ImageSelector
            style={{...marginTop}}
            desc={I18n.t('Image.second_upload')}
          />
          <ImageSelector
            style={{...marginTop}}
            desc={I18n.t('Image.third_upload')}
          />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default WorkingImpossiblePresenter;
