import {
  Dimensions,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');
const WIDTH = width - 120;
const HEIGHT = 48;
const BORDER_RADIUS = 24;

const Container = styled.TouchableOpacity<{disabled?: boolean}>`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  border-radius: ${BORDER_RADIUS}px;
  flex-direction: row;
  background-color: ${(props: any) =>
    props.disabled ? props.theme.colors.grey[4] : props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

const Icon = styled.View`
  position: absolute;
  left: 20px;
`;

const Title = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.big}px;
  font-weight: bold;
  text-align: center;
  color: ${(props: any) => props.theme.colors.grey[0]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
  disabled?: boolean;
  icon?: JSX.Element;
  onPress?: (event: GestureResponderEvent) => void;
}

function PrimaryButton({
  style,
  title,
  disabled = false,
  icon,
  onPress,
}: Props): JSX.Element {
  return (
    <Container
      disabled={disabled}
      style={style}
      onPress={(event: GestureResponderEvent) => {
        if (!disabled && onPress) {
          onPress(event);
        }
      }}>
      {icon && <Icon>{icon}</Icon>}
      <Title numberOfLines={1}>{title}</Title>
    </Container>
  );
}

export default PrimaryButton;
