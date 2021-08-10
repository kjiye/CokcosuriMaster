import {AppTheme} from '../../../themes/theme';
import BaseContainer from '../../../components/BaseContainer';
import EmphasisTitleItem from '../EmphasisTitleItem';
import I18n from '../../../utils/i18nHelpers';
import {ImageSelector} from '../../../components/Image';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {ScrollView} from 'react-native';
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

const NextImageSelector = styled(ImageSelector)`
  margin-top: ${IMG_MARGIN_TOP}px;
`;

function WorkingBeforePresenter(): JSX.Element {
  return (
    <Container button={<PrimaryButton title={'완료'} />}>
      <ScrollView>
        <ContentContainer>
          <WorkingNoticeView
            status={I18n.t('WorkingBefore.status')}
            endingWord={I18n.t('WorkingBefore.ending_word')}
            message={I18n.t('WorkingBefore.message')}
            middleTitle={I18n.t('WorkingBefore.middleTitle')}
          />
          <EmphasisTitleItem status={'전'} color={colors.primary} />
          <ImageSelector desc={I18n.t('Image.first_upload')} />
          <NextImageSelector desc={I18n.t('Image.second_upload')} />
          <NextImageSelector desc={I18n.t('Image.third_upload')} />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default WorkingBeforePresenter;
