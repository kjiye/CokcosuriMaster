import {GestureResponderEvent} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  padding: 4px 20px;
`;

const ButtonText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

interface Props {
  name: string;
  onPress?: (event: GestureResponderEvent) => void;
}

function TinyHiddenButton({name, onPress}: Props): JSX.Element {
  return (
    <Button onPress={onPress}>
      <ButtonText>{name}</ButtonText>
    </Button>
  );
}

export default TinyHiddenButton;
