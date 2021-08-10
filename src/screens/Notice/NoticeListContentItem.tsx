import React from 'react';
import styled from 'styled-components/native';

const ContentText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  line-height: 19px;
`;

function NoticeListContentItem(): JSX.Element {
  return <ContentText>공지 내용</ContentText>;
}

export default NoticeListContentItem;
