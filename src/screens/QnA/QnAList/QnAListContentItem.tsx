import React from 'react';
import styled from 'styled-components/native';

const ContentText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  line-height: 19px;
`;

function QnAListContentItem(): JSX.Element {
  return (
    <ContentText>
      혹시 계정정보를 아이디, 비번 모두 바꾸는 것도 가능할까요?
    </ContentText>
  );
}

export default QnAListContentItem;
