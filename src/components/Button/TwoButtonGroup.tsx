import {GestureResponderEvent} from 'react-native';
import {INNER_MARGIN} from '../../constants/size';
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
  // leftBtnPress?: (event: GestureResponderEvent) => void;
  rightBtnName: string;
  rightIcon?: JSX.Element;
  rightPrimaryColored?: boolean;
  onLeftPress?: (event: GestureResponderEvent) => void;
  onRightPress?: (event: GestureResponderEvent) => void;
  // rightBtnPress?: (event: GestureResponderEvent) => void;
}

function TwoButtonGroup({
  leftBtnName,
  leftIcon,
  leftPrimaryColored,
  rightBtnName,
  rightIcon,
  rightPrimaryColored,
  onLeftPress,
  onRightPress,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <SingleButton
        name={leftBtnName}
        icon={leftIcon}
        primaryColored={leftPrimaryColored}
        onPress={onLeftPress}
      />
      <SingleButton
        name={rightBtnName}
        icon={rightIcon}
        primaryColored={rightPrimaryColored}
        onPress={onRightPress}
      />
    </Wrapper>
  );
}

export default TwoButtonGroup;
