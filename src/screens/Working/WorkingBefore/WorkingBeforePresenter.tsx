import {AppTheme} from '../../../themes/theme';
import BaseContainer from '../../../components/BaseContainer';
import EmphasisTitleItem from '../EmphasisTitleItem';
import I18n from '../../../utils/i18nHelpers';
import {ImageSelector} from '../../../components/Image';
import React from 'react';
import {ScrollView} from 'react-native';
import WorkingNoticeView from '../WorkingNoticeView';
import styled from 'styled-components/native';

const {colors}: any = AppTheme;

const IMG_MARGIN_TOP = 12;

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  padding: ${(props: any) => props.theme.size.standardPadding}px;
`;

const marginTop = {
  marginTop: IMG_MARGIN_TOP,
};

function WorkingBeforePresenter(): JSX.Element {
  return (
    <Container>
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

export default WorkingBeforePresenter;
