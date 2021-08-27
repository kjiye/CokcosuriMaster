import React from 'react';
import {dateFormatting} from '../../utils/commonUtils';
import {getNotices_getNotices_notices} from '../../../__generated__/getNotices';
import styled from 'styled-components/native';

const TitleText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const InfoText = styled.Text`
  margin-top: 6px;
  font-size: 10px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

interface Props {
  item: getNotices_getNotices_notices;
}

function NoticeListTitleItem({item}: Props): JSX.Element {
  return (
    <>
      <TitleText>{item.title}</TitleText>
      <InfoText>{dateFormatting(item.createAt)}</InfoText>
    </>
  );
}

export default NoticeListTitleItem;
