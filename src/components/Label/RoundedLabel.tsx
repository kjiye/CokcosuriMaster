import {BLACK_1, GRAY_5, PRIMARY_MAIN, WHITE} from '../../constants/color';
import {LARGE, MEDIUM, MINI, SMALL} from '../../constants/size';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  width: 100px;
  padding: 6px 0;
  align-items: center;
  border-radius: ${MINI}px;
  background: ${WHITE};
`;

const InfoText = styled.Text`
  font-size: ${SMALL}px;
  color: ${BLACK_1};
`;

const MiddleBar = styled.Text`
  font-size: ${LARGE}px;
  color: ${GRAY_5};
`;

const PointText = styled(InfoText)`
  color: ${PRIMARY_MAIN};
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
