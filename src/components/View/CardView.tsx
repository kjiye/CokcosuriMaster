import {Platform, StyleProp, ViewProps, ViewStyle} from 'react-native';
import styled, {css} from 'styled-components/native';
import React from 'react';

const Wrapper = styled.View<{hasPadding: boolean; hasShadow: boolean}>`
  background-color: ${(props: any) => props.theme.colors.background};
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
  ${({hasPadding, theme}: any) =>
    hasPadding &&
    css`
      padding: ${theme.size.innerMargin}px;
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

const WrapperButton = styled.TouchableOpacity<{
  hasPadding: boolean;
  hasShadow: boolean;
}>`
  background-color: ${(props: any) => props.theme.colors.background};
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
  ${({hasPadding, theme}: any) =>
    hasPadding &&
    css`
      padding: ${theme.size.innerMargin}px;
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
  isButton?: boolean;
  onPress?: () => void;
}

function CardView({
  style,
  hasPadding = true,
  hasShadow = true,
  children,
  isButton = false,
  onPress,
}: Props): JSX.Element {
  return isButton ? (
    <WrapperButton
      style={style as StyleProp<ViewProps>}
      hasPadding={hasPadding}
      hasShadow={hasShadow}
      onPress={onPress}>
      {children}
    </WrapperButton>
  ) : (
    <Wrapper
      style={style as StyleProp<ViewProps>}
      hasPadding={hasPadding}
      hasShadow={hasShadow}>
      {children}
    </Wrapper>
  );
}

export default CardView;
