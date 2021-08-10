import React from 'react';
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

function NoticeListTitleItem(): JSX.Element {
  return (
    <>
      <TitleText>시공 관련 업데이트 사항 공지</TitleText>
      <InfoText>2021.08.01</InfoText>
    </>
  );
}

export default NoticeListTitleItem;
