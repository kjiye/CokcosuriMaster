import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const INNER_PADDING = 10;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${INNER_PADDING}px 0;
  background: ${(props: any) => props.theme.colors.primary};
  border-bottom-left-radius: ${(props: any) => props.theme.size.borderRadius}px;
  border-bottom-right-radius: ${(props: any) =>
    props.theme.size.borderRadius}px;
`;

const ButtonText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: 500;
  color: ${(props: any) => props.theme.colors.grey[0]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  name: string;
  onPress?: (event: GestureResponderEvent) => void;
}

function CardBottomButton({style, name, onPress}: Props): JSX.Element {
  return (
    <Button style={style} onPress={onPress}>
      <ButtonText>{name}</ButtonText>
    </Button>
  );
}

export default CardBottomButton;
