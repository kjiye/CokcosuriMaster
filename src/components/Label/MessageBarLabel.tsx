import {PRIMARY_MAIN, WHITE} from '../../constants/color';
import {MEDIUM} from '../../constants/size';
import React from 'react';
import RoundedLabel from './RoundedLabel';
import styled from 'styled-components/native';

const INNER_PADDING = 5;
const WRAPPER_LEFT_PADDING = 12;
const BORDER_TOP_RADIUS = 14;
const BORDER_ALL_RADIUS = 10;

const Wrapper = styled.View<{allRadius: boolean}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${INNER_PADDING}px ${INNER_PADDING}px ${INNER_PADDING}px
    ${WRAPPER_LEFT_PADDING}px;
  background: ${PRIMARY_MAIN};
  ${({allRadius}) => `
    ${
      allRadius
        ? `border-radius : ${BORDER_ALL_RADIUS}px`
        : `border-top-left-radius : ${BORDER_TOP_RADIUS}px;
       border-top-right-radius : ${BORDER_TOP_RADIUS}px;`
    }
  `}
`;

const Message = styled.Text`
  flex: 1;
  font-size: ${MEDIUM}px;
  font-weight: 500;
  color: ${WHITE};
`;

interface Props {
  message: string;
  labelLeftText: string;
  labelRightText: string;
  allRadius?: boolean;
}

function MessageBarLabel({
  message,
  labelLeftText,
  labelRightText,
  allRadius = false,
}: Props): JSX.Element {
  return (
    <Wrapper allRadius={allRadius}>
      <Message>{message}</Message>
      <RoundedLabel leftText={labelLeftText} rightText={labelRightText} />
    </Wrapper>
  );
}

export default MessageBarLabel;
