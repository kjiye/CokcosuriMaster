import React from 'react';
import RoundedLabel from './RoundedLabel';
import styled from 'styled-components/native';

const INNER_PADDING = 5;
const WRAPPER_LEFT_PADDING = 12;
const BORDER_RADIUS = 10;

const Wrapper = styled.View<{allRadius: boolean}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${INNER_PADDING}px ${INNER_PADDING}px ${INNER_PADDING}px
    ${WRAPPER_LEFT_PADDING}px;
  background: ${(props: any) => props.theme.colors.primary};
  ${({allRadius}) => `
    ${
      allRadius
        ? `border-radius : ${BORDER_RADIUS}px`
        : `border-top-left-radius : ${BORDER_RADIUS}px;
       border-top-right-radius : ${BORDER_RADIUS}px;`
    }
  `}
`;

const Message = styled.Text`
  flex: 1;
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: 500;
  color: ${(props: any) => props.theme.colors.grey[0]};
`;

interface Props {
  message?: string;
  labelLeftText?: string;
  labelRightText?: string;
  allRadius?: boolean;
}

function MessageBarLabel({
  message = '',
  labelLeftText = '',
  labelRightText = '',
  allRadius = false,
}: Props): JSX.Element {
  return (
    <Wrapper allRadius={allRadius}>
      <Message numberOfLines={1}>{message}</Message>
      <RoundedLabel leftText={labelLeftText} rightText={labelRightText} />
    </Wrapper>
  );
}

export default MessageBarLabel;
