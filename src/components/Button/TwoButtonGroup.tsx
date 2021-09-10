import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
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
  style?: StyleProp<ViewStyle>;
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
  style,
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
    <Wrapper style={style}>
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
