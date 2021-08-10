import {INNER_MARGIN, MEDIUM, STANDARD} from '../../constants/size';
import React from 'react';
import SingleButton from './SingleButton';
import styled from 'styled-components/native';
import {GestureResponderEvent} from 'react-native';

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
  leftBtnPress?: (event: GestureResponderEvent) => void;
  rightBtnName: string;
  rightIcon?: JSX.Element;
  rightPrimaryColored?: boolean;
  rightBtnPress?: (event: GestureResponderEvent) => void;
}

function TwoButtonGroup({
  leftBtnName,
  leftIcon,
  leftPrimaryColored,
  leftBtnPress,
  rightBtnName,
  rightIcon,
  rightPrimaryColored,
  rightBtnPress,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <SingleButton
        name={leftBtnName}
        icon={leftIcon}
        primaryColored={leftPrimaryColored}
        onPress={leftBtnPress}
      />
      <SingleButton
        name={rightBtnName}
        icon={rightIcon}
        primaryColored={rightPrimaryColored}
        onPress={rightBtnPress}
      />
    </Wrapper>
  );
}

export default TwoButtonGroup;
