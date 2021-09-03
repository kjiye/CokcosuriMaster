import React from 'react';
import {InteractionManager} from 'react-native';
import styled from 'styled-components/native';
import {getQnA_getQnA_qnas} from '../../../../__generated__/getQnA';
import I18n from '../../../utils/i18nHelpers';

const ContentText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  line-height: 19px;
`;

const ReplyView = styled.View`
  margin-top: 12px;
  padding-left: ${(props: any) => props.theme.size.standardPadding}px;
`;

const AdminNameWrapper = styled.View`
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[3]};
`;

const AdminName = styled.Text`
  margin-top: ${(props: any) => props.theme.size.margin}px;
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.primary};
`;

interface Props {
  item: getQnA_getQnA_qnas;
}

function QnAListContentItem({item}: Props): JSX.Element {
  return (
    <>
      <ContentText>{item.content}</ContentText>
      {item.reply && item.reply.length > 0 && (
        <ReplyView>
          <AdminNameWrapper>
            <AdminName>{I18n.t('QnA.admin')}</AdminName>
          </AdminNameWrapper>
          <ContentText>
            {item.reply[item.reply.length - 1]?.content}
          </ContentText>
        </ReplyView>
      )}
    </>
  );
}

export default QnAListContentItem;
