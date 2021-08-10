import {Platform, StyleProp, ViewProps, ViewStyle} from 'react-native';
import styled, {css} from 'styled-components/native';
import {INNER_MARGIN} from '../../constants/size';
import React from 'react';
import {WHITE} from '../../constants/color';

const Wrapper = styled.View<{hasPadding: boolean; hasShadow: boolean}>`
  background-color: ${WHITE};
  border-radius: 10px;
  ${({hasPadding}) =>
    hasPadding &&
    css`
      padding: ${INNER_MARGIN}px;
    `}
  ${({hasShadow}) =>
    hasShadow &&
    css`
      ${Platform.OS === 'ios'
        ? `
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.16);
      `
        : `elevation: 8;`}
    `}
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  hasPadding?: boolean;
  hasShadow?: boolean;
  children: JSX.Element;
}

function CardView({
  style,
  hasPadding = true,
  hasShadow = true,
  children,
}: Props): JSX.Element {
  return (
    <Wrapper
      style={style as StyleProp<ViewProps>}
      hasPadding={hasPadding}
      hasShadow={hasShadow}>
      {children}
    </Wrapper>
  );
}

export default CardView;
