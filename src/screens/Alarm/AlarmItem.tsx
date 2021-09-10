import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  ${(props: any) => `
    padding: ${props.theme.size.innerMargin}px ${props.theme.size.standardPadding}px;
  `}
`;

const MainText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const PointedText = styled(MainText)`
  color: ${(props: any) => props.theme.colors.primary};
`;

function AlarmItem(): JSX.Element {
  return (
    <Container>
      제목
      <PointedText>작업 N시간 전</PointedText>입니다
    </Container>
  );
}

export default AlarmItem;
