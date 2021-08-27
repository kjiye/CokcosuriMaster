import React from 'react';
import styled from 'styled-components/native';

const ContentText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  line-height: 19px;
`;

interface Props {
  content: string;
}

function NoticeListContentItem({content}: Props): JSX.Element {
  return <ContentText>{content}</ContentText>;
}

export default NoticeListContentItem;
