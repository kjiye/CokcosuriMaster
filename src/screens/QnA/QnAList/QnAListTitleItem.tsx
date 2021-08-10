import React from 'react';
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

function QnAListTitleItem(): JSX.Element {
  return (
    <>
      <TitleWrapper>
        <CategoryText>기타문의</CategoryText>
        <TitleText>아이디/비밀번호를 다 바꿀 수 없나요?</TitleText>
      </TitleWrapper>
      <InfoWrapper>
        <InfoText>2021.08.01</InfoText>
        <InfoText>진행중</InfoText>
      </InfoWrapper>
    </>
  );
}

export default QnAListTitleItem;
