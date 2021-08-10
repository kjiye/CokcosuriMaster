import {INNER_MARGIN, MEDIUM, STANDARD} from '../../constants/size';
import {GestureResponderEvent} from 'react-native';
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
  onLeftPress?: (event: GestureResponderEvent) => void;
  onRightPress?: (event: GestureResponderEvent) => void;
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
