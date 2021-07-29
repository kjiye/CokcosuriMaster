import {INNER_MARGIN, MEDIUM, STANDARD} from '../../constants/size';
import React from 'react';
import SingleButton from './SingleButton';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding: ${INNER_MARGIN}px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  leftBtnName: string;
  leftIcon?: JSX.Element;
  leftPrimaryColored?: boolean;
  rightBtnName: string;
  rightIcon?: JSX.Element;
  rightPrimaryColored?: boolean;
}

function TwoButtonGroup({
  leftBtnName,
  leftIcon,
  leftPrimaryColored,
  rightBtnName,
  rightIcon,
  rightPrimaryColored,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <SingleButton
        name={leftBtnName}
        icon={leftIcon}
        primaryColored={leftPrimaryColored}
      />
      <SingleButton
        name={rightBtnName}
        icon={rightIcon}
        primaryColored={rightPrimaryColored}
      />
    </Wrapper>
  );
}

export default TwoButtonGroup;
