import React from 'react';
import styled from 'styled-components/native';

const BORDER_RADIUS = 10;

const Wrapper = styled.View`
  padding: 6px 8px;
  align-items: center;
  border-radius: ${BORDER_RADIUS}px;
  background: ${(props: any) => props.theme.colors.background};
`;

const InfoText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const MiddleBar = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.large}px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

const PointText = styled(InfoText)`
  color: ${(props: any) => props.theme.colors.primary};
`;

interface Props {
  leftText: string;
  rightText: string;
}

function RoundedLabel({leftText, rightText}: Props): JSX.Element {
  return (
    <Wrapper>
      <InfoText>
        {leftText}
        <MiddleBar>{' | '}</MiddleBar>
        <PointText>{rightText}</PointText>
      </InfoText>
    </Wrapper>
  );
}

export default RoundedLabel;
