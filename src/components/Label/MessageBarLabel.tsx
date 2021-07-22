import {MEDIUM, SMALL, TINY} from '../../constants/size';
import {PRIMARY_MAIN, WHITE} from '../../constants/color';
import React from 'react';
import RoundedLabel from './RoundedLabel';
import styled from 'styled-components/native';

const Wrapper = styled.View<{allRadius: boolean}>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px ${TINY}px;
  background: ${PRIMARY_MAIN};
  ${({allRadius}) => `
    ${
      allRadius
        ? `border-radius : 19px`
        : `border-top-left-radius : ${SMALL}px;
       border-top-right-radius : ${SMALL}px;`
    }
  `}
`;

const Message = styled.Text`
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
