import I18n from '../../../utils/i18nHelpers';
import React from 'react';
import {dateFormatting} from '../../../utils/commonUtils';
import {getQnA_getQnA_qnas} from '../../../../__generated__/getQnA';
import styled from 'styled-components/native';

const INFO_VIEW_WIDTH = 85;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const CategoryText = styled(TitleText)`
  width: ${INFO_VIEW_WIDTH}px;
  color: ${(props: any) => props.theme.colors.primary};
`;

const InfoWrapper = styled(TitleWrapper)`
  margin-top: 6px;
`;

const InfoText = styled.Text`
  font-size: 10px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

const ReplyDone = styled(InfoText)`
  color: ${(props: any) => props.theme.colors.accent};
`;

interface Props {
  item: getQnA_getQnA_qnas;
}

function QnAListTitleItem({item}: Props): JSX.Element {
  return (
    <>
      <TitleWrapper>
        <CategoryText>{item.category?.name}</CategoryText>
        <TitleText>{item.title}</TitleText>
      </TitleWrapper>
      <InfoWrapper>
        <InfoText>{dateFormatting(item.createAt)}</InfoText>
        {item?.reply && item.reply.length > 0 ? (
          <ReplyDone>{I18n.t('QnA.reply_done')}</ReplyDone>
        ) : (
          <InfoText>{I18n.t('QnA.waiting')}</InfoText>
        )}
      </InfoWrapper>
    </>
  );
}

export default QnAListTitleItem;
